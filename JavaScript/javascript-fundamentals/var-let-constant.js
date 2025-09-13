/* ------ var example ------ */
function varExample() {
  if (true) {
    var x = 10; // function scoped
  }
  console.log('var:', x); // ✅ Accessible here (value: 10)
}

varExample();

/* ------ let example ------ */
function letExample() {
  if (true) {
    let y = 20; // block scoped
    console.log('let (inside block):', y); // ✅ let (inside block): 20
  }

  console.log('let (outside block):', y); // ❌ Error: y is not defined
}

letExample();

/* ------ const example ------ */
function constExample() {
  const z = 30;
  console.log(z); // ✅ 30

  z = 40; // ❌ Error: Assignment to constant variable

  const user = { name: 'Rimon', role: 'Developer' };

  user.role = 'Frontend Developer'; // ✅ allowed (content can change)
  console.log('const object:', user); // const object: { name: "Rimon", role: "Frontend Developer" }
}

constExample();
