# 02. Hooks — Beyond the Basics — Interview Q&A

[⬅ Back to Deep Dive](./README.md) · [⬅ Back to React Roadmap](../README.md)

> Quick-fire Q&A for this topic — `useReducer`, `useMemo`/`useCallback`, effect timing, `useId`, concurrent input hooks, `useSyncExternalStore`, the Rules of Hooks, and custom hook design. Use the [deep dive](./README.md) for the full explanations and code examples this is distilled from.

---

**Q1. When should you reach for `useReducer` instead of multiple `useState` calls?**

When a single event needs to update several related pieces of state together, in a way that depends on the previous state — e.g. a checkout flow that must always update `status` and `error` in sync. `useReducer` puts every valid state transition in one function, so no call site can update one piece of the state without the others. If the pieces of state are truly independent, separate `useState` calls are simpler and preferred.

**Q2. What's the actual difference between what `useMemo` and `useCallback` cache?**

`useMemo` caches a computed **value**; `useCallback` caches a **function reference** (it's equivalent to `useMemo(() => fn, deps)`). Both re-run only when their dependencies change.

**Q3. Why can adding `useMemo` to a cheap computation make performance worse, not better?**

Because `useMemo` itself isn't free — it allocates a dependency array, does a comparison on every render, and holds a cache slot. If the wrapped computation (e.g. string concatenation) is cheaper than that overhead, you've added cost with no benefit. Reserve it for computations that are provably expensive (measured — large loops, heavy filters/sorts/transforms) or whose *result identity* feeds another memoization.

**Q4. When does `useCallback` actually change behavior, not just "maybe help performance"?**

When the function is a dependency of another memoization — most commonly, a prop passed to a `React.memo`-wrapped child. Without `useCallback`, the parent creates a new function reference every render, which defeats the child's shallow-prop-equality check and makes it re-render every time regardless of `React.memo`. `useCallback` gives the function a stable identity across renders so the memoization actually kicks in.

**Q5. What's the timing difference between `useEffect` and `useLayoutEffect`?**

Both run after the DOM is updated, but `useEffect` runs asynchronously *after* the browser has painted, while `useLayoutEffect` runs synchronously *before* the browser paints — it blocks paint until it finishes.

**Q6. Give a concrete example of a bug `useEffect` causes that `useLayoutEffect` fixes.**

A tooltip that measures its own rendered width to reposition itself. With `useEffect`, the browser paints the tooltip at its default (wrong) position first, then the effect measures and corrects it, causing a one-frame visible flash in the wrong spot. With `useLayoutEffect`, the measurement and correction happen before the browser paints anything, so the user only ever sees the final, correct position.

**Q7. Why shouldn't you default to `useLayoutEffect` everywhere "to be safe"?**

Because it blocks the browser from painting until it finishes, adding latency to every update. Most effects (data fetching, subscriptions, logging) have nothing to do with visual layout and gain nothing from blocking paint. Default to `useEffect`; use `useLayoutEffect` only when you can point to a specific visual flicker it fixes.

**Q8. What problem does `useId` solve, and why can't you just use `Math.random()` or a counter for the same purpose?**

`useId` generates IDs (for `label htmlFor` / `aria-describedby` pairs, etc.) that are guaranteed identical between the server-rendered HTML and the client's hydration render. `Math.random()` or a module-level counter produces a different value on the server vs. the client re-run during hydration, which React detects as a hydration mismatch — and in practice can leave the `label`/`input` association broken for screen reader users because the shipped IDs never actually matched.

**Q9. How does `useId` avoid that mismatch?**

It derives the ID from the component's position in the render tree rather than from randomness or mutable state, so the server and the client compute the exact same value for the same component instance every time.

**Q10. What's the difference between `useTransition` and `useDeferredValue`, and how do you choose?**

`useTransition` marks a **state update you own** (a `setX` call) as low priority and gives you an `isPending` flag. `useDeferredValue` marks an **existing value you don't own the setter for** (e.g. a prop) as allowed to lag behind. If you're calling `setX` yourself, use `useTransition`. If you only received a value, `useDeferredValue` is the only one that applies.

**Q11. What problem does `useSyncExternalStore` solve that `useEffect` + `useState` doesn't fully solve for subscribing to external state?**

Tearing: under concurrent rendering, React can pause and resume a render, and if the external value (e.g. `navigator.onLine`, a store outside React) changes mid-render, two components both reading it via `useEffect` + `useState` can end up reading it at different points in time and disagreeing within the same commit. `useSyncExternalStore` has React guarantee every consumer reads one consistent snapshot for the whole render, eliminating that tearing.

**Q12. Why do most app developers rarely write `useSyncExternalStore` by hand?**

Because state library authors (Redux, Zustand, etc.) already use it internally to make their stores concurrent-render-safe. You mainly reach for it directly when wrapping a raw browser API (like `navigator.onLine` or `matchMedia`) or a store that doesn't already use it.

**Q13. Why can't hooks be called conditionally, and what actually breaks if you do?**

React tracks hooks by **call order** per component instance, not by name — `useState` call #1 always maps to the same internal state slot because it's always called first, every render. If a hook call is wrapped in a condition, the number/order of hook calls can differ between renders, which shifts every subsequent hook to a different slot. Concretely: a component with a conditional `useState` call can end up reading one variable's stored value into a completely different variable on a later render, silently cross-wiring state — often without any error being thrown.

**Q14. How do you fix a component where a hook is conditionally needed?**

Call the hook unconditionally on every render, and make only the *usage* of its value conditional — e.g. always call `useState('')` for `bio`, but only render `{showBio && <p>{bio}</p>}`. The hook call must be unconditional even when the rendered output isn't.

**Q15. What are the three things that separate a well-designed custom hook from a buggy one?**

(1) Name it after what it *does*, not its implementation detail (`usePersistedSetting`, not `useLocalStorageState`), so the implementation can change without a rename. (2) Match the return shape to how it's consumed — an array (like `useState`) for exactly two tightly-coupled, interchangeable values; an object once there are three or more values, or some are optional, so callers destructure by name instead of memorizing position. (3) Encapsulate cleanup, not just setup — e.g. a `useWindowWidth` hook must add its `resize` listener inside `useEffect` and remove it in the cleanup function; otherwise every component that uses the hook leaks a listener on every render.

**Q16. When is it too early to extract a custom hook?**

When the `useState`/`useEffect` logic is only used in one place — extracting it then adds a layer of indirection with no reuse benefit yet. The signal to extract is when you're about to copy-paste the same stateful logic into a third component.
