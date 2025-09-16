// 📌 Object Methods & Operations in JavaScript

// 🧑‍🎓 Example Student Object
const student = {
  name: 'Rimon',
  age: 23,
  grade: 'A+',
  subjects: ['Math', 'Physics', 'English'],
};

// 🔹 1. Object.keys → get all property names (keys)
console.log('Keys:', Object.keys(student)); // 👉 [ 'name', 'age', 'grade', 'subjects' ]

// 🔹 2. Object.values → get all property values
console.log('Values:', Object.values(student)); // 👉 [ 'Rimon', 23, 'A+', [ 'Math', 'Physics', 'English' ] ]

// 🔹 3. Object.entries → get key-value pairs as array
console.log('Entries:', Object.entries(student));
// 👉 [ [ 'name', 'Rimon' ], [ 'age', 23 ], [ 'grade', 'A+' ], [ 'subjects', [Array] ] ]

// 🔹 4. Object.assign → copy/merge objects
const extraInfo = { country: 'Bangladesh', isGraduated: true };
const merged = Object.assign({}, student, extraInfo);
console.log('Merged Object:', merged);

// 🔹 5. Object.freeze → freeze object (cannot add, remove, or modify properties)
Object.freeze(student);
student.age = 30; // ❌ ignored
console.log('After freeze age:', student.age); // 👉 23

// 🔹 6. Object.seal → seal object (values can change, but no add/remove)
const sealedObj = { x: 10, y: 20 };
Object.seal(sealedObj);
sealedObj.x = 50; // ✅ allowed
sealedObj.z = 100; // ❌ ignored
delete sealedObj.y; // ❌ not allowed
console.log('Sealed Object:', sealedObj); // 👉 { x: 50, y: 20 }

// 🔹 7. Object.create → create new object with prototype
const person = {
  greet: function () {
    return 'Hello ' + this.name;
  },
};
const newStudent = Object.create(person);
newStudent.name = 'Siam';
console.log('Create with prototype:', newStudent.greet()); // 👉 Hello Siam

// 🔹 8. Object.getOwnPropertyNames → list all property names
console.log('Property Names:', Object.getOwnPropertyNames(student));

// 🔹 9. Object.hasOwn → check if property exists
console.log('Has age:', Object.hasOwn(student, 'age')); // 👉 true
console.log('Has salary:', Object.hasOwn(student, 'salary')); // 👉 false

// 🔹 10. Object.fromEntries → convert entries to object
const entries = [
  ['brand', 'Apple'],
  ['model', 'iPhone 16'],
];
const phone = Object.fromEntries(entries);
console.log('Phone Object:', phone); // 👉 { brand: 'Apple', model: 'iPhone 16' }

// 🔹 11. Object.getPrototypeOf → get prototype of an object
console.log('Prototype of newStudent:', Object.getPrototypeOf(newStudent));

// 🔹 12. Object.defineProperty → define custom property
const car = {};
Object.defineProperty(car, 'brand', {
  value: 'Tesla',
  writable: false, // cannot be changed
});
console.log('Car:', car); // 👉 { brand: 'Tesla' }
car.brand = 'BMW'; // ❌ ignored
console.log('After change:', car.brand); // 👉 Tesla
