// 📌 Loops in JavaScript

// 🧑‍🎓 Students Data 
const students = [
  { name: 'Rimon', score: 85, grade: 'A' },
  { name: 'Siam', score: 72, grade: 'B' },
  { name: 'Nadia', score: 90, grade: 'A+' },
  { name: 'Tisha', score: 60, grade: 'C' },
];

// ---------------------------------------
// 🔹 1. for loop → print all student names
// ---------------------------------------
console.log('1️⃣ Using for loop:');
for (let i = 0; i < students.length; i++) {
  console.log(`Student ${i + 1}: ${students[i].name}`);
}

// ---------------------------------------
// 🔹 2. while loop → calculate average score
// ---------------------------------------
console.log('\n2️⃣ Using while loop:');
let i = 0,
  total = 0;
while (i < students.length) {
  total += students[i].score;
  i++;
}
console.log('Average Score:', total / students.length);

// ---------------------------------------
// 🔹 3. do...while loop → give at least one message
// ---------------------------------------
console.log('\n3️⃣ Using do...while loop:');
let j = 0;
do {
  console.log(
    `${students[j].name} scored ${students[j].score} (${students[j].grade})`
  );
  j++;
} while (j < students.length);

// ---------------------------------------
// 🔹 4. for...in loop → iterate object properties (1st student only)
// ---------------------------------------
console.log('\n4️⃣ Using for...in loop:');
for (let key in students[0]) {
  console.log(`${key} → ${students[0][key]}`);
}

// ---------------------------------------
// 🔹 5. for...of loop → iterate values from students
// ---------------------------------------
console.log('\n5️⃣ Using for...of loop:');
for (let s of students) {
  console.log(`${s.name} got grade ${s.grade}`);
}
