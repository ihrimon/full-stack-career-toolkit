# 03. Core Modules — Deep Dive

[⬅ Back to Node.js Roadmap](../README.md)

> The checklist version of this topic lives in [`NodeJS/README.md § 03`](../README.md#03-core-modules). Core modules are what you get from Node.js with zero `npm install` — this file covers the ten you'll reach for constantly, briefly but with the gotchas that actually bite in practice.

## 📑 In This Deep Dive

- [File System (`fs`)](#-file-system-fs)
- [Path Module](#-path-module)
- [HTTP & HTTPS Module](#-http--https-module)
- [URL Module](#-url-module)
- [Events & EventEmitter](#-events--eventemitter)
- [Buffer](#-buffer)
- [Streams (Intro)](#-streams-intro)
- [OS Module](#-os-module)
- [Crypto](#-crypto)
- [Timers](#-timers)

---

## 📁 File System (`fs`)

`fs` provides file and directory operations, in three flavors: synchronous (`readFileSync`), callback-based async (`readFile`), and promise-based async (`fs.promises.readFile`) — prefer the promise version with `async`/`await` for new code.

```js
/* Real-World — Copy a large file with a progress bar */
const fs = require('fs');
const path = require('path');

async function copyWithProgress(src, dest) {
  const { size } = await fs.promises.stat(src);
  let transferred = 0;

  const readStream = fs.createReadStream(src);
  const writeStream = fs.createWriteStream(dest);

  readStream.on('data', (chunk) => {
    transferred += chunk.length;
    process.stdout.write(`\rCopying... ${((transferred / size) * 100).toFixed(1)}%`);
  });

  readStream.pipe(writeStream);
  writeStream.on('finish', () => console.log(`\nCopied ${path.basename(src)} → ${dest} ✅`));
}
```

```
Quick Reference
──────────────────────────────────────────────────────────
fs.readFile()               ✅ async  read small–medium files
fs.readFileSync()           ❌ sync   startup config only
fs.promises.readFile()      ✅ async  modern await style
fs.mkdir(dir, {recursive})  ✅ async  create nested directories
fs.watch()                  🔁 event  watch file/dir (unreliable — use chokidar in prod)
fs.createReadStream()       🌊 stream read large files in chunks
```

> ⚠️ `readFileSync`/`writeFileSync` block the entire thread — fine at startup (reading a config file once), never inside a request handler. Use streams for anything larger than ~50MB.

---

## 🗂️ Path Module

`path` builds and parses file paths safely and cross-platform — never concatenate path strings with `+` or template literals, since `/` vs `\` differs between Linux/macOS and Windows.

```js
const path = require('path');

path.join('a', 'b', 'c');              // "a/b/c"
path.resolve('a', 'b');                // "/cwd/a/b"  (always absolute)
path.basename('/dir/file.txt');        // "file.txt"
path.extname('file.tar.gz');           // ".gz" only — not ".tar.gz"
path.dirname('/dir/file.txt');         // "/dir"
```

**The bug this explains — trusting a user-supplied filename:**

```js
// ❌ A user-controlled filename used directly in a path
const filePath = path.join(uploadsDir, req.body.filename);
// If req.body.filename is "../../../etc/passwd", this escapes uploadsDir entirely.
```

```js
// ✅ Strip any directory traversal by taking only the basename first
const safeFilePath = path.join(uploadsDir, path.basename(req.body.filename));
// path.basename() drops any "../" segments — the result can never leave uploadsDir.
```

> **Rule of thumb:** any time a path segment comes from user input, run it through `path.basename()` before joining — this is the single most common file-upload security bug.

---

## 🌐 HTTP & HTTPS Module

`http.createServer()` is the foundation everything else (Express, Fastify) is built on — a callback fires per request with a `req` (readable stream) and `res` (writable stream) pair.

```js
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok' }));
    return;
  }
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not Found');
});

server.listen(3000);
```

```
Request/Response cycle:

Client ──▶ req arrives ──▶ callback runs ──▶ res.writeHead(status, headers)
                                          ──▶ res.write(body)   (optional, repeatable)
                                          ──▶ res.end()          ← REQUIRED to finish
```

**The bug this explains — a hung request:**

```js
// ❌ Forgetting res.end()
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.write('partial response');
  // no res.end() — the client's connection just hangs, waiting forever
});
```

**Why this breaks:** Node doesn't consider a response "finished" until `res.end()` is called, even if you already wrote data with `res.write()`. Without it, the underlying TCP connection stays open — the client spins on a loading state, and if this happens repeatedly, open connections pile up and can exhaust the server's connection limit.

---

## 🔗 URL Module

The `URL` class parses a URL string into its structural parts — far safer than manual string splitting on `?` and `&`.

```js
const { URL } = require('url');

const myURL = new URL('https://api.example.com/search?q=node&page=2#results');

myURL.hostname;              // "api.example.com"
myURL.pathname;               // "/search"
myURL.searchParams.get('q');  // "node"
myURL.searchParams.get('page'); // "2"
```

```
https://api.example.com/search?q=node&page=2#results
└─┬──┘   └───────┬─────┘└──┬──┘└──────┬──────┘└──┬──┘
protocol      hostname   pathname   searchParams  hash
```

`URLSearchParams` (accessible via `myURL.searchParams`, or standalone) also handles building query strings correctly — `.set()`, `.append()`, `.toString()` all handle encoding automatically, which manual string concatenation reliably gets wrong for special characters.

---

## 📢 Events & EventEmitter

Most of Node's core APIs (`http.Server`, streams, `process`) are built on `EventEmitter` — an object that can `.emit()` named events and let other code `.on()` (listen to) them. The deep mechanics and the unhandled-`'error'`-crashes-your-process bug are covered in [§ 02 Event-Driven Architecture](../02-Node.js%20Architecture%20%26%20Event%20Loop/README.md#-event-driven-architecture); this section covers the API surface.

```js
const { EventEmitter } = require('events');

class OrderTracker extends EventEmitter {}
const tracker = new OrderTracker();

const onShipped = (id) => console.log(`Order ${id} shipped`);
tracker.on('shipped', onShipped);        // listen every time
tracker.once('created', (id) => console.log(`Order ${id} created`)); // listen ONCE only

tracker.emit('created', 1001);
tracker.emit('shipped', 1001);

tracker.off('shipped', onShipped);       // stop listening (a.k.a. removeListener)
```

**The bug this explains — a silent memory leak:**

```js
// ❌ Adding a listener every time a function runs, never removing it
function handleNewConnection(socket) {
  emitter.on('broadcast', (msg) => socket.send(msg)); // new listener EVERY connection
}
```

By default Node warns (`MaxListenersExceededWarning`) once an emitter passes **10 listeners** for the same event — a strong signal that listeners are being added in a loop or on every request instead of once, which leaks memory over the process's lifetime.

---

## 🧱 Buffer

A `Buffer` is a fixed-size chunk of raw memory outside V8's normal JS heap, used to handle binary data (file bytes, network packets, image data) that doesn't map cleanly onto JS strings.

```js
const buf = Buffer.from('hello', 'utf8');
buf.length;              // 5 — byte length, not "character count"
buf.toString('base64');  // "aGVsbG8="
buf.toString('hex');     // "68656c6c6f"
```

**The bug this explains — string length vs buffer byte length:**

```js
const str = 'café'; // 4 characters
str.length;                        // 4  ← JS string length counts UTF-16 code units
Buffer.byteLength(str, 'utf8');    // 5  ← 'é' takes 2 bytes in UTF-8!
```

**Why this matters in practice:** if you set an HTTP `Content-Length` header using `str.length` instead of `Buffer.byteLength(str)`, any string containing multi-byte characters (accents, emoji, non-Latin scripts) produces a header that doesn't match the actual byte count sent — which some HTTP clients will treat as a truncated/corrupt response.

```
Buffer memory (raw bytes):
┌────┬────┬────┬────┬────┬────┐
│ 63 │ 61 │ 66 │ c3 │ a9 │      "café" in UTF-8 — 5 bytes,
└────┴────┴────┴────┴────┴────┘  not 4 "characters"
   c    a    f  é (2 bytes)
```

---

## 🌊 Streams (Intro)

Streams process data in chunks instead of loading everything into memory at once — the same event-driven pattern from [§ 02](../02-Node.js%20Architecture%20%26%20Event%20Loop/README.md), applied to data flow. Full depth (Duplex/Transform streams, backpressure internals) lives in [§ 08 Streams & Buffer Management](../README.md#08-streams--buffer-management-deep-dive) — this is just the shape of it.

```js
readableStream.pipe(writableStream);
// Equivalent to manually doing:
// readableStream.on('data', (chunk) => writableStream.write(chunk));
// readableStream.on('end', () => writableStream.end());
// ...except .pipe() ALSO handles backpressure (pausing the readable
// side automatically if the writable side can't keep up) for you.
```

> **Why this matters:** manually wiring `'data'`/`'end'` without `.pipe()` is a common source of memory blowups — if the writable side (e.g. a slow disk or network) can't keep up, an unpaused readable side keeps buffering chunks in memory unboundedly. `.pipe()` avoids this by design.

---

## 🖥️ OS Module

`os` exposes information about the machine Node is running on — useful for health checks, logging, and scaling decisions.

```js
const os = require('os');

os.cpus().length;                       // number of logical CPU cores
os.totalmem() / 1024 ** 3;              // total RAM in GB
os.freemem() / 1024 ** 3;               // free RAM in GB
os.loadavg();                           // [1min, 5min, 15min] load average (Linux/macOS)
```

A common real use: sizing a [`cluster`](../README.md#17-performance--optimization) worker pool to `os.cpus().length` so you run one worker process per CPU core, or reporting `os.freemem()` in a `/health` endpoint so an orchestrator can detect memory pressure before it becomes an OOM (Out of memory) kill.

---

## 🔐 Crypto

`crypto` provides hashing, encryption, and secure randomness — all backed by OpenSSL. CPU-heavy calls like `pbkdf2` run on libuv's thread pool (see [§ 02 libuv & the Thread Pool](../02-Node.js%20Architecture%20%26%20Event%20Loop/README.md#-libuv--the-thread-pool)); simpler ones below are fast enough to run synchronously.

```js
const crypto = require('crypto');

// Hashing (one-way — for integrity checks, NOT for passwords)
crypto.createHash('sha256').update('some data').digest('hex');

// Cryptographically secure random bytes (tokens, session IDs)
crypto.randomBytes(32).toString('hex');
crypto.randomUUID(); // built-in UUID v4 generator, no extra package needed

// Basic symmetric encryption
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
const encrypted = Buffer.concat([cipher.update('secret message'), cipher.final()]);
```

> ⚠️ `sha256`/`md5` are for **integrity checks** (verifying a file wasn't corrupted), not for password storage — they're fast by design, which makes them easy to brute-force. Passwords need a deliberately *slow* algorithm (`bcrypt`, `argon2`, or `crypto.pbkdf2` with a high iteration count) — see [§ 11 Authentication & Security](../README.md#11-authentication--security).

---

## ⏱️ Timers

The full ordering semantics (`process.nextTick` vs `setImmediate`, microtasks vs macrotasks) live in [§ 02 Node.js Architecture & Event Loop](../02-Node.js%20Architecture%20%26%20Event%20Loop/README.md#-processnexttick-vs-setimmediate) — this is just the API surface.

```
API                  SCHEDULES...                         CLEAR WITH
──────────────────────────────────────────────────────────────────────
setTimeout(fn, ms)    fn once, after at least ms           clearTimeout(id)
setInterval(fn, ms)   fn repeatedly, every ms               clearInterval(id)
setImmediate(fn)      fn once, in the Check phase           clearImmediate(id)
process.nextTick(fn)  fn before the event loop continues    (no clear — runs once, always)
```

> ⚠️ Always store the return value (`const id = setTimeout(...)`) if you might need to cancel it — an uncancelled `setInterval` in particular is a classic memory/resource leak, since it keeps the process alive and the closure's captured variables alive indefinitely.

---

💡 **[Interview Q&A for this topic →](./interview-qa.md)**
