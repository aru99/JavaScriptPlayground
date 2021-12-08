"use strict";

// console.log(this);
// const calcAge = function (birthYear) {
//   console.log(2021 - birthYear);
//   console.log(this);
// };

// calcAge(1998);

// const calcAgeArrow = (birthYear) => {
//   console.log(2021 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1998);

// const user = {
//   name: "user_name",
//   year: 1998,
//   calcAge: function () {
//     console.log(this);
//     console.log(2021 - this.year);
//   },
// };

// user.calcAge();

// const user2 = {
//   year: 1996,
// };

// //method borrowing, since functions are variables we can do this
// user2.calcAge = user.calcAge;

// user2.calcAge();

// var name = "matilda";
const user = {
  name: "user_name",
  year: 1998,
  calcAge: function () {
    console.log(this);
    console.log(2021 - this.year);

    const isBoomer = () => {
      console.log(this);
      console.log(this.year >= 1961 && this.year <= 1996);
    };
    isBoomer();
  },

  greet: function () {
    console.log(`hi ${this.name}`);
  },
};

user.greet();
user.calcAge();

const addExpress = function () {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};

console.log(addExpress(2, 3, 5));
console.log(addExpress(2, 3, 4));
