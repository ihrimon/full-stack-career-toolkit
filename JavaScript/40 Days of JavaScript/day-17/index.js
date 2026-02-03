// DOM is not part of JavaScript, it is a Web API that allows JavaScript to interact with HTML and CSS to create dynamic web pages. The DOM represents the structure of a document as a tree of objects, where each object corresponds to a part of the document, such as an element, attribute, or text.

/**
 * What is DOM?
 * DOM stands for Document Object Model. It is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as a tree of nodes, where each node is an object representing a part of the document.
 * DOM types:
 * 1. Document: The entire HTML or XML document.
 * 2. Element: An HTML or XML element.
 * 3. Attribute: An attribute of an HTML or XML element.
 * 4. Text: The text content of an element or attribute.
 * 5. Comment: A comment in the HTML or XML document.
 * 6. DocumentType: The document type declaration.
 * 7. DocumentFragment: A minimal document object that has no parent.
 *
 * Node types in DOM:
 * 1. Document nodes: Represent the entire document (tree).
 * 2. Element nodes: Represent HTML elements.
 * 3. Attribute nodes: Represent attributes of HTML elements.
 * 4. Text nodes: Represent the text content of HTML elements.
 * 5. Comment nodes: Represent comments in the HTML document.
 * 6. DocumentType nodes: Represent the document type declaration.
 * 7. DocumentFragment nodes: Represent a minimal document object that has no parent.
 * 8. NodeList nodes: Represent a collection of nodes [array].
 * 9. NamedNodeMap nodes: Represent a collection of nodes that can be accessed by name.
 *
 * Accessing the DOM:
 * You can access the DOM using JavaScript through the global 'document' object. This object provides various methods and properties to interact with and manipulate the DOM.
 *
 */

// console.log(document);

// Accessing elements by their ID
const header = document.getElementById('header');
// console.log(header);

// Accessing elements by their class name
const items = document.getElementsByClassName('description');
// console.log(items);

[...items].forEach((item) => console.log(item));

// Accessing elements by their tag name
const pTags = document.getElementsByTagName('p');
// console.log(pTags);

// Accessing elements using querySelector (returns the first matching element)
const firstDescription = document.querySelector('.description');
console.log(firstDescription);

// Accessing elements using querySelectorAll (returns all matching elements)
const allDescriptions = document.querySelectorAll('.description');
// console.log(allDescriptions);

// Query selectorAll returns a NodeList, which can be iterated using forEach
allDescriptions.forEach((desc) => console.log(desc));

/**
 * Query Selector vs Query Selector All
 * 1. querySelector returns the first element that matches a specified CSS selector(s) in the document.
 * 2. querySelectorAll returns a static NodeList of all elements that match a specified CSS selector(s) in the document.
 * 3. querySelector is useful when you want to select a single element, while querySelectorAll is useful when you want to select multiple elements.
 * 4. The NodeList returned by querySelectorAll can be iterated using forEach, while the single element returned by querySelector cannot.
 * 5. querySelectorAll returns a static NodeList, meaning it does not update automatically when the document changes, while querySelector always returns the current first matching element.
 * 6. Both methods can be used with any valid CSS selector, making them versatile for selecting elements in the DOM.
 */

// DOM acess methods:
// 1. getElementById(id)
// 2. getElementsByClassName(className)
// 3. getElementsByTagName(tagName)
// 4. querySelector(cssSelector)
// 5. querySelectorAll(cssSelector)
// 6. getElementsByName(name)
// These methods allow you to access and manipulate elements in the DOM effectively.
