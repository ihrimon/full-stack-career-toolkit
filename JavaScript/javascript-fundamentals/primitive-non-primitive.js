/* ------ Primitive Data Types ------ */
const name = 'Rimon';
let age = 23;
let isDeveloper = true;
let x; // Undefined
let y = null; // Null
const id = Symbol('id'); // Symbol (constant)
const bigNumber = 12345678901234567890n; // BigInt (constant)

// Copying primitive
let a = 10;
let b = a;
b = 20;
console.log(a, b); // a=10, b=20 (separate copy)

// Symbol
const sym1 = Symbol('id');
const sym2 = Symbol('id');
console.log(sym1 === sym2); // false (unique)

/* ------ Non-Primitive Data Types ------ */
const user = { name: 'Rimon', role: 'Developer' };
const colors = ['Red', 'Green', 'Blue'];
const greet = () => 'Hello Developer!';

// Copying non-primitive
const obj1 = { value: 100 };
const obj2 = obj1; // both reference same object
obj2.value = 200;

console.log(obj1.value); // 200
console.log(obj2.value); // 200
