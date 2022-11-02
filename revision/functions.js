"use strict";

const lufthansa = {
  name: "Lufthansa",
  iataCode: "LH",
  bookings: [],
};

const euroWings = {
  name: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = function (flightNum, name) {
  console.log(
    `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
  );
  this.bookings.push({ flight: `${this.iataCode}${this.flightNum}`, name });
};

book.call(lufthansa, 239, "arman");
book.call(euroWings, 345, "Rabbani");
console.log(euroWings);
console.log(lufthansa);

/**
const greet = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}`);
  };
};

greet("hey")("Arman");
const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

//HOF
const transformer = function (str, fn) {
  console.log(`Original String : ${str}`);
  console.log(`Transformed String : ${fn(str)}`);
  console.log(`Transformed by : ${fn.name}`);
};

transformer("Java script is the best ", upperFirstWord);
transformer("HTML is not a programming language", oneWord);
 * 
 const bookings = [];
 
 const createBooking = function (
     flightNumber,
  numPassanger = 1,
  price = 199 * numPassanger
  ) {
      //
      const booking = {
          flightNumber,
          numPassanger,
          price,
        };
        
        console.log(booking);
        bookings.push(booking);
        console.log(bookings);
    };
    
    createBooking("LH123");
    createBooking("LH123", 2, 200);
    createBooking("LH1234", 5);
    */
