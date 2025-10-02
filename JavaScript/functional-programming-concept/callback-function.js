// ==============================
// 📌 Callback Function Examples
// ==============================

// 1️⃣ Named Callback (Normal Function)
function greet(name, callback) {
  console.log('Hello, ' + name);
  callback(); // calling the callback
}

function sayBye() {
  console.log('Goodbye!');
}

greet('Rimon', sayBye);
// Output:
// Hello, Rimon
// Goodbye!

// 2️⃣ Anonymous Callback
function processUserInput(name, callback) {
  console.log('User name:', name);
  callback(name);
}

processUserInput('Rimon', function (user) {
  console.log('Welcome,', user);
});
// Output:
// User name: Rimon
// Welcome, Rimon

// 3️⃣ Arrow Function Callback
const numbers = [1, 2, 3, 4];

numbers.forEach((num) => {
  console.log('Double:', num * 2);
});
// Output:
// Double: 2
// Double: 4
// Double: 6
// Double: 8

// 4️⃣ Using Built-in Array Methods (map, filter, find with callback)
const marks = [33, 55, 72, 90, 41];

const passed = marks.filter((mark) => mark >= 50); // callback inside filter
console.log('Passed Students Marks:', passed);
// Output: [55, 72, 90]

const doubled = marks.map((mark) => mark * 2); // callback inside map
console.log('Doubled Marks:', doubled);
// Output: [66, 110, 144, 180, 82]

const topper = marks.find((mark) => mark > 80); // callback inside find
console.log('Topper Mark:', topper);
// Output: 90

// 5️⃣ Asynchronous Callback (setTimeout)
console.log('Start');

setTimeout(() => {
  console.log('This runs after 2 seconds');
}, 2000);

console.log('End');
// Output:
// Start
// End
// This runs after 2 seconds

// 6️⃣ Real-life Async Callback (Simulation of API call)
function fakeApiCall(data, callback) {
  console.log('Fetching data...');

  setTimeout(() => {
    callback(`Data received: ${data}`);
  }, 1500);
}

fakeApiCall('User Info', (response) => {
  console.log(response);
});
// Output:
// Fetching data...
// Data received: User Info
