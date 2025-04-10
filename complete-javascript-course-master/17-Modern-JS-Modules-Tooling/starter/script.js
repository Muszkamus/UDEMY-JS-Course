'use strict';

// Importing module

// import {
//   addToCart,
//   totalPrice as price,
//   totalQuantity as quantity,
// } from './shoppingCart.js';

// addToCart('bread', 5);
// console.log(price, quantity);

console.log('Importing module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice); // Bad practice

import add from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 3);
