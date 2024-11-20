'use strict';

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).





GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

/* 1. Create an array 'events' of the different game events that happened (no duplicates)
 */
// So here ideally I will use set?
//But because its a map, we need to focus on the unique values.
//Check Maps iteration

const gameValues = gameEvents.values();
const events = [...new Set(gameValues)];
console.log(events);
console.log('--------------------');

/* 2. After the game has finished, is was found that the yellow card from minute 64 
was unfair. So remove this event from the game events log. */

//Remove the map
gameEvents.delete(64);
console.log(...gameEvents.entries());

/* 3. Print the following string to the console: 
"An event happened, on average, every 9 minutes"
 (keep in mind that a game has 90 minutes)
 */
console.log('--------------------');

const numberEvents = gameEvents.size;
const averageEvent = 90 / numberEvents;
console.log(`An event happened, on average, every ${averageEvent} minutes`);

/*
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
*/
console.log('--------------------');
for (const [minute, value] of gameEvents) {
  if (minute <= 45) console.log(`[FIRST HALF] ${minute}: ${value}`);
  if (minute > 45) console.log(`[SECOND HALF] ${minute}: ${value}`);
}

/*  TERNARY OPERATOR
console.log('--------------------');
for (const [minute, value] of gameEvents) {
  const half = minute <= 45 ? 'FIRST HALF' : 'SECOND HALF';
  console.log(`[${half}] ${minute}: ${value}`);
}
*/
