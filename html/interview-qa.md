# 💡 HTML — Interview Questions & Answers

[⬅ Back to HTML Roadmap](./README.md)

> Quick-fire Q&A for last-minute review — paired with the full checklist in [`README.md`](./README.md).

<details>
<summary><b>What does HTML stand for and what is its purpose?</b></summary>

HTML (HyperText Markup Language) is the standard language for structuring web content. It defines the structure and meaning of a page (headings, paragraphs, links, media, forms) so that browsers can render it and assistive technologies can interpret it — CSS then handles presentation, and JavaScript handles behavior.

</details>

<details>
<summary><b>What is a marquee in HTML?</b></summary>

`<marquee>` was a legacy tag for auto-scrolling text/images. It's deprecated — use CSS `animation`/`transform` instead for the same effect with far better performance and accessibility.

</details>

<details>
<summary><b>Define an image map.</b></summary>

An image map (`<map>` + `<area>`) lets a single image contain multiple clickable regions, each linking to a different destination — useful for things like interactive diagrams or navigation graphics.

</details>

<details>
<summary><b>What is the difference between <code>&lt;b&gt;</code> and <code>&lt;strong&gt;</code>?</b></summary>

Both can render visually identical (bold), but they mean different things. `<b>` is purely presentational — bold with no semantic weight. `<strong>` tells the browser, screen readers, and search engines that the text is genuinely important. The same distinction applies to `<i>` (visual italic) vs `<em>` (semantic emphasis).

</details>

<details>
<summary><b>Why does the <code>alt</code> attribute on <code>&lt;img&gt;</code> matter?</b></summary>

`alt` provides a text alternative for an image: screen readers announce it, it displays if the image fails to load, and search engines use it to understand image content. Decorative images should use `alt=""` (empty, not omitted) so screen readers skip them silently.

</details>

<details>
<summary><b>What's the difference between <code>defer</code> and <code>async</code> on a <code>&lt;script&gt;</code> tag?</b></summary>

Both let the script download in parallel with HTML parsing instead of blocking it. `defer` waits until parsing is fully done and runs scripts **in order** — safe when a script depends on the DOM or on another script. `async` runs the script **the instant it's downloaded**, with no guaranteed order — fine for independent scripts like analytics.

</details>

<details>
<summary><b>What does the meta viewport tag do, and why is it required for responsive design?</b></summary>

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

Without it, mobile browsers render the page at a desktop-width virtual viewport (usually 980px) and then zoom out — making text tiny. This tag tells the browser to match the viewport to the device's actual screen width and set the initial zoom level, which is what makes CSS media queries and responsive layouts actually work on mobile.

</details>

<details>
<summary><b>Why is semantic HTML preferred over a "div soup" of generic elements?</b></summary>

Semantic tags (`<header>`, `<nav>`, `<main>`, `<article>`, etc.) communicate meaning, not just structure. This gives three concrete benefits a `<div>`-only page doesn't get for free: better SEO (search engines weight semantic landmarks), better accessibility (screen readers use them for page navigation), and better maintainability (a new developer can read the structure at a glance).

</details>
