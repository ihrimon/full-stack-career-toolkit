// 📌 JSON Example: Simulating API Response & Update

// 1️⃣ Simulating API response as JSON string
const apiResponse = `{
  "id": 101,
  "title": "Laptop",
  "price": 50000,
  "inStock": true,
  "tags": ["electronics", "computer", "tech"]
}`;

// 2️⃣ Convert JSON string to JavaScript object
const product = JSON.parse(apiResponse);

// Accessing properties
console.log(`Product Name: ${product.title}`);
console.log(`Price: ${product.price}`);
console.log(`In Stock: ${product.inStock}`);
console.log(`First Tag: ${product.tags[0]}`);

// 3️⃣ Update the object
product.price = 48000; // Update price
product.inStock = false; // Update stock status
product.tags.push('sale'); // Add a new tag

// 4️⃣ Convert back to JSON string to send to server
const updatedJSON = JSON.stringify(product);
console.log('\nUpdated JSON to send:', updatedJSON);
