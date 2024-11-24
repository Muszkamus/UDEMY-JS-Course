"use strict";

const person = {
  name: "Radek",
  age: 27,
  hobbies: [],

  // Add multiple hobbies
  addHobbies: function (...hobbies) {
    this.hobbies.push(...hobbies); // Spread the hobbies into the array
    console.log(`Hobbies added: ${hobbies.join(", ")}`);
  },

  // Introduce the person and their hobbies
  greeting: function () {
    const hobbiesList =
      this.hobbies.length > 0
        ? `My hobbies are: ${this.hobbies.join(", ")}.`
        : "I don't have any hobbies yet.";
    console.log(
      `Hi, my name is ${this.name} and I am ${this.age} years old. ${hobbiesList}`
    );
  },
};

// Call the methods
person.greeting(); // Introduce without hobbies
person.addHobbies("coding", "gym"); // Add multiple hobbies
person.greeting(); // Introduce with hobbies
