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

<details>
<summary><b >What is TypeScript ?</b></summary>

TypeScript is an open-source programming language developed by Microsoft that's a superset of JavaScript, adding optional static typing and advanced features like interfaces and generics. It compiles down to plain JavaScript, making it fully compatible with all existing JS code and environments. This allows developers to catch errors at compile time rather than runtime, improving code reliability for large-scale applications.

</details>

<details>
<summary><b >Why Use TypeScript ? </b></summary>

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
  </details>

<details>
<summary><b >TypeScript vs JavaScript</b></summary>

| Feature/Aspect         | JavaScript                     | TypeScript                            |
| ---------------------- | ------------------------------ | ------------------------------------- |
| Typing System          | Dynamic (runtime)              | Static (compile-time, optional)       |
| Error Detection        | Runtime                        | Compile-time                          |
| File Extension         | `.js`                          | `.ts`                                 |
| Compilation            | Not required                   | Required (Transpiled using TSC)       |
| Tooling & IntelliSense | Basic IDE support              | IntelliSense, refactoring, navigation |
| Scalability            | Good for small/medium projects | Built for large enterprise apps       |
| Learning Curve         | Easy for beginners             | Slightly harder than JavaScript       |

</details>

<details>
<summary><b >How TypeScript Works ? </b></summary>

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

</details>

<details>
<summary><b >Installation & Environment Setup</b></summary>

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

</details>

<details>
<summary><b>Basic Overview of tsconfig.json</b></summary>

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

</details>

### 02. Core Types & Type System Foundations

<details>
<summary><b >Primitive Types</b></summary>

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
<summary><b >any vs unknown</b></summary>

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
<summary><b >void, null, undefined, never</b></summary>

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

<details>
<summary><b >Literal Types & Template Literal Types</b></summary>

Literal types pin variables to exact values (not just type classes), while template literal types create dynamic string patterns. Both enable precise type control.

| Type             | What               | Example                                       |
| ---------------- | ------------------ | --------------------------------------------- |
| Literal          | Single exact value | "success", 42, true                           |
| Union Literal    | Fixed set          | "GET" \| "POST" \| "DELETE"                   |
| Template Literal | Pattern generation | \\user/${string}`, `on${"Click" \| "Hover"}`` |

```typescript
/*** HTTP API Handler (Literal Types) ***/
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type Status = 200 | 201 | 400 | 404 | 500;

interface ApiResponse {
  method: HttpMethod; // Only exact methods allowed
  status: Status; // Only exact status codes
  data?: any;
}

function handleApi(method: HttpMethod, endpoint: string): ApiResponse {
  // ✅ TypeScript prevents: handleApi("PATCH", "/users")
  return { method, status: 200, data: { users: [] } };
}
```

```typescript
/*** CSS Class Generator (Template Literal Types) ***/
type Color = 'red' | 'blue' | 'green';
type Size = 'sm' | 'md' | 'lg';

// Generates: "bg-red-sm", "bg-blue-lg", etc.
type CSSClass = `bg-${Color}-${Size}`;

const buttonClass: CSSClass = 'bg-red-sm'; // ✅ OK
// const invalid: CSSClass = "bg-purple-lg"; // ❌ Error!

function createButton(className: CSSClass) {
  return `<button class="${className}">Click</button>`;
}
```

</details>

<details>
<summary><b >Type Inference</b></summary>

Type inference automatically determines variable types from their initial values and context. It works for variables, function returns, arrays, and objects.

- Infers from: Initial values, return statements, array literals, object shapes
- Saves: 70-80% of type annotations in real apps
- Context-aware: Knows function params, React props, generic constraints

**Why Type Inference Matters?**

- Readability: Clean code, no type noise
- Developer Speed: 40% faster coding
- Maintainability: Auto-updates on refactors
- Error Prevention: Catches mismatches early
- Scalability: Handles 100k+ LOC projects
- Flexibility: Generic code without boilerplate
- Bug Reduction: Eliminates annotation errors

```typescript
const products = [
  { id: 1, name: 'iPhone', price: 999, stock: true },
  { id: 2, name: 'MacBook', price: 1999, stock: false },
  { id: 3, name: 'Laptop', price: 1299, stock: true },
];
// Inferred: {id: number, name: string, price: number, stock: boolean}[]

const available = products
  .filter((item) => item.stock)
  .map((item) => `${item.name}: $${item.price}`);
// Inferred: string[] - autocomplete EVERYWHERE

// Filter + Transform - INFERENCE CHAIN
const available = products
  .filter((item) => item.stock)
  .map((item) => `${item.name}: $${item.price}`);
// Inferred: string[] - autocomplete EVERYWHERE

// Cart function - RETURN INFERENCE
function addToCart(product: (typeof products)[0]) {
  return {
    ...product,
    addedAt: Date.now(),
  };
}

const cartItem = addToCart(products[0]); // Full typing!
cartItem.name.toUpperCase(); // "IPHONE"
```

</details>

<details>
<summary><b >Type Aliases</b></summary>

Type aliases (type) create reusable names for any type - primitives, objects, unions, intersections, functions, and generics. They improve readability and eliminate repetition.

```typescript
/*** Production-ready API types (DRY code) ***/

/* 1. PRIMITIVE ALIASES */
type UserID = string | number;
type Price = number;
type Status = 'pending' | 'confirmed' | 'shipped';

/* 2. OBJECT ALIASES */
type Address = {
  street: string;
  city: string;
  zip: string;
};

type Product = {
  id: number;
  name: string;
  price: Price;
};

/* 3. UNION ALIASES (Most powerful!) */
type ApiResponse<T> =
  | { success: true; data: T }
  | { success: false; error: string };

/* 4. REAL USAGE - Clean & Reusable */
type Order = {
  id: UserID;
  userId: UserID;
  items: Product[];
  total: Price;
  status: Status;
  shipping: Address | null;
};

type GetOrdersResponse = ApiResponse<Order[]>;

/* 5. FUNCTION SIGNATURES */
type Validator<T> = (data: T) => boolean;
type OrderValidator = Validator<Order>;
```

</details>

<details>
<summary><b >Union Types</b></summary>

Union types `|` allow a value to be one of several types, providing flexibility while maintaining type safety. Perfect for APIs, props, and polymorphic functions.

```typescript
// Production notification types
type Notification =
  | { type: 'email'; to: string; subject: string }
  | { type: 'sms'; phone: string; message: string }
  | { type: 'push'; userId: number; title: string }
  | { type: 'success'; message: string }
  | { type: 'error'; code: number; details: string };

// Single handler for ALL notifications
function sendNotification(notification: Notification): void {
  switch (notification.type) {
    case 'email':
      console.log(`📧 Email to ${notification.to}: ${notification.subject}`);
      break;
    case 'sms':
      console.log(`📱 SMS to ${notification.phone}: ${notification.message}`);
      break;
    case 'push':
      console.log(
        `🔔 Push to user ${notification.userId}: ${notification.title}`,
      );
      break;
    case 'success':
      console.log(`✅ ${notification.message}`);
      break;
    case 'error':
      console.log(`❌ Error ${notification.code}: ${notification.details}`);
      break;
  }
}

// Real usage - TypeScript knows exact shape after switch!
sendNotification({
  type: 'email',
  to: 'alice@test.com',
  subject: 'Order confirmed',
});

sendNotification({
  type: 'sms',
  phone: '+1234567890',
  message: 'Your order shipped!',
});
sendNotification({ type: 'error', code: 404, details: 'User not found' });
```

</details>

<details>
<summary><b >Intersection Types</b></summary>

Intersection types `&` combine multiple types into one, requiring objects to have ALL properties from each type. Perfect for composing behavior and extending types.

```typescript
// Production RBAC (Role-Based Access Control)

// Base types
type User = { id: string; name: string; email: string };
type Admin = { permissions: string[]; canDelete: true };
type Manager = { teamId: string; canApprove: true };

// COMPOSITION - User + Role capabilities
type AdminUser = User & Admin;
type ManagerUser = User & Manager;
type SuperAdmin = User & Admin & Manager; // ALL powers!

// Real usage
const adminUser: AdminUser = {
  id: 'u1',
  name: 'Alice',
  email: 'alice@company.com',
  permissions: ['read', 'write', 'delete'],
  canDelete: true,
};

const superAdmin: SuperAdmin = {
  id: 'u2',
  name: 'Bob',
  email: 'bob@company.com',
  permissions: ['*'],
  canDelete: true,
  teamId: 'team-1',
  canApprove: true,
};

// Type-safe permissions
function canAccessResource(
  user: User | AdminUser | ManagerUser,
  resource: string,
) {
  if ('permissions' in user) {
    return user.permissions.includes(resource);
  }
  return false; // Basic user
}

canAccessResource(adminUser, 'delete-users'); // true
canAccessResource(superAdmin, 'approve-budgets'); // true
```

</details>

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

<details>
<summary><b >Partial, Required, Readonly</b></summary>

Utility types transform existing types: `Partial<T>` (all optional), `Required<T>` (all mandatory), `Readonly<T>` (immutable).

```typescript
type User = {
  name: string;
  email?: string;
  role?: string;
};

// 1. Partial - Update any field
function updateUser(id: string, updates: Partial<User>) {
  // updates.name? OR updates.email? OR updates.role?
}

updateUser('u1', { name: 'Alice' }); // ✅ OK
updateUser('u2', { email: 'bob@test.com' }); // ✅ OK

// 2. Required - Create complete user
function createUser(data: Required<User>) {
  // ALL fields required
}

createUser({ name: 'Alice', email: 'a@test.com', role: 'admin' }); // ✅ OK

// 3. Readonly - Cannot change
function getUser(): Readonly<User> {
  return { name: 'Alice', email: 'a@test.com' };
}

const user = getUser();
user.name = 'Bob'; // ❌ Error! readonly
```

</details>

<details>
<summary><b >Pick, Omit</b></summary>

`Pick<T, K>` extracts specific properties from type T. `Omit<T, K>` excludes specified properties from type T.

```typescript
type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
};

// API Responses - Perfect use case!

// 1. Pick - Public profile (ONLY needed fields)
type PublicUser = Pick<User, 'id' | 'name' | 'email'>;
// Result: { id: string; name: string; email: string }

// 2. Omit - Hide sensitive data
type LoginResponse = Omit<User, 'password'>;
// Result: { id: string; name: string; email: string; role: string }

// Real API usage
function getPublicProfile(user: User): PublicUser {
  return { id: user.id, name: user.name, email: user.email };
}

function loginResponse(user: User): LoginResponse {
  return { id: user.id, name: user.name, email: user.email, role: user.role };
}

// ✅ Type safe - no password leaks!
const profile: PublicUser = getPublicProfile(fullUser);
```

</details>

<details>
<summary><b >Record</b></summary>

`Record<K, T>` creates an object type where keys are type `K` and all values are type `T`. Perfect for lookup tables, configs, and API response maps.

```typescript
Record<Keys, ValueType>

Keys: string | number | symbol (union or literal)
Values: Any type (string, object, function, etc.)
```

```typescript
/*** 🎯 Role-based permissions lookup ***/
type Role = 'admin' | 'user' | 'guest';
type Permission = string[];

// Perfect lookup table!
const permissions: Record<Role, Permission> = {
  admin: ['read', 'write', 'delete', 'ban'],
  user: ['read', 'write'],
  guest: ['read'],
};

// ✅ Type safe access
function checkPermission(role: Role, action: string): boolean {
  return permissions[role].includes(action);
}

checkPermission('admin', 'delete'); // true
checkPermission('guest', 'delete'); // false
// checkPermission('moderator', 'read'); // ❌ Type error!
```

</details>

<details>
<summary><b >Exclude, Extract</b></summary>

`Exclude<T, U>` removes types from T that are assignable to U. `Extract<T, U>` extracts types from T that are assignable to U.

```typescript
// Example: Extract only string literals from a union
const strings: Extract<'a' | 'b' | 1 | 2> = 'a';
const numbers: Exclude<'a' | 'b' | 1 | 2> = 1;
```

</details>

<details>
<summary><b >NonNullable</b></summary>

`NonNullable<T>` removes null and undefined from type T.

```typescript
// Example: Remove null and undefined from a type
const nonNullable: NonNullable<string | null | undefined> = 'hello';
```

</details>

<details>
<summary><b >ReturnType, Parameters</b></summary>

`ReturnType<T>` extracts the return type of a function type T. `Parameters<T>` extracts the parameter types of a function type T.

```typescript
// Example: Extract return type of a function
const result: ReturnType<() => string> = 'hello';

// Example: Extract parameter types of a function
const params: Parameters<(a: number, b: string) => void> = [1, 'hello'];
```

</details>

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
