'use strict';
// Selecting elements
const player0El = document.querySelector('.player--0'); // Selects player 0 container
const player1El = document.querySelector('.player--1'); // Selects player 1 container
const score0El = document.querySelector('#score--0'); // Selects player 0's total score display (ID-based)
const score1El = document.getElementById('score--1'); // Selects player 1's total score display (ID-based, faster than querySelector)
const current0El = document.getElementById('current--0'); // Selects player 0's current score display
const current1El = document.getElementById('current--1'); // Selects player 1's current score display

const diceEl = document.querySelector('.dice'); // Dice image element
const btnNew = document.querySelector('.btn--new'); // "New Game" button
const btnRoll = document.querySelector('.btn--roll'); // "Roll Dice" button
const btnHold = document.querySelector('.btn.btn--hold'); // "Hold" button

// Starting conditions
score0El.textContent = 0; // Sets player 0's score to 0
score1El.textContent = 0; // Sets player 1's score to 0
diceEl.classList.add('hidden'); // Hides dice at the start
const scores = [0, 0]; // Holds scores for both players
let currentScore = 0; // Tracks current round score
let activePlayer = 0; // Tracks which player is active

// Rolling Dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generate random dice roll (1-6)
  let diceNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(diceNumber);

  // 2. Display dice image for the rolled number
  diceEl.classList.remove('hidden'); // Show the dice
  diceEl.src = `dice-${diceNumber}.png`; // Update dice image to match roll

  // 3. Check for roll of 1
  if (diceNumber !== 1) {
    // If not a 1, add dice roll to current score and update active player's score
    currentScore += diceNumber;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // If rolled 1, reset current score, switch active player, toggle active styling
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0; // Toggle active player
    currentScore = 0; // Reset current score
    player0El.classList.toggle('player--active'); // Switch active styling
    player1El.classList.toggle('player--active');
  }
});
// Holding
btnHold.addEventListener('click', function () {
  //add current score to the main score to the active player
  //2. check if player's score is >=100
  //Switch to the next player
});
