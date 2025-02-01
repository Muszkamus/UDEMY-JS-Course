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

// Fetch request to get data for Portugal (returns a Promise)
const request = fetch('https://restcountries.com/v2/name/portugal');

const getCountryData = function (country) {
  // Fetch country data from the API
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json()) // Convert response to JSON
    .then(data => renderCountry(data[0])); // Pass the first country object to render function
};

// Call the function to get data for Japan
getCountryData('japan');
