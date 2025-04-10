'use strict';
//Exporting module
console.log('Exporting module');

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity };

export default function (product, quantity) {
  //Default is not advisable unless 1 default is used per module
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart`);
}
