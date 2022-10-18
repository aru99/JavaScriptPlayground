"use strict";

let mark_height, mark_mass, mark_bmi, john_height, john_mass, john_bmi;
let BMI = (user_height, user_mass) => {
  return user_mass / user_height ** 2;
};
//let markHigherBMI = true;
mark_height = 1.88;
mark_mass = 95;
mark_bmi = BMI(mark_height, mark_mass);

john_height = 1.76;
john_mass = 85;
john_bmi = BMI(john_height, john_mass);

// this was a very basic way of comparison
// if (mark_bmi > john_bmi) {
//   console.log(markHigherBMI);
// } else {
//   markHigherBMI = false;
//   console.log(markHigherBMI);
// }

// better way of comparision
const markHigherBMI = mark_bmi > john_bmi;
console.log(markHigherBMI);

// adding a good message with the final results
if (mark_bmi > john_bmi) {
  console.log(
    `Mark's BMi of (${mark_bmi}) is higher than Jonh's BMI of (${john_bmi}) with a difference of (${
      mark_bmi - john_bmi
    })`
  );
} else if (john_bmi > mark_bmi) {
  console.log(
    `John's BMI of (${john_bmi}) is greater than marks BMI of (${mark_bmi}), with a difference of (${
      john_bmi - mark_bmi
    })`
  );
} else if (john_bmi == mark_bmi) {
  console.log(`both mark and john have the same BMI of (${john_bmi})`);
}
