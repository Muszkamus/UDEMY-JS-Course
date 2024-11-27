"use strict";
//
//
//
//
//
//

const input = [100, 4, 200, 1, 3, 2];

const longestConsecutiveSequence = function (arr) {
  const sorted = new Set(arr);
  for (const num of sorted) {
    // For sets, for each loop will not work.
    if (num === sorted.has(num - 1) && num + 1) {
      console.log("lower");
    }
  }
};

longestConsecutiveSequence(input);
