1. What is React?
   React is an open-source front-end JavaScript library for building user interfaces based on components. It's used for handling the view layer in web and mobile
   applications
   ReactJS is a JavaScript library used to build reusable components for the view layer in the MVC architecture. It is used to build the Single Page Application (SPA) due to its component-based architecture, efficient re-rendering with the Virtual DOM, and ability to manage dynamic content without needing full page reloads. It is written in JSX.

2. What are the major features of React?
   Core Features:

   - Component-Based Architecture: React builds UI using reusable, isolated components, making code more modular, maintainable, and scalable.
   - Virtual DOM:

     - React uses a virtual DOM to efficiently update and render components, ensuring fast performance by minimizing direct DOM manipulations.

   - JSX (JavaScript XML):

   - Unidirectional Data Flow: React follows a one-way data binding model where data flows from parent to child components. This makes the code more predictable and easier to debug.

   - React Hooks:

     - React Hooks allow functional components to manage state and side effects, making them powerful and more flexible.

   - Context API

   - Error Boundaries

   - Server-side Rendering (SSR):

     - React can be used for server-side rendering, where HTML content is generated on the server and sent to the client. This improves the app's performance, especially for SEO.

   - Concurrent Mode

   - React Server Components
   - Suspense: A feature that lets your components "wait" for something before rendering, supporting code-splitting and data fetching with cleaner code.

   - React Router: React Router enables navigation in a React application. It allows you to define different routes for different views in a single-page application (SPA).

3. Explain the building blocks of React.
   The five main building blocks of React are

   Components: These are reusable blocks of code that return HTML.
   JSX: It stands for JavaScript and XML and allows you to write HTML in React.
   Props and State: props are like function parameters and State is similar to variables.
   Context: This allows data to be passed through components as props in a hierarchy.
   Virtual DOM: It is a lightweight copy of the actual DOM which makes DOM manipulation easier.

4. What is state in React?
   State of a component is an object that holds some information that may change over the lifetime of the component. The important point is whenever the state object changes, the component re-renders. State is mutable, meaning it can be changed using the setter function (useState)

5. What are props in React?
   Props are inputs to components. They are single values or objects containing a set of values that are passed to components on creation similar to HTML-tag attributes. Here, the data is passed down from a parent component to a child component.

6. Explain props and state in React with differences

   PROPS:

   - The Data is passed from one component to another.
   - It is Immutable (cannot be modified).
   - Props can be used with state and functional components.
   - Props are read-only.

   STATE:

   - The Data is passed within the component only.
   - It is Mutable ( can be modified).
   - The state is both read and write.

7. What is Virtual DOM?
   The Virtual DOM (VDOM) is a lightweight, in-memory representation of Real DOM used by libraries like React to optimize UI rendering. The representation of a UI is kept in memory and synced with the "real" DOM.

8. How Virtual DOM works?

   1. Initial Render
   2. State or Props Change
   3. Diffing Algorithm
   4. Reconciliation
   5. Efficient DOM Updates

9. How do browsers read JSX?
   In general, browsers are not capable of reading JSX and only can read pure JavaScript. The web browsers read JSX with the help of a transpiler. Transpilers are used to convert JSX into JavaScript. The transpiler used is called Babel.

10. What are controlled components?
    A controlled component is a React component that fully manages the form element's state(e.g, elements like <input>, <textarea>, or <select>)) using React's internal state mechanism. i.e, The component does not manage its own internal state — instead, React acts as the single source of truth for form data.

11. What are uncontrolled components?
    The Uncontrolled components are form elements (like <input>, <textarea>, or <select>) that manage their own state internally via the DOM, rather than through React state. You can query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.

12. What is Lifting State Up in React?
    When several components need to share the same changing data then it is recommended to lift the shared state up to their closest common ancestor. That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components.

13. What are Higher-Order Components?
    A higher-order component (HOC) is a function that takes a component and returns a new enhanced component with additional props, behavior, or data. It’s a design pattern based on React’s compositional nature, allowing you to reuse logic across multiple components without modifying their internals.

14. What is children prop?
    The children prop is a special prop in React used to pass elements between the opening and closing tags of a component. It is commonly used in layout and wrapper componnents.

15. What is React Router?
    React Router is a powerful routing library built on top of React that helps you add new screens and flows to your application incredibly quickly, all while keeping the URL in sync with what's being displayed on the page.

16. Explain the lifecycle methods of components
    A React Component can go through four stages of its life as follows.

    Initialization: This is the stage where the component is constructed with the given Props and default state. This is done in the constructor of a Component Class.

    Mounting: Mounting is the stage of rendering the JSX returned by the render method itself.

    Updating: Updating is the stage when the state of a component is updated and the application is repainted.

    Unmounting: As the name suggests Unmounting is the final step of the component lifecycle where the component is removed from the page.

17. React 19 features
    useOptimistic, Auto Memoization, Web Components, Actions & Form Hooks

18. React Code Optimization Tips
    React.memo ব্যবহার করুন → একই props এলে re-render বন্ধ হবে।
    
    useCallback & useMemo ব্যবহার করুন → function memoize ও heavy calculation memoize করার জন্য।

`   Lazy Loading এবং Code Splitting করুন → বড় component বা route আলাদা লোড করুন।

   Virtualization ব্যবহার করুন (react-window / react-virtualized) → বড় list efficientভাবে render করতে।

   State কম রাখুন → derived values state এ না রেখে calculate করুন।

   Key Prop সঠিকভাবে ব্যবহার করুন → list render এ unique key দিন।

   Bundle Size Optimize করুন →

   Tree-shaking use করুন

   Specific imports ব্যবহার করুন (lodash/debounce ✅, পুরো lodash ❌)

   Image Optimization করুন →

   Lazy loading

   Responsive sizes

   Unnecessary Re-render এড়িয়ে চলুন → state ও props only যখন দরকার তখনই update করুন।

   React 19+ Compiler → নতুন automatic memoization feature কাজে লাগান।`


Lazy Loading এর কাজ/উপকারিতা:

Initial Load Time কমানো → অ্যাপ প্রথমবার load হওয়ার সময় অপ্রয়োজনীয় component বা image লোড হয় না।

Performance বাড়ানো → User যতটুকু দরকার, ততটুকুই load হয়।

Bundle Size ছোট রাখা → কোডকে ভাগ করে (Code Splitting) আলাদা আলাদা সময়ে লোড করা যায়।

Better User Experience → User অ্যাপ দ্রুত open করতে পারে, কারণ একসাথে সব কিছু load হয় না।

Memory Usage কমানো → শুধু দরকারি জিনিস memory তে যায়, অন্যগুলো পরে লোড হয়।



🔹 Throttling কী?

👉 Throttling হলো একটি টেকনিক যেখানে একটি function নির্দিষ্ট সময় অন্তর (interval) অনুযায়ী execute হয়,
যদিও সেটা বারবার call করা হচ্ছে।

অর্থাৎ, function অনেকবার ট্রিগার হলেও (যেমন — scroll, resize, mousemove ইভেন্টে), থ্রটল করলে function কেবল নির্দিষ্ট সময় gap দিয়ে চলবে।

🔹 সহজভাবে বললে:

Debounce → event শেষ হওয়ার পর function একবার চলে।

Throttle → event যতবারই হোক, নির্দিষ্ট সময় gap পর পর function চলে।


🔹 useRef এর কাজ

👉 React এ useRef একটি Hook, যা মূলত mutable value ধরে রাখে re-render না করেই।
এছাড়া DOM element-এর reference ধরে রাখতে সাহায্য করে।


🔹 Key Points
বিষয়	বিবরণ
Virtual DOM	React-এর lightweight copy of the real DOM
Diffing	Virtual DOM এবং previous Virtual DOM এর পার্থক্য খুঁজে বের করা
Reconciliation	Diff অনুযায়ী শুধু প্রয়োজনীয় DOM update করা
Key	List update দ্রুত ও সঠিক করার জন্য ব্যবহার করা হয়



🔹 Reconciliation কি?

React-এ Reconciliation হলো সেই প্রক্রিয়া যেখানে React Virtual DOM এর সাথে Real DOM তুলনা করে সর্বনিম্ন প্রয়োজনীয় update করে।

সহজভাবে: React diffing algorithm ব্যবহার করে Virtual DOM চেক করে → তারপর DOM-এ শুধু পরিবর্তিত অংশ update করে।

🔹 Reconciliation এর কাজ

Virtual DOM তৈরি করা → React state বা props পরিবর্তন হলে নতুন Virtual DOM generate হয়।

Diffing Algorithm চালানো → পুরানো Virtual DOM এর সাথে নতুন Virtual DOM তুলনা করা হয়।

Minimal DOM updates করা → শুধু যেই element বা attribute পরিবর্তিত হয়েছে সেটাই real DOM update হয়।

Efficient rendering → পুরো DOM পুনরায় render হয় না, performance ভালো থাকে।




🔹 useEffect এর কাজ React-এ

useEffect হলো একটি React Hook, যা side-effects manage করতে ব্যবহার করা হয়।

🔹 Side-effects কী?

Side-effects মানে হলো React rendering-এর বাইরের কাজ। যেমন:

API থেকে data fetch করা

DOM manipulation

Event listener add/remove করা

Timer/interval ব্যবহার করা

Logging, localStorage update ইত্যাদি




Mount → Component DOM এ আসে → Initialization

Unmount → Component DOM থেকে যায় → Cleanup



🔹 React Suspense কী?

React Suspense হলো একটি React feature, যা asynchronous operation (lazy loading, API fetch, code splitting) handle করতে সাহায্য করে।

সহজভাবে বললে: Suspense হলো “loading boundary”, যেখানে component load হওয়া পর্যন্ত fallback UI দেখানো হয়।



Feature	Description
Suspense	Loading boundary for async components
fallback	যা দেখাবে component load হওয়ার আগে
use with React.lazy	Lazy loaded components-এর জন্য
Avoid UI blocking	Page smoothভাবে render হয়



🔹 Redux Architecture

Store → সমস্ত application state থাকে

Action → state change request (type + payload)

Reducer → pure function, state update logic থাকে

Dispatch → action trigger করা হয়

Selector / useSelector → component এ state access করা হয়




Redux Toolkit আসছে কারণ:

Redux ব্যবহার সহজ করতে

Boilerplate কমাতে

Immutable update সহজ করতে

Async logic handle করতে

Better developer experience & DevTools integration