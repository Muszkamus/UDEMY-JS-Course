// Remember, we're gonna use strict mode in all scripts now!
"use strict";

//Problem
/* We work for a company building a smart home hermometer. 
Out most recent task: "given an array of tempertures of one day, calculate the temperature amplitude. 
Keep in mind that sometimes theer might be a sensor error"

*/

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// Understanding the problem --
// What is the amplitude? :Between the highest and lowest temp
//How to compute this?
// What is the sensor error? What to do

/* 2) Breaking up into sub-problems
How to ignore errors?
Find max value
Find min value
substract min from max (amplitude) and return it
*/

const calcTempAmplitude = function (temps) {
  let max = temps[0]; //first number in array
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp; //if the number is above , then it becomes new ma number, and it goes to the next numebr in array
    if (curTemp < min) min = curTemp; //same here but lowest
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
