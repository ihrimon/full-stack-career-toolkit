// 📌 Numbers & Math Functions in JavaScript

// ---------------------------------------
// 🔹 1. Numbers in JavaScript
// ---------------------------------------
const intNum = 42; // Integer
const floatNum = 3.14; // Floating-point number
const expNum = 5e3; // 5000 (exponential notation 5 * 10^3 -> 5000)
const bigNum = 12345678901234567890n; // BigInt

// Special Numbers
console.log('Infinity:', 1 / 0);
console.log('-Infinity:', -1 / 0);
console.log('NaN (Not a Number):', 'Hello' * 5);

// Number methods
let num = 123.4567;
console.log('toFixed(2):', num.toFixed(2)); // "123.46" (string)
console.log('toPrecision(4):', num.toPrecision(4)); // "123.5"
console.log('toString():', num.toString()); // "123.4567"
console.log('Number.isInteger(10):', Number.isInteger(10)); // true
console.log('Number.isNaN(NaN):', Number.isNaN(NaN)); // true

// ---------------------------------------
// 🔹 2. Math Object
// ---------------------------------------

// Constants
console.log('PI:', Math.PI);
console.log('E:', Math.E);

// Rounding
console.log('Math.round(4.6):', Math.round(4.6)); // 5
console.log('Math.ceil(4.1):', Math.ceil(4.1)); // 5
console.log('Math.floor(4.9):', Math.floor(4.9)); // 4
console.log('Math.trunc(4.9):', Math.trunc(4.9)); // 4 (remove decimal)

// Power & Square Root
console.log('Math.pow(2, 3):', Math.pow(2, 3)); // 8
console.log('2 ** 3:', 2 ** 3); // 8 (ES6 way)
console.log('Math.sqrt(25):', Math.sqrt(25)); // 5

// Absolute & Sign
console.log('Math.abs(-10):', Math.abs(-10)); // 10
console.log('Math.sign(-5):', Math.sign(-5)); // -1
console.log('Math.sign(0):', Math.sign(0)); // 0
console.log('Math.sign(7):', Math.sign(7)); // 1

// Min & Max
console.log('Math.min(5, 2, 9):', Math.min(5, 2, 9)); // 2
console.log('Math.max(5, 2, 9):', Math.max(5, 2, 9)); // 9

// Random Numbers
console.log('Math.random():', Math.random()); // random between 0 and 1
console.log('Random 1-10:', Math.floor(Math.random() * 10) + 1);

// Trigonometry
console.log('Math.sin(0):', Math.sin(0)); // 0
console.log('Math.cos(Math.PI):', Math.cos(Math.PI)); // -1
console.log('Math.tan(Math.PI/4):', Math.tan(Math.PI / 4)); // ~1
