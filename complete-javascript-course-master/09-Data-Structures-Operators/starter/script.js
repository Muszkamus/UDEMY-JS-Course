'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};
///
const ingredients = [
  //Each prompt is each new value
  prompt(`Let's make pasta! Ingeredient 1?`),
  prompt(`Ingeredient 2?`),
  prompt(`Ingeredient 3?`),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients); //same but quicker

///
const arr = [7, 8, 9];

const baddNewArr = [1, 2, arr[0], arr[1], arr[2]];
//console.log(baddNewArr);

//Spread operator
const newArr = [1, 2, ...arr];
//console.log(newArr);

//console.log(...newArr); // 1 2 7 8 9

const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
//console.log(newMenu); //['Pizza', 'Pasta', 'Risotto', 'Gnocchi']
//
//
//
//

//Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays or more

const menu = `Main Menu: ${[...restaurant.mainMenu]},
Starter Menu: ${[...restaurant.starterMenu]}`;
//console.log(menu);

//Spread operator works also on all so-called "iterables"
// Iterables: Strings, maps, arrays, sets but not objects
const str = 'Radek';
const letter = [...str, '', 'S.'];
//console.log(letter); // ['R', 'a', 'd', 'e', 'k', '', 'S.']
//console.log(...str); //Prints all individual letters = R a d e k
