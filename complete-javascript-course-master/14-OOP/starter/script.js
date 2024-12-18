'use strict';

function highAndLow(numbers) {
  const numArray = numbers.split(' ').map(Number);
  const max = Math.max(...numArray);
  const min = Math.min(...numArray);
  return `${max} ${min}`;
}

// Test cases
console.log(highAndLow('1 2 3 4 5')); // Output: "5 1"
