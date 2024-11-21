'use strict';

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in const 1 = " and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
const 1 = "
 first_name
So"me_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
'use strict';

// Event Listener for Button
document.querySelector('button').addEventListener('click', function () {
  // Step 1: Get the input from the textarea
  const text = document.querySelector('textarea').value;

  // Step 2: Split input into lines by new lines
  const lines = text.split('\n');
  const emptyArray = [];

  // Step 3: Process each line
  for (const word of lines) {
    const lowerCase = word
      .toLowerCase()
      .trim()
      .replace('"', '') // Remove double quotes
      .replace(/ /g, '_'); // Replace spaces with underscores

    // Split into parts by underscore
    const split = lowerCase.split('_');

    // Convert to camelCase
    for (let i = 1; i < split.length; i++) {
      split[i] = split[i][0].toUpperCase() + split[i].slice(1); // Capitalize first letter of each part except the first
    }

    const camelCase = split.join('');
    emptyArray.push(camelCase);
  }

  // Step 4: Log each result with formatting
  for (let i = 0; i < emptyArray.length; i++) {
    console.log(emptyArray[i].padEnd(25, ' ') + `${'✅'.repeat(i + 1)}`);
  }
});
