// 📌 Shopping Cart Example with All Array Methods

let products = [
  { id: 1, name: 'Laptop', price: 800, qty: 1, category: 'electronics' },
  { id: 2, name: 'Phone', price: 500, qty: 2, category: 'electronics' },
  { id: 3, name: 'Shoes', price: 120, qty: 1, category: 'fashion' },
  { id: 4, name: 'Watch', price: 250, qty: 3, category: 'fashion' },
  { id: 5, name: 'Book', price: 30, qty: 5, category: 'education' },
];

// ---------------------------------------
// 🔹 1. Iteration Methods
// ---------------------------------------
// forEach → Print all product names
products.forEach((p) => console.log('📦', p.name));

// map → Create new array of product prices with tax
const pricesWithTax = products.map((p) => p.price * 1.1);
console.log('💰 Prices + Tax:', pricesWithTax);

// filter → Get only electronics
const electronics = products.filter((p) => p.category === 'electronics');
console.log('🔌 Electronics:', electronics);

// find → Find first product above $300
const expensiveItem = products.find((p) => p.price > 300);
console.log('💎 Expensive:', expensiveItem);

// some → Check if any product has qty > 4
console.log(
  '🔎 Some qty > 4?',
  products.some((p) => p.qty > 4)
);

// every → Check if all products have price > 10
console.log(
  '✅ Every price > 10?',
  products.every((p) => p.price > 10)
);

// reduce → Calculate total cart price
const totalPrice = products.reduce((acc, p) => acc + p.price * p.qty, 0);
console.log('🛒 Total:', totalPrice);

// ---------------------------------------
// 🔹 2. Adding / Removing
// ---------------------------------------

let cart = [];
cart.push(products[0]); // push
cart.push(products[1]);
console.log('Cart after push:', cart);

cart.pop(); // pop
console.log('Cart after pop:', cart);

cart.unshift(products[2]); // unshift
console.log('Cart after unshift:', cart);

cart.shift(); // shift
console.log('Cart after shift:', cart);

// splice → Replace 1st item
cart.splice(0, 1, products[3]);
console.log('Cart after splice:', cart);

// slice → Get part of products
const fashionItems = products.slice(2, 4);
console.log('👗 Fashion slice:', fashionItems);

// ---------------------------------------
// 🔹 3. Searching
// ---------------------------------------

console.log(
  '📍 Includes Phone?',
  products.map((p) => p.name).includes('Phone')
);

console.log('📍 IndexOf Shoes:', products.map((p) => p.name).indexOf('Shoes'));

console.log(
  '📍 LastIndexOf Watch:',
  ['Watch', 'Book', 'Watch'].lastIndexOf('Watch')
);

console.log(
  '📍 FindIndex age > 300:',
  products.findIndex((p) => p.price > 300)
);

// ---------------------------------------
// 🔹 4. merging / combining
// ---------------------------------------

const moreProducts = [
  { id: 6, name: 'Tablet', price: 400, qty: 1, category: 'electronics' },
];
const merged = products.concat(moreProducts);
console.log('🔗 Concat:', merged);

const nested = [1, [2, [3, 4]]];
console.log('🪜 Flat:', nested.flat(2));

console.log(
  '🪄 FlatMap:',
  [1, 2, 3].flatMap((x) => [x, x * 2])
);

// ---------------------------------------
// 🔹 5. Conversion
// ---------------------------------------

console.log('🔤 Join:', products.map((p) => p.name).join(', '));

console.log('📃 ToString:', products.map((p) => p.name).toString());

console.log('📥 Array.from:', Array.from('Cart'));

console.log('📥 Array.of:', Array.of('Pen', 'Pencil'));

// ---------------------------------------
// 🔹 6. Sorting / Reversing
// ---------------------------------------

const prices = [500, 30, 120, 250, 800];
prices.sort((a, b) => a - b);
console.log('⬆️ Sorted:', prices);

prices.reverse();
console.log('⬇️ Reverse:', prices);

// ---------------------------------------
// 🔹 7. Miscellaneous
// ---------------------------------------

console.log('🟦 Fill:', new Array(5).fill('Empty'));

let arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3);
console.log('📋 copyWithin:', arr);
  
