/*
Function hoisting is a behavior in JavaScript where function declarations are moved (or "hoisted") to the top of their containing scope before code execution.

This means you can call a function declaration before it appears in the code.

* 🔑 Only function declarations are hoisted, not function expressions or arrow functions.
 
sayHello(); // Output: Hello World!

function sayHello() {
  console.log("Hello World!");
}


greet(); // ❌ Error: Cannot access 'greet' before initialization

const greet = function () {
  console.log("Hi there!");
};

 */

// 1️⃣ Calling function before its declaration (✅ works because of hoisting)
sayHello(); // Output: Hello from function declaration!

// 2️⃣ Accessing var before declaration (✅ undefined due to hoisting)
console.log(myVar); // Output: undefined

// 3️⃣ Accessing let before declaration (❌ ReferenceError)
try {
  console.log(myLet); // ❌ Error: Cannot access 'myLet' before initialization
} catch (error) {
  console.log("myLet Error:", error.message);
}

// 4️⃣ Accessing const before declaration (❌ ReferenceError)
try {
  console.log(myConst); // ❌ Error: Cannot access 'myConst' before initialization
} catch (error) {
  console.log("myConst Error:", error.message);
}

// 5️⃣ Calling function expression before declaration (❌ TypeError)
try {
  greet(); // ❌ Error: greet is not a function
} catch (error) {
  console.log("greet Error:", error.message);
}

// ✅ Function declaration (hoisted)
function sayHello() {
  console.log("Hello from function declaration!");
}

// ❌ Function expression (not hoisted as function)
var greet = function () {
  console.log("Hello from function expression!");
};

// ✅ Variable declarations
var myVar = "I am var";
let myLet = "I am let";
const myConst = "I am const";
