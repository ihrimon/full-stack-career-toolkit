# 01. Rendering Model & Internals — Deep Dive

[⬅ Back to React Roadmap](../README.md)

> The checklist version of this topic lives in [`React/README.md § Phase 01`](../README.md#phase-01---rendering-model--internals). This file exists because "know the render phase and commit phase" is a checkbox you can tick without ever having debugged a real re-render bug — this is the version with the bugs, the fixes, and the *why*.

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

**Think of it like planning a trip vs actually going on the trip.**

- **Render Phase = Planning.** React is just "thinking" — figuring out what the UI *should* look like. Nothing has happened in the real world yet, so React is free to change its mind, scrap the plan, and start over.
- **Commit Phase = Actually traveling.** The plan is final. React applies it to the real webpage (the DOM). This always finishes — it can't be silently thrown away.

| Phase | What React is doing | Can it be thrown away and redone? | Side effects allowed? |
|---|---|---|---|
| **Render** | Calls your component function to decide what the UI should look like | ✅ Yes, freely | ❌ No — just decide, don't *do* |
| **Commit** | Actually changes the real DOM so you can see it, then runs `useEffect` | ❌ No — always completes | ✅ Yes — this is where "doing" belongs |

**The one rule that matters:** don't do "real world" things (talk to `localStorage`, call an API, start a timer, change `document.title`) directly inside your component function — put them in `useEffect` instead. Here's why, with a simple example:

```jsx
// ❌ Bad — saving to localStorage directly during render
function Greeting({ name }) {
  localStorage.setItem('lastVisitor', name); // runs every time React "thinks", even wasted thinks

  return <h1>Hello, {name}!</h1>;
}
```

**Why this breaks:** React might call `Greeting("Alice")` while "thinking," then decide to throw that away and re-render with `"Bob"` instead. But `localStorage` was already updated to `"Alice"` — even though the user never actually saw "Alice" on screen. You end up with wrong or extra writes that don't match what's really on the page.

```jsx
// ✅ Good — saving to localStorage after the render is actually shown
function Greeting({ name }) {
  useEffect(() => {
    localStorage.setItem('lastVisitor', name); // only runs once this render is real / on screen
  }, [name]);

  return <h1>Hello, {name}!</h1>;
}
```

Now `localStorage` only updates when `Greeting` is actually shown to the user, not for "wasted thinking" React did along the way.

> **Quick mental checklist:** ask "does this line touch something *outside* this component?" (storage, network, timers, subscriptions) → put it in `useEffect`. Just calculating what to show from `props`/`state`? → that's fine to leave directly in the component body, that's what render is for.

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

**The bug, in plain terms:** picture 3 numbered chairs — Chair #1, #2, #3 — each with a notebook tied to the *chair*, not to the person sitting in it.

- Chair #1: Rahim sits here, notebook says "buy milk"
- Chair #2: Karim sits here, notebook says "buy rice"
- Chair #3: Jamal sits here, notebook says "buy eggs"

Rahim leaves (deleted). Everyone shifts up one seat: Karim moves to Chair #1, Jamal moves to Chair #2. But the notebooks are tied to the *chairs*, not the people — so Chair #1's notebook still says "buy milk" (Rahim's old note), even though Karim is sitting there now. Karim is now looking at a note that isn't his.

That's exactly what `key={index}` does: React matches by **position** ("chair number"), not by **identity** ("which todo this actually is"). So when the first todo is deleted, everything shifts up, but each row's local `draft` state (the notebook) stays glued to its position instead of following its todo — the input the user sees now shows stale text that belongs to a different item.

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

This is exactly the "Context splitting" checklist item in [§ Phase 04 Context API at Scale](../README.md#phase-04---context-api-at-scale) — it exists because of this specific re-render mechanic.

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

---

💡**[Interview Q&A for this topic →](./interview-qa.md)**