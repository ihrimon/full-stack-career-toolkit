# 🐘 PHP Guide

[⬅ Back to main README](../README.md)

> PHP is a server-side scripting language designed for web development, known for its request-based execution model, deep server integration, and simplicity in building dynamic web applications.

| Topics                                                                    | Overview                                             |
| ------------------------------------------------------------------------- | ---------------------------------------------------- |
| [01. Core Architecture & Runtime](#01-core-architecture--runtime)         | Request lifecycle, stateless model, output buffering |
| [02. Language Fundamentals](#02-language-fundamentals)                    | Syntax, variables, types, operators, control flow    |
| [03. Superglobals & Request Handling](#03-superglobals--request-handling) | $\_GET, $\_POST, $\_SERVER, request lifecycle        |
| [04. File System & Uploads](#04-file-system--uploads)                     | File handling, uploads, directory management         |
| [05. Sessions & State Management](#05-sessions--state-management)         | Sessions, cookies, state persistence                 |
| [06. Database Integration](#06-database-integration)                      | PDO, MySQLi, prepared statements, transactions       |
| [07. Security & Input Handling](#07-security--input-handling)             | XSS, CSRF, validation, sanitization                  |
| [08. Output & Rendering](#08-output--rendering)                           | Echo, templates, output buffering                    |
| [09. Error Handling & Debugging](#09-error-handling--debugging)           | Error types, logging, debugging tools                |
| [10. Object-Oriented PHP](#10-object-oriented-php)                        | OOP, traits, interfaces, namespaces                  |
| [11. Data Formats & APIs](#11-data-formats--apis)                         | JSON, XML, REST API                                  |
| [12. HTTP, cURL & External Services](#12-http-curl--external-services)    | API calls, headers, integrations                     |
| [13. Composer & Autoloading](#13-composer--autoloading)                   | Dependency management, PSR-4                         |
| [14. PHP Standards (PSR)](#14-php-standards-psr)                          | Coding standards, interoperability                   |
| [15. Performance & Configuration](#15-performance--configuration)         | php.ini, OPcache, PHP-FPM                            |
| [16. Advanced PHP Features](#16-advanced-php-features)                    | Generators, enums, fibers, modern PHP                |
| [17. Testing Strategy](#17-testing-strategy)                              | PHPUnit, integration testing                         |
| [18. Architecture & Patterns](#18-architecture--patterns)                 | MVC, clean architecture, modular design              |

---

### 01. Core Architecture & Runtime

- [ ] Request-response lifecycle (per-request execution)

In PHP, every HTTP request triggers a complete, fresh execution of your script from top to bottom. When the response is sent, PHP tears everything down — no memory, no variables, no state persists to the next request. This is fundamentally different from Node.js or Java servers that stay "alive" between requests.

![Stateless PHP request-response lifecycle](../req-res.png)

- [ ] Stateless nature of PHP
      PHP is inherently stateless — each HTTP request is treated as completely independent. When a request finishes, PHP tears down everything: variables, objects, database connections, and all runtime data vanish.

  **Why PHP Works This Way**
  PHP was designed around the **shared-nothing architecture** — each request is a self-contained unit. This maps naturally to how HTTP itself works (HTTP is also stateless by design).

- [ ] Server execution model (Apache/Nginx + PHP-FPM)
- [ ] Output buffering (`ob_start`, `ob_end_flush`)
      Output buffering lets you capture output (HTML, text, etc.) before it's sent to the browser — giving you full control over when and how content is delivered.

          By default, PHP sends output to the browser immediately. With output buffering, output is held in memory (the "buffer") until you decide to flush or discard it.

  **Core Functions**

          | Function | Description |

  |---|---|
  | `ob_start()` | Starts output buffering |
  | `ob_get_contents()` | Gets current buffer contents (without clearing) |
  | `ob_end_flush()` | Sends buffer to browser & turns buffering off |
  | `ob_end_clean()` | Discards buffer & turns buffering off |
  | `ob_flush()` | Sends buffer but keeps buffering on |
  | `ob_get_clean()` | Gets contents + clears + turns buffering off |

- [ ] Build vs runtime concept
- [ ] PHP execution vs Node.js model

---

### 03. Superglobals & Request Handling

- [ ] `$_GET`, `$_POST`
- [ ] `$_REQUEST`
- [ ] `$_SERVER`, `$_ENV`
- [ ] `$_FILES`
- [ ] Request data lifecycle
- [ ] Input validation (`filter_input`, `filter_var`)

---

### 04. File System & Uploads

- [ ] File reading (`file_get_contents`, `fopen`)
- [ ] File writing (`file_put_contents`, `fwrite`)
- [ ] File uploads (`$_FILES`)
- [ ] Moving uploaded files
- [ ] Directory management (`mkdir`, `scandir`)

---

### 05. Sessions & State Management

- [ ] `session_start()`
- [ ] Session storage & lifecycle
- [ ] Session security
- [ ] Cookies (set, read, secure flags)
- [ ] Stateless vs stateful handling

---

### 06. Database Integration

- [ ] PDO connection
- [ ] MySQLi usage
- [ ] Prepared statements
- [ ] CRUD operations
- [ ] Transactions
- [ ] Fetching data (`fetch`, `fetchAll`)

---

### 07. Security & Input Handling

- [ ] XSS prevention (`htmlspecialchars`)
- [ ] SQL Injection prevention
- [ ] CSRF protection basics
- [ ] Input validation & sanitization
- [ ] Password hashing (`password_hash`, `password_verify`)
- [ ] Secure session handling

---

### 08. Output & Rendering

- [ ] `echo`, `print`
- [ ] Mixing PHP with HTML
- [ ] Template-style rendering
- [ ] Output buffering
- [ ] Response handling

---

### 09. Error Handling & Debugging

- [ ] Error types (Notice, Warning, Fatal)
- [ ] `try-catch-finally`
- [ ] Custom exceptions
- [ ] Error reporting configuration
- [ ] Logging errors
- [ ] Debugging (`var_dump`, `print_r`)

---

### 10. Object-Oriented PHP

- [ ] Classes & objects
- [ ] Properties & methods
- [ ] Constructor / destructor
- [ ] Access modifiers
- [ ] Inheritance & polymorphism
- [ ] Interfaces & abstract classes
- [ ] Traits
- [ ] Static methods & properties
- [ ] Magic methods
- [ ] Namespaces

---

### 11. Data Formats & APIs

- [ ] JSON (`json_encode`, `json_decode`)
- [ ] XML parsing
- [ ] CSV handling
- [ ] Building REST APIs
- [ ] API response structure

---

### 12. HTTP, cURL & External Services

- [ ] HTTP headers handling
- [ ] cURL GET/POST requests
- [ ] API integration
- [ ] Handling external services

---

### 13. Composer & Autoloading

- [ ] Install Composer
- [ ] `composer.json`
- [ ] Install/update packages
- [ ] PSR-4 autoloading
- [ ] Dependency management

---

### 14. PHP Standards (PSR)

- [ ] PSR-1 (basic standard)
- [ ] PSR-12 (coding style)
- [ ] PSR-4 (autoloading)
- [ ] PSR ecosystem understanding

---

### 15. Performance & Configuration

- [ ] `php.ini` basics
- [ ] PHP CLI usage
- [ ] OPcache
- [ ] PHP-FPM
- [ ] Performance optimization basics

---

### 16. Advanced PHP Features

- [ ] Closures & advanced functions
- [ ] Generators (`yield`)
- [ ] Match expression
- [ ] Nullsafe operator (`?->`)
- [ ] Named arguments
- [ ] Union types
- [ ] Enums (PHP 8+)
- [ ] Fibers (advanced)

---

### 17. Testing Strategy

- [ ] PHPUnit setup
- [ ] Unit testing
- [ ] Integration testing
- [ ] Mocking basics

---

### 18. Architecture & Patterns

- [ ] MVC pattern (manual implementation)
- [ ] Folder structure design
- [ ] Separation of concerns
- [ ] Basic design patterns (Singleton, Factory)
- [ ] Clean code principles

---

