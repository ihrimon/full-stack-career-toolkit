# 02. Hooks — Beyond the Basics — Deep Dive

[⬅ Back to React Roadmap](../README.md)

> The checklist version of this topic lives in [`React/README.md § Phase 02`](../README.md#phase-02---hooks--beyond-the-basics). That checklist only checks whether you *know the names* — `useMemo`, `useEffect`, and so on. It doesn't check whether you've actually shipped a `useMemo` that made things *slower*, or a `useEffect` that fired twice and broke your state. This file covers that gap: real bugs, how to fix them, and why they happen.

---

## 📑 In This Deep Dive

- [`useReducer` for Complex Local State Logic](#-usereducer-for-complex-local-state-logic)
- [`useMemo` vs `useCallback` — When Each Actually Helps](#-usememo-vs-usecallback--when-each-actually-helps)
- [`useLayoutEffect` vs `useEffect` — Timing Differences That Matter](#-uselayouteffect-vs-useeffect--timing-differences-that-matter)
- [`useId` — Stable IDs for SSR-Safe Accessibility Wiring](#-useid--stable-ids-for-ssr-safe-accessibility-wiring)
- [`useTransition` & `useDeferredValue` — Concurrent UI Without Blocking Input](#-usetransition--usedeferredvalue--concurrent-ui-without-blocking-input)
- [`useSyncExternalStore` — Subscribing to External Stores Correctly](#-usesyncexternalstore--subscribing-to-external-stores-correctly)
- [Rules of Hooks — the *Why*, Not Just the *What*](#-rules-of-hooks--the-why-not-just-the-what)
- [Designing Custom Hooks](#-designing-custom-hooks)

---

## 🔀 `useReducer` for Complex Local State Logic

`useState` is fine while state changes are independent and simple. It starts to hurt once **one event needs to update several related pieces of state together**, in a way that depends on the *previous* state — that's the exact shape `useReducer` was built for.

```jsx
// ❌ Several useState calls that must all stay in sync, updated from many places
function Cart() {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'error'
  const [error, setError] = useState(null);

  async function checkout() {
    setStatus('loading');
    setError(null);
    try {
      await submitOrder(items);
      setStatus('idle');
      setItems([]); // easy to forget one of these three calls at a new call site
    } catch (e) {
      setStatus('error');
      setError(e.message);
    }
  }
  // ...
}
```

**The bug this invites:** nothing stops a future edit from calling `setStatus('loading')` without also resetting `error`, so a stale error message flashes on screen for a split second before the new request resolves. Every call site that touches this state has to remember the full set of fields that move together — there's no single place enforcing "these three things are one unit."

```jsx
// ✅ One reducer describes every valid transition in one place
function cartReducer(state, action) {
  switch (action.type) {
    case 'checkout/start':
      return { ...state, status: 'loading', error: null };
    case 'checkout/success':
      return { ...state, status: 'idle', items: [] };
    case 'checkout/error':
      return { ...state, status: 'error', error: action.error };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

function Cart() {
  const [state, dispatch] = useReducer(cartReducer, { items: [], status: 'idle', error: null });

  async function checkout() {
    dispatch({ type: 'checkout/start' });
    try {
      await submitOrder(state.items);
      dispatch({ type: 'checkout/success' });
    } catch (e) {
      dispatch({ type: 'checkout/error', error: e.message });
    }
  }
  // ...
}
```

Every valid state transition is named and lives in one function you can read top to bottom — `dispatch({ type: 'checkout/start' })` can never forget to clear `error`, because the reducer defines what "start" means once, not at every call site.

> **Rule of thumb:** reach for `useReducer` when you catch yourself calling more than one `setX` in the same handler *and* the values depend on each other. If the `setX` calls are truly independent (a tooltip's visibility has nothing to do with a filter's text), separate `useState` calls are simpler and fine.

---

## 🧮 `useMemo` vs `useCallback` — When Each Actually Helps

Both exist to skip work that would otherwise re-run on every render — `useMemo` caches a **value**, `useCallback` caches a **function reference**. Neither one is free: they cost a comparison and a cache slot on every render. Used where they're not needed, they add complexity and can make things *slower*, not faster.

```jsx
// ❌ Memoizing a cheap computation — pure overhead, no measurable benefit
function UserBadge({ firstName, lastName }) {
  const fullName = useMemo(() => `${firstName} ${lastName}`, [firstName, lastName]);
  return <span>{fullName}</span>;
}
```

String concatenation is nanoseconds. `useMemo` here still allocates a dependency array, does a comparison, and holds a cache slot every render — for a computation that was never the bottleneck. This is the "noise" the Phase 02 checklist item is warning about.

**Where `useMemo` earns its keep — an actually expensive computation:**

```jsx
// ✅ Memoizing genuinely expensive work
function ProductList({ products, filters }) {
  const filtered = useMemo(
    () => products.filter((p) => matchesAllFilters(p, filters)), // O(n) over thousands of rows
    [products, filters]
  );
  return <List items={filtered} />;
}
```

**Where `useCallback` earns its keep — breaking a `React.memo` child's memoization:**

```jsx
// ❌ A new function identity every render defeats the child's React.memo
function Parent() {
  const [count, setCount] = useState(0);

  const handleSave = () => saveDraft(); // new function reference every render

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
      <ExpensiveMemoizedChild onSave={handleSave} /> {/* re-renders every time count changes */}
    </>
  );
}
```

`ExpensiveMemoizedChild` is wrapped in `React.memo`, so it should skip re-rendering when its own props haven't meaningfully changed. But `handleSave` is a *new function object* on every `Parent` render, so from `React.memo`'s shallow-equality check, `onSave` looks different every time — the memoization never actually kicks in, and `count` changing re-renders a child that has nothing to do with `count`.

```jsx
// ✅ Stable function identity — React.memo on the child can actually skip re-renders
function Parent() {
  const [count, setCount] = useState(0);

  const handleSave = useCallback(() => saveDraft(), []); // same reference across renders

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
      <ExpensiveMemoizedChild onSave={handleSave} /> {/* now correctly skips */}
    </>
  );
}
```

> **The actual rule:** `useCallback` is not "for functions" in general — it only matters when that function is a **dependency of another memoization** (a `React.memo` child's prop, or a `useEffect`/`useMemo` dependency array). `useMemo` only matters when the computation is **provably expensive** (measured — a big loop, a heavy transform, a large filter/sort) or when its *result identity* feeds another memoization. If neither condition holds, skip both — see [`React.memo` — correct usage and common misuse](../README.md#phase-06---performance-engineering) for the other half of this trade-off.

---

## ⏳ `useLayoutEffect` vs `useEffect` — Timing Differences That Matter

Both run *after* the DOM has been updated in the commit phase. The difference is **when**, relative to the browser painting the screen:

| | `useEffect` | `useLayoutEffect` |
|---|---|---|
| Runs | Asynchronously, **after** the browser has painted | Synchronously, **before** the browser paints |
| Blocks paint? | No | Yes |
| Use for | Data fetching, subscriptions, logging, anything not visual | Reading/writing layout (measuring DOM, positioning) before the user sees a flicker |
| Default choice | ✅ Almost always this one | Only when `useEffect` causes visible flicker |

**Real-world symptom that tells you which one you need — a tooltip that measures its own size to reposition itself:**

```jsx
// ❌ useEffect: the browser paints BEFORE the effect runs, so the wrong position is visible first
function Tooltip({ targetRef, children }) {
  const tooltipRef = useRef(null);
  const [style, setStyle] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const { width } = tooltipRef.current.getBoundingClientRect();
    setStyle({ top: 0, left: -width / 2 }); // corrected position, but one frame too late
  }, []);

  return <div ref={tooltipRef} style={style}>{children}</div>;
}
```

**Why this is visibly broken:** the tooltip first paints at `{ top: 0, left: 0 }` (default), *then* the effect measures it and corrects the position, triggering a second render and a second paint. The user sees a one-frame flash of the tooltip in the wrong spot before it snaps to the correct one — small, but real, and it gets worse on a slow device.

```jsx
// ✅ useLayoutEffect: measurement + correction happen BEFORE the browser paints anything
function Tooltip({ targetRef, children }) {
  const tooltipRef = useRef(null);
  const [style, setStyle] = useState({ top: 0, left: 0 });

  useLayoutEffect(() => {
    const { width } = tooltipRef.current.getBoundingClientRect();
    setStyle({ top: 0, left: -width / 2 }); // resolved before the user ever sees a frame
  }, []);

  return <div ref={tooltipRef} style={style}>{children}</div>;
}
```

Now the correction happens synchronously before paint — the browser shows only the final, correct position. No flash.

> **Interview framing:** the answer is never "always use `useLayoutEffect`, it's safer" — it blocks the browser from painting, so using it by default adds latency to *every* update for a problem (visual flicker) that most effects don't have. Default to `useEffect`; reach for `useLayoutEffect` only when you can point at the specific flicker it fixes.

---

## 🆔 `useId` — Stable IDs for SSR-Safe Accessibility Wiring

Form accessibility (`<label htmlFor>`, `aria-describedby`, etc.) needs a unique `id` linking two elements. The naive approach — generating a random ID at render time — breaks under server-side rendering.

```jsx
// ❌ Math.random() (or a module-level counter) produces a DIFFERENT id on the server vs the client
function EmailField() {
  const id = `email-${Math.random()}`; // e.g. "email-0.234..." on the server, "email-0.871..." on the client

  return (
    <>
      <label htmlFor={id}>Email</label>
      <input id={id} type="email" />
    </>
  );
}
```

**Why this breaks:** the server renders HTML with one random `id`, sends it to the browser, and then React hydrates on the client — re-running the component and generating a *different* random `id`. React detects the server-rendered `id` attribute doesn't match what the client just computed and throws a **hydration mismatch** warning/error, and in the worst case the `label`/`input` association is silently broken for screen reader users because the IDs never actually matched in the shipped HTML.

```jsx
// ✅ useId generates an id that's guaranteed identical between server render and client hydration
function EmailField() {
  const id = useId(); // e.g. ":r1:" — same value on server and client for the same component in the tree

  return (
    <>
      <label htmlFor={id}>Email</label>
      <input id={id} type="email" />
    </>
  );
}
```

`useId` derives the ID from the component's **position in the tree**, not randomness or a mutable counter — so server and client always compute the same value for the same component instance, and hydration never mismatches.

> **Common mistake:** using `useId` as a `key` in a list, or expecting it to be a good "unique visual ID" for anything other than accessibility attribute wiring. It's deliberately *not* meant for that — see [Stable, meaningful `key` props](../README.md#phase-24---best-practices--code-quality) for what `key` actually needs.

---

## 🚦 `useTransition` & `useDeferredValue` — Concurrent UI Without Blocking Input

Both let you tell React "this update can wait" so an urgent update (typing, clicking) isn't blocked behind an expensive one — the difference is **what you're marking as low-priority**.

| | `useTransition` | `useDeferredValue` |
|---|---|---|
| What you mark | A **state update** (`setX` call) as low priority | An **existing value** as allowed to lag behind |
| You need | Control over the `setX` call site | Just a value (often a prop you don't own the setter for) |
| Gives you | An `isPending` flag | A "stale" version of the value to render meanwhile |

**`useTransition`** — you own the state update:

```jsx
function SearchableList({ items }) {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState(items);
  const [isPending, startTransition] = useTransition();

  function handleChange(e) {
    setQuery(e.target.value); // urgent — reflects the keystroke instantly
    startTransition(() => {
      setFiltered(items.filter((i) => i.name.includes(e.target.value))); // low priority
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

**`useDeferredValue`** — you're only handed a value (e.g. a prop from a parent you don't control), so there's no `setX` call site to wrap:

```jsx
// ❌ Every keystroke immediately re-renders the expensive list at full priority
function SearchResults({ query }) {
  const results = useExpensiveSearch(query); // recomputes on every keystroke, blocks the input
  return <ExpensiveList items={results} />;
}
```

```jsx
// ✅ Let the expensive computation use a value that's allowed to lag one frame behind
function SearchResults({ query }) {
  const deferredQuery = useDeferredValue(query); // "stale" query, updates at low priority
  const results = useExpensiveSearch(deferredQuery);
  const isStale = query !== deferredQuery;

  return <ExpensiveList items={results} style={{ opacity: isStale ? 0.6 : 1 }} />;
}
```

`query` itself (used for the input's own display, if any) still updates instantly. `deferredQuery` — and everything computed from it — is allowed to render a frame or two behind, and React prioritizes finishing that catch-up over blocking new keystrokes.

> **Deciding between them:** if you're calling `setX` yourself, use `useTransition` — it gives you `isPending` for free. If you only received a *value* (a prop, a context value) and don't own how it's set, `useDeferredValue` is the only option that applies.

---

## 🔌 `useSyncExternalStore` — Subscribing to External Stores Correctly

Any state that lives **outside** React (a global store like Redux/Zustand internals, `window.matchMedia`, a WebSocket connection's latest message, browser APIs like `navigator.onLine`) can change at a time React doesn't know about. Subscribing to it with `useEffect` + `useState` looks reasonable but has a real bug under concurrent rendering: **tearing** — different parts of the UI briefly showing different values for the same external state during one render pass.

```jsx
// ❌ useEffect + useState — works most of the time, but can tear under concurrent rendering
function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    function handleChange() {
      setIsOnline(navigator.onLine);
    }
    window.addEventListener('online', handleChange);
    window.addEventListener('offline', handleChange);
    return () => {
      window.removeEventListener('online', handleChange);
      window.removeEventListener('offline', handleChange);
    };
  }, []);

  return isOnline;
}
```

**Why this can tear:** if `navigator.onLine` changes *while React is in the middle of a concurrent render* (rendering part of the tree, pausing, resuming), two components both calling `useOnlineStatus()` can end up reading the external value at two different points in time and disagree within the same commit — one shows "online," the other briefly shows "offline," for what should be a single consistent snapshot.

```jsx
// ✅ useSyncExternalStore — React guarantees a single consistent snapshot across the whole render
function subscribe(callback) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}

function getSnapshot() {
  return navigator.onLine;
}

function useOnlineStatus() {
  return useSyncExternalStore(subscribe, getSnapshot);
}
```

React itself now owns re-checking `getSnapshot()` at the right points during a render and forces every consumer in the same commit to agree on one value — this is the same primitive libraries like Redux and Zustand use internally to be concurrent-render-safe, which is why you rarely write this hook by hand except when wrapping a raw browser API or a store that doesn't already use it.

> **Interview framing:** the honest answer to "why not just `useEffect` + `useState`" is that it works fine for almost all apps, almost all the time — `useSyncExternalStore` exists for the specific, harder-to-reproduce case of tearing under concurrent rendering, which is exactly why state library authors adopted it rather than every app author writing it themselves.

---

## 📏 Rules of Hooks — the *Why*, Not Just the *What*

The two rules — **only call hooks at the top level** (never inside conditions, loops, or nested functions) and **only call hooks from React function components or other custom hooks** — aren't arbitrary style preferences. They exist because of *how* React tracks hook state.

React doesn't know your hooks by name — it tracks them by **call order**, per component instance, using an internal linked list. `useState` #1 always maps to the same internal state cell across renders *because it's always the first hook call*, not because React remembers "this was the `count` state."

```jsx
// ❌ A conditional hook call shifts every hook's position after it
function Profile({ userId, showBio }) {
  const [user, setUser] = useState(null);

  if (showBio) {
    const [bio, setBio] = useState(''); // only called on SOME renders
  }

  const [isEditing, setIsEditing] = useState(false); // position shifts depending on showBio!
  // ...
}
```

**The bug, concretely:** on a render where `showBio` is `true`, React's internal list is `[user, bio, isEditing]` — `isEditing` is hook slot #3. On a render where `showBio` is `false`, the list is `[user, isEditing]` — now `isEditing` is hook slot #2, but React still hands it whatever value is stored in slot #2, which was `bio`'s value from a previous render. State gets silently cross-wired between unrelated variables, with no error in production — React can only catch this in development, and only sometimes.

```jsx
// ✅ Every hook call happens unconditionally, every render, in the same order
function Profile({ userId, showBio }) {
  const [user, setUser] = useState(null);
  const [bio, setBio] = useState(''); // always called — just conditionally *used* below
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {showBio && <p>{bio}</p>}
      {/* ... */}
    </div>
  );
}
```

The hook *call* is unconditional; only the *rendered output* is conditional. Slot #2 is always `bio`, slot #3 is always `isEditing`, on every single render, regardless of props.

> **Interview framing:** "why can't hooks be called conditionally" should be answered with the mechanism (position-based tracking via call order), not just "because the linter says so." The ESLint rule (`eslint-plugin-react-hooks`) exists to catch this mechanically because the bug it prevents is silent and easy to miss in review.

---

## 🧩 Designing Custom Hooks

A custom hook is just a JavaScript function whose name starts with `use` and that calls other hooks — the value is in **extracting reusable stateful logic**, not markup. Three things separate a custom hook that's actually pleasant to use from one that becomes its own source of bugs:

**1. Name it for what it *does*, not what it *uses*.**

```js
// ❌ Named after its implementation detail
function useLocalStorageState() { /* ... */ }

// ✅ Named after its purpose — implementation (localStorage) can change later without a rename
function usePersistedSetting(key, defaultValue) { /* ... */ }
```

**2. Return shape should match how it's actually consumed — array for interchangeable pairs, object for named/optional fields.**

```js
// ✅ Array — mirrors useState's own convention, fine when there are exactly 2 tightly coupled values
function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = useCallback(() => setValue((v) => !v), []);
  return [value, toggle]; // caller can rename freely: const [isOpen, toggleOpen] = useToggle();
}
```

```js
// ✅ Object — better once there are 3+ values, or some are optional/rarely used
function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  // ...
  return { data, error, status }; // caller destructures only what they need, order doesn't matter
}
```

Returning an array with 3+ unrelated values forces every caller to remember positional order (`const [a, b, c] = useFetch(url)` — which one was the error again?) for no benefit; an object makes each field self-documenting at the call site.

**3. Encapsulate the cleanup, not just the setup — this is the most common bug in hand-rolled custom hooks.**

```js
// ❌ Subscribes but never unsubscribes — every consumer of this hook leaks
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener('resize', () => setWidth(window.innerWidth)); // runs on every render, never removed

  return width;
}
```

Called from a component, this adds a **new** `resize` listener on every single render (it's not even inside `useEffect`) and never removes any of them — every re-render leaks one more listener, and a component that mounts/unmounts repeatedly (e.g. inside a list, or a route users navigate to often) leaks progressively worse over the session.

```js
// ✅ Setup and cleanup both owned by the hook — every consumer gets it for free
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}
```

This is exactly why custom hooks are worth extracting in the first place: the consumer of `useWindowWidth()` never has to know a `resize` listener is involved, let alone remember to clean it up — get the hook right once, and every call site is correct by construction.

> **Rule of thumb:** if you're copy-pasting the same `useState` + `useEffect` pair into a third component, that's the signal to extract a custom hook — not before (premature extraction of logic used once just adds a layer of indirection with no reuse benefit yet).

---

💡**[Interview Q&A for this topic →](./interview-qa.md)**
