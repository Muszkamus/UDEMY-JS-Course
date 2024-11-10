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

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; // Toggle active player
  currentScore = 0; // Reset current score
  player0El.classList.toggle('player--active'); // Switch active styling
  player1El.classList.toggle('player--active');
};

// Starting conditions

let playing, activePlayer, currentScore, scores;

// Rolling Dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generate random dice roll (1-6)
    let diceNumber = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice image for the rolled number
    diceEl.classList.remove('hidden'); // Show the dice
    diceEl.src = `dice-${diceNumber}.png`; // Update dice image to match roll

    // 3. Check for roll of 1
    if (diceNumber !== 1) {
      // If not a 1, add dice roll to current score and update active player's scor
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // If rolled 1, reset current score, switch active player, toggle active styling
      switchPlayer();
    }
  }
});
// Holding
btnHold.addEventListener('click', function () {
  if (playing) {
    //add current score to the main score to the active player
    scores[activePlayer] += currentScore;
    //scores[1] = score[1] + currentscore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. check if player's score is >=100

    if (scores[activePlayer] >= 100) {
      playing = false;
      //Finish the game
      diceEl.classList.add('hidden'); // Hides dice
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //Switch to the next player
      switchPlayer();
    }
  }
});

const init = function () {
  playing = true;
  //Function to reset everything
  score0El.textContent = 0; // Sets player 0's score to 0
  score1El.textContent = 0; // Sets player 1's score to 0
  diceEl.classList.add('hidden'); // Hides dice at the start
  scores = [0, 0]; // Holds scores for both players
  currentScore = 0; // Tracks current round score
  activePlayer = 0; // Tracks which player is active
  //
  //
  //
  //
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;

  currentScore = 0; // Reset current score

  player0El.classList.add('player--active'); // Switch active styling
  player1El.classList.remove('player--active');

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');

  document.querySelector(`.player--${0}`).classList.remove('player--winner');
  document.querySelector(`.player--${1}`).classList.remove('player--winner');
};

btnNew.addEventListener('click', init);

init();
