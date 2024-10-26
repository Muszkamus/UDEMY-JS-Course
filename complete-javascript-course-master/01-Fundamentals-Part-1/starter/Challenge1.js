//BMI Calculator
let massMark = 78;
let heightMark = 1.69;
let BMIMark = massMark / (heightMark*heightMark);

let massJohn = 92;
let heightJohn = 1.95;
let BMIJohn = massJohn / (heightJohn*heightJohn);


console.log("Mark's BMI: ", BMIMark);
console.log("John's BMI: ", BMIJohn);

console.log("Is Mark's BMI higher? ", BMIMark > BMIJohn );