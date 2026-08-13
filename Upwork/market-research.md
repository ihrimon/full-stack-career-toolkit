# 📊 Market Research — নিজের Job Feed Audit থেকে পাওয়া বাস্তব ডেটা বিশ্লেষণ

> এই ফাইলটা [README.md](README.md)-এর ধাপ ২ ("Market Research — চাহিদা বোঝা")-এর বাস্তব প্রয়োগ। এখানে কোনো অনুমান নেই — সবকিছু নিজের হাতে লগ করা `Job_Feed_Audit.xlsx` এবং `Job_Feed_Audit_v2.xlsx` থেকে বিশ্লেষণ করে বের করা হয়েছে।

---

## 🗂️ ডেটা সোর্স

| ফাইল | কভার করে | ইউনিক জব | 
|---|---|---|
| `Job_Feed_Audit.xlsx` | ৯ ও ১২ আগস্ট, ২০২৬ | ৭৫টা |
| `Job_Feed_Audit_v2.xlsx` | ১২ ও ১৩ আগস্ট, ২০২৬ | ৭০টা |
| **মোট (ডুপ্লিকেট নেই)** | ৩ দিনের ডেটা | **১৪৫টা ইউনিক জব পোস্ট** |

⚠️ **গুরুত্বপূর্ণ পর্যবেক্ষণ:** ১৪৫টা রো-এর একটাতেও `Applied? = Yes` নেই। মানে এখন পর্যন্ত এটা বিশুদ্ধ **observation/market-snapshot ফেজ** — এখনো কোনো প্রপোজাল পাঠানো হয়নি। তাই README-এ বলা Win Rate / Interview Rate এখনো হিসাব করা যাচ্ছে না — এই মুহূর্তে যা পাওয়া যাচ্ছে সেটা শুধু **ডিমান্ড ও কম্পিটিশন সিগন্যাল**, "আপনি কোথায় জিতবেন" তার প্রমাণ না। পরের ধাপ স্পষ্ট: apply শুরু করে ফানেল ট্র্যাক করা।

---

## 1️⃣ পিলার-ভিত্তিক ভলিউম (কোথায় কত জব পাওয়া যাচ্ছে)

| পিলার | জব সংখ্যা | শতাংশ |
|---|---|---|
| **Frontend/Backend** | ৭৩ | ৫০% |
| **AI Integration** | ৩৩ | ২৩% |
| **Automation** | ২২ | ১৫% |
| **Agentic AI** | ১৪ | ১০% |
| **RAG** | ৩ | ২% |

> 💡 RAG-এর সংখ্যা খুবই কম দেখাচ্ছে, কিন্তু এর মানে এই না যে RAG-এর ডিমান্ড কম। নিচের স্কিল-বিশ্লেষণে দেখা যাচ্ছে "Retrieval Augmented Generation", "Vector Database", "pgvector" — এই স্কিলগুলো আসলে **AI Integration ও Agentic AI জবের ভেতরেই লুকিয়ে আছে** (client নিজে "RAG" কীওয়ার্ড ব্যবহার করে জব পোস্ট করে না, বরং "chatbot on our docs" বা "AI assistant with our data" এভাবে লেখে)। তাই RAG-কে standalone পিলার হিসেবে না খুঁজে AI Integration/Agentic AI-এর ভেতরের একটা **core skill** হিসেবে ট্র্যাক করা উচিত, এবং সামনের অডিটে RAG-স্পেসিফিক কীওয়ার্ড দিয়ে আলাদা সার্চ চালানো দরকার (`RAG pipeline`, `vector database developer`, `knowledge base chatbot`)।

---

## 2️⃣ পিলার-ভিত্তিক বাজেট ও পে রেঞ্জ

| পিলার | Hourly রেঞ্জ (গড়) | Fixed গড় (max) | Payment Verified | Avg Client Rating |
|---|---|---|---|---|
| **Agentic AI** | **$31–$63/hr** | $1,125 (max $2,000) | ৯৩% | ৪.৩৩ |
| **RAG** *(n=৩, ছোট sample)* | $22–$57/hr | ডেটা নেই | ১০০% | ৫.০০ |
| **AI Integration** | $25–$52/hr | $1,765 (max $9,999) | ৮৫% | ৪.৭০ |
| **Frontend/Backend** | $20–$43/hr | $1,272 (max $15,000) | ৮৫% | ৪.২৮ |
| **Automation** | $17–$40/hr | $957 (max $4,000) | ৯১% | ৪.৪২ |

**মূল ফাইন্ডিং:** README-এর অনুমান — "AI/Agent/RAG জবের বাজেট সাধারণ frontend/backend-এর চেয়ে বেশি" — বাস্তব ডেটায় **সরাসরি কনফার্ম হয়েছে**। Agentic AI-তে hourly গড় সবচেয়ে বেশি ($31–$63/hr), এবং Frontend/Backend-এ hourly গড় সবচেয়ে কম ($20–$43/hr)।

---

## 3️⃣ পিলার-ভিত্তিক কম্পিটিশন (গড় প্রপোজাল সংখ্যা)

| পিলার | গড় প্রপোজাল | Experience Level (Expert %) |
|---|---|---|
| Automation | **~৩১ (সবচেয়ে কম কম্পিটিশন)** | ৪১% Expert |
| Frontend/Backend | ~৪২ | ৪০% Expert |
| AI Integration | ~৪২ | ৫৮% Expert |
| Agentic AI | ~৪৭ (সবচেয়ে বেশি কম্পিটিশন) | **৬৪% Expert (সবচেয়ে বেশি)** |
| RAG *(n=৩)* | ~৫২ | মিশ্র |

> Agentic AI-তে পে সবচেয়ে বেশি, কিন্তু কম্পিটিশনও সবচেয়ে বেশি এবং জবের সংখ্যা কম (মাত্র ১৪টা) — এটা **হাই-রিওয়ার্ড, হাই-এফোর্ট** পিলার। Automation-এ উল্টো — কম্পিটিশন কম, পে মাঝারি — এটা **সহজ এন্ট্রি পয়েন্ট**, বিশেষ করে শুরুর দিকে প্রথম কিছু রিভিউ/JSS বানানোর জন্য।

---

## 4️⃣ 🎯 প্রাইমারি ফোকাস — কোন পিলারে সবচেয়ে বেশি গুরুত্ব দেবেন

যেহেতু এখনো Win Rate ডেটা নেই (apply শুরু হয়নি), শুধু ডিমান্ড+পে+কম্পিটিশন সিগন্যাল দিয়ে prioritize করা হলো:

1. **🥇 AI Integration** — সবচেয়ে ভালো ভলিউম+পে ব্যালেন্স। ৩৩টা জব (২য় সর্বোচ্চ), ভালো পে ($25–$52/hr, ফিক্সড গড় $1,765), ৫৮% Expert-লেভেল জব। **এটাই প্রাইমারি positioning হওয়া উচিত।**
2. **🥈 Agentic AI** — সর্বোচ্চ hourly রেট ($31–$63/hr) এবং সবচেয়ে বেশি Expert-স্কিউড (৬৪%) — এটা **সেকেন্ড specialized profile** বা "premium tier" পজিশনিং-এর জন্য আদর্শ, যদিও কম্পিটিশন বেশি ও ভলিউম কম।
3. **🥉 Automation** — সবচেয়ে কম কম্পিটিশন (গড় ৩১ প্রপোজাল) — শুরুর দিকে **সহজে জেতার সুযোগ**, JSS/রিভিউ বানানোর জন্য ভালো এন্ট্রি পয়েন্ট।
4. **Frontend/Backend** — সবচেয়ে বেশি ভলিউম (৭৩টা, মোট জবের অর্ধেক) কিন্তু সবচেয়ে কম পে ও সবচেয়ে বেশি Intermediate-লেভেল (৬০%) জব দিয়ে সয়লাব। এটাকে **primary না রেখে README-এর "২য় specialized profile" (traditional Full-Stack)** হিসেবে ব্যবহার করুন — ভলিউম/ব্যাকআপ কাজের সোর্স, কিন্তু positioning-এর মূল না।
5. **RAG** — sample এখনো ছোট (n=৩), স্বতন্ত্র পিলার না রেখে AI Integration ও Agentic AI পোর্টফোলিওর ভেতরে **core differentiator স্কিল** হিসেবে দেখান।

---

## 5️⃣ 🔧 সবচেয়ে বেশি চাওয়া স্কিল (Skills সেকশন সাজানোর জন্য ব্যবহার করুন)

১৪৫টা জবের "Skills Required" কলাম থেকে ফ্রিকোয়েন্সি বের করা হলো:

| র‍্যাঙ্ক | স্কিল | কতবার এসেছে |
|---|---|---|
| ১ | JavaScript | ৫৮ |
| ২ | React | ৫৬ |
| ৩ | API Integration | ৫২ |
| ৪ | Node.js | ৪৭ |
| ৫ | Python | ৩০ |
| ৬ | TypeScript | ২৮ |
| ৭ | Next.js | ২৭ |
| ৮ | AI Agent Development | ২৩ |
| ৯ | PostgreSQL | ১৭ |
| ১০ | AI App Development | ১৪ |
| ১১ | Automation | ১৩ |
| ১২ | Supabase | ১১ |
| ১৩ | Generative AI | ৮ |
| ১৪ | OpenAI API | ৭ |
| ১৫ | n8n | ৭ |
| ১৬ | MongoDB | ৭ |

> 💡 **README আপডেট করার মতো একটা গুরুত্বপূর্ণ ফাইন্ডিং:** README-এর Skills সেকশনে "MongoDB / PostgreSQL" একসাথে লেখা আছে, কিন্তু বাস্তব ডেটায় **PostgreSQL (১৭ বার) MongoDB (৭ বার)-এর চেয়ে ২.৫ গুণ বেশি চাওয়া হচ্ছে**, আর **Supabase (১১ বার)** আলাদাভাবে একটা শক্তিশালী ডিমান্ড হিসেবে উঠে এসেছে (যেটা README-এর current স্কিল লিস্টে নেইই)। তাই Skills সেকশনের অর্ডার এভাবে আপডেট করা উচিত: PostgreSQL ও Supabase-কে MongoDB-এর আগে রাখুন, এবং Supabase-কে আলাদা স্কিল হিসেবে যোগ করুন।

---

## 6️⃣ 🚩 বাস্তব ডেটা থেকে পাওয়া নতুন রেড ফ্ল্যাগ প্যাটার্ন (README-এ যা নেই)

README-এর Client Research checklist ভালো, কিন্তু নিজের ডেটায় একটা **নতুন, সূক্ষ্ম প্যাটার্ন** ধরা পড়েছে যেটা README-এ যোগ করা দরকার:

### "High-Volume Trap" — শুধু Total Spend দেখে বিভ্রান্ত হবেন না

১৪৫টা জবের ২০টাতে ক্লায়েন্টের "Total Jobs Posted" ১০০+ (অর্থাৎ তারা খুব ঘন ঘন জব পোস্ট করে)। এদের মধ্যে কিছু ক্লায়েন্টের Total Spend অনেক বড় দেখায় ($৪০K, $৯.৩K ইত্যাদি), কিন্তু আসল **Avg Hourly Rate Paid** চেক করলে দেখা যায় তারা আসলে সস্তা মাইক্রো-টাস্কের জন্য outsource করে:

| উদাহরণ | Total Jobs Posted | Total Spend | Avg Hourly Rate Paid | ইঙ্গিত |
|---|---|---|---|---|
| Claude Code & Make.com Integration | ৮৯০ | $৯.৩K | $১০/hr | "Entry level, lowest rates" লেখাই আছে জবে — high-ticket না |
| Voice AI Agent Developer | — | $৭.৭K (৮৯ জব/৭৪ hire জুড়ে) | $৫.৬৬/hr | টেকনিক্যালি জটিল কাজ, কিন্তু ক্লায়েন্টের real spending pattern সস্তা মাইক্রো-টাস্কের |
| Full-Stack AI Engineer (Healthcare, $৪৯৩K total spend) | ১৬৬ | **$৪৯৩K** | $২৯.০৬/hr | বড় স্পেন্ড, ভালো পে-ও — কিন্তু full-time রোলের অফার মাত্র $১,৫০০/মাস flat |

**বিপরীত উদাহরণ (আসল ভালো ক্লায়েন্ট):** "AI Video Pipeline Builder" জবে ক্লায়েন্টের Total Spend $৭৫K, Avg Hourly Rate Paid **$৩০.৫০/hr** (genuinely ভালো পে), ৫.০/৪৫ রিভিউ, ১৩ বছরের পুরনো অ্যাকাউন্ট — এটা আসল high-ticket ক্লায়েন্ট।

> ✅ **নতুন নিয়ম যোগ করুন Client Research Checklist-এ:** শুধু "Total Spend $10K+" দেখে satisfied হবেন না। সবসময় **"Client Avg Hourly Rate Paid"** ফিল্ড আলাদাভাবে চেক করুন — এটাই বলে দেয় ক্লায়েন্ট আসলে কী রেটে মানুষ hire করে অভ্যস্ত, শুধু কত টাকা খরচ করেছে সেটা না। বড় total spend কম রেটের বহু ছোট জব দিয়েও হতে পারে।

---

## 7️⃣ ✅ যা কনফার্ম হয়েছে (README-এর পরামর্শ সঠিক প্রমাণিত)

- **Contract-to-Hire পরীক্ষামূলক প্রথম ধাপ:** ১৪৫টার মধ্যে ৪৭টা (৩২%) জব explicitly "Contract-to-Hire" — মানে অনেক ক্লায়েন্টই ছোট trial দিয়ে শুরু করতে চায়। এটা README-এর "ছোট, discovery-focused milestone দিয়ে শুরু করুন" পরামর্শকেই সাপোর্ট করে।
- **AI/Agent জবে বেশি পে:** আগেই দেখানো হয়েছে, নিশ্চিত।
- **AI Integration/Agentic AI বেশি Expert-লেভেল স্কিউড:** যা বোঝায় এই পিলারে সিরিয়াস, senior-level ক্লায়েন্ট বেশি — জেনেরিক "entry-level" কম্পিটিশনের ঝামেলা কম।

---

## 8️⃣ 💼 পোর্টফোলিও/কেস-স্টাডির জন্য বাস্তব আইডিয়া (real job pattern থেকে)

README-এর ৫টা পিলার-ভিত্তিক পোর্টফোলিও আইডিয়া ভালো, কিন্তু এই অডিট থেকে পাওয়া **বাস্তব high-value job pattern**-গুলো আরও নির্দিষ্টভাবে কী বানাতে হবে তা দেখাচ্ছে:

### আইডিয়া A — "Next.js + Supabase + AI" SaaS Dashboard *(সবচেয়ে বেশি ম্যাচ করে বাস্তব জবের সাথে)*
একটা real জবে দেখা গেছে: React/TS + Supabase (RLS + Edge Functions) + Clerk (auth) + Stripe (billing) + LLM (Gemini/Claude/Groq) দিয়ে একটা production SaaS। আরেকটা জবে প্রায় হুবহু একই কম্বিনেশন (React 18/TS/Vite + Supabase + Stripe + Twilio + Gemini + pgvector RAG + ভয়েস tool-calling)। **এই স্ট্যাকটাই এখন market-এ সবচেয়ে বেশি চাওয়া কম্বিনেশন** — নিজের পোর্টফোলিওতে এভাবে একটা demo SaaS বানান: Next.js + Supabase (RLS/Edge Functions) + Clerk/Stripe + একটা RAG-based AI assistant feature।

### আইডিয়া B — "Real" Automation Pipeline, Template না
"AI Video Pipeline Builder" জবের ক্লায়েন্ট স্পষ্ট লিখেছে তারা "resold n8n templates" প্রত্যাখ্যান করে, এবং real published output + honest cost/time breakdown চায়। **শিক্ষা:** পোর্টফোলিওতে জেনেরিক n8n টেমপ্লেট-ভিত্তিক automation না দেখিয়ে, একটা এন্ড-টু-এন্ড পাইপলাইন দেখান যেখানে input→processing→output পুরোটা নিজে কোড করা এবং real ব্যবহারযোগ্য ফলাফল আছে (স্ক্রিনশট/ভিডিও দিয়ে প্রমাণসহ)।

### আইডিয়া C — Voice/Conversational AI Agent + RAG স্কোরিং
একটা real জব ছিল investment firm-এর জন্য voice AI training platform (real-time কথোপকথন + session recording + RAG-based accuracy scoring)। এটা Agentic AI + RAG দুটো পিলারকেই একসাথে দেখানোর সুযোগ — একটা ছোট demo (যেমন mock interview practice bot বা customer-support voice agent) বানিয়ে RAG-based knowledge grounding দেখান।

### আইডিয়া D — "AI-Assisted Development" প্রসেস প্রমাণ
একাধিক জবে ক্লায়েন্ট স্পষ্টভাবে চেয়েছে এমন ডেভেলপার যে **Claude Code/Cursor/v0 দিয়ে দ্রুত বিল্ড করতে জানে** এবং AI-generated কোড কীভাবে review/verify করে সেটা বোঝে (এক ক্লায়েন্ট AI আউটপুটকে "জুনিয়র ডেভের PR" হিসেবে ট্রিট করার কথা বলেছে)। **শিক্ষা:** পোর্টফোলিও/Overview-তে শুধু "আমি AI ফিচার বানাই" না বলে, **কীভাবে AI-tool ব্যবহার করে দ্রুত ও নির্ভরযোগ্যভাবে ডেলিভার করেন** সেটাও দেখান — এটা এখন একটা আলাদা, স্পষ্ট চাহিদা।

---

## 9️⃣ পরবর্তী পদক্ষেপ (Action Items)

- [ ] **Apply শুরু করুন** — এখন পর্যন্ত ১৪৫টা জব লগ হয়েছে কিন্তু ০টাতে apply করা হয়েছে। প্রতিদিন Job Feed Audit চালিয়ে যাওয়ার পাশাপাশি প্রতিদিন ৫-১০টা highly relevant জবে apply করা শুরু করুন, যাতে আসল Win Rate ডেটা পাওয়া যায় (README ধাপ ২-এর ফানেল মেট্রিক্স)।
- [ ] Skills সেকশনে PostgreSQL ও Supabase-কে MongoDB-এর আগে আনুন, Supabase আলাদাভাবে যোগ করুন।
- [ ] Client Research Checklist-এ "Client Avg Hourly Rate Paid" চেক করার নিয়মটা explicitly যোগ করুন (উপরের সেকশন ৬ দেখুন)।
- [ ] পোর্টফোলিওতে অন্তত ১টা কেস স্টাডি বানান "আইডিয়া A" (Next.js + Supabase + RAG SaaS) প্যাটার্ন অনুসরণ করে — এটা এই মুহূর্তে বাজারে সবচেয়ে বেশি ম্যাচ করা কম্বিনেশন।
- [ ] RAG-স্পেসিফিক কীওয়ার্ড দিয়ে (`RAG pipeline`, `vector database developer`, `knowledge base chatbot`) আলাদা করে একটা অডিট রাউন্ড চালান যাতে RAG পিলারের real sample size বাড়ে।
- [ ] ৭-১৪ দিন পর, applied জবগুলো নিয়ে README-এর pivot summary টেবিল (Avg Budget, Avg Proposals, Interview Rate, Win Rate) বানিয়ে এই ফাইলে যোগ করুন।

---

## 🔟 🚀 প্রজেক্ট সাজেশন — বাস্তব ক্লায়েন্ট পেইন পয়েন্ট সমাধান করে Market-Ready/Job-Ready হওয়ার জন্য

> এই সেকশনটা সেকশন ৮-এর হাই-লেভেল পোর্টফোলিও আইডিয়াগুলোর চেয়ে আরও গভীরে যায় — এখানে ১৪৫টা জবের Job Description ও Notes ফিল্ড থেকে **পুনরাবৃত্ত পেইন-পয়েন্ট ক্লাস্টার** বের করে প্রতিটার জন্য একটা **বিল্ড-করার-মতো প্রজেক্ট স্পেক** দেওয়া হয়েছে। লক্ষ্য: এমন কয়েকটা প্রজেক্ট বানানো যেগুলো একসাথে প্রায় সব স্কিল/টুল (Next.js, Node.js/Python, Postgres/Supabase, RAG, Agent, Automation) কভার করে, এবং প্রতিটাই একটা *নির্দিষ্ট, চেনা যায় এমন বিজনেস সমস্যা* সমাধান করে — জেনেরিক "todo app" বা "CRUD demo" না।

### কেন Traditional Developer পোর্টফোলিও আর কাজ করবে না — ডেটা কী বলছে

Job Description-গুলোর ভাষায় বারবার একটা প্যাটার্ন এসেছে: ক্লায়েন্ট শুধু "কোড লিখে দাও" চায় না, বরং **"আমাদের ম্যানুয়াল/স্প্রেডশিট/বিক্ষিপ্ত প্রসেসটা একটা বুদ্ধিমান সিস্টেমে রূপান্তর করে দাও"** চায়। কীওয়ার্ড ফ্রিকোয়েন্সি (Job Description + Notes মিলিয়ে, ১৪৫টা জব):

| থিম | কতবার এসেছে | মানে |
|---|---|---|
| Payment/Billing (Stripe ইত্যাদি) | ৫৪ | প্রায় প্রতিটা SaaS প্রজেক্টেই monetization লজিক লাগবে |
| Workflow/Approval Process | ৩১ | ম্যানুয়াল/স্প্রেডশিট-নির্ভর প্রসেস ডিজিটাইজ করা সবচেয়ে কমন চাহিদা |
| Document Processing | ২৯ | PDF/DOCX আপলোড → এক্সট্র্যাক্ট/এনালাইজ করার চাহিদা ব্যাপক |
| Lead Management/CRM sync | ২৫ (lead) + ১৮ (CRM) | Marketing/Sales automation একটা বড় সেগমেন্ট |
| Dashboard/Reporting | ২৩ | ক্লায়েন্ট সবসময় visibility/live status চায় |
| Voice AI | ১৬ | শুধু text chatbot না, voice-ভিত্তিক এজেন্টের চাহিদাও বাড়ছে |
| Chatbot/Knowledge Search | ১৩ + ১৮ (search) | RAG-ভিত্তিক গ্রাউন্ডেড আনসার এখন "nice to have" না, expected |

এই প্যাটার্ন থেকেই নিচের ৫টা প্রজেক্ট ডিজাইন করা হয়েছে — প্রতিটাই কোনো না কোনো real job-এর সরাসরি প্রতিচ্ছবি।

---

### প্রজেক্ট ১ — Multi-Tenant RAG "Company Knowledge Brain" 🧠

**বাস্তব পেইন পয়েন্ট (সরাসরি রেফারেন্স):**
- *"company knowledge is scattered across drives... employees can ask natural-language questions and get answers grounded in their own company documents, complete with source citations and permission-aware access"* (AI SaaS Developer for MVP, RAG পিলার)
- *"businesses upload contracts/policies/documents... system extracts/chunks the text, analyzes it against configurable compliance rules... returns severity-graded findings referencing the exact document section"* (AI Compliance MVP, RAG পিলার)
- *"upload PDFs/DOCX/text, extract and chunk content, generate embeddings into pgvector/Pinecone, answer questions via RAG with conversational memory"* (AI-Powered Document Processing Platform, AI Integration পিলার)
- *"persistent AI memory... RAG/embeddings/semantic retrieval, longitudinal user profiles"* (VERITAS Custom GPT Platform, RAG পিলার)

**কী বানাবেন:** একটা multi-tenant SaaS যেখানে যেকোনো কোম্পানি নিজেদের ডকুমেন্ট (PDF/DOCX/policy) আপলোড করতে পারে, এবং তাদের কর্মীরা natural language-এ প্রশ্ন করে **সোর্স-সাইটেশনসহ গ্রাউন্ডেড উত্তর** পায় — কোনো হ্যালুসিনেশন ছাড়া, এবং permission অনুযায়ী শুধু নিজেদের ডেটার মধ্যে সীমাবদ্ধ থেকে।

**Scope (মিনিমাম viable ডেমো):**
- ডকুমেন্ট আপলোড → chunk → embed (pgvector দিয়ে Supabase/Postgres-এ, অথবা Pinecone)
- প্রশ্ন-উত্তর UI, প্রতিটা উত্তরে "কোন ডকুমেন্ট/কোন সেকশন থেকে এসেছে" — citation link
- Multi-tenant isolation (Supabase RLS দিয়ে) — একটা কোম্পানির ডেটা আরেকটা কোম্পানি দেখতে পাবে না
- Conversational memory (আগের প্রশ্নের কনটেক্সট মনে রাখা)

**টেক স্ট্যাক:** Next.js/React + Node.js/Python (FastAPI) + PostgreSQL/pgvector বা Supabase + OpenAI/Claude/Gemini embeddings + LangChain (ঐচ্ছিক)

**কভার করে:** RAG (প্রাইমারি), AI Integration, Backend, Frontend — ৪টা পিলার একসাথে
**কোন স্কিলগুলো প্রমাণ হয়:** PostgreSQL, Supabase, AI Agent Development, OpenAI API, RESTful API, Vector Database — সেকশন ৫-এর টপ স্কিল লিস্টের অর্ধেকের বেশি এই একটা প্রজেক্টেই কভার হয়ে যায়।

---

### প্রজেক্ট ২ — AI Lead Qualification & CRM Automation Pipeline 📥

**বাস্তব পেইন পয়েন্ট:**
- *"capture leads from Facebook Lead Ads, Typeform, and website forms; use Claude Code to qualify, score, and summarize each lead; enrich records via third-party APIs; sync contacts into GoHighLevel; route qualified leads to the right sales rep by rule"* (Claude Code & n8n AI Automation Developer, Automation পিলার)
- *"AI voice/chat sales and booking bots... no-code workflow automation connecting CRM, field/job management software, accounting, and WhatsApp"* (AI & Automation Specialist, Automation পিলার)

**কী বানাবেন:** একটা এন্ড-টু-এন্ড lead automation pipeline — ফর্ম/webhook থেকে লিড আসে, AI সেটা স্কোর/কোয়ালিফাই/সামারাইজ করে, CRM-এ sync হয়, এবং নিয়ম অনুযায়ী সঠিক সেলস-রেপের কাছে রাউট হয়ে যায় + Slack/email নোটিফিকেশন।

**Scope:**
- Webhook/form endpoint দিয়ে লিড ক্যাপচার (টাইপফর্ম/কাস্টম ফর্ম সিমুলেট করে)
- LLM দিয়ে lead qualification/scoring + এক-লাইনে সামারি জেনারেট
- একটা CRM-এর মতো ডেটাবেসে sync (নিজের ছোট CRM বানিয়ে বা HubSpot/Airtable API ব্যবহার করে)
- রুল-বেসড রাউটিং + Slack/email নোটিফিকেশন + একটা সাধারণ রিপোর্টিং ড্যাশবোর্ড

**টেক স্ট্যাক:** Node.js (Express) বা n8n workflow + Claude/OpenAI API + REST/webhook integration + Slack API + একটা ছোট Next.js ড্যাশবোর্ড

**কভার করে:** Automation (প্রাইমারি), Agentic AI (সিদ্ধান্ত নেওয়ার লজিক), Backend
**কোন স্কিলগুলো প্রমাণ হয়:** n8n, Automation, API Integration, AI Agent Development — এই প্রজেক্ট সরাসরি দুইটা real job-description-এর হুবহু কপি স্কোপ।

---

### প্রজেক্ট ৩ — Voice/Conversational AI Booking & Support Agent 🎙️

**বাস্তব পেইন পয়েন্ট:**
- *"employees rehearse investor pitches via real-time spoken conversation with an AI persona that listens, responds, and asks intelligent follow-up questions... session recording/transcripts and RAG-based accuracy scoring"* (Voice AI Agent Developer, Agentic AI পিলার — market research-এ সবচেয়ে বেশি hourly rate পাওয়া পিলার)
- *"AI voice/chat sales and booking bots (OpenAI/Claude/Botpress/Voiceflow)"* (AI & Automation Specialist, Automation পিলার)

**কী বানাবেন:** একটা voice/chat AI এজেন্ট যেটা রিয়েল-টাইমে কথা বলতে পারে, কাস্টমারের প্রশ্নের উত্তর নিজের নলেজ-বেস (প্রজেক্ট ১ রিইউজ করা যায়) থেকে গ্রাউন্ড করে দেয়, প্রয়োজনে ক্যালেন্ডারে বুকিং করে দেয়, এবং শেষে একটা সামারি/ট্রান্সক্রিপ্ট জেনারেট করে।

**Scope:**
- Real-time voice ইন্টারঅ্যাকশন (OpenAI Realtime API/ Twilio Voice-এর মতো টুল দিয়ে)
- RAG-grounded উত্তর (প্রজেক্ট ১-এর নলেজ-বেসের সাথে ইন্টিগ্রেট)
- একটা টুল-কল অ্যাকশন (যেমন ক্যালেন্ডার বুকিং বা ফলো-আপ ইমেইল পাঠানো) — এটাই "Agentic" অংশ
- সেশন রেকর্ডিং + auto-generated সামারি

**টেক স্ট্যাক:** React/Next.js + OpenAI Realtime/Twilio + RAG ব্যাকএন্ড (প্রজেক্ট ১ থেকে) + ক্যালেন্ডার API (Google Calendar/Calendly)

**কভার করে:** Agentic AI (প্রাইমারি — সবচেয়ে হাই-পে পিলার), RAG, Frontend
**কেন গুরুত্বপূর্ণ:** Agentic AI পিলারে সবচেয়ে বেশি hourly rate ($31-$63/hr, সেকশন ২ দেখুন) কিন্তু কম্পিটিশনও বেশি — এই ধরনের একটা সোফিস্টিকেটেড ডেমো থাকলে সেই কম্পিটিশনে টিকে থাকার প্রমাণ পাওয়া যায়।

---

### প্রজেক্ট ৪ — Operations/Onboarding Portal with Approval Workflow & Audit Trail 📋

**বাস্তব পেইন পয়েন্ট (এই পুরো ডেটাসেটের "BEST job seen" হিসেবে চিহ্নিত জব থেকে):**
- *"replacing an off-the-shelf CRM plus a large set of spreadsheets with a custom multi-step onboarding and approval portal... can't track staged, per-item onboarding status, audit history, or give users/managers live visibility"* (Senior Full-Stack Developer AI-First — Onboarding & Operations Platform, AI Integration পিলার, $25-$100/hr — এই ডেটাসেটের অন্যতম সেরা বাজেট)
- *"they currently juggle an aging custom application plus spreadsheets, email, and various third-party tools to handle dispatch, scheduling, field staff, billing/payroll"* (Custom Platform Development for Logistics, Frontend/Backend পিলার)

**কী বানাবেন:** একটা multi-step approval/workflow পোর্টাল — যেকোনো বিজনেসে (HR onboarding, logistics dispatch, vendor approval ইত্যাদি) প্রয়োগ করা যায় এমন জেনেরিক কিন্তু কনফিগারযোগ্য সিস্টেম।

**Scope:**
- মাল্টি-স্টেপ workflow বিল্ডার (স্টেজ-বাই-স্টেজ স্ট্যাটাস ট্র্যাকিং)
- রোল-বেসড ড্যাশবোর্ড (staff vs manager view)
- প্রতিটা অ্যাকশনের audit log/history
- স্টেজ পরিবর্তনে notification
- (ঐচ্ছিক AI লেয়ার) — একটা ফর্ম সাবমিশন এলে AI দিয়ে auto-categorize/flag করা (এটা যোগ করলে প্রজেক্টটা "AI-first" পজিশনিং-এর সাথে আরও ম্যাচ করবে)

**টেক স্ট্যাক:** Next.js + Supabase (RLS + Edge Functions) + PostgreSQL + Clerk (auth)

**কভার করে:** Frontend/Backend (প্রাইমারি — মার্কেটের সবচেয়ে বড় ভলিউম পিলার, ৫০% জব), AI Integration (ঐচ্ছিক লেয়ার)
**কেন গুরুত্বপূর্ণ:** এটা মার্কেটের সবচেয়ে বড় ভলিউম পিলারকে (Frontend/Backend) স্রেফ "আরেকটা CRUD app" না বানিয়ে বাস্তব বিজনেস-প্রসেস সমাধান হিসেবে দেখায় — যেটা এই ডেটাসেটে সবচেয়ে highly-rated (best) জবের সাথে হুবহু মিলে যায়।

---

### প্রজেক্ট ৫ — "AI-Assisted Legacy Refactor" কেস স্টাডি (প্রোডাক্ট না, প্রসেস প্রমাণ) 🔧

**বাস্তব পেইন পয়েন্ট (পুরো ডেটাসেট জুড়ে সবচেয়ে বেশি বারবার আসা চাহিদা):**
- *"safely review/validate AI-generated code while building new APIs/features and refactoring legacy components"* (AI-Assisted Software Modernization, AI Integration পিলার)
- *"treats AI output like a junior dev's PR, requires verifying/owning everything, explicitly names Claude Code as a fluency requirement"* (Full-Stack AI-Friendly Developer, $348K total spend ক্লায়েন্ট)
- *"own the risky parts — data model, auth, security, migration — rather than trusting AI blindly"* (Onboarding & Operations Platform, "BEST job seen")

**কী বানাবেন (এটা from-scratch বিল্ড না, একটা ডকুমেন্টেড প্রসেস):** নিজের আগের কোনো প্রজেক্ট (বা একটা ছোট ওপেন-সোর্স রিপো) নিয়ে Claude Code/Cursor দিয়ে একটা রিয়েল ফিচার অ্যাড বা রিফ্যাক্টর করুন, এবং পুরো প্রসেসটা স্বচ্ছভাবে ডকুমেন্ট করুন:
- AI কী জেনারেট করেছে vs আপনি কী রিভিউ করে বদলেছেন/বাতিল করেছেন (before/after diff)
- Security/auth/data-model-এর মতো "risky parts" আপনি নিজে কীভাবে যাচাই করেছেন তার একটা ছোট চেকলিস্ট
- একটা ২-৩ মিনিটের Loom ভিডিও যেখানে এই প্রসেসটা দেখানো হচ্ছে

**কেন গুরুত্বপূর্ণ:** এটা কোনো একটা পিলারের প্রজেক্ট না — এটা গোটা positioning-এর সবচেয়ে বড় প্রমাণ। ডেটাসেটে **একাধিক উচ্চ-বাজেট ক্লায়েন্ট explicitly এই ঠিক জিনিসটাই স্ক্রিনিং প্রশ্নে জিজ্ঞেস করছে** ("AI দিয়ে ভুল কিছু জেনারেট হয়েছিল এবং আপনি কীভাবে ধরেছিলেন তার একটা উদাহরণ দিন" — এই ধরনের প্রশ্ন সরাসরি একটা real জবে পাওয়া গেছে)। এই কেস-স্টাডি প্রোফাইল Overview এবং প্রপোজাল দুই জায়গাতেই রেফারেন্স হিসেবে ব্যবহার করা যাবে।

---

### 📐 কোন অর্ডারে বানাবেন (সময় বাঁচানোর জন্য)

```text
১. প্রজেক্ট ১ (RAG Knowledge Brain) — সবার আগে বানান, কারণ এটা reusable component
   হিসেবে প্রজেক্ট ৩-এ সরাসরি লাগবে, এবং একাই ৪টা real job pattern-এর সাথে ম্যাচ করে।

২. প্রজেক্ট ৫ (AI-Assisted Refactor কেস স্টাডি) — এটা সবচেয়ে কম সময়ে বানানো যায়
   (নতুন প্রজেক্ট না, existing কাজের উপর প্রসেস ডকুমেন্টেশন) — দ্রুত Overview/প্রপোজালে
   ব্যবহার শুরু করা যায়।

৩. প্রজেক্ট ৪ (Operations Portal) — Frontend/Backend পিলারের (সবচেয়ে বড় ভলিউম)
   জন্য একটা শক্ত, বিজনেস-ফোকাসড কেস স্টাডি হিসেবে।

৪. প্রজেক্ট ২ (Lead Automation Pipeline) — Automation পিলারের (সবচেয়ে কম কম্পিটিশন)
   জন্য দ্রুত জেতার সুযোগ তৈরি করতে।

৫. প্রজেক্ট ৩ (Voice AI Agent) — সবচেয়ে জটিল, তাই শেষে — কিন্তু Agentic AI পিলারের
   (সর্বোচ্চ পে) জন্য সবচেয়ে বেশি ইমপ্যাক্ট ফেলবে।
```

> 💡 এই ৫টা প্রজেক্ট একসাথে সেকশন ৪-এ বলা সব কয়টা প্রাইমারি/সেকেন্ডারি পিলার (AI Integration, Agentic AI, Automation, Frontend/Backend) এবং RAG-কে (সাপোর্টিং স্কিল হিসেবে) কভার করে, আর সেকশন ৫-এর টপ ১৬টা স্কিলের প্রায় সবকটাই কোনো না কোনো প্রজেক্টে ব্যবহৃত হয় — মানে প্রোফাইল, পোর্টফোলিও, এবং প্রপোজাল তিন জায়গাতেই এই একই সেট অফ প্রজেক্ট দিয়ে সামঞ্জস্যপূর্ণ পজিশনিং তৈরি করা যাবে।

---

*এই ফাইলটাও একটা living document — নতুন Job Feed Audit ডেটা এবং apply/interview/hire ফলাফল আসার সাথে সাথে এখানে আপডেট করে রাখুন।*
