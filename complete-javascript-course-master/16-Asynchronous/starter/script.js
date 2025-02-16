'use strict';

// Creating a new Promise that simulates a lottery
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery is happening!'); // Logs message immediately

  setTimeout(function () {
    // Simulates a delay of 2 seconds before deciding the result
    if (Math.random() >= 0.5) {
      // Randomly decides if the user wins (50% chance)
      resolve('You win'); // If condition is met, the promise resolves successfully
    } else {
      reject(new Error('You lose')); // Otherwise, the promise rejects with an error
    }
  }, 2000); // 2-second delay before resolving or rejecting
});

// Handling the lotteryPromise result
lotteryPromise
  .then(res => console.log(res)) // If resolved (win), log "You win"
  .catch(err => console.error(err)); // If rejected (lose), log the error message

// Function that returns a Promise that resolves after a given number of seconds
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000); // Waits for the specified time before resolving
  });
};

// Chaining promises to create a delay sequence
wait(2) // Calls `wait` function to create a delay of 2 seconds
  .then(() => {
    console.log('I waited for 2 seconds'); // Logs after 2 seconds
    return wait(1); // Returns a new promise that resolves after 1 more second
  })
  .then(() => console.log('I waited for 1 second')); // Logs after an additional second
