'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const renderCountry = function (data, className) {
  const html = `
  <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row">👫<span></span>${(
            +data.population / 1000000
          ).toFixed(1)} million people</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span> ${data.currencies[0].name}</p>
      </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok)
      throw new Error(`${errorMsg} ${response.status} Try again!`); // If response is not OK, throw an error
    return response.json(); // Convert response to JSON
  });
};

const getCountryData = function (country) {
  // Fetch country data from the API using the given country name

  getJSON(`https://restcountries.com/v2/name/${country}`, 'country not found')
    .then(data => {
      renderCountry(data[0]);
      console.log(data); // Display the country details
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error('No neighbour found');
      // Fetch data for the neighboring country
      return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(data => renderCountry(data, 'neighbour')) // Display neighbor country details
    .catch(err => console.error(err)); // Catch and log any errors
};

// When the button is clicked, fetch data for 'kdkd' (which is not a real country)
btn.addEventListener('click', function () {
  getCountryData('japan');
});
//        ////////////////OLD
// const getCountryData = function (country) {
//   // Fetch country data from the API using the given country name
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response); // Log the response to see if it's successful
//     })
//     .then(data => {
//       renderCountry(data[0]); // Display the country details
//       const neighbour = data[0].borders ? data[0].borders[0] : null; // Get the first neighboring country (if it exists)

//       if (!neighbour) return; // If no neighbor, stop here

//       // Fetch data for the neighboring country
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => response.json()) // Convert neighbor country response to JSON
//     .then(data => renderCountry(data, 'neighbour')) // Display neighbor country details
//     .catch(err => console.error(err)); // Catch and log any errors
// };

// // When the button is clicked, fetch data for 'kdkd' (which is not a real country)
// btn.addEventListener('click', function () {
//   getCountryData('lol');
// });
