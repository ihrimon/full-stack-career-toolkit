/*
async/await is syntactic sugar built on top of Promises that allows writing asynchronous code in a clean, readable, and sequential manner — just like synchronous code.
*/

/* synchronous style async code */
async function fullProcess() {
  try {
    const user = await getUser();
    const profile = await getProfile(user.id);
    const posts = await getPosts(user.id);
    console.log('All Done:', { user, profile, posts });
  } catch (error) {
    console.error('❌ Error:', error);
  }
}



/*
 * Error Handling with async/await
 */
async function fetchUserData() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users/1'
    );
    const data = await response.json();
    console.log('User:', data);
  } catch (error) {
    console.error('❌ Failed to fetch user:', error);
  } finally {
    console.log('✅ Done');
  }
}
