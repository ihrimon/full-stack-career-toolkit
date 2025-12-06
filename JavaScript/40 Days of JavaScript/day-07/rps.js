/**
 * The Rock 🪨, Paper 🧻, or Scissors ✂️ Game
 * This game will be played between the computer and human. Once Human will select Rock, Paper, or Scissors and in the next turn the computer will select Rock, Paper, or Scissors.
 * The Winner will be selected based on these rules:
 * - Rock can Break Scissors => Rock Wins
 * - Paper can wrap Rock => paper Wins
 * - Scissors can cut Paper => Scissors Wins
 * Ask the input from user and randomly select a computer selection to continue the game.
 */

// Assumptions:
// 1. We have to prompt the user to get their inputs.
// 2. The Computer's selection will be random.
// 3. We have to compare user and computer's choice
// 4. We need to announce the winner.
// 5. After the Winner announcement, we may want to ask the user to play again or quit from the game.


function startGame() {
    console.log("Welcome to the Rock Paper Scissors Game!")   
    const userChoicePromt = prompt('Please enter your choice (rock, paper, or scissors): ');

    const userChoice = userChoicePromt.toLowerCase();

    let computerChoice;

    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if(randomNumber === 1 ) {
        computerChoice = 'rock';
    } else if(randomNumber === 2 ) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }

    console.log('Computer Choice: ' + computerChoice);
    console.log('User Choice: ' + userChoice);

    if(
        userChoice === 'rock' && computerChoice === 'scissors' ||
        userChoice === 'paper' && computerChoice === 'rock' ||
        userChoice === 'scissors' && computerChoice === 'paper'
    ) {
        console.log('User wins!');
    } else if(
        userChoice === computerChoice
    ) {
        console.log('Game is a tie!');
    } else if (
      (userChoice === 'rock' && computerChoice === 'paper') ||
      (userChoice === 'paper' && computerChoice === 'scissors') ||
      (userChoice === 'scissors' && computerChoice === 'rock')
    ) {
        console.log('Computer wins!');
    } else {
      console.log('Invalid input! Please try again.');
    }

    const playAgainPromt = prompt('Do you want to play again? (yes/no): ');

    const playAgain = playAgainPromt ? playAgainPromt.toLowerCase() : 'no';

    if(playAgain === 'yes') {
        startGame();
    } else {
        console.log('Thank you for playing!');
    }

}

// start the game 
startGame();


/**
 * * Let us play a number guessing game.
 * You will ask user for a number between 1 to 10. Once user will enter a number, you will tell user if the entered number is lower or higher. With this information, user will change the number and finally guess the right number. You also need to show the number of attempts made by users to rach to this right guess.
 */
