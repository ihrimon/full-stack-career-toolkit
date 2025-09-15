// 📌 Functions in JavaScript (Declaration, Expression, Arrow)

// 🧑‍🎓 Students Data
const students = [
  { name: 'Rimon', score: 85 },
  { name: 'Siam', score: 72 },
  { name: 'Nadia', score: 90 },
  { name: 'Tisha', score: 60 },
];

// ---------------------------------------
// 🔹 1. Function Declaration → reusable function
// ---------------------------------------
function calculateAverage(students) {
  let total = 0;
  for (let s of students) {
    total += s.score;
  }
  return total / students.length;
}
console.log('Average Score:', calculateAverage(students));

// ---------------------------------------
// 🔹 2. Function Expression → scoped helper
// ---------------------------------------
const getGrade = function (score) {
  if (score >= 80) return 'A';
  if (score >= 70) return 'B';
  if (score >= 60) return 'C';
  return 'F';
};
console.log('Grade of 72:', getGrade(72));

// ---------------------------------------
// 🔹 3. Arrow Function → compact inline usage
// ---------------------------------------
const studentReport = students.map(
  (s) => `${s.name} scored ${s.score} → Grade: ${getGrade(s.score)}`
);
console.log('\nStudent Report:');
console.log(studentReport.join('\n'));
