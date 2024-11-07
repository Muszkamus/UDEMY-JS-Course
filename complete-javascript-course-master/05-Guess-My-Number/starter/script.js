'use strict';
/*
console.log(document.querySelector('.message').textContent); //Start guessing...

document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13; //Changing text to 13
document.querySelector('.score').textContent = 1;

document.querySelector('.guess').value = 0; // sets 0 in input
*/
const secretNumber = Math.trunc(Math.random() * 20) + 1; //as the number would be from 0-19, adding +1 at the end would make 1-20

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //Number is added as input is as a string by default
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Input';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    score++;
    document.querySelector('.score').textContent += 1; //it adds string (fix)
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high!';
    score--;
    document.querySelector('.score').textContent -= 1;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low!';
    score--;
    document.querySelector('.score').textContent -= 1;
  }
});
