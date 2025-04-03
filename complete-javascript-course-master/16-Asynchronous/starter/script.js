'use strict'; // Enables strict mode for cleaner, error-checked JS

const btn = document.querySelector('.btn-country'); // Selects the button element
const countriesContainer = document.querySelector('.countries'); // Selects the container to display countries

// Function to render country info to the DOM
const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p> <!-- Population in millions -->
        <p class="country__row"><span>🗣️</span>${
          Object.values(data.languages)[0]
        }</p> <!-- First language -->
        <p class="country__row"><span>💰</span>${
          Object.values(data.currencies)[0].name
        }</p> <!-- Currency name -->
      </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html); // Insert HTML into DOM
  countriesContainer.style.opacity = 1; // Make container visible
};

// Returns a Promise for geolocation
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// Async function to get user location and fetch country data
const WhereAmI = async function (country) {
  try {
    const pos = await getPosition(); // Wait for geolocation
    const { latitude: lat, longitude: lng } = pos.coords;

    // Calls geocoding API (not awaited, result unused)
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);

    // Fetch country data from REST Countries API
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const data = await res.json();
    console.log(data); // Log data to console
    renderCountry(data[0]); // Render the first result
  } catch (err) {
    console.error(`Error occured! > ${err}`);
    renderError(`${err.message}`);
  }
};

WhereAmI('portugal'); // Start with Portugal
console.log('First'); // Logs immediately, shows async behavior
