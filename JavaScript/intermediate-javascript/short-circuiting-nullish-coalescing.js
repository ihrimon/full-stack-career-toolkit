// 📌 Short-Circuiting & Nullish Coalescing in JavaScript

// ---------------------------------------------
// 🔹 1. Short-Circuiting with OR (||)
// ---------------------------------------------
// OR (||) → returns the first truthy value
let username = '' || 'Guest';
console.log('OR (||) Example:', username); // "Guest"

// ---------------------------------------------
// 🔹 2. Short-Circuiting with AND (&&)
// ---------------------------------------------
// AND (&&) → returns the first falsy value or last truthy
let isLoggedIn = true && 'Welcome User';
console.log('AND (&&) Example (true):', isLoggedIn); // "Welcome User"

let check = false && "You won't see this";
console.log('AND (&&) Example (false):', check); // false

// ---------------------------------------------
// 🔹 3. Nullish Coalescing (??)
// ---------------------------------------------
// Only works when value is null or undefined
let count = 0;

let result1 = count || 10;
console.log('Using OR (||):', result1); // 10 (0 is falsy)

let result2 = count ?? 10;
console.log('Using Nullish (??):', result2); // 0 (not null/undefined)

// ---------------------------------------------
// 🔹 4. Real-Life Example (User Profile)
// ---------------------------------------------
function getUserProfile(name, age, city) {
  // If name is empty, fallback to Guest
  let userName = name || 'Guest';

  // If age is null/undefined, fallback to 18
  let userAge = age ?? 18;

  // If city is missing, fallback to Unknown
  let userCity = city || 'Unknown';

  console.log(`👤 Name: ${userName}, Age: ${userAge}, City: ${userCity}`);
}

console.log('\nReal-Life Examples:');
getUserProfile('Rimon', 23, 'Dhaka');
// 👤 Name: Rimon, Age: 23, City: Dhaka

getUserProfile('', null, undefined);
// 👤 Name: Guest, Age: 18, City: Unknown
