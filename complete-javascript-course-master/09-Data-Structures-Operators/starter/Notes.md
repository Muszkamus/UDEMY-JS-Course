# <center>**Section 1 - Fundamentals pt.1** </center>

---

let name = "name"; //Stores the value as a string, start with small letter
console.log(); //Print out console in the browser

let firstName = "Jonas";
console.log(firstName);

# 11. **DATA TYPES**

- Number = floating point numbers used for decimals and integer `let age = 23;*`
- String = Sequence of characters used for text ` let firstName = "Jonas";`
- Boolean = Logical type that can only be true or false `let fullage = true;`
- Undefined = Value taken by a variable that is not yet defined ` let children;`
- Null = Also mean empty value
- Symbol = Value that is unique and cannot be changed
- BigInt = Larger integers than the Number can hold

### **Comments**

in JS = // and /_ sample word _/
in HTML = <!-- sample word --!>

### **Type Of**

```js
let sample = true;
console.log(typeof sample); //Prints the type of data
```

# 12. **Declaring variables**

let = something that can be changed in the future code
const = something that cannot be changed later (Use by default)
var = used before 2015

# 13. **Basic Operators**

```js
***Assignment Operators
let x = 10 + 5; //The value is 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 =100
x++; // x = x + 1
x--; // x = x - 1

```

# 14. **Operator Precedence**

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

```js
x = y = 25 - 10 - 5; // x = y = 10
const averageage = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageage);
```

# 17. **Template literals**

```js
const firstName = 'Radek';
const job = 'Teacher';
const birthYear = 1997;
const year = 2024;

const radek =
  "I'm " + firstName + ', a  ' + (year - birthYear) + ' years old ' + job; //this one is crap tho
console.log(radek);

const radekNew = `I'm ${firstName} , a ${year - birthYear} year old ${job}`; //use backticks to use template string, above tab key
console.log(radekNew);
```

# 18. **If Else statetements**

```js
const age = 15;
if (age >= 18) {
  console.log(`You are old enough to drive`);
} else {
  const yearsleft = 18 - age;
  console.log(`You need ${yearsleft} more years to drive!`);
}
```

# 20. **Type conversion and Coercion**

```js
Type conversion is when we manually convert frrom one to another
Type coercion is automatically done by JS

//type conversion
const inputYear = `1991`;
console.log(inputYear); //This will be printed as string
console.log(Number(inputYear) + 18) //This will be printed as number

//type coercion
console.log("I am " + 23 + "years old"); //The number gets converted to a string due to plus sign
console.log("23" - "10" - 3); //The numbers(strings) get converted to number due to minus sign */
```

# 21. **Falsy values**

```js
0, '', undefined, null, NaN;

const money = 0; // Value here is false. It would work the same if it would be empty(Undefined)
if (money) {
  console.log(`Don't spend it all`); //This will be avoided because it is positive
} else {
  console.log(`You should get a job`); //Hence this line will be printed, because it is false
}
```

# 22. **Equality operators**

```js
const age = '18';
if (age === 18) console.log(`you just became an adult! (strict)`); //(Strict will only match the same type )In this case, 18 === 18 is true, anything else will be false
if (age == 18) console.log(`you just became an adult! (loose)`); //(Loose)In this case, 18 == 18 for number and string is true, anything else will be false

const favourite = Number(prompt('whats your fav number?')); //shows prompt window on the webpage
console.log(favourite);
console.log(typeof favourite);
if (favourite === 23) {
  console.log('WOWZA 23!');
} else if (favourite === 7) {
  console.log(`Wowza 7`);
} else {
  console.log(`The number neither 23 or 7`);
}

if (favourite !== 23) console.log(`Why not 23`); //!== means is not
```

# 24. **Logical operators**

```js
const hasDriverLicense = true;
const hasGoodVision = true;
console.log(hasDriverLicense && hasGoodVision); // AND
console.log(hasDriverLicense || hasGoodVision); // OR
console.log(!hasDriverLicense); // Swapping the value

const shouldDrive = hasDriverLicense && hasDriverLicense;

if (shouldDrive) {
  console.log(`Good to drive!`);
} else {
  `Not Good to drive`;
}

const isTired = false; // C
console.log(hasDriverLicense && hasGoodVision && !isTired); //has driving license, has good vision, is not tired

if (shouldDrive) {
  console.log(`Good to drive!`);
} else {
  `Not Good to drive`;
}
```

# 26. **Switch statetements**

```js
const day = 'monday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('MONDAAAY');
    break;
  case 'tuesday':
    console.log('TUESDAYYY');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('THUERSSSDAYY');
    break;
  case 'Friday':
    console.log('FRIDAAY FRIDAAY');
    break;
  case ' saturday':
  case 'sunday':
    console.log('Enjoy your SUNDAAAY');
    break;
  default:
    console.log('Not a valid day');
}
```

# 27. **Statements and expressions**

```js
expressions = 3+4, 1991, true && false && !false //They are more like values

Statements = if (23 > 10) { // They are more like sentences
  const str = "23 is bigger"
}
```

# 28. **The conditional (Ternary) Operator**

```js
// Define a constant variable 'age' and assign it the value 28
const age = 28;

// Use a ternary operator to determine the value of 'drink' based on 'age'
// If 'age' is 18 or older, 'drink' will be set to "Wine"
// Otherwise, 'drink' will be set to "Water"
const drink = age >= 18 ? 'Wine' : 'Water';

// Print the value of 'drink' to the console
// In this case, since age is 28 (which is greater than 18), it will output "Wine"
console.log(drink);
```

---

# <center> **Section 3- Fundamentals pt.2** </center>

---

# 32. **Activating strict mode**

---

```js
'use strict'; // Enforces strict mode, which catches common errors and enforces stricter syntax rules

// Declares a variable 'hasDriverLicense' and initializes it as false
let hasDriverLicense = false;
// Declares a constant 'passTest' and sets it to true
const passTest = true;

// Checks if 'passTest' is true, and if so, assigns true to 'hasDriverLicense'
if (passTest) hasDriverLicense = true;

// Checks if 'hasDriverLicense' is true, and if so, logs "I can drive" to the console
if (hasDriverLicense) console.log('I can drive');

// Tries to declare two constants with names 'interface' and 'private'
// In strict mode, using 'interface' and 'private' as variable names will cause an error
const interface = 'Audio'; // Error: 'interface' is a reserved word
const private = 534; // Error: 'private' is a reserved word
```

---

# 33. **Functions**

---

```js
// Declares a function named 'logger' with no parameters
function logger() {
  console.log('My name is Radek'); // Logs "My name is Radek" to the console
}

// Calling (or "invoking") the 'logger' function, which will execute its code
logger();

// Declares a function named 'fruitProcessor' with two parameters: 'apples' and 'oranges'
function fruitProcessor(apples, oranges) {
  // Creates a string using template literals to describe the juice with the number of apples and oranges
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice; // Returns the 'juice' string to wherever the function is called
}

// Calls 'fruitProcessor' with 5 apples and 0 oranges, and stores the result in 'appleJuice'
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice); // Logs the result "Juice with 5 apples and 0 oranges"

// Calls 'fruitProcessor' with 2 apples and 4 oranges, and stores the result in 'orangeJuice'
const orangeJuice = fruitProcessor(2, 4);
console.log(orangeJuice); // Logs the result "Juice with 2 apples and 4 oranges"
```

---

# 34. **Function Declarations vs. Expressions**

---

```js
// Function declaration
// Declares a function called 'calcAge1' that takes 'birthYear' as a parameter
function calcAge1(birthYear) {
  // Returns the result of subtracting 'birthYear' from 2024, which calculates age
  return 2024 - birthYear;
}

// Calls the 'calcAge1' function with 1997 as the argument and stores the result in 'age1'
const age1 = calcAge1(1997);

// Function expression
// Declares a constant 'calcAge2' and assigns it an anonymous function
// This function also takes 'birthYear' as a parameter and calculates age
const calcAge2 = function (birthYear) {
  // Returns the result of subtracting 'birthYear' from 2024
  return 2024 - birthYear;
};

// Calls the 'calcAge2' function with 1997 as the argument and stores the result in 'age2'
const age2 = calcAge2(1997);

// Logs the values of 'age1' and 'age2' to the console
console.log(age1, age2);
```

---

# 35. **Arrow Functions**

---

```js
// Function expression
// Defines a function named `calcAge2` using a function expression
const calcAge2 = function (birthYear) {
  return 2024 - birthYear; // Calculates the age by subtracting birth year from 2024
};

// Arrow function
// Defines a function named `calcAge3` using arrow function syntax
const calcAge3 = birthYear => 2024 - birthYear; // Calculates the age by subtracting birth year from 2024

// Calls `calcAge3` function with `1997` as the birth year and stores result in `age3`
const age3 = calcAge3(1997);

// Logs `age3` to the console, which is the calculated age
console.log(age3);

// Arrow function with multiple parameters
// Defines a function named `yearsToRetirement` that takes `birthYear` and `firstName` as parameters
const yearsToRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear; // Calculates age by subtracting birth year from 2024
  const retirement = 65 - age; // Calculates years left to retirement assuming retirement age is 65
  return `${firstName} retires in ${retirement} years`; // Returns a message with the years to retirement
};

// Calls `yearsToRetirement` with `1997` and `"Radek"` and logs the result to the console
console.log(yearsToRetirement(1997, 'Radek'));
```

---

# **36. Functions Calling Other Functions**

---

```js
// Function to cut fruit into pieces
function cutFruitPieces(fruit) {
  return fruit * 4; // Returns the number of pieces by multiplying input by 4
}

// -  Function to process fruits by calling another function
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples); // Calls cutFruitPieces to get apple pieces
  const orangePieces = cutFruitPieces(oranges); // Calls cutFruitPieces to get orange pieces

  // Creates a string describing the juice made with the number of apple and orange pieces
  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
  return juice; // Returns the juice description
}

// Calls fruitProcessor with 2 apples and 3 oranges, then logs the result
console.log(fruitProcessor(2, 3));
```

---

# **37. Reviewing Functions**

---

```js
// Function expression to calculate age based on birth year
const calcAge = function (birthYear) {
  return 2024 - birthYear; // Calculates age by subtracting birth year from 2024
};
// Function to calculate years until retirement or determine if already retired
const yearsToRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear); // Calls calcAge to get the person's current age
  const retirement = 65 - age; // Calculates years left until retirement, assuming retirement age is 65
  // Conditional to check if the person is yet to retire or has already retired
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`); // Logs years until retirement
    return retirement; // Returns the number of years left until retirement
  } else {
    console.log(`${firstName} has already retired!`); // Logs a message if the person has already retired
    return -1; // Returns -1 as an indicator of retirement
  }
};
// Calls yearsToRetirement for two different cases
yearsToRetirement(1940, 'Radek'); // Radek born in 1940, likely already retired
yearsToRetirement(2002, 'Amy'); // Amy born in 2002, has years left until retirement

// Function declaration - Functions that can be used before they’re declared in the code
// Function expression - Functions stored in variables, useful for one-line or quick functions
// Arrow Function - Great for a quick one-line functions.
```

---

# **39. Arrays**

---

```js
const friends = ['Michael', 'Steven', 'Peter']; //literal syntax
console.log(friends);

console.log(friends[0]); //prints fir object in the array
console.log(friends.length); //prints the length of the array
console.log(friends[friends.length - 1]); //prints last object, javascript expects expresion not a statement
friends[2] = 'Jay'; //Third array gets changed

console.log(friends);

const firstname = 'John';
const radek = [firstname, 'Smith', 2024 - 1991, 'Teacher', friends];
console.log(radek);

//Exercise
const calcAge = function (birthYear) {
  return 2024 - birthYear;
};
const years = [1990, 1967, 2002, 2021, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
console.log(age1, age2, age3);

const ages = [age1, age2, age3];
console.log(ages);
```

---

# **40. Basic array operations (Methods)**

---

```js
//Add elements

const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay'); //adds at the end
console.log(friends);
console.log(newLength);

friends.unshift('John'); //adds at the beginning
console.log(friends);

//Remove elements

friends.pop(); //removes last one
const popped = friends.pop();
console.log(popped); //shows which one was removed
console.log(friends);

friends.shift(); //removes first one
console.log(friends);

console.log(friends.indexOf('Steven')); //shows the position /index
console.log(friends.indexOf('Bob')); //It will pop -1 as it is not in the array

console.log(friends.includes('Steven')); //True as is it in the array
console.log(friends.includes('Bob')); //False as it is not in the array
```

---

# 42. **Introduction to Objects**

---

In JavaScript, arrays and objects are both data structures, but they are suited to different types of data:

Arrays are used for ordered data, where the order matters and each item is identified by its position (or index) in the list. Arrays work well for lists where the order and sequence of elements are important.

Objects are used for unordered or unstructured data. In objects, data is organized into key-value pairs, making it easy to access values by their keys rather than by position. The order of properties in an object doesn't matter, so objects provide flexibility in managing collections of related data without worrying about order.

```js
const objects = {
  firstName: 'Jon',
  lastName: 'Snow',
  age: 2024 - 1978,
  job: 'Killa',
  friends: ['Michael', 'Peter', 'Steven'],
};
```

This person object organizes information by descriptive keys, making it easy to access attributes like firstName or job directly by name.

---

# 43. **Dot. vs Bracket Notation**

---

```js
const objects = {
  firstName: 'Jon',
  lastName: 'Snow',
  age: 2024 - 1978,
  job: 'Killa',
  friends: ['Michael', 'Peter', 'Steven'],
};
```

Here, an object objects is defined with properties such as firstName, lastName, age, job, and friends. The age is calculated by subtracting 1978 from 2024, which will evaluate to 46. This object serves as a collection of information about a character.

```js
console.log(objects.firstName); // dot notation
console.log(objects['firstName']); // bracket notation
```

Both lines here retrieve the firstName property of the object in two different ways:

Dot notation (e.g., objects.firstName) directly accesses the property.
Bracket notation (e.g., objects["firstName"]) accesses the property by providing a string key, which can be particularly useful for dynamic keys.

```js
const nameKey = 'Name';
console.log(objects['first' + nameKey]); // prints 'Jon'
console.log(objects['last' + nameKey]); // causes an error
```

nameKey is a variable with the value "Name".
The expression 'first' + nameKey becomes "firstName", so objects["firstName"] retrieves and prints "Jon".

```js
const interestedIn = prompt(
  'What do you want to know?- firstName, lastName, age, job and friends'
);
```

The code prompts the user to enter a key (e.g., firstName, lastName, etc.). The response is saved in the interestedIn variable.

```js
if (objects[interestedIn]) {
  console.log(objects[interestedIn]);
} else {
  console.log('not on the list, wrong request');
}
```

This conditional checks if objects[interestedIn] exists:

If it does, it prints the value.
If not, it displays "not on the list, wrong request".
This is a way to handle user errors gracefully by checking if the input corresponds to a valid key.

```js
objects.location = 'Spain';
objects['Twitter'] = '@TWITTIEEE';
console.log(objects);
```

This part shows how to add new properties to an existing object:

objects.location = "Spain"; adds a location property.
objects["Twitter"] = "@TWITTIEEE"; adds a Twitter property using bracket notation.
In summary:

This code demonstrates how to define and manipulate objects in JavaScript.
It shows accessing properties in different ways, handling user input, and adding new properties.

---

# **44. Object Methods**

---

```js
const objects = {
  firstName: "Jonas",
  lastName: "Snow",
  birthYear: 1997,
  job: "Teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriverLicense: true,
```

Method: calcAge
This method calculates the person's age by subtracting their birth year from the current year (2024) and then assigns this value to a new property called age.

```js
calcAge: function () {
  this.age = 2024 - this.birthYear;  // "this" refers to the object itself
  return this.age;
},
```

The keyword this refers to the objects object itself.
This method calculates the age (2024 - this.birthYear) and assigns it to this.age.
It also returns the calculated age, which can be used if you call objects.calcAge() directly.

```js
getSummary: function () {
  console.log(`${this.firstName} is a ${this.age} ${this.job}, and he can${this.hasDriverLicense ? " drive" : "'t drive"}`);
}
```

String Interpolation: It uses template literals (backticks) to include variables directly inside the string.
Driving Status: The hasDriverLicense property is used in a conditional (? : ) expression. If hasDriverLicense is true, it outputs "drive"; if false, it outputs "'t drive".
this.age: It uses this.age, which was set by calcAge. Since you called calcAge() before calling getSummary, age already has a value.

```js
objects.calcAge();
objects.getSummary();
```

objects.calcAge(): This call calculates the age and stores it in objects.age.
objects.getSummary(): This call logs the summary message. Since calcAge() was called first, this.age is defined.

---

# **46. Iteration: The for loop 3 STEP METHOD**

---

```js
for (let rep = 1; rep <= 10; rep++) {
  console.log(`lifting weight repetition ${rep}`);
}
```

Breakdown of Each Part of the Loop:
**Initialization (let rep = 1;):**

Here, we're creating a variable called rep and setting it to 1.
This rep variable acts as our "counter" and will keep track of the number of repetitions.
The loop starts with rep set to 1.
**Condition (rep <= 10;):**

This is the condition that the loop checks before each repetition (iteration).
As long as rep is less than or equal to 10, the loop will keep running.
Once rep exceeds 10, the loop stops.
**Increment (rep++):**

After each loop iteration, rep is increased by 1 using rep++ (which is shorthand for rep = rep + 1).
This means that rep goes from 1 to 2, 3, and so on, until it reaches 10.
Inside the Loop

```js
console.log(`lifting weight repetition ${rep}`);
```

---

# **47. Looping Arrays, Breaking and Continuing**

---

```js
const objects = [
  'Jon',
  'Snow',
  2024 - 1978, // This calculates the number 46 (2024 - 1978)
  'Killa',
  ['Michael', 'Peter', 'Steven'], // An array of strings
  true, // A boolean value
];
```

Next, you create an empty array called types, which you’ll use to store the type of each item in objects.

1. Reading from the Array and Filling the types Array
   You use a for loop to iterate over each item in objects:

```js
for (let i = 0; i < objects.length; i++) {
  types.push(typeof objects[i]);
}
```

For each element in objects, you determine its type with **typeof objects[i].**
You add the type **(e.g., "string", "number", "object", "boolean") to the types array using types.push().**
By the end of the loop, types will contain the type of each element in objects in the same order:

**// Example output for types: ["string", "string", "number", "string", "object", "boolean"]**

3. Calculating Ages Based on Years Array
   You define another array years:

```js
const years = [1991, 2007, 1969, 2020];
```

Then, you create an empty array called ages.

```js
ages = [];
```

The following for loop calculates the age for each year in years:

```js
for (let i = 0; i < years.length; i++) {
  ages.push(2024 - years[i]);
}
```

For each year, the code calculates the age by subtracting the year from 2024 (the current year).
The result is added to the ages array.
After this loop, ages will contain the calculated ages:

**Example output for ages: [33, 17, 55, 4]**

1. Using continue and breakk
   The next part uses continue and break in loops to control when certain parts of the code execute.

### **Continue - Skipping Non-String Elements**

```js
console.log(`---Only Strings---`);
for (let i = 0; i < objects.length; i++) {
  if (typeof objects[i] !== `string`) continue; // Skip if not a string
  console.log(objects[i], typeof objects[i]);
}
```

This loop checks each element in objects. If the type is not string, the continue statement skips to the next iteration.
If it is a string, it prints the element and its type.
This section will output only the string elements.

### **Break - Stopping at the First Number**

```js
console.log(`---Break with Number---`);
for (let i = 0; i < objects.length; i++) {
  if (typeof objects[i] == `number`) break; // Stop if a number is found
  console.log(objects[i], typeof objects[i]);
}
```

This loop stops entirely when it encounters the first number in objects.
If it finds a non-number, it prints the element and its type.
Once it finds a number, break exits the loop, so any elements after the first number won’t be checked or printed.

---

# **48. Looping Backwards and Loops in Loops**

---

```js
const objects = [
  'Jon',
  'Snow',
  2024 - 1978, // This calculates the number 46 (2024 - 1978)
  'Killa',
  ['Michael', 'Peter', 'Steven'], // An array of strings
  true, // A boolean value
];
//first part= putting things backwards of the array
for (let i = objects.length - 1; i >= 0; i--) {
  console.log(i, objects[i]);
}

//second part= loop inside of loop
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---starting exercise--- ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`lifting weight repetition ${rep}`);
  }
}
```

---

# **49. While Loop**

---

###

```js
let rep = 1;
while (rep <= 10) {
  console.log(`rep ${rep}`);
  rep++;
}
```

This will print numbers from 0 to 4. The loop has:

An initialization (let i = 0)
A condition (i < 5)
An increment (i++)

**For Loop:** A for loop is generally used when you know in advance how many times you want to execute a block of code.
It's often used to iterate over a sequence (like a list, string, range, etc.) or when you have a set number of iterations.
The structure is straightforward, usually with an initialization, a condition, and an increment or decrement.

### **Random while loop**

```js
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice == 6) console.log('Loops finished');
}
```

**While Loop:** A while loop is generally used when the number of iterations isn't known upfront, and you want to repeat the block of code as long as a condition is true.
It continues executing until the specified condition becomes false.
With a while loop, you need to be careful to modify a variable in the loop body to avoid infinite loops.

---

# <center> **Section 5 - Developer Skills** </center>

---

# **51. Setting up Prettier and VS Code**

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

# **56. Installing Node.js and Setting Up a Dev Environment**

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

# **60. Debugging (Fixing Errors)**

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
    type: 'temp',
    unit: 'cels',
    value: Number(prompt('Degrees celsius:')),
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

---

# <center> **Section 6 - HTML and CSS Crash Course**

---

# Basic HTML Structure and Elements

Tag Description

```html
<h1> to <h6>	Headings (h1 is the largest, h6 is the smallest)
<title> 	doesn’t appear on the webpage but on the tab
<p>	Paragraph
<a>	Anchor (for links)
<img>	Image
<ul>	Unordered list (bullet points)
<ol>	Ordered list (numbered)
<li>	List item (used inside <ul> or <ol>)
<div>	Division (for grouping content)
<span>	Inline container (for styling parts of text)
<form>	Form (for user input)
<em> 	Italics
<strong>  Bold
```

---

# INPUT CHEAT SHEET

---

**text** Basic single-line text input. <input type="text" name="username" />
`<input type="text" name="username" />`

**password** Hides entered characters; used for passwords. <input type="password" name="password" />
`<input type="password" name="password" />`

**email** Requires an email format (e.g., user@example.com). <input type="email" name="email" />
`<input type="email" name="email" />`

**number** Accepts only numeric values; can set min, max, step attributes. <input type="number" name="age" min="1" max="100" />
`<input type="number" name="age" min="1" max="100" />`

**tel** For entering telephone numbers; no format validation. <input type="tel" name="phone" />
`<input type="tel" name="phone" />`

**url** Requires a valid URL format. <input type="url" name="website" />
`<input type="url" name="website" />`

**date** Provides a date picker (YYYY-MM-DD format). <input type="date" name="birthday" />
`<input type="date" name="birthday" />`

**time** Time picker (HHformat). <input type="time" name="appointment" />
format).
`<input type="time" name="appointment" />`

**datetime-local** For both date and time (local timezone). <input type="datetime-local" name="meeting" />
`<input type="datetime-local" name="meeting" />`

**month** Allows selection of month and year. <input type="month" name="billing-month" />
`<input type="month" name="billing-month" />`

**week** Allows selection of a specific week of the year. <input type="week" name="week" />
`<input type="week" name="week" />`

**color** Displays a color picker; returns a hex color code. <input type="color" name="favcolor" />
`<input type="color" name="favcolor" />`

**range** Displays a slider for numeric ranges; accepts min, max, step. <input type="range" name="volume" min="0" max="100" />
`<input type="range" name="volume" min="0" max="100" />`

**checkbox** Allows multiple selections; checked or unchecked. <input type="checkbox" name="subscribe" />
`<input type="checkbox" name="subscribe" />`

**radio** Allows a single selection within a group. <input type="radio" name="gender" value="male" />
`<input type="radio" name="gender" value="male" />`

**file** For uploading files. <input type="file" name="profile-picture" />
`<input type="file" name="profile-picture" />`

**hidden **Stores hidden data (invisible to users). <input type="hidden" name="userid" value="12345" />
`<input type="hidden" name="userid" value="12345" />`

**image** Submit button displayed as an image. <input type="image" src="submit.png" alt="Submit" />
`<input type="image" src="submit.png" alt="Submit" />`

**submit** Submits form data. <input type="submit" value="Submit" />
`<input type="submit" value="Submit" />`

**reset** Resets form values to defaults. <input type="reset" value="Reset" />
`<input type="reset" value="Reset" />`

**button** Generic button; can be customized with JavaScript actions. <input type="button" value="Click me" />
`<input type="button" value="Click me" />`

---

### Classes in Ids

Difference between classes and Ids
**Ids have to be unique!**

---

# <center>**Section 7 - JavaScript in the Browser: DOM and Events** </center>

---

# **70. Project#1: Guess My Number!**

---

```js
console.log(document.querySelector('.message').outerHTML); // <p class="message">Start guessing...</p>
console.log(document.querySelector('.message').textContent); //Start guessing...
```

---

# **71. What's the DOM and DOM manipulation**

---

What is the DOM?
**Document Object Model:** Structured Representation of HTML Docs that allows JS to access HTML elements and styles to manipulate them.

## ![App Platorm](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*6mPFv_0iQQ1AI25u9F5Glg.jpeg)

DOM is not a part of JS language but WEB API's

---

# **72. Selecting and Manipulating Objects**

---

```js
console.log(document.querySelector('.message').textContent); //Start guessing...

document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13; //Changing text to 13
document.querySelector('.score').textContent = 1;

document.querySelector('.guess').value = 0; // sets 0 in input
```

---

# **73. Handling Click events**

---

```js
let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //Number is added as input is as a string by default
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Input';
  }
});
```

This code adds a click event listener to an element with the class .check. When clicked, it retrieves the value from an input element with the class .guess and logs it to the console. This allows you to see user input when the button is pressed.

---

# **74. Implementing the Game Logic**

---

```js
const secretNumber = Math.trunc(Math.random() * 20) + 1; //as the number would be from 0-19, adding +1 at the end would make 1-20

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //Number is added as input is as a string by default
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Input';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber; //Changing text to secretNumber
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent -= 1;
    } else {
      document.querySelector('.message').textContent = 'You lost!!!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent -= 1;
    } else {
      document.querySelector('.message').textContent = 'You lost!!!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
```

---

# **75. Manipulating CSS Styles**

---

```js
document.querySelector('body').style.backgroundColor = '#60b347'; //CSS Manipulation can only be in String format
document.querySelector('.number').style.width = '30rem'; //CSS Manipulation can only be in String format
```

---

# **76. Challenge #1**

---

Create again button and refresh the game

```js
let secretNumber = Math.trunc(Math.random() _ 20) + 1; //as the number would be from 0-19, adding +1 at the end would make 1-20
console.log(`Secret number is: ${secretNumber}`);
let score = 20;
let highscore = 0;
//Again button
document.querySelector('.btn.again').addEventListener('click', function () {
document.querySelector('body').style.backgroundColor = '#222';
document.querySelector('.message').textContent = 'Start guessing...';
document.querySelector('.score').textContent = 20;
document.querySelector('.number').textContent = '?';
document.querySelector('.guess').value = '';
document.querySelector('.number').style.width = '15rem';
secretNumber = Math.trunc(Math.random() _ 20) + 1;
score = 20;
console.log(secretNumber);
});
//Check the correct number
document.querySelector('.check').addEventListener('click', function () {
const guess = Number(document.querySelector('.guess').value);
console.log(guess, typeof guess);

if (!guess) {
//No Input
document.querySelector('.message').textContent = 'No Number!!!';
} else if (guess === secretNumber) {
//Win
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = secretNumber;
document.querySelector('body').style.backgroundColor = '#60b347'; //CSS Manipulation can only be in String format
document.querySelector('.number').style.width = '30rem'; //CSS Manipulation can only be in String format
if (score > highscore) highscore = score; //
document.querySelector('.highscore').textContent = highscore;
} else if (guess > secretNumber) {
if (score > 1) {
//Too high
document.querySelector('.message').textContent = 'Too high!';
score--;
document.querySelector('.score').textContent -= 1;
} else {
document.querySelector('.message').textContent = 'You lost!!!';
document.querySelector('.score').textContent = 0;
}
} else if (guess < secretNumber) {
if (score > 1) {
//Too low
document.querySelector('.message').textContent = 'Too low!';
score--;
document.querySelector('.score').textContent -= 1;
} else {
document.querySelector('.message').textContent = 'You lost!!!';
document.querySelector('.score').textContent = 0;
}
}
});
```

---

# **77. Implementing Highscores**

---

```js
document.querySelector('.highscore').textContent = highscore;
} else if (guess > secretNumber) {
```

---

# **78. Refactoring Our Code. The DRY Principle (Dont Repeat Yourself)**

---

**Refactoring** - Refactoring is the process of changing or reorganizing code to improve its structure, readability, or maintainability without altering its external behavior. It's like cleaning up and optimizing the code so that it’s easier to understand, more efficient, or easier to maintain in the future.

1. Find duplicate or almsot duplicate code
2. To create functions

```js
let secretNumber = Math.trunc(Math.random() * 20) + 1; //as the number would be from 0-19, adding +1 at the end would make 1-20
console.log(`Secret number is: ${secretNumber}`);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message; //Cretaed Function for easier code thats used for later
};
//Again button
document.querySelector('.btn.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  console.log(`Secret number is: ${secretNumber}`);
});
//Check the correct number
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    //No Input
    displayMessage('No Number!!!');
    //Win
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347'; //CSS Manipulation can only be in String format
    document.querySelector('.number').style.width = '30rem'; //CSS Manipulation can only be in String format
    if (score > highscore) highscore = score; //
    document.querySelector('.highscore').textContent = highscore;
  }

  //When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too Low!'); //Used Ternary operator to cut half of the code.

      score--;
      document.querySelector('.score').textContent -= 1;
    } else {
      displayMessage('You Lost!!!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
```

---

# **79. Project #2: Modal Window**

---

# **80. Working with Classes (CSS)**

---

```js
'use strict';
//defining buttons and areas int variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  console.log(1);
  modal.classList.remove('hidden'); //removes modal class from css (hidden is  display: none;)
  overlay.classList.remove('hidden'); //rmoves  modal class from css (hidden is  display: none;)
};

const closeModal = function () {
  modal.classList.add('hidden'); // adds modal class from css (hidden is  display: none;)
  overlay.classList.add('hidden'); //adds modal class from css (hidden is  display: none;)

  for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);
};
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
```

---

# **81. Handling and "Esc" Keypress Event**

---

```js
'use strict';
// Selecting modal elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Function to open the modal
const openModal = function () {
  modal.classList.remove('hidden'); // Show modal by removing 'hidden' class
  overlay.classList.remove('hidden'); // Show overlay by removing 'hidden' class
};

// Function to close the modal
const closeModal = function () {
  modal.classList.add('hidden'); // Hide modal by adding 'hidden' class
  overlay.classList.add('hidden'); // Hide overlay by adding 'hidden' class
};

// Adding event listeners to open modal buttons
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// Event listeners for closing the modal
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Close modal when pressing the Escape key
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
```

---

# **82. Project #3: Pig Game**

---

```js
'use strict';
// Selecting elements
const score0El = document.querySelector('#score--0'); // Hash is used to select ID, . is used for classes. It is more versatile and can be used for everything
const score1El = document.getElementById('score--1'); //This is a little bit faster, and only works with ID's
const diceEl = document.querySelector('.dice');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
```

---

# **86. Adding again button**

---

```js
//Create play again
const playAgain = function () {
  playing = true;
  //Function to reset everything
  score0El.textContent = 0; // Sets player 0's score to 0
  score1El.textContent = 0; // Sets player 1's score to 0
  diceEl.classList.add('hidden'); // Hides dice at the start
  scores = [0, 0]; // Holds scores for both players
  currentScore = 0; // Tracks current round score
  activePlayer = 0; // Tracks which player is active
  document.getElementById(`current--1`).textContent = 0;
  document.getElementById(`current--0`).textContent = 0;

  currentScore = 0; // Reset current score

  player0El.classList.add('player--active'); // Switch active styling
  player1El.classList.remove('player--active');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
};

btnNew.addEventListener('click', playAgain);
```

---

# **86. Resetting the Game**

---

Full code-

```js
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
```

---

# <center>**Section 8 - How JavaScript Works Behind the Scenes** </center>

---

# **89. An High-Level Overview of Javascript**

---

High-Level

Garbage-Collected

Interpreted or just in-time compiled

Multi-Paradigm programming (Imperative vs. Declarative)

- Procedural (The one we have used so far)
- Object-oriented ()
- Functional

Prototype-based object-oriented

First-class functions

Dynamic

Single-threaded

Non-blocking event loop

---

# **90. The Javascript engine and runtime**

---

JS Engine - PRogram that exetuses javascript code.
Most popular is Google V8

CallStack- The call stack manages the order of function execution within an execution context. Each time a function is called, it’s added to the stack; when it completes, it’s removed. This allows the engine to keep track of where it is in the code.

Heap -The heap is an unstructured memory space used for storing objects and data that applications need over time.

JavaScript is often just-in-time (JIT) compiled. This combines elements of both compilation and interpretation:
JavaScript engines use a JIT compiler to compile parts of the code to machine code while executing.
This approach allows for fast execution (like compilation) while retaining flexibility (like interpretation), as the code can be optimized on the fly.

### Modern Just-In-Time Compilation

JS Code

**JavaScript Code Execution**
1- **Parsing**: The JavaScript engine parses the code and generates an Abstract Syntax Tree (**AST**) to understand the structure of the code.
2- **Compilation** (Just-In-Time): The engine compiles parts of the AST to machine code just before execution, optimizing it as the code runs.
3- **Execution**: The compiled code is executed in the Call Stack, where functions are added and removed as they are called and complete.
4- **Optimization**: During execution, the engine continuously optimizes code, sometimes re-compiling parts for better performance.

A JavaScript Runtime is the environment that provides all the resources necessary for JavaScript to function in a browser. It includes the JavaScript engine and other components needed to execute asynchronous tasks and interact with the browser environment.

### Components of a JavaScript Runtime

**JavaScript Engine**: Handles parsing, compiling, and executing JavaScript.

- **Call Stack**: Executes code in order.
- **Heap**: Memory pool where objects are stored.

**Web APIs**: Provided by the browser (not JavaScript itself), these APIs allow JavaScript to interact with elements like:

- **DOM**: For manipulating HTML/CSS elements.
- **Timers**: setTimeout, setInterval for delays.
- **Fetch API**: For making HTTP requests.

**Callback Queue**: Holds asynchronous callbacks waiting to be executed once the Call Stack is clear.

For example, callbacks from setTimeout, fetch, and event listeners wait here until the Call Stack is empty.

## [![App Platorm](https://miro.medium.com/v2/resize:fit:720/format:webp/0*gu_cZsU1i0QLUgoY.png)](https://srivastavaankita080.medium.com/javascript-engine-runtime-ae9d392c170a)

---

# **91. Execution Contexts and The Call Stack**

---

<center> Compilation

&darr;

Creation of **global execution context (EC)** (for top-level code)
[Execution Context] = Created when JavaScript starts, managing top-level
code and setting up the global scope.
&darr;
Execution of top-level code (inside global EC)- Runs line by line, defining global variables and functions.
&darr;
Execution of functions and waiting for callbacks- When a function is called, a new EC is added to the Call Stack.
After functions complete, asynchronous callbacks (like setTimeout) wait in the Callback Queue, managed by the Event Loop.

</center>

Variable Environment:

1. **Variable Declarations:** Stores let, const, and var variables within the current context.
   Function Declarations: Holds functions defined in the context.
   Arguments Object: Available in function contexts, it stores all arguments passed to the function.

2. **Scope Chain:** Manages the context’s access to variables from its own scope and outer (parent) scopes. This enables lexical scoping, where inner functions can access variables in outer functions.

3. **this Keyword:** The value of this depends on how the function was called. In the global context, this refers to the global object (like window in browsers). In functions, this varies depending on whether the function is called as a method, a constructor, or in strict mode.

### **The Call Stack**

```js
const name = 'Radek';

const first = () => {
  let a = 1;
  const b = second(7, 9);
  a = a + b;
  return a;
};
function second(x, y) {
  var c = 2;
  return c;
}
const x = first();
```

In this code, the Call Stack manages the sequence of function calls and returns as the program executes. Here's how it works step-by-step:

1. **Global Execution Context (EC):**
   When the code starts, the global execution context is created and added to the Call Stack.
   The variables name, first, second, and x are defined in the global context.

2. **Calling first():**
   When first() is called with const x = first();, a new execution context for first is created and pushed onto the Call Stack.
   Inside first, a is initialized to 1, and then second(7, 9) is called.

3. **Calling second(7, 9):**
   The second function is called from within first, so an execution context for second is created and pushed onto the Call Stack.
   Inside second, c is initialized to 2, and 2 is returned.
   The second execution context is then popped off the Call Stack, and b in first gets the returned value 2.

4. **Returning from first():**
   Back in first, a is updated to 3 (1 + 2), and 3 is returned.
   The first execution context is removed from the Call Stack, and x in the global context is set to 3.
   Throughout this process, the Call Stack helps track where each function is in execution, pushing new contexts for each call and popping them when completed.

---

# **92. Scope and The Scope Chain**

---

**Scoping**: How our program variables are organized and accessed "Where do variables live?" or "Where can we access a certain variable, and wehere not"?

**Lexical Scoping**: Scoping is controlled by placement of functions and blocks in the code.

**Scope**: Space of environment in which certain variable is declared (variable environment in case of functions). There is **Global** scope, **Function** scope and **Block** scope.

**Global scope** &rarr; Outside of **any** function or block, variables declared in global scope are accessible **everywhere**

```js
const me = 'Radek';
const job = 'Teacher';
const year = 1989;
```

**Function Scope** &rarr; Variables are accessible only **inside function, NOT** outside (also called local scope)

```js
function calcAge(birthYear) {
  const now = 2024;
  const age = now - birthYear;
  return age;
}
console.log(now);
```

**Block Scope** (ES6) &rarr; Variables are accessible only **inside block** (block scoped),
**HOWEVER**, This only applies to let and const variables!
Functions are **also block scoped** (only in strict mode)

```js
if (year >= 1981 && year <= 1996>){
   const millenial = true;
   const food = "Avocado toast";
}
console.log(millenial) //ReferenceError
```

### The scope chain

```js
const myName = 'Radek'; //Global Scope

function first() {
  //first() scope
  const age = 30;

  if (age >= 30) {
    const decade = 3;
    var milenial = true;
  }
  function second() {
    //second() scope (This scope has access all other scopes(as it is the last one))
    const job = 'teacher';

    console.log(`${myName} is a ${age}-old ${job}`);
  }
  second();
}
first();
```

<center>

**Global scope**

myName = "Radek"

&uarr;

**first() scope**

age = 30

myName = "Radek"

&uarr;

**second() scope**
job = "teacher"

age = 30

myName = "Radek"

</center>

Scope Chain vs Call Stack

How They Work Together
Call Stack "Calls the Shots":

The Call Stack is in charge of which function is currently being executed and in what order. Whenever a new function is called, JavaScript adds that function's Execution Context to the Call Stack. This means the Call Stack is in control of the execution order.
Scope Chain "Takes the Information":

Each Execution Context created by the Call Stack includes a Variable Environment that holds variables for that function. When a function is executing, it accesses variables through its Scope Chain, which points to its own Variable Environment and any outer environments up to the global scope. So the Scope Chain is responsible for finding and accessing variable values in the correct context.
How They Interact:

When the Call Stack pushes a function's Execution Context onto the stack, that function’s Scope Chain is created and set up based on where the function was defined. As the function executes (thanks to the Call Stack "calling the shots"), any time it needs a variable, it consults the Scope Chain to determine where to find that variable.

- Scoping asks the question "Where do variables live?"
- There are 3 types of scope in JS: Global, cope defined by functions, and by blocks
- Only let and const variables are block-scoped. Var end up in the closest function scope
- In JS, we have lexical scoping, so the rules of where we can access variables are based on exactly where in the code functions and block are written
- Every scope always has access to all the variables from all its outer scopes. This is the scope chain!
- When a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable it's looking for. This is called a variable lookup.
- The scope chain is one-way street: a scope will never, ever have access to the variables of an inner scope.
- The scope chain in a certain scope is equal to adding tohether all the variable environments of the all parent scopes.
- The scope chain has nothing to do with the order in which functions were called. It does not affect the scope chain at all!

---

# **93. Scoping in Practice**

---

```js
function calcAge(birthYear) {
  const age = 2024 - birthYear;
  console.log(firstName); // firstName is available because "const firstName = "Radek""" is in global scope
  return age;
}
const firstName = 'Radek';
calcAge(1997);
```

```js
function calcAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'John';
      const str = `Oh, and you're a millenial ${firstName}`; //This will be John, instead of Radek (same/closest scope from global)
      console.log(str);
    } else {
      console.log(`You are not a millenial`);
    }
    // console.log(str); // Error as it is outside of scope (const)
    console.log(millenial); //Not an error despite being outside (var)
  }
  printAge();
  return age;
}
const firstName = 'Radek';
calcAge(1991);
//console.log(age); //This is an error, as this is outer scope trying to reach inner scope
```

---

# **94. Variable Environment: Hoisting and the TDZ**

---

Hoisting makes some types of variables usable before t hey are declared in the code (Variables lifted to the top of the scope).

&darr;

BEfore execution, code is scanned for variable declarations, and for each variable, a news property is created in the variable environment object.

In JavaScript, hoisting is a behavior where variable and function declarations are moved (or "hoisted") to the top of their containing scope (either the global scope or the function scope) during the compile phase, before the code is executed. This allows functions and variables to be used before they’re declared in the code.

1. Variable Hoisting:
   - Only the declaration (not the initialization) of variables declared with var is hoisted to the top of the scope.
   - Variables declared with let and const are also hoisted, but they are not accessible before their declaration in the code. They are in a "temporal dead zone" (TDZ) until the code execution reaches their declaration.

```js
console.log(a); // undefined (because of hoisting)
var a = 5;

// Using 'let' or 'const' before declaration results in an error:
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
```

**Function Declaration**
Syntax: function funcName() { /_ code _/ }
Hoisting: Fully hoisted (can be called before declaration).
Scope: Available throughout its scope (global or function).

```js
// 1. Function Declaration - No error, can be called before declaration due to hoisting
greet(); // ✅ Works
function greet() {
  console.log('Hello!');
}
```

**var Declaration**
Syntax: var variableName = value;
Hoisting: Hoisted with undefined as the initial value.
Scope: Function-scoped, accessible within the entire function (or globally if declared outside any function).

```js
// 2. var Declaration - Hoisted as undefined
console.log(age); // ✅ undefined (no error, but undefined due to hoisting)
var age = 30;
```

**let Declaration**
Syntax: let variableName = value;
Hoisting: Hoisted but not initialized (error if accessed before declaration).
Scope: Block-scoped (only accessible within { } where it’s declared).
Redeclaration: Not allowed within the same scope.

```js
// 3. let Declaration - Error if accessed before declaration (temporal dead zone)
console.log(name); // ❌ ReferenceError: Cannot access 'name' before initialization
let name = 'Alice';
```

**const Declaration**
Syntax: const variableName = value;
Hoisting: Hoisted but not initialized (error if accessed before declaration).
Scope: Block-scoped.
Reassignment: Not allowed (constant), but object properties/elements can still be modified.

```js
// 4. const Declaration - Error if accessed before declaration
console.log(city); // ❌ ReferenceError: Cannot access 'city' before initialization
const city = 'Paris';
```

**Function Expression**
Syntax: const funcName = function() { /_ code _/ };
Hoisting: Not hoisted the same way as function declarations; treated like a variable (let or const behavior).
Scope: Defined by the variable it’s assigned to (let or const).
Calling Before Declaration: Results in error if called before its line of declaration.

```js
// 5. Function Expression with const - Error if accessed before declaration
sayHello(); // ❌ TypeError: sayHello is not a function
const sayHello = function () {
  console.log('Hi there!');
};
```

```js
// 6. const reassignment - Error because const cannot be reassigned
const pi = 3.14;
pi = 3.14159; // ❌ TypeError: Assignment to constant variable
```

---

# **96. The "this" keyword**

---

**this keyword/variable:** Special variable that is created for every execution contexr (every function).
Takes the value of (points to) the "owner" of the function in which the **this** keyword used.

this is **NOT** static. It depends on how the function is called, and its value is only assigned when the function **is actually called**

## Global: this is the global object (window in browsers).

```js
console.log(this); // `window` object in browser
```

## Function (non-strict): this is also the global object.

```js
function showThis() {
  console.log(this); // `window` object in non-strict mode
}
showThis();
```

## Function (strict): this is undefined.

```js
'use strict';
function showThisStrict() {
  console.log(this); // undefined
}
showThisStrict();
```

## Object Method: this is the object.

```js
const person = {
  name: 'Alice',
  greet() {
    console.log(this.name); // "Alice"
  },
};
person.greet();
```

## Arrow Function: this inherits from the outer lexical scope.

```js
const person = {
  name: 'Bob',
  greet: () => {
    console.log(this.name); // undefined or global object’s name (depends on context)
  },
};
person.greet();
```

## Event Handler: this is the element triggering the event.

```js
<button onclick="console.log(this)">Click me</button> <!-- `this` is the button element -->
```

## Class: this is the instance of the class.

```js
class Animal {
  constructor(type) {
    this.type = type;
  }
  speak() {
    console.log(this.type); // refers to the instance's type
  }
}
const dog = new Animal('Dog');
dog.speak(); // "Dog"
```

# **97. The "This" keyword in practice**

```js
//Regular function
console.log(this); //window

const calcAge = function (birthYear) {
  console.log(2024 - birthYear);
  console.log('calcAge', this); //undefined
};
calcAge(1997);

//Arrow function
const calcAgeArrow = birthYear => {
  console.log(2024 - birthYear);
  console.log('calcAgeArrow', this); //Window
};
calcAgeArrow(1998);

const radek = {
  year: 1997,
  calcAge: function () {
    console.log('Radek Object', this); //Prints Radek object (However, it will print wahetever calls calcAge as shown below)
    console.log(2024 - this.year);
  },
};
radek.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = radek.calcAge; //copies calcAge (Method borrowing)
matilda.calcAge(); //7

//That means "this keyword" is dynamic, not static

const f = radek.calcAge; // f variable copies calcAge function
```

---

# **98. Regular functions vs Arrow functions**

---

```js
'use strict';
//var firstName = 'Matilda';
const radek = {
  firstName: 'Radek',
  year: 1997,
  calcAge: function () {
    //Regular Function declaration
    /*
    //Solution 1
    console.log(this);
    console.log(2024 - this.year); //prints object's name
    const self = this; //2. This has been added added error below (self or that)
    
    const isMillenial = function () {
      console.log(this);
      // console.log(this.year >= 1981 && this.year <= 1996); // 1. TypeError,property year is identified
      console.log(self.year >= 1981 && self.year <= 1996); // 3. this solves the problem with this being undentified
    };
    isMillenial();
    */

    //Solution 2 (Changing to arrow function)
    const isMillenial = () => {
      console.log(this);
      // console.log(this.year >= 1981 && this.year <= 1996); // 1. TypeError,property year is identified
      console.log(self.year >= 1981 && self.year <= 1996); // 3. this solves the problem with this being undentified
    };
    isMillenial();
  },
  greet: () => {
    //Arrow Function
    console.log(this);
    console.log(`Hey ${this.firstName}`); //prints undefined(As its simply not there) or gobal var => Matilda (Arrow function doesnt get its own keyword)
  },
};
radek.greet();
radek.calcAge();
```

```js
//Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments); //prints actual arguments, prints 2 parameters
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 6, 7);

var addArrow = (a, b) => {
  console.log(arguments); //ReferenceError: arguments is not defined
  return a + b;
};
addArrow(2, 5);
```

---

# **99. Primitives vs Objects (Primitive vs Reference Types)**

---

```js
//Primitives
let age = 30;
let oldAge = age; // oldAge = 30
age = 31;
console.log(age);
console.log(oldAge);

//Reference types
const me = {
  name: 'Radek',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend', friend); // Friend {name: 'Radek', age: 27}
console.log('Me', me); // Me {name: 'Radek', age: 27}
```

- Primitive Types are stored in the CallStack
- References Types are stored in the Heap

## ![Screenshot](Screenshot%202024-11-06%20170521.png)

---

# **100. Primitives vs Objects in Practice**

---

```js
// Primitives vs. Objects in Practice

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);
// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push(['Mary']);
jessicaCopy.family.push(['John']);

console.log('NEW Before marriage:', jessica2);
console.log('NEW After marriage: ', jessicaCopy);
```

---

# <center> **Section 9: Data Structures, Modern Operators and Strings**

---

# **103. Destructuring Arrays**

---

- Destructuring is a feature of unpacking values from and array/object into seperate variables.

```js
'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;

console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories; //Take positions  from restaurant > categorie
console.log(main, secondary); //Italian, Vegetarian

//Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary); //Vegetarian, Italian
//Here is easir version of the same

[main, secondary] = [secondary, main];
console.log(main, secondary);
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested arrays (one array inside of another)
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
```

---

# **104. Destructuring Objects**

---

**First Example:**

```js
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
```

Here, direct destructuring is used to extract the properties `name, openingHours, and categories from the restaurant object.`

Each variable will be named exactly as it is in the restaurant object:

- `name` corresponds to `restaurant.name`
- `openingHours` corresponds to `restaurant.openingHours`
- `categories` corresponds to `restaurant.categories`

If you log these variables, they will have the same names and values as in the original object.

**Second Example:**

```js
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
```

In this case, renamed destructuring is used. The properties name, `openingHours`, and categories are destructured from restaurant, but each is assigned a new variable name.

The syntax name: `restaurantName` means:
Extract the name property from restaurant but assign it to a new variable called `restaurantName`.

Similarly, `openingHours` is assigned to `hours` and `categories` is assigned to `tags`.

This allows you to customize the names of the variables in your local scope, making the code potentially more descriptive or better aligned with your context.

<center> Summary of Differences </center>

- **Direct destructuring:** The variable names are the same as the property names in the object.

- **Renamed destructuring:** The properties are assigned to new variable names, allowing for flexibility in naming.

These two approaches achieve the same result but offer flexibility based on naming preferences or conventions.

---

This code defines a restaurant object with various properties and methods.

Key Parts

**Properties:**
Basic properties like `name, location, categories, starterMenu, mainMenu, and openingHours.`

**Methods:**

- **order:** Takes two indices (for starter and `main` menu `items`) and returns the selected items as an array.
- **orderDelivery:** A method that takes an object as a parameter with properties starterIndex, `mainIndex`, time, and address. It logs an order confirmation message, with default values for `starterIndex`, `mainIndex`, and time.

`restaurant.orderDelivery` Call

```js
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 2,
});
```

This calls `orderDelivery` with:

```js
address set to 'Via del Sole, 21'
starterIndex set to 2
Since mainIndex and time aren’t provided, they use their defaults (mainIndex = 0, time = '20:00').
```

The console logs:

```
Order received: Garlic Bread and Pizza will be delivered to Via del Sole, 21 at 20:00
```

This message combines values from the `starterMenu, mainMenu,` and provided/determined options.

---

1. Setting Default Values

```js
const { menu = [], starterMenu: starters = [] } = restaurant;
```

This destructures menu and starterMenu from restaurant. If menu doesn’t exist in restaurant, it defaults to an empty array ([]).

`starterMenu` is renamed to starters and will use an empty array as a default if not found.

- **Usefulness:** Common when dealing with external data (like APIs) where certain fields might be missing.

2. Mutating Variables

```js
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
```

This technique reassigns a and b to values from obj.
The parentheses around `{ a, b } = obj` are necessary to treat it as an expression, not a code block.

- **Usefulness:** Handy for reassigning existing variables based on an object's properties.

3. Nested Objects

```js
const { fri } = openingHours;
```

```js
const {
  fri: { open, close },
} = openingHours;
```

The first line extracts the `fri` object from `openingHours.`
The second line goes deeper, extracting open and close from within `fri` directly.

- **Usefulness:** Common for nested data structures, but can become hard to read if deeply nested.

Which is Easier or More Common?

Setting defaults and basic destructuring (like the first approach) are the most common and easiest to read.

Nested destructuring is also popular but should be used sparingly for deeply nested objects, as it can reduce readability.

---

# **106. The Spread Operator (...)**

---

The spread operator simplifies code by allowing you to work with collections (arrays/objects) as individual elements, making merging, copying, and passing data cleaner and more flexible.

**Without Spread Operator:**

```js
const baddNewArr = [1, 2, arr[0], arr[1], arr[2]];
```

Manually adds each item from arr. Not scalable; requires updating if arr changes size.

**With Spread Operator:**

```js
const newArr = [1, 2, ...arr];
```

Automatically includes all items from `arr`, making it cleaner and scalable. Preferred approach.

Conclusion: Using the spread operator (`...arr`) is simpler and more efficient.

### Spread Operator vs. Destructuring

**Similarity**: Both help extract elements from arrays.

**Key Differences:** Spread Operator pulls all elements from an array but doesn't create new variables.

It can only be used in contexts that expect comma-separated values (e.g., in arrays, function arguments).

In summary, the spread operator is ideal for including elements in lists, while destructuring is used to assign elements to specific variables.

```js
//Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays or more

const menu = `Main Menu: ${[...restaurant.mainMenu]},
Starter Menu: ${[...restaurant.starterMenu]}`;
console.log(menu);

//Spread operator works also on all so-called "iterables"
// Iterables: Strings, maps, arrays, sets but not objects
const str = 'Radek';
const letter = [...str, '', 'S.'];
console.log(letter); // ['R', 'a', 'd', 'e', 'k', '', 'S.']
console.log(...str); //Prints all individual letters = R a d e k
```

Spread operator as a function

```js
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};
///
const ingredients = [
  //Each prompt is each new value [1] [2] [3]
  prompt(`Let's make pasta! Ingeredient 1?`),
  prompt(`Ingeredient 2?`),
  prompt(`Ingeredient 3?`),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients); //same but quicker
```

```js
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant); //{foundedIn: 1998, name: 'Classico Italiano', location: 'Via Angelo Tavanti 23, Firenze, Italy', categories: Array(4), starterMenu: Array(4), …}
```

```js
// Shallow copy `restaurant` - only top-level properties are copied.
const restaurantcopy = { ...restaurant };

// Change `name` in the original `restaurant` object.
restaurant.name = 'Ristorante Roma';

// `restaurantcopy.name` still has the original name (shallow copy doesn't update it).
console.log(restaurantcopy.name); // Original name

// `restaurant.name` now reflects the change.
console.log(restaurant.name); // "Ristorante Roma"
```

---

# **107. Rest Pattern and Parameters (Reverse of Spread)**

---

Rest Pattern
The rest pattern is used in destructuring objects and arrays. It allows you to collect the "rest" of the values that haven't been individually extracted into a separate variable.

Example with an Array

```js
const [first, ...restOfItems] = [10, 20, 30, 40];
console.log(first); // 10
console.log(restOfItems); // [20, 30, 40]
```

Example with an Object

```js
const { name, ...otherDetails } = { name: 'Alice', age: 25, job: 'Developer' };
console.log(name); // "Alice"
console.log(otherDetails); // { age: 25, job: "Developer" }
```

**Rest Parameter**
The rest parameter is used in function parameters to gather all remaining arguments into an array. This is especially useful when you don’t know how many arguments will be passed to the function.

Example

```js
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
```

In this function, numbers collects all arguments passed into an array, allowing us to handle them easily.

`**Summary**
Rest pattern: Used in destructuring to collect remaining elements or properties.
Rest parameter: Used in function parameters to gather an indefinite number of arguments into an array.
`

```js
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood); //Pizza Risotto Focaccia Bruschetta Garlic Bread Caprese Salad
```

There can only be one `Rest` , and it's only at the end

```js
// Objects
const { sat, ...weekdays } = restaurant.openingHours; // Destructure 'sat' and collect the rest into 'weekdays' object
console.log(sat, weekdays);

// Functions
const add = function (...numbers) {
  // 'numbers' gathers all arguments into an array
  let sum = 0; // Start sum at 0
  for (let i = 0; i < numbers.length; i++) sum += numbers[i]; // Loop to add each number
  console.log(sum);
};
add(2, 3); // Outputs 5
add(5, 3, 7, 2, 3, 1, 7); // Outputs 28

const x = [23, 5, 75];
add(...x); // Spread array 'x' into individual arguments for 'add'
```

The rest operator (...numbers) in the function parameters collects all arguments into an array, while the spread operator (...x) in add(...x) expands the array into individual values. These operators are powerful tools in JavaScript and work well in your examples!

```js

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

restaurant.orderPizza('Mushrooms', 'Onion', 'Olives', 'Spinach');
//Mushrooms (3) ['Onion', 'Olives', 'Spinach']

restaurant.orderPizza('Mushrooms');
//Mushrooms []
```

---

# **108. Short Circuiting (&& and ||) (AND and OR)**

---

```js
//Short Circuiting ($$ and ||) AND and OR
//Use any data type, return ANY data type, short-circuiting
//Basically, AND and OR statements

console.log(3 || 'Radek'); //If the first value is truthy value, it will print it
console.log('' || 'Radek'); //Radek
console.log(true || 0); // true
console.log(undefined || null); //null
```

```js
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); //result = 10, as two first ones don't exist

const guests2 = restaurant.numGuests || 10;
console.log(guests2); // Same as above
```

Using a Ternary Operator:

`const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;`
This line checks if `restaurant.numGuests` exists and is a "truthy" value. If it is, `guests1` will be set to `restaurant.numGuests`. If it is "falsy" (e.g., `null`, undefined, 0, etc.), `guests1` will default to 10.
Using Logical OR (||):

`const guests2 = restaurant.numGuests || 10;`
This line uses the || operator, which is a shorthand way of doing the same thing as the ternary in this context. If `restaurant.numGuests` is "falsy," `guests2` will be set to 10. If it's "truthy," `guests2` will take on the value of `restaurant.numGuests`.
Why They Produce the Same Result
Both lines work because they both rely on the "falsy" nature of `restaurant.numGuests` when it doesn’t exist (e.g., if `restaurant.numGuests` is undefined or `null`). In both cases, `guests1` and `guests2` will default to 10 if `restaurant.numGuests` is "falsy."

Benefit of the `||` Operator
Using `||` is generally shorter and simpler when you want to set a default value. The logical OR approach is often preferred in these cases because it’s more concise.

```js
console.log(`---AND---`);
console.log(0 && 'Radek'); // =0, Opposite of || (OR), it prints first falsy value
console.log(7 && 'Radek'); // =Radek, If all are truthy, then last value gets printed
```

```js
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach'); // Prints first falsy value, (It doesn't eists)
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach'); //Spinach
```

---

# **109. The Nullish Coalescing Operator (??)**

---

```js
///////////
//Nullish
restaurant.numGuests = 0; //Falsy value so there is a problem

const guests2 = restaurant.numGuests || 10;
console.log(guests2); // Result is 10 as 0 is falsy value in this context

const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect); //Result is 0

//Nullish:  NULL or UNDEFINED (NOT 0 or "")
```

Nullish Coalescing Operator (??):
The ?? operator only treats null and undefined as "nullish" values.

It’s useful when you want to allow "falsy" values like 0 or "" without defaulting to another value
