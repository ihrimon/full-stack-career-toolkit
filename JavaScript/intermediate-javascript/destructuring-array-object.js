// ============================
// 📌 Object & Array Destructuring
// ============================

// 🏪 Example: E-commerce Order Management

const order = {
  orderId: 'ORD12345',
  customer: {
    name: 'Imam Hassan Rimon',
    email: 'rimon@example.com',
    address: {
      city: 'Chittagong',
      country: 'Bangladesh',
    },
  },
  items: [
    { id: 1, name: 'Laptop', price: 800, quantity: 1 },
    { id: 2, name: 'Phone', price: 500, quantity: 2 },
    { id: 3, name: 'Headphone', price: 100, quantity: 3 },
  ],
  status: 'Processing',
};

// 🎯 Object Destructuring

// 1. Extract basic order details
const { orderId, status } = order;
console.log('Order ID:', orderId); // ORD12345
console.log('Status:', status); // Processing

// 2. Nested destructuring (customer details)
const {
  name,
  email,
  address: { city, country },
} = order.customer;
console.log('Customer:', name); // Imam Hassan Rimon
console.log('Email:', email); // rimon@example.com
console.log('Location:', city, country); // Chittagong Bangladesh

// 3. Default value (phone not available in customer object)
const { phone = 'Not Provided' } = order.customer;
console.log('Phone:', phone); // Not Provided

// 🎯 Array Destructuring

// 1. Extract the first two items from items array
const [firstItem, secondItem] = order.items;
console.log('First Item:', firstItem.name); // Laptop
console.log('Second Item:', secondItem.name); // Phone

// 2. Use rest operator to get remaining items
const [, , ...remaining] = order.items;
console.log(
  'Remaining Items:',
  remaining.map((p) => p.name)
); // ["Headphone"]

// 3. Nested destructuring inside array (extract properties directly)
const [{ name: productName, price }] = order.items;
console.log('Sample Product:', productName, 'Price:', price);
// Sample Product: Laptop Price: 800

// =========================
// 🎯 Real Use Case: Invoice
// =========================

// Calculate total amount using destructuring
let total = 0;
order.items.forEach(({ name, price, quantity }) => {
  const itemTotal = price * quantity;
  total += itemTotal;
  console.log(`${name} x ${quantity} = $${itemTotal}`);
});

console.log('Total Amount: $' + total);


