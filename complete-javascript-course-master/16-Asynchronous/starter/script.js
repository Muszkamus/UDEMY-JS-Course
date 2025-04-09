'use strict'; // Enables strict mode for better error-checking and safer JavaScript
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok)
      throw new Error(`${errorMsg} ${response.status} Try again!`); // If response fails, throw an error
    return response.json(); // Otherwise, convert response body to JSON
  });
};

// Promise.race

(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/poland`),
    getJSON(`https://restcountries.com/v2/name/mexico`),
  ]);
})();
const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long!`));
    }, sec * 1000);
  });
};

Promise.race([getJSON(`https://restcountries.com/v2/name/italy`), timeout(1)])
  .then(res => console.log(res[0]))
  .catch(err => console.log(err));

// Promise.allSettled
