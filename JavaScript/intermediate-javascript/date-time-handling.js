// 📌 Date & Time Handling in JavaScript

// 1️⃣ Creating Date Objects
const now = new Date(); // current date & time

const birthday = new Date('2000-05-15'); // specific date

const customDate = new Date(2025, 9, 1, 15, 30, 0); // Oct 1, 2025, 3:30 PM

// 2️⃣ Getting Date & Time Components
console.log('Year:', now.getFullYear());
console.log('Month (0-11):', now.getMonth());
console.log('Date:', now.getDate());
console.log('Day (0-6):', now.getDay());
console.log('Hours:', now.getHours());
console.log('Minutes:', now.getMinutes());
console.log('Seconds:', now.getSeconds());
console.log('Milliseconds:', now.getMilliseconds());

// 3️⃣ Setting / Updating Date & Time
let d = new Date();
d.setFullYear(2026);
d.setMonth(11); // December
d.setDate(25);
d.setHours(10);
d.setMinutes(30);
console.log('\nUpdated Date:', d);

// 4️⃣ Date Math
const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1); // add 1 day

const diff = tomorrow - today; // difference in milliseconds
console.log('Difference in ms:', diff);
console.log('Difference in hours:', diff / (1000 * 60 * 60));

// 5️⃣ Formatting Dates
console.log('toDateString():', now.toDateString());
console.log('toTimeString():', now.toTimeString());
console.log('toLocaleDateString():', now.toLocaleDateString('en-US'));
console.log('toLocaleTimeString():', now.toLocaleTimeString('en-US'));

// 6️⃣ Real-Life Example: Event Reminder
const events = [
  { name: 'Meeting', date: new Date(2025, 9, 1) },
  { name: 'Conference', date: new Date(2025, 9, 2) },
  { name: 'Birthday Party', date: new Date(2025, 9, 1) },
];

console.log("\n--- Today's Events ---");
events.forEach((event) => {
  if (
    event.date.getDate() === today.getDate() &&
    event.date.getMonth() === today.getMonth() &&
    event.date.getFullYear() === today.getFullYear()
  ) {
    console.log(`🎉 Event Today: ${event.name}`);
  }
});
