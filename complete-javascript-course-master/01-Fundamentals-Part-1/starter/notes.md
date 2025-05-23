let name = "name"; //Stores the value as a string, start with small letter
console.log(); //Print out console in the browser

let firstName = "Jonas";
console.log(firstName);

# **DATA TYPES**

* Number = floating point numbers used for decimals and integer `let age = 23;*`
* String = Sequence of characters used for text ` let firstName = "Jonas";`
* Boolean = Logical type that can only be true or false ` let fullage = true; `
* Undefined = Value taken by  a variable that is not yet defined ` let children;`
* Null = Also mean empty value
* Symbol = Value that is unique and cannot be changed
* BigInt = Larger integers than the Number can hold

# **Comments**

in JS = // and /* sample word */
in HTML = <!-- sample word --!>

# **Type Of**
```js
let sample = true
console.log(typeof sample); //Prints the type of data
```

# **Declaring variables**
let = something that can be changed in the future code
const = something that cannot be changed later (Use by default)
var = used before 2015

# **Basic Operators**
```js
***Assignment Operators
let x = 10 + 5; //The value is 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 =100
x++; // x = x + 1
x--; // x = x - 1

```
# **Operator Precedence**

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

```js
 x = y = 25 - 10 - 5 // x = y = 10
const averageage = (ageJonas + ageSarah) /2
console.log(ageJonas, ageSarah, averageage)
```
# **Template literals**
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

# **If Else statetements**
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

# **Type conversion and Coercion**
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
# **Falsy values**
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
# **Equality operators**

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

# **Logical operators**

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

# **Switch statetements**

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

# **Statements and expressions**
expressions = 3+4, 1991, true && false && !false //They are more like values

Statements = if (23 > 10) { // They are more like sentences
  const str = "23 is bigger"
}

# **The conditional (Ternary) Operator**
// Define a constant variable 'age' and assign it the value 28
const age = 28;

// Use a ternary operator to determine the value of 'drink' based on 'age'
// If 'age' is 18 or older, 'drink' will be set to "Wine"
// Otherwise, 'drink' will be set to "Water"
const drink = age >= 18 ? "Wine" : "Water";

// Print the value of 'drink' to the console
// In this case, since age is 28 (which is greater than 18), it will output "Wine"
console.log(drink);