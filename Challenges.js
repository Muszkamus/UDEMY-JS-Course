"use strict";

/*
Challenge: Unique Number Finder
Task: Create a program to work with an array of numbers. You’ll implement the following features:

Create an array: Start with an array of numbers that may include duplicates, e.g., [2, 3, 5, 3, 7, 9, 5, 2, 8, 9].
Find unique numbers: Write a function to return a new array containing only the numbers that appear exactly once in the original array.
Sort the unique numbers: Sort the array of unique numbers in ascending order.
Find the largest unique number: Write a function to return the largest number from the sorted unique numbers array.
Example
Input: [2, 3, 5, 3, 7, 9, 5, 2, 8, 9]
Output:
Unique numbers: [7, 8]
Sorted unique numbers: [7, 8]
Largest unique number: 8
Extra Challenge
Handle arrays with no unique numbers gracefully (e.g., return an empty array or an appropriate message like "No unique numbers found").
Make the solution flexible so it can handle any array of numbers.
How would you plan to tackle this? Can you describe the steps you’d take before starting the code? 😊
*/
const array = [2, 3, 5, 3, 7, 9, 5, 2, 8, 9];
const emptyArray = [];
const sortingNumber = function (numbers) {
  const intoString = numbers + "";
  const splitting = intoString.split(",");

  console.log(splitting);
  for (let i = 0; i < array.length; i++) {
    if (emptyArray.includes(array[i])) {
    } else {
      emptyArray.push(array[i]);
    }
  }
  console.log(emptyArray);
};

sortingNumber(array);
