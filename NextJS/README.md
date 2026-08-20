# ⚡ Next.js Mastery Roadmap 🚀🌐

A complete guide to mastering **Next.js** — from fundamentals to deployment.  
Perfect for developers preparing for **interviews** or **production-level full-stack projects**.

> This roadmap follows a beginner → advanced path and is aligned with the current Next.js App Router documentation, Pages Router compatibility topics, and the roadmap.sh Next.js curriculum. The App Router is the primary path; Pages Router topics are retained for maintenance and migration work.

---

## 📑 Table of Contents

**🟢 Phase 1 — Foundations**

- [01. Fundamentals of Next.js](#1-fundamentals-of-nextjs) ✅
- [02. Pages & Routing](#2-pages--routing)
- [03. Rendering Methods](#3-rendering-methods)
- [📦 Checkpoint Project 1](#-checkpoint-project-1)

**🟡 Phase 2 — Building Applications**

- [04. Data Fetching](#4-data-fetching)
- [05. Styling & UI](#5-styling--ui)
- [06. State Management](#6-state-management)
- [07. API Routes & Backend Integration](#7-api-routes--backend-integration)
- [08. Authentication & Authorization](#8-authentication--authorization)
- [📦 Checkpoint Project 2](#-checkpoint-project-2)

**🔴 Phase 3 — Production Quality**

- [09. Middleware & Edge Functions](#9-middleware--edge-functions)
- [10. File Handling & Image Optimization](#10-file-handling--image-optimization)
- [11. Performance Optimization](#11-performance-optimization)
- [12. Testing](#12-testing)
- [📦 Checkpoint Project 3](#-checkpoint-project-3)

**⚫ Phase 4 — Advanced & Deployment**

- [13. Advanced Features](#13-advanced-features)
- [14. Deployment & DevOps](#14-deployment--devops)
- [15. Best Practices & Interview Prep](#15-best-practices--interview-prep)
- [🏆 Capstone Project](#-capstone-project)

- [💡 Bonus: Build Projects to Master Next.js](#-bonus-build-projects-to-master-nextjs)

---

## 🟢 Phase 1 — Foundations

### 1. Fundamentals of Next.js

- [x] What is Next.js & Why use it?
- [x] Difference between React & Next.js
- [ ] Prerequisites: HTML, CSS, JavaScript, and React
- [ ] `create-next-app` and project initialization
- [ ] Next.js CLI: `next dev`, `next build`, `next start`, and `next info`
- [ ] ESLint CLI and `npm run lint` workflow
- [x] Folder Structure & File-Based Routing
- [ ] `src` folder convention
- [ ] `public` folder and static assets
- [ ] `package.json`, `next.config.js`/`next.config.ts`, and `tsconfig.json`
- [ ] TypeScript setup and strict type checking
- [ ] ESLint, Prettier, and module path aliases (`@/`)
- [x] App Router vs Pages Router (Next 13+)
- [x] Server vs Client Components
- [x] Environment Variables & Config
- [ ] `NEXT_PUBLIC_` variables and server-only secrets
- [ ] Fast Refresh and development workflow
- [ ] Turbopack and the Next.js Compiler
- [ ] React Compiler and when it helps

📖 **[Deep dive → 01. Fundamentals of Next.js](./01-Next.js%20Fundamentals/README.md)**

### 2. Pages & Routing

- [ ] Static & Dynamic Routes
- [ ] Nested Routes
- [ ] Dynamic Segments `[slug]`, `[id]`
- [ ] Catch-All Routes `[...slug]`
- [ ] Optional Catch-All Routes `[[...slug]]`
- [ ] Layouts & Nested Layouts (App Router)
- [ ] `layout.tsx` vs `template.tsx`
- [ ] Route Groups `(group)`
- [ ] Parallel Routes `@slot`
- [ ] Intercepting Routes `(.)`, `(..)`, `(...)`
- [ ] `default.tsx` for unmatched parallel route slots
- [ ] Linking with the `Link` component
- [ ] Client-side navigation and soft navigation
- [ ] Prefetching, prefetch control, and instant navigation
- [ ] Redirects & Rewrites
- [ ] `redirect()`, `permanentRedirect()`, and `notFound()`
- [ ] `useRouter`, `usePathname`, and `useSearchParams`
- [ ] `generateStaticParams`
- [ ] Route segment configuration: `dynamic`, `dynamicParams`, `revalidate`, `fetchCache`, `runtime`, and `maxDuration`
- [ ] Pages Router: `pages/`, `next/link`, `next/router`, API routes, and migration to App Router

### 3. Rendering Methods

- [ ] CSR (Client-Side Rendering)
- [ ] SSR (Server-Side Rendering)
- [ ] SSG (Static Site Generation)
- [ ] ISR (Incremental Static Regeneration)
- [ ] When to use which Rendering Type
- [ ] Static vs dynamic rendering detection
- [ ] Rendering as a spectrum at component and route level
- [ ] Streaming with Suspense
- [ ] Loading UI with `loading.tsx`
- [ ] Partial Prerendering (PPR)
- [ ] Server rendering and client rendering composition
- [ ] Hydration and hydration mismatch debugging
- [ ] Request-time rendering with `cookies()` and `headers()`
- [ ] `connection()` and dynamic request boundaries
- [ ] Edge Runtime vs Node.js Runtime rendering

### 📦 Checkpoint Project 1

> Build a content-focused Next.js site with the App Router: create nested and dynamic routes, add shared layouts, render public pages statically, and include loading, error, and not-found states. This checkpoint verifies that the routing and rendering model is clear before adding application data and authentication.

---

## 🟡 Phase 2 — Building Applications

### 4. Data Fetching

- [ ] Pages Router: `getStaticProps`, `getServerSideProps`, `getStaticPaths`
- [ ] Data Fetching in App Router (`fetch`, `cache`, `revalidate`)
- [ ] Using APIs with SWR / React Query
- [ ] Error & Loading UI Handling
- [ ] Server Components and async data fetching
- [ ] Parallel vs sequential data fetching
- [ ] Preloading data and request memoization
- [ ] React `cache` for request deduplication
- [ ] Handling sensitive data and data security boundaries
- [ ] Server Functions and Server Actions
- [ ] Forms with Server Actions
- [ ] Mutations, validation, pending UI, and optimistic updates
- [ ] `useActionState`, `useFormStatus`, and `useOptimistic`
- [ ] Cache Components and the `use cache` directive
- [ ] `cacheLife`, `cacheTag`, `revalidatePath`, `revalidateTag`, and `updateTag`
- [ ] `unstable_cache` and legacy caching patterns
- [ ] Draft Mode for previewing unpublished CMS content
- [ ] Error handling for expected and uncaught data errors

### 5. Styling & UI

- [ ] CSS Modules
- [ ] Tailwind CSS
- [ ] ShadCN UI / Radix UI
- [ ] Styled Components / Emotion
- [ ] Sass and PostCSS
- [ ] CSS-in-JS trade-offs in Server and Client Components
- [ ] Global Styles & Theme Setup (Dark/Light Mode)
- [ ] Responsive design and accessible component patterns
- [ ] `next/font` and font loading optimization
- [ ] Design systems with Radix UI / shadcn/ui

### 6. State Management

- [ ] React Context API
- [ ] Redux Toolkit
- [ ] Zustand / Jotai / Recoil
- [ ] Server State Management (SWR / React Query)
- [ ] Server state vs client state vs URL state
- [ ] Search params as shareable UI state
- [ ] Form state with Server Actions
- [ ] Cache invalidation after mutations
- [ ] Avoiding unnecessary global state in Server Components

### 7. API Routes & Backend Integration

- [ ] Pages Router API Routes (`pages/api`)
- [ ] App Router Route Handlers (`app/**/route.ts`)
- [ ] `GET`, `POST`, `PUT`, `PATCH`, and `DELETE`
- [ ] `NextRequest` and `NextResponse`
- [ ] Request body, query, cookies, and headers
- [ ] RESTful API Design
- [ ] Connecting to MongoDB / Prisma ORM
- [ ] Using External APIs
- [ ] Handling Errors in API Routes
- [ ] Input validation with Zod
- [ ] Authentication and authorization in Route Handlers
- [ ] CORS and security headers
- [ ] Streaming responses and webhooks
- [ ] Backend-for-Frontend (BFF) pattern
- [ ] Node.js Runtime vs Edge Runtime for APIs
- [ ] Custom server and when not to use one
- [ ] Server Actions vs Route Handlers: choosing the right boundary

### 8. Authentication & Authorization

- [ ] NextAuth.js (OAuth, Credentials, JWT)
- [ ] Custom Auth Flow (JWT / Cookies)
- [ ] Role-Based Access Control (Admin, User)
- [ ] Protecting Routes (Middleware, Session Check)
- [ ] Auth.js (formerly NextAuth.js) current patterns
- [ ] Session handling in Server Components and Route Handlers
- [ ] OAuth providers and credential authentication
- [ ] HttpOnly cookies, secure cookies, and SameSite
- [ ] Access tokens vs refresh tokens
- [ ] Server-side session validation
- [ ] Authorization checks close to the data source
- [ ] CSRF, XSS, and Content Security Policy (CSP)
- [ ] Protecting Server Actions from unauthorized calls
- [ ] Avoiding secrets in Client Components and public environment variables

### 📦 Checkpoint Project 2

> Build a small dashboard with authenticated users, protected routes, a database-backed API or Route Handler, server-side data fetching, client-side form state, and a responsive styled interface. Keep secrets on the server and expose only the data the browser needs.

## 🔴 Phase 3 — Production Quality

### 9. Middleware & Edge Functions

- [ ] Proxy (`proxy.ts`) and request interception
- [ ] Legacy Middleware (`middleware.ts`) and migration to `proxy.ts`
- [ ] Proxy matchers and route exclusions
- [ ] Auth validation and redirects at the edge
- [ ] `NextRequest`, `NextResponse`, and user-agent helpers
- [ ] Edge Runtime APIs and unsupported Node.js modules
- [ ] Edge caching and geographic execution
- [ ] Rate limiting and A/B testing
- [ ] When to use Proxy, Route Handlers, or Server Components

### 10. File Handling & Image Optimization

- [ ] Image Optimization (`next/image`)
- [ ] `next/image` sizing, priority, lazy loading, and placeholders
- [ ] Remote image patterns and custom image loaders
- [ ] File Upload (Multer, Cloudinary, S3)
- [ ] Video Optimization & Lazy Loading
- [ ] Static File Serving (`/public` directory)
- [ ] `next/font` and local/Google font optimization
- [ ] `next/script` and third-party script strategies
- [ ] Static assets, favicons, icons, and manifest files
- [ ] Image security and allowed remote domains

### 11. Performance Optimization

- [ ] Code Splitting & Dynamic Imports
- [ ] Prefetching Links
- [ ] Using `React.lazy()`
- [ ] Bundle Analysis (`next-bundle-analyzer`)
- [ ] Caching & CDN Optimization
- [ ] Turbopack package bundling and bundle analysis
- [ ] `next/dynamic` and component lazy loading
- [ ] Tree shaking and client bundle boundaries
- [ ] Link prefetching and prefetch optimization
- [ ] React Server Components bundle reduction
- [ ] Web Vitals and `useReportWebVitals`
- [ ] React Compiler and render optimization
- [ ] Memory usage and memory leak detection
- [ ] Image, font, and third-party library performance
- [ ] CDN cache keys, stale content, and cache invalidation
- [ ] Production performance checklist

### 12. Testing

- [ ] Unit Testing with Jest
- [ ] Unit Testing with Vitest
- [ ] Component Testing with React Testing Library
- [ ] Cypress component and end-to-end testing
- [ ] Playwright end-to-end testing
- [ ] Integration Testing with Supertest
- [ ] Mocking API Calls
- [ ] Mock Service Worker (MSW)
- [ ] Testing Server Components
- [ ] Testing Route Handlers and Server Actions
- [ ] Authentication and authorization flow testing
- [ ] Visual regression testing
- [ ] Accessibility testing
- [ ] Test coverage and CI test strategy

### 📦 Checkpoint Project 3

> Take the dashboard from Checkpoint 2 and make it production-ready: add middleware-based access control, optimized images, cache-aware data fetching, unit and integration tests, and a Playwright end-to-end test for the critical user journey.

---

## ⚫ Phase 4 — Advanced & Deployment

### 13. Advanced Features

- [ ] Server Actions & Mutations (Next 14+)
- [ ] Cache Components and Partial Prerendering
- [ ] Middleware/Proxy-Based Role Handling
- [ ] Internationalization (i18n)
- [ ] Internationalized routing and localized metadata
- [ ] MDX and Markdown content
- [ ] Progressive Web App (PWA) Setup
- [ ] Offline support and retry behavior
- [ ] WebSockets, Server-Sent Events, and real-time architecture
- [ ] Serverless limitations for persistent connections
- [ ] Multi-tenant applications
- [ ] Multi-zones and micro-frontends
- [ ] View Transitions
- [ ] React Compiler integration
- [ ] AI SDK and streaming AI interfaces
- [ ] `after()` for post-response work
- [ ] `forbidden.tsx` and `unauthorized.tsx`
- [ ] `instrumentation.ts` and `instrumentation-client.ts`
- [ ] OpenTelemetry and distributed tracing

### 14. Deployment & DevOps

- [ ] `next build` output and build analysis
- [ ] Building & Exporting Static/Server Apps
- [ ] Static export with `output: 'export'`
- [ ] Deployment Platforms (Vercel, Netlify, Render, AWS)
- [ ] Node.js server deployment
- [ ] Edge deployment
- [ ] Serverless deployment
- [ ] Self-hosting with Node.js and Docker
- [ ] Deployment adapters
- [ ] Environment Configuration (Production vs Dev)
- [ ] CI/CD Setup (GitHub Actions, Vercel Hooks)
- [ ] Monitoring & Error Tracking (Sentry, LogRocket)
- [ ] Logging and request tracing
- [ ] OpenTelemetry production setup
- [ ] CDN and cache configuration
- [ ] Health checks and graceful shutdown
- [ ] Zero-downtime deployment
- [ ] Version upgrades and codemods

### 15. Best Practices & Interview Prep

- [ ] Clean Folder Structure (App vs Components vs Lib)
- [ ] Reusable UI Components & Hooks
- [ ] Error Boundary Setup
- [ ] Loading, error, not-found, forbidden, and unauthorized UI
- [ ] SEO Optimization with Metadata API
- [ ] `generateMetadata` and dynamic metadata
- [ ] Open Graph and Twitter images
- [ ] `favicon`, `icon`, `manifest.json`, `robots.txt`, and `sitemap.xml`
- [ ] `generateSitemaps`, `generateViewport`, and JSON-LD
- [ ] Accessibility (a11y)
- [ ] Semantic HTML, keyboard navigation, focus management, and ARIA
- [ ] Data security and server-only modules
- [ ] Content Security Policy and security headers
- [ ] Supported browsers and progressive enhancement
- [ ] Debugging with VS Code and browser DevTools
- [ ] Fast Refresh troubleshooting and hydration debugging
- [ ] Production checklist and incident readiness
- [ ] Common Next.js Interview Questions
- [ ] Debugging & Profiling Next.js Apps

### 🏆 Capstone Project

> Build and deploy a complete full-stack Next.js product such as an e-commerce app, learning platform, or SaaS dashboard. Include App Router navigation, Server and Client Components, authentication, database integration, Server Actions or Route Handlers, SEO metadata, accessibility, testing, observability, and a documented production deployment.

## 💡 Bonus: Build Projects to Master Next.js

| Project                 | Focus Area                              |
| ----------------------- | --------------------------------------- |
| 🌍 Portfolio Website    | Routing, SEO, ISR                       |
| 🛒 E-commerce App       | SSR + Client Components + Auth          |
| 🧠 Blog App             | Markdown + SSG + ISR                    |
| 💬 Chat App             | WebSocket + API Routes                  |
| ⚕ MediGo (Your Project) | Full-stack + Auth + Payment + Dashboard |
