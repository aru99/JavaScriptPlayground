"use strict";

let mark_height, mark_mass, mark_bmi, john_height, john_mass, john_bmi;
let BMI = (user_height, user_mass) => {
  return user_mass / user_height ** 2;
};
let markHigherBMI = true;
mark_height = 1.88;
mark_mass = 95;
mark_bmi = BMI(mark_height, mark_mass);

john_height = 1.76;
john_mass = 85;
john_bmi = BMI(john_height, john_mass);

if (mark_bmi > john_bmi) {
  console.log(markHigherBMI);
} else {
  markHigherBMI = false;
  console.log(markHigherBMI);
}
