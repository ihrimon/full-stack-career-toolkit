/*
* In JavaScript (and many other languages), functions are treated as first-class citizens.
- That means functions can be:
- Assigned to variables
- Passed as arguments to other functions
- Returned from other functions
- This feature allows higher-order functions and is a core principle of functional programming.
*/

// * 1. ✅ Function as a variable
const greet = function(name) {
  return `Hello, ${name}!`;
};

console.log(greet("Rimon")); // Output: Hello, Rimon!


// * 2. ✅ Function as an argument 
function sum(a, b) {
  return a + b;
}
function operation(func, x, y) {
  const result = func(x, y);
  console.log("Result:", result);
}

operation(sum, 5, 3); // output: Resut: 8


// * 3. ✅ Function return another function
function createGreeter(greeting) {
  return function(name) {
    console.log(`${greeting}, ${name}!`);
  };
}

const sayHello = createGreeter("Hello");
const sayHi = createGreeter("Hi");

sayHello("Tanvir"); // output: Hello Tanvir
sayHi("Rina"); // output: Hi Rina