'use strict';
/*
console.log(document.querySelector('.message').textContent); //Start guessing...

document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13; //Changing text to 13
document.querySelector('.score').textContent = 1;

document.querySelector('.guess').value = 0; // sets 0 in input
*/

/*
Challenge

Implement a gam rest functionality, so that the player can make a new guess! Here is how:
1. Select the element with the "Again" class and attach a click event hanler.
2. In the handler function, restore initial values of the score and number variables.
3. Restore the initial conditions of the message, number, score, and guess input field.
4. Also, restore the original background color (#222) and number width (15rem)

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1; //as the number would be from 0-19, adding +1 at the end would make 1-20
console.log(`Secret number is: ${secretNumber}`);
let score = 20;
let highscore = 0;
//Again button
document.querySelector('.btn.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  console.log(secretNumber);
});
//Check the correct number
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    //No Input
    document.querySelector('.message').textContent = 'No Number!!!';
  } else if (guess === secretNumber) {
    //Win
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347'; //CSS Manipulation can only be in String format
    document.querySelector('.number').style.width = '30rem'; //CSS Manipulation can only be in String format
    if (score > highscore) highscore = score; //
    document.querySelector('.highscore').textContent = highscore;
  } else if (guess > secretNumber) {
    if (score > 1) {
      //Too high
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent -= 1;
    } else {
      document.querySelector('.message').textContent = 'You lost!!!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      //Too low
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent -= 1;
    } else {
      document.querySelector('.message').textContent = 'You lost!!!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
