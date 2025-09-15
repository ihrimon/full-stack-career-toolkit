// 📌 Scope in JavaScript (Global, Local, Lexical, Block)

// 🌍 Global Scope
const shopName = 'SuperMart'; // accessible everywhere

function shoppingCart() {
  // 🟢 Local / Function Scope
  let cartTotal = 0; // only accessible inside this function
  let items = [];

  // 🔹 Lexical Scope: inner function can access outer function variables
  function addItem(itemName, price) {
    cartTotal += price; // accessing localVar
    items.push({ name: itemName, price }); // accessing localVar
    console.log(`${itemName} added! Cart total: $${cartTotal}`);
  }

  function applyDiscount(discount) {
    // 🔵 Block Scope
    if (discount > 0) {
      let discountAmount = (cartTotal * discount) / 100; // block-scoped
      cartTotal -= discountAmount;
      console.log(`Discount applied: $${discountAmount}`);
    }
    // console.log(discountAmount); // ❌ Error: block-scoped variable
  }

  // Using function expression
  const checkout = function () {
    console.log(`\n--- Checkout Summary ---`);
    console.log('Shop:', shopName); // accessing global variable
    console.log('Items:', items.map((i) => i.name).join(', '));
    console.log('Total Amount: $', cartTotal);
  };

  // Add items
  addItem('Apple', 5);
  addItem('Banana', 3);
  addItem('Milk', 7);

  // Apply discount
  applyDiscount(10);

  // Checkout
  checkout();
}

// Run the cart
shoppingCart();

// console.log(cartTotal); // ❌ Error: cartTotal is local to function
