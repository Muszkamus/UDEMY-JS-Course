'use strict';
// Object literal is the hardcoded information in the program
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  //Mon-Thu
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  //Friday
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};
//console.log(openingHours);
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 Enhanced object literal (Adding another variable)
  openingHours,
  //Functions (Removing function word, but function still works)
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

const airLine = 'TAP Air Portugal';

console.log(airLine.toLowerCase());
console.log(airLine.toUpperCase());

// Fix capitalisation in name

const changing = function (name) {
  const passengerLower = name.toLowerCase();
  const passengetCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
  console.log(passengetCorrect);
};
changing('RaDoSlaw');

// Comparing email
const email = 'hello@radek.io';
const loginEmail = '   Hello@Radek.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim(); // Same as the above
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.'); // First one is what we want to change, second is what we are changing it to
console.log(priceUS);

const announcement =
  'All Passengers come to barding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate')); //Only works on the first occurence

console.log(announcement.replace(/door/g, 'gate')); // /door/g means it will be global change (close to replaceALL)

// Booleans
const plane = 'Airbus A320neo';
//console.log(plane.includes('A32')); // Gives true when string is shown
//console.log(plane.startsWith('')); // Gives true if given strign starts with it

if (plane.startsWith('Air') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family!');
} else {
  ('Not a family');
}

// Practice exercise
const checkBaggage = function (items) {
  // Make sure they dont board thep plance with specific items
};
checkBaggage('I have a laptop, some Food, and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snack and a gun for protection');
