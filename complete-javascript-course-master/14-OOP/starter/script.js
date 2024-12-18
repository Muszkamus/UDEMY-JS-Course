'use strict';

function evenOrOdd(number) {
  for (let i = 0; i < number.length; i++)
    if (number[i] % 2 === 0) {
      console.log('lol');
    } else {
      console.log(i);
    }
}

evenOrOdd(2, 5, 1, 6, 7, 8, 9);
