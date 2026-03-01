# Full Stack Interview Preparation Guide

> This guide is created as a complete interview preparation roadmap for **Full Stack Developers**. It is designed to help candidates revise core concepts, strengthen **fundamentals**, and confidently face **technical interviews** across the entire full stack ecosystem.

---

## 📑 Next.js

> Next.js is a full-stack React framework built by Vercel for building scalable, production-ready web applications with hybrid rendering capabilities.

| Topics                        | Overview                                               |
| ----------------------------- | ------------------------------------------------------ |
| 01. Next.js Fundamentals      | Core concepts, App Router, RSC, folder structure       |
| 02. Advanced Routing          | Dynamic routes, layouts, intercepting, parallel routes |
| 03. Rendering Strategies      | SSR, SSG, ISR, Streaming, Partial Prerendering         |
| 04. Data Fetching & Mutations | Server Components, fetch, Server Actions, React Query  |
| 05. Styling & Theming         | Tailwind, CSS Modules, Design Systems, Themes          |
| 06. State Management          | Client State, Server State, Hydration strategies       |
| 07. API Routes & Middleware   | Route Handlers, Edge Runtime, Middleware patterns      |
| 08. Authentication & Auth     | NextAuth, Clerk, Custom Auth, Session Management       |
| 09. Database & ORM            | Prisma, Drizzle, PlanetScale, tRPC integration         |
| 10. Performance Optimization  | Bundle analysis, caching, PPR, Turbopack               |
| 11. Testing Strategy          | Unit, Integration, E2E, Visual Regression              |
| 12. Deployment & DevOps       | Vercel, Docker, CI/CD, Monitoring, Edge Functions      |
| 13. Advanced Patterns         | Code splitting, Micro-frontends, i18n, PWA             |
| 14. TypeScript Mastery        | Generics, Utility Types, Zod Schemas, type-safe APIs   |
| 15. Production Checklist      | SEO, Security, Monitoring, Error Boundaries, Analytics |


### 01. Next.js Fundamentals

- [ ] Next.js 15+ Architecture (App Router only)
- [ ] React Server Components (RSC) vs Client Components ('use client')
- [ ] File-based Routing (app/ directory conventions)
- [ ] Metadata API (title, description, OpenGraph, robots.txt)
- [ ] Loading UI & Suspense Boundaries
- [ ] Error Boundaries (error.js, not-found.js)
- [ ] App Router vs Pages Router migration
- [ ] Turbopack vs Webpack (next dev --turbo)
- [ ] Environment Variables (NEXT_PUBLIC_ prefix)
- [ ] TypeScript configuration (tsconfig.json, next.config.js)


### 02. Advanced Routing

- [ ] Dynamic Routes ([slug], [id], catch-all [...slug])
- [ ] Nested Layouts & Templates (layout.js)
- [ ] Route Groups ((marketing), (auth)) for organization
- [ ] Parallel Routes (@analytics, @modal)
- [ ] Intercepting Routes (modal navigation)
- [ ] Route Segments & Colocation (components next to route files)
- [ ] generateStaticParams for dynamic SSG
- [ ] Redirects & Rewrites (next.config.js)


### 03. Rendering Strategies

- [ ] Static Rendering (default in App Router)
- [ ] Server-Side Rendering (force-dynamic, cookies(), headers())
- [ ] Static Site Generation (generateStaticParams)
- [ ] Incremental Static Regeneration (revalidate, revalidatePath)
- [ ] Streaming with Suspense
- [ ] Partial Prerendering (PPR) - Next 15+
- [ ] Dynamic vs Static rendering detection
- [ ] Caching strategies (fetch cache: 'force-cache')


### 04. Data Fetching & Mutations

- [ ] Server Components data fetching (async components)
- [ ] fetch() with Next.js extensions (cache, next: { revalidate })
- [ ] Server Actions (use optimistic updates)
- [ ] React Query / SWR in Client Components
- [ ] Streaming data with use() directive
- [ ] Mutations with revalidatePath, revalidateTag
- [ ] Error handling (React Error Boundaries)
- [ ] Loading states (loading.js, Suspense)


### 05. Styling & Theming

- [ ] Tailwind CSS + clsx + cn() utility
- [ ] CSS Modules with Sass/SCSS
- [ ] CSS-in-JS (styled-components, Emotion)
- [ ] Shadcn/ui component library
- [ ] Theme Provider (dark/light mode)
- [ ] CSS Variables & Design Tokens
- [ ] Global CSS optimization
- [ ] Font Optimization (next/font)


### 06. State Management

- [ ] Client State (useState, useReducer)
- [ ] Context API with useContext
- [ ] Zustand for global state
- [ ] Server State (React Query, SWR)
- [ ] URL State (useSearchParams)
- [ ] Hydration mismatch prevention
- [ ] Optimistic Updates with Server Actions


### 07. API Routes & Middleware

- [ ] Route Handlers (app/api/route.ts)
- [ ] Edge Runtime vs Node.js Runtime
- [ ] Middleware (middleware.ts) - auth, redirects
- [ ] Request/Response helpers (NextRequest, NextResponse)
- [ ] Rate limiting & CORS
- [ ] Streaming responses (ReadableStream)


### 08. Authentication & Auth

- [ ] NextAuth.js v5 (Auth.js)
- [ ] Clerk integration
- [ ] Custom JWT + Cookies implementation
- [ ] Server-side session validation
- [ ] Role-Based Access Control (RBAC)
- [ ] Protected routes with middleware
- [ ] OAuth providers (Google, GitHub)


### 09. Database & ORM

- [ ] Prisma ORM + PlanetScale/Supabase
- [ ] Drizzle ORM + Zod schemas
- [ ] tRPC for type-safe APIs
- [ ] Database connection pooling
- [ ] Transactions & batch operations
- [ ] Server Actions + DB mutations


### 10. Performance Optimization

- [ ] Bundle Analyzer (next-bundle-analyzer)
- [ ] Dynamic Imports & Code Splitting
- [ ] next/image optimization
- [ ] Font Optimization (next/font)
- [ ] Script Optimization (next/script)
- [ ] Turbopack SWC compilation
- [ ] Partial Prerendering (PPR)


### 11. Testing Strategy

- [ ] Unit Tests (Jest + React Testing Library)
- [ ] Integration Tests (msw for API mocking)
- [ ] E2E Tests (Playwright/Cypress)
- [ ] Visual Regression Testing
- [ ] Testing Library User Event best practices


### 12. Deployment & DevOps

- [ ] Vercel deployment (preview branches)
- [ ] Static Export (next export)
- [ ] Docker multi-stage builds
- [ ] CI/CD (GitHub Actions, Vercel)
- [ ] Environment validation
- [ ] Preview deployments


### 13. Advanced Patterns

- [ ] Internationalization (next-intl)
- [ ] Progressive Web App (PWA)
- [ ] Micro-frontends with Module Federation
- [ ] WebSockets + Server-Sent Events
- [ ] Real-time with Server Actions


### 14. TypeScript Mastery

- [ ] Generics & Utility Types
- [ ] Zod schema validation
- [ ] Type-safe Server Actions
- [ ] React Hook Form + Zod resolver
- [ ] tRPC end-to-end types


### 15. Production Checklist

- [ ] SEO (Metadata API, sitemap.xml)
- [ ] Security Headers (next-secure-headers)
- [ ] Error Monitoring (Sentry)
- [ ] Performance Monitoring (Web Vitals)
- [ ] Lighthouse 100/100 scores
- [ ] Accessibility (a11y) compliance

📑 01. Core Architecture & Mental Model
🔹 Framework Understanding

 Why Next.js over React (real production perspective)

 Hybrid Rendering Architecture

 File-based Routing Philosophy

 How Next.js compiles & bundles (Turbopack vs Webpack)

 Build vs Runtime Concept

🔹 App Router Deep Understanding (Next 13+)

 App Router Architecture

 Layout Hierarchy Model

 Server-first mindset

 Streaming & Partial Rendering

 Route Segments & Rendering Tree

📂 02. Routing System (Advanced Level)
🔹 File-Based Routing

 Static Routes

 Dynamic Routes [id]

 Catch-All [...slug]

 Optional Catch-All [[...slug]]

 Route Groups (group)

 Parallel Routes @slot

 Intercepting Routes (.)

🔹 Layout System

 Root Layout

 Nested Layouts

 Template vs Layout difference

 Loading.js behavior

 Error.js & Not-found.js

🔹 Navigation

 useRouter vs next/navigation

 Link Prefetching Behavior

 Soft Navigation vs Hard Reload

 Redirect vs Rewrite

🎨 03. Rendering & Performance Strategy
🔹 Rendering Modes

 CSR Deep Understanding

 SSR Lifecycle

 SSG Lifecycle

 ISR Revalidation Strategy

 Edge Rendering

🔹 Rendering Decision Matrix

 When to choose SSR

 When to choose SSG

 When to use ISR

 When to use Edge Runtime

🔹 Streaming & Suspense

 React Suspense in Server Components

 Streaming UI

 Progressive Hydration

🔄 04. Data Fetching (Production Level)
🔹 App Router Data Fetching

 Native fetch caching

 cache: 'force-cache'

 cache: 'no-store'

 revalidate options

 Route Segment Config

🔹 Advanced Fetching

 Server Actions (Next 14+)

 Mutation Handling

 Form Actions

 Optimistic UI

🔹 Client Data Fetching

 SWR

 React Query

 Error Boundaries with Data Fetch

🔐 05. Authentication & Security
🔹 Authentication Systems

 OAuth with NextAuth.js

 Credentials-based login

 JWT Strategy

 Session Strategy

🔹 Security Best Practices

 HttpOnly Cookies

 CSRF Protection

 XSS Prevention

 Secure Headers

 Rate Limiting API Routes

🔹 Route Protection

 Middleware Auth Guard

 Role-based Access Control

 Server Component Session Check

🧠 06. Server vs Client Component Mastery
🔹 Server Components

 Default behavior

 Data fetching without API layer

 Performance advantage

 Security benefits

🔹 Client Components

 "use client" directive

 Hydration Cost

 Bundle Impact Analysis

🔹 Optimization Strategy

 Minimizing Client Components

 Splitting heavy libraries

 Dynamic Imports

🌍 07. API Layer & Backend Integration
🔹 API Routes

 App Router API (app/api)

 RESTful API Design

 Error Handling Strategy

 Request Validation (Zod / Yup)

🔹 Database Integration

 MongoDB Native Driver

 Prisma ORM

 Connection Pooling

 Transactions

 Edge-compatible DB

📦 08. Performance Optimization (Real Production)
🔹 Bundle Optimization

 Code Splitting

 Tree Shaking

 next-bundle-analyzer

 Removing unused dependencies

🔹 Image & Asset Optimization

 next/image optimization

 Remote patterns config

 Lazy Loading Strategy

 Font Optimization

🔹 Caching Strategy

 HTTP Cache Headers

 CDN Caching

 Edge Caching

 Stale-While-Revalidate Pattern

🧪 09. Testing Strategy
🔹 Unit Testing

 Jest Setup

 Testing Server Components

 Mocking fetch

🔹 Component Testing

 React Testing Library

 Testing Suspense

 Testing Loading & Error states

🔹 E2E Testing

 Playwright

 Cypress

 Testing Auth Flow

🚀 10. Deployment & DevOps
🔹 Deployment Targets

 Deploy to Vercel

 Deploy to AWS

 Dockerizing Next.js

 Static Export vs Server App

🔹 Production Readiness

 Environment Config

 Logging Strategy

 Monitoring (Sentry)

 Graceful Shutdown

🌐 11. Advanced Engineering Topics
🔹 Middleware & Edge

 Edge Runtime Concept

 Request Interception

 Geo-based Rendering

 A/B Testing via Middleware

🔹 Internationalization

 Built-in i18n Routing

 Dynamic Locale Handling

 SEO with Multi-language

🔹 Real-time Systems

 WebSockets

 Socket.io integration

 Serverless limitations

🏆 12. Architecture & System Design
🔹 Folder Structure Patterns

 Feature-based structure

 Modular architecture

 Domain-driven folder organization

🔹 Scalable Patterns

 Monorepo setup

 Micro-frontends

 Turborepo integration

🎯 13. SEO & Accessibility Mastery
🔹 SEO

 Metadata API

 Dynamic Metadata

 OpenGraph Tags

 Sitemap Generation

 Robots.txt

🔹 Accessibility

 Semantic HTML

 Keyboard Navigation

 ARIA roles

 Lighthouse optimization

🧩 14. Debugging & Profiling

 React DevTools

 Next.js Debug Logs

 Memory leak detection

 Hydration error debugging

 Performance profiling

🧠 15. Interview & Senior-Level Topics

 Explain Next.js rendering strategies clearly

 Explain Server vs Client tradeoffs

 Design a scalable Next.js architecture

 Discuss performance bottlenecks

 Explain caching deeply

 Compare Next.js vs pure React apps

 Compare App Router vs Pages Router



## 📑 Node.js

> Node.js is a JavaScript runtime built on Chrome’s V8 engine designed for scalable network applications and backend development.

| Topics                                                                       | Overview                                                                   |
| ---------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [01. Introduction & Environment Setup](#01-introduction--environment-setup)  | What is Node.js, installation, runtime basics, REPL, versioning            |
| [02. Node.js Architecture & Event Loop](#02-nodejs-architecture--event-loop) | Single-threaded model, non-blocking I/O, event loop phases, libuv          |
| [03. Core Modules Deep Dive](#03-core-modules-deep-dive)                     | fs, path, os, http, events, buffer, stream, crypto                         |
| [04. Modules & Package Management](#04-modules--package-management)          | CommonJS vs ESM, package.json, npm, semver, dependency management          |
| [05. Asynchronous Programming](#05-asynchronous-programming)                 | Callbacks, Promises, async/await, error handling, microtasks vs macrotasks |
| [06. Streams & Buffer Management](#06-streams--buffer-management)            | Readable, writable, duplex, transform streams, backpressure handling       |
| [07. Building HTTP Servers & APIs](#07-building-http-servers--apis)          | Creating servers, routing, middleware concept, REST API basics             |
| [08. Working with Databases](#08-working-with-databases)                     | MongoDB driver, connection pooling, transactions, SQL integration          |
| [09. Authentication & Security](#09-authentication--security)                | JWT, bcrypt, sessions, cookies, CSRF, XSS protection                       |
| [10. Error Handling & Debugging](#10-error-handling--debugging)              | Custom errors, global error handling, logging, debugging tools             |
| [11. Testing & Quality Assurance](#11-testing--quality-assurance)            | Unit testing, integration testing, Jest, mocking                           |
| [12. Performance Optimization](#12-performance-optimization)                 | Profiling, memory leaks, clustering, worker threads, caching               |
| [13. Deployment & Production](#13-deployment--production)                    | PM2, Docker, environment configs, CI/CD, graceful shutdown                 |
| [14. CLI Tools Development](#14-cli-tools-development)                       | Building CLI tools, argument parsing, publishing npm packages              |
| [15. Advanced Node Internals](#15-advanced-node-internals)                   | Child processes, worker threads, Node-API, stream internals                |

### 01. Introduction & Environment Setup

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

TypeScript is an open-source programming language developed

</details>

<details>
<summary><b >Runtime vs Framework</b></summary>

TypeScript is an open-source programming language developed

</details>

<details>
<summary><b >Node.js Use Cases</b></summary>

TypeScript is an open-source programming language developed

</details>

<details>
<summary><b >V8 Engine overview</b></summary>

TypeScript is an open-source programming language developed

</details>

<details>
<summary><b >Node.js Architecture overview</b></summary>

TypeScript is an open-source programming language developed

</details>

#### Installation & Setup

<details>
<summary><b >Installing Node (nvm recommended)</b></summary>

TypeScript is an open-source programming language developed

</details>

<details>
<summary><b >LTS vs Current versions</b></summary>

TypeScript is an open-source programming language developed

</details>

<details>
<summary><b >Checking version</b></summary>

TypeScript is an open-source programming language developed

</details>

<details>
<summary><b >Node REPL usage</b></summary>

TypeScript is an open-source programming language developed

</details>

<details>
<summary><b >Running .js files</b></summary>

TypeScript is an open-source programming language developed

</details>

<details>
<summary><b >Project initialization (npm init)</b></summary>

TypeScript is an open-source programming language developed

</details>

<details>
<summary><b >package.json basics</b></summary>

TypeScript is an open-source programming language developed

</details>

<details>
<summary><b >Project folder structure best practices</b></summary>

TypeScript is an open-source programming language developed

</details>

#### Global Environment

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

#### Execution Model

<details>
<summary><b >Blocking vs Non-blocking</b></summary>

TypeScript is an open-source programming language developed

</details>

<details>
<summary><b >Synchronous vs Asynchronous</b></summary>

TypeScript is an open-source programming language developed

</details>

### 02. Node.js Architecture & Event Loop

- Single-threaded model
- Event-driven architecture
- Non-blocking I/O
- libuv overview
- Thread pool concept

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

#### File System (fs)

- readFile / readFileSync
- writeFile / writeFileSync
- appendFile
- fs.promises
- Directory operations
- File watching
- File streams

#### Path

- path.join
- path.resolve
- path.basename
- path.extname

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

- CommonJS (require, module.exports)
- ES Modules (import/export)
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

## 📑 TypeScript

| Topics                                                                                | Overview                                                               |
| ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [01. Introduction & Project Setup](#01-introduction--project-setup)                   | TypeScript basics, setup, and project initialization workflow          |
| [02. Core Types & Type System Foundations](#02-core-types--type-system-foundations)   | Primitive types, arrays, objects, unions, literals, and fundamentals   |
| [03. Functions & Function Typing](#03-functions--function-typing)                     | Typed functions, parameters, return types, optional & default values   |
| [04. Type Narrowing & Type System Analysis](#04-type-narrowing--type-system-analysis) | Conditional checks, control flow, and safe type refinement             |
| [05. Generics & Reusable Type Patterns](#05-generics--reusable-type-patterns)         | Writing flexible, reusable, and type-safe components using generics    |
| [06. Classes & OOP in TypeScript](#06-classes--oop-in-typescript)                     | Classes, interfaces, access modifiers, inheritance, and OOP principles |
| [07. Built-in Utility Types](#07-built-in-utility-types)                              | Leveraging Partial, Pick, Omit, and other utility types effectively    |

### 01. Introduction & Project Setup

<details>
<summary><b >What is TypeScript ?</b></summary>

TypeScript is an open-source programming language developed by Microsoft that's a superset of JavaScript, adding optional static typing and advanced features like interfaces and generics. It compiles down to plain JavaScript, making it fully compatible with all existing JS code and environments. This allows developers to catch errors at compile time rather than runtime, improving code reliability for large-scale applications.

</details>

<details>
<summary><b >Why Use TypeScript ? </b></summary>

There are several reasons why developers prefer TypeScript over plain JavaScript:

- Superior Tooling:
  - Provides IntelliSense, autocompletion,
  - Refactoring, and navigation in IDEs.
- Early Error Detection at Compile Time
- Enhanced Code Quality
  - Static typing ensures predictability—no unexpected type changes.
  - Safe refactoring across large files
- Better Maintainability
  - Clearer Codebase
  - Easier Debugging
- Improved Team Collaboration
  - Explicit type contracts define function inputs/outputs.
  - Consistent codebase standards across developers.
- Scalability
  - Handles large codebases with modules and namespaces.
  - Supports modular architecture for growing apps.
- Smart Type Inference
  - Minimal Type Annotations
  - Auto-Completion
- Better Integration with Modern Frameworks
  - Seamless Integration
  - Strict Mode in JavaScript
- Community and Ecosystem Support
  - Growing Ecosystem
  - Active Development and Maintenance
  - Future-Proofing
  </details>

<details>
<summary><b >TypeScript vs JavaScript</b></summary>

| Feature/Aspect         | JavaScript                     | TypeScript                            |
| ---------------------- | ------------------------------ | ------------------------------------- |
| Typing System          | Dynamic (runtime)              | Static (compile-time, optional)       |
| Error Detection        | Runtime                        | Compile-time                          |
| File Extension         | `.js`                          | `.ts`                                 |
| Compilation            | Not required                   | Required (Transpiled using TSC)       |
| Tooling & IntelliSense | Basic IDE support              | IntelliSense, refactoring, navigation |
| Scalability            | Good for small/medium projects | Built for large enterprise apps       |
| Learning Curve         | Easy for beginners             | Slightly harder than JavaScript       |

</details>

<details>
<summary><b >How TypeScript Works ? </b></summary>

TypeScript operates through a compilation pipeline that transforms your .ts code into executable JavaScript.

Core Compilation Flow:

- **Parsing** → TypeScript compiler (tsc) reads .ts / .tsx files and converts the source code into an Abstract Syntax Tree (AST) that represents the program structure.
- **Binding** → Identifiers such as variables, functions, classes, and imports are linked across scopes and files.
- **Type Checking** → Analyzes types of all variables, parameters, returns—catches errors before runtime
- **Emission (Transpilation)** → All TypeScript-specific syntax and type annotations are removed, and clean JavaScript (.js) files are generated according to tsconfig.json.
- **Execution** → The generated JavaScript runs normally in browsers or Node.js, with no TypeScript overhead at runtime.

```javascript
// Compilation stages

TypeScript Source (.ts / .tsx)
    ↓
Parsing
    ↓
Binding
    ↓
Type Checking
    ↓
Emission / Transpilation
    ↓
JavaScript Output (.js)
    ↓
Browser / Node.js
```

</details>

<details>
<summary><b >Installation & Environment Setup</b></summary>

To work with TypeScript, you need the following tools installed on your system:

- Node.js (JavaScript runtime)
- npm (Node Package Manager)
- TypeScript Compiler (tsc)

```bash
  # TypeScript Installation process

  Install Node.js
      ↓
  Install TypeScript Compiler (tsc)
      ↓
  Create a Project Folder
      ↓
  Initialize TypeScript Configuration (tsconfig.json)
      ↓
  Write TypeScript Files (.ts / .tsx)
      ↓
  Compile TypeScript using tsc
      ↓
  Run the Generated JavaScript (.js)

```

```bash
  # one-liner setup

  npm install -g typescript ts-node && mkdir ts-app && cd ts-app && npm init -y && tsc --init

  # Essential dev tools

  npm i -D @types/node ts-node nodemon

  # Run directly (no compile step)

  npx ts-node src/index.ts
```

</details>

<details>
<summary><b>Basic Overview of tsconfig.json</b></summary>

The tsconfig.json file is the configuration file for TypeScript projects.
It tells the TypeScript compiler (tsc) how to compile the project, which files to include, and which rules to enforce.

**Purpose of tsconfig.json:**

- Project Compilation Control
  - Define which files and folders should be compiled
  - Specify output directories for JavaScript files
- Type Checking & Strictness
  - Enable strict type checking
  - Control null checks, implicit any, and other rules
- JavaScript Target & Module System
  - Set which version of JavaScript to output (ES5, ES6, ESNext)
  - Choose module system (CommonJS, ESNext, AMD, etc.)

- Additional Compiler Options
  - Enable source maps for debugging
  - Include/exclude files or directories
  - Enable decorators, JSX, or other advanced features

```javascript

  // Overview of tsconfig.json
  {
    "compilerOptions": {
      "target": "ES2018",        // JavaScript version output
      "module": "CommonJS",      // Module system
      "strict": true,            // Enable all strict type checks
      "outDir": "./dist",        // Output directory for JS files
      "rootDir": "./src",        // Root folder for TS source files
      "esModuleInterop": true,   // Compatibility with CommonJS modules
      "forceConsistentCasingInFileNames": true, // File naming consistency
      "skipLibCheck": true       // Skip type checking of declaration files
    },
    "include": ["src/**/*"],      // Files to include
    "exclude": ["node_modules"]   // Files to exclude
}

```

</details>

### 02. Core Types & Type System Foundations

<details>
<summary><b >Primitive Types</b></summary>

TypeScript primitive types are the basic, immutable data units that form the foundation of type-safe coding. They include `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`, — enforcing strict typing from compile-time.

```typescript
/*** All TypeScript primitive types in action (real example) ***/
type UserProfile = {
  name: string; // Text data
  age: number; // Numeric values (int/float)
  isActive: boolean; // True/false states
  role: 'admin' | 'user' | 'guest'; // Literal type (string literal)
  sessionId: symbol; // Unique identifier
  avatarUrl: string | null; // Optional string (nullable)
  lastLogin?: Date | undefined; // Optional date (may be undefined)
};

function createUserProfile(
  name: string,
  age: number,
  isActive: boolean,
): UserProfile {
  const uniqueId = Symbol('session'); // Each user gets unique symbol

  return {
    name,
    age,
    isActive,
    role: 'user' as const, // Literal type assignment
    sessionId: uniqueId,
    avatarUrl: null, // Explicitly no avatar yet
    lastLogin: undefined, // Not logged in yet
  };
}

// Real-world usage
const alice = createUserProfile('Alice', 28, true);
const bob = createUserProfile('Bob', 35, false);

console.log(alice.name.toUpperCase()); // "ALICE" - string method
console.log(alice.age.toFixed(0)); // "28" - number method
console.log(alice.isActive ? 'Online' : 'Offline'); // "Online" - boolean logic

/*
    Type safety in action - these would error:
    alice.age = "28"; // ❌ number expected
    alice.isActive = "yes"; // ❌ boolean expected
    alice.role = "moderator"; // ❌ literal type mismatch
  */
```

</details>

<details>
<summary><b >any vs unknown</b></summary>

any and unknown both accept any value, but unknown is safer as it requires type checking first. any completely disables type safety.

```typescript
// DANGER: any = runtime crashes
function parseUserAPI(data: any) {
  return {
    name: data.user.name, // ❌ Crashes if structure wrong
    email: data.user.email,
    age: data.user.age,
  };
}

// PERFECT: unknown = bulletproof
function parseUserAPI(data: unknown) {
  // Type guard pattern
  if (
    typeof data === 'object' &&
    data !== null &&
    'user' in data &&
    typeof (data as any).user === 'object' &&
    (data as any).user !== null &&
    'name' in (data as any).user
  ) {
    const user = (data as any).user;

    return {
      name: String(user.name),
      email: typeof user.email === 'string' ? user.email : '',
      age: Number(user.age),
    };
  }

  return null; // Safe fallback
}

// Real API usage
const apiResponse = { user: { name: 'Alice', email: 'a@test.com', age: 25 } };
const user = parseUserAPI(apiResponse); // { name: "Alice", email: "a@test.com", age: 26 }

// Malformed API = NO CRASH
const badAPI = { user: 'not an object' };
const badUser = parseUserAPI(badAPI); // null (safe!)
```

</details>

<details>
<summary><b >void, null, undefined, never</b></summary>

`void`, `null`, `undefined`, and `never` represent different "absence of value" concepts in TypeScript, each with specific use cases.

| Type      | Meaning                         | Common Use                            |
| --------- | ------------------------------- | ------------------------------------- |
| void      | Function returns nothing useful | Event handlers, side-effect functions |
| null      | Intentional "no value"          | Optional fields, API responses        |
| undefined | Uninitialized/missing property  | Default values, optional params       |
| never     | Code never reaches here         | Error handlers, exhaustive checks     |

```typescript
/*** Complete auth system example ***/
type User = {
  id: string;
  name: string;
  email: string | null;
};

type AuthResponse = {
  user: User | null; // null = no user found
  token?: string; // undefined = not provided
  error?: string; // undefined = no error occured
};

/* 1. void - Side effect functions (logging, UI updates) */
function logLoginAttempt(email: string): void {
  console.log(`Login attempt: ${email}`);
  // Intentionally returns nothing meaningful
}

/* 2. null - Intentional absence (return null user) */
function findUser(email: string): User | null {
  const users: User[] = [
    { id: '1', name: 'Alice', email: 'alice@test.com' },
    { id: '2', name: 'Bob', email: null },
  ];
  return users.find((u) => u.email === email) || null;
}

/* 3. undefined - Missing properties */
function getAuthResponse(user: User | null): AuthResponse {
  if (!user) return { user: null, error: 'User not found' };

  return {
    user,
    token: Math.random().toString(36).substring(2, 15), // Explicitly defined
    // error is undefined (no error)
  };
}

/* 4. never - Functions that terminate execution */
function loginError(message: string): never {
  throw new Error(`Login failed: ${message}`);
}

/* EXHAUSTIVE CHECK: Guarantees all cases handled */
type LoginStatus = 'pending' | 'success' | 'failed';

function handleLoginStatus(status: LoginStatus): void {
  switch (status) {
    case 'pending':
      console.log('Login in progress...');
      break;
    case 'success':
      console.log('Login successful!');
      break;
    case 'failed':
      console.log('Login failed');
      break;
    default:
      // TypeScript knows this is 'never' here!
      exhaustiveCheck(status);
      break;
  }
}

/* Real usage in login handler */
function handleLogin(email: string, password: string): AuthResponse {
  logLoginAttempt(email); // void - side effect

  const user = findUser(email); // null - not found
  if (!user) loginError('Invalid credentials'); // never - throws error

  const response = getAuthResponse(user); // undefined fields OK
  if (response.error) loginError(response.error);

  handleLoginStatus('success'); // Exhaustive handling

  return response;
}

// Usage
const result = handleLogin('alice@test.com', 'pass123');
console.log(result.user?.name); // "Alice"
console.log(result.token); // Some token string
console.log(result.error); // undefined
```

</details>

<details>
<summary><b >Literal Types & Template Literal Types</b></summary>

Literal types pin variables to exact values (not just type classes), while template literal types create dynamic string patterns. Both enable precise type control.

| Type             | What               | Example                                       |
| ---------------- | ------------------ | --------------------------------------------- |
| Literal          | Single exact value | "success", 42, true                           |
| Union Literal    | Fixed set          | "GET" \| "POST" \| "DELETE"                   |
| Template Literal | Pattern generation | \\user/${string}`, `on${"Click" \| "Hover"}`` |

```typescript
/*** HTTP API Handler (Literal Types) ***/
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type Status = 200 | 201 | 400 | 404 | 500;

interface ApiResponse {
  method: HttpMethod; // Only exact methods allowed
  status: Status; // Only exact status codes
  data?: any;
}

function handleApi(method: HttpMethod, endpoint: string): ApiResponse {
  // ✅ TypeScript prevents: handleApi("PATCH", "/users")
  return { method, status: 200, data: { users: [] } };
}
```

```typescript
/*** CSS Class Generator (Template Literal Types) ***/
type Color = 'red' | 'blue' | 'green';
type Size = 'sm' | 'md' | 'lg';

// Generates: "bg-red-sm", "bg-blue-lg", etc.
type CSSClass = `bg-${Color}-${Size}`;

const buttonClass: CSSClass = 'bg-red-sm'; // ✅ OK
// const invalid: CSSClass = "bg-purple-lg"; // ❌ Error!

function createButton(className: CSSClass) {
  return `<button class="${className}">Click</button>`;
}
```

</details>

<details>
<summary><b >Type Inference</b></summary>

Type inference automatically determines variable types from their initial values and context. It works for variables, function returns, arrays, and objects.

- Infers from: Initial values, return statements, array literals, object shapes
- Saves: 70-80% of type annotations in real apps
- Context-aware: Knows function params, React props, generic constraints

**Why Type Inference Matters?**

- Readability: Clean code, no type noise
- Developer Speed: 40% faster coding
- Maintainability: Auto-updates on refactors
- Error Prevention: Catches mismatches early
- Scalability: Handles 100k+ LOC projects
- Flexibility: Generic code without boilerplate
- Bug Reduction: Eliminates annotation errors

```typescript
const products = [
  { id: 1, name: 'iPhone', price: 999, stock: true },
  { id: 2, name: 'MacBook', price: 1999, stock: false },
  { id: 3, name: 'Laptop', price: 1299, stock: true },
];
// Inferred: {id: number, name: string, price: number, stock: boolean}[]

const available = products
  .filter((item) => item.stock)
  .map((item) => `${item.name}: $${item.price}`);
// Inferred: string[] - autocomplete EVERYWHERE

// Filter + Transform - INFERENCE CHAIN
const available = products
  .filter((item) => item.stock)
  .map((item) => `${item.name}: $${item.price}`);
// Inferred: string[] - autocomplete EVERYWHERE

// Cart function - RETURN INFERENCE
function addToCart(product: (typeof products)[0]) {
  return {
    ...product,
    addedAt: Date.now(),
  };
}

const cartItem = addToCart(products[0]); // Full typing!
cartItem.name.toUpperCase(); // "IPHONE"
```

</details>

<details>
<summary><b >Type Aliases</b></summary>

Type aliases (type) create reusable names for any type - primitives, objects, unions, intersections, functions, and generics. They improve readability and eliminate repetition.

```typescript
/*** Production-ready API types (DRY code) ***/

/* 1. PRIMITIVE ALIASES */
type UserID = string | number;
type Price = number;
type Status = 'pending' | 'confirmed' | 'shipped';

/* 2. OBJECT ALIASES */
type Address = {
  street: string;
  city: string;
  zip: string;
};

type Product = {
  id: number;
  name: string;
  price: Price;
};

/* 3. UNION ALIASES (Most powerful!) */
type ApiResponse<T> =
  | { success: true; data: T }
  | { success: false; error: string };

/* 4. REAL USAGE - Clean & Reusable */
type Order = {
  id: UserID;
  userId: UserID;
  items: Product[];
  total: Price;
  status: Status;
  shipping: Address | null;
};

type GetOrdersResponse = ApiResponse<Order[]>;

/* 5. FUNCTION SIGNATURES */
type Validator<T> = (data: T) => boolean;
type OrderValidator = Validator<Order>;
```

</details>

<details>
<summary><b >Union Types</b></summary>

Union types `|` allow a value to be one of several types, providing flexibility while maintaining type safety. Perfect for APIs, props, and polymorphic functions.

```typescript
// Production notification types
type Notification =
  | { type: 'email'; to: string; subject: string }
  | { type: 'sms'; phone: string; message: string }
  | { type: 'push'; userId: number; title: string }
  | { type: 'success'; message: string }
  | { type: 'error'; code: number; details: string };

// Single handler for ALL notifications
function sendNotification(notification: Notification): void {
  switch (notification.type) {
    case 'email':
      console.log(`📧 Email to ${notification.to}: ${notification.subject}`);
      break;
    case 'sms':
      console.log(`📱 SMS to ${notification.phone}: ${notification.message}`);
      break;
    case 'push':
      console.log(
        `🔔 Push to user ${notification.userId}: ${notification.title}`,
      );
      break;
    case 'success':
      console.log(`✅ ${notification.message}`);
      break;
    case 'error':
      console.log(`❌ Error ${notification.code}: ${notification.details}`);
      break;
  }
}

// Real usage - TypeScript knows exact shape after switch!
sendNotification({
  type: 'email',
  to: 'alice@test.com',
  subject: 'Order confirmed',
});

sendNotification({
  type: 'sms',
  phone: '+1234567890',
  message: 'Your order shipped!',
});
sendNotification({ type: 'error', code: 404, details: 'User not found' });
```

</details>

<details>
<summary><b >Intersection Types</b></summary>

Intersection types `&` combine multiple types into one, requiring objects to have ALL properties from each type. Perfect for composing behavior and extending types.

```typescript
// Production RBAC (Role-Based Access Control)

// Base types
type User = { id: string; name: string; email: string };
type Admin = { permissions: string[]; canDelete: true };
type Manager = { teamId: string; canApprove: true };

// COMPOSITION - User + Role capabilities
type AdminUser = User & Admin;
type ManagerUser = User & Manager;
type SuperAdmin = User & Admin & Manager; // ALL powers!

// Real usage
const adminUser: AdminUser = {
  id: 'u1',
  name: 'Alice',
  email: 'alice@company.com',
  permissions: ['read', 'write', 'delete'],
  canDelete: true,
};

const superAdmin: SuperAdmin = {
  id: 'u2',
  name: 'Bob',
  email: 'bob@company.com',
  permissions: ['*'],
  canDelete: true,
  teamId: 'team-1',
  canApprove: true,
};

// Type-safe permissions
function canAccessResource(
  user: User | AdminUser | ManagerUser,
  resource: string,
) {
  if ('permissions' in user) {
    return user.permissions.includes(resource);
  }
  return false; // Basic user
}

canAccessResource(adminUser, 'delete-users'); // true
canAccessResource(superAdmin, 'approve-budgets'); // true
```

</details>

<details>
<summary><b >Object Type Annotations</b></summary>

Object type annotations define the exact shape (properties, types, optionality) of JavaScript objects using inline syntax or type aliases/interfaces.

```text
Inline: { name: string; age: number; active?: boolean }
Type Alias: type User = { name: string; age: number }
Interface: interface User { name: string; age: number }
```

```typescript
/*** Compact Production Example: API Response Validator ***/
type ApiResponse<T> = {
  data: T;
  status: 'success' | 'error';
  timestamp: string;
};

type User = {
  id: string;
  name: string;
  email: string;
};

// validator
function validateApiResponse<T>(
  response: ApiResponse<T> | null,
): response is ApiResponse<T> {
  return response !== null && response.status === 'success';
}

function processUserResponse(response: ApiResponse<User> | null): User | null {
  if (validateApiResponse(response)) {
    // TypeScript KNOWS: response.data is User!
    return response.data;
  }
  return null;
}

// Usage - Perfect autocomplete!
const userResponse: ApiResponse<User> = {
  data: { id: 'u1', name: 'Alice', email: 'alice@test.com' },
  status: 'success',
  timestamp: '2026-02-26',
};

const user = processUserResponse(userResponse);
console.log(user!.name.toUpperCase()); // "ALICE"
```

</details>

- Array & Tuple Types
- Enum Types
- Interfaces vs Type Aliases (Deep Comparison)
- Introduction to Declaration Files (.d.ts)

### 03. Functions & Function Typing

<details>
<summary><b >Function Type Annotations</b></summary>

Function type annotations explicitly define parameter types and return types for functions, enabling type-safe callbacks, APIs, and higher-order functions.

```typescript
/*** Production shopping cart with typed callbacks ***/

// 1. PARAMETER ANNOTATIONS
function addToCart(productId: number, quantity: number): string {
  return `Added ${quantity} of product ${productId}`;
}

// 2. RETURN TYPE ANNOTATION
function calculateTotal(items: { price: number }[]): number {
  return items.reduce((sum, item) => sum + item.price, 0);
}

// 3. CALLBACK TYPING (Most important!)
type OnSuccess = (orderId: string) => void;
type OnError = (error: string) => void;

function processOrder(
  cart: { price: number }[],
  onSuccess: OnSuccess, // Explicit callback type
  onError: OnError,
): void {
  try {
    const total = calculateTotal(cart);
    const orderId = `ORD-${Date.now()}`;
    onSuccess(orderId);
  } catch (error) {
    onError('Payment failed');
  }
}

// Real usage - Type safe callbacks!
processOrder(
  [{ price: 999 }],
  (orderId) => console.log(`Order ${orderId} confirmed!`),
  (error) => console.error(`${error}`),
);
```

</details>
<details>
<summary><b >Parameter & Return Type Definitions</b></summary>

Parameter types define input expectations (param: Type), return types specify output (): ReturnType). Essential for APIs, callbacks, and type-safe contracts.

```typescript
/*** Complete e-commerce search with FULL type safety ***/
// 1. TYPES (Real production shapes)
type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
};

type SearchResponse = {
  products: Product[];
  total: number;
  filters: { category: string; priceRange: [number, number] };
};

// 2. MAIN FUNCTION - Parameter & Return types
function searchProducts(params: {
  query?: string; // Optional search term
  category?: string; // Optional filter
  maxPrice?: number; // Optional price limit
  limit?: number; // Pagination
  page?: number; // Pagination
}): SearchResponse {
  // Simulate database query
  const allProducts: Product[] = [
    {
      id: 1,
      name: 'iPhone 15',
      price: 999,
      category: 'electronics',
      inStock: true,
    },
    {
      id: 2,
      name: 'MacBook Pro',
      price: 1999,
      category: 'electronics',
      inStock: false,
    },
    {
      id: 3,
      name: 'Levis Jeans',
      price: 89,
      category: 'clothing',
      inStock: true,
    },
  ];

  // TypeScript KNOWS params.query exists (or undefined)
  let filtered = allProducts;

  if (params.query) {
    filtered = filtered.filter((p) =>
      p.name.toLowerCase().includes(params.query!.toLowerCase()),
    );
  }

  if (params.category) {
    filtered = filtered.filter((p) => p.category === params.category);
  }

  if (params.maxPrice) {
    filtered = filtered.filter((p) => p.price <= params.maxPrice);
  }

  const limit = params.limit ?? 10;
  const page = params.page ?? 1;
  const start = (page - 1) * limit;
  const paginated = filtered.slice(start, start + limit);

  return {
    products: paginated,
    total: filtered.length,
    filters: {
      category: params.category || 'all',
      priceRange: [0, params.maxPrice || 5000],
    },
  };
}

// 3. USAGE - PERFECT AUTOCOMPLETE
const electronics = searchProducts({
  category: 'electronics',
  maxPrice: 1500,
});

console.log(electronics.products[0].name); // "iPhone 15" - autocomplete works!
console.log(electronics.products[0].price.toFixed(2)); // Works!
console.log(electronics.total); // number
console.log(electronics.filters.category); // string
```

</details>
- 
- Optional, Default & Rest Parameters
- Arrow Functions in TypeScript
- Function Type Expressions (Callback Typing)

### 04. Type Narrowing & Type System Analysis

<details>
<summary><b >Type Guards</b></summary>

Type Guards are functions or expressions that narrow union types to specific types within a conditional block. TypeScript uses control flow analysis to "remember" these checks.

**Types of Type Guards:**

- Built-in: `typeof`, `instanceof`, `in`
- Custom: Functions returning `param is Type`
- Discriminated: Unions with `type: 'literal'`

```typescript
/*** Production payment system ***/

// Bank payment as class (for instanceof)
class BankPayment {
  type: 'bank' = 'bank';
  constructor(
    public account: string,
    public routing: string,
  ) {}
}

type Payment =
  | { type: 'credit-card'; cardNumber: string; expiry: string; cvv: string }
  | { type: 'paypal'; email: string; payerId: string }
  | BankPayment
  | { type: 'error'; message: string };

function processPayment(payment: Payment): string {
  // 1. DISCRIMINATED UNION
  if (payment.type === 'credit-card') {
    return `Charged via CC ending ${payment.cardNumber.slice(-4)}`;
  }

  // 2. CUSTOM TYPE GUARD
  if (isPaypalPayment(payment)) {
    return `PayPal payment from ${payment.email}`;
  }

  // 3. INSTANCEOF (works with class only)
  if (payment instanceof BankPayment) {
    // TypeScript KNOWS: account & routing exist
    return `Bank transfer to ${payment.account}`;
  }

  // 4. Fallback (error type)
  return `Error: ${payment.message}`;
}

// Custom type guard
function isPaypalPayment(
  p: Payment,
): p is { type: 'paypal'; email: string; payerId: string } {
  return p.type === 'paypal';
}

// Usage

processPayment({
  type: 'credit-card',
  cardNumber: '****1234',
  expiry: '12/25',
  cvv: '123',
});

processPayment({
  type: 'paypal',
  email: 'alice@paypal.com',
  payerId: 'PP123',
});

processPayment(new BankPayment('123456789', '987654321'));
```

</details>

<details>
<summary><b >Custom Type Guards</b></summary>

Custom Type Guards are functions returning param is Type that narrow union types to specific types. TypeScript uses the return type to automatically refine types within the true branch.

**Key Features:**

- Syntax: function isType(value: unknown): value is SpecificType
- Purpose: Narrow unions safely
- Return: Boolean + type predicate
- Better than: Manual casting/assertions

```typescript
/*** Production file upload handler***/
type Document =
  | { type: 'pdf'; pages: number; filename: string }
  | { type: 'docx'; words: number; filename: string }
  | { type: 'image'; width: number; height: number; filename: string }
  | { type: 'unknown'; error: string };

// function declaration for parseFile from any other source
declare function parseFile(file: unknown): Document;

// CUSTOM TYPE GUARDS
function isPdfDocument(
  doc: Document,
): doc is { type: 'pdf'; pages: number; filename: string } {
  return doc.type === 'pdf';
}

function isImageDocument(
  doc: Document,
): doc is { type: 'image'; width: number; height: number; filename: string } {
  return doc.type === 'image';
}

function isValidDocument(
  doc: Document,
): doc is Exclude<Document, { type: 'unknown' }> {
  return doc.type !== 'unknown';
}

// MAIN PROCESSOR - 100% TYPE SAFE
function processDocument(file: unknown): string {
  const doc = parseFile(file);

  // CUSTOM GUARD #1
  if (isPdfDocument(doc)) {
    // TypeScript KNOWS: pages, filename exist!
    return `📄 PDF: ${doc.filename} (${doc.pages} pages)`;
  }

  // CUSTOM GUARD #2
  if (isImageDocument(doc)) {
    // TypeScript KNOWS: width, height, filename exist!
    return `🖼️  Image: ${doc.filename} (${doc.width}x${doc.height})`;
  }

  // COMPOUND GUARD
  if (isValidDocument(doc)) {
    // TypeScript KNOWS: NOT unknown type!
    return `✅ Valid: ${doc.filename}`;
  }

  // 4. NARROWED TO ERROR
  return `❌ ${doc.error}`;
}

// USAGE
processDocument(uploadedFile1); // "PDF: report.pdf (12 pages)"
processDocument(uploadedFile2); // "Image: photo.jpg (1920x1080)"
```

</details>

<details>
<summary><b >Type Assertions and Non-null Assertion Operator (!)</b></summary>

Type Assertions and Non-null Assertion Operator (!) are used to tell TypeScript to treat a value as a specific type, even if TypeScript can't infer it automatically.

**Type Assertions `(as Type)`:** : "Treat this value as this specific type". Bypasses type checking.

**Non-null Assertion `(!)`:** : "This value is definitely not null/undefined". Removes nullability.

```typescript
/*** Production file upload handler ***/
// 1. DOM (Most common)
const button = document.getElementById('submit') as HTMLButtonElement;
// Now: button.click(), button.value, button.disabled work perfectly

// 2. Non-null (After validation)
const user = getUser(id);
if (!user) return;
user!.name.toUpperCase(); // Safe non-null

// 3. JSON Parsing
const data = JSON.parse(json) as User[]; // Full autocomplete

// 4. React Refs
inputRef.current!.focus(); // Safe after mount

// 5. Event Casting
(event.target as HTMLInputElement).value;
```

</details>

<details>
<summary><b >Type Narrowing</b></summary>

Type Narrowing refines broad types (unions, unknown) to specific types using TypeScript's control flow analysis. TypeScript "remembers" checks to enable safe property access.

**Core Narrowing Techniques:**

- typeof - Primitive narrowing (string, number, boolean)
- Equality (===) - Literal narrowing
- `in` operator - Property existence
- instanceof - Class/constructor narrowing
- Truthiness - null/undefined removal
- Custom Type Guards - `param is Type`
- Discriminated Unions - `type: 'literal'`

```typescript
/*** Production file upload system - ALL techniques! ***/

// 1. DISCRIMINATED UNION (type: 'literal')
type MediaFile =
  | { type: 'image'; width: number; height: number; filename: string }
  | { type: 'video'; duration: number; filename: string }
  | { type: 'audio'; bitrate: number; filename: string }
  | { type: 'error'; message: string };

// 2. CLASS FOR INSTANCEOF
class ImageProcessor {
  constructor(
    public width: number,
    public height: number,
  ) {}
  getSize() {
    return this.width * this.height;
  }
}

// 3. PROCESSOR WITH ALL TECHNIQUES
function processMedia(file: unknown): string {
  const media = file as MediaFile; // Safe after API validation

  // TECHNIQUE 1: TRUTHINESS (null check)
  if (!media) {
    return 'No file provided';
  }

  // TECHNIQUE 2: EQUALITY (Discriminated Union)
  if (media.type === 'image') {
    return `Image: ${media.filename} (${media.width}x${media.height})`;
  }

  // TECHNIQUE 3: TYPEOF (Primitive narrowing)
  if (typeof media.duration === 'number') {
    return `🎥 Video: ${media.filename} (${media.duration}s)`;
  }

  // TECHNIQUE 4: CUSTOM TYPE GUARD
  if (isAudioFile(media)) {
    return `🎵 Audio: ${media.filename} (${media.bitrate}kbps)`;
  }

  // TECHNIQUE 5: `in` OPERATOR
  if ('bitrate' in media) {
    return `🔊 Audio detected: ${media.bitrate}`;
  }

  // TECHNIQUE 6: INSTANCEOF
  if (media instanceof ImageProcessor) {
    return `Processed: ${media.getSize()} pixels`;
  }

  // TECHNIQUE 7: FALLBACK (narrowed to error)
  return `Error: ${media.message}`;
}

// TECHNIQUE 4: Custom Type Guard
function isAudioFile(
  file: MediaFile,
): file is { type: 'audio'; bitrate: number; filename: string } {
  return file.type === 'audio';
}

// REAL USAGE
const files: (MediaFile | ImageProcessor | null)[] = [
  { type: 'image', width: 1920, height: 1080, filename: 'photo.jpg' },
  { type: 'video', duration: 125, filename: 'movie.mp4' },
  { type: 'audio', bitrate: 128, filename: 'song.mp3' },
  new ImageProcessor(800, 600),
  { type: 'error', message: 'File too large' },
];

files.forEach((file) => console.log(processMedia(file)));
```

</details>

<details>
<summary><b >Control Flow Based Type Analysis</b></summary>

Control Flow Based Type Analysis is TypeScript's ability to track variable types through code execution paths (if/else, switch, loops). The compiler analyzes all possible flows to determine the most specific type at each location.

**How It Works:**

- TypeScript simulates: "What type can this be here?"
- Tracks assignments through if/else branches
- Remembers narrowing in conditional blocks
- Never forgets previous checks
- Provides precise autocomplete (knows what type it is)

```typescript
/*** Easy e-commerce checkout - Control flow in action! ***/
type CartItem = { name: string; price: number };

type CheckoutState =
  | { step: 'cart'; items: CartItem[] }
  | { step: 'payment'; amount: number }
  | { step: 'complete'; orderId: string }
  | { step: 'error'; message: string };

let checkout: CheckoutState = { step: 'cart', items: [] };

// Simulate user actions
function nextStep(current: CheckoutState): CheckoutState {
  // CONTROL FLOW ANALYSIS TRACKS TYPE THROUGH PATHS
  if (current.step === 'cart') {
    const total = current.items.reduce((sum, item) => sum + item.price, 0);
    return { step: 'payment', amount: total };
  }

  if (current.step === 'payment') {
    return { step: 'complete', orderId: `ORD-${Date.now()}` };
  }

  if (current.step === 'complete') {
    return { step: 'error', message: 'Cannot restart complete order' };
  }

  return current;
}

// USAGE - Perfect autocomplete everywhere!
checkout = nextStep(checkout); // → { step: 'payment', amount: number }
console.log(`Pay $${checkout.amount}`); // amount autocomplete!

checkout = nextStep(checkout); // → { step: 'complete', orderId: string }
console.log(`Order ${checkout.orderId}`); // orderId autocomplete!

checkout = nextStep(checkout); // → { step: 'error', message: string }
console.log(`Error: ${checkout.message}`); // message autocomplete!
```

</details>

### 05. Generics & Reusable Type Patterns

- Generic Fundamentals
- What are Generics?
- Why Generics are Needed
- Basic Generic Syntax (<T>)
- Generic Functions
- Generic Function Definitions
- Generic Arrow Functions
- Inference vs Explicit Generic Types
- Generic Interfaces & Type Aliases
- Generic Interfaces
- Generic Type Aliases
- Extending Generic Interfaces
- Generic Constraints (<T extends ...>)
- Constraining Generics (<T extends ...>)
- Using keyof with Generics
- Multiple Constraints
- Default Generic Types
- Advanced Generic Patterns
- Multiple Generic Parameters
- Conditional Generics (intro-level)
- Generic Utility Patterns

### 06. Classes & OOP in TypeScript

- Class Syntax in TypeScript
- Constructors
- Access Modifiers (public, private, protected, readonly)
- Inheritance
- Method Overriding
- Polymorphism
- Abstract Classes
- Static Properties & Methods
- Implementing Interfaces in Classes

### 07. Built-in Utility Types

<details>
<summary><b >Partial, Required, Readonly</b></summary>

Utility types transform existing types: `Partial<T>` (all optional), `Required<T>` (all mandatory), `Readonly<T>` (immutable).

```typescript
type User = {
  name: string;
  email?: string;
  role?: string;
};

// 1. Partial - Update any field
function updateUser(id: string, updates: Partial<User>) {
  // updates.name? OR updates.email? OR updates.role?
}

updateUser('u1', { name: 'Alice' }); // ✅ OK
updateUser('u2', { email: 'bob@test.com' }); // ✅ OK

// 2. Required - Create complete user
function createUser(data: Required<User>) {
  // ALL fields required
}

createUser({ name: 'Alice', email: 'a@test.com', role: 'admin' }); // ✅ OK

// 3. Readonly - Cannot change
function getUser(): Readonly<User> {
  return { name: 'Alice', email: 'a@test.com' };
}

const user = getUser();
user.name = 'Bob'; // ❌ Error! readonly
```

</details>

<details>
<summary><b >Pick, Omit</b></summary>

`Pick<T, K>` extracts specific properties from type T. `Omit<T, K>` excludes specified properties from type T.

```typescript
type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
};

// API Responses - Perfect use case!

// 1. Pick - Public profile (ONLY needed fields)
type PublicUser = Pick<User, 'id' | 'name' | 'email'>;
// Result: { id: string; name: string; email: string }

// 2. Omit - Hide sensitive data
type LoginResponse = Omit<User, 'password'>;
// Result: { id: string; name: string; email: string; role: string }

// Real API usage
function getPublicProfile(user: User): PublicUser {
  return { id: user.id, name: user.name, email: user.email };
}

function loginResponse(user: User): LoginResponse {
  return { id: user.id, name: user.name, email: user.email, role: user.role };
}

// ✅ Type safe - no password leaks!
const profile: PublicUser = getPublicProfile(fullUser);
```

</details>

<details>
<summary><b >Record</b></summary>

`Record<K, T>` creates an object type where keys are type `K` and all values are type `T`. Perfect for lookup tables, configs, and API response maps.

```typescript
Record<Keys, ValueType>

Keys: string | number | symbol (union or literal)
Values: Any type (string, object, function, etc.)
```

```typescript
/*** 🎯 Role-based permissions lookup ***/
type Role = 'admin' | 'user' | 'guest';
type Permission = string[];

// Perfect lookup table!
const permissions: Record<Role, Permission> = {
  admin: ['read', 'write', 'delete', 'ban'],
  user: ['read', 'write'],
  guest: ['read'],
};

// ✅ Type safe access
function checkPermission(role: Role, action: string): boolean {
  return permissions[role].includes(action);
}

checkPermission('admin', 'delete'); // true
checkPermission('guest', 'delete'); // false
// checkPermission('moderator', 'read'); // ❌ Type error!
```

</details>

<details>
<summary><b >Exclude, Extract</b></summary>

`Exclude<T, U>` removes types from T that are assignable to U. `Extract<T, U>` extracts types from T that are assignable to U.

```typescript
// Example: Extract only string literals from a union
const strings: Extract<'a' | 'b' | 1 | 2> = 'a';
const numbers: Exclude<'a' | 'b' | 1 | 2> = 1;
```

</details>

<details>
<summary><b >NonNullable</b></summary>

`NonNullable<T>` removes null and undefined from type T.

```typescript
// Example: Remove null and undefined from a type
const nonNullable: NonNullable<string | null | undefined> = 'hello';
```

</details>

<details>
<summary><b >ReturnType, Parameters</b></summary>

`ReturnType<T>` extracts the return type of a function type T. `Parameters<T>` extracts the parameter types of a function type T.

```typescript
// Example: Extract return type of a function
const result: ReturnType<() => string> = 'hello';

// Example: Extract parameter types of a function
const params: Parameters<(a: number, b: string) => void> = [1, 'hello'];
```

</details>

## 📑 JavaScript

- [Full Stack Interview Preparation Guide](#full-stack-interview-preparation-guide)
- [📑 TypeScript](#-typescript)
  - [01. Introduction \& Project Setup](#01-introduction--project-setup)
  - [02. Core Types \& Type System Foundations](#02-core-types--type-system-foundations)
  - [03. Functions \& Function Typing](#03-functions--function-typing)
  - [04. Type Narrowing \& Type System Analysis](#04-type-narrowing--type-system-analysis)
  - [05. Generics \& Reusable Type Patterns](#05-generics--reusable-type-patterns)
  - [06. Classes \& OOP in TypeScript](#06-classes--oop-in-typescript)
  - [07. Built-in Utility Types](#07-built-in-utility-types)
- [📑 JavaScript](#-javascript)
- [1. JavaScript Fundamentals (Basics)](#1-javascript-fundamentals-basics)
  - [2. Intermediate JavaScript](#2-intermediate-javascript)
  - [3. Functions \& Advanced Concepts](#3-functions--advanced-concepts)
  - [4. Object-Oriented Programming (OOP) in JS](#4-object-oriented-programming-oop-in-js)
  - [5. Asynchronous JavaScript](#5-asynchronous-javascript)
  - [6. Advanced JavaScript](#6-advanced-javascript)
  - [7. JavaScript Internals](#7-javascript-internals)
  - [8. DOM (Document Object Model)](#8-dom-document-object-model)
  - [9. Browser APIs](#9-browser-apis)
  - [10. Advanced Patterns \& Architecture](#10-advanced-patterns--architecture)
  - [11. Testing \& Debugging](#11-testing--debugging)
  - [12. Performance Optimization](#12-performance-optimization)
  - [13. Security in JavaScript](#13-security-in-javascript)
  - [14. Modern JavaScript (ES6+ to ES2025)](#14-modern-javascript-es6-to-es2025)

## 1. JavaScript Fundamentals (Basics)

- [ ] Introduction to JavaScript
      👉 “JavaScript is a high-level, interpreted, single-threaded, and dynamically typed programming language that is mainly used in web development. It was created in 1995 by Brendan Eich at Netscape. Initially it was called Mocha, then LiveScript, and finally JavaScript. Today, it is standardized by ECMAScript.

The language is lightweight, event-driven, and works seamlessly with HTML and CSS. One of its important characteristics is that it is dynamically typed—meaning variable types are decided at runtime. It’s also single-threaded, but it manages asynchronous tasks efficiently with the event loop.

In terms of usage, JavaScript can make websites interactive by handling events like clicks, inputs, and hover effects. It allows DOM manipulation, animations, data fetching via APIs, and more. On the server side, JavaScript powers backend development using Node.js. Beyond that, frameworks and libraries like React, Angular, and Vue have made it central to frontend development, while React Native and Electron allow us to build mobile and desktop apps.

Overall, JavaScript has grown into a versatile, cross-platform language that powers both the frontend and backend, making it the heart of modern web applications.”

- [ ] Variables (`var`, `let`, `const`)
      👉 var: The oldest way to declare variables in JavaScript. It is function-scoped, supports re-declaration and updating, and is hoisted (initialized as undefined). However, it is less preferred in modern JavaScript due to scope-related issues.

👉 let: Introduced in ES6 (2015), let is block-scoped, meaning it works only within { }. It allows updating but does not allow re-declaration in the same scope.

👉 const: Used when the variable reference should not change. For primitive values, the value is fixed, while for arrays and objects, the reference is constant but their contents can still be modified.

- [ ] Data Types (Primitive vs Non-Primitive)
      👉 Primitive Data Types: Immutable values stored directly in memory.
      String – "Hello"
      Number – 10, 3.14
      Boolean – true, false
      Undefined – variable declared but not assigned
      Null – intentional empty value
      Symbol – unique identifier
      BigInt – large integers

👉 Non-Primitive (Reference) Data Types: Mutable values stored by reference.

Object – { name: "Rimon", age: 23 }
Array – [1, 2, 3]
Function – function greet() { return "Hello noob developer"; }

- [ ] Operators (Arithmetic, Comparison, Logical, Bitwise)
      Arithmetic: +, -, _, /, %, \*\* (exponential)
      Comparison: ==, ===, !=, !==, >, <, >=, <=
      Logical: &&, ||, ! (logical not)
      Bitwise: &, |, ^, ~, <<, >>, >>>
      Assignment: = += -= _= /= %=
      Ternary: (? :)
      String: +
      Type: typeof, instanceof
      Unary: ++, --, +, -
      Relational: > < >= <=
      Optional Chaining: (?.)
      Comma Operator: (,)
      Delete Operator: delete (keyword)
      Spread Operator: (...)
      Nullish Coalescing: (??)

- [ ] Type Conversion & Coercion
      Type Conversion (Explicit) – manually converting a value from one type to another.
      Type Coercion (Implicit) – JavaScript automatically converts types when performing operations.
- [ ] Strings & Template Literals
- [ ] Numbers & Math Functions
- [ ] Control Flow (if/else, switch, ternary)
- [ ] Loops (for, while, do-while, for...in, for...of)
      for → When you need to run a loop a specific number of times.

while → When you want the loop to continue as long as a condition is true.

do...while → Ensures the loop runs at least once before checking the condition.

for...in → Used to iterate over the keys (properties) of an object.

for...of → Used to iterate over the values of an iterable (like arrays or strings).

- [ ] Functions (declaration, expression, arrow functions)
- [ ] Scope (Global, Local, Block, Lexical Scope)
      Global Scope: Accessed anywhere in the code.

Local / Function Scope: Accessed only inside a function.

Block Scope: Accessed only inside {} block (let & const).

Lexical Scope: Inner function can access outer function variables.

- [ ] Hoisting
      JavaScript moves variable and function declarations to the top of their scope before execution.

Function declarations → can be called before definition.

Function expressions & arrow functions → not hoisted.

var variables → hoisted and initialized with undefined.

let & const variables → hoisted but in Temporal Dead Zone (TDZ) until declaration.

### 2. Intermediate JavaScript

- [ ] Arrays (`map`, `filter`, `reduce`, `find`, `some`, `every`, `forEach`)
- [ ] Objects (`Object.keys`, `Object.values`, `Object.entries`)
- [ ] Object & Array Destructuring
- [ ] Spread & Rest Operator
- [ ] Default Parameters
- [ ] Short-Circuiting & Nullish Coalescing (`??`)
- [ ] ES6+ Features Overview
- [ ] Modules (import/export)
- [ ] JSON (parse, stringify)

### 3. Functions & Advanced Concepts

- [ ] Higher Order Functions (HOF)
- [ ] Callback Functions
- [ ] Closures
- [ ] Currying
- [ ] Recursion
- [ ] IIFE (Immediately Invoked Function Expressions)
- [ ] Pure vs Impure Functions
- [ ] Memoization
- [ ] Function Composition

### 4. Object-Oriented Programming (OOP) in JS

- [ ] `this` keyword
- [ ] Constructor Functions
- [ ] Prototypes & Prototype Chain
- [ ] `class` and `extends` (ES6 Classes)
- [ ] Encapsulation, Abstraction, Inheritance, Polymorphism
- [ ] Static Methods & Properties
- [ ] Getters & Setters

### 5. Asynchronous JavaScript

- [ ] Call Stack & Event Loop
- [ ] Synchronous vs Asynchronous JS
- [ ] Callbacks & Callback Hell
- [ ] Date & Time Handling
- [ ] Error Handling (`try...catch`, `throw`, `finally`)
- [ ] Promises (`then`, `catch`, `finally`)
- [ ] Async/Await
- [ ] `Promise.all`, `Promise.race`, `Promise.allSettled`, `Promise.any`
- [ ] Fetch API & AJAX
- [ ] Event Loop & Microtasks
- [ ] Web APIs (`setTimeout`, `setInterval`, DOM Events)

### 6. Advanced JavaScript

- [ ] Execution Context & Lexical Environment
- [ ] Event Delegation
- [ ] Debouncing & Throttling
- [ ] Deep vs Shallow Copy
- [ ] Polyfills
- [ ] Module Pattern & Revealing Module Pattern
- [ ] Factory Functions
- [ ] Mixins
- [ ] Prototype vs Class Performance
- [ ] Error Handling Best Practices

### 7. JavaScript Internals

- [ ] JavaScript Engine (V8, SpiderMonkey)
- [ ] How JS Works (Compilation & Interpretation)
- [ ] JIT Compilation
- [ ] Garbage Collection (Memory Management)
- [ ] Call Stack & Heap
- [ ] Execution Phases (Creation & Execution)
- [ ] Hoisting (Functions & Variables)
- [ ] Scope Chain & Closure
- [ ] Event Loop & Concurrency Model

### 8. DOM (Document Object Model)

- [ ] Selecting Elements (`getElementById`, `querySelector`)
- [ ] DOM Traversal (parent, child, siblings)
- [ ] DOM Manipulation (create, append, remove, clone)
- [ ] Attributes & Properties
- [ ] Styling & Classes (`classList`, `style`)
- [ ] Event Handling (`addEventListener`)
- [ ] Bubbling & Capturing
- [ ] Custom Events
- [ ] Mutation Observer

### 9. Browser APIs

- [ ] LocalStorage, SessionStorage, Cookies
- [ ] Geolocation API
- [ ] Web Workers
- [ ] IndexedDB
- [ ] Notifications API
- [ ] Clipboard API
- [ ] Drag & Drop API
- [ ] Canvas API & WebGL Basics
- [ ] File & Blob API

### 10. Advanced Patterns & Architecture

- [ ] Design Patterns (Singleton, Factory, Observer, Module, Mediator, Proxy)
- [ ] MVC, MVVM in JavaScript
- [ ] Event Emitter Pattern
- [ ] Publish/Subscribe Pattern
- [ ] Dependency Injection
- [ ] Functional Programming in JS
- [ ] Reactive Programming Concepts

### 11. Testing & Debugging

- [ ] Debugging with DevTools
- [ ] Console Tricks (`table`, `time`, `group`)
- [ ] Unit Testing (Jest, Mocha, Jasmine)
- [ ] Test Driven Development (TDD)
- [ ] Error Handling & Logging

### 12. Performance Optimization

- [ ] Memory Leaks & Prevention
- [ ] Optimizing Loops & Recursion
- [ ] Debounce & Throttle for Performance
- [ ] Lazy Loading
- [ ] Code Splitting & Tree Shaking
- [ ] Web Workers for Multithreading
- [ ] Minification & Bundling

### 13. Security in JavaScript

- [ ] XSS (Cross-Site Scripting)
- [ ] CSRF (Cross-Site Request Forgery)
- [ ] Clickjacking
- [ ] Content Security Policy (CSP)
- [ ] Secure Cookies & Storage
- [ ] Sanitizing User Input

### 14. Modern JavaScript (ES6+ to ES2025)

- [ ] `let`, `const`, `var` differences
- [ ] Template Literals
- [ ] Destructuring
- [ ] Default Parameters
- [ ] Spread & Rest Operator
- [ ] Symbols & Iterators
- [ ] Generators (`function*`)
- [ ] Async Iterators & Generators
- [ ] Proxy & Reflect API
- [ ] Optional Chaining (`?.`)
- [ ] Nullish Coalescing (`??`)
- [ ] BigInt
- [ ] Top-level Await
- [ ] WeakMap & WeakSet

**[⬆ Back to Top](#typescript)**
