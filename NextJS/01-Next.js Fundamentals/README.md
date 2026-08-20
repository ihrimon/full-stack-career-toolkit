# 01. Fundamentals of Next.js — Deep Dive

[⬅ Back to Next.js Roadmap](../README.md)

> The checklist version of this topic lives in [`NextJS/README.md § 1`](../README.md#1-fundamentals-of-nextjs). This chapter explains the architecture behind Next.js, why it exists alongside React, how the App Router maps files to routes, and where server-side and client-side code runs.

## 📑 In This Deep Dive

- [Roadmap Checklist Coverage](#-roadmap-checklist-coverage)
- [What Is Next.js, Really?](#-what-is-nextjs-really)
- [React vs Next.js](#-react-vs-nextjs)
- [What Next.js Adds](#-what-nextjs-adds)
- [Prerequisites and Project Setup](#-prerequisites-and-project-setup)
- [CLI and Development Tooling](#-cli-and-development-tooling)
- [A Next.js Project Structure](#-a-nextjs-project-structure)
- [File-Based Routing](#-file-based-routing)
- [App Router vs Pages Router](#-app-router-vs-pages-router)
- [Server Components vs Client Components](#-server-components-vs-client-components)
- [Environment Variables and Configuration](#-environment-variables-and-configuration)
- [TypeScript, ESLint, Prettier, and Path Aliases](#-typescript-eslint-prettier-and-path-aliases)
- [Fast Refresh, Turbopack, and Compilers](#-fast-refresh-turbopack-and-compilers)
- [Build Time vs Runtime](#-build-time-vs-runtime)

## ✅ Roadmap Checklist Coverage

Every item in [Phase 1: Fundamentals of Next.js](../README.md#1-fundamentals-of-nextjs) is covered below:

| Roadmap topic                                                          | Covered in                                                                                                                                                    |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| What is Next.js & Why use it?                                          | [What Is Next.js, Really?](#-what-is-nextjs-really), [What Next.js Adds](#-what-nextjs-adds)                                                                  |
| Difference between React & Next.js                                     | [React vs Next.js](#-react-vs-nextjs)                                                                                                                         |
| Prerequisites: HTML, CSS, JavaScript, and React                        | [Prerequisites and Project Setup](#-prerequisites-and-project-setup)                                                                                          |
| `create-next-app` and project initialization                           | [Prerequisites and Project Setup](#-prerequisites-and-project-setup)                                                                                          |
| Next.js CLI: `next dev`, `next build`, `next start`, and `next info`   | [CLI and Development Tooling](#-cli-and-development-tooling)                                                                                                  |
| ESLint CLI and `npm run lint` workflow                                 | [CLI and Development Tooling](#-cli-and-development-tooling), [TypeScript, ESLint, Prettier, and Path Aliases](#-typescript-eslint-prettier-and-path-aliases) |
| Folder Structure & File-Based Routing                                  | [A Next.js Project Structure](#-a-nextjs-project-structure), [File-Based Routing](#-file-based-routing)                                                       |
| `src` folder convention                                                | [A Next.js Project Structure](#-a-nextjs-project-structure)                                                                                                   |
| `public` folder and static assets                                      | [A Next.js Project Structure](#-a-nextjs-project-structure)                                                                                                   |
| `package.json`, `next.config.js`/`next.config.ts`, and `tsconfig.json` | [A Next.js Project Structure](#-a-nextjs-project-structure)                                                                                                   |
| TypeScript setup and strict type checking                              | [TypeScript, ESLint, Prettier, and Path Aliases](#-typescript-eslint-prettier-and-path-aliases)                                                               |
| ESLint, Prettier, and module path aliases (`@/`)                       | [TypeScript, ESLint, Prettier, and Path Aliases](#-typescript-eslint-prettier-and-path-aliases)                                                               |
| App Router vs Pages Router (Next 13+)                                  | [App Router vs Pages Router](#-app-router-vs-pages-router)                                                                                                    |
| Server vs Client Components                                            | [Server Components vs Client Components](#-server-components-vs-client-components)                                                                            |
| Environment Variables & Config                                         | [Environment Variables and Configuration](#-environment-variables-and-configuration)                                                                          |
| `NEXT_PUBLIC_` variables and server-only secrets                       | [Environment Variables and Configuration](#-environment-variables-and-configuration)                                                                          |
| Fast Refresh and development workflow                                  | [Fast Refresh, Turbopack, and Compilers](#-fast-refresh-turbopack-and-compilers)                                                                              |
| Turbopack and the Next.js Compiler                                     | [Fast Refresh, Turbopack, and Compilers](#-fast-refresh-turbopack-and-compilers)                                                                              |
| React Compiler and when it helps                                       | [Fast Refresh, Turbopack, and Compilers](#-fast-refresh-turbopack-and-compilers)                                                                              |

## 🌐 What Is Next.js, Really?

Next.js is a full-stack React framework. React gives you the component model and rendering primitives; Next.js adds the application architecture around them: routing, server rendering, data access, code splitting, metadata, image optimization, and production build tooling.

```text
Your application
        ↓
Next.js framework
  routing · rendering · data · bundling · deployment conventions
        ↓
React
  components · JSX · state · hooks
        ↓
JavaScript runtime
  Node.js or Edge Runtime
```

The important shift is that a Next.js application is not only a browser bundle. A route can render on the server, send HTML and a minimal client payload, and then add interactivity in the browser where it is actually needed.

## ⚛️ React vs Next.js

| Concern           | React                                 | Next.js                                                      |
| ----------------- | ------------------------------------- | ------------------------------------------------------------ |
| What it is        | UI library                            | Full-stack React framework                                   |
| Routing           | Add a router such as React Router     | File-system routing is built in                              |
| Rendering         | Usually configured by the application | Static, dynamic, streaming, and server rendering conventions |
| Backend endpoints | Requires a separate server or library | Route Handlers and Server Actions are available              |
| SEO               | Requires extra rendering strategy     | Metadata and server rendering are built in                   |
| Build tooling     | Choose Vite, Webpack, or another tool | Integrated build, bundling, and optimization                 |

React is a good choice when you want to design the application architecture yourself. Next.js is useful when you want a supported structure for routing, server rendering, deployment, and full-stack features.

## 🧰 What Next.js Adds

Next.js addresses the repeated problems that appear when a React app becomes a real product:

- **Routing:** folders and files describe URL segments.
- **Rendering:** choose static rendering, dynamic rendering, streaming, or client rendering per route or component.
- **Server-first execution:** keep database access and secrets on the server instead of sending them to browsers.
- **Code splitting:** load JavaScript for the route and interactive components that the user needs.
- **Production features:** metadata, image optimization, caching, error boundaries, loading UI, and deployment output.

> **Interview framing:** React answers “how do I describe UI?” Next.js answers “how do I structure, render, fetch data for, and deploy a React application?”

## 📚 Prerequisites and Project Setup

Next.js assumes that you already understand HTML, CSS, JavaScript, and basic React concepts such as components, props, state, and hooks. Next.js provides the application structure; it does not replace those foundations.

Create a new application with the official CLI:

```bash
npx create-next-app@latest my-next-app
cd my-next-app
npm run dev
```

The setup wizard can configure TypeScript, ESLint, Tailwind CSS, a `src` directory, and the App Router. For a new application, choose the App Router unless you are specifically maintaining a Pages Router codebase.

## 🛠️ CLI and Development Tooling

The local `next` binary is exposed through `package.json` scripts:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint ."
  }
}
```

```bash
npm run dev       # start the development server
npm run build     # create a production build
npm run start     # serve the production build
npx next info     # print environment and diagnostic information
npm run lint      # run the project's ESLint command
```

`next build` validates and bundles the application, while `next start` expects that a production build already exists. Keep the CLI version local to the project so every developer and CI job uses the version declared in `package.json`.

## 📁 A Next.js Project Structure

An App Router project commonly looks like this:

```text
my-next-app/
├── app/
│   ├── layout.tsx          # shared root layout
│   ├── page.tsx            # route: /
│   ├── loading.tsx         # loading UI for this segment
│   ├── error.tsx           # client error boundary for this segment
│   ├── not-found.tsx       # 404 UI for this segment
│   ├── about/
│   │   └── page.tsx        # route: /about
│   └── api/
│       └── health/
│           └── route.ts    # endpoint: /api/health
├── src/                    # optional source root
│   └── app/                # app/ can live inside src/
├── components/             # reusable UI components
├── lib/                    # data access and shared utilities
├── public/                 # files served from the site root
├── next.config.ts          # Next.js configuration
├── package.json
└── tsconfig.json
```

The exact structure can vary. The key boundary is that files inside `app/` participate in routing, while `components/` and `lib/` are ordinary application code unless imported by a route.

The `src/` directory is optional. If used, put `app/` or `pages/` inside it; Next.js still treats it as the routing root. The `public/` directory is served from the site root, so `public/logo.svg` is requested as `/logo.svg`.

## 🗺️ File-Based Routing

In the App Router, a folder creates a route segment and a `page.tsx` file makes that segment publicly reachable:

```text
app/
├── page.tsx                    → /
├── dashboard/
│   └── page.tsx                → /dashboard
├── products/
│   └── [productId]/
│       └── page.tsx            → /products/:productId
└── blog/
    └── [...slug]/
        └── page.tsx            → /blog/*
```

Dynamic segments arrive through `params`:

```tsx
type ProductPageProps = {
  params: Promise<{ productId: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { productId } = await params;
  return <h1>Product: {productId}</h1>;
}
```

Not every file in `app/` becomes a route. Special files such as `layout.tsx`, `loading.tsx`, `error.tsx`, and `route.ts` have framework-defined roles. A component file without a special name is not directly addressable as a URL.

## 🔀 App Router vs Pages Router

The **Pages Router** is the older, still-supported routing system based on `pages/`. The **App Router** uses `app/` and is the recommended architecture for new Next.js applications.

| Feature            | Pages Router                           | App Router                                       |
| ------------------ | -------------------------------------- | ------------------------------------------------ |
| Route directory    | `pages/`                               | `app/`                                           |
| Shared layouts     | `_app.tsx`, custom patterns            | `layout.tsx` at any segment                      |
| Server Components  | Not the default model                  | Default for components without `'use client'`    |
| Data APIs          | `getStaticProps`, `getServerSideProps` | Async Server Components, `fetch`, Server Actions |
| Loading and errors | Custom patterns                        | `loading.tsx`, `error.tsx`, `not-found.tsx`      |
| Best use           | Maintaining existing applications      | New applications and server-first features       |

Do not place the same URL in both routers while migrating. Resolve the route ownership first, then move shared UI and data logic in small steps.

## 🖥️ Server Components vs Client Components

In the App Router, components are Server Components by default. They render on the server and can safely access server-only resources such as a database or private environment variable.

```tsx
// app/products/page.tsx — Server Component by default
import { db } from '@/lib/db';

export default async function ProductsPage() {
  const products = await db.product.findMany();
  return <pre>{JSON.stringify(products, null, 2)}</pre>;
}
```

Add `'use client'` only when a component needs browser-only capabilities such as state, event handlers, effects, or browser APIs:

```tsx
'use client';

import { useState } from 'react';

export function QuantityButton() {
  const [quantity, setQuantity] = useState(1);
  return <button onClick={() => setQuantity(quantity + 1)}>{quantity}</button>;
}
```

**The bug this explains — sending secrets to the browser:**

```tsx
// ❌ A client component should not receive private server data
'use client';
const apiKey = process.env.PAYMENT_SECRET;
```

Client components become part of the browser bundle. Keep secrets, database clients, and privileged operations in Server Components or server-only modules. Pass only the minimum serializable data into a client component.

```text
Server Component
  ├── fetch private data
  └── render HTML
        ↓ serializable props
Client Component
  └── state, events, browser APIs
```

## 🔐 Environment Variables and Configuration

Create environment files locally, but do not commit secrets:

```env
DATABASE_URL=postgres://localhost/app
NEXT_PUBLIC_API_URL=https://api.example.com
```

Variables without `NEXT_PUBLIC_` are server-only. Variables prefixed with `NEXT_PUBLIC_` may be embedded into the browser bundle and must be treated as public.

```tsx
// Server-only usage
const databaseUrl = process.env.DATABASE_URL;

// Public value, available to client-side code
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

**The bug this explains — putting a secret behind `NEXT_PUBLIC_`:**

```env
# ❌ This value can be exposed to every browser visitor
NEXT_PUBLIC_STRIPE_SECRET_KEY=sk_live_...
```

Use deployment-platform environment settings for production values. Validate required variables during server startup or request handling so a missing configuration fails clearly instead of producing a confusing downstream error.

## 🧩 TypeScript, ESLint, Prettier, and Path Aliases

Next.js supports TypeScript directly. `tsconfig.json` controls compiler behavior, and Next.js can type-check the project during production builds. A strict configuration catches invalid props, missing route parameters, and unsafe server/client boundaries earlier:

```json
{
  "compilerOptions": {
    "strict": true,
    "baseUrl": ".",
    "paths": { "@/*": ["./src/*"] }
  }
}
```

The `@/` alias lets application code avoid fragile relative paths:

```ts
import { db } from '@/lib/db';
```

ESLint catches common React and Next.js mistakes. Prettier formats files consistently. They solve different problems and are normally run through scripts or a pre-commit/CI check:

```json
{
  "scripts": {
    "lint": "eslint .",
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

Do not treat formatting as type checking: run ESLint, TypeScript checks, and tests as separate quality gates.

## ⚡ Fast Refresh, Turbopack, and Compilers

**Fast Refresh** updates edited React components in development while trying to preserve local component state. A full browser reload can still happen when a module has side effects or exports values that cannot be safely refreshed.

**Turbopack** is Next.js's incremental bundler, written in Rust, and is used by current development workflows. It focuses on fast startup and rebuilds. Webpack remains relevant for compatibility and custom legacy configurations.

The **Next.js Compiler** transforms and optimizes application code. The optional **React Compiler** can automatically optimize certain React components by analyzing their dependencies. It does not remove the need to understand component boundaries, stable data flow, or correct state design.

## 🏗️ Build Time vs Runtime

Next.js has two important moments:

1. **Build time:** `next build` analyzes routes, bundles modules, and may pre-render static output.
2. **Runtime:** the deployed server or platform handles requests, executes dynamic code, and may revalidate cached data.

Do not assume every value is read at runtime. A value used during static generation can be captured in the generated output. Dynamic APIs such as `cookies()` or `headers()`, and explicit dynamic configuration, can make a route render at request time.

```tsx
export const dynamic = 'force-dynamic';

export default async function AccountPage() {
  const response = await fetch('https://api.example.com/account', {
    cache: 'no-store',
  });
  const account = await response.json();
  return <h1>{account.name}</h1>;
}
```

The rendering choice is a product decision: static output is fast and cacheable, while dynamic output is appropriate when the response depends on the request, cookies, headers, or frequently changing data.

---

💡 **[Interview Q&A for this topic →](./interview-qa.md)**
