# Full Stack Interview Preparation Guide

> This guide is created as a complete interview preparation roadmap for **Full Stack Developers**. It is designed to help candidates revise core concepts, strengthen **fundamentals**, and confidently face **technical interviews** across the entire full stack ecosystem.

---

## 📑 TypeScript

| Topics                                                                                | Overview                                                               |
| ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [01. Introduction & Project Setup](#01-introduction--project-setup)                   | TypeScript basics, setup, and project initialization workflow          |
| [02. Core Types & Type System Foundations](#02-core-types--type-system-foundations)   | Primitive types, arrays, objects, unions, literals, and fundamentals   |
| [03. Functions & Function Typing](#03-functions--function-typing)                     | Typed functions, parameters, return types, optional & default values   |
| [04. Type Narrowing & Type System Analysis](#04-type-narrowing--type-system-analysis) | Conditional checks, control flow, and safe type refinement             |
| [05. Generics & Reusable Type Patterns](#05-generics--reusable-type-patterns)         | Writing flexible, reusable, and type-safe components using generics    |
| [06. Classes & OOP in TypeScript](#06-classes--oop-in-typescript)                     | Classes, interfaces, access modifiers, inheritance, and OOP principles |
| [07. Built-in Utility Types](#07-built-in-utility-types)                              | Leveraging Partial, Pick, Omit, and other utility types effectively    |

### 01. Introduction & Project Setup

- **What is TypeScript?**

  TypeScript is an open-source programming language developed by Microsoft that's a superset of JavaScript, adding optional static typing and advanced features like interfaces and generics. It compiles down to plain JavaScript, making it fully compatible with all existing JS code and environments. This allows developers to catch errors at compile time rather than runtime, improving code reliability for large-scale applications.

- **Why Use TypeScript?**

  There are several reasons why developers prefer TypeScript over plain JavaScript:
  - Superior Tooling:
    - Provides IntelliSense, autocompletion,
    - Refactoring, and navigation in IDEs.
  - Early Error Detection at Compile Time
  - Enhanced Code Quality
    - Static typing ensures predictability—no unexpected type changes.
    - Safe refactoring across large files
  - Better Maintainability
    - Clearer Codebase
    - Easier Debugging
  - Improved Team Collaboration
    - Explicit type contracts define function inputs/outputs.
    - Consistent codebase standards across developers.
  - Scalability
    - Handles large codebases with modules and namespaces.
    - Supports modular architecture for growing apps.
  - Smart Type Inference
    - Minimal Type Annotations
    - Auto-Completion
  - Better Integration with Modern Frameworks
    - Seamless Integration
    - Strict Mode in JavaScript
  - Community and Ecosystem Support
    - Growing Ecosystem
    - Active Development and Maintenance
    - Future-Proofing

- TypeScript vs JavaScript

  | Feature/Aspect         | JavaScript                     | TypeScript                            |
  | ---------------------- | ------------------------------ | ------------------------------------- |
  | Typing System          | Dynamic (runtime)              | Static (compile-time, optional)       |
  | Error Detection        | Runtime                        | Compile-time                          |
  | File Extension         | `.js`                          | `.ts`                                 |
  | Compilation            | Not required                   | Required (Transpiled using TSC)       |
  | Tooling & IntelliSense | Basic IDE support              | IntelliSense, refactoring, navigation |
  | Scalability            | Good for small/medium projects | Built for large enterprise apps       |
  | Learning Curve         | Easy for beginners             | Slightly harder than JavaScript       |

- **How TypeScript Works? (Compilation Process)**

  TypeScript operates through a compilation pipeline that transforms your .ts code into executable JavaScript.

  Core Compilation Flow:
  - **Parsing** → TypeScript compiler (tsc) reads .ts / .tsx files and converts the source code into an Abstract Syntax Tree (AST) that represents the program structure.
  - **Binding** → Identifiers such as variables, functions, classes, and imports are linked across scopes and files.
  - **Type Checking** → Analyzes types of all variables, parameters, returns—catches errors before runtime
  - **Emission (Transpilation)** → All TypeScript-specific syntax and type annotations are removed, and clean JavaScript (.js) files are generated according to tsconfig.json.
  - **Execution** → The generated JavaScript runs normally in browsers or Node.js, with no TypeScript overhead at runtime.

  ```javascript
  // Compilation stages

  TypeScript Source (.ts / .tsx)
      ↓
  Parsing
      ↓
  Binding
      ↓
  Type Checking
      ↓
  Emission / Transpilation
      ↓
  JavaScript Output (.js)
      ↓
  Browser / Node.js
  ```

- **Installation & Environment Setup**

  To work with TypeScript, you need the following tools installed on your system:
  - Node.js (JavaScript runtime)
  - npm (Node Package Manager)
  - TypeScript Compiler (tsc)

  ```bash
  # TypeScript Installation process

  Install Node.js
      ↓
  Install TypeScript Compiler (tsc)
      ↓
  Create a Project Folder
      ↓
  Initialize TypeScript Configuration (tsconfig.json)
      ↓
  Write TypeScript Files (.ts / .tsx)
      ↓
  Compile TypeScript using tsc
      ↓
  Run the Generated JavaScript (.js)

  ```

  ```bash
  # one-liner setup

  npm install -g typescript ts-node && mkdir ts-app && cd ts-app && npm init -y && tsc --init

  # Essential dev tools

  npm i -D @types/node ts-node nodemon

  # Run directly (no compile step)

  npx ts-node src/index.ts
  ```

- **Basic Overview of tsconfig.json**

  The tsconfig.json file is the configuration file for TypeScript projects.
  It tells the TypeScript compiler (tsc) how to compile the project, which files to include, and which rules to enforce.

  **Purpose of tsconfig.json:**
  - Project Compilation Control
    - Define which files and folders should be compiled
    - Specify output directories for JavaScript files
  - Type Checking & Strictness
    - Enable strict type checking
    - Control null checks, implicit any, and other rules
  - JavaScript Target & Module System
    - Set which version of JavaScript to output (ES5, ES6, ESNext)
    - Choose module system (CommonJS, ESNext, AMD, etc.)

  - Additional Compiler Options
    - Enable source maps for debugging
    - Include/exclude files or directories
    - Enable decorators, JSX, or other advanced features

  ```javascript

    // Overview of tsconfig.json
    {
      "compilerOptions": {
        "target": "ES2018",        // JavaScript version output
        "module": "CommonJS",      // Module system
        "strict": true,            // Enable all strict type checks
        "outDir": "./dist",        // Output directory for JS files
        "rootDir": "./src",        // Root folder for TS source files
        "esModuleInterop": true,   // Compatibility with CommonJS modules
        "forceConsistentCasingInFileNames": true, // File naming consistency
        "skipLibCheck": true       // Skip type checking of declaration files
      },
      "include": ["src/**/*"],      // Files to include
      "exclude": ["node_modules"]   // Files to exclude
  }

  ```

### 02. Core Types & Type System Foundations

- Primitive Types (string, number, boolean)
- any vs unknown
- void, null, undefined, never
- Literal Types & Template Literal Types
- Type Inference
- Type Aliases
- Union Types
- Intersection Types
- Type Narrowing (Basics)
- Array & Tuple Types
- Enum Types
- Object Type Annotations
- Interfaces vs Type Aliases (Deep Comparison)
- Introduction to Declaration Files (.d.ts)

### 03. Functions & Function Typing

- Function Type Annotations
- Parameter & Return Type Definitions
- Optional, Default & Rest Parameters
- Arrow Functions in TypeScript
- Function Type Expressions (Callback Typing)

### 04. Type Narrowing & Type System Analysis

- Type Guards
- Type Guards (Overview)
- Built-in Type Guards (typeof, instanceof, in)
- Custom Type Guards
- Assertions & Overrides
- Type Assertions
- Non-null Assertion Operator (!)
- When NOT to use assertions
- Narrowing Techniques
- Type Narrowing (Basics → Advanced)
- Control Flow Based Type Analysis
- Discriminated Unions
- Exhaustiveness Checking with never

### 05. Generics & Reusable Type Patterns

- Generic Fundamentals
- What are Generics?
- Why Generics are Needed
- Basic Generic Syntax (<T>)
- Generic Functions
- Generic Function Definitions
- Generic Arrow Functions
- Inference vs Explicit Generic Types
- Generic Interfaces & Type Aliases
- Generic Interfaces
- Generic Type Aliases
- Extending Generic Interfaces
- Generic Constraints (<T extends ...>)
- Constraining Generics (<T extends ...>)
- Using keyof with Generics
- Multiple Constraints
- Default Generic Types
- Advanced Generic Patterns
- Multiple Generic Parameters
- Conditional Generics (intro-level)
- Generic Utility Patterns

### 06. Classes & OOP in TypeScript

- Class Syntax in TypeScript
- Constructors
- Access Modifiers (public, private, protected, readonly)
- Inheritance
- Method Overriding
- Polymorphism
- Abstract Classes
- Static Properties & Methods
- Implementing Interfaces in Classes

### 07. Built-in Utility Types

- Partial, Required, Readonly
- Pick, Omit
- Record
- Exclude, Extract
- NonNullable
- ReturnType, Parameters

> ⚠️ **Note:** This is not a syntax cheat list. It is a concept-first, **interview-oriented** TypeScript documentation.

## 📑 JavaScript

- [Full Stack Interview Preparation Guide](#full-stack-interview-preparation-guide)
  - [📑 TypeScript](#-typescript)
    - [01. Introduction \& Project Setup](#01-introduction--project-setup)
    - [02. Core Types \& Type System Foundations](#02-core-types--type-system-foundations)
    - [03. Functions \& Function Typing](#03-functions--function-typing)
    - [04. Type Narrowing \& Type System Analysis](#04-type-narrowing--type-system-analysis)
    - [05. Generics \& Reusable Type Patterns](#05-generics--reusable-type-patterns)
    - [06. Classes \& OOP in TypeScript](#06-classes--oop-in-typescript)
    - [07. Built-in Utility Types](#07-built-in-utility-types)
  - [📑 JavaScript](#-javascript)
  - [1. JavaScript Fundamentals (Basics)](#1-javascript-fundamentals-basics)
    - [2. Intermediate JavaScript](#2-intermediate-javascript)
    - [3. Functions \& Advanced Concepts](#3-functions--advanced-concepts)
    - [4. Object-Oriented Programming (OOP) in JS](#4-object-oriented-programming-oop-in-js)
    - [5. Asynchronous JavaScript](#5-asynchronous-javascript)
    - [6. Advanced JavaScript](#6-advanced-javascript)
    - [7. JavaScript Internals](#7-javascript-internals)
    - [8. DOM (Document Object Model)](#8-dom-document-object-model)
    - [9. Browser APIs](#9-browser-apis)
    - [10. Advanced Patterns \& Architecture](#10-advanced-patterns--architecture)
    - [11. Testing \& Debugging](#11-testing--debugging)
    - [12. Performance Optimization](#12-performance-optimization)
    - [13. Security in JavaScript](#13-security-in-javascript)
    - [14. Modern JavaScript (ES6+ to ES2025)](#14-modern-javascript-es6-to-es2025)

## 1. JavaScript Fundamentals (Basics)

- [ ] Introduction to JavaScript
      👉 “JavaScript is a high-level, interpreted, single-threaded, and dynamically typed programming language that is mainly used in web development. It was created in 1995 by Brendan Eich at Netscape. Initially it was called Mocha, then LiveScript, and finally JavaScript. Today, it is standardized by ECMAScript.

  The language is lightweight, event-driven, and works seamlessly with HTML and CSS. One of its important characteristics is that it is dynamically typed—meaning variable types are decided at runtime. It’s also single-threaded, but it manages asynchronous tasks efficiently with the event loop.

  In terms of usage, JavaScript can make websites interactive by handling events like clicks, inputs, and hover effects. It allows DOM manipulation, animations, data fetching via APIs, and more. On the server side, JavaScript powers backend development using Node.js. Beyond that, frameworks and libraries like React, Angular, and Vue have made it central to frontend development, while React Native and Electron allow us to build mobile and desktop apps.

  Overall, JavaScript has grown into a versatile, cross-platform language that powers both the frontend and backend, making it the heart of modern web applications.”

- [ ] Variables (`var`, `let`, `const`)
      👉 var: The oldest way to declare variables in JavaScript. It is function-scoped, supports re-declaration and updating, and is hoisted (initialized as undefined). However, it is less preferred in modern JavaScript due to scope-related issues.

  👉 let: Introduced in ES6 (2015), let is block-scoped, meaning it works only within { }. It allows updating but does not allow re-declaration in the same scope.

  👉 const: Used when the variable reference should not change. For primitive values, the value is fixed, while for arrays and objects, the reference is constant but their contents can still be modified.

- [ ] Data Types (Primitive vs Non-Primitive)
      👉 Primitive Data Types: Immutable values stored directly in memory.
      String – "Hello"
      Number – 10, 3.14
      Boolean – true, false
      Undefined – variable declared but not assigned
      Null – intentional empty value
      Symbol – unique identifier
      BigInt – large integers

  👉 Non-Primitive (Reference) Data Types: Mutable values stored by reference.

  Object – { name: "Rimon", age: 23 }
  Array – [1, 2, 3]
  Function – function greet() { return "Hello noob developer"; }

- [ ] Operators (Arithmetic, Comparison, Logical, Bitwise)
      Arithmetic: +, -, _, /, %, \*\* (exponential)
      Comparison: ==, ===, !=, !==, >, <, >=, <=
      Logical: &&, ||, ! (logical not)
      Bitwise: &, |, ^, ~, <<, >>, >>>
      Assignment: = += -= _= /= %=
      Ternary: (? :)
      String: +
      Type: typeof, instanceof
      Unary: ++, --, +, -
      Relational: > < >= <=
      Optional Chaining: (?.)
      Comma Operator: (,)
      Delete Operator: delete (keyword)
      Spread Operator: (...)
      Nullish Coalescing: (??)

- [ ] Type Conversion & Coercion
      Type Conversion (Explicit) – manually converting a value from one type to another.
      Type Coercion (Implicit) – JavaScript automatically converts types when performing operations.
- [ ] Strings & Template Literals
- [ ] Numbers & Math Functions
- [ ] Control Flow (if/else, switch, ternary)
- [ ] Loops (for, while, do-while, for...in, for...of)
      for → When you need to run a loop a specific number of times.

  while → When you want the loop to continue as long as a condition is true.

  do...while → Ensures the loop runs at least once before checking the condition.

  for...in → Used to iterate over the keys (properties) of an object.

  for...of → Used to iterate over the values of an iterable (like arrays or strings).

- [ ] Functions (declaration, expression, arrow functions)
- [ ] Scope (Global, Local, Block, Lexical Scope)
      Global Scope: Accessed anywhere in the code.

  Local / Function Scope: Accessed only inside a function.

  Block Scope: Accessed only inside {} block (let & const).

  Lexical Scope: Inner function can access outer function variables.

- [ ] Hoisting
      JavaScript moves variable and function declarations to the top of their scope before execution.

  Function declarations → can be called before definition.

  Function expressions & arrow functions → not hoisted.

  var variables → hoisted and initialized with undefined.

  let & const variables → hoisted but in Temporal Dead Zone (TDZ) until declaration.

### 2. Intermediate JavaScript

- [ ] Arrays (`map`, `filter`, `reduce`, `find`, `some`, `every`, `forEach`)
- [ ] Objects (`Object.keys`, `Object.values`, `Object.entries`)
- [ ] Object & Array Destructuring
- [ ] Spread & Rest Operator
- [ ] Default Parameters
- [ ] Short-Circuiting & Nullish Coalescing (`??`)
- [ ] ES6+ Features Overview
- [ ] Modules (import/export)
- [ ] JSON (parse, stringify)

### 3. Functions & Advanced Concepts

- [ ] Higher Order Functions (HOF)
- [ ] Callback Functions
- [ ] Closures
- [ ] Currying
- [ ] Recursion
- [ ] IIFE (Immediately Invoked Function Expressions)
- [ ] Pure vs Impure Functions
- [ ] Memoization
- [ ] Function Composition

### 4. Object-Oriented Programming (OOP) in JS

- [ ] `this` keyword
- [ ] Constructor Functions
- [ ] Prototypes & Prototype Chain
- [ ] `class` and `extends` (ES6 Classes)
- [ ] Encapsulation, Abstraction, Inheritance, Polymorphism
- [ ] Static Methods & Properties
- [ ] Getters & Setters

### 5. Asynchronous JavaScript

- [ ] Call Stack & Event Loop
- [ ] Synchronous vs Asynchronous JS
- [ ] Callbacks & Callback Hell
- [ ] Date & Time Handling
- [ ] Error Handling (`try...catch`, `throw`, `finally`)
- [ ] Promises (`then`, `catch`, `finally`)
- [ ] Async/Await
- [ ] `Promise.all`, `Promise.race`, `Promise.allSettled`, `Promise.any`
- [ ] Fetch API & AJAX
- [ ] Event Loop & Microtasks
- [ ] Web APIs (`setTimeout`, `setInterval`, DOM Events)

### 6. Advanced JavaScript

- [ ] Execution Context & Lexical Environment
- [ ] Event Delegation
- [ ] Debouncing & Throttling
- [ ] Deep vs Shallow Copy
- [ ] Polyfills
- [ ] Module Pattern & Revealing Module Pattern
- [ ] Factory Functions
- [ ] Mixins
- [ ] Prototype vs Class Performance
- [ ] Error Handling Best Practices

### 7. JavaScript Internals

- [ ] JavaScript Engine (V8, SpiderMonkey)
- [ ] How JS Works (Compilation & Interpretation)
- [ ] JIT Compilation
- [ ] Garbage Collection (Memory Management)
- [ ] Call Stack & Heap
- [ ] Execution Phases (Creation & Execution)
- [ ] Hoisting (Functions & Variables)
- [ ] Scope Chain & Closure
- [ ] Event Loop & Concurrency Model

### 8. DOM (Document Object Model)

- [ ] Selecting Elements (`getElementById`, `querySelector`)
- [ ] DOM Traversal (parent, child, siblings)
- [ ] DOM Manipulation (create, append, remove, clone)
- [ ] Attributes & Properties
- [ ] Styling & Classes (`classList`, `style`)
- [ ] Event Handling (`addEventListener`)
- [ ] Bubbling & Capturing
- [ ] Custom Events
- [ ] Mutation Observer

### 9. Browser APIs

- [ ] LocalStorage, SessionStorage, Cookies
- [ ] Geolocation API
- [ ] Web Workers
- [ ] IndexedDB
- [ ] Notifications API
- [ ] Clipboard API
- [ ] Drag & Drop API
- [ ] Canvas API & WebGL Basics
- [ ] File & Blob API

### 10. Advanced Patterns & Architecture

- [ ] Design Patterns (Singleton, Factory, Observer, Module, Mediator, Proxy)
- [ ] MVC, MVVM in JavaScript
- [ ] Event Emitter Pattern
- [ ] Publish/Subscribe Pattern
- [ ] Dependency Injection
- [ ] Functional Programming in JS
- [ ] Reactive Programming Concepts

### 11. Testing & Debugging

- [ ] Debugging with DevTools
- [ ] Console Tricks (`table`, `time`, `group`)
- [ ] Unit Testing (Jest, Mocha, Jasmine)
- [ ] Test Driven Development (TDD)
- [ ] Error Handling & Logging

### 12. Performance Optimization

- [ ] Memory Leaks & Prevention
- [ ] Optimizing Loops & Recursion
- [ ] Debounce & Throttle for Performance
- [ ] Lazy Loading
- [ ] Code Splitting & Tree Shaking
- [ ] Web Workers for Multithreading
- [ ] Minification & Bundling

### 13. Security in JavaScript

- [ ] XSS (Cross-Site Scripting)
- [ ] CSRF (Cross-Site Request Forgery)
- [ ] Clickjacking
- [ ] Content Security Policy (CSP)
- [ ] Secure Cookies & Storage
- [ ] Sanitizing User Input

### 14. Modern JavaScript (ES6+ to ES2025)

- [ ] `let`, `const`, `var` differences
- [ ] Template Literals
- [ ] Destructuring
- [ ] Default Parameters
- [ ] Spread & Rest Operator
- [ ] Symbols & Iterators
- [ ] Generators (`function*`)
- [ ] Async Iterators & Generators
- [ ] Proxy & Reflect API
- [ ] Optional Chaining (`?.`)
- [ ] Nullish Coalescing (`??`)
- [ ] BigInt
- [ ] Top-level Await
- [ ] WeakMap & WeakSet

**[⬆ Back to Top](#typescript)**

```

```
