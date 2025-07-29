/*
 * A Promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.

* The state of promise
- pending
- fulfilled
- rejected
 
 */

const myPromise = new Promise((resolve, reject) => {
  const success = true;

  setTimeout(() => {
    if (success) {
      resolve('✅ Success! Data received.');
    } else {
      reject('❌ Error! Something went wrong.');
    }
  }, 1000);
});

myPromise
  .then((result) => console.log(result)) // when resolved
  .catch((error) => console.log(error)) // when rejected
  .finally(() => console.log('🔁 Done'));

// * Promise Chaining
fetchUser()
  .then((user) => fetchPosts(user.id))
  .then((posts) => fetchComments(posts[0].id))
  .then((comments) => console.log('Comments:', comments))
  .catch((err) => console.error('Error:', err));

/*
 * Classificaiton of promise */

/* 
 * Promise.all()
    Executes multiple promises in parallel and waits until all are fulfilled.
    If any one fails, the entire Promise.all() rejects.
*/

const task1 = new Promise((resolve) =>
  setTimeout(() => resolve('🚀 Task 1 done'), 1000)
);
const task2 = new Promise((resolve) =>
  setTimeout(() => resolve('🔥 Task 2 done'), 1500)
);
const task3 = new Promise((resolve) =>
  setTimeout(() => resolve('🌊 Task 3 done'), 1200)
);

Promise.all([task1, task2, task3])
  .then((results) => console.log('All Done:', results))
  .catch((error) => console.error('One failed:', error));

/*
 * output: All Done: [ '🚀 Task 1 done', '🔥 Task 2 done', '🌊 Task 3 done' ]
 */

/* 
 * Promise.race()
    Executes multiple promises, and returns the result of the first one that settles (fulfilled or rejected).
*/

const fast = new Promise((resolve) =>
  setTimeout(() => resolve('🚀 Fast done'), 1000)
);
const slow = new Promise((resolve) =>
  setTimeout(() => resolve('🐢 Slow done'), 3000)
);

Promise.race([fast, slow]).then((result) => console.log(result)); // 🚀 Fast done

/*
 * output:  🚀 Fast done
 */

/* 
 * Promise.allSettled()
    Waits for all promises to settle (either resolved or rejected) and gives result for each.
*/

const p1 = Promise.resolve('✅ A');
const p2 = Promise.reject('❌ B');
const p3 = Promise.resolve('✅ C');

Promise.allSettled([p1, p2, p3]).then((results) => {
  results.forEach((result, index) => {
    console.log(
      `Promise ${index + 1}:`,
      result.status,
      result.value || result.reason
    );
  });
});

/*
 * output:  
Promise 1: fulfilled ✅ A
Promise 2: rejected ❌ B
Promise 3: fulfilled ✅ C

*/

/* 
 * Promise.any()
    Waits for the first promise to be fulfilled (ignores rejections).
    * If all promises reject, it throws an AggregateError
*/

const process1 = Promise.reject('💥 Fail 1');
const process2 = Promise.resolve('🎉 Success 2');
const process3 = Promise.resolve('✨ Success 3');

Promise.any([p1, p2, p3])
  .then((result) => console.log('First success:', result))
  .catch((error) => console.error('All failed:', error));


/*
 * output:  
First success: 🎉 Success 2
 */



function fetchData() {
  return new Promise((resolve, reject) => {
    const isSuccess = Math.random() > 0.5;

    setTimeout(() => {
      if (isSuccess) {
        resolve('📦 Data fetched successfully');
      } else {
        reject('⚠️ Failed to fetch data');
      }
    }, 1000);
  });
}

fetchData()
  .then((data) => console.log('✅ Then:', data))
  .catch((error) => console.error('❌ Catch:', error))
  .finally(() => console.log('🧹 Finally: Task complete'));
