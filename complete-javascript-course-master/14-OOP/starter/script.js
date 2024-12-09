'use strict';

// 209. Constructor Functions and the new Operator
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  // Grayed out as it unsufficient to run a lot of functions within objects.
  // this.calcAge = function () {
  //   console.log(2024 - this.birthYear);
  // };
};
const radek = new Person('Radek', 1997);
console.log(radek);

// 1. New {} is created
// 2. Function is called, this = {}
// 3. {} linked to prorotype
// 4. function automatically return {}
console.log(radek instanceof Person); // true,

/// 210. Prototypes
// Objects that are created through the constructor function here, will inherit all methods and properties that are defined on this prototype property.
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};
radek.calcAge(); // 27
console.log(radek.__proto__); // Shows the prototype property
console.log(radek.__proto__ === Person.prototype); //true
console.log(Person.prototype.isPrototypeOf(radek));

Person.prototype.species = 'Homo Sapiens';
console.log(radek); // It adds species and Homosapiens as value
console.log(radek.hasOwnProperty('species')); // False, as it is added through prototype, not in a class

//
