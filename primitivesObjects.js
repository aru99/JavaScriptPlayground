"use strict";

// let age = 30;
// let oldAge = age;
// age = 31;

// console.log(age, oldAge);

// const me = {
//   name: "arman",
//   age: 25,
// };

// const friend = me;
// friend.age = 30;
// console.log(me, friend);

//primitive vlaue
let lastName = "williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

//reference values
const jessica = {
  firstName: "jessica",
  lastName: "wells",
};

const marriedJessica = jessica;
marriedJessica.lastName = "davis";
console.log("before marrige : ", jessica.lastName);
console.log("after marrige:", marriedJessica.lastName);

//copying objects
const arm = {
  firstName: "mohammad",
  lastName: "Arman",
  age: 23,
  job: "developer",
};

const devArm = Object.assign({}, arm);
devArm.job = "business Owner";
console.log(
  arm,
  `
`,
  devArm
);
