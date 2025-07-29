/*
try/catch is a control flow structure in JavaScript used to handle runtime errors without crashing the program.
If an error occurs inside the try block, control is transferred to the catch block.

* control flow diagram
try {
   ✅ normal code execution
   ❌ if error occurs → go to catch
} catch (error) {
   🔁 handle the error
}
*/

function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero!");
    }
    return a / b;
  } catch (error) {
    return error.message;
  }
}

console.log(divide(10, 2)); // 5
console.log(divide(10, 0)); // Cannot divide by zero!


/*
* async-wait with try-catch
*/
async function loadData() {
  try {
    const res = await fetch('https://wrong.api.com/data');
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log('❌ API Error:', error.message);
  }
}
