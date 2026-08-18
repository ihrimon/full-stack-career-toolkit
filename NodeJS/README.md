# 💚 Node.js Mastery Roadmap

> Node.js is a JavaScript runtime built on Chrome's V8 engine, designed for scalable network applications and backend development. This roadmap takes you from fundamentals to production-grade backend engineering, phase by phase — internals, explanations, and runnable examples are folded directly into the topic they belong to, so you read top-to-bottom instead of jumping between a checklist and a separate notes section.

---

## 📑 Table of Contents

**🟢 Phase 1 — Foundations**

- [01. Node.js Fundamentals](#01-nodejs-fundamentals) ✅
- [02. Node.js Architecture & Event Loop](#02-nodejs-architecture--event-loop) ✅
- [03. Core Modules](#03-core-modules) ✅
- [04. Modules & Package Management](#04-modules--package-management) ✅
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

### 03. Core Modules ✅

- [x] File System (`fs`)
- [x] Path Module
- [x] HTTP & HTTPS Module
- [x] URL Module
- [x] Events & EventEmitter
- [x] Buffer
- [x] Streams (intro)
- [x] OS Module
- [x] Crypto
- [x] Timers

📖 **[Deep dive → 03. Core Modules](./03-Core%20Modules/README.md)**

### 04. Modules & Package Management

- [x] CommonJS (`require`, `module.exports`)
- [x] ES Modules (`import`/`export`)
- [x] CJS vs ESM differences
- [x] Module resolution algorithm
- [x] `node_modules` structure
- [x] `package.json` deep dive (scripts, dependencies, versioning, main/type)
- [x] npm ecosystem (npx, semver, yarn/pnpm, publishing)

📖 **[Deep dive -> 04. Modules & Package Management](./04-Modules%20%26%20Package%20Management/README.md)**

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
