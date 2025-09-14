// 📌 Type Conversion & Coercion in JavaScript

// ---------------------------------------
// 🔹 1. Type Conversion (Explicit Conversion)
// ---------------------------------------

// String to Number
let str = '123';
let num1 = Number(str); // Using Number() → converts whole string
let num2 = parseInt(str); // Using parseInt() → converts integer only
let num3 = parseFloat('123.45'); // Using parseFloat() → keeps decimal part

// Number to String
let n = 456;
let str1 = String(n); // Using String()
let str2 = n.toString(); // Using toString()

// Boolean to Number
console.log('Boolean true to Number:', Number(true)); // 1
console.log('Boolean false to Number:', Number(false)); // 0

// Number to Boolean
console.log('0 to Boolean:', Boolean(0)); // false
console.log('1 to Boolean:', Boolean(1)); // true
console.log('100 to Boolean:', Boolean(100)); // true

// Date to Number
let date = new Date();
console.log('Date to Number:', Number(date)); // milliseconds since 1970

// Difference between Number() and parseInt()
console.log(Number('123abc')); // NaN (whole string invalid)
console.log(parseInt('123abc')); // 123 (parses until non-digit)

// Difference between String() and toString()
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
console.log(null.toString()); // ❌ Error (cannot call toString on null/undefined)

// ---------------------------------------
// 🔹 2. Type Coercion (Implicit Conversion)
// ---------------------------------------

// String + Number → String (Number coerced to String)
console.log('5' + 10); // "510"

// Number - String → Number (String coerced to Number)
console.log('20' - 5); // 15

// String * Number → Number
console.log('10' * 2); // 20

// String / Number → Number
console.log('100' / '10'); // 10

// Boolean + Number → Number
console.log(true + 5); // 6 (true = 1)

// Boolean + String → String
console.log(true + ' is true'); // "true is true"

// null with Number
console.log(null + 10); // 10 (null = 0)

// undefined with Number
console.log(undefined + 10); // NaN

// ---------------------------------------
// 🔹 3. Special Cases
// ---------------------------------------

// NaN means Not a Number
console.log(Number('Hello')); // NaN

// Equality checks with coercion
console.log(0 == false); // true (because 0 is coerced to false)
console.log(0 === false); // false (strict check, no coercion)

// String concatenation with other types
console.log('Value: ' + 100); // "Value: 100"

// Unary + operator (convert to number)
console.log(+'123'); // 123 (string to number)
console.log(+true); // 1
console.log(+false); // 0
