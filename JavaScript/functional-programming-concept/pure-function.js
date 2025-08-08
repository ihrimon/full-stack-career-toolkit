/*
A Pure Function is a function that:

Always produces the same output for the same input

The output depends only on its input parameters.

Has no side effects

It doesn’t change or depend on anything outside the function’s scope.

No modification of global variables, no DOM changes, no API calls, no writing to files, etc.

*/

function add(a, b) {
  return a + b; // depends only on input
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 (always same)
