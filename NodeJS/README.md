# 🚀 Node.js Mastery Roadmap 🌐⚡

## 📑 Table of Contents
- [🚀 Node.js Mastery Roadmap 🌐⚡](#-nodejs-mastery-roadmap-)
  - [📑 Table of Contents](#-table-of-contents)
  - [1. Node.js Fundamentals](#1-nodejs-fundamentals)
  - [2. Core Modules](#2-core-modules)
  - [3. Asynchronous Programming](#3-asynchronous-programming)
  - [4. Event-Driven Architecture](#4-event-driven-architecture)
  - [5. Express.js Framework](#5-expressjs-framework)
  - [6. Template Engines](#6-template-engines)
  - [7. Database Integration](#7-database-integration)
  - [8. Authentication \& Security](#8-authentication--security)
  - [9. File Handling \& Uploads](#9-file-handling--uploads)
  - [10. WebSockets \& Real-Time](#10-websockets--real-time)
  - [11. API Design](#11-api-design)
  - [12. Testing](#12-testing)
  - [13. Advanced Concepts](#13-advanced-concepts)
  - [14. Deployment \& DevOps](#14-deployment--devops)
  - [15. Best Practices](#15-best-practices)

---

## 1. Node.js Fundamentals
- [ ] What is Node.js & Why use it?  
- [ ] V8 Engine & libuv  
- [ ] Single-threaded, Non-blocking I/O  
- [ ] REPL & Running Scripts  
- [ ] NPM & Package.json  

## 2. Core Modules
- [ ] File System (`fs`)  
- [ ] Path Module  
- [ ] OS Module  
- [ ] HTTP & HTTPS Module  
- [ ] Events & EventEmitter  
- [ ] Util & Crypto  

## 3. Asynchronous Programming
- [ ] Callbacks  
- [ ] Promises  
- [ ] Async/Await  
- [ ] Streams (Readable/Writable)  
- [ ] Buffers & Pipes  

## 4. Event-Driven Architecture
- [ ] EventEmitter in Depth  
- [ ] Cluster Module  
- [ ] Child Processes & Worker Threads  

## 5. Express.js Framework
- [ ] Introduction to Express  
- [ ] Routing Basics  
- [ ] Middleware (Built-in, Custom, Third-party)  
- [ ] Request & Response Handling  
- [ ] Error Handling in Express  

## 6. Template Engines
- [ ] EJS  
- [ ] Handlebars  
- [ ] Pug (Jade)  

## 7. Database Integration
- [ ] MongoDB + Mongoose  
- [ ] PostgreSQL / MySQL (Sequelize, Prisma, Knex)  
- [ ] Redis for Caching & Sessions  

## 8. Authentication & Security
- [ ] JWT Authentication  
- [ ] OAuth 2.0 / Passport.js  
- [ ] Bcrypt / Argon2 Password Hashing  
- [ ] Helmet.js for Security Headers  
- [ ] Rate Limiting & CORS  

## 9. File Handling & Uploads
- [ ] Handling File System with `fs`  
- [ ] File Upload with Multer  
- [ ] Cloud Uploads (AWS S3, Cloudinary)  

## 10. WebSockets & Real-Time
- [ ] WebSocket Basics  
- [ ] Socket.io  
- [ ] Real-Time Chat App Example  

## 11. API Design
- [ ] RESTful API Principles  
- [ ] API Versioning  
- [ ] GraphQL with Apollo/Express  
- [ ] Rate Limiting & Pagination  

## 12. Testing
- [ ] Debugging with Node Inspector  
- [ ] Unit Testing with Mocha/Chai  
- [ ] Jest for Testing APIs  
- [ ] Supertest for Integration Testing  

## 13. Advanced Concepts
- [ ] Microservices Architecture  
- [ ] Message Queues (RabbitMQ, Kafka, BullMQ)  
- [ ] Worker Threads  
- [ ] Serverless Functions (AWS Lambda, Vercel)  

## 14. Deployment & DevOps
- [ ] PM2 & Process Management  
- [ ] Dockerizing Node.js Apps  
- [ ] Nginx Reverse Proxy  
- [ ] CI/CD (GitHub Actions, GitLab CI, Jenkins)  
- [ ] Cloud Deployment (AWS, Heroku, Vercel, Render)  

## 15. Best Practices
- [ ] Clean Project Structure  
- [ ] Config Management (dotenv)  
- [ ] Logging (Winston, Morgan, Pino)  
- [ ] Error Handling Strategy  
- [ ] Secure & Scalable Architecture  
- [ ] Performance Optimization  


---

## 📖 Extended Deep-Dive Notes

> The section below contains in-depth explanations, internals (V8, libuv, event loop), and runnable code examples for core Node.js concepts. For a dedicated Redis deep-dive, see [Redis Guide](../Redis/README.md).

### 📑 Topic Index

> Node.js is a JavaScript runtime built on Chrome’s V8 engine designed for scalable network applications and backend development.

| Topics                                                                        | Overview                                                                   |
| ----------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [01. Introduction & Global Environment](#01-introduction--global-environment) | What is Node.js, installation, runtime basics, REPL, versioning            |
| [02. Node.js Architecture & Event Loop](#02-nodejs-architecture--event-loop)  | Single-threaded model, non-blocking I/O, event loop phases, libuv          |
| [03. Core Modules Deep Dive](#03-core-modules-deep-dive)                      | fs, path, os, http, events, buffer, stream, crypto                         |
| [04. Modules & Package Management](#04-modules--package-management)           | CommonJS vs ESM, package.json, npm, semver, dependency management          |
| [05. Asynchronous Programming](#05-asynchronous-programming)                  | Callbacks, Promises, async/await, error handling, microtasks vs macrotasks |
| [06. Streams & Buffer Management](#06-streams--buffer-management)             | Readable, writable, duplex, transform streams, backpressure handling       |
| [07. Building HTTP Servers & APIs](#07-building-http-servers--apis)           | Creating servers, routing, middleware concept, REST API basics             |
| [08. Working with Databases](#08-working-with-databases)                      | MongoDB driver, connection pooling, transactions, SQL integration          |
| [09. Authentication & Security](#09-authentication--security)                 | JWT, bcrypt, sessions, cookies, CSRF, XSS protection                       |
| [10. Error Handling & Debugging](#10-error-handling--debugging)               | Custom errors, global error handling, logging, debugging tools             |
| [11. Testing & Quality Assurance](#11-testing--quality-assurance)             | Unit testing, integration testing, Jest, mocking                           |
| [12. Performance Optimization](#12-performance-optimization)                  | Profiling, memory leaks, clustering, worker threads, caching               |
| [13. Deployment & Production](#13-deployment--production)                     | PM2, Docker, environment configs, CI/CD, graceful shutdown                 |
| [14. CLI Tools Development](#14-cli-tools-development)                        | Building CLI tools, argument parsing, publishing npm packages              |
| [15. Advanced Node Internals](#15-advanced-node-internals)                    | Child processes, worker threads, Node-API, stream internals                |

### 01. Introduction & Global Environment

#### `Core Basics`

<details>
<summary><b >What is Node.js ?</b></summary>

Node.js is powered by the Chrome V8 JavaScript engine and operates on an event-driven, non-blocking I/O model, ensuring high throughput and scalability. It enables JavaScript execution outside the browser, supporting file system access, HTTP servers, database operations, and more.

**Key Characteristics:**

1️⃣ Single-threaded Event Loop:

- Runs on a single main thread
- Uses an event loop to handle thousands of connections without creating new threads per request.
- Reduces memory overhead compared to traditional multi-threaded servers.

2️⃣ Non-Blocking I/O

- File system, network, and database operations run asynchronously
- The main thread does not wait for operations to complete
- Operations trigger events instead of blocking execution.
- High performance for I/O-heavy applications

3️⃣ Event-Driven Architecture

- Built around events and callbacks
- Uses EventEmitter internally
- Perfect for real-time systems (chat, streaming, APIs)

4️⃣ Asynchronous Programming Model

- Supports callbacks, Promises, and async/await.
- Efficient handling of background operations.
- Prevents thread blocking during long-running tasks.

5️⃣ Built on V8 JavaScript Engine

- Powered by Chrome’s V8 engine
- JIT (Just-In-Time) compilation
- Converts JavaScript into optimized machine code

6️⃣ libuv Library and Cross-Platform

- Handles asynchronous I/O operations
- Uses internal thread pool for blocking tasks (DNS, FS)
- Cross-platform abstraction layer (Windows, macOS, Linux)
- Supports ARM (IoT, Raspberry Pi, containers)

7️⃣ NPM Ecosystem

- Includes npm (Node Package Manager).
- Access to millions of open-source packages.
- Rapid development through reusable libraries.
- Strong community support.

8️⃣ Highly Scalable & Worker Threads

- Handles many concurrent connections efficiently.
- Suitable for APIs, microservices and distributed systems.
- Works well with horizontal scaling strategies.
- True multi-threading for CPU-intensive tasks
- Offloads heavy computation from event loop

9️⃣ Stream-Based Processing

- Uses streams for handling large data.
- Supports readable, writable, duplex, and transform streams.
- Enables efficient memory usage for large files.

🔟 Fast Data Processing

- JSON is native to JavaScript.
- Fast JSON parsing and response handling
- Perfect for REST APIs and real-time data exchange.

1️⃣1️⃣ Production-Ready Features

- Works with PM2, systemd, Docker
- Graceful shutdown & cluster reloads
- Observability with Logging, metrics, tracing support

</details>

<details>
<summary><b >Node.js vs Browser JavaScript</b></summary>

Both run JavaScript, but in completely different environments with different purposes:

| Feature             | Browser JS                       | Node.js                           |
| ------------------- | -------------------------------- | --------------------------------- |
| **Purpose**         | UI interaction, DOM manipulation | Server-side logic, backend        |
| **Environment**     | Inside a web browser             | Runs on your machine/server       |
| **Global Object**   | `window`                         | `global`                          |
| **File System**     | No (security reasons)            | Yes (`fs` module)                 |
| **HTTP Requests**   | Fetch API / XMLHttpRequest       | Built-in `http`/`https` modules   |
| **Modules**         | ES Modules (`import/export`)     | CommonJS (`require`) + ES Modules |
| **Package Manager** | CDN / bundlers                   | npm / yarn                        |

</details>

<details>
<summary><b >Runtime vs Framework</b></summary>

**What is a Runtime?** => A Runtime is the environment where your code executes. It provides the core engine, memory management, and low-level system access needed to actually run your program.

**What is a Framework?** => A Framework is a pre-built structure/toolkit that provides rules, patterns, and tools to help you build applications faster. It runs on top of a runtime.

</details>

<details>
<summary><b >V8 Engine overview</b></summary>

V8 is the translator + executor — it takes your JavaScript code and turns it into machine code that your CPU can directly understand and run.

**_How V8 Works_**

```md
JS Code → [Parser] → AST → [Ignition] → Bytecode
↓
[TurboFan]
↓
Optimized Machine Code
↓
CPU Runs It
```

```javascript
/* Step 1 — Parsing V8 reads JS and builds an AST (Abstract Syntax Tree) */
const add = (a, b) => a + b;

/*
 V8 sees it as a tree:
 VariableDeclaration
   └── ArrowFunctionExpression
        ├── Params: [a, b]
        └── BinaryExpression: a + b
*/

/* Step 2 — Ignition (Interpreter) */

//Converts AST → **Bytecode** (faster to start executing)


// Ignition Bytecode (simplified):
LdaNamedProperty a        // Load variable 'a'
Add b                     // Add 'b' to it
Return                    // Return result


/* Step 3 — TurboFan (JIT Compiler) */

/* Watches **hot code** (frequently run code) and compiles it to
highly optimized **native machine code** */


// TurboFan output (conceptual x86 assembly):
MOV eax, [a]
ADD eax, [b]
RET



/* Step 4 — Garbage Collection (Orinoco) */

// V8 automatically frees unused memory so you don't have to


function createUser() {
  let user = { name: 'Rahim', age: 25 }; // allocated in memory
  return user.name;
} // 'user' object → no longer referenced → V8 GC cleans it up

```

**Example: V8 in Chrome DevTools**

```javascript
// This function will be HOT (called many times) → TurboFan optimizes it
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Cold run — Ignition interprets
console.time('cold');
fibonacci(30);
console.timeEnd('cold'); // ~15ms

// Hot run — TurboFan has compiled it
console.time('hot');
fibonacci(30);
console.timeEnd('hot'); // ~2ms ← same code, MUCH faster ⚡
```

**V8 Engine — Key Components**

| Component     | Role                                                          |
| ------------- | ------------------------------------------------------------- |
| **Parser**    | Reads JS → builds AST                                         |
| **Ignition**  | AST → Bytecode (interpreter)                                  |
| **TurboFan**  | Bytecode → Optimized machine code (JIT)                       |
| **Orinoco**   | Garbage Collector — frees unused memory                       |
| **Liftoff**   | WebAssembly baseline compiler                                 |
| **Sparkplug** | Fast non-optimizing JS compiler (between Ignition & TurboFan) |

</details>

<details>
<summary><b >package.json basics</b></summary>

TypeScript is an open-source programming language developed

</details>

#### `Global Environment`

<details>
<summary><b >global object</b></summary>

TypeScript is an open-source programming language developed

</details>

<details>
<summary><b >process object</b></summary>

TypeScript is an open-source programming language developed

</details>

<details>
<summary><b >process.argv</b></summary>

TypeScript is an open-source programming language developed

</details>

<details>
<summary><b >Environment variables</b></summary>

TypeScript is an open-source programming language developed

</details>

<details>
<summary><b >__dirname, __filename</b></summary>

TypeScript is an open-source programming language developed

</details>

<details>
<summary><b >process exit events</b></summary>

TypeScript is an open-source programming language developed

</details>

### 02. Node.js Architecture & Event Loop

<details>
<summary><b >Single-threaded model</b></summary>

Node.js is single-threaded for JavaScript, but internally it can still use a thread pool (via libuv) for some heavy I/O tasks.

**The Single-Threaded Model in Node.js means:\***

- JavaScript runs on one main thread
- Tasks execute sequentially
- I/O operations are asynchronous
- The event loop handles callbacks and concurrency

**Why Node.js Uses a Single Thread**

The single-threaded design is ideal for I/O-heavy applications, such as:

- API servers
- Real-time chat applications
- Streaming platforms
- Microservices

**Advantages:**

- ✔ Lower memory usage – fewer threads are created
- ✔ No context switching overhead
- ✔ High scalability for concurrent requests

```js
/! Example 1: Execution Order /;

console.log('1️⃣  Start'); // Runs first

setTimeout(() => {
  console.log('3️⃣  Timeout done'); // Runs last (async)
}, 0);

console.log('2️⃣  End'); // Runs second

// OUTPUT:
// 1️⃣  Start
// 2️⃣  End
// 3️⃣  Timeout done

> Even with 0ms delay, the timeout waits — the main thread finishes first.
```

```js
/! Example 2: Non-Blocking Web Server /;

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/fast') {
    // ✅ Instant response — doesn't block others
    res.end('Fast response!');
  }

  if (req.url === '/file') {
    // ✅ File read is handed off to libuv (background)
    // The single thread is FREE to handle other requests
    fs.readFile('./data.txt', 'utf8', (err, data) => {
      res.end(data || 'File loaded!');
    });
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

**What happens when 3 users hit `/file` simultaneously:**

```
User A → readFile handed to libuv → thread FREE ──┐
User B → readFile handed to libuv → thread FREE ──┤ All handled!
User C → readFile handed to libuv → thread FREE ──┘
         ↓
    Callbacks fire when each file is ready
```

> **The golden rule: Node.js is fast not because it's multi-threaded — but because it never waits. It delegates and moves on.**

</details>

<details>
<summary><b >Event-driven architecture</b></summary>

Event-Driven Architecture is a programming pattern where the flow of the program is controlled by events and event handlers (listeners).

#### 1. What is an Event?

An event is any action or occurrence that happens in the system.

- A user sends an HTTP request
- A file finishes reading
- A database query completes
- A timer finishes
- A button is clicked (in browsers)

```md
#### Event-Driven Flow:

User Action / System Event
↓
Event Queue
↓
Event Loop
↓
Event Listener
↓
Callback Function Executes
```

```js
/! Real-World Example — HTTP Server

const http = require("http");

const server = http.createServer();

// Listen for "request" events
server.on("request", (req, res) => {
  console.log(`Request received: ${req.url}`);
  res.end("Hello World!");
});

// Listen for "connection" events
server.on("connection", (socket) => {
  console.log("New client connected!");
});

// Listen for "error" events
server.on("error", (err) => {
  console.error(`Server error: ${err.message}`);
});

server.listen(3000, () => {
  console.log("Listening on port 3000...");
});

```

```md
Browser hits localhost:3000
│
▼
"connection" fires ──▶ logs "New client connected!"
│
▼
"request" fires ──▶ logs URL, sends response
```

```js
/! Real-World Example — File Stream

const fs = require("fs");

const stream = fs.createReadStream("bigfile.txt");

// Fires repeatedly as chunks arrive
stream.on("data", (chunk) => {
  console.log(`Received ${chunk.length} bytes`);
});

// Fires once when the file is fully read
stream.on("end", () => {
  console.log("File reading complete ✅");
});

// Fires if something goes wrong
stream.on("error", (err) => {
  console.error("Read error:", err.message);
});
```

```md
bigfile.txt (500MB)
│
▼
"data" ──▶ chunk 1 (64KB)
"data" ──▶ chunk 2 (64KB)
"data" ──▶ chunk 3 (64KB)
...
"end" ──▶ done! ✅

✅ Memory stays low — no full file loaded at once
```

</details>

<details>
<summary><b >Non-blocking I/O</b></summary>

Non-Blocking I/O (Input/Output) means that when the program performs operations like reading files, accessing a database, or making network requests, it does not stop the execution of other code while waiting for the operation to complete.

**Blocking (Synchronous) I/O:**

The program waits until the task finishes before moving to the next line.

```js
const fs = require('fs');

console.log('1️⃣  Start');

// 🚨 BLOCKS the entire thread until file is read
const data = fs.readFileSync('file.txt', 'utf8');
console.log('2️⃣  File data:', data);

console.log('3️⃣  End');

// OUTPUT (in order, but thread was FROZEN at step 2):
// 1️⃣  Start
// 2️⃣  File data: hello world
// 3️⃣  End
```

```
Timeline:
──────────────────────────────────────
[Start] ──▶ [😴 FROZEN reading file] ──▶ [End]
             nobody else gets served!
```

**Non-Blocking (Asynchronous) I/O:**

The program does not wait for the operation to finish.

```js
const fs = require('fs');

console.log('1️⃣  Start');

// ✅ Hands off to OS — thread stays FREE
fs.readFile('file.txt', 'utf8', (err, data) => {
  console.log('3️⃣  File data:', data); // fires LATER
});

console.log('2️⃣  End');

// OUTPUT:
// 1️⃣  Start
// 2️⃣  End              ← thread didn't wait!
// 3️⃣  File data: hello world  ← callback fires when ready
```

```
Timeline:
──────────────────────────────────────────────
[Start] ──▶ [delegate file read] ──▶ [End] ──▶ [callback fires]
                    ↓
              OS reads file
              in background ✅
```

---

## What Counts as I/O?

```
I/O = anything that talks to the outside world

┌─────────────────────────────────────────────┐
│              I/O OPERATIONS                 │
│                                             │
│  📁 File System    → fs.readFile()          │
│  🌐 Network        → http.request()         │
│  🗄️  Database      → db.query()             │
│  ⏱️  Timers        → setTimeout()           │
│  🔌 Sockets        → net.connect()          │
│  🖥️  Child Process → exec()                 │
└─────────────────────────────────────────────┘

All of these are handed off to libuv — thread stays FREE
```

</details>

<details>
<summary><b >libuv overview</b></summary>

libuv is the C library underneath Node.js that handles all asynchronous I/O operations.

```js
// OS-Level Async (Network I/O)

const net = require('net');

// Network I/O → handled directly by OS kernel
// libuv uses: epoll (Linux), kqueue (macOS), IOCP (Windows)
const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    socket.write('Echo: ' + data);
  });
});

server.listen(3000);
```

```
Network request arrives
        │
        ▼
  libuv tells OS: "notify me when data arrives"
        │
        ▼
  OS watches the socket (epoll/kqueue)
        │
  Data arrives!
        │
        ▼
  OS notifies libuv ──▶ callback pushed to queue ──▶ Event Loop runs it ✅

  ✅ Zero threads used — pure OS-level efficiency

```

</details>

</details>

<details>
<summary><b >Thread pool concept</b></summary>

libuv is the C library underneath Node.js that handles all asynchronous I/O operations.

```js
// OS-Level Async (Network I/O)

const net = require('net');

// Network I/O → handled directly by OS kernel
// libuv uses: epoll (Linux), kqueue (macOS), IOCP (Windows)
const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    socket.write('Echo: ' + data);
  });
});

server.listen(3000);
```

```
Network request arrives
        │
        ▼
  libuv tells OS: "notify me when data arrives"
        │
        ▼
  OS watches the socket (epoll/kqueue)
        │
  Data arrives!
        │
        ▼
  OS notifies libuv ──▶ callback pushed to queue ──▶ Event Loop runs it ✅

  ✅ Zero threads used — pure OS-level efficiency

```

</details>

#### Event Loop Deep Dive

- Event loop phases:
  - Timers
  - Pending callbacks
  - Idle / prepare
  - Poll
  - Check
  - Close callbacks
- Microtasks queue
- Macrotasks queue
- process.nextTick vs setImmediate
- setTimeout vs setImmediate
- Event loop internals

### 03. Core Modules (Built-in Modules)

<details>
<summary><b >File System (fs)</b></summary>

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
<summary><b >Path</b></summary>

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
- Backpressure basics

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

<details>
<summary><b >CommonJS (require, module.exports)</b></summary>

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
<summary><b >ES Modules (import/export)</b></summary>

A module is just a file. Every .js file in ES Modules is its own isolated unit with its own scope, variables, and logic.

**CommonJS — Key Takeaways**

1. **`module.exports`** — what your file shares with the world; nothing leaks out unless explicitly exported

</details>

-
- CJS vs ESM differences
- Module resolution algorithm
- node_modules structure

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

- Callback pattern
- Callback hell
- Promises
- Promise chaining
- async/await
- try/catch with async
- Error propagation
- Unhandled rejections
- Promise.all
- Promise.race
- util.promisify
- AbortController

### 06. Streams & Buffer Management

- What is a Stream?
- Types of Streams:
  - Readable
  - Writable
  - Duplex
  - Transform
- Stream events
- Pipe chaining
- Transform streams
- Backpressure deep explanation
- Handling large files efficiently
- Buffer vs Stream comparison

### 07. Building HTTP Servers & REST APIs

- Creating HTTP server
- REST API fundamentals
- Basic routing logic
- Handling query parameters
- Parsing request body
- Handling JSON
- Middleware pattern
- CORS handling
- Serving static files
- API versioning
- Status code best practices
- Error response standardization
- Environment configuration

### 08. Working with Databases

#### MongoDB

- Connecting with native driver
- Connection pooling
- CRUD operations
- Transactions
- Handling DB errors
- Data validation
- Mongoose overview

#### SQL

- PostgreSQL/MySQL integration
- Basic queries
- ORM overview
- Migration concept

### 09. Authentication & Security

- Password hashing (bcrypt)
- JWT creation & verification
- Access vs Refresh token
- Sessions vs Tokens
- Cookie handling
- CSRF protection
- XSS prevention
- Rate limiting
- Helmet usage
- Secure headers
- Environment variable security
- Input validation
- Avoiding SQL/NoSQL injection
- HTTPS & TLS basics

### 10. Error Handling & Debugging

- Error-first callback pattern
- Creating custom error classes
- Centralized error handling
- try/catch best practices
- Logging strategies
- Unhandled rejections
- Stack trace analysis
- Debug flag
- Using Node Inspector
- Using debug module

### 11. Testing & Quality Assurance

- Unit testing basics
- Integration testing
- Testing async code
- Jest setup
- Mocha overview
- Supertest for API testing
- Mocking
- Test coverage
- TDD basics

### 12. Performance & Optimization

- Performance hooks
- Profiling
- Memory usage monitoring
- Detecting memory leaks
- Garbage collection basics
- Cluster module
- Worker threads
- Horizontal scaling
- Load balancing
- Caching strategy (Redis overview)
- Gzip compression
- HTTP keep-alive

### 13. Deployment & Production

- Production environment setup
- dotenv usage
- PM2 process manager
- Dockerizing Node app
- CI/CD basics
- Logging in production
- Monitoring tools
- Health checks
- Graceful shutdown
- Handling SIGINT & SIGTERM
- Zero downtime deployment

### 14. CLI Tools Development

- Creating CLI tool
- Parsing arguments
- Commander usage
- Yargs usage
- Shebang (#!/usr/bin/env node)
- Making CLI executable
- Publishing CLI to npm

### 15. Advanced Node Internals

- Child process (exec, spawn, fork)
- Worker threads
- Cluster vs Worker comparison
- Event loop internals deep dive
- Libuv deep dive
- Native addons overview (C++)
- Node-API introduction
- Stream internals
- ESM loader hooks

