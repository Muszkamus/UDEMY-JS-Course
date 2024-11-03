***
# <center> Section 2
***

let name = "name"; //Stores the value as a string, start with small letter
console.log(); //Print out console in the browser

let firstName = "Jonas";
console.log(firstName);

# 11. **DATA TYPES**

* Number = floating point numbers used for decimals and integer `let age = 23;*`
* String = Sequence of characters used for text ` let firstName = "Jonas";`
* Boolean = Logical type that can only be true or false ` let fullage = true; `
* Undefined = Value taken by  a variable that is not yet defined ` let children;`
* Null = Also mean empty value
* Symbol = Value that is unique and cannot be changed
* BigInt = Larger integers than the Number can hold

### **Comments**

in JS = // and /* sample word */
in HTML = <!-- sample word --!>

### **Type Of**
```js
let sample = true
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
 x = y = 25 - 10 - 5 // x = y = 10
const averageage = (ageJonas + ageSarah) /2
console.log(ageJonas, ageSarah, averageage)
```
# 17. **Template literals**
```js

const firstName = "Radek";
const job = "Teacher";
const birthYear = 1997;
const year = 2024;

const radek = ("I'm " + firstName + ', a  '
  +  (year - birthYear)+ ' years old ' + job) //this one is crap tho
console.log(radek)

const radekNew = `I'm ${firstName} , a ${year - birthYear} year old ${job}`; //use backticks to use template string, above tab key
console.log(radekNew)
```

# 18. **If Else statetements**
```js
const age = 15;
if(age >= 18){
  console.log(`You are old enough to drive`)
}
else{
  const yearsleft = 18 - age;
  console.log(`You need ${yearsleft} more years to drive!`)
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

0,'',undefined,null,NaN

const money = 0 // Value here is false. It would work the same if it would be empty(Undefined)
if (money){
  console.log(`Don't spend it all`) //This will be avoided because it is positive
}
else{
  console.log(`You should get a job`) //Hence this line will be printed, because it is false
}
```
# 22. **Equality operators**

```js
const age = '18'
if(age === 18) console.log(`you just became an adult! (strict)`) //(Strict will only match the same type )In this case, 18 === 18 is true, anything else will be false
if(age == 18) console.log(`you just became an adult! (loose)`) //(Loose)In this case, 18 == 18 for number and string is true, anything else will be false

const favourite = Number(prompt("whats your fav number?")) //shows prompt window on the webpage
console.log(favourite)
console.log(typeof favourite)
if (favourite === 23){
  console.log("WOWZA 23!")
}
else if(favourite ===7) {
  console.log(`Wowza 7`)
}
else {
  console.log(`The number neither 23 or 7`)
}

if (favourite !== 23) console.log(`Why not 23`) //!== means is not
```

# 24. **Logical operators**

```js
const hasDriverLicense = true;
const hasGoodVision = true;
console.log(hasDriverLicense && hasGoodVision) // AND
console.log(hasDriverLicense || hasGoodVision) // OR
console.log(!hasDriverLicense) // Swapping the value

const shouldDrive = hasDriverLicense && hasDriverLicense

 if (shouldDrive){
   console.log(`Good to drive!`)
 }
 else {`Not Good to drive`}

const isTired = false;  // C
console.log(hasDriverLicense && hasGoodVision && !isTired) //has driving license, has good vision, is not tired

if (shouldDrive){
  console.log(`Good to drive!`)
}
else {`Not Good to drive`} 
```

# 26. **Switch statetements**

```js
const day = 'monday';

switch(day){
  case 'monday': // day === 'monday'
    console.log("MONDAAAY")
  break;
  case 'tuesday':
    console.log("TUESDAYYY")
    break;
    case 'wednesday':
    case 'thursday':
      console.log("THUERSSSDAYY")
      break
  case 'Friday':
    console.log("FRIDAAY FRIDAAY")
    break;
  case ' saturday':
  case 'sunday':
      console.log("Enjoy your SUNDAAAY")
      break;
  default:
    console.log("Not a valid day")
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
const drink = age >= 18 ? "Wine" : "Water";

// Print the value of 'drink' to the console
// In this case, since age is 28 (which is greater than 18), it will output "Wine"
console.log(drink);
```
***
# <center> Section 3
***




# 32. **Activating strict mode**
****
```js

'use strict'; // Enforces strict mode, which catches common errors and enforces stricter syntax rules

// Declares a variable 'hasDriverLicense' and initializes it as false
let hasDriverLicense = false;
  // Declares a constant 'passTest' and sets it to true
const passTest = true;

// Checks if 'passTest' is true, and if so, assigns true to 'hasDriverLicense'
if (passTest) hasDriverLicense = true;

// Checks if 'hasDriverLicense' is true, and if so, logs "I can drive" to the console
if (hasDriverLicense) console.log("I can drive");

// Tries to declare two constants with names 'interface' and 'private'
// In strict mode, using 'interface' and 'private' as variable names will cause an error
const interface = "Audio"; // Error: 'interface' is a reserved word
const private = 534;       // Error: 'private' is a reserved word
```
****
# 33. **Functions**
****
```js
// Declares a function named 'logger' with no parameters
function logger() {
  console.log("My name is Radek"); // Logs "My name is Radek" to the console
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
****
# 34. **Function Declarations vs. Expressions**
****
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
****
# 35. **Arrow Functions**
****
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
console.log(yearsToRetirement(1997, "Radek"));

```
****
# 36. **Functions Calling Other Functions**
****
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
****
# 37. **Reviewing Functions**
****
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
yearsToRetirement(1940, "Radek"); // Radek born in 1940, likely already retired
yearsToRetirement(2002, "Amy"); // Amy born in 2002, has years left until retirement

// Function declaration - Functions that can be used before they’re declared in the code
// Function expression - Functions stored in variables, useful for one-line or quick functions
// Arrow Function - Great for a quick one-line functions.
```

****
# 49. **Arrays**
****
```js

const friends = ["Michael", "Steven", "Peter"] //literal syntax
console.log(friends)

console.log(friends[0]) //prints fir object in the array
console.log(friends.length) //prints the length of the array
console.log(friends[friends.length-1]) //prints last object, javascript expects expresion not a statement
friends[2] = "Jay" //Third array gets changed

console.log(friends)

const firstname = "John"
const radek = [firstname, "Smith", 2024-1991, "Teacher", friends]
console.log(radek)

//Exercise
const calcAge = function (birthYear) {
  return 2024 - birthYear
}
const years = [1990,1967,2002,2021,2018]
const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[2])
console.log(age1,age2,age3)

const ages = [age1,age2,age3]
console.log(ages)
```
****
# 40. **Basic array operations (Methods)**
****
```js 
//Add elements

const friends = ["Michael", "Steven", "Peter"]
const newLength = friends.push("Jay") //adds at the end
console.log(friends)
console.log(newLength)

friends.unshift("John") //adds at the beginning
console.log(friends)

//Remove elements

friends.pop() //removes last one
const popped = friends.pop()
console.log(popped) //shows which one was removed
console.log(friends)

friends.shift() //removes first one
console.log(friends)

console.log(friends.indexOf("Steven")) //shows the position /index
console.log(friends.indexOf("Bob")) //It will pop -1 as it is not in the array

console.log(friends.includes("Steven")) //True as is it in the array
console.log(friends.includes("Bob")) //False as it is not in the array
```


****
# 42. **Introduction to Objects**
****
In JavaScript, arrays and objects are both data structures, but they are suited to different types of data:

Arrays are used for ordered data, where the order matters and each item is identified by its position (or index) in the list. Arrays work well for lists where the order and sequence of elements are important.

Objects are used for unordered or unstructured data. In objects, data is organized into key-value pairs, making it easy to access values by their keys rather than by position. The order of properties in an object doesn't matter, so objects provide flexibility in managing collections of related data without worrying about order.

```js
const objects = {
  firstName: "Jon",
  lastName: "Snow",
  age: 2024 - 1978,
  job: "Killa",
  friends: ["Michael", "Peter", "Steven"]
}
```
This person object organizes information by descriptive keys, making it easy to access attributes like firstName or job directly by name.
****
# 43. **Dot. vs Bracket Notation**
****
```js
const objects = {
  firstName: "Jon",
  lastName: "Snow",
  age: 2024 - 1978,
  job: "Killa",
  friends: ["Michael", "Peter", "Steven"]
};
```
Here, an object objects is defined with properties such as firstName, lastName, age, job, and friends. The age is calculated by subtracting 1978 from 2024, which will evaluate to 46. This object serves as a collection of information about a character.
```js 
console.log(objects.firstName); // dot notation
console.log(objects["firstName"]); // bracket notation
```
Both lines here retrieve the firstName property of the object in two different ways:

Dot notation (e.g., objects.firstName) directly accesses the property.
Bracket notation (e.g., objects["firstName"]) accesses the property by providing a string key, which can be particularly useful for dynamic keys.
```js

const nameKey = "Name";
console.log(objects['first' + nameKey]); // prints 'Jon'
console.log(objects['last' + nameKey]); // causes an error
```
nameKey is a variable with the value "Name".
The expression 'first' + nameKey becomes "firstName", so objects["firstName"] retrieves and prints "Jon".
```js
const interestedIn = prompt("What do you want to know?- firstName, lastName, age, job and friends");
```
The code prompts the user to enter a key (e.g., firstName, lastName, etc.). The response is saved in the interestedIn variable.

```js
if (objects[interestedIn]) {
  console.log(objects[interestedIn]);
} else {
  console.log("not on the list, wrong request");
}
```
This conditional checks if objects[interestedIn] exists:

If it does, it prints the value.
If not, it displays "not on the list, wrong request".
This is a way to handle user errors gracefully by checking if the input corresponds to a valid key.
```js
objects.location = "Spain";
objects["Twitter"] = "@TWITTIEEE";
console.log(objects);
```

This part shows how to add new properties to an existing object:

objects.location = "Spain"; adds a location property.
objects["Twitter"] = "@TWITTIEEE"; adds a Twitter property using bracket notation.
In summary:

This code demonstrates how to define and manipulate objects in JavaScript.
It shows accessing properties in different ways, handling user input, and adding new properties.
****
# 44. **Object Methods**
****
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
****
# 46. Iteration: The for loop 3 STEP METHOD
****
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
****
# 47. **Looping Arrays, Breaking and Continuing**
****

```js
const objects = [
   "Jon",
   "Snow",
   2024 - 1978,  // This calculates the number 46 (2024 - 1978)
   "Killa",
   ["Michael", "Peter", "Steven"],  // An array of strings
   true  // A boolean value
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
ages = []
```
 The following for loop calculates the age for each year in years:


``` js
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

****
# **48. Looping Backwards and Loops in Loops**
****


```js
  const objects = [
    "Jon",
    "Snow",
    2024 - 1978,  // This calculates the number 46 (2024 - 1978)
    "Killa",
    ["Michael", "Peter", "Steven"],  // An array of strings
    true  // A boolean value
 ];
//first part= putting things backwards of the array
 for(let i = objects.length - 1;i >=0; i-- ){
  console.log(i,objects[i])
 }

//second part= loop inside of loop
 for (let exercise = 1; exercise <4; exercise++){
console.log(`---starting exercise--- ${exercise}`)
  for (let rep = 1; rep <6; rep++){
    console.log(`lifting weight repetition ${rep}`)
  }
 }
 ```
****
 # 49. **While Loop**
****
 ###

 ```js
let rep = 1
while (rep <=10){
  console.log(`rep ${rep}`)
  rep++
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
let dice = Math.trunc(Math.random() * 6 ) +1
while (dice !== 6){
    console.log(`You rolled a ${dice}`)
   dice = Math.trunc(Math.random() * 6 ) +1
   if (dice ==6)console.log("Loops finished")
}
```
**While Loop:** A while loop is generally used when the number of iterations isn't known upfront, and you want to repeat the block of code as long as a condition is true.
It continues executing until the specified condition becomes false.
With a while loop, you need to be careful to modify a variable in the loop body to avoid infinite loops.