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

const bookings = [];

const createBooking = function (
  flightNum,
  numPassangers = 1,
  price = 199 * (numPassangers / 5.2)
) {
  //setting default parameters ES5
  //numPassangers = numPassangers || 1;
  //price = price || 199;

  //enhanced oobject lieteral
  const booking = {
    flightNum,
    numPassangers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH134", 100);
createBooking("LH456", 123);
createBooking("LH234", undefined);
*/

const flight = "LH2345";
const travelerDetails = {
  name: "Mohammad Arman ",
  passportNumber: 2345678,
  gender: "M",
};

const checkIn = function (flightNumber, person) {
  flightNumber = "LH999";
  if (person.gender === "M") {
    person.name = "Mr. " + person.name;
  } else if (person.gender === "F") {
    person.name = "Ms. " + person.name;
  }

  if (person.passportNumber === 2345678) {
    console.log("Checked In");
  } else {
    console.log("Wrong Passport");
  }
};

checkIn(flight, travelerDetails);
console.log(travelerDetails.name);
