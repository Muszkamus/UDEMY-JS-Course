# FizzBuzz

```js
"use strict";

//FizzBuzz
for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
```

---

# StudentDiscount 1.0

```js
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
```
