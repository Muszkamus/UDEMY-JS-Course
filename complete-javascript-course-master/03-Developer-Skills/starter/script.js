// Remember, we're gonna use strict mode in all scripts now!
"use strict";
//Main issue was not using Number, and number that was put in the measureKelvin- Value was a string
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "cels",
    value: Number(prompt("Degrees celsius:")),
  };

  console.log(measurement);
  // console.table(measurement); //shows everything in table format
  //console.log(measurement.value);
  //console.warn(measurement.value); //looks like a warning
  //console.error(measurement.value); // looks like an error

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) Identify a problem
console.log(measureKelvin());

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

const calcTempAmplitude = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    debugger; //Stop point
    if (curTemp > max) max = curTemp; //if the number is above , then it becomes new ma number, and it goes to the next numebr in array
    if (curTemp < min) min = curTemp; //same here but lowest
  }
  console.log(`Max: ${max}, Min: ${min}`);
  return max - min;
};

const amplitude = calcTempAmplitude([3, 5, 1], [9, 0, 5]); //t1, t2
console.log(amplitude);
