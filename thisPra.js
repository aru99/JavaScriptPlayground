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

const user = {
  name: "user_name",
  year: 1998,
  calcAge: function () {
    console.log(this);
    console.log(2021 - this.year);
  },
};

user.calcAge();

const user2 = {
  year: 1996,
};

//method borrowing, since functions are variables we can do this
user2.calcAge = user.calcAge;

user2.calcAge();
