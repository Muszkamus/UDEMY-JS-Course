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
const plane = 'A320';

console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2

console.log(airLine.length); // 16
console.log('B737'.length); // 4

console.log(airLine.indexOf('r')); // 6 as this is thep osition of the character (Even the space counts)
console.log(airLine.lastIndexOf('r')); // space 10 but tfrom the right to left
console.log(airLine.indexOf('Portugal')); // -1 if not found, and 8 if found (position of the first letter)

console.log(airLine.slice(4)); // Slices first 4 characters
console.log(airLine.slice(4, 7)); // Slices first 4 characters and starts again at 7 (7-4) = 4 characters

console.log(airLine.slice(0, airLine.indexOf(' '))); // Prints first word
console.log(airLine.slice(airLine.lastIndexOf(' ') + 1)); //Prints last word and add +1 to get rid of the space at the beginning

console.log(airLine.slice(-2)); // Shows the last 2 characters
console.log(airLine.slice(1, -1)); //Cuts first and last character of the string
console.log('-------------------------');

const checkMiddleSeat = function (seat) {
  // B and E and middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log("It's a middle seat!");
  } else console.log('');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('radek')); //It's an object
