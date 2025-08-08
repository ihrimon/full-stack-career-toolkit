/**
 * Currying is a functional programming technique in which a function that takes multiple arguments is transformed into a sequence of functions, each taking a single argument and returning another function, until all arguments are provided.
 */

// Normal function
function add(a, b, c) {
  return a + b + c;
}
console.log(add(1, 2, 3)); // 6

// Curried version
function curriedAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

console.log(curriedAdd(1)(2)(3)); // 6
