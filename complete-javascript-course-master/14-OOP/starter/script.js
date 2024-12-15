'use strict';
// 226. Static Methods
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2024 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

jessica.greet();

// 1. Classes are not hoisted
// 2. Class are first-class citizens
// 3. Classes are executed in strict mode
// 4. Functions automatically return {}

const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 1967;
steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1978);
sarah.calcAge();
