'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

//-----Classes start -----
class App {
  // private instance properties
  #map;
  #mapEvent;

  //Constructor function, executed as soon as the object instance is creadted
  constructor() {
    this._getPosition();

    //submitting the form and displaying the marker
    form.addEventListener('submit', this._newWorkout.bind(this));
    //toggling the form field based on the workout type
    inputType.addEventListener('change', this._toggleElevationField);
  }

  //   getttting user position
  _getPosition() {
    if (navigator.geolocation) {
      // using geolocation API, geolocation.getcurrentPosition() takes in two call back functions,1) post successful location 2) in case of an error while getting the coordinates
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your position');
        }
      );
    }
  }

  //   Loading map
  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];

    //   ----- Leaflet map implementation start-----
    this.#map = L.map('map').setView(coords, 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    //clicking on locations and putting a pin there
    this.#map.on('click', this._showForm.bind(this));

    //   ----- Leaflet map implementation end-----
  }

  //   displaying form on click
  _showForm(mapE) {
    this.#mapEvent = mapE;
    //Rendering the form on click
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  //   elevation field toggle
  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  //   new workout
  _newWorkout(e) {
    e.preventDefault();
    // clearing inout fields

    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';

    //display marker
    const { lat, lng } = this.#mapEvent.latlng;
    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: 'running-popup',
        })
      )
      .setPopupContent('Workout')
      .openPopup();
  }
}

//-----Classes end -----

// -----app start----

const app = new App();

// -----app end----
