# 02. Node.js Architecture & Event Loop — Interview Q&A

[⬅ Back to Deep Dive](./README.md) · [⬅ Back to Node.js Roadmap](../README.md)

> Quick-fire Q&A for this topic — single-threaded model, event-driven architecture, blocking vs non-blocking I/O, libuv's thread pool, event loop phases, and microtasks vs macrotasks. Use the [deep dive](./README.md) for the full explanations, diagrams, and code examples this is distilled from.

---

**Q1. Is Node.js truly single-threaded? Explain precisely.**
Your JavaScript code runs on a single main thread — one callback executes at a time, never in parallel. But Node.js as a whole is not single-threaded: libuv maintains a background thread pool for operations with no OS-level async API (like `fs` calls), so the main thread is freed up while that work happens elsewhere.

**Q2. Why does `setTimeout(fn, 0)` not run `fn` immediately?**
The main thread always finishes executing all currently queued synchronous code first. `setTimeout`'s callback is a macrotask scheduled for the Timers phase of the event loop, which only runs after the current synchronous execution completes — a 0ms delay just means "as soon as possible after that," not "instantly."

**Q3. What is event-driven architecture, in the context of Node.js?**
A pattern where program flow is controlled by events (an HTTP request arriving, a file finishing a read, a timer firing) rather than a top-down sequential script. Objects extending `EventEmitter` (like `http.Server` or a readable stream) emit named events, and registered listeners run in response.

**Q4. Why is Node's default behavior for an unhandled `'error'` event dangerous?**
`'error'` is special-cased in `EventEmitter` — if it's emitted with no listener attached, Node throws the error and crashes the entire process, not just the failing operation. This means a single unhandled error from a database client, socket, or stream can take down a whole server instantly. Fix: always attach an `.on('error', ...)` listener to any `EventEmitter`-based object you don't fully control.

**Q5. What's the difference between blocking and non-blocking I/O, with an example?**
Blocking I/O (e.g. `fs.readFileSync`) freezes the entire thread until the operation completes — nothing else can run. Non-blocking I/O (e.g. `fs.readFile` with a callback) hands the operation to libuv and continues executing subsequent code immediately; the callback fires later when the OS reports the operation is done.

**Q6. Does "non-blocking I/O" protect you from CPU-heavy synchronous code? Why or why not?**
No. Non-blocking I/O only helps with operations that *wait* on something external (disk, network, DB). A CPU-bound synchronous loop, a huge `JSON.parse`, or unbounded recursion has nothing to hand off to libuv — it occupies the single main thread directly and blocks the entire server (every other request, every timer) until it finishes.

**Q7. What's the fix for CPU-heavy work blocking the event loop?**
Offload it to a `worker_thread` (a separate thread with its own event loop, communicating via message passing) so the main thread stays free to handle other requests, or break the work into smaller chunks yielded back to the event loop between steps.

**Q8. Does all asynchronous I/O in Node.js use libuv's thread pool?**
No. Network I/O (sockets, most `http`/`net` traffic) is handled directly by the OS kernel's native async mechanisms (`epoll` on Linux, `kqueue` on macOS, `IOCP` on Windows) — zero threads used. The thread pool is reserved for operations with no OS-level async equivalent: file system calls, `dns.lookup`, `crypto.pbkdf2`/`scrypt`, and `zlib` compression.

**Q9. What is `UV_THREADPOOL_SIZE`, and when would you change it?**
It's the environment variable controlling libuv's internal thread pool size, defaulting to 4. If your app does heavy *concurrent* file system or crypto work, more simultaneous tasks than available threads means some calls queue up waiting for a free thread — raising this value lets more of that work run truly in parallel.

**Q10. List the six phases of the Node.js event loop, in order.**
Timers → Pending Callbacks → Idle/Prepare → Poll → Check → Close Callbacks — then it loops back to Timers. Poll is where most work happens: it's where Node waits for and processes new I/O.

**Q11. When do microtasks (Promises) actually run relative to the event loop's phases?**
The microtask queue drains completely after *every single callback*, not once per full loop iteration — meaning it runs between every phase transition, not only "once per tick" the way it's sometimes simplified.

**Q12. What's the execution order of `process.nextTick`, a resolved Promise's `.then`, `setTimeout(fn, 0)`, and `setImmediate` when all four are called synchronously at the top level?**
`process.nextTick` callbacks run first (the nextTick queue drains before the event loop is even allowed to continue), then the microtask queue (Promise `.then`), then the macrotasks — `setTimeout` and `setImmediate` — whose relative order is not guaranteed at the top level (though inside an I/O callback, `setImmediate` always fires before `setTimeout`).

**Q13. Why can recursive `process.nextTick` calls starve the entire server?**
The nextTick queue must be fully drained before the event loop is allowed to proceed to its next phase. If a `nextTick` callback keeps scheduling another `nextTick` call, the queue never empties, so the loop never reaches the Poll phase — meaning no incoming HTTP request, timer, or other I/O callback ever gets a chance to run, even though the process looks alive.

**Q14. How do you fix code that recursively reschedules itself without starving I/O?**
Use `setImmediate` (or `setTimeout`) instead of `process.nextTick` for the recursive step — both are macrotasks that let the event loop advance through Poll and process pending I/O between iterations, rather than blocking the loop from progressing at all.

**Q15. Is `process.nextTick` just a faster version of `setTimeout`? Why is that framing wrong?**
No — they're fundamentally different mechanisms. `process.nextTick` runs before the event loop is permitted to continue to its next phase at all (even before microtasks), while `setTimeout` schedules a macrotask for a future Timers phase. Treating `nextTick` as "just faster" misses that its queue must fully drain before *anything else* proceeds, which is precisely what makes uncontrolled recursive use of it dangerous.
