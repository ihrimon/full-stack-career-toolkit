# Express.js Mastery Roadmap — Production Engineer Track

> This is a curated, **intermediate → production-level** Express.js checklist — built for someone who already knows the basics and wants to track exactly which advanced concepts they're mastering next: the request/response lifecycle, middleware architecture, routing, error handling, security, and everything else that separates "I built an Express server" from "I can own a production Express API." Anyone browsing this list — a recruiter, a teammate, or future-you — can see at a glance what's being studied and why.

## 📑 Table of Contents

- [Express.js Mastery Roadmap — Production Engineer Track](#expressjs-mastery-roadmap--production-engineer-track)
  - [📑 Table of Contents](#-table-of-contents)
  - [01. HTTP Methods \& Built-in Middleware](#01-http-methods--built-in-middleware)
  - [02. The Application Object](#02-the-application-object)
  - [03. The Request Object](#03-the-request-object)
  - [04. The Response Object](#04-the-response-object)
  - [05. Middleware Architecture](#05-middleware-architecture)
  - [06. Routing \& Router Modularity](#06-routing--router-modularity)
  - [07. Error Handling](#07-error-handling)
  - [08. File Uploads](#08-file-uploads)
  - [09. Template Engines \& Views](#09-template-engines--views)
  - [10. Security](#10-security)
  - [11. Authentication \& Authorization](#11-authentication--authorization)
  - [12. Input Validation](#12-input-validation)
  - [13. Database Integration](#13-database-integration)
  - [14. RESTful API Design](#14-restful-api-design)
  - [15. Testing Strategy](#15-testing-strategy)
  - [16. Performance \& Scaling](#16-performance--scaling)
  - [17. Logging \& Monitoring](#17-logging--monitoring)
  - [18. Environment \& Configuration](#18-environment--configuration)
  - [19. Deployment \& DevOps](#19-deployment--devops)
  - [20. Debugging \& Developer Tools](#20-debugging--developer-tools)
  - [21. Best Practices \& Code Quality](#21-best-practices--code-quality)
  - [22. Ecosystem \& Beyond Express](#22-ecosystem--beyond-express)

## 01. HTTP Methods & Built-in Middleware

- [ ] `app.METHOD()` — `get`, `post`, `put`, `delete`, `patch`, and friends
- [ ] `express.json()` — parsing JSON request bodies
- [ ] `express.urlencoded()` — parsing form-encoded bodies
- [ ] `express.text()` and `express.raw()` — handling plain text/binary payloads
- [ ] `express.static()` — serving static assets (caching, `index`, `dotfiles` options)
- [ ] `express.Router()` — creating an isolated, mountable route handler

📖 **[Code examples →](./checklist/1.express-method/)**

## 02. The Application Object

- [ ] `app.set()` / `app.get()` — application-level settings
- [ ] `app.enable()` / `app.disable()` — boolean settings shorthand
- [ ] `app.locals` — data available to all views
- [ ] `app.param()` — reusable logic for route parameters
- [ ] `app.route()` — chainable route handlers for a single path
- [ ] `app.mountpath` — inspecting where a sub-app/router is mounted
- [ ] `app.all()` — matching every HTTP verb for a path

📖 **[Code examples →](./checklist/2.express-application/)**

## 03. The Request Object

- [ ] `req.params` — named route parameters
- [ ] `req.query` — query string parsing
- [ ] `req.body` — parsed request payload
- [ ] `req.method`, `req.path`, `req.baseUrl`, `req.originalUrl`
- [ ] `req.protocol` and `req.secure` — detecting HTTP vs HTTPS
- [ ] `req.hostname` — reading the `Host` header safely
- [ ] `req.cookies` — reading cookies (with `cookie-parser`)
- [ ] `req.route` — the currently matched route

📖 **[Code examples →](./checklist/3.express-request/)**

## 04. The Response Object

- [ ] `res.send()` / `res.json()` — sending response bodies
- [ ] `res.status()` — setting status codes deliberately, not as an afterthought
- [ ] `res.set()` / `res.get()` — response headers
- [ ] `res.cookie()` — setting cookies (flags: `httpOnly`, `secure`, `sameSite`)
- [ ] `res.redirect()` — 3xx redirects done correctly
- [ ] `res.format()` — content negotiation based on `Accept` header

📖 **[Code examples →](./checklist/4.express-response/)**

## 05. Middleware Architecture

- [ ] Application-level middleware (`app.use`)
- [ ] Built-in middleware (`express.json`, `express.static`, ...)
- [ ] Router-level middleware (scoped to a specific `Router`)
- [ ] Third-party middleware (`cookie-parser`, `morgan`, `helmet`, ...)
- [ ] Error-handling middleware (four-argument signature)
- [ ] Middleware execution order and why it matters
- [ ] Writing your own reusable middleware (auth guard, request logger, rate limiter)

📖 **[Code examples →](./checklist/5.middleware/)**

## 06. Routing & Router Modularity

- [ ] Splitting routes into separate `express.Router()` modules
- [ ] Mounting routers with `app.use('/path', router)`
- [ ] Route chaining with `router.route()`
- [ ] `next('route')` to skip to the next matching route
- [ ] Organizing routers by domain (admin, public, API versioned)
- [ ] Dynamic route parameters and nested resource routes

📖 **[Code examples →](./checklist/6.express-route/)**

## 07. Error Handling

- [ ] Centralized error-handling middleware (`err, req, res, next`)
- [ ] 404 handling — no matching route vs an actual error
- [ ] Synchronous error handling with `try/catch` + `next(err)`
- [ ] Async error handling (unhandled promise rejections in route handlers)
- [ ] Handling malformed/invalid JSON payloads gracefully
- [ ] Custom error classes with meaningful `status` and `message`
- [ ] Deciding what error detail is safe to expose to the client

📖 **[Code examples →](./checklist/7.error-handling/)**

## 08. File Uploads

- [ ] `multer` disk storage vs memory storage
- [ ] Filename collision handling and sanitization
- [ ] File type validation via `fileFilter`
- [ ] File size limits and rejecting oversized uploads
- [ ] Single, array, and multi-field uploads (`.single`, `.array`, `.fields`)
- [ ] Handling `MulterError` distinctly from generic errors

📖 **[Code examples →](./checklist/8.file-upload/)**

## 09. Template Engines & Views

- [ ] EJS fundamentals — partials, layouts, passing data to views
- [ ] Setting the view engine and views directory (`app.set('view engine', ...)`)
- [ ] Escaping output to avoid injection in server-rendered HTML
- [ ] When server-rendered views make sense vs a pure JSON API

## 10. Security

- [ ] `helmet` — sensible security headers by default
- [ ] CORS configuration (`cors` package) — allow-listing origins deliberately
- [ ] Rate limiting (`express-rate-limit` / `rate-limiter-flexible`)
- [ ] Preventing NoSQL/SQL injection in query construction
- [ ] Sanitizing user input to prevent XSS in rendered views
- [ ] Keeping secrets out of source control (`.env`, secret managers)
- [ ] HTTPS enforcement and secure cookie flags in production

## 11. Authentication & Authorization

- [ ] Session-based auth vs token-based auth (JWT) — trade-offs
- [ ] `passport.js` strategies (local, OAuth providers)
- [ ] Password hashing (`bcrypt`) — never storing plaintext
- [ ] Refresh token rotation and revocation
- [ ] Role-based access control (RBAC) middleware
- [ ] Protecting routes with auth guard middleware

## 12. Input Validation

- [ ] Schema validation with `Joi` / `Zod` / `express-validator`
- [ ] Validating `params`, `query`, and `body` consistently
- [ ] Returning structured, predictable validation error responses
- [ ] Sanitizing input before it reaches business logic

## 13. Database Integration

- [ ] Connecting to SQL databases (`pg`, `mysql2`, `Sequelize`, `Prisma`)
- [ ] Connecting to MongoDB (`mongoose`)
- [ ] Connection pooling and graceful shutdown
- [ ] Migrations and seed data management
- [ ] Keeping query/data-access logic out of route handlers

## 14. RESTful API Design

- [ ] Resource-oriented URL design and correct verb usage
- [ ] Consistent response envelope/shape across endpoints
- [ ] Pagination, filtering, and sorting conventions
- [ ] API versioning strategies (`/v1`, header-based)
- [ ] HATEOAS — when it's worth the complexity (and when it isn't)

## 15. Testing Strategy

- [ ] Unit testing route handlers and middleware in isolation
- [ ] Integration testing with `supertest`
- [ ] Mocking database/external service calls
- [ ] Testing error paths, not just the happy path
- [ ] Test coverage for auth-protected routes

## 16. Performance & Scaling

- [ ] Compression middleware (`compression`)
- [ ] Caching strategies (in-memory, Redis, HTTP cache headers)
- [ ] Clustering with Node's `cluster` module / `pm2`
- [ ] Avoiding blocking the event loop (CPU-heavy work off the main thread)
- [ ] Load testing (`autocannon`, `k6`) to find real bottlenecks

## 17. Logging & Monitoring

- [ ] Structured request logging (`morgan`, `pino`, `winston`)
- [ ] Correlation/request IDs across a request's lifecycle
- [ ] Centralized error reporting (Sentry or equivalent)
- [ ] Health check and readiness/liveness endpoints
- [ ] Metrics for latency, throughput, and error rate

## 18. Environment & Configuration

- [ ] `dotenv` for local environment variables
- [ ] Config validation at startup (fail fast on missing/invalid config)
- [ ] Separating dev/staging/production configuration cleanly
- [ ] Never trusting `NODE_ENV` alone for security-sensitive branching

## 19. Deployment & DevOps

- [ ] Containerizing an Express app with Docker
- [ ] Process management in production (`pm2`, systemd)
- [ ] Reverse proxying behind Nginx/Caddy
- [ ] Zero-downtime deploys and graceful shutdown (`SIGTERM` handling)
- [ ] CI/CD pipeline basics (GitHub Actions)

## 20. Debugging & Developer Tools

- [ ] Node's built-in debugger / Chrome DevTools for Node
- [ ] `nodemon` for local dev iteration
- [ ] Diagnosing memory leaks and event loop lag
- [ ] Reading and reasoning about stack traces from async code

## 21. Best Practices & Code Quality

- [ ] Keep route handlers thin — push logic into services/controllers
- [ ] Consistent project structure (routes / controllers / services / models)
- [ ] Centralized async error wrapper instead of repeated `try/catch`
- [ ] Meaningful HTTP status codes, not just `200`/`500` everywhere
- [ ] ESLint & Prettier setup for a team
- [ ] A personal code review checklist you actually apply to your own PRs

## 22. Ecosystem & Beyond Express

- [ ] GraphQL with Express (`apollo-server-express` or equivalent)
- [ ] WebSockets for real-time features (`socket.io`)
- [ ] Microservices — when splitting an Express monolith is actually justified
- [ ] Serverless deployment of Express apps (Vercel/AWS Lambda adapters)
