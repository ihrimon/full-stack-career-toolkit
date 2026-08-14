# 03. Core Modules — Interview Q&A

[⬅ Back to Deep Dive](./README.md) · [⬅ Back to Node.js Roadmap](../README.md)

> Quick-fire Q&A for this topic — fs, path, HTTP, URL, EventEmitter, Buffer, streams, os, crypto, and timers. Use the [deep dive](./README.md) for the full explanations and code examples this is distilled from.

---

**Q1. Why prefer `fs.promises.readFile` over `fs.readFileSync` inside a request handler?**

`readFileSync` blocks the entire main thread until the read completes, freezing every other request the server is handling. `fs.promises.readFile` (used with `await`) hands the work to libuv and lets the event loop keep serving other requests while it waits — sync methods are only appropriate for one-time startup work like reading a config file.

**Q2. Why should you never build file paths with string concatenation?**

Path separators differ between operating systems (`/` on Linux/macOS, `\` on Windows) — hardcoding one breaks on the other. `path.join()`/`path.resolve()` handle this automatically and cross-platform.

**Q3. Why is `path.basename()` a security-relevant function, not just a convenience?**

If a filename comes from user input (e.g. a file upload) and gets `path.join()`'d directly, a value like `../../etc/passwd` can escape the intended directory. Running it through `path.basename()` first strips any `../` segments, guaranteeing the result stays inside the target directory.

**Q4. What happens if you call `res.write()` but never call `res.end()` in a raw `http` server?**

Node never considers the response finished, so the underlying TCP connection stays open indefinitely — the client hangs waiting for more data or a close signal. Repeated occurrences can exhaust the server's available connections.

**Q5. What does the `URL` class give you that manual query-string parsing doesn't?**

Correct handling of encoding/decoding for special characters, structured access to each part (`hostname`, `pathname`, `searchParams`, `hash`), and a `URLSearchParams` object with safe `.get()`/`.set()`/`.append()` methods — manual string splitting on `?`/`&` reliably mishandles edge cases like encoded ampersands.

**Q6. What's the difference between `.on()` and `.once()` on an EventEmitter?**

`.on()` registers a listener that runs every time the event fires. `.once()` registers a listener that runs on the first occurrence only, then automatically removes itself.

**Q7. What does a `MaxListenersExceededWarning` usually indicate?**

That more than the default 10 listeners have been attached to the same event on one emitter — almost always a sign that a listener is being added inside a loop, or once per request/connection instead of once at setup time, which leaks memory as the process runs.

**Q8. What is a `Buffer`, and why does Node need it separate from JS strings?**

A `Buffer` is a fixed-size chunk of raw binary memory outside V8's normal JS heap, used for data that doesn't map cleanly onto text — file bytes, network packets, image data. JS strings are UTF-16 sequences meant for text; binary data (or text in other encodings) needs a byte-level representation instead.

**Q9. Why can `str.length` and `Buffer.byteLength(str)` give different numbers for the same string?**

`str.length` counts UTF-16 code units (roughly "characters" for common cases), while `Buffer.byteLength()` counts actual bytes once encoded (UTF-8 by default). Multi-byte characters (accented letters, emoji, non-Latin scripts) take more bytes than code units — using `str.length` to set an HTTP `Content-Length` header on such a string produces an incorrect byte count.

**Q10. What does `.pipe()` do that manually wiring `'data'` and `'end'` listeners doesn't?**

`.pipe()` automatically handles backpressure — pausing the readable stream if the writable side can't keep up with incoming data. Manually forwarding chunks via `'data'` listeners without backpressure handling can buffer unboundedly in memory if the destination (disk, network) is slower than the source.

**Q11. Give a real use case for the `os` module in a production app.**

Sizing a `cluster` worker pool to `os.cpus().length` (one worker per CPU core), or exposing `os.freemem()` in a `/health` endpoint so an orchestrator can detect memory pressure before an out-of-memory kill happens.

**Q12. Why shouldn't you use `sha256` or `md5` to store passwords?**

Those hash functions are designed to be fast, which is exactly what makes them practical to brute-force at scale with modern hardware. Password storage needs a deliberately slow, purpose-built algorithm (`bcrypt`, `argon2`, or `crypto.pbkdf2` with a high iteration count) that resists brute-force attempts even if the hash database leaks.

**Q13. What's the difference between `crypto.createHash('sha256')` and `crypto.randomBytes()`?**

`createHash` produces a deterministic one-way digest of given input data (same input always produces the same hash) — useful for integrity checks. `randomBytes` generates cryptographically secure random data with no relationship to any input — useful for tokens, session IDs, and encryption keys/IVs.

**Q14. Which timer function has no corresponding "clear" function, and why?**

`process.nextTick()` — it queues a callback to run before the event loop is allowed to continue, and it always runs exactly once with no way to cancel it once scheduled, unlike `setTimeout`/`setInterval`/`setImmediate` which return a cancellable handle.

**Q15. Why is an uncleared `setInterval` considered a memory/resource leak?**

An active `setInterval` keeps the Node.js process alive (it won't exit naturally) and keeps every variable captured in its callback's closure alive in memory for as long as the interval keeps running — if the code that created it is no longer needed (e.g. a disconnected client's polling loop), the interval and its closure persist regardless, silently consuming resources.
