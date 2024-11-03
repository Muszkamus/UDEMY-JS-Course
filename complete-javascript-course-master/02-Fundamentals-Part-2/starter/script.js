'use strict'; // Enforces strict mode, which catches common errors and enforces stricter syntax rules
/*
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
const private = 534;       // Error: 'private' is a reserved word */
/*
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
console.log(orangeJuice); // Logs the result "Juice with 2 apples and 4 oranges" */

/*
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
console.log(age1, age2); */
/*

// Function expression
// Defines a function named `calcAge2` using a function expression
const calcAge2 = function (birthYear) {
  return 2024 - birthYear; // Calculates the age by subtracting birth year from 2024
};

//Arrow function
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









//Functions Calling Other Functions
// Function to cut fruit into pieces
function cutFruitPieces(fruit) {
  return fruit * 4; // Returns the number of pieces by multiplying input by 4
}

// Function to process fruits by calling another function
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples); // Calls cutFruitPieces to get apple pieces
  const orangePieces = cutFruitPieces(oranges); // Calls cutFruitPieces to get orange pieces

  // Creates a string describing the juice made with the number of apple and orange pieces
  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
  return juice; // Returns the juice description
}
// Calls fruitProcessor with 2 apples and 3 oranges, then logs the result
console.log(fruitProcessor(2, 3)); */



/*//Reviewing Functions
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
yearsToRetirement(1997, "Person1"); // Radek born in 1940, likely already retired
yearsToRetirement(1912, "Person2"); // Amy born in 2002, has years left until retirement

// Function declaration - Functions that can be used before they’re declared in the code
// Function expression - Functions stored in variables, useful for one-line or quick functions
// Arrow Function - Great for a quick one-line functions.*/

/*const friends = ["Michael", "Steven", "Peter"] //literal syntax
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
console.log(ages) */

//Basic array operations (Methods)

//Add elements
/*

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
console.log(friends.indexOf("BOB")) //IT will pop -1 as it is not in the array


console.log(friends.includes("Steven")) //True as is it in the array
console.log(friends.includes("Bob")) //False as it is not in the array */


/*
const objects = {
  firstName: "Jon",
  lastName: "Snow",
  age: 2024 - 1978,
  job: "Killa",
  friends: ["Michael", "Peter", "Steven"]
};


console.log(objects.firstName); //dot notation
console.log(objects["firstName"]); //bracket notation


const nameKey = "Name"
console.log(objects['first' + nameKey]); //the output is firstName, and it will print out firstName
console.log(objects['last' + nameKey]);//the output is lastName, and it will print out LastName


const interestedIn = prompt("What do you want to know?- firstName, lastName, age, job and friends")
if (objects[interestedIn]) {
  console.log(objects[interestedIn]);
}
else {
  console.log("not on the list, wrong request");
} 

objects.location = "Spain"
objects["Twitter"] = "@TWITTIEEE"

console.log(objects);

//Challenge
// "Jon" has "3" friends, and his best friend is "Michael"

console.log(`${objects.firstName} has ${objects.friends.length} friends, and his best friend is ${objects.friends[0]}`);
*/


/* const objects = {
  firstName: "Jonas",
  lastName: "Snow",
  birthYear: 1997,
  job: "Teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriverLicense: true,

  //adding expression
  calcAge: function () {
    this.age = 2024 - this.birthYear  //"this" relates to actual object itself
    return this.age
  },

  getSummary: function () {
    console.log(`${this.firstName} is a ${this.age} ${this.job}, and he can${this.hasDriverLicense ? " drive" : "'t drive"}`);
  }
};

objects.calcAge()

//console.log(objects.age)

//challenge
//Jonas is a 46 year old teacher. and he has a driver's license
objects.getSummary(); */

/*
for(let rep = 1; rep <=10; rep++ ) {
console.log(`lifting weight repetition ${rep}`)
} //loop consists of 3 parts. first one is initial value of the counter starting here with number 1. Second, Loop will stop at given , third one is by how much it is added
*/

/*

const objects = [
   "Jon",
   "Snow",
  2024 - 1978,
  "Killa",
  ["Michael", "Peter", "Steven"],
  true,
]

const types = []
//reading from array
for (let i = 0; i < objects.length ;i++){
  //console.log(objects[i]),

  //filling types of array
 // types[i] = typeof objects[i]

  types.push(typeof objects [i])
}

//console.log(types)

const years = [1991,2007,1969,2020]
const ages = []

for (let i =0;i < years.length; i++ ){

  ages.push(2024 - years[i])
}
//console.log(ages)

//continue and break 
console.log(`---Only Strings---`)
for (let i = 0; i < objects.length ;i++){

  if(typeof objects[i] !== `string`) continue //continue skips (in this case, whatever is a not string is skipped)
  console.log(objects[i]),typeof objects[i]
}
console.log(`---Break with Number---`)
for (let i = 0; i < objects.length ;i++){

  if(typeof objects[i] == `number`) break //Break stops the whole code if one variable is found
  console.log(objects[i]),typeof objects[i]
} */
/*
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
*/


//While Loop
let rep = 1
while (rep <=10){
  console.log(`rep ${rep}`)
  rep++
}