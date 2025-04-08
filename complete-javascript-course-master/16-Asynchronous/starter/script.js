'use strict'; // Enables strict mode for cleaner, error-checked JS

const btn = document.querySelector('.btn-country'); // Selects the button element
const countriesContainer = document.querySelector('.countries'); // Selects the container to display countries

// Function to render country info to the DOM
const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${
          (+data.population / 1000000).toFixed(1) + 'm'
        } people</p> <!-- Population in millions -->
        <p class="country__row"><span>🗣️</span>${
          data.languages[0].name
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
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// Async function to get user location and fetch country data
const WhereAmI = async function () {
  try {
    const pos = await getPosition(); // Wait for geolocation
    const { latitude: lat, longitude: lng } = pos.coords;

    // Calls geocoding API (not awaited, result unused)
    const resGeo = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
    );
    if (!resGeo.ok) {
      throw new Error('Something went wrong with getting the location');
    }

    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    // Fetch country data from REST Countries API
    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.countryCode}`
    );
    if (!res.ok) {
      throw new Error('Something went wrong with getting the country');
    }
    const data = await res.json();
    //console.log(data); // Log data to console
    renderCountry(data[0]); // Render the first result

    return `You are in ${dataGeo.countryName}, ${dataGeo.locality}`;
  } catch (err) {
    console.error(`Error occured! > ${err}`);
    renderError(`${err.message}`);

    // Reject promise returned from async function
    throw err;
  }
};
console.log('1: Getting location...');
// const city = WhereAmI();
// console.log(city);

// WhereAmI()
//   .then(city => console.log(city)) // Waits for WhereAmI() to finish, then logs the returned location string
//   .catch(err => console.log(`2: ${err.message}`))
//   .finally(() => console.log(`3: Finished`)); // Finally is always at the end

(async function () {
  try {
    const city = await WhereAmI(); // Waits for location and country info
    console.log(`2: ${city}`); // Logs returned location string
  } catch (err) {
    console.error(`2: ${err.message}`); // Logs error message if something fails
  }
  console.log(`3: Finished`); // Always runs after try/catch
})(); // IIFE (Immediately Invoked Function Expression)
