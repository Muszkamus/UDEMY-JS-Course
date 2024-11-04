Section 5

---

# Setting up Prettier and VS Code

---

1. Install prettier

2. define prettier

Preferences > Settings > (Search) "Default" > Default Formatter > Choose Prettier (esbenp.prettier-vscode).

(Also, change format on save in the settings)

Prettier will transform every single quotes to double quotes

It's possible to change prettier settings on prettier website

Defining snippets
Preferences > User Snippets
Open one of the files, but you can create new global snippets file. Name it, and you can define your own snippet, with example snippet below.

To consider

Settings Sync
TODO Highlight

---

# Installing Node.js and Setting Up a Dev Environment

---

### 1. LiveServer

### 2. Node JS.

node -v //(Check the version)
npm install live-server -g (Install live-server through node.js)
NPM - Node Package Manager (program to download tools)
-g (Means its global)

In Powershell, locate then html you want to live, and then type live-server in powershell

---

# ** Solving issues**

---

```js
//Problem
/\* We work for a company building a smart home hermometer.
Out most recent task: "given an array of tempertures of one day, calculate the temperature amplitude.
Keep in mind that sometimes theer might be a sensor error"

\*/

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

let max = temps[0]; //first number in array
let min = temps[0];
for (let i = 0; i < temps.length; i++) {
const curTemp = temps[i];
if (typeof curTemp !== "number") continue;
if (curTemp > max) max = curTemp; //if the number is above , then it becomes new ma number, and it goes to the next numebr in array
if (curTemp < min) min = curTemp; //same here but lowest
}
console.log(`Max: ${max}, Min: ${min}`);
return max - min;
};

const amplitude = calcTempAmplitude([3, 5, 1], [9, 0, 5]); //t1, t2
console.log(amplitude);

//Problem 2
//Function shouold now receive 2 arrays of temps

// 1) Understanding the problem
// - with 2 arrays, should we implement funcitonality twice?
//NO! Just merge two arrays
// - Merge 2 arrays
// 2) Breaking up into sub-problems
// - Merge 2 arrays
```

---

# Debugging (Fixing Errors)

---

**1st Step- Identify**

- During development
- Testing Software
- Users reports during production
- Context: browsers, users, etc.

**2nd Step - Find**

- Developer console ( simple code)
- Debugger (complex code)

**3rd Step - Fix**

- Replace wrong solution with the correct solution

**4th Step - Prevent**

- Searching for the same bug in similar code
- Writing tests using testing software

```js
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
```

### Breakpoints

```js
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// Understanding the problem --
// What is the amplitude? :Between the highest and lowest temp
//How to compute this?
// What is the sensor error? What to do

/_ 2) Breaking up into sub-problems
How to ignore errors?
Find max value
Find min value
substract min from max (amplitude) and return it
_/

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
```
