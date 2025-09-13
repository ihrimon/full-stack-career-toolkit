/* ------ Arithmetic Operators ------ */
let a = 10;
let b = 3;
console.log('a + b =', a + b); // Addition:  a + b = 13
console.log('a - b =', a - b); // Subtraction:  a - b = 7
console.log('a * b =', a * b); // Multiplication:  a * b = 30
console.log('a / b =', a / b); // Division:  a / b = 3.3333
console.log('a % b =', a % b); // Modulus:  a % b = 1
console.log('a ** b =', a ** b); // Exponentiation:  a ** b = 1000

/* ------ Comparison Operators ------ */
console.log(a == '10'); // true → value equal
console.log(a === '10'); // false → value+type not equal
console.log(a != 5); // true → not equal
console.log(a !== 10); // false → strict not equal
console.log(a > b); // true
console.log(a < b); // false
console.log(a >= 10); // true
console.log(a <= 5); // false

/* ------ Logical Operators ------ */
let x = true,
  y = false;
console.log(x && y); // AND → false
console.log(x || y); // OR → true
console.log(!x); // NOT → false

/* ------ Bitwise Operators ------ */
let num1 = 5; // 0101
let num2 = 1; // 0001
console.log(num1 & num2); // AND → 1
console.log(num1 | num2); // OR → 5
console.log(num1 ^ num2); // XOR → 4
console.log(~num1); // NOT → -6
console.log(num1 << 1); // Left shift → 10
console.log(num1 >> 1); // Right shift → 2
console.log(num1 >>> 1); // Zero-fill right shift → 2

/* ------ Assignment Operators ------ */
let c = 10;
c += 5; // c = c + 5
console.log('c += 5:', c); // 15
c -= 3; // c = c - 3
console.log('c -= 3:', c); // 12
c *= 2; // c = c * 2
console.log('c *= 2:', c); // 24
c /= 4; // c = c / 4
console.log('c /= 4:', c); // 6
c %= 4; // c = c % 4
console.log('c %= 4:', c); // 2

/* ------ Ternary Operator ------ */
let age = 18;
let canVote = age >= 18 ? 'Yes' : 'No';
console.log('Can vote?', canVote);

/* ------ String Operator ------ */
let firstName = 'Imam';
let lastName = 'Hassan';
console.log('Full Name:', firstName + ' ' + lastName);

/* ------ Type Operators ------ */
console.log('typeof firstName:', typeof firstName); // string
console.log('firstName instanceof String:', firstName instanceof String); // false (it's use for array/object)

/* ------ Unary Operators ------ */
let d = 5;
console.log('d++ =', d++); // 5 (then d=6)
console.log('++d =', ++d); // 7
console.log('d-- =', d--); // 7 (then d=6)
console.log('--d =', --d); // 5
console.log('+d =', +d); // 5
console.log('-d =', -d); // -5

/* ------ Relational Operators ------ */
console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 10); // true
console.log(10 <= 5); // false

/* ------ Optional Chaining ------ */
const user = { name: 'Rimon' };
console.log(user?.address?.city); // undefined (no error)

/* ------ Comma Operator ------ */
let value = (1 + 2, 3 + 4);
console.log(value); // 7

/* ------ Delete Operator ------ */
const userDelete = { name: 'Rimon', age: 23 };
delete userDelete.age;
console.log(userDelete); // { name: "Rimon" }

/* ------ Spread Operator ------ */
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2); // [1,2,3,4]

/* ------ Nullish Coalescing ------ */
let userName;
let defaultName = userName ?? 'Guest';
console.log(defaultName); // Guest
