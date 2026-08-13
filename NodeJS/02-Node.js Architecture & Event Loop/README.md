# 02. Node.js Architecture & Event Loop — Deep Dive

[⬅ Back to Node.js Roadmap](../README.md)

> The checklist version of this topic lives in [`NodeJS/README.md § 02`](../README.md#02-nodejs-architecture--event-loop). This file exists because "Node.js is single-threaded with an event loop" is a sentence you can recite without knowing what actually happens when 10,000 requests hit your server at once — this is the version with the diagrams and the bugs it explains.

---

## 📑 In This Deep Dive

- [Single-Threaded Model — What It Actually Means](#-single-threaded-model--what-it-actually-means)
- [Event-Driven Architecture](#-event-driven-architecture)
- [Blocking vs Non-Blocking I/O](#-blocking-vs-non-blocking-io)
- [libuv & the Thread Pool](#-libuv--the-thread-pool)
- [The Event Loop, Phase by Phase](#-the-event-loop-phase-by-phase)
- [Microtasks vs Macrotasks](#-microtasks-vs-macrotasks)
- [`process.nextTick` vs `setImmediate`](#-processnexttick-vs-setimmediate)
- [`setTimeout` vs `setImmediate`](#-settimeout-vs-setimmediate)

---

## 🧵 Single-Threaded Model — What It Actually Means

JavaScript itself runs on **one main thread** in Node.js — your code executes top to bottom, one line at a time, never two callbacks at once. But Node isn't single-threaded *overall*: libuv quietly uses a background thread pool for I/O so the main thread never has to sit and wait.

```js
console.log('1️⃣  Start');

setTimeout(() => {
  console.log('3️⃣  Timeout done'); // Runs last, even with 0ms delay
}, 0);

console.log('2️⃣  End');

// OUTPUT:  1️⃣ Start → 2️⃣ End → 3️⃣ Timeout done
```

The main thread finishes *everything* synchronous first — `setTimeout`'s callback has to wait its turn, no matter how small the delay.

```js
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/fast') {
    res.end('Fast response!'); // ✅ instant — never blocked by other requests
  }
  if (req.url === '/file') {
    // ✅ Handed off to libuv — main thread stays FREE for other requests
    fs.readFile('./data.txt', 'utf8', (err, data) => {
      res.end(data || 'File loaded!');
    });
  }
});

server.listen(3000);
```

```
3 users hit /file at the same time:

User A → readFile handed to libuv → thread FREE ──┐
User B → readFile handed to libuv → thread FREE ──┤ All 3 handled concurrently!
User C → readFile handed to libuv → thread FREE ──┘
         ↓
    Callbacks fire on the main thread as each file finishes reading
```

> **The golden rule:** Node.js is fast not because it's multi-threaded — but because it never waits. It delegates the waiting to libuv and moves on to the next thing.

---

## ⚡ Event-Driven Architecture

Node's flow is controlled by **events** — an HTTP request arriving, a file finishing a read, a timer firing — each triggering a registered **listener**.

```
User Action / System Event → Event Queue → Event Loop → Event Listener → Callback Runs
```

```js
const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
  console.log(`Request: ${req.url}`);
  res.end('Hello World!');
});

server.on('connection', (socket) => console.log('New client connected!'));
server.on('error', (err) => console.error(`Server error: ${err.message}`));

server.listen(3000);
```

This same pattern powers streams too — a 500MB file never gets loaded into memory at once, it fires `'data'` repeatedly as chunks arrive:

```js
const stream = fs.createReadStream('bigfile.txt');

stream.on('data', (chunk) => console.log(`Received ${chunk.length} bytes`));
stream.on('end', () => console.log('File reading complete ✅'));
stream.on('error', (err) => console.error('Read error:', err.message));
```

```
bigfile.txt (500MB)
│
▼
"data" ──▶ chunk 1 (64KB)
"data" ──▶ chunk 2 (64KB)
...
"end" ──▶ done! ✅        ✅ memory stays low — no full file loaded at once
```

**The bug this explains — an unhandled `'error'` event crashes the whole process:**

```js
// ❌ No 'error' listener registered
const emitter = new EventEmitter();
emitter.emit('error', new Error('DB connection lost'));
// Node's default behavior for EventEmitter: if an 'error' event has
// no listener, it throws the error and CRASHES the entire process —
// not just the operation that failed.
```

**Why this is dangerous:** unlike almost every other event, `'error'` is special-cased — EventEmitter assumes you *will* handle it, and treats silence as fatal. A single unhandled `'error'` from a database client, a socket, or a stream can take down an entire server process instantly, with no graceful degradation.

```js
// ✅ Always attach an 'error' listener to anything that can emit one
emitter.on('error', (err) => {
  console.error('Handled:', err.message); // logged, process survives
});
emitter.emit('error', new Error('DB connection lost'));
```

> **Rule of thumb:** any `EventEmitter`-based object you don't fully control (DB drivers, sockets, streams, child processes) needs an `'error'` listener, even if it just logs — silence is not safety here.

---

## 🚫 Blocking vs Non-Blocking I/O

**Blocking (synchronous):**

```js
console.log('1️⃣  Start');
const data = fs.readFileSync('file.txt', 'utf8'); // 🚨 FREEZES the whole thread
console.log('2️⃣  File data:', data);
console.log('3️⃣  End');
```

```
Timeline: [Start] ──▶ [😴 FROZEN reading file] ──▶ [End]
                        nobody else gets served!
```

**Non-blocking (asynchronous):**

```js
console.log('1️⃣  Start');
fs.readFile('file.txt', 'utf8', (err, data) => {
  console.log('3️⃣  File data:', data); // fires LATER
});
console.log('2️⃣  End'); // thread didn't wait!
```

```
Timeline: [Start] ──▶ [delegate file read] ──▶ [End] ──▶ [callback fires later]
                              ↓
                        OS reads file in background ✅
```

`fs`, `http`, database drivers, timers, sockets, `child_process` — all of these hand their work off to libuv instead of blocking.

**The bug this explains — accidentally blocking the event loop with synchronous CPU work:**

```js
// ❌ A "harmless-looking" synchronous computation inside a request handler
app.get('/report', (req, res) => {
  let total = 0;
  for (let i = 0; i < 5_000_000_000; i++) total += i; // pure CPU work, no I/O at all
  res.json({ total });
});
```

**Why this is worse than it looks:** this loop has nothing to hand off to libuv — there's no I/O involved, so nothing frees the main thread. While it runs, the *entire server* is frozen: every other request, every timer, every health-check ping, everyone waits, even users hitting completely unrelated routes. One slow endpoint can take down the whole app's responsiveness.

```js
// ✅ Offload CPU-heavy work off the main thread (see § 17 Worker Threads),
// or at minimum break it into chunks yielded back to the event loop
const { Worker } = require('worker_threads');

app.get('/report', (req, res) => {
  const worker = new Worker('./compute-report.js');
  worker.once('message', (total) => res.json({ total }));
});
```

> **Interview framing:** "non-blocking I/O" only protects you from I/O waiting — it does nothing for CPU-bound work. A `for` loop, a huge synchronous `JSON.parse`, or unbounded recursion blocks the event loop exactly as badly as a blocking file read.

---

## 🔧 libuv & the Thread Pool

**Network I/O** never touches a thread pool at all — the OS kernel handles sockets natively:

```js
const net = require('net');
// libuv uses: epoll (Linux), kqueue (macOS), IOCP (Windows)
const server = net.createServer((socket) => {
  socket.on('data', (data) => socket.write('Echo: ' + data));
});
```

```
Network request arrives → libuv tells OS "notify me when data arrives"
        → OS watches the socket (epoll/kqueue) → data arrives!
        → OS notifies libuv → callback queued → Event Loop runs it ✅

  ✅ Zero threads used — pure OS-level efficiency
```

But some operations have **no OS-level async API** — `fs` calls, `dns.lookup`, `crypto.pbkdf2`/`scrypt`, `zlib` compression — so libuv runs those on an internal **thread pool** (4 threads by default, tunable via `UV_THREADPOOL_SIZE`) instead of blocking the main thread:

```js
const crypto = require('crypto');

for (let i = 0; i < 4; i++) {
  crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
    console.log('done'); // all 4 finish around the same time — 4 threads, parallel
  });
}
// A 5th concurrent call would have to wait for a thread to free up.
```

```
UV_THREADPOOL_SIZE=4 (default)

fs.readFile, crypto.pbkdf2, dns.lookup, zlib.gzip
        │
        ▼
  Handed to libuv's thread pool (worker threads written in C)
        │
  4 threads process tasks in parallel
        │
        ▼
  Callback fires back on the main thread when done ✅

⚠️  Raise UV_THREADPOOL_SIZE if your app does heavy concurrent fs/crypto work
```

---

## 🔁 The Event Loop, Phase by Phase

Every iteration of the event loop ("tick") walks through six phases, in this fixed order, looping forever while there's work to do:

```
        ┌───────────────────────────┐
     ┌─▶│          TIMERS           │  setTimeout / setInterval callbacks
     │  └─────────────┬─────────────┘   whose delay has elapsed
     │  ┌─────────────▼─────────────┐
     │  │     PENDING CALLBACKS     │  I/O callbacks deferred from
     │  └─────────────┬─────────────┘   the previous loop iteration
     │  ┌─────────────▼─────────────┐
     │  │       IDLE, PREPARE       │  internal use only
     │  └─────────────┬─────────────┘
     │  ┌─────────────▼─────────────┐
     │  │           POLL            │  fetch new I/O events, run their
     │  └─────────────┬─────────────┘   callbacks — most work happens here
     │  ┌─────────────▼─────────────┐
     │  │           CHECK           │  setImmediate() callbacks,
     │  └─────────────┬─────────────┘   right after the poll phase
     │  ┌─────────────▼─────────────┐
     └──┤      CLOSE CALLBACKS      │  e.g. socket.on('close', ...)
        └───────────────────────────┘
                     │
                     └──▶ back to TIMERS, forever

  Microtasks (Promises, queueMicrotask) drain COMPLETELY after every
  single callback — not once per loop, but between every phase transition.
```

**Why the Poll phase matters most:** it's where Node actually waits for and processes new I/O — completed file reads, incoming HTTP requests, database responses. If there's nothing scheduled and no active timers, Node parks here until something arrives.

---

## ⏱️ Microtasks vs Macrotasks

Node's callback scheduling has two separate queue "tiers," and they don't drain the same way:

- **Microtasks** — Promise `.then`/`.catch`/`.finally` callbacks and `queueMicrotask()`. This queue is drained **completely** after every single callback that runs, before the loop is allowed to move anywhere else — not once per loop iteration, but between every phase transition.
- **Macrotasks** — `setTimeout`, `setInterval`, and I/O callbacks. Only **one** macrotask runs per relevant phase per loop tick, and the next phase only starts after the microtask queue has been fully drained again.

```js
Promise.resolve().then(() => console.log('microtask'));
setTimeout(() => console.log('macrotask'), 0);
console.log('synchronous');

// OUTPUT: synchronous → microtask → macrotask
// The microtask queue always finishes before the next macrotask, even
// though both were "scheduled" before any synchronous code had run.
```

> **Rule of thumb:** if you see unexpected ordering between a `.then()` and a `setTimeout`, remember microtasks always win — they're not competing on the same queue at all.

---

## `process.nextTick` vs `setImmediate`

Both sound like "run this soon," but they sit in genuinely different places in the loop:

```js
console.log('1: start');

setTimeout(() => console.log('2: setTimeout'), 0);      // macrotask (Timers phase)
setImmediate(() => console.log('3: setImmediate'));      // macrotask (Check phase)
process.nextTick(() => console.log('4: nextTick'));       // nextTick queue
Promise.resolve().then(() => console.log('5: promise'));  // microtask queue

console.log('6: end');

// OUTPUT:
// 1: start
// 6: end
// 4: nextTick     ← nextTick queue drains FIRST, even before microtasks
// 5: promise      ← then the microtask queue (Promises, queueMicrotask)
// 2/3: setTimeout / setImmediate  ← order between these two isn't
//                                    guaranteed at the top level
```

`process.nextTick()` runs before the microtask queue and before the event loop is even allowed to continue to its next phase. `setImmediate()` runs in the Check phase, right after Poll — a full loop phase later.

**The bug this explains — recursive `process.nextTick` starving all I/O:**

```js
// ❌ Each call schedules another nextTick before yielding control
function loop() {
  process.nextTick(loop);
}
loop();
// The nextTick queue is drained COMPLETELY before the event loop is
// allowed to move to the next phase — so if it keeps refilling itself,
// the loop NEVER reaches Poll. No incoming HTTP request, timer, or I/O
// callback ever runs again. The process looks "alive" but serves nothing.
```

**Why this is a real production risk, not just a toy example:** the same pattern shows up more subtly — e.g. a retry helper that reschedules itself with `process.nextTick` on every failure, or a queue drainer that keeps re-queuing itself recursively without ever awaiting real I/O. Each individual call looks harmless; the accumulated effect starves the server.

```js
// ✅ Use setImmediate (or setTimeout) instead, which yields to Poll/I/O
// between iterations rather than starving it
function loop() {
  setImmediate(loop); // lets the event loop breathe between iterations
}
loop();
```

> **Interview framing:** `process.nextTick` is *not* "a faster setTimeout" — it runs before the event loop is even allowed to continue to its next phase, which is exactly why recursive use of it can starve I/O in a way `setImmediate` never will.

---

## `setTimeout` vs `setImmediate`

Both are macrotasks, but they belong to different phases — `setTimeout` to Timers, `setImmediate` to Check — and that placement decides their relative order:

```js
setTimeout(() => console.log('timeout'), 0);
setImmediate(() => console.log('immediate'));
// At the TOP LEVEL, order is NOT guaranteed — it depends on process
// startup timing and can flip between runs.
```

```js
const fs = require('fs');

fs.readFile(__filename, () => {
  setTimeout(() => console.log('timeout'), 0);
  setImmediate(() => console.log('immediate'));
  // INSIDE an I/O callback, order IS guaranteed:
  // 'immediate' always logs before 'timeout' — the Check phase
  // (setImmediate) comes right after Poll (where this I/O callback
  // is running), while Timers (setTimeout) is a full lap away.
});
```

> **Interview framing:** if asked "which runs first, `setTimeout(fn, 0)` or `setImmediate(fn)`," the honest answer is "it depends where you call it from" — not guaranteed at the top level, but deterministic inside an I/O callback.

---

💡 **[Interview Q&A for this topic →](./interview-qa.md)**
