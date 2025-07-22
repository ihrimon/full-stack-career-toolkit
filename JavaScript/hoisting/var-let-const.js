/*
Hoisting is JavaScript's behavior where variable and function declarations are moved to the top of their scope before code execution.

* Variables declared with var are hoisted and initialized with undefined.

* Variables declared with let and const are hoisted but not initialized — they remain in the Temporal Dead Zone (TDZ) until their declaration line is executed.
*/

console.log(x); // Output: undefined (var is hoisted and initialized)
var x = 5;

console.log(y); // ReferenceError: Cannot access 'b' before initialization (let/const TDZ)
let y = 10;

console.log(z); // ReferenceError: Cannot access 'c' before initialization (let/const TDZ)
const z = 15;
