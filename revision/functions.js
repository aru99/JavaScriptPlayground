"use strict";

const greet = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}`);
  };
};

greet("hey")("Arman");
/**
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
