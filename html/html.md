1. What does HTML stand for and what is its purpose?
   HTML or Hyper Text Markup Language is the standard language for creating web pages and applications. HTML5, the latest version as of 2022, introduces several new elements and attributes, elevating user experience and software application standards.

   HTML is responsible for structuring web content, ensuring accessibility, and guiding how web pages are visually presented. It remains the foundational structure for running nearly all web content.

   Core Functionalities:

   - Structuring Content: Tags like <header>, <footer>, and <section> divide content, streamlining its organization.
   - Embedding Media: HTML provides tags to incorporate multimedia such as images, audio, and video.
   - Form Handling: Interactive sections such as user input forms are defined with input and label tags.
   - Hyperlinks: Essential for navigation, hypertext links like <a> anchor content within or outside the webpage.
   - Accessibility Features: Semantic tags like <nav> and <article> not only structure data but also improve accessibility for users relying on screen readers.
   - Integration of Other Technologies: Can integrate with scripting languages like JavaScript and libraries and frameworks like Bootstrap for enhanced visual appeal.

2. Can you explain the purpose of meta tags in HTML?
   Meta tags provide metadata about a web page through information invisible to visitors but essential for search engines, social media, and other web technology. This metadata includes details such as the page's title, keywords, and description.

      <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="description" content="This is a sample web page with a concise description.">
       <meta name="keywords" content="HTML, meta tags, web design, SEO">
       <meta name="author" content="John Doe">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Sample Web Page</title>
   </head>
   <body>
       <!-- Page content goes here -->
   </body>
   </html>

3. What is the difference between b and strong tags?
   Bold vs. Strong
   The purpose of the <b> tag is to make the text bold, mainly for visual styling.
   The <strong> tag, on the other hand, semantically emphasizes the text, indicating its importance.

4. What are semantic HTML tags and why are they important?
   Semantic HTML tags provide both structure and meaning to web content. They allow crawlers, browsers, and even assistive technologies to understand content better and present it more effectively. This approach improves accessibility and search engine optimization, making pages easier to maintain and understand.

   Common Semantic Tags
   <p>: A paragraph.
   <h1> - <h6>: Headings, with 1 (highest) to 6 (lowest) levels.
   <ul> / <ol>: Unordered or ordered list.
   <li>: List item inside a list.
   <a>: Anchor, used for links.
   <img>: An image.
   <figure> / <figcaption>: For a figure such as an image, with accompanying caption.

# 📄 HTML Semantic Tags

Semantic tags describe the **meaning** of the content they wrap, making HTML more understandable for both browsers and developers.

## Common Semantic Tags

| Tag            | Description                                                            |
| -------------- | ---------------------------------------------------------------------- |
| `<header>`     | Defines the header section of a page or section.                       |
| `<footer>`     | Defines the footer for a page or section.                              |
| `<nav>`        | Defines navigation links.                                              |
| `<main>`       | Represents the main content of the document.                           |
| `<section>`    | Defines a thematic grouping of content.                                |
| `<h1>`–`<h6>`  | Headings, with `<h1>` being the most important.                        |
| `<article>`    | Represents self-contained content (e.g., blog post, news article).     |
| `<aside>`      | Defines content indirectly related to the main content (sidebar, ads). |
| `<p>`          | Paragraph text.                                                        |
| `<figure>`     | Groups media content with an optional `<figcaption>`.                  |
| `<address>`    | Represents contact information.                                        |
| `<figcaption>` | Caption for a `<figure>` element.                                      |
| `<summary>`    | Defines a summary for `<details>`.                                     |
| `<mark>`       | Highlights or marks text.                                              |
| `<time>`       | Represents a date/time.                                                |
| `<cite>`       | Cites a creative work (book, article, etc.).                           |
| `<code>`       | Represents a piece of computer code.                                   |
| `<em>`         | Emphasizes text (semantic italic).                                     |
| `<strong>`     | Important text (semantic bold).                                        |

5. What are HTML Attributes?
   Attributes are the properties that can be added to an HTML tag. These attributes change the way the tag behaves or is displayed. For example, a <img> tag has an src attribute, which you use to add the source from which the image should be displayed.

6. What is a marquee in HTML?
   Marquee is used for scrolling text on a web page. It automatically scrolls the image or text up, down, left, or right. You must use </marquee> tags to apply for a marquee.

7. How do you create a hyperlink in HTML?
   We use the anchor tag <a> to create a hyperlink in HTML that links one page to another. The hyperlink can be added to images, too.

8. Define an image map.
   An image map in HTML helps link different kinds of web pages using a single image. It can also be used to define shapes in the images used in the image mapping process.
