"use strict";
///Sdtudent discount
const calculateTicketPrice = function (isStudent, age, hour) {
  let priceTicket = 12;
  if (isStudent) {
    priceTicket *= 0.8; // priceTicket = priceTicket * 0.8
  }
  if (age >= 65) {
    priceTicket *= 0.7;
  }
  if (age <= 12) {
    priceTicket *= 0.5;
  }

  if (hour < 16) {
    priceTicket *= 0.75;
  }
  return priceTicket;
};

let totalTicket = calculateTicketPrice(true, 22, 15);
console.log(totalTicket.toFixed(2)); //round by 2 decimals
