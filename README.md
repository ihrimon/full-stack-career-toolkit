# Full Stack Interview Preparation Guide

> This guide is created as a complete interview preparation roadmap for **Full Stack Developers**. It is designed to help candidates revise core concepts, strengthen **fundamentals**, and confidently face **technical interviews** across the entire full stack ecosystem.

---

## 📑 PostgreSQL

| Topics                                                                                     | Overview                                         |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------ |
| [01. Database Fundamentals](#01-database-fundamentals)                                     | Core database concepts, RDBMS, SQL basics        |
| [02. SQL Query Foundations](#02-sql-query-foundations)                                     | CRUD operations, filtering, sorting, constraints |
| [03. Advanced Query Techniques](#03-advanced-query-techniques)                             | Joins, subqueries, aggregation, grouping         |
| [04. PostgreSQL-Specific Features](#04-postgresql-specific-features)                       | Data types, JSON, UUID, arrays                   |
| [05. Indexing & Performance Optimization](#05-indexing--performance-optimization)          | Index types, query planning, EXPLAIN             |
| [06. Transactions & Concurrency](#06-transactions--concurrency)                            | ACID, isolation levels, locking                  |
| [07. Schema Design & Normalization](#07-schema-design--normalization)                      | Database design principles                       |
| [08. Security & Roles](#08-security--roles)                                                | Users, roles, permissions                        |
| [09. Backup, Migration & Production Practices](#09-backup-migration--production-practices) | pg_dump, restore, migrations                     |
| [10. PostgreSQL DBA & Scaling Concepts](#10-postgresql-dba--scaling-concepts)              | Replication, partitioning, scaling               |

### 01. Database Fundamentals

- What is a Database?
- What is RDBMS?
- Relational vs Non-Relational Databases
- What is SQL?
- SQL vs RDBMS
- ACID Properties Overview
- Client–Server Architecture
- Tables, Rows, Columns
- Primary Key Concept
- Foreign Key Concept
- Basic ER Modeling
- Introduction to PostgreSQL

### 02. SQL Query Foundations

- What is SQL?
- SQL vs RDBMS
- Data Types (INT, VARCHAR, TEXT, DATE, BOOLEAN)
- Primary Key vs Unique Key
- Foreign Key & Relationships
- Constraints (NOT NULL, CHECK, DEFAULT)
- NULL Handling (IS NULL vs = NULL)
- CRUD Operations (CREATE, READ, UPDATE, DELETE)
- TRUNCATE vs DELETE
- WHERE Clause & Filtering
- ORDER BY & Sorting
- LIMIT & OFFSET
- DISTINCT
- Aliases (AS)
- Aggregate Functions (COUNT, SUM, AVG, MAX, MIN)
- GROUP BY
- HAVING vs WHERE
- Basic Subqueries
- EXISTS vs IN

### 03. Advanced Query Techniques

- JOIN Fundamentals
- INNER JOIN
- LEFT JOIN
- RIGHT JOIN
- FULL JOIN
- SELF JOIN
- CROSS JOIN
- Multiple Table Joins
- Join Order & Performance Impact
- Correlated vs Non-Correlated Subqueries
- Common Table Expressions (CTE – WITH)
- Recursive CTE
- Window Functions (ROW_NUMBER, RANK, DENSE_RANK)
- PARTITION BY
- Window vs GROUP BY
- CASE Statements
- Conditional Aggregation
- UNION vs UNION ALL
- INTERSECT
- EXCEPT

### 04. PostgreSQL-Specific Features

- PostgreSQL Architecture Overview
- MVCC (Multi-Version Concurrency Control)
- PostgreSQL Data Types
- SERIAL
- UUID
- JSON vs JSONB
- ARRAY
- ENUM
- TIMESTAMP WITH TIME ZONE
- Generated Columns
- Extensions (uuid-ossp, pg_trgm, PostGIS)
- Full Text Search
- GIN & GiST Indexing
- Materialized Views
- Stored Procedures vs Functions
- Triggers
- Sequences
- Upsert (ON CONFLICT)
- Returning Clause

### 05. Indexing & Performance Optimization

- What is an Index?
- Why Index is Needed?
- B-Tree Index (Default)
- Hash Index
- GIN Index
- GiST Index
- BRIN Index
- Composite Index
- Partial Index
- Expression Index
- When NOT to Use Index
- EXPLAIN
- EXPLAIN ANALYZE
- Query Execution Plan
- Sequential Scan vs Index Scan
- Vacuum & Autovacuum
- Write-Ahead Logging (WAL)
- Query Optimization Techniques
- Connection Pooling (PgBouncer)

### 06. Transactions & Concurrency Control

- ACID Properties
- Transaction Lifecycle
- BEGIN / COMMIT / ROLLBACK
- Savepoints
- Isolation Levels
- Read Uncommitted
- Read Committed
- Repeatable Read
- Serializable
- Dirty Reads
- Phantom Reads
- Non-Repeatable Reads
- Locks (Row-level, Table-level)
- Deadlocks
- Lock Monitoring
- Concurrency Handling in PostgreSQL

### 07. Schema Design & Normalization

- Database Design Principles
- One-to-One Relationship
- One-to-Many Relationship
- Many-to-Many Relationship
- Junction Tables
- Normalization
- 1NF
- 2NF
- 3NF
- BCNF
- Denormalization
- Index Strategy Design
- Naming Conventions
- Data Integrity Strategies
- Soft Delete vs Hard Delete
- Audit Columns (created_at, updated_at)

### 08. Security & Roles

- Roles & Users
- CREATE ROLE
- GRANT
- REVOKE
- Superuser vs Normal User
- Row-Level Security (RLS)
- Schema-level Permissions
- Database-level Permissions
- Authentication Methods
- Password Encryption

### 09. Backup, Migration & Production Practices

- pg_dump
- pg_restore
- Logical Backup vs Physical Backup
- Streaming Replication
- Logical Replication
- Failover Strategy
- High Availability Setup
- Partitioning
- Range Partitioning
- List Partitioning
- Hash Partitioning
- Vertical Scaling
- Horizontal Scaling
- Read Replicas
- Database Monitoring
- Production Deployment Best Practices

### 10. PostgreSQL DBA & Scaling Concepts

- PostgreSQL Internal Architecture
- Background Processes
- WAL Internals
- Checkpoints
- Autovacuum Tuning
- Query Planner & Optimizer
- Memory Configuration (shared_buffers, work_mem)
- Connection Management
- Sharding Strategies
- Load Balancing
- Disaster Recovery Planning
- Performance Benchmarking

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

 <details>
<summary><b >**Primitive Types**</b></summary>

TypeScript primitive types are the basic, immutable data units that form the foundation of type-safe coding. They include `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`, — enforcing strict typing from compile-time.

```typescript
/*** All TypeScript primitive types in action (real example) ***/
type UserProfile = {
  name: string; // Text data
  age: number; // Numeric values (int/float)
  isActive: boolean; // True/false states
  role: 'admin' | 'user' | 'guest'; // Literal type (string literal)
  sessionId: symbol; // Unique identifier
  avatarUrl: string | null; // Optional string (nullable)
  lastLogin?: Date | undefined; // Optional date (may be undefined)
};

function createUserProfile(
  name: string,
  age: number,
  isActive: boolean,
): UserProfile {
  const uniqueId = Symbol('session'); // Each user gets unique symbol

  return {
    name,
    age,
    isActive,
    role: 'user' as const, // Literal type assignment
    sessionId: uniqueId,
    avatarUrl: null, // Explicitly no avatar yet
    lastLogin: undefined, // Not logged in yet
  };
}

// Real-world usage
const alice = createUserProfile('Alice', 28, true);
const bob = createUserProfile('Bob', 35, false);

console.log(alice.name.toUpperCase()); // "ALICE" - string method
console.log(alice.age.toFixed(0)); // "28" - number method
console.log(alice.isActive ? 'Online' : 'Offline'); // "Online" - boolean logic

/*
    Type safety in action - these would error:
    alice.age = "28"; // ❌ number expected
    alice.isActive = "yes"; // ❌ boolean expected
    alice.role = "moderator"; // ❌ literal type mismatch
  */
```

</details>

<details>
<summary><b >**any vs unknown**</b></summary>

any and unknown both accept any value, but unknown is safer as it requires type checking first. any completely disables type safety.

```typescript
// DANGER: any = runtime crashes
function parseUserAPI(data: any) {
  return {
    name: data.user.name, // ❌ Crashes if structure wrong
    email: data.user.email,
    age: data.user.age,
  };
}

// PERFECT: unknown = bulletproof
function parseUserAPI(data: unknown) {
  // Type guard pattern
  if (
    typeof data === 'object' &&
    data !== null &&
    'user' in data &&
    typeof (data as any).user === 'object' &&
    (data as any).user !== null &&
    'name' in (data as any).user
  ) {
    const user = (data as any).user;

    return {
      name: String(user.name),
      email: typeof user.email === 'string' ? user.email : '',
      age: Number(user.age),
    };
  }

  return null; // Safe fallback
}

// Real API usage
const apiResponse = { user: { name: 'Alice', email: 'a@test.com', age: 25 } };
const user = parseUserAPI(apiResponse); // { name: "Alice", email: "a@test.com", age: 26 }

// Malformed API = NO CRASH
const badAPI = { user: 'not an object' };
const badUser = parseUserAPI(badAPI); // null (safe!)
```

</details>

<details>
<summary><b >**void, null, undefined, never**</b></summary>

`void`, `null`, `undefined`, and `never` represent different "absence of value" concepts in TypeScript, each with specific use cases.

| Type      | Meaning                         | Common Use                            |
| --------- | ------------------------------- | ------------------------------------- |
| void      | Function returns nothing useful | Event handlers, side-effect functions |
| null      | Intentional "no value"          | Optional fields, API responses        |
| undefined | Uninitialized/missing property  | Default values, optional params       |
| never     | Code never reaches here         | Error handlers, exhaustive checks     |

```typescript
/*** Complete auth system example ***/
type User = {
  id: string;
  name: string;
  email: string | null;
};

type AuthResponse = {
  user: User | null; // null = no user found
  token?: string; // undefined = not provided
  error?: string; // undefined = no error occured
};

/* 1. void - Side effect functions (logging, UI updates) */
function logLoginAttempt(email: string): void {
  console.log(`Login attempt: ${email}`);
  // Intentionally returns nothing meaningful
}

/* 2. null - Intentional absence (return null user) */
function findUser(email: string): User | null {
  const users: User[] = [
    { id: '1', name: 'Alice', email: 'alice@test.com' },
    { id: '2', name: 'Bob', email: null },
  ];
  return users.find((u) => u.email === email) || null;
}

/* 3. undefined - Missing properties */
function getAuthResponse(user: User | null): AuthResponse {
  if (!user) return { user: null, error: 'User not found' };

  return {
    user,
    token: Math.random().toString(36).substring(2, 15), // Explicitly defined
    // error is undefined (no error)
  };
}

/* 4. never - Functions that terminate execution */
function loginError(message: string): never {
  throw new Error(`Login failed: ${message}`);
}

/* EXHAUSTIVE CHECK: Guarantees all cases handled */
type LoginStatus = 'pending' | 'success' | 'failed';

function handleLoginStatus(status: LoginStatus): void {
  switch (status) {
    case 'pending':
      console.log('Login in progress...');
      break;
    case 'success':
      console.log('Login successful!');
      break;
    case 'failed':
      console.log('Login failed');
      break;
    default:
      // TypeScript knows this is 'never' here!
      exhaustiveCheck(status);
      break;
  }
}

/* Real usage in login handler */
function handleLogin(email: string, password: string): AuthResponse {
  logLoginAttempt(email); // void - side effect

  const user = findUser(email); // null - not found
  if (!user) loginError('Invalid credentials'); // never - throws error

  const response = getAuthResponse(user); // undefined fields OK
  if (response.error) loginError(response.error);

  handleLoginStatus('success'); // Exhaustive handling

  return response;
}

// Usage
const result = handleLogin('alice@test.com', 'pass123');
console.log(result.user?.name); // "Alice"
console.log(result.token); // Some token string
console.log(result.error); // undefined
```

</details>

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

```

```
