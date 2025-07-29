/*
When JavaScript runs your code, it goes through two main phases inside the Execution Context:
- Creation Phase 
- Execution Phase 


🧠 1. Creation Phase (Memory Allocation Phase)

- JavaScript scans the code first.
- Memory is allocated for variables and functions.
- Variables declared with var are hoisted and set to undefined.
- Functions are fully hoisted (entire function is available).
- let and const are also hoisted, but placed in a "Temporal Dead Zone" (TDZ), meaning they cannot be accessed until their actual declaration line.


🚀 2. Execution Phase (Code Execution Phase)

- The code is actually run line by line.
- Variable values are assigned.
- Functions are executed as needed.
 */


// Example code
console.log(a); // undefined (because of hoisting in creation phase)
var a = 10;

sayHello(); // Works because function is hoisted
function sayHello() {
  console.log("Hello from function");
}

console.log(b); // ReferenceError (TDZ for let)
let b = 20;



console.log(myVar);       // undefined (var is hoisted)
console.log(myFunc());    // Output: "Hello from function"

var myVar = 10;

function myFunc() {
  return "Hello from function";
}

let myLet = 20;           // Hoisted but not initialized
const myConst = 30;       // Hoisted but not initialized
