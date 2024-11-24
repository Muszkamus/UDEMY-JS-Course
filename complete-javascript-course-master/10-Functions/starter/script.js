'use strict';
// More closure examples

// USe GPT to explain
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

g();
f();
