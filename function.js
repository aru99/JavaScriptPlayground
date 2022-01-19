"use strict";
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassangers = 1,
  price = 199 * numPassangers
) {
  //ES5 way of having deffault values
  //numPassangers = numPassangers || 1;
  //price = price || 199;
  const booking = {
    flightNum,
    numPassangers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123", 10);
*/
const flight = "LH234";
const ayesha = {
  name: "Ayesha",
  passport: 1234567,
};

const checkIn = (flightNum, passanger) => {
  flightNum = "LH999";
  passanger.name = "Ms." + passanger.name;

  if (passanger.passport === 1234567) {
    console.log("checked In");
  } else {
    alert("wrong passanger passport");
  }
};

checkIn(flight, ayesha);
console.log(flight);
console.log(ayesha);
