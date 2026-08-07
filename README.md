# 🎯 Full-Stack Interview Preparation Hub

> A living, hands-on knowledge base for **Full-Stack / JavaScript-TypeScript engineers** preparing for technical interviews — covering frontend, backend, databases, real-time systems, mobile, and modern AI engineering, backed by runnable code, not just theory.

[![Made with Markdown](https://img.shields.io/badge/docs-markdown-blue)](.)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow)](./JavaScript)
[![TypeScript](https://img.shields.io/badge/TypeScript-Types-3178c6)](./typescript)
[![Next.js](https://img.shields.io/badge/Next.js-App%20Router-black)](./NextJS)
[![Node.js](https://img.shields.io/badge/Node.js-Runtime-339933)](./NodeJS)
[![React](https://img.shields.io/badge/React-19-61dafb)](./React)
[![PHP](https://img.shields.io/badge/PHP-Backend-777bb4)](./PHP)
[![Status](https://img.shields.io/badge/status-actively%20updated-brightgreen)](.)

## 📌 What Is This Repository?

This repo is **not a tutorial series and not a finished course** — it's a continuously-updated personal knowledge base built while actively preparing for full-stack developer interviews. It exists to answer one question well: *"Does this candidate actually understand what they claim to know?"*

Every topic here follows the same pattern:

1. **A checklist-style roadmap** — the topics an interviewer is likely to probe, organized top to bottom from fundamentals to production-grade concerns.
2. **In-depth notes** for the trickier concepts — written as prose + diagrams + tables, not just bullet points (e.g. how the Node.js event loop actually works, how V8 compiles JS, how the virtual DOM reconciles).
3. **Real, runnable code** (`.js` / `.ts` / `.html`) for every concept, so the theory can be verified by running it, not just reading it.
4. A few **actual mini-projects** built from scratch (Tic-Tac-Toe, a DOM playground, Rock-Paper-Scissors) to prove the fundamentals translate into working software.

**If you are a recruiter or hiring manager:** this repo is a signal of how the author studies — structured, comprehensive, and willing to go a level deeper than "I've used it before." Jump to [Topics Covered](#-topics-covered) below to see breadth at a glance.

**If you are a fellow developer:** feel free to fork this, use the checklists to audit your own knowledge gaps, and run the code examples locally.


## 🗂️ Repository Structure

```text
interview-preparation/
├── README.md                      → you are here (hub / index)
├── project.md                     → portfolio & SaaS project ideas (AI tools, security, dashboards)
├── full-stack-engineer-guide.md   → 2026+ career roadmap (System Design, DevOps, Cloud, AI, Branding)
│
├── html/                          → HTML roadmap + interview-qa.md
├── JavaScript/                    → JavaScript roadmap + 100s of runnable concept files
├── typescript/                    → TypeScript type-system deep dives (runnable .ts examples)
├── React/                         → React roadmap + interview-qa.md + a real Tic-Tac-Toe project
├── react-native/                  → React Native roadmap + beginner notes
├── NextJS/                        → Next.js roadmap + extended architecture/rendering deep dives
├── NodeJS/                        → Node.js roadmap + internals (V8, libuv, event loop, streams)
├── PHP/                           → PHP roadmap (core language to production backend)
├── Redis/                         → Redis data structures, persistence, caching, HA
├── SocketIO/                      → Socket.IO real-time communication checklist
│
├── Mock Interview/                → mock interview question bank + behavioral prep
├── Upwork/                        → Upwork freelancing guide (high-ticket clients, AI/automation niche)
└── images/, req-res.png           → diagrams referenced inside the guides
```

## 🧠 Topics Covered

| Category | Topics / Tools | Where |
|---|---|---|
| **Frontend Fundamentals** | HTML, semantic markup, accessibility | [`html/`](./html) |
| **JavaScript** | Fundamentals → closures, prototypes, async, event loop, design patterns, ES2025 | [`JavaScript/`](./JavaScript) |
| **TypeScript** | Generics, utility types, unions/intersections, type guards, type narrowing | [`typescript/`](./typescript) |
| **React** | Hooks, state management, performance, patterns, testing | [`React/`](./React) |
| **React Native** | Navigation, native device features, animations, deployment (EAS/OTA) | [`react-native/`](./react-native) |
| **Next.js** | App Router, RSC, rendering strategies (SSR/SSG/ISR/PPR), Server Actions, middleware | [`NextJS/`](./NextJS) |
| **Node.js** | V8/libuv internals, event loop, core modules, streams, clustering, deployment | [`NodeJS/`](./NodeJS) |
| **PHP** | Request lifecycle, sessions, PDO/MySQLi, OOP PHP, Composer, PSR standards, PHPUnit | [`PHP/`](./PHP) |
| **Redis** | Data structures, persistence (RDB/AOF), caching patterns, Sentinel/Cluster | [`Redis/`](./Redis) |
| **Real-Time Systems** | Socket.IO — rooms, namespaces, scaling, auth, security | [`SocketIO/`](./SocketIO) |
| **Career, System Design & AI Engineering** | Software architecture, DevOps, cloud, observability, AI/LLM integration, career positioning | [`full-stack-engineer-guide.md`](./full-stack-engineer-guide.md) |
| **Interview Practice** | Mock interview question bank, behavioral prep | [`Mock Interview/`](./Mock%20Interview) |
| **Project Ideas** | AI tools, security systems, dashboards for portfolio building | [`project.md`](./project.md) |
| **Freelancing Career** | Upwork positioning, market/client research, profile & proposal strategy for AI + full-stack services | [`Upwork/`](./Upwork) |

## 🚀 Featured Hands-On Projects

| Project | Stack | Location |
|---|---|---|
| 🕹️ Tic-Tac-Toe | React 19 + Vite | [`React/projects/tic-tac-toe`](./React/projects/tic-tac-toe) |
| 🧩 DOM Playground | Vanilla JS + HTML | [`JavaScript/dom-project`](./JavaScript/dom-project) |
| ✊✋✌️ Rock-Paper-Scissors | Vanilla JS | [`JavaScript/40 Days of JavaScript/day-07`](./JavaScript/40%20Days%20of%20JavaScript/day-07) |
| 📅 40 Days of JavaScript | Vanilla JS, day-by-day exercises | [`JavaScript/40 Days of JavaScript`](./JavaScript/40%20Days%20of%20JavaScript) |

## 📖 How to Use This Repo

- **Auditing your own knowledge?** Open any topic folder's `README.md` and go through the `- [ ]` checklist — if a line makes you pause, that's your next thing to study.
- **Want the "why", not just the "what"?** Look for the `## 📖 Extended Deep-Dive Notes` sections inside [NextJS](./NextJS/README.md) and [NodeJS](./NodeJS/README.md) — these contain full explanations, diagrams, and runnable code, not just bullet points.
- **Cramming before an interview?** Skip the checklists and go straight to the dedicated Q&A files — [`html/interview-qa.md`](./html/interview-qa.md), [`React/interview-qa.md`](./React/interview-qa.md), and [`Mock Interview/`](./Mock%20Interview) — for direct question → answer pairs instead of topic lists.
- **Want to run something?** The `JavaScript/` and `typescript/` folders are full of small, focused, runnable files — clone the repo and execute them directly.

## 🛣️ Status

This repository is **actively maintained and updated topic by topic** as new concepts are studied — expect frequent small commits rather than big-bang rewrites. Some sections (e.g. PHP language fundamentals) are still being filled in.


*Have a look around, star it if it's useful, and feel free to open an issue if you spot an error in any of the notes.*
