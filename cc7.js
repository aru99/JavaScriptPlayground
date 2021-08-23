"use strict";

// const arm = {
//   firstName: "Arman",
//   lastName: "Mohammad",
//   birthYear: 1998,
//   job: "Product manager",
//   friends: ["prithvi", "aman", "Akash", "kumu"],
//   hasDriversLicense: true,

//   // calcAge: function () {
//   //   return 2021 - this.birthYear;
//   // },

//   calcAge: function () {
//     this.age = 2021 - this.birthYear;
//     return this.age;
//   },

//   personDescription: function () {
//     return `${this.firstName} ${
//       this.lastname
//     } is ${this.calcAge()} years old and is working as a ${
//       this.job
//     } and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
//   },
// };

// console.log(arm.personDescription());
// console.log(arm.calcAge());
// console.log(arm.age);
// console.log(
//   `${arm.firstName} has ${arm.friends.length} and his best friend is ${arm.friends[3]} and he is ${arm.age} years old`
// );

const mark = {
  name: "Mark",
  mass: 78,
  height: 1.69,
  // function to calculate the BMI
  calcBmi: function () {
    // calculating and adding a new property BMI in mark object
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  name: "John",
  mass: 92,
  height: 1.95,
  //function to calculate the BMI
  calcBmi: function () {
    // calculating and add a new property BMI in john object
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

if (john.calcBmi() > mark.calcBmi()) {
  console.log(
    `${john.name}'s BMI of (${john.BMI}) is higher than that of ${mark.name}'s BMI of (${mark.BMI})`
  );
} else if (mark.BMI > john.BMI) {
  console.log(
    `${mark.name}'s BMI of (${mark.BMI}) is higher than that of ${john.name}'s BMI of (${john.BMI})`
  );
}
