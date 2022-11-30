'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
/*

const getCOuntryData = function (country) {
    const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
      const [data] = JSON.parse(this.responseText);
      console.log(data);
      const html = `
      <article class="country">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)}people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
</article>
  `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
});
};


    
    const getCountryAndNeighbour = function (country) {
        // AJAX call country 1
        const request = new XMLHttpRequest();
        request.open('GET', `https://restcountries.com/v2/name/${country}`);
        request.send();
        request.addEventListener('load', function () {
            const [data] = JSON.parse(this.responseText);
            console.log(data);
            
            // render country 1
            renderCountry(data);
            
            // render country 2
            const neighbour = data.borders?.[0];
            if (!neighbour) return;
            
            // ajax call country 2
            const request2 = new XMLHttpRequest();
            request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
            request2.send();
            request2.addEventListener('load', function () {
                console.log(JSON.parse(this.responseText));
                const data = JSON.parse(this.responseText);
                renderCountry(data, 'neighbour');
            });
        });
    };
    
    getCountryAndNeighbour('germany');
    */

const renderCountry = function (data, className) {
  const html = `
            <article class="country ${className}">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}people</p>
              <p class="country__row"><span>🗣️</span>${
                data.languages[0].name
              }</p>
              <p class="country__row"><span>💰</span>${
                data.currencies[0].name
              }</p>
              </div>
              </article>
              `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
// promises
const request = fetch(`https://restcountries.com/v2/name/portugal`);
console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

const getJson = function (url, errMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errMsg}, ${response.status} `);
    }
    return response.json();
  });
};

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);
//       // manually creating error message
//       if (!response.ok) {
//         throw new Error();
//       }
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       renderError(`Something went wrong XD ${err.message} TRY again `);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// const getCountryData = function (country) {
//   getJson(`https://restcountries.com/v2/name/${country}`, `country not found`)
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       if (!neighbour) throw new Error('No neighbour found !');
//       return getJson(
//         `https://restcountries.com/v2/alpha/${neighbour}`,
//         `Country not found`
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       renderError(`Something went wrong XD ${err.message} TRY again `);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};
btn.addEventListener('click', function () {
  getCountryData('australia');
});

// getCountryData('ssdsd');

// function
// const whereAmI = function (lat, lng) {
//   //fetching
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);
//       return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found(${res.status})`);
//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message} 💣`));
// };

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// console.log('Test Start');
// setTimeout(() => console.log('0 set timer'), 0);
// Promise.resolve('Resolve Promise 1').then(res => console.log(res));
// console.log('test end');

//---- promises-----

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log(`Lottery draw is hapenning`);
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve(`You Win :))`);
//     } else {
//       reject(new Error(`you lost :((`));
//     }
//   }, 3000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// // Promisifying SetTimout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log('i waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => console.log(` I waited for 1 second`));

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// // getPosition().then(pos => console.log(pos));
// // function
// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);
//       return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found(${res.status})`);
//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message} 💣`));
// };

// btn.addEventListener('click', whereAmI);

// ASYNC AWAIT
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // GEolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    // reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('problem getting location data');
    const dataGeo = await resGeo.json();
    // console.log(dataGeo);

    //   country data
    // awaiting for the promise that would be returned by the fetch function
    //   await will stop the execution of the code at this point of the function untill the promise is fulfilled
    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error(`Problem getting country `);
    console.log(res);
    const data = await res.json();
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(err);
    renderError(`Something went wrong ${err.message}`);

    // reject promise returned from async function
    throw err;
  }
};

console.log('1: Getting location');
// const city = whereAmI();
// console.log(city);

// whereAmI()
//   .then(city => console.log(city))
//   .catch(err => console.error(`2: ${err.message}`))
//   .finally(() => console.log('3: Finishaed getting location'));
(async function () {
  try {
    const city = await whereAmI();
    console.log(city);
  } catch (err) {
    console.error(` 2:${err.message}`);
  }
  console.log(`3: Finishaed getting location`);
})();
