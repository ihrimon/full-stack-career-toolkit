/*

Callback hell refers to a situation in JavaScript where multiple nested callbacks make code difficult to read and maintain.
It usually happens when multiple asynchronous operations are dependent on one another and are chained inside each other.


Do task 1
   └── On completion, do task 2
         └── On completion, do task 3
               └── On completion, do task 4



*/

loginUser('rimon', '123456', function (user) {
  console.log('User logged in:', user);

  loadProfile(user.id, function (profile) {
    console.log('Profile loaded:', profile);

    loadFriends(user.id, function (friends) {
      console.log('Friends loaded:', friends);

      startChat(friends[0], function (chat) {
        console.log('Chat started with:', friends[0].name);
      });
    });
  });
});


/**
 * Avoid Callback-hell using Promises (Better alternative)
 */

loginUser('rimon', '123456')
  .then((user) => loadProfile(user.id))
  .then((profile) => loadFriends(profile.userId))
  .then((friends) => startChat(friends[0]))
  .then((chat) => console.log('Chat started!'))
  .catch((error) => console.error('Error:', error));


// * Async/Await (Modern & clean):

async function startApp() {
  try {
    const user = await loginUser('rimon', '123456');
    const profile = await loadProfile(user.id);
    const friends = await loadFriends(profile.userId);
    const chat = await startChat(friends[0]);
    console.log('Chat started!', chat);
  } catch (error) {
    console.error('Something went wrong:', error);
  }
}

startApp();
