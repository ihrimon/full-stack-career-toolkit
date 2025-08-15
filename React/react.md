1. What is React?
   React is an open-source front-end JavaScript library for building user interfaces based on components. It's used for handling the view layer in web and mobile
   applications
   ReactJS is a JavaScript library used to build reusable components for the view layer in the MVC architecture. It is used to build the Single Page Application (SPA) due to its component-based architecture, efficient re-rendering with the Virtual DOM, and ability to manage dynamic content without needing full page reloads. It is written in JSX.

2. What are the major features of React?
   Core Features:

   - Component-Based Architecture
   - Virtual DOM
   - JSX (JavaScript XML):
   - Unidirectional Data Flow: React follows a one-way data binding model where data flows from parent to child components. This makes the code more predictable and easier to debug.
   - React Hooks
   - Context API
   - Error Boundaries
   - Server-side Rendering
   - Concurrent Mode
   - React Server Components
   - Suspense: A feature that lets your components "wait" for something before rendering, supporting code-splitting and data fetching with cleaner code.
   -

3. What is state in React?
   State of a component is an object that holds some information that may change over the lifetime of the component. The important point is whenever the state object changes, the component re-renders. State is mutable, meaning it can be changed using the setter function (useState)

4. What are props in React?
   Props are inputs to components. They are single values or objects containing a set of values that are passed to components on creation similar to HTML-tag attributes. Here, the data is passed down from a parent component to a child component.

5. What is Virtual DOM?
   The Virtual DOM (VDOM) is a lightweight, in-memory representation of Real DOM used by libraries like React to optimize UI rendering. The representation of a UI is kept in memory and synced with the "real" DOM.

6. How Virtual DOM works?

   1. Initial Render
   2. State or Props Change
   3. Diffing Algorithm
   4. Reconciliation
   5. Efficient DOM Updates

7. What are controlled components?
   A controlled component is a React component that fully manages the form element's state(e.g, elements like <input>, <textarea>, or <select>)) using React's internal state mechanism. i.e, The component does not manage its own internal state — instead, React acts as the single source of truth for form data.

8. What are uncontrolled components?
   The Uncontrolled components are form elements (like <input>, <textarea>, or <select>) that manage their own state internally via the DOM, rather than through React state. You can query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.

9. What is Lifting State Up in React?
   When several components need to share the same changing data then it is recommended to lift the shared state up to their closest common ancestor. That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components.

10. What are Higher-Order Components?
    A higher-order component (HOC) is a function that takes a component and returns a new enhanced component with additional props, behavior, or data. It’s a design pattern based on React’s compositional nature, allowing you to reuse logic across multiple components without modifying their internals.

11. What is children prop?
    The children prop is a special prop in React used to pass elements between the opening and closing tags of a component. It is commonly used in layout and wrapper componnents.

12. What is React Router?
    React Router is a powerful routing library built on top of React that helps you add new screens and flows to your application incredibly quickly, all while keeping the URL in sync with what's being displayed on the page. 
