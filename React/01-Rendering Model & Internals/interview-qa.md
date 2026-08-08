# 01. Rendering Model & Internals — Interview Q&A

[⬅ Back to Deep Dive](./README.md) · [⬅ Back to React Roadmap](../README.md)

> Quick-fire Q&A for this topic — Fiber, render vs commit, reconciliation, re-renders, batching, concurrency, and StrictMode. Use the [deep dive](./README.md) for the full explanations and code examples this is distilled from.

---

**Q1. What is React Fiber, in one sentence?**
Fiber is React's internal reconciliation engine that breaks rendering work into small, interruptible units so React can pause, resume, reprioritize, or discard work instead of blocking the main thread with one long synchronous pass. It's not a hook or an API — it's architecture.

**Q2. Why did React need to replace the old stack reconciler?**
The stack reconciler rendered a tree synchronously, top to bottom, with no way to stop halfway. On a large tree this blocked the main thread long enough that the browser couldn't respond to input (typing, scrolling) until the whole render finished — causing visible "hitching." Fiber made rendering interruptible, which is the prerequisite for batching, concurrent rendering, and Suspense.

**Q3. What's the difference between the Render phase and the Commit phase?**
Render phase calls your component functions and figures out what the UI *should* look like — it's just a calculation, and React is free to start it, abandon it, and redo it. Commit phase applies the final result to the real DOM and runs effects — it's synchronous and always completes once started.

**Q4. Why must the render phase be pure (no side effects)?**
Because React may call your component function more than once for a single update, or start rendering and throw the result away without ever showing it (common with concurrent features). A side effect placed directly in the component body (an API call, a `localStorage.setItem`) can fire for a render the user never actually sees, or fire more times than intended. Side effects belong in `useEffect`, which only runs after a render has actually committed.

**Q5. What is reconciliation, and what two rules drive it?**
Reconciliation is the diffing step of the render phase — React compares the new element tree to the previous one to compute the minimal DOM update. Rule 1: same element type at the same position → update in place, state preserved. Rule 2: different element type at that position → unmount the old subtree (with its state) and mount a new one.

**Q6. Why is using an array index as a `key` dangerous for dynamic lists?**
Because `key` is how React tells same-position elements apart, and index is tied to *position*, not *identity*. If the list is reordered, filtered, or an item is removed from the middle, items shift position — React matches the new item at that position to the old fiber that used to be there and reuses its local state, even though it's now a different underlying item. The visible symptom: a list row's input shows stale text that belongs to a different item after a delete/reorder.

**Q7. When is index-as-key actually safe?**
Only for lists that are static — never reordered, filtered, inserted into, or removed from in the middle. If the list can change shape at all, use a stable, unique identifier from the data (e.g. `todo.id`) instead.

**Q8. Name three distinct triggers that cause a component to re-render.**
(1) Its own state changes via a `useState`/`useReducer` setter. (2) Its parent re-renders — by default every child re-renders when its parent does, regardless of whether the child's own props changed. (3) A context value it consumes changes — every consumer re-renders, even ones only reading a small slice of that value.

**Q9. Why does putting unrelated state in one Context object hurt performance, and how do you fix it?**
Because the Provider creates a new value object on every render, and *every* consumer of that context re-renders whenever *any* piece of that value changes — even a component that only reads `theme` will re-render when unrelated `user` state changes, because both subscribe to the same object identity. Fix: split into independent contexts (e.g. `UserContext` and `ThemeContext`) so each consumer only re-renders for the slice it actually reads.

**Q10. What is "batching," and how did React 18 change it?**
Batching means React groups multiple `setState` calls in the same tick into a single re-render instead of one render per call. Before React 18, this only happened inside React's own event handlers — a `setState` inside a `setTimeout`, a raw `addEventListener` callback, or a `.then()` triggered its own separate render each time. React 18 made batching automatic everywhere, including timeouts, promises, and native event listeners.

**Q11. When would you reach for `flushSync`, and why is it a "last resort"?**
`flushSync` forces a synchronous, immediate render for a specific update, opting it out of batching — useful when you need to read layout (e.g. scroll position, measured height) immediately after a state change, before the next line of code runs. It's a last resort because it reintroduces the exact blocking behavior batching exists to avoid; reach for it only after hitting a real, provable problem.

**Q12. What does `useTransition` actually do under the hood?**
It tells React's Scheduler that a given state update is low priority. React renders it at lower priority than urgent updates (like the keystroke that triggered it) and will interrupt or restart that low-priority render if a new urgent update comes in before it finishes — keeping input responsive while an expensive re-render (e.g. filtering a huge list) happens in the background. `isPending` reflects whether that deferred work is still in flight.

**Q13. What does `<StrictMode>` actually double-invoke, and what does it *not* double-invoke?**
In development only, it double-invokes: component function bodies (render phase), `useState`/`useReducer` initializer functions (when passed as a function), and effect setup + cleanup (mount → run → cleanup → mount → run). It does **not** double-invoke event handlers or the actual commit-phase DOM mutation.

**Q14. Why does StrictMode double-invoke effects specifically?**
To simulate what concurrent rendering can legitimately do to a real component (mount, unmount, remount) and surface bugs immediately in development instead of letting them surface later in production as a random incident. The classic catch: an effect that opens a subscription/connection with no cleanup function — under the double-invoke this visibly opens two connections (e.g. duplicate chat messages), whereas without StrictMode the same bug would only show up weeks later when the component happens to remount for real (a route change, a changed `key`, a parent remount).

**Q15. If StrictMode breaks your component, is StrictMode the problem?**
No — the bug was already there. StrictMode just moves its discovery from "unexplained production incident" to "immediate, reproducible, in development." The fix is always to make the component correct under remount (e.g. add the missing effect cleanup), never to avoid StrictMode.
