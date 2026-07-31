# 01. Rendering Model & Internals — Deep Dive

[⬅ Back to React Roadmap](../../README.md)

> The checklist version of this topic lives in [`React/README.md § 01`](../../README.md#01-rendering-model--internals). This file exists because "know the render phase and commit phase" is a checkbox you can tick without ever having debugged a real re-render bug — this is the version with the bugs, the fixes, and the *why*.

---

## 📑 In This Deep Dive

- [React Fiber — why it replaced the old reconciler](#-react-fiber--why-it-replaced-the-old-reconciler)
- [Render Phase vs Commit Phase](#-render-phase-vs-commit-phase)
- [Reconciliation & Keys](#-reconciliation--keys)
- [Why & When Components Re-render](#-why--when-components-re-render)
- [State Batching (React 18 Automatic Batching)](#-state-batching-react-18-automatic-batching)
- [Concurrent Rendering & the Scheduler](#-concurrent-rendering--the-scheduler)
- [StrictMode — What It Actually Double-Invokes](#-strictmode--what-it-actually-double-invokes)

---

## ⚛️ React Fiber — why it replaced the old reconciler

Before React 16, rendering used a **stack reconciler**: once React started rendering a tree, it walked the whole thing synchronously, top to bottom, and couldn't stop halfway. For a big tree, that meant one long, uninterruptible block of work on the main thread — while it ran, the browser couldn't respond to a keystroke, a scroll, or an animation frame. The app would visibly "hitch."

**Fiber** re-implemented the reconciler around a unit of work called a *fiber* — one per component instance — organized as a linked-list-like tree that React can walk incrementally, pause, resume, reprioritize, or throw away entirely. This is *the* prerequisite for everything else in this document: batching, concurrent rendering, `useTransition`, and `Suspense` are all only possible because Fiber can pause and resume work.

**Real-world symptom you'd see without this:** typing into a search box that also re-renders a 5,000-row filtered table on every keystroke — pre-Fiber-era architecture, this blocks the main thread long enough that keystrokes visibly lag behind the input. This is the exact problem [`useTransition`](#-concurrent-rendering--the-scheduler) below is designed to solve.

> **Interview framing:** "Fiber" is not a feature you use directly — it's the internal data structure/algorithm that makes concurrent features possible. If asked "what is Fiber," the correct answer is architectural, not "a hook" or "an API."

---

## 🧱 Render Phase vs Commit Phase

React's work on every update happens in two distinct phases:

| Phase | What happens | Can it be paused/thrown away? | Should it have side effects? |
|---|---|---|---|
| **Render** | Calls your component functions, builds the new Fiber tree, runs the diff against the previous tree | ✅ Yes — React may start, abandon, and restart this work | ❌ No — must be a pure calculation |
| **Commit** | Applies the diffed changes to the real DOM, runs `useLayoutEffect`, then (async) runs `useEffect` | ❌ No — this part is synchronous and always completes | ✅ Yes — this is where side effects belong |

**Why "render must be pure" is not a style preference — it's a correctness requirement:**

```jsx
// ❌ Side effect during render — breaks under Fiber
function OrderSummary({ items }) {
  // This runs on EVERY render attempt, including ones React
  // decides to throw away and redo (common in Concurrent Mode).
  analytics.track('order_summary_viewed'); // fires extra times, or fires for a render that never commits

  const total = items.reduce((sum, i) => sum + i.price, 0);
  return <p>Total: ${total}</p>;
}
```

```jsx
// ✅ Side effect moved to the commit phase, where it belongs
function OrderSummary({ items }) {
  const total = items.reduce((sum, i) => sum + i.price, 0);

  useEffect(() => {
    analytics.track('order_summary_viewed'); // only fires after a render actually commits
  }, [items]);

  return <p>Total: ${total}</p>;
}
```

Because the render phase can be started and abandoned by React (especially under concurrent features), any side effect placed directly in a component body can run more times than you think, or run for UI that the user never actually saw. `useLayoutEffect`/`useEffect` are guaranteed to run only after a render has actually committed.

---

## 🔑 Reconciliation & Keys

Reconciliation is the diffing step of the render phase: React compares the new element tree to the previous one and decides the minimal set of DOM operations needed. Two rules drive it:

1. **Same element type, same position** → React updates the existing instance in place (state is preserved).
2. **Different element type at that position** → React tears down the old subtree (including its state) and mounts a new one.

**Keys are how React tells same-position elements in a list apart.** This is the single most common source of "the wrong row's input has the wrong value" bugs in production React code.

```jsx
// ❌ Using array index as key
function TodoList({ todos, onRemove }) {
  return todos.map((todo, index) => (
    <TodoRow key={index} todo={todo} onRemove={() => onRemove(index)} />
  ));
}

function TodoRow({ todo, onRemove }) {
  const [draft, setDraft] = useState(todo.text); // local, uncontrolled-ish state per row
  return (
    <div>
      <input value={draft} onChange={(e) => setDraft(e.target.value)} />
      <button onClick={onRemove}>Delete</button>
    </div>
  );
}
```

**The bug:** delete the *first* todo. React sees "same key (`0`), same position" for what is now the *second* todo shifted up — so it reuses the existing `TodoRow` instance and its `draft` state instead of unmounting it. The row the user is looking at now shows the wrong text, because the DOM node was reused for different underlying data.

```jsx
// ✅ Using a stable, unique identifier as key
function TodoList({ todos, onRemove }) {
  return todos.map((todo) => (
    <TodoRow key={todo.id} todo={todo} onRemove={() => onRemove(todo.id)} />
  ));
}
```

Now each `TodoRow` instance is permanently tied to its `todo.id` — deleting an item unmounts exactly that row's instance (and its state) instead of shuffling state between rows.

> **Rule of thumb:** array index as key is only safe for lists that are static, never reordered, and never filtered/inserted/removed in the middle.

---

## 🔁 Why & When Components Re-render

A component re-renders when any of these happen:

1. **Its own state changes** (`useState`/`useReducer` setter called).
2. **Its parent re-renders** — by default, *every* child re-renders when its parent does, regardless of whether the child's own props changed.
3. **A context value it consumes changes** — *every* consumer of that context re-renders, even ones only using a small slice of the value.

**Real-world example — the "one Context, everything re-renders" trap:**

```jsx
// ❌ One context object holding unrelated, independently-changing values
const AppContext = createContext();

function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');

  // New object identity on every render of AppProvider —
  // every consumer re-renders even if only `theme` changed and they only read `user`.
  const value = { user, setUser, theme, setTheme };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
```

A `<ThemeToggleButton>` that only reads `theme` re-renders every time `user` changes, and a `<UserAvatar>` that only reads `user` re-renders every time `theme` changes — because both are subscribed to the *same* context value object, and that object gets a new identity on every `AppProvider` render.

```jsx
// ✅ Split into independent contexts so consumers only re-render for what they actually use
const UserContext = createContext();
const ThemeContext = createContext();

function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}
```

This is exactly the "Context splitting" checklist item in [§ 04 Context API at Scale](../../README.md#04-context-api-at-scale) — it exists because of this specific re-render mechanic.

---

## 📦 State Batching (React 18 Automatic Batching)

**Batching** means React groups multiple `setState` calls that happen in the same tick into a single re-render, instead of re-rendering once per call.

- **Before React 18:** batching only happened inside React's own event handlers (`onClick`, `onChange`, etc.). Anything inside a `setTimeout`, a native `addEventListener` callback, or a Promise `.then()` was **not** batched — each `setState` triggered its own separate render.
- **React 18+:** batching is automatic *everywhere*, including timeouts, promises, and native event handlers.

```jsx
function handleClick() {
  fetchUser().then(() => {
    setLoading(false); // React < 18: render #1 here
    setUser(data);      // React < 18: render #2 here
    // React 18+: both updates are batched into a single render
  });
}
```

**Escape hatch:** if you genuinely need a synchronous, immediate render *before* the next line of code runs (rare — e.g. reading layout right after a state change), `flushSync` from `react-dom` opts a specific update out of batching. Reach for it only when you've hit a real, provable problem — not by default.

---

## ⏱️ Concurrent Rendering & the Scheduler

Concurrent rendering lets React work on a render **without blocking the main thread from handling more urgent work** (typing, clicking, scrolling) — by using Fiber's ability to pause and resume, React's internal Scheduler can interrupt a low-priority render, handle the urgent update first, and come back to finish the low-priority one (or throw it away and redo it with fresher data).

**Real-world example — keeping a search input responsive while filtering a huge list:**

```jsx
// ❌ Every keystroke re-renders the (expensive) full filtered list
// at the SAME priority as the input update itself.
function SearchableList({ items }) {
  const [query, setQuery] = useState('');
  const filtered = items.filter((i) => i.name.includes(query)); // expensive for 10k+ items

  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <ExpensiveList items={filtered} />
    </>
  );
}
```

```jsx
// ✅ Mark the expensive list update as a low-priority transition
function SearchableList({ items }) {
  const [query, setQuery] = useState('');       // urgent: must reflect keystrokes instantly
  const [filtered, setFiltered] = useState(items); // deferred: allowed to lag a frame behind
  const [isPending, startTransition] = useTransition();

  function handleChange(e) {
    setQuery(e.target.value); // updates the input immediately — never blocked
    startTransition(() => {
      setFiltered(items.filter((i) => i.name.includes(e.target.value)));
    });
  }

  return (
    <>
      <input value={query} onChange={handleChange} />
      {isPending && <Spinner />}
      <ExpensiveList items={filtered} />
    </>
  );
}
```

The input update is marked urgent by default; the list re-filter is explicitly marked as a **transition** — React renders it at lower priority and will interrupt it if the user types again before it finishes. The typing stays smooth even while a large list re-renders behind it.

---

## 🧪 StrictMode — What It Actually Double-Invokes

In development only, `<StrictMode>` intentionally renders things **twice** to surface bugs that would otherwise stay hidden until production traffic hit them. It double-invokes:

- Component function bodies (the render phase)
- `useState` / `useReducer` initializer functions (when passed as a function)
- Effect setup **and** cleanup functions — React mounts, runs your effect, tears it down, then mounts and runs it again, simulating what concurrent rendering can legitimately do to a component

It does **not** double-invoke: event handlers, or the commit-phase DOM mutation itself.

**Real-world bug this is designed to catch — a subscription with no cleanup:**

```jsx
// ❌ Looks fine in a single mount, breaks the moment StrictMode (or a real remount) happens
useEffect(() => {
  const socket = connectToChatRoom(roomId);
  socket.on('message', handleMessage);
  // no return statement — nothing ever disconnects this socket
}, [roomId]);
```

Under StrictMode's double-invoke, this opens **two** socket connections that both call `handleMessage`, and the bug becomes visible immediately in development — duplicate messages — instead of surfacing weeks later in production as an unexplained memory/connection leak when the same component happens to remount (a route change, a `key` change, a parent re-mount) for the first time in the real world.

```jsx
// ✅ Cleanup makes the double-invoke a no-op
useEffect(() => {
  const socket = connectToChatRoom(roomId);
  socket.on('message', handleMessage);

  return () => socket.disconnect(); // StrictMode: connect → disconnect → connect (clean)
}, [roomId]);
```

> **Takeaway:** if StrictMode's double-invoke breaks your component, the bug was already there — StrictMode just moved its discovery from "random production incident" to "immediately, in dev, with a clear repro."
