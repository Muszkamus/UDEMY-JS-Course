'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  this.calcAge = function () {
    console.log(2024 - this.birthYear);
  };
};
const radek = new Person('Radek', 1997);
console.log(radek);

// 1. New {} is created
// 2. Function is called, this = {}
// 3. {} linked to prorotype
// 4. function automatically return {}
console.log(radek instanceof Person); // true,
console.log(radek.calcAge());
