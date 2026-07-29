# ⚛️ React Mastery Roadmap — Production Engineer Track

> **Goal:** Go from "I know basic React" to a **production-level Frontend Engineer** — someone who can architect, optimize, test, secure, and ship React applications at scale, and explain *why* every decision was made.

> **Prerequisite:** This roadmap assumes you already know React fundamentals — JSX, function components, `useState`, basic `useEffect`, props, and conditional/list rendering. None of that is repeated here. Every section below is intermediate → advanced → production-grade on purpose, so a recruiter or fellow engineer looking at this list can see exactly what depth of React you're building toward.

---

## 📑 Table of Contents

- [⚛️ React Mastery Roadmap — Production Engineer Track](#️-react-mastery-roadmap--production-engineer-track)
  - [📑 Table of Contents](#-table-of-contents)
  - [1. Rendering Model \& Internals](#1-rendering-model--internals)
  - [2. Hooks — Beyond the Basics](#2-hooks--beyond-the-basics)
  - [3. Escape Hatches \& Refs](#3-escape-hatches--refs)
  - [4. Context API at Scale](#4-context-api-at-scale)
  - [5. Advanced Component Patterns](#5-advanced-component-patterns)
  - [6. Performance Engineering](#6-performance-engineering)
  - [7. Forms at Production Level](#7-forms-at-production-level)
  - [8. Data Fetching \& Server State](#8-data-fetching--server-state)
  - [9. Routing (React Router)](#9-routing-react-router)
  - [10. Global State Management](#10-global-state-management)
  - [11. Styling at Scale](#11-styling-at-scale)
  - [12. Animation](#12-animation)
  - [13. TypeScript with React](#13-typescript-with-react)
  - [14. Testing Strategy](#14-testing-strategy)
  - [15. Error Handling \& Resilience](#15-error-handling--resilience)
  - [16. Accessibility (a11y) at Production Level](#16-accessibility-a11y-at-production-level)
  - [17. Security](#17-security)
  - [18. React 19 \& Modern Features](#18-react-19--modern-features)
  - [19. SSR \& Meta-Frameworks](#19-ssr--meta-frameworks)
  - [20. Production Architecture](#20-production-architecture)
  - [21. Build Tools \& Tooling](#21-build-tools--tooling)
  - [22. Deployment \& DevOps](#22-deployment--devops)
  - [23. Debugging \& Developer Tools](#23-debugging--developer-tools)
  - [24. Best Practices \& Code Quality](#24-best-practices--code-quality)
  - [25. Ecosystem \& Beyond React](#25-ecosystem--beyond-react)
  - [🎯 Production-Ready Completion Checklist](#-production-ready-completion-checklist)
  - [💡 Interview Questions \& Answers](#-interview-questions--answers)

---

## 1. Rendering Model & Internals

- [ ] React Fiber architecture (why it replaced the old stack reconciler)
- [ ] Render phase vs Commit phase
- [ ] The reconciliation algorithm & how keys drive it
- [ ] Why & when components re-render
- [ ] State batching (React 18 automatic batching)
- [ ] Concurrent rendering & the Scheduler
- [ ] `<StrictMode>` — what it actually double-invokes and why

---

## 2. Hooks — Beyond the Basics

- [ ] `useReducer` for complex local state logic
- [ ] `useMemo` vs `useCallback` — when each actually helps (and when it's noise)
- [ ] `useLayoutEffect` vs `useEffect` — timing differences that matter
- [ ] `useId` — stable IDs for SSR-safe accessibility wiring
- [ ] `useTransition` & `useDeferredValue` — concurrent UI without blocking input
- [ ] `useSyncExternalStore` — subscribing to external stores correctly
- [ ] Rules of Hooks — the *why*, not just the *what*
- [ ] Designing custom hooks for reusable stateful logic (naming, return shape, composability)

---

## 3. Escape Hatches & Refs

- [ ] `useRef` beyond DOM access — mutable values that don't trigger re-renders
- [ ] Direct DOM manipulation when React state isn't the right tool
- [ ] `forwardRef` — exposing a DOM node/API from a child component
- [ ] `useImperativeHandle` — controlling exactly what a ref exposes

---

## 4. Context API at Scale

- [ ] Creating and combining multiple contexts cleanly
- [ ] Context performance pitfalls (why one big context re-renders everything)
- [ ] Context splitting (state context vs dispatch context)
- [ ] When Context is the wrong tool and a state library is the right one

---

## 5. Advanced Component Patterns

- [ ] Compound Components pattern
- [ ] Provider Pattern
- [ ] Render Props pattern
- [ ] Higher-Order Components (HOC) — and when a hook should replace one
- [ ] Headless Components (logic without markup)
- [ ] Slot Pattern
- [ ] Composition over inheritance in practice

---

## 6. Performance Engineering

- [ ] `React.memo` — correct usage and common misuse
- [ ] Identifying and eliminating unnecessary re-renders
- [ ] Code splitting with `React.lazy` + `Suspense`
- [ ] Virtualization / windowing (`react-window`, `react-virtualized`) for large lists
- [ ] Bundle size analysis & optimization
- [ ] Profiling with React DevTools Profiler
- [ ] Debugging *why* a specific component re-rendered
- [ ] Memory leak detection (dangling subscriptions, timers, listeners)
- [ ] Image loading/optimization strategy inside a React app

---

## 7. Forms at Production Level

- [ ] React Hook Form — uncontrolled-first performance model
- [ ] Schema validation with Zod / Yup
- [ ] Complex, multi-step, and dynamic form patterns
- [ ] File upload handling (progress, previews, validation)
- [ ] Accessible error messaging and field-level validation UX

---

## 8. Data Fetching & Server State

- [ ] TanStack Query (React Query) — caching, refetching, invalidation
- [ ] SWR as an alternative
- [ ] Distinguishing **server state** from **client state**
- [ ] `AbortController` for cancellable requests
- [ ] Parallel vs dependent (sequential) queries
- [ ] Infinite queries / pagination patterns
- [ ] Optimistic updates and rollback on failure

---

## 9. Routing (React Router)

- [ ] React Router v6+ (`Route`, `Routes`, `Outlet`, `Link`, `NavLink`)
- [ ] Nested routes & layout routes
- [ ] Dynamic routes & URL params, search params
- [ ] Protected/private routes (auth guards)
- [ ] Programmatic navigation (`useNavigate`)
- [ ] Route-based lazy loading & code splitting

---

## 10. Global State Management

- [ ] Recognizing when you actually need global state (vs Context, vs server state)
- [ ] Redux Toolkit — store, slices, reducers, RTK Query
- [ ] Zustand for lightweight global state
- [ ] Jotai / Recoil — atomic state management model
- [ ] Trade-offs: choosing the right tool for the project's actual scale

---

## 11. Styling at Scale

- [ ] CSS Modules
- [ ] CSS-in-JS (Styled Components / Emotion) — trade-offs vs utility CSS
- [ ] Tailwind CSS integration patterns
- [ ] `clsx` + Class Variance Authority (CVA) for variant-driven components
- [ ] Theming & dark mode implementation
- [ ] Responsive design patterns inside component architecture

---

## 12. Animation

- [ ] CSS transitions/animations vs JS-driven animation — when to use which
- [ ] Framer Motion fundamentals
- [ ] Layout animations & shared layout transitions
- [ ] Gesture-driven animation
- [ ] Performance cost of animating layout vs transform/opacity

---

## 13. TypeScript with React

- [ ] Typing props, state, and hook return values precisely
- [ ] Typing event handlers correctly (not `any`)
- [ ] Generic components (e.g. a generic `<List<T>>`)
- [ ] Interfaces vs Types for component contracts
- [ ] Discriminated unions for props that change shape by variant

---

## 14. Testing Strategy

- [ ] Vitest / Jest fundamentals in a React project
- [ ] React Testing Library — testing behavior, not implementation
- [ ] Simulating user events realistically (`user-event`)
- [ ] Mocking API calls and modules
- [ ] Integration testing across multiple components
- [ ] End-to-end testing with Cypress / Playwright

---

## 15. Error Handling & Resilience

- [ ] Error Boundaries — placement strategy, not just syntax
- [ ] Handling async/promise errors (outside the render tree)
- [ ] Designing fallback UI that doesn't just say "Something went wrong"
- [ ] Error logging/reporting integration (Sentry or equivalent)

---

## 16. Accessibility (a11y) at Production Level

- [ ] Semantic HTML as the accessibility foundation
- [ ] ARIA attributes — only where semantics fall short
- [ ] Keyboard navigation support across custom components
- [ ] Focus management (modals, route changes, dynamic content)
- [ ] Screen reader testing (not just assuming it works)
- [ ] Color contrast as part of component design, not an afterthought

---

## 17. Security

- [ ] XSS prevention in a React context
- [ ] Why `dangerouslySetInnerHTML` is dangerous and how to avoid/sanitize it
- [ ] Keeping environment variables and secrets out of the client bundle
- [ ] Auth token handling (JWT storage trade-offs, HttpOnly cookies vs localStorage)

---

## 18. React 19 & Modern Features

- [ ] Actions & form Actions
- [ ] `useActionState`
- [ ] `useOptimistic`
- [ ] The `use()` API
- [ ] React Server Components — the concept, even if you're not using them yet
- [ ] Document Metadata support
- [ ] Asset loading improvements

---

## 19. SSR & Meta-Frameworks

- [ ] SSR vs CSR vs SSG — when each is the right call
- [ ] Next.js App Router fundamentals
- [ ] Server Components & Server Actions in Next.js
- [ ] Static Site Generation (SSG) & Incremental Static Regeneration (ISR)
- [ ] Remix as an alternative framework (conceptual overview)

*(For a full Next.js-specific deep dive, see [`NextJS/`](../NextJS).)*

---

## 20. Production Architecture

- [ ] Feature-based folder structure (vs type-based)
- [ ] Barrel exports — benefits and the bundle-size trap
- [ ] Absolute imports / path aliases
- [ ] Environment variable & configuration management across environments
- [ ] Structuring a codebase to scale past a handful of contributors

---

## 21. Build Tools & Tooling

- [ ] Vite configuration beyond the defaults
- [ ] Webpack basics (for legacy project familiarity)
- [ ] ESLint & Prettier setup for a team
- [ ] Monorepo basics (Turborepo/Nx) — optional but increasingly common

---

## 22. Deployment & DevOps

- [ ] Deploying to Vercel / Netlify
- [ ] CI/CD pipeline basics (GitHub Actions)
- [ ] Environment-based configuration (dev/staging/prod)
- [ ] Containerizing a React app with Docker (optional)

---

## 23. Debugging & Developer Tools

- [ ] React DevTools — Components & Profiler tabs
- [ ] Diagnosing performance regressions with the Profiler
- [ ] Debugging unexpected re-renders systematically
- [ ] Memory leak detection in a running app

---

## 24. Best Practices & Code Quality

- [ ] Keep components small and single-purpose
- [ ] Composition over inheritance, consistently
- [ ] Avoid prop drilling (Context/composition/state libs, chosen deliberately)
- [ ] Lift state to the correct level — no higher, no lower
- [ ] Write effects with clear, minimal dependencies
- [ ] Stable, meaningful `key` props — never array index for dynamic lists
- [ ] Build genuinely reusable components (not just "used twice")
- [ ] Consistent naming conventions across the codebase
- [ ] Type-safe components end to end with TypeScript
- [ ] A personal code review checklist you actually apply to your own PRs

---

## 25. Ecosystem & Beyond React

- [ ] React Native — enough to know what transfers and what doesn't
- [ ] Micro-frontends — the concept and when it's justified
- [ ] GraphQL with React (Apollo Client)
- [ ] WebSockets for real-time features
- [ ] Progressive Web Apps (PWA) with React

---

## 🎯 Production-Ready Completion Checklist

Before calling yourself **production-ready**, make sure you can confidently:

- [ ] Design scalable component and folder architecture for a real codebase
- [ ] Explain *why* a component re-rendered and fix it
- [ ] Choose the right state tool (local / Context / global lib / server state) for a given problem, not by habit
- [ ] Build accessible, responsive UI without being told to
- [ ] Handle forms, validation, and async workflows without a tutorial open
- [ ] Write tests that would actually catch a regression
- [ ] Debug a production issue using DevTools and logs, not guesswork
- [ ] Justify every architectural decision in a technical interview

---

## 💡 Interview Questions & Answers

Full Q&A (Virtual DOM, props vs state, HOCs, lifecycle, Redux architecture, performance tips) has its own file for quick access before an interview:

**[👉 React/interview-qa.md](./interview-qa.md)**
