# 01. Node.js Fundamentals — Interview Q&A

[⬅ Back to Deep Dive](./README.md) · [⬅ Back to Node.js Roadmap](../README.md)

> Quick-fire Q&A for this topic — what Node.js actually is, V8 internals, package.json pitfalls, globals, and graceful shutdown. Use the [deep dive](./README.md) for the full explanations and code examples this is distilled from.

---

**Q1. What is Node.js, in one sentence?**

Node.js is a JavaScript runtime that pairs the V8 engine (executes JS, JIT-compiles it) with libuv (event loop, non-blocking I/O, a thread pool) and exposes OS-level APIs to JavaScript — letting JS run outside the browser with file system, network, and process access.

**Q2. Why did Node.js's I/O model matter compared to traditional servers?**

Traditional thread-per-request servers (e.g. Apache + PHP) spin up an OS thread per connection and block it while waiting on I/O (DB queries, file reads) — expensive in memory and context-switching at scale. Node.js hands I/O operations off to libuv and keeps a single thread free to handle other requests, so it can hold far more concurrent I/O-bound connections on the same hardware.

**Q3. Name three things available in Node.js that don't exist in browser JavaScript, and vice versa.**

Node-only: `require`/CommonJS modules, the `fs` module (file system access), the `process` object. Browser-only: `window`, `document`, the DOM APIs. Code meant to run in both environments must guard for these with `typeof window !== 'undefined'` checks rather than assuming either exists.

**Q4. What's the difference between a runtime and a framework, using Node.js and Express as the example?**

Node.js is the runtime — it provides the engine (V8), async I/O (libuv), and core modules (`http`, `fs`, etc.), and can already serve HTTP requests with zero extra libraries. Express is a framework built on top of Node's `http` module that adds routing, middleware, and conventions — it's optional structure, not a prerequisite for using Node.js.

**Q5. What are the four main pieces of V8, and what does each do?**

Parser (JS source → AST), Ignition (AST → bytecode, starts executing immediately as an interpreter), TurboFan (JIT-compiles frequently-run "hot" bytecode into optimized native machine code), and Orinoco (garbage collector, frees unreferenced memory). Sparkplug sits between Ignition and TurboFan as a faster non-optimizing compiler for quicker warm-up.

**Q6. Why can benchmarking a function on its very first call be misleading?**

The first call runs on Ignition's un-optimized bytecode — V8 hasn't identified the function as "hot" yet, so TurboFan hasn't compiled an optimized version. A single-shot benchmark measures the cold, worst-case path, not the steady-state performance a long-running server actually experiences after the function has run many times. Proper benchmarks warm up the function first.

**Q7. Why don't short-lived serverless functions benefit from V8's JIT the way a long-running server does?**

JIT optimization (TurboFan) kicks in after a function runs "enough" times within one process to be flagged as hot. A serverless function that cold-starts on every invocation rarely runs the same code often enough within a single process lifetime to reach that threshold, so it tends to run closer to Ignition's un-optimized baseline speed.

**Q8. What risk does `"express": "^4.19.0"` in package.json introduce, and how do you mitigate it?**

The `^` allows npm to install any `4.x.x` release, including ones published after you tested — so a fresh install (a teammate's machine, CI, a redeploy) can silently pull in different transitive dependency code than what you validated locally. Mitigate by committing `package-lock.json` and using `npm ci` (not `npm install`) in CI/deploy pipelines, which installs exact locked versions and fails rather than silently re-resolving.

**Q9. Why does `require()` throw `ERR_REQUIRE_ESM` for some files but not others?**

`require()` is CommonJS's synchronous module loader and cannot load an ES Module, which is asynchronous by design. Whether a `.js` file is treated as CommonJS or ESM depends on the `"type"` field in the nearest `package.json` (or the `.cjs`/`.mjs` extension) — mixing them without accounting for this causes the error.

**Q10. Are `__dirname` and `__filename` truly global? Explain.**

No — despite feeling global, they're local variables injected per-file by the CommonJS module wrapper function `(function(exports, require, module, __filename, __dirname) { ... })` that Node secretly wraps every CommonJS file in. Each file gets its own correct value because it's a function parameter, not a shared global lookup.

**Q11. Why does `__dirname` throw `ReferenceError: __dirname is not defined` in an ES Module?**

Because the CommonJS wrapper function that injects `__dirname` as a parameter never runs for ES Modules — ESM has different module metadata instead. The fix is deriving it manually: `const __dirname = path.dirname(fileURLToPath(import.meta.url))`.

**Q12. What's the risk of assuming `NODE_ENV=production` is set automatically in production, and what's the fix?**

If a deploy pipeline never explicitly sets `NODE_ENV=production`, any code gated on `process.env.NODE_ENV !== 'production'` (e.g. "only show error stack traces in development") stays in its non-production branch — leaking full stack traces, file paths, and sometimes query text into live API responses. Fix: explicitly set and verify `NODE_ENV` in the deploy environment rather than assuming it.

**Q13. What's the difference between `process.on('exit')` and `process.on('SIGTERM')`?**

`'exit'` fires when the event loop has no more work left — it's Node's own natural end-of-life signal, and only synchronous cleanup can run in its handler. `SIGTERM` is an OS signal sent by something external (Docker, Kubernetes, `kill`) asking the process to terminate — its handler can run async cleanup (closing a server, finishing in-flight requests, closing a DB pool) before calling `process.exit()` itself.

**Q14. Why does a Node.js app without SIGTERM handling cause intermittent errors during deploys?**

Container orchestrators send `SIGTERM` and wait a grace period before force-killing with `SIGKILL`. Without a handler, the process is simply killed when that grace period ends — whatever requests were in flight at that exact moment are dropped and DB connections aren't closed cleanly. This shows up as sporadic errors correlated with deploy or autoscaling timestamps, invisible in local development.

**Q15. Describe the correct order of operations in a graceful shutdown handler.**

On receiving `SIGTERM`/`SIGINT`: (1) stop accepting new connections (`server.close()`), (2) let in-flight requests finish, (3) close external resources like the DB connection pool, (4) then call `process.exit(0)`. Doing these out of order — e.g. exiting before in-flight requests finish — defeats the purpose of graceful shutdown.
