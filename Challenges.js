"use strict";

const foo = function (string) {
  const object = {};
  const split = string.toLowerCase().split("");
  for (let i = 0; i < split.length; i++) {
    if (object[split[i]]) {
      object[split[i]] += 1; // Increment count if the character exists
    } else {
      object[split[i]] = 1; // Initialize with 1 if the character is new
    }
  }
  console.log(object);
};
foo("Hello world");
