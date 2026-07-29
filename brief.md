# রিপোজিটরি সংক্ষিপ্ত বিবরণ (Brief) — Interview Preparation

> এই ফাইলটি পুরো রিপোজিটরির প্রতিটি ফোল্ডার ও ফাইল পড়ে তৈরি করা একটি সারসংক্ষেপ, যাতে ভবিষ্যতে যে কেউ এক নজরে বুঝতে পারে এই রিপোতে আসলে কী আছে এবং কেন।

---

## ১. এই রিপোজিটরিটি আসলে কিসের জন্য

এটি মূলত একজন **ফুল-স্ট্যাক (মূলত JavaScript/TypeScript-কেন্দ্রিক) ডেভেলপারের ব্যক্তিগত ইন্টারভিউ প্রস্তুতি ও লার্নিং নোটবুক**। এটি তিন ধরনের কনটেন্টের মিশ্রণ:

1. **লম্বা চেকলিস্ট-স্টাইলের Markdown রোডম্যাপ** — টপিক লিস্ট (`- [ ]` চেকবক্স সহ), কিছু জায়গায় `<details>` ট্যাগে ভাঁজ-করা গভীর ব্যাখ্যা ও কোড উদাহরণ। এটাই রিপোর বেশিরভাগ কনটেন্ট।
2. **সত্যিকারের রানেবল কোড ফাইল** (`.js` / `.ts` / `.html`) — হাতে-কলমে অনুশীলনের জন্য, ইংরেজি ও কিছুটা "Banglish" (ল্যাটিন অক্ষরে লেখা বাংলা) কমেন্টে ভরা।
3. কয়েকটি ছোট **বাস্তব মিনি-প্রজেক্ট** (Tic-Tac-Toe, DOM প্রজেক্ট, Rock-Paper-Scissors)।

লেখক সম্ভবত ইন্টারভিউয়ের প্রস্তুতি নিতে নিতে যা শিখছেন তা সাথে সাথে ডকুমেন্ট করে রাখছেন — git history দেখলে বোঝা যায় প্রতিটি টপিক আলাদা আলাদা ছোট কমিটে যোগ করা হয়েছে (মোট ১৩০+ কমিট)।

---

## ২. রুট লেভেলের গুরুত্বপূর্ণ ফাইলসমূহ

### `README.md` (৩৪২০+ লাইন) — সবচেয়ে বড় ও প্রধান ফাইল
এটি আসলে একাধিক আলাদা চেকলিস্টকে একসাথে জোড়া লাগিয়ে তৈরি একটি বিশাল ডকুমেন্ট। এতে যা যা আছে:

- **Next.js checklist** — App Router, RSC, রাউটিং, রেন্ডারিং স্ট্র্যাটেজি (SSR/SSG/ISR/PPR), ডেটা ফেচিং, API রুট ও মিডলওয়্যার, Auth (Auth.js/JWT/RBAC), পারফরম্যান্স, SEO, ডিবাগিং, টেস্টিং, অ্যাডভান্সড প্যাটার্ন (i18n, PWA, WebSocket)।
- **Node.js checklist** — এটি সবচেয়ে গভীর অংশ, `<details>` ব্লকে V8 ইঞ্জিন, ইভেন্ট লুপ, libuv/থ্রেড পুল, core modules (`fs`, `path`, `http`, `events`, `buffer`, `streams`, `crypto`, `os`), CommonJS vs ESM, ডাটাবেস, অথেনটিকেশন, error handling, টেস্টিং, পারফরম্যান্স/clustering, ডিপ্লয়মেন্ট (PM2/Docker), CLI টুলস তৈরি — সবকিছু বিস্তারিত প্রোজ ও কোড উদাহরণসহ।
- **Redis primer** (Node.js সেকশনের মাঝখানে ঢোকানো) — ইনস্টলেশন, কনফিগারেশন, persistence (RDB/AOF), সিকিউরিটি, ডেটা স্ট্রাকচার, কমান্ড, ক্যাশিং প্যাটার্ন, পারফরম্যান্স, Pub/Sub ও Streams, মনিটরিং, High Availability (Sentinel/Cluster), প্রোডাকশন বেস্ট প্র্যাকটিস। এই একই Redis কনটেন্ট **আবার ডুপ্লিকেট হয়ে** ফাইলের আরেক জায়গায় "Redis Checklist" নামে আছে।
- **JavaScript section** — ফান্ডামেন্টালস থেকে শুরু করে modern ES6+ পর্যন্ত ১৪টি টপিক (fundamentals, intermediate, functions/closures, OOP, async, execution internals, DOM, browser APIs, design patterns, testing, পারফরম্যান্স, সিকিউরিটি)।
- **Socket.io checklist** — সেটআপ, কোর কনসেপ্ট, সার্ভার/ক্লায়েন্ট কনফিগ, ইভেন্ট ও অ্যাক, নেমস্পেস/রুম, Auth, স্কেলিং (Redis adapter), পারফরম্যান্স, মনিটরিং, সিকিউরিটি, টেস্টিং, প্রোডাকশন বেস্ট প্র্যাকটিস।
- **React Native checklist** — সেটআপ, UI/স্টাইলিং, নেভিগেশন, স্টেট ম্যানেজমেন্ট, ডিভাইস ফিচার (ক্যামেরা/লোকেশন/পারমিশন), Auth, অ্যানিমেশন, পারফরম্যান্স, পুশ নোটিফিকেশন, টেস্টিং (Detox), সিকিউরিটি, ডিপ্লয়মেন্ট (EAS/OTA)।
- **PHP (Core to Advanced Backend) checklist** — ফাইলের একদম শেষে, ১৮টি টপিক: স্টেটলেস request-response লাইফসাইকেল (রুটের `req-res.png` ছবি দিয়ে ব্যাখ্যা করা), সুপারগ্লোবাল, ফাইল/আপলোড, সেশন, ডাটাবেস (PDO/MySQLi), সিকিউরিটি, OOP PHP, JSON/XML/REST, cURL, Composer/PSR-4, পারফরম্যান্স (OPcache, PHP-FPM), অ্যাডভান্সড ফিচার (generators, enums, fibers), PHPUnit টেস্টিং, MVC প্যাটার্ন। *(লক্ষণীয়: "02. Language Fundamentals" টপিকটি লিস্টে আছে কিন্তু সেই সেকশনের আসল কনটেন্ট লেখা হয়নি — নাম্বারিং সরাসরি ০১ থেকে ০৩-এ চলে গেছে।)*
- ফাইলের মাঝামাঝি একটি **আলগা/পুরনো Table of Contents ব্লক** আছে যেটা আসল কনটেন্ট নয় — একাধিক ফাইল মার্জ করার সময়কার একটা অবশিষ্টাংশ।

> **গুরুত্বপূর্ণ পর্যবেক্ষণ:** বর্তমানে `README.md`-তে **কমিট না-করা (uncommitted) পরিবর্তন** আছে — শেষ কমিটের তুলনায় প্রায় ২১৩৭ লাইন মুছে ফেলা হয়েছে। যা মোছা হয়েছে: (ক) একটি পুরনো, আলাদা phase-ভিত্তিক "PHP Learning Checklist" (roadmap.sh স্টাইল, ~৭১০ লাইন) — নতুন ১৮-টপিক PHP সেকশন দিয়ে প্রতিস্থাপিত হয়েছে, এবং (খ) প্রায় ~১৪০০ লাইনের একটি সম্পূর্ণ **TypeScript Markdown checklist** — মনে হচ্ছে এটি এখন `typescript/src/*.ts` ফোল্ডারের বাস্তব কোড ফাইল দিয়ে প্রতিস্থাপিত হচ্ছে।

### `project.md`
একগুচ্ছ কাঁচা প্রজেক্ট-আইডিয়ার তালিকা (ইংরেজি-বাংলা মিশিয়ে লেখা): AI-চালিত রিয়েল-টাইম জব ইন্টারভিউ প্র্যাকটিস অ্যাপ, YouTube ভিডিও সামারাইজার, ওয়্যারহাউস/ইনভেন্টরি ম্যানেজমেন্ট সিস্টেম, GitHub প্রোফাইল অ্যানালাইজার, রেসপনসিভ ডিজাইন চেকার, AI কমিট-মেসেজ জেনারেটর, AI কোড কমেন্টেটর, এবং একটি end-to-end এনক্রিপ্টেড সিকিউর ফাইল ভল্ট সিস্টেম (Dropbox/ProtonDrive-এর মতো)।

### `full-stack-engineer-guide.md`
"২০২৬+ সালের প্রতিযোগিতামূলক জব মার্কেটে কীভাবে আলাদা হবেন" — একটি ক্যারিয়ার রোডম্যাপ। টপিক: সফটওয়্যার ইঞ্জিনিয়ারিং ফান্ডামেন্টালস, AI ইঞ্জিনিয়ারিং ও ইন্টিগ্রেশন, DevOps, ক্লাউড কম্পিউটিং (AWS), অ্যাডভান্সড ব্যাকএন্ড, ডাটাবেস ইঞ্জিনিয়ারিং, অবজারভেবিলিটি, টেকনিক্যাল রাইটিং, ওপেন সোর্স কন্ট্রিবিউশন, প্রোডাক্ট থিংকিং — শেষে একটি রেকমেন্ডেড টেক স্ট্যাক (২০২৬-২০২৮) দেওয়া আছে।

### `generative-ai.md`
সফটওয়্যার ইঞ্জিনিয়ারদের জন্য Generative AI রোডম্যাপ: LLM ফান্ডামেন্টালস, টোকেনাইজেশন, এমবেডিং, ভেক্টর সিমিলারিটি সার্চ, প্রম্পট ইঞ্জিনিয়ারিং (zero/few-shot, chain-of-thought), OpenAI/Anthropic SDK, RAG (চাংকিং, রিট্রিভাল, রি-র‍্যাংকিং), ভেক্টর ডাটাবেস (Pinecone/Qdrant/pgvector), AI এজেন্ট ও ফাংশন কলিং, LangChain/LlamaIndex, ওপেন-সোর্স মডেল (Llama, Mistral, Gemini, DeepSeek), প্রোডাকশন AI ইঞ্জিনিয়ারিং (প্রম্পট ইনজেকশন প্রতিরোধ, ইভালুয়েশন, কস্ট অপ্টিমাইজেশন, অবজারভেবিলিটি) এবং কয়েকটি পোর্টফোলিও প্রজেক্ট আইডিয়া।

**দুটোই (`full-stack-engineer-guide.md` ও `generative-ai.md`) git-এ এখনো কমিট করা হয়নি — এখনো untracked ফাইল।**

### `req-res.png` ও `images/` ফোল্ডার
- `req-res.png` (রুটে) — README.md-এর PHP সেকশনে ব্যবহৃত হয়েছে, PHP-এর স্টেটলেস request-response লাইফসাইকেল বোঝাতে।
- `images/expressjs.png`, `images/javascript.png`, `images/mongodb.png`, `images/nextjs.png` — এই চারটি ছবি এখনো **কোনো Markdown ফাইলে ব্যবহৃত হয়নি** (অর্থাৎ orphaned/অব্যবহৃত অ্যাসেট, ভবিষ্যতে ব্যবহারের জন্য রাখা হয়েছে সম্ভবত)।

---

## ৩. ফোল্ডার-ভিত্তিক বিবরণ

### `html/html.md`
ছোট HTML ইন্টারভিউ Q&A: HTML কী ও এর মূল কাজ, মেটা ট্যাগ, `<b>` vs `<strong>`, সিমান্টিক HTML ট্যাগ, HTML অ্যাট্রিবিউট, হাইপারলিংক, ইমেজ ম্যাপ।

### `javascript/` ফোল্ডার
- **`readme.md`** — একটি স্বয়ংসম্পূর্ণ "JavaScript Mastery Roadmap" (রুট README-এর JS সেকশনের মূল উৎস), যাতে একটি বাড়তি ১৫তম সেকশন আছে: "Node.js & Beyond" (npm, EventEmitter, streams, Express বেসিক্স)।
- **`40 Days of JavaScript/readme.md`** — দিন-ভিত্তিক ব্যক্তিগত লার্নিং লগ (ফরমাল রোডম্যাপ না), JS-এর ইতিহাস (১৯৯৫-২০২৫) দিয়ে শুরু, তারপর প্রতিদিনের নোট (async/defer, hoisting/TDZ, closures, execution context, error handling, array methods ইত্যাদি) — ইংরেজি ও ভারী Banglish মিশিয়ে লেখা।
- **কোড সাব-ফোল্ডারগুলো** (প্রতিটিতে একটি করে কনসেপ্টের রানেবল উদাহরণ, বেশিরভাগেই সুবিস্তৃত কমেন্ট):
  - `40 Days of JavaScript/day-01, 02, 07, 11-15, 17, 18` — প্র্যাকটিস মিনি-প্রজেক্ট (যেমন day-07 = কনসোল-ভিত্তিক Rock-Paper-Scissors গেম, day-18 = DOM ম্যানিপুলেশন)
  - `asynchronous-javascript/` — async-await, callback hell, promise, try-catch
  - `dom-project/` — ছোট DOM ডেমো
  - `execution-context&call-stack/` — কল স্ট্যাক, execution phase, variable environment
  - `functional-programming-concept/` — callback, composition, currying, first-class function, HOF, immutability, memoization, pure function
  - `intermediate-javascript/` — array/object মেথড, destructuring, spread/rest, date-time, parse/stringify
  - `javascript-fundamentals/` — function, hoisting, if-else/switch/ternary, loops, operators, primitive vs non-primitive, scope, var/let/const
  - `perfomance-optimization.js/` — lazy loading
  - `scope-closures/` — closure, lexical scope, scope chain

### `NextJS/README.md`
একটি স্বতন্ত্র (রুট README থেকে ভিন্ন গঠনের) "Next.js Mastery Roadmap" — ফান্ডামেন্টালস, রাউটিং, রেন্ডারিং মেথড, ডেটা ফেচিং, স্টাইলিং (Tailwind/ShadCN), স্টেট ম্যানেজমেন্ট, API রুট, Auth, মিডলওয়্যার, পারফরম্যান্স, টেস্টিং, ডিপ্লয়মেন্ট, ও শেষে একটি বোনাস প্রজেক্ট-আইডিয়া টেবিল (পোর্টফোলিও, ই-কমার্স, ব্লগ, চ্যাট অ্যাপ, এবং লেখকের নিজের "MediGo" প্রজেক্ট)।

### `NodeJS/README.md`
আরেকটি স্বতন্ত্র, তুলনামূলক সংক্ষিপ্ত "Node.js Mastery Roadmap" — Express.js, টেমপ্লেট ইঞ্জিন (EJS/Handlebars), ডাটাবেস ইন্টিগ্রেশন (Mongoose/Sequelize/Prisma), Auth (Passport/Helmet), ফাইল আপলোড (Multer), WebSocket, API ডিজাইন (REST/GraphQL), টেস্টিং, মাইক্রোসার্ভিস/মেসেজ কিউ (RabbitMQ/Kafka), ডিপ্লয়মেন্ট, লগিং (Winston/Morgan)।

### `React/` ফোল্ডার
- **`README.md`** — পরিষ্কার "React Mastery Roadmap": Virtual DOM, JSX, কম্পোনেন্ট, hooks (core + advanced), অ্যাডভান্সড প্যাটার্ন (Context, HOC, compound components), স্টেট ম্যানেজমেন্ট (Redux Toolkit, Zustand), পারফরম্যান্স, রাউটিং, ফর্ম ভ্যালিডেশন, টেস্টিং, ইকোসিস্টেম।
- **`react.md`** — React ইন্টারভিউ Q&A (আংশিক বাংলায়): React কী, Virtual DOM/diffing/reconciliation, controlled vs uncontrolled কম্পোনেন্ট, HOC, lifecycle, React 19 ফিচার (`useOptimistic`), এবং বাংলায় লেখা পারফরম্যান্স অপ্টিমাইজেশন টিপস (memo, useCallback/useMemo, lazy loading, bundle size), debounce vs throttle, Redux আর্কিটেকচার।
- **`started/readme.md`** — Banglish-এ লেখা ব্যক্তিগত নোট: React-এর ইতিহাস (Jordan Walke, Facebook, PHP-এর XHP থেকে অনুপ্রাণিত), DOM/CSSOM/render-tree/paint পাইপলাইন, virtual DOM কেন দ্রুত, ইভেন্ট প্রোপাগেশন (bubbling/capturing)।
- **`projects/tic-tac-toe`** — Vite + React 19 দিয়ে বানানো একটি বাস্তব Tic-Tac-Toe প্রজেক্ট (standard Vite scaffold, ESLint সহ)।

### `react-native/readme.md`
খুবই সংক্ষিপ্ত (মাত্র ১১ লাইন) — শুরুর দিকের নোট: বেসিক RN কম্পোনেন্ট (`View`, `Text`, `Image`, `Button`, `TextInput`, `ScrollView`)। রুট README-এ থাকা বিস্তারিত React Native checklist-এর তুলনায় অনেক কম উন্নত।

### `Mock Interview/readme.md`
মক ইন্টারভিউয়ের জন্য রিভিউ করার টপিকের একটি ফ্ল্যাট লিস্ট (ইভেন্ট লুপ, method chaining, callback/promise/async-await, virtual DOM, Redux কেন আবিষ্কার হলো, hooks ইত্যাদি) এবং কিছু জেনেরিক আচরণগত (behavioral) ইন্টারভিউ প্রশ্ন।

### `typescript/` ফোল্ডার
একটি pnpm-ম্যানেজড TypeScript প্রজেক্ট (`ts-node-dev` দিয়ে চালানো)। `src/index.ts` একটি সুইচবোর্ড — একবারে একটি করে ইম্পোর্ট আনকমেন্ট করে চালানো হয়। বাকি `src/*.ts` ফাইলগুলো (যেমন `generic.ts`, `utility.ts`, `union.ts`, `type-guard.ts`, `intersection.ts`, `never.ts`, `record.ts` ইত্যাদি) প্রতিটি একটি নির্দিষ্ট TypeScript টাইপ-সিস্টেম কনসেপ্টের গভীর, রানেবল উদাহরণ — এগুলোই সেই TypeScript checklist-এর বাস্তব-কোড সংস্করণ যা README.md থেকে মুছে ফেলা হচ্ছে (উপরে উল্লেখিত)।

---

## ৪. সংক্ষেপে — কী কী টপিক/টুলস কভার করা হয়েছে

| ক্যাটাগরি | টপিক/টুলস |
|---|---|
| **ফ্রন্টএন্ড** | HTML, JavaScript (fundamentals → advanced/ES2025), TypeScript, React, React Native, Next.js |
| **ব্যাকএন্ড** | Node.js (core modules, event loop, streams), PHP (core → advanced), Express.js |
| **ডাটাবেস/ক্যাশ** | Redis (কমান্ড, persistence, HA, ক্যাশিং প্যাটার্ন), MongoDB/PostgreSQL (উল্লেখ আকারে) |
| **রিয়েল-টাইম** | Socket.io, WebSocket |
| **AI/GenAI** | LLM, প্রম্পট ইঞ্জিনিয়ারিং, RAG, ভেক্টর ডাটাবেস, AI এজেন্ট, LangChain/LlamaIndex, OpenAI/Anthropic SDK |
| **DevOps/ক্লাউড** | Docker, CI/CD, Nginx, PM2, AWS |
| **ক্যারিয়ার/সফট স্কিল** | ফুল-স্ট্যাক ইঞ্জিনিয়ার ক্যারিয়ার রোডম্যাপ, মক ইন্টারভিউ প্রশ্ন, প্রজেক্ট আইডিয়া |

---

## ৫. উল্লেখযোগ্য পর্যবেক্ষণ / অসঙ্গতি

- **ডুপ্লিকেশন:** Redis checklist দুইবার আছে (Node.js সেকশনের ভেতরে + আলাদা "Redis Checklist" হিসেবে)। JavaScript ও Next.js/Node.js/React টপিকগুলোরও একাধিক সংস্করণ আছে — একটি রুট `README.md`-তে, আরেকটি সংশ্লিষ্ট ফোল্ডারের নিজস্ব `README.md`-তে (গঠন ও গভীরতা ভিন্ন)।
- **অসম্পূর্ণ সেকশন:** PHP-এর "02. Language Fundamentals" টপিক তালিকায় আছে কিন্তু লেখা হয়নি।
- **অব্যবহৃত অ্যাসেট:** `images/` ফোল্ডারের ৪টি ছবি এখনো কোথাও রেফারেন্স করা হয়নি।
- **Git স্ট্যাটাস:** `README.md`-তে বড় ধরনের uncommitted পরিবর্তন আছে (পুরনো PHP checklist ও TypeScript checklist মুছে ফেলা হচ্ছে), এবং `full-stack-engineer-guide.md` ও `generative-ai.md` — এই দুটি ফাইল এখনো git-এ কমিটই করা হয়নি।
- **ভাষার ধরন:** পুরো রিপো জুড়ে ইংরেজি প্রধান ভাষা, তবে ব্যক্তিগত/হাতে-কলমে নোটের জায়গাগুলোতে (`javascript/40 Days of JavaScript`, `React/started`, `React/react.md`) প্রচুর Banglish ও কিছুটা সরাসরি বাংলা ব্যবহার করা হয়েছে।

---

*এই brief.md ফাইলটি রিপোর সামগ্রিক কাঠামো ও কনটেন্ট বোঝার জন্য তৈরি করা হয়েছে। বিস্তারিত টপিক-ভিত্তিক কনটেন্টের জন্য সংশ্লিষ্ট ফাইলগুলো (`README.md`, `NextJS/README.md`, `NodeJS/README.md`, `React/README.md` ইত্যাদি) দেখুন।*
