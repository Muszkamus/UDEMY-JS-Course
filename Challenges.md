# **FizzBuzz**

---

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

# **StudentDiscount 1.0**

---

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

---

# **Reversed String and Palindrome checker**

---

```js
"use strict";

const reverseString = function (string) {
  if (typeof string !== "string") {
    console.log("Invalid input: Please enter a valid string.");
    return false;
  }

  // Trim leading/trailing whitespace and normalize case
  const cleanedString = string.trim().toLowerCase();

  if (cleanedString.length === 0) {
    console.log(
      "The input is empty or only contains spaces. Please enter a valid string."
    );
    return false;
  }

  // Remove non-alphanumeric characters (e.g., spaces, punctuation)
  const sanitizedString = cleanedString.replace(/[^a-z0-9]/gi, "");

  // Reverse the sanitized string
  const reversed = sanitizedString.split("").reverse().join("");

  if (sanitizedString === reversed) {
    console.log(`Input: ${string}`);
    console.log(`Sanitized: ${sanitizedString}`);
    console.log(`Reversed: ${reversed}`);
    console.log("The string is a palindrome.");
    return true;
  } else {
    console.log(`Input: ${string}`);
    console.log(`Sanitized: ${sanitizedString}`);
    console.log(`Reversed: ${reversed}`);
    console.log("The string is not a palindrome.");
    return false;
  }
};

const input = prompt("Enter your string here");
reverseString(input);
```

---

# **Find the Longest Word in a String**

---

```js
"use strict";

// find the longest word
const phrase = "The quick brown fox jumped over the lazy dog";

const longestWord = function (string) {
  const splitter = string.split(" ");
  let max = splitter[0];

  //The idea is to keep adding max to max with string length.
  //console.log(splitter);
  for (let i = 0; i < splitter.length; i++) {
    const current = splitter[i];
    if (current.length > max.length) max = current;
  }
  console.log(phrase);
  console.log(`The longest word is: ${max}`);
  return max;
};

longestWord(phrase);
```
