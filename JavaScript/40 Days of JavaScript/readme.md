## JavaScript History:

- 1995 - Brendan Eich creates JavaScript in 10 days at Netscape.
- 1996 - Microsoft releases JScript for internet Explorer
- 1997 - ECMAScript (ES1) is standardized
- 1999 - ES introduces Regex and exception handling.
- 2005 - AJX revolutionizes web interactivity
- 2006 - jQuery simplifies JavaScript
- 2009 - ES5 brings JSON support, map(), filter(), reduce(),
- 2010 - AngularJS popularizes front-end frameworks.
- 2013 - React.js changes UI development Widely.
- 2014 - ECMAScript updates become annual
- 2015 - ES6 (ECMAScript 2015) introduces let, const, classes, modules, and arrow functions.
- 2016 - Vue.js gains popularity as an alternative to React
- 2017 - ES8 adds async/await, making asynchronous coding easier.
- 2019 - ES10 introduces optional catch binding and flatMap()
- 2020 - Deno (by Ryan Dahl) challenges Node.js with better security
- 2021 - ES12 adds logical assignment operators (&&=, ||=, ??= )
- 2022 - ES13 introduces at() for arrays and top-level await.
- 2023 - ES14 brings Array grouping (groupBy())
- 2024 - React Server Component (RSC) revolutionize web app performance.
- 2025 - JavaScript continues evolving, integrating more AI-driven features and WebAssembly advancements.

<!-- Learning Lessons day - 01 -->

- async and defer attributes in script tag

Defer: The defer attribute is a boolean attribute. If the defer attribute is set, it specifies that the script is downloaded in parallel to parsing the page, and executed after the page has finished parsing. Note: The defer attribute is only for external scripts (should only be used if the src attribute is present).

Asycn: The async function declaration creates a binding of a new async function to a given name. The await keyword is permitted within the function body, enabling asynchronous, promise-based behavior to be written in a cleaner style and avoiding the need to explicitly configure promise chains.

<!-- Learning Lessons day - 02 -->
primitive = pass by value (value store in stack method)
non-primitive = pass by reference (value store in heap method)

* primitive, non-primitive
* primitive data type:
  - 'String' - Text values ('Hello')
  - 'Number' - Numeric values (24, 3.80)
  - 'Boolean' - True/False (true, false)
  - 'Undefined' - A variable declared but not assigned (let x)
  - 'Null' - Represents noting (let y = null)
  - 'BigInt' - Large numbers (BigInt(241545454152))
  - 'Symbol' - Unique identifiers (Symbol('id'))

* Non-primitives data types
  - 'Object' - Collection of key-value pairs (Complex/mixed up data types)
  - 'Array' - Ordered list of values (same data types)
  - 'Function' - Code that can be excuted


* naming convention of variables
  - the name must have digits or letters
  - the name can have ($, and, _)
  - The first character must not be a digit
  - No reserved keywords
  - case sensivite
  - use camelCase
  - the name should be human readable
  - the name shold match the cause.

* How JavaScript See code
  - Tokenizing
  - Parsing (with abstract syntax tree)
  - Interpreting

Source code --> TOKENIZING --> tokens --> PARSING --> ast (Abstract syntax tree) --> code generation --> machine code (INTERPRETING)