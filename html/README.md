# 🌐 HTML Mastery Roadmap 🧩

A complete guide to mastering **HTML** — from core fundamentals to the semantic and performance-critical tags that separate a junior markup writer from someone who actually understands the web platform.
Perfect for developers preparing for **interviews** or auditing a **production-level** codebase.

---

## 📑 Table of Contents

- [🌐 HTML Mastery Roadmap 🧩](#-html-mastery-roadmap-)
  - [📑 Table of Contents](#-table-of-contents)
  - [1. HTML Fundamentals](#1-html-fundamentals)
  - [2. Document Structure \& Meta Tags](#2-document-structure--meta-tags)
  - [3. Semantic HTML — Structural Tags](#3-semantic-html--structural-tags)
  - [4. Semantic HTML — Text-Level Tags](#4-semantic-html--text-level-tags)
  - [5. Forms \& Input Handling](#5-forms--input-handling)
  - [6. Media \& Embedding](#6-media--embedding)
  - [7. Links, Navigation \& Attributes](#7-links-navigation--attributes)
  - [8. Tables](#8-tables)
  - [9. ⚡ Performance-Critical Tags \& Attributes](#9--performance-critical-tags--attributes)
  - [10. ♿ Accessibility (a11y)](#10--accessibility-a11y)
  - [11. 🔍 SEO-Related Tags](#11--seo-related-tags)
  - [12. 🗑️ Deprecated / Legacy Tags to Avoid](#12-️-deprecated--legacy-tags-to-avoid)
  - [13. 🧩 Modern HTML5 Elements \& APIs](#13--modern-html5-elements--apis)
  - [14. Best Practices \& Interview Prep](#14-best-practices--interview-prep)
  - [💡 Interview Questions \& Answers](#-interview-questions--answers)

---

## 1. HTML Fundamentals

- [ ] What is HTML & what problem does it solve?
- [ ] HTML vs XHTML vs HTML5
- [ ] Elements vs Tags vs Attributes
- [ ] Block-level vs Inline elements
- [ ] Void / self-closing elements (`<br>`, `<img>`, `<input>`, `<hr>`)
- [ ] The DOM tree — how the browser turns HTML into objects
- [ ] `<!DOCTYPE html>` — why it matters (quirks mode vs standards mode)
- [ ] Comments (`<!-- -->`) and their impact on payload size

---

## 2. Document Structure & Meta Tags

- [ ] `<html lang="">` — why the `lang` attribute matters (a11y + SEO)
- [ ] `<head>` vs `<body>`
- [ ] `<meta charset="UTF-8">`
- [ ] `<meta name="viewport" content="width=device-width, initial-scale=1.0">` — required for responsive design
- [ ] `<meta name="description">` / `<meta name="keywords">` / `<meta name="author">`
- [ ] `<title>` — SEO + tab display
- [ ] Favicons (`<link rel="icon">`, multiple sizes, `apple-touch-icon`)

**Reference — a minimal, correct `<head>`:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="A concise, accurate page description for search engines." />
    <title>Sample Web Page</title>
    <link rel="icon" href="/favicon.ico" />
  </head>
  <body>
    <!-- Page content -->
  </body>
</html>
```

---

## 3. Semantic HTML — Structural Tags

- [ ] Why semantic HTML matters (SEO, accessibility, maintainability, screen readers)
- [ ] `<div>`/`<span>` (non-semantic) vs semantic alternatives
- [ ] Correct landmark structure for a typical page (`header` → `nav` → `main` → `footer`)

| Tag            | Purpose                                                                |
| -------------- | ----------------------------------------------------------------------- |
| `<header>`     | Introductory content or navigation for a page/section.                  |
| `<nav>`        | A block of primary navigation links.                                    |
| `<main>`       | The main, unique content of the document (only one per page).           |
| `<section>`    | A thematic grouping of content, usually with its own heading.           |
| `<article>`    | Self-contained content (blog post, news article, card) — reusable.      |
| `<aside>`      | Content tangentially related to the main content (sidebar, ads, notes). |
| `<footer>`     | Footer for its nearest sectioning ancestor or the page.                 |
| `<figure>`     | Groups media content with an optional caption.                          |
| `<figcaption>` | Caption for a `<figure>`.                                               |
| `<address>`    | Contact information for the author/owner of a document or article.      |
| `<details>`    | A disclosure widget the user can toggle open/closed.                    |
| `<summary>`    | The visible heading/summary for a `<details>` element.                  |
| `<dialog>`     | A native modal/non-modal dialog box.                                    |

---

## 4. Semantic HTML — Text-Level Tags

- [ ] `<strong>` (semantic importance) vs `<b>` (visual bold only)
- [ ] `<em>` (semantic emphasis) vs `<i>` (visual italic only)
- [ ] `<mark>` — highlighted/relevant text
- [ ] `<time datetime="">` — machine-readable dates/times
- [ ] `<cite>` — citing a creative work
- [ ] `<code>` / `<pre>` / `<kbd>` / `<samp>` — code and keyboard input
- [ ] `<abbr title="">` — abbreviations with a tooltip
- [ ] `<small>` — side comments / fine print (not just "smaller text")
- [ ] `<sub>` / `<sup>` — subscript / superscript
- [ ] `<blockquote cite="">` vs `<q>` — block vs inline quotations

> **Interview trap:** `<b>` and `<strong>` can render *identically*, but only `<strong>` tells screen readers and search engines the text is actually important. Same logic applies to `<i>` vs `<em>`.

---

## 5. Forms & Input Handling

- [ ] `<form>` — `action`, `method`, `enctype`
- [ ] `<label for="">` — always pair labels with inputs (a11y requirement)
- [ ] `<input>` types: `text`, `email`, `password`, `number`, `date`, `checkbox`, `radio`, `file`, `range`, `color`
- [ ] `<textarea>`, `<select>` / `<option>` / `<optgroup>`
- [ ] `<fieldset>` / `<legend>` — grouping related fields
- [ ] `<datalist>` — native autocomplete suggestions
- [ ] Native validation attributes: `required`, `pattern`, `min`/`max`, `minlength`/`maxlength`, `step`
- [ ] `autocomplete` and `autofocus` attributes
- [ ] Form submission without JS vs `preventDefault()` + `fetch`

---

## 6. Media & Embedding

- [ ] `<img src="" alt="">` — `alt` is not optional (a11y + SEO + graceful failure)
- [ ] `<picture>` + `<source media="">` — art-directed responsive images
- [ ] `srcset` + `sizes` — resolution-switching for responsive images
- [ ] `<audio controls>` / `<video controls>` + `<track kind="captions">`
- [ ] `<iframe>` — `sandbox`, `allow`, `title` (a11y requirement for iframes)
- [ ] Image maps (`<map>` + `<area>`)

---

## 7. Links, Navigation & Attributes

- [ ] `<a href="">` — internal, external, `mailto:`, `tel:`
- [ ] `target="_blank"` and why it **must** be paired with `rel="noopener noreferrer"`
- [ ] `rel` attribute values: `nofollow`, `noopener`, `noreferrer`, `sponsored`, `ugc`
- [ ] Anchor links / in-page navigation (`#section-id`)
- [ ] Global attributes: `id`, `class`, `data-*`, `title`, `tabindex`, `hidden`, `contenteditable`, `draggable`

---

## 8. Tables

- [ ] `<table>` / `<thead>` / `<tbody>` / `<tfoot>`
- [ ] `<tr>` / `<th scope="col|row">` / `<td>`
- [ ] `<caption>` — accessible table title
- [ ] `colspan` / `rowspan`
- [ ] Why tables should never be used for page layout

---

## 9. ⚡ Performance-Critical Tags & Attributes

The tags/attributes interviewers actually care about when they ask *"how would you make this page load faster?"*

- [ ] `<script defer>` — downloads in parallel, executes after HTML parsing (order preserved)
- [ ] `<script async>` — downloads in parallel, executes **immediately** when ready (order not guaranteed)
- [ ] Blocking `<script>` (no `defer`/`async`) — pauses HTML parsing entirely
- [ ] `loading="lazy"` on `<img>` / `<iframe>` — defers off-screen media
- [ ] `decoding="async"` on `<img>` — non-blocking image decode
- [ ] `fetchpriority="high" | "low"` — hint the browser's resource priority (e.g. LCP image)
- [ ] `<link rel="preload">` — fetch a critical resource early (fonts, hero image, key CSS/JS)
- [ ] `<link rel="prefetch">` — fetch a resource likely needed for the *next* navigation
- [ ] `<link rel="preconnect">` — open a connection (DNS + TLS) to a third-party origin early
- [ ] `<link rel="dns-prefetch">` — resolve DNS early (lighter than `preconnect`)
- [ ] `<link rel="stylesheet">` placement — render-blocking CSS and how to avoid it
- [ ] `srcset`/`sizes` and `<picture>` for right-sized images (avoid shipping oversized assets)
- [ ] Font loading: `font-display: swap`, `<link rel="preload" as="font" crossorigin>`
- [ ] Avoiding excessive DOM depth / nesting (reflow & style-recalculation cost)
- [ ] Why legacy tags like `<marquee>`/`<blink>` are performance & accessibility red flags

**Quick reference — resource hints:**

| Tag / Attribute | Effect | Use When |
|---|---|---|
| `rel="preload"` | Fetches immediately, high priority | Critical above-the-fold asset (LCP image, key font) |
| `rel="prefetch"` | Fetches at low priority, idle time | Resource needed on the *next* page/route |
| `rel="preconnect"` | Opens connection early (DNS+TCP+TLS) | Third-party origin you'll definitely request from |
| `rel="dns-prefetch"` | Resolves DNS only | Cheap fallback for older browsers / many origins |
| `loading="lazy"` | Delays fetch until near viewport | Below-the-fold images/iframes |
| `defer` | Parse HTML fully, then run script in order | Scripts that touch the DOM but aren't render-critical |
| `async` | Run script the instant it's downloaded | Independent scripts (analytics, ads) |

---

## 10. ♿ Accessibility (a11y)

- [ ] `alt` text on every meaningful `<img>` (empty `alt=""` for decorative images)
- [ ] ARIA roles/attributes (`role`, `aria-label`, `aria-hidden`, `aria-live`) — **only when semantic HTML isn't enough**
- [ ] Logical heading order (`h1` → `h2` → `h3`, never skipping levels)
- [ ] Keyboard navigability — every interactive element must be reachable via `Tab`
- [ ] Visible focus states (`:focus-visible`) — never `outline: none` without a replacement
- [ ] Labels correctly associated with form controls
- [ ] Landmark regions (`header`, `nav`, `main`, `footer`) for screen-reader navigation
- [ ] Color contrast is a design concern, not just a CSS one — but starts with correct markup

---

## 11. 🔍 SEO-Related Tags

- [ ] `<title>` and `<meta name="description">` — what shows up in search results
- [ ] `<link rel="canonical" href="">` — prevents duplicate-content penalties
- [ ] Open Graph tags (`og:title`, `og:description`, `og:image`) — social share previews
- [ ] Twitter Card meta tags
- [ ] `<meta name="robots" content="index, follow">` and `robots.txt`
- [ ] Structured data via `<script type="application/ld+json">` (JSON-LD)
- [ ] Semantic heading hierarchy as an SEO signal (search engines weight `<h1>`–`<h6>`)

---

## 12. 🗑️ Deprecated / Legacy Tags to Avoid

- [ ] `<marquee>` — scrolling text; replace with CSS animations
- [ ] `<blink>` — never use, removed from modern browsers
- [ ] `<font>` / `<center>` — use CSS instead of presentational tags
- [ ] `<frame>` / `<frameset>` — broken accessibility & SEO; use `<iframe>` if truly needed
- [ ] Inline event handler attributes (`onclick=""`) — prefer `addEventListener`
- [ ] Why "it renders fine" isn't the same as "it's correct"

---

## 13. 🧩 Modern HTML5 Elements & APIs

- [ ] `<details>` / `<summary>` — native accordion, no JS required
- [ ] `<dialog>` — native modal with `.showModal()`
- [ ] `<template>` — inert markup clone-able via JS, no initial render
- [ ] `<progress>` / `<meter>` — task progress vs a scalar measurement
- [ ] `<output>` — result of a calculation/user action
- [ ] `contenteditable` attribute
- [ ] Web Components basics: `<slot>`, Custom Elements, Shadow DOM (conceptual awareness)
- [ ] Drag & Drop API basics (`draggable`, `ondragstart`, `ondrop`)

---

## 14. Best Practices & Interview Prep

- [ ] Validate markup (W3C validator) — catches unclosed tags & nesting errors
- [ ] One `<h1>` per page, logical heading hierarchy
- [ ] Never nest block-level elements inside inline elements
- [ ] Keep styling in CSS, not in presentational HTML attributes
- [ ] Minimize unnecessary `<div>`/`<span>` wrapping ("div soup")
- [ ] Common interview questions: semantic vs non-semantic tags, `b` vs `strong`, block vs inline, `defer` vs `async`, how `alt` affects SEO/a11y, what a meta viewport tag does

---

## 💡 Interview Questions & Answers

Full Q&A (with explanations) has moved to its own file for quick access before an interview:

**[👉 html/interview-qa.md](./interview-qa.md)**

---

