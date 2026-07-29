# ⚛️ React — Interview Questions & Answers

[⬅ Back to React Roadmap](./README.md)

> Quick-fire Q&A for last-minute review — paired with the full checklist in [`README.md`](./README.md).

<details>
<summary><b>What is React?</b></summary>

React is an open-source front-end JavaScript library for building user interfaces based on components. It handles the view layer in web and mobile applications. ReactJS is used to build reusable components for the view layer in an MVC-style architecture, and it's the go-to choice for Single Page Applications (SPAs) thanks to its component-based architecture, efficient re-rendering via the Virtual DOM, and ability to manage dynamic content without full page reloads. It's written in JSX.

</details>

<details>
<summary><b>What are the major features of React?</b></summary>

- **Component-Based Architecture** — UI built from reusable, isolated components.
- **Virtual DOM** — an in-memory representation used to minimize direct DOM manipulation.
- **JSX** — JavaScript + XML-like syntax for describing UI.
- **Unidirectional Data Flow** — data flows parent → child, making state predictable.
- **Hooks** — let function components manage state and side effects.
- **Context API** — pass data through the component tree without prop drilling.
- **Error Boundaries** — catch rendering errors in a subtree.
- **Server-Side Rendering (SSR)** — render HTML on the server for performance/SEO.
- **Concurrent Mode / React Server Components**
- **Suspense** — lets components "wait" for something before rendering (code-splitting, data fetching).
- **React Router** — client-side routing for SPAs.

</details>

<details>
<summary><b>Explain the building blocks of React.</b></summary>

1. **Components** — reusable blocks of code that return UI.
2. **JSX** — lets you write HTML-like syntax in JavaScript.
3. **Props & State** — props are like function parameters; state is like local variables.
4. **Context** — passes data through the component tree without explicit prop drilling.
5. **Virtual DOM** — a lightweight copy of the real DOM that makes updates cheap.

</details>

<details>
<summary><b>What is state in React?</b></summary>

State is an object that holds information that may change over a component's lifetime. Whenever the state object changes, the component re-renders. State is mutable — it's updated via a setter function (e.g. `useState`'s setter), never mutated directly.

</details>

<details>
<summary><b>What are props in React?</b></summary>

Props are inputs to a component — single values or objects passed down from a parent to a child, similar to HTML tag attributes. They are read-only from the receiving component's perspective.

</details>

<details>
<summary><b>Props vs State — what's the difference?</b></summary>

| Props | State |
|---|---|
| Passed from one component to another (parent → child) | Managed within the component itself |
| Immutable (cannot be modified by the receiver) | Mutable (updated via setter) |
| Read-only | Read and write |

</details>

<details>
<summary><b>What is the Virtual DOM?</b></summary>

The Virtual DOM (VDOM) is a lightweight, in-memory representation of the real DOM, used by libraries like React to optimize UI rendering. A UI representation is kept in memory and synced with the "real" DOM only where needed.

</details>

<details>
<summary><b>How does the Virtual DOM work?</b></summary>

1. Initial render
2. State or props change
3. Diffing algorithm compares old vs new Virtual DOM
4. Reconciliation determines the minimal set of real DOM changes
5. Efficient DOM updates are applied

</details>

<details>
<summary><b>How do browsers read JSX?</b></summary>

Browsers can't read JSX directly — they only understand plain JavaScript. A transpiler (typically **Babel**) converts JSX into regular `React.createElement()` calls before the code ever reaches the browser.

</details>

<details>
<summary><b>What are controlled components?</b></summary>

A controlled component is one where React's state is the single source of truth for a form element's value (`<input>`, `<textarea>`, `<select>`). The component doesn't manage its own internal DOM state — every keystroke updates React state, which re-renders the input's value.

</details>

<details>
<summary><b>What are uncontrolled components?</b></summary>

Uncontrolled components manage their own state internally via the DOM rather than through React state. You read their current value on demand using a `ref`, which is closer to traditional HTML form behavior.

</details>

<details>
<summary><b>What is "lifting state up" in React?</b></summary>

When multiple components need to share the same changing data, the shared state is moved up to their closest common ancestor, which then passes it down as props. This avoids duplicating/desyncing state across sibling components.

</details>

<details>
<summary><b>What are Higher-Order Components (HOCs)?</b></summary>

A HOC is a function that takes a component and returns a new, enhanced component with additional props, behavior, or data — a design pattern for reusing logic across multiple components without modifying their internals.

</details>

<details>
<summary><b>What is the <code>children</code> prop?</b></summary>

`children` is a special prop React uses to pass elements between a component's opening and closing tags. It's commonly used for layout and wrapper components.

</details>

<details>
<summary><b>What is React Router?</b></summary>

React Router is a routing library built on top of React that lets you define different views/routes for a single-page application while keeping the URL in sync with what's displayed on the page.

</details>

<details>
<summary><b>Explain the lifecycle stages of a component.</b></summary>

1. **Initialization** — the component is constructed with given props and default state.
2. **Mounting** — the JSX returned by render is inserted into the DOM.
3. **Updating** — state/props change and the component re-renders.
4. **Unmounting** — the component is removed from the page.

</details>

<details>
<summary><b>What are some notable React 19 features?</b></summary>

`useOptimistic`, automatic memoization (React Compiler), first-class Web Components support, and Actions & form hooks (`useFormStatus`, `useFormState`/`useActionState`).

</details>

---

## ⚡ Performance & Optimization Notes

- **`React.memo`** — skip re-rendering a component when its props haven't changed.
- **`useCallback` / `useMemo`** — memoize functions and expensive calculations respectively.
- **Lazy loading & code splitting** — load large components/routes on demand instead of upfront.
- **Virtualization** (`react-window` / `react-virtualized`) — render only the visible rows of a large list.
- **Keep state minimal** — derive values instead of storing them redundantly in state.
- **Correct `key` props** — always use a stable, unique key when rendering lists.
- **Bundle size** — tree-shake and use specific imports (e.g. `lodash/debounce` ✅ instead of the whole `lodash` package ❌).
- **Image optimization** — lazy loading + responsive sizes.
- **Avoid unnecessary re-renders** — only update state/props when they actually need to change.
- **React 19+ Compiler** — leans on automatic memoization instead of manual `memo`/`useCallback` in many cases.

**Why lazy loading helps:** it reduces initial load time (skips loading components/images not needed yet), improves perceived performance, keeps the initial bundle smaller (via code splitting), and reduces memory usage since unused code loads later, if at all.

**Debounce vs Throttle:**
- **Debounce** — runs the function once, only *after* the event has stopped firing for a given delay.
- **Throttle** — runs the function at most once per fixed interval, no matter how many times the event fires (useful for `scroll`, `resize`, `mousemove`).

**`useRef`:** a Hook that holds a mutable value without causing a re-render when it changes — also used to hold a direct reference to a DOM element.

**Reconciliation, in short:** React generates a new Virtual DOM on state/props change → runs a diffing algorithm against the previous Virtual DOM → applies only the minimal necessary updates to the real DOM → avoids full-page re-renders, keeping things fast.

**`useEffect` / side effects:** `useEffect` manages logic that falls outside of pure rendering — API calls, DOM manipulation, event listener setup/teardown, timers, logging, `localStorage` writes. The effect runs after mount (and after updates, depending on the dependency array) and can return a cleanup function that runs on unmount.

**React Suspense:** handles asynchronous operations (lazy-loaded components, data fetching, code splitting) by showing a `fallback` UI until the awaited resource is ready — effectively a declarative "loading boundary".

## 🗃️ Redux Architecture Notes

| Concept | Role |
|---|---|
| **Store** | Holds the entire application state |
| **Action** | A plain object describing a state-change request (`type` + `payload`) |
| **Reducer** | A pure function containing the state-update logic |
| **Dispatch** | Triggers an action |
| **Selector / `useSelector`** | Reads state into a component |

**Why Redux Toolkit exists:** to simplify Redux usage, reduce boilerplate, make immutable updates easier (via Immer under the hood), simplify async logic (via `createAsyncThunk`), and provide a better developer experience with built-in DevTools integration.
