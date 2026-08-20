# 01. Fundamentals of Next.js — Interview Q&A

[⬅ Back to Deep Dive](./README.md) · [⬅ Back to Next.js Roadmap](../README.md)

> Quick-fire Q&A for this topic — Next.js architecture, React comparison, routing, App Router, Server Components, Client Components, environment variables, and build/runtime behavior. Use the [deep dive](./README.md) for the full explanations and examples.

> **Coverage:** Q1-Q3 cover the framework and React foundation; Q4-Q6 cover project structure, routing, and router choice; Q7-Q10 cover Server/Client Components; Q11-Q15 cover environment variables and rendering; Q16-Q23 cover prerequisites, setup, CLI, tooling, and compilers.

**Q1. What is Next.js?**

Next.js is a full-stack React framework. It adds routing, server and static rendering, data-fetching conventions, code splitting, metadata, image optimization, error handling, and production build tooling around React.

**Q2. What is the difference between React and Next.js?**

React is a UI library for building components. Next.js is a framework built on React that provides application-level architecture, including routing, rendering strategies, server-side execution, and deployment-oriented tooling.

**Q3. Why use Next.js instead of a plain React SPA?**

Next.js provides file-based routing, server rendering, static generation, streaming, built-in metadata, route handlers, and code splitting. These features improve SEO, initial loading, and full-stack organization without requiring the team to assemble every layer separately.

**Q4. What is the App Router?**

The App Router is Next.js's newer routing system based on the `app/` directory. Folders represent route segments, `page.tsx` creates pages, and special files such as `layout.tsx`, `loading.tsx`, and `error.tsx` define shared UI and route states.

**Q5. What makes a file a route in the App Router?**

A folder becomes a URL segment, but it becomes publicly reachable only when it contains a `page.tsx` or `page.js` file. For example, `app/about/page.tsx` maps to `/about`.

**Q6. What is the difference between App Router and Pages Router?**

The Pages Router uses `pages/`, APIs such as `getStaticProps`, and older layout patterns. The App Router uses `app/`, nested layouts, Server Components by default, and special loading/error files. The App Router is recommended for new applications, while the Pages Router remains useful for existing codebases.

**Q7. What is a Server Component in Next.js?**

In the App Router, a component without `'use client'` is a Server Component by default. It renders on the server and can access server-only resources such as databases, private environment variables, and backend services without shipping that code to the browser.

**Q8. When should you use `'use client'`?**

Use `'use client'` when a component needs React state, event handlers, effects, browser APIs, or client-side interaction. It creates a client boundary, so the component and its client-compatible dependencies can be included in the browser bundle.

**Q9. Can a Client Component import a Server Component?**

Not as a normal direct import. A Server Component can render a Client Component and pass serializable props to it. Keep server-only data access above the client boundary and pass only the data or UI slot the client component needs.

**Q10. Why should database queries stay in Server Components?**

Server Components keep database credentials and server-only libraries away from the browser. Sending those operations into a Client Component can expose secrets, increase the client bundle, and allow users to inspect implementation details that should remain on the server.

**Q11. What is the difference between `NEXT_PUBLIC_` and normal environment variables?**

Normal variables are intended for server-side code. Variables beginning with `NEXT_PUBLIC_` can be embedded into client-side JavaScript and should be considered public. Never place passwords, private API keys, or signing secrets behind the `NEXT_PUBLIC_` prefix.

**Q12. What is file-based routing?**

It is a routing model where the directory structure describes the URL structure. `app/products/[id]/page.tsx` represents a dynamic `/products/:id` route, and the `id` value is available through the route's `params`.

**Q13. What is the difference between build time and runtime in Next.js?**

Build time is when `next build` analyzes and bundles the application and may generate static pages. Runtime is when the deployed application handles requests and executes dynamic logic. Data or environment values used during static generation may be captured in generated output rather than read for every request.

**Q14. What makes a route dynamic?**

A route becomes dynamic when its output depends on request-time information such as cookies, headers, or uncached data. You can also explicitly configure it, for example with `export const dynamic = 'force-dynamic'` or a request using `cache: 'no-store'`.

**Q15. Where should `layout.tsx`, `loading.tsx`, and `error.tsx` be used?**

`layout.tsx` provides shared UI that persists across navigation within a route segment. `loading.tsx` provides a loading state while that segment renders. `error.tsx` provides an error boundary for errors thrown below that segment and must be a Client Component.

**Q16. What knowledge should you have before learning Next.js?**

You should be comfortable with HTML, CSS, JavaScript, and core React concepts such as components, props, state, hooks, and JSX. Next.js provides application architecture around React; it does not replace these foundations.

**Q17. What does `create-next-app` do?**

`create-next-app` creates a Next.js project and can configure TypeScript, ESLint, Tailwind CSS, a `src` directory, and the App Router. It gives the project a consistent starting structure and installs the required dependencies.

**Q18. What are the main Next.js CLI commands?**

`next dev` starts development mode, `next build` creates the production build, `next start` serves that build, and `next info` prints environment and diagnostic information. These commands should normally be run through the project-local npm scripts.

**Q19. What is the purpose of the `src` and `public` folders?**

`src` is an optional source root that can contain `app` or `pages`. `public` contains static files served from the site root; for example, `public/logo.svg` is available at `/logo.svg`. Files in `public` are not automatically optimized like imports handled by the bundler.

**Q20. Why are TypeScript, ESLint, Prettier, and path aliases useful in a Next.js project?**

TypeScript catches invalid data and component contracts, ESLint catches code and framework mistakes, Prettier keeps formatting consistent, and path aliases such as `@/lib/db` avoid fragile deep relative imports. They are complementary tools, not substitutes for one another.

**Q21. What is Fast Refresh?**

Fast Refresh updates edited React components during development and attempts to preserve local state. It may perform a full reload when a module has side effects or exports that cannot be safely refreshed.

**Q22. What are Turbopack and the Next.js Compiler?**

Turbopack is an incremental JavaScript and TypeScript bundler focused on fast development and builds. The Next.js Compiler transforms and optimizes application code. They are different layers: the bundler determines how modules are assembled, while the compiler transforms source code.

**Q23. What does the React Compiler do in a Next.js application?**

The React Compiler can automatically optimize eligible React components by analyzing dependencies and memoization opportunities. It is an optimization tool, not a replacement for choosing correct Server and Client Component boundaries or designing predictable state flow.
