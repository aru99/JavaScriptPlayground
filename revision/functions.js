"use strict";

const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

/**
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
