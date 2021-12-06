"use strict";

console.log(this);
const calcAge = function (birthYear) {
  console.log(2021 - birthYear);
  console.log(this);
};

calcAge(1998);

const calcAgeArrow = (birthYear) => {
  console.log(2021 - birthYear);
  console.log(this);
};

calcAgeArrow(1998);
