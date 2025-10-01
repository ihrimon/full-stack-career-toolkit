// ============================================
// 🛒 Real-Life Example: Shopping Cart (Spread and Rest operator)
// ============================================

// --------------------------
// 1️⃣ Spread Operator (...)
// --------------------------

// Suppose we have two product categories
const fruits = ['Apple', 'Mango', 'Banana'];
const vegetables = ['Carrot', 'Tomato'];

// Merge arrays (combine fruits + vegetables into cart)
const cart = [...fruits, ...vegetables];
console.log('🛒 Cart Items:', cart);
// ["Apple", "Mango", "Banana", "Carrot", "Tomato"]

// Clone & update product stock
const product = { id: 101, name: 'Laptop', price: 50000 };
const updatedProduct = { ...product, price: 48000, stock: 20 };

console.log('📦 Original Product:', product);
console.log('✅ Updated Product:', updatedProduct);
// Original price: 50000 → Updated price: 48000

// --------------------------
// 2️⃣ Rest Operator (...)
// --------------------------

// Function: calculate total of any number of products
function calculateBill(customer, ...prices) {
  const total = prices.reduce((sum, p) => sum + p, 0);
  return `💳 Customer: ${customer}, Total Bill: ${total}৳`;
}

console.log(calculateBill('Rimon', 500, 1200, 800));
// 💳 Customer: Rimon, Total Bill: 2500৳

// Array Destructuring with Rest
const [firstItem, secondItem, ...remainingItems] = cart;
console.log('🥇 First:', firstItem); // Apple
console.log('🥈 Second:', secondItem); // Mango
console.log('➡️ Remaining:', remainingItems); // ["Banana", "Carrot", "Tomato"]

// Object Destructuring with Rest
const { id, ...details } = updatedProduct;
console.log('🆔 Product ID:', id);
console.log('📃 Other Details:', details);
// { name: 'Laptop', price: 48000, stock: 20 }
