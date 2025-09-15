// 📌 Strings & Template Literals in JavaScript

let userRole = 'customer'; // admin / customer / guest
let orderAmount = 120; // total order amount
let paymentMethod = 'bkash'; // bkash / card / cod (cash on delivery)

// -----------------------------------
// 🔹 if / else → Discount system
// -----------------------------------
if (orderAmount >= 1000) {
  console.log('🎉 You got a 20% discount!');
} else if (orderAmount >= 500) {
  console.log('🎉 You got a 10% discount!');
} else {
  console.log('No discount available.');
}

// -----------------------------------
// 🔹 switch → Payment Method
// -----------------------------------
switch (paymentMethod) {
  case 'bkash':
    console.log('✅ Payment done via bKash.');
    break;
  case 'card':
    console.log('✅ Payment done via Card.');
    break;
  case 'cod':
    console.log('💵 Payment will be collected on delivery.');
    break;
  default:
    console.log('❌ Invalid payment method.');
}

// -----------------------------------
// 🔹 ternary → Role based access
// -----------------------------------
let accessMessage =
  userRole === 'admin'
    ? '🔑 Full access granted.'
    : userRole === 'customer'
    ? '🛒 Limited access: You can shop.'
    : '👤 Guest access: Please log in.';

console.log(accessMessage);
