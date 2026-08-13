# 💚 Node.js Mastery Roadmap

> Node.js is a JavaScript runtime built on Chrome's V8 engine, designed for scalable network applications and backend development. This roadmap takes you from fundamentals to production-grade backend engineering, phase by phase — internals, explanations, and runnable examples are folded directly into the topic they belong to, so you read top-to-bottom instead of jumping between a checklist and a separate notes section.

---

## 📑 Table of Contents

**🟢 Phase 1 — Foundations**

- [01. Node.js Fundamentals](#01-nodejs-fundamentals) ✅
- [02. Node.js Architecture & Event Loop](#02-nodejs-architecture--event-loop) ✅
- [03. Core Modules](#03-core-modules)
- [04. Modules & Package Management](#04-modules--package-management)
- [05. Asynchronous Programming](#05-asynchronous-programming)
- [📦 Checkpoint Project 1](#-checkpoint-project-1)

**🟡 Phase 2 — Building Applications**

- [06. Express.js Framework](#06-expressjs-framework)
- [07. Template Engines](#07-template-engines)
- [08. Streams & Buffer Management (Deep Dive)](#08-streams--buffer-management-deep-dive)
- [09. Building HTTP Servers & REST APIs](#09-building-http-servers--rest-apis)
- [10. Database Integration](#10-database-integration)
- [11. Authentication & Security](#11-authentication--security)
- [12. File Handling & Uploads](#12-file-handling--uploads)
- [13. Error Handling & Debugging](#13-error-handling--debugging)
- [📦 Checkpoint Project 2](#-checkpoint-project-2)

**🔴 Phase 3 — Scaling & Real-Time**

- [14. WebSockets & Real-Time](#14-websockets--real-time)
- [15. API Design](#15-api-design)
- [16. Testing & Quality Assurance](#16-testing--quality-assurance)
- [17. Performance & Optimization](#17-performance--optimization)
- [18. Deployment & Production](#18-deployment--production)
- [📦 Checkpoint Project 3](#-checkpoint-project-3)

**⚫ Phase 4 — Expert & Specialization**

- [19. Advanced Concepts](#19-advanced-concepts)
- [20. CLI Tools Development](#20-cli-tools-development)
- [21. Advanced Node Internals](#21-advanced-node-internals)
- [22. Best Practices](#22-best-practices)
- [🏆 Capstone Project](#-capstone-project)

---

## 🟢 Phase 1 — Foundations

### 01. Node.js Fundamentals ✅

- [x] What is Node.js & Why use it?
- [x] Node.js vs Browser JavaScript
- [x] Runtime vs Framework
- [x] V8 Engine overview
- [x] `package.json` basics
- [x] Global object, `process`, `__dirname`/`__filename`, env vars
- [x] process Exit Events & Graceful Shutdown

📖 **[Deep dive → 01. Node.js Fundamentals](./01-Node.js%20Fundamentals/README.md)**

### 02. Node.js Architecture & Event Loop ✅

- [x] Single-threaded model
- [x] Event-driven architecture
- [x] Non-blocking I/O
- [x] libuv & the thread pool
- [x] Event loop phases (timers, pending callbacks, idle/prepare, poll, check, close callbacks)
- [x] Microtasks vs Macrotasks
- [x] `process.nextTick` vs `setImmediate`
- [x] `setTimeout` vs `setImmediate`

📖 **[Deep dive → 02. Node.js Architecture & Event Loop](./02-Node.js%20Architecture%20%26%20Event%20Loop/README.md)**

### 03. Core Modules

- [ ] File System (`fs`)
- [ ] Path Module
- [ ] HTTP & HTTPS Module
- [ ] URL Module
- [ ] Events & EventEmitter
- [ ] Buffer
- [ ] Streams (intro)
- [ ] OS Module
- [ ] Crypto
- [ ] Timers

<details>
<summary><b>File System (fs)</b></summary>

Node.js core modules like `fs` (File System) provide built-in functionality for file and directory operations without external dependencies. The fs module supports both synchronous (blocking) and asynchronous (non-blocking) methods, with modern promise-based APIs for cleaner async code.

**readFile / readFileSync:** `readFile` reads file content asynchronously using callbacks, while `readFileSync` does so synchronously, blocking execution until complete. Use async for better performance in I/O-heavy apps.

**writeFile / writeFileSync:** writeFile overwrites or creates a file asynchronously; writeFileSync does the same synchronously. Both accept encoding like 'utf8' for text files.

**appendFile:** `appendFile` adds content to a file's end asynchronously (creates if missing); there's also appendFileSync. Ideal for logs without overwriting.

**fs.promises - Modern Async/Await Style:** fs.promises provides promise-based versions of async methods, enabling async/await for readable code (Node.js 10+).

**Directory Operations:** Methods like `mkdir/mkdirSync` create directories, `readdir/readdirSync` list contents, `rmdir/rmdirSync` (or rm in newer Node) remove them.

**File Watching:** `watch` or `watchFile` monitors file changes, calling a listener on modify/add/rename/delete. Use fs.promises.watch for async.

**File Streams:** Streams handle large files efficiently via chunks: `createReadStream` for reading, `createWriteStream` for writing. Use pipeline for safe chaining.

```js
/* Real-World — Copy large file with progress */

const fs = require('fs');
const path = require('path');

async function copyWithProgress(src, dest) {
  const { size } = await require('fs').promises.stat(src);
  let transferred = 0;

  const readStream = fs.createReadStream(src);
  const writeStream = fs.createWriteStream(dest);

  readStream.on('data', (chunk) => {
    transferred += chunk.length;
    const pct = ((transferred / size) * 100).toFixed(1);
    process.stdout.write(`\rCopying... ${pct}%`);
  });

  readStream.pipe(writeStream);

  writeStream.on('finish', () => {
    console.log(`\nCopied ${path.basename(src)} → ${dest} ✅`);
  });
}

copyWithProgress('bigvideo.mp4', 'backup/bigvideo.mp4');
```

```
Copying... 23.4%
Copying... 67.8%
Copying... 100.0%
Copied bigvideo.mp4 → backup/bigvideo.mp4 ✅
```

```
## Quick Reference

METHOD                      ASYNC?    USE FOR
──────────────────────────────────────────────────────────
fs.readFile()               ✅ async  read small–medium files
fs.readFileSync()           ❌ sync   startup config only
fs.writeFile()              ✅ async  write/overwrite a file
fs.writeFileSync()          ❌ sync   startup/scripts only
fs.appendFile()             ✅ async  add to end of file
fs.promises.readFile()      ✅ async  modern await style
fs.promises.writeFile()     ✅ async  modern await style
fs.mkdir()                  ✅ async  create directory
fs.readdir()                ✅ async  list directory contents
fs.unlink()                 ✅ async  delete a file
fs.rename()                 ✅ async  rename or move a file
fs.stat()                   ✅ async  get file info / metadata
fs.watch()                  🔁 event  watch file/dir for changes
fs.createReadStream()       🌊 stream  read large files in chunks
fs.createWriteStream()      🌊 stream  write large files in chunks
.pipe()                     🌊 stream  connect read → write stream
```

```
## Key Rules to Remember

✅  Always use async versions inside servers and request handlers
✅  Use fs.promises with async/await for the cleanest code
✅  Use streams (pipe) for files larger than ~50MB
✅  Always handle errors — missing files crash the process
✅  { recursive: true } for nested mkdir / rm operations
⚠️  readFileSync / writeFileSync block the entire thread
⚠️  writeFile overwrites — use appendFile to add content
⚠️  fs.watch can be unreliable on some OS — use chokidar in production
```

</details>

<details>
<summary><b>Path</b></summary>

The `path` module provides utilities for working with file and directory paths — safely and cross-platform.

**1. path.join()** Joins multiple path segments into one clean path.

**2. path.resolve()** Resolves a sequence of paths into an absolute path — starting from the right.

**3. path.basename()** Returns the last part of a path — the filename.

**4. path.extname()** Returns the file extension including the dot.

```js
const path = require('path');
const fs = require('fs').promises;

class ProjectPaths {
  constructor(rootDir) {
    this.root = path.resolve(rootDir);
    this.src = path.join(this.root, 'src');
    this.public = path.join(this.root, 'public');
    this.uploads = path.join(this.root, 'public', 'uploads');
    this.logs = path.join(this.root, 'logs');
    this.config = path.join(this.root, 'config');
  }

  // Safely resolve a file under uploads
  uploadPath(filename) {
    const safe = path.basename(filename); // strip any ../ attacks
    return path.join(this.uploads, safe);
  }

  // Validate file extension before saving
  isAllowed(filename) {
    const ext = path.extname(filename).toLowerCase();
    return ['.jpg', '.png', '.pdf', '.txt'].includes(ext);
  }

  async createAll() {
    const dirs = [this.src, this.public, this.uploads, this.logs, this.config];
    for (const dir of dirs) {
      await fs.mkdir(dir, { recursive: true });
    }
    console.log('All project directories created ✅');
  }
}

const project = new ProjectPaths(__dirname);

(async () => {
  await project.createAll();

  console.log('Root:    ', project.root);
  console.log('Uploads: ', project.uploads);
  console.log('Upload:  ', project.uploadPath('../../../etc/passwd')); // safe!
  console.log('Allowed: ', project.isAllowed('resume.pdf')); // true
  console.log('Allowed: ', project.isAllowed('virus.exe')); // false
})();
```

```
All project directories created ✅
Root:     /home/user/myapp
Uploads:  /home/user/myapp/public/uploads
Upload:   /home/user/myapp/public/uploads/passwd   ← ../ stripped ✅
Allowed:  true
Allowed:  false
```

```
// Quick Reference

METHOD                             RETURNS
──────────────────────────────────────────────────────────────
path.join("a", "b", "c")          "a/b/c"
path.resolve("a", "b")            "/cwd/a/b"         (absolute)
path.basename("/dir/file.txt")    "file.txt"
path.basename("/dir/file.txt",    "file"
             ".txt")
path.extname("file.txt")          ".txt"
path.dirname("/dir/file.txt")     "/dir"
path.parse("/dir/file.txt")       { root, dir, base, ext, name }
path.format({ dir, name, ext })   "/dir/file.txt"
path.isAbsolute("/dir/file")      true / false
path.sep                          "/" or "\"
path.delimiter                    ":" or ";"
```

```
// Key Takeaways

✅  Always use path.join() instead of string concatenation for paths
✅  path.resolve() always returns an absolute path
✅  path.basename() extracts the filename from a full path
✅  path.extname() gets the file extension for type checking
✅  Use __dirname + path.join() to build paths relative to current file
✅  path protects against OS differences (/ vs \)
⚠️  path.extname("file.tar.gz") → ".gz" only (not ".tar.gz")
⚠️  path.resolve("/a", "/b") → "/b" (absolute segment resets path)
⚠️  Always use path.basename() to sanitize user-provided filenames
```

</details>

#### HTTP

- Create HTTP server
- Handle request & response
- Status codes
- Headers
- JSON response
- Manual routing

#### URL

- URL parsing
- URLSearchParams

#### Events

- EventEmitter
- Custom events
- Removing listeners

#### Buffer

- Creating buffers
- Encoding (utf8, base64)
- Binary data handling

#### Streams (Intro)

- Readable
- Writable
- Pipe
- Backpressure basics — full deep dive in [Streams & Buffer Management](#08-streams--buffer-management-deep-dive)

#### OS

- CPU info
- Memory info

#### Crypto

- Hashing (sha256)
- Random bytes
- Basic encryption

#### Timers

- setTimeout
- setInterval
- setImmediate
- clearTimeout
- clearInterval
- clearImmediate
- process.nextTick

### 04. Modules & Package Management

- [ ] CommonJS (`require`, `module.exports`)
- [ ] ES Modules (`import`/`export`)
- [ ] CJS vs ESM differences
- [ ] Module resolution algorithm
- [ ] `node_modules` structure
- [ ] `package.json` deep dive (scripts, dependencies, versioning, main/type)
- [ ] npm ecosystem (npx, semver, yarn/pnpm, publishing)

<details>
<summary><b>CommonJS (require, module.exports)</b></summary>

CommonJS (CJS) is the module system built into Node.js — it lets you split code into separate files and share functionality between them.

**CommonJS — Key Takeaways**

1. **`module.exports`** — what your file shares with the world; nothing leaks out unless explicitly exported

2. **`require()`** — fetches another file's exports and brings them into your current file

3. **Each file is its own module** — variables stay private inside their file; no accidental global leaks

4. **`require()` is cached** — the file runs only once on first load; repeated `require()` calls return the same cached result

5. **Can export anything** — functions, objects, classes, arrays, strings, numbers — any valid JavaScript value

6. **Use `module.exports = {}`** not `exports = {}` for objects — reassigning `exports` breaks the reference to `module.exports`

7. **CommonJS is synchronous** — safe to use at startup/top of file, but never call `require()` inside async callbacks or request handlers mid-flight

</details>

<details>
<summary><b>ES Modules (import/export)</b></summary>

A module is just a file. Every `.js` file in ES Modules is its own isolated unit with its own scope, variables, and logic.

**ES Modules — Key Takeaways**

1. **`export`** — what your file shares with the world; nothing leaks out unless explicitly exported

2. **`import`** — brings another file's exports into your current file, and must reference the full path including the extension (`./utils.js`, not `./utils`)

3. **ESM is asynchronous** — modules are loaded and linked before execution, which is what enables top-level `await`

4. **Static analysis friendly** — because imports/exports are declared at the top level (not conditionally), bundlers can tree-shake unused code

5. **Enable it** via `"type": "module"` in `package.json`, or by using the `.mjs` file extension

6. **No `__dirname`/`__filename`** — use `import.meta.url` with `fileURLToPath()` instead

</details>

- CJS vs ESM differences
- Module resolution algorithm
- `node_modules` structure

#### package.json Deep Dive

- scripts
- dependencies vs devDependencies
- versioning
- main / type fields

#### npm Ecosystem

- npm install variations
- npx usage
- Global vs Local packages
- Semantic Versioning (SemVer)
- yarn / pnpm overview
- Creating custom npm package
- Publishing to npm

### 05. Asynchronous Programming

- [ ] Callback pattern & callback hell
- [ ] Promises & Promise chaining
- [ ] async/await
- [ ] try/catch with async, error propagation
- [ ] Unhandled rejections
- [ ] `Promise.all` / `Promise.race`
- [ ] `util.promisify`
- [ ] `AbortController`

> Streams and buffers as async primitives are covered in [Core Modules](#03-core-modules) and in depth in [Streams & Buffer Management](#08-streams--buffer-management-deep-dive).

---

### 📦 Checkpoint Project 1

> Build a small CLI tool (no framework yet) that: lists files in a directory by extension using `fs.promises` + `path`, copies a large file with a progress bar (reuse the streaming example from [Core Modules](#03-core-modules)), and reads its own config from environment variables via `process.env` + `process.argv`. This exercises fundamentals, core modules, and async/await together before frameworks enter the picture.

---

## 🟡 Phase 2 — Building Applications

### 06. Express.js Framework

- [ ] Introduction to Express
- [ ] Routing Basics
- [ ] Middleware (Built-in, Custom, Third-party)
- [ ] Request & Response Handling
- [ ] Error Handling in Express

### 07. Template Engines

- [ ] EJS
- [ ] Handlebars
- [ ] Pug (Jade)

### 08. Streams & Buffer Management (Deep Dive)

> Builds on the stream basics from [Core Modules](#03-core-modules) — this section goes deeper into backpressure and custom Transform streams.

- [ ] Types of Streams: Readable, Writable, Duplex, Transform
- [ ] Stream events
- [ ] Pipe chaining
- [ ] Transform streams
- [ ] Backpressure — deep explanation
- [ ] Handling large files efficiently
- [ ] Buffer vs Stream comparison

### 09. Building HTTP Servers & REST APIs

- [ ] Creating HTTP server
- [ ] REST API fundamentals
- [ ] Basic routing logic
- [ ] Handling query parameters
- [ ] Parsing request body
- [ ] Handling JSON
- [ ] Middleware pattern
- [ ] CORS handling
- [ ] Serving static files
- [ ] API versioning
- [ ] Status code best practices
- [ ] Error response standardization
- [ ] Environment configuration

### 10. Database Integration

- [ ] MongoDB + Mongoose
- [ ] Connecting with the native driver & connection pooling
- [ ] CRUD operations & transactions
- [ ] Data validation & handling DB errors
- [ ] PostgreSQL / MySQL (Sequelize, Prisma, Knex)
- [ ] ORM overview & migration concept
- [ ] Redis for Caching & Sessions

### 11. Authentication & Security

- [ ] Password hashing (Bcrypt / Argon2)
- [ ] JWT creation & verification
- [ ] Access vs Refresh tokens
- [ ] Sessions vs Tokens, cookie handling
- [ ] OAuth 2.0 / Passport.js
- [ ] CSRF protection & XSS prevention
- [ ] Rate Limiting & CORS
- [ ] Helmet.js for security headers
- [ ] Environment variable security
- [ ] Input validation & avoiding SQL/NoSQL injection
- [ ] HTTPS & TLS basics

### 12. File Handling & Uploads

- [ ] Handling File System with `fs`
- [ ] File Upload with Multer
- [ ] Cloud Uploads (AWS S3, Cloudinary)

### 13. Error Handling & Debugging

- [ ] Error-first callback pattern
- [ ] Creating custom error classes
- [ ] Centralized error handling
- [ ] try/catch best practices
- [ ] Logging strategies
- [ ] Unhandled rejections
- [ ] Stack trace analysis
- [ ] Debug flag & Node Inspector
- [ ] `debug` module

---

### 📦 Checkpoint Project 2

> Build a REST API (Express + MongoDB or PostgreSQL) with JWT-based auth, file upload (Multer → Cloudinary/S3), a server-rendered admin view using a template engine, and centralized error-handling middleware. This is the point where the roadmap turns into a real backend service.

---

## 🔴 Phase 3 — Scaling & Real-Time

### 14. WebSockets & Real-Time

- [ ] WebSocket Basics
- [ ] Socket.io
- [ ] Real-Time Chat App Example

### 15. API Design

- [ ] RESTful API Principles
- [ ] API Versioning
- [ ] GraphQL with Apollo/Express
- [ ] Rate Limiting & Pagination
- [ ] API Documentation (Swagger / OpenAPI)

### 16. Testing & Quality Assurance

- [ ] Debugging with Node Inspector
- [ ] Unit testing basics (Mocha/Chai, or Node's built-in `node:test`)
- [ ] Jest for Testing APIs
- [ ] Supertest for Integration Testing
- [ ] Testing async code & mocking
- [ ] Test coverage
- [ ] TDD basics

### 17. Performance & Optimization

- [ ] Performance hooks & profiling
- [ ] Memory usage monitoring & detecting leaks
- [ ] Garbage collection basics
- [ ] Cluster module
- [ ] Worker Threads (offloading CPU-heavy tasks)
- [ ] Horizontal scaling & load balancing
- [ ] Caching strategy (Redis overview)
- [ ] Gzip compression
- [ ] HTTP keep-alive

### 18. Deployment & Production

- [ ] Production environment setup & dotenv usage
- [ ] PM2 & Process Management
- [ ] Dockerizing Node.js Apps
- [ ] Nginx Reverse Proxy
- [ ] CI/CD (GitHub Actions, GitLab CI, Jenkins)
- [ ] Cloud Deployment (AWS, Heroku, Vercel, Render)
- [ ] Logging in production & monitoring tools
- [ ] Health checks
- [ ] Graceful shutdown & handling `SIGINT`/`SIGTERM`
- [ ] Zero downtime deployment

---

### 📦 Checkpoint Project 3

> Add a Socket.io real-time feature to the API from Checkpoint 2 (e.g. live notifications or chat), add rate limiting + pagination to the endpoints, write Jest + Supertest integration tests for the critical paths, then containerize it with Docker and run it behind PM2 + Nginx with a health-check endpoint.

---

## ⚫ Phase 4 — Expert & Specialization

### 19. Advanced Concepts

- [ ] Microservices Architecture
- [ ] Message Queues (RabbitMQ, Kafka, BullMQ)
- [ ] Serverless Functions (AWS Lambda, Vercel)

> Worker Threads for CPU-bound work are covered in [Performance & Optimization](#17-performance--optimization) — this section is about splitting a system across services, not threads.

### 20. CLI Tools Development

- [ ] Creating a CLI tool
- [ ] Parsing arguments
- [ ] Commander usage
- [ ] Yargs usage
- [ ] Shebang (`#!/usr/bin/env node`)
- [ ] Making CLI executable
- [ ] Publishing CLI to npm

### 21. Advanced Node Internals

- [ ] Child process (`exec`, `spawn`, `fork`)
- [ ] Worker threads deep dive
- [ ] Cluster vs Worker Threads comparison
- [ ] Event loop internals deep dive
- [ ] libuv deep dive
- [ ] Native addons overview (C++)
- [ ] Node-API introduction
- [ ] Stream internals
- [ ] ESM loader hooks

### 22. Best Practices

- [ ] Clean Project Structure
- [ ] Config Management (dotenv)
- [ ] Logging (Winston, Morgan, Pino)
- [ ] Error Handling Strategy
- [ ] Secure & Scalable Architecture
- [ ] Performance Optimization
- [ ] TypeScript with Node.js (tsconfig, ts-node, build pipeline)
- [ ] Dependency security (`npm audit`, Snyk)
- [ ] npm workspaces / monorepos

---

### 🏆 Capstone Project

> Take the real-time API from Checkpoint 3 and split one piece of it into a second service communicating over a message queue (BullMQ is the easiest to self-host), add an internal CLI tool for ops tasks (e.g. seeding data or running maintenance jobs), and convert the codebase to TypeScript with a proper build pipeline. This exercises every phase of the roadmap in one project.
