"use strict";

function calcAge(birthYear) {
  const age = 2021 - birthYear;
  function printAge() {
    const output = `${firstName},your are ${age} years old, born in ${birthYear}`;
    console.log(output);
  }
  if (birthYear >= 1981 && birthYear <= 2000) {
    const str = `Oh you are a millenial, ${firstName}`;
  }

  printAge();
  return age;
}

const firstName = "Arm";
calcAge(1998);
