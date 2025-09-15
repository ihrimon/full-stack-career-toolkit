// 📌 Hoisting in JavaScript Example

// 1️⃣ Function Declaration → hoisted
console.log(sum(5, 3)); // ✅ Output: 8

function sum(a, b) {
  return a + b;
}

// 2️⃣ Function Expression → NOT hoisted
try {
  console.log(multiply(4, 2)); // ❌ Error: multiply is not a function
} catch (err) {
  console.log('multiply Error:', err.message);
}

var multiply = function (x, y) {
  return x * y;
};

// 3️⃣ Variables with var → hoisted, initialized with undefined
console.log(myVar); // ✅ undefined
var myVar = 'I am var';

// 4️⃣ Variables with let/const → hoisted but in TDZ
try {
  console.log(myLet); // ❌ ReferenceError
} catch (err) {
  console.log('myLet Error:', err.message);
}
let myLet = 'I am let';

try {
  console.log(myConst); // ❌ ReferenceError
} catch (err) {
  console.log('myConst Error:', err.message);
}
const myConst = 'I am const';
