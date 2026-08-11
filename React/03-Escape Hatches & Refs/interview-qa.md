# 03. Escape Hatches & Refs — Interview Q&A

[⬅ Back to Deep Dive](./README.md) · [⬅ Back to React Roadmap](../README.md)

> Quick-fire Q&A for this topic — `useRef` beyond DOM access, direct DOM manipulation, `forwardRef`, and `useImperativeHandle`. Use the [deep dive](./README.md) for the full explanations and code examples this is distilled from.

---

**Q1. What does `useRef` actually give you, beyond "a way to grab a DOM node"?**

A mutable object (`{ current: ... }`) that keeps the same identity across every re-render of a component, and whose `.current` can be reassigned at any time without triggering a re-render. It's the general tool for values your own logic needs to read/write between renders but that never need to appear in the UI — timer IDs, previous-value tracking, mutable flags.

**Q2. Why does storing a value in a plain local variable (instead of `useRef`) break across renders?**

A local variable inside a component function is re-declared from scratch on every render — any value assigned to it during one render is gone by the next. `useRef` avoids this because the ref object itself persists across renders; only `.current`'s contents change.

**Q3. Why can putting a rarely-rendered value in `useState` be the wrong choice?**

Every `setState` call schedules a re-render, even if nothing the value affects is actually shown in the UI. If a value is only ever read by your own logic (e.g. a click counter used purely for logging), tracking it in `useRef` updates it instantly with zero wasted renders.

**Q4. When is direct DOM manipulation the right call instead of modeling something as state?**

When the outcome is a one-off imperative command that doesn't change what React would render either way — focusing an input, scrolling to a position, playing a video, measuring an element's size. Routing these through state (e.g. a `shouldFocus` flag reset in a `useEffect`) adds an extra render cycle for something the DOM already does synchronously in one call.

**Q5. Why doesn't `<CustomComponent ref={someRef} />` just work the way `<input ref={someRef} />` does?**

React reserves `ref` as a special, non-`props` value — it's stripped out before `props` reaches a function component's body, so there's no `props.ref` to manually forward. Without `forwardRef`, the ref is silently dropped and `someRef.current` stays `null`, with no error or warning.

**Q6. What does `forwardRef` actually do?**

It gives a component a second function parameter — `ref` — separate from `props`, that the component can attach to whichever underlying node or element it chooses (usually a DOM node it renders internally). The parent's ref then points at that real node instead of `null`.

**Q7. What problem does `useImperativeHandle` solve that plain `forwardRef` doesn't?**

Plain `forwardRef` hands the parent the *entire* raw DOM node — every native method and property, including ones that could bypass the component's own internal logic. `useImperativeHandle` replaces what the forwarded `ref` resolves to with a custom object exposing only specific methods (e.g. `play`/`pause`/`restart`), so the parent gets a deliberate, minimal API instead of unrestricted DOM access.

**Q8. When should you actually reach for `useImperativeHandle`, and when is it overkill?**

It earns its keep in reusable components — a design-system video player, a custom modal, a rich text editor wrapper — where you deliberately want to withhold some of the raw DOM API from callers. For most app-level components, exposing the DOM node directly via plain `forwardRef` is simpler and sufficient; add `useImperativeHandle` only once you've identified something specific you don't want the parent able to do.
