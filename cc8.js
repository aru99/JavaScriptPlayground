"use strict";

// const arm = [
//   "arman",
//   "mohammad",
//   2021 - 1998,
//   "Product Manager",
//   ["Akash", "Aman", "Arnab", "Prashant"],
// ];
// const types = [];
// for (let armIndex = 0; armIndex < arm.length; armIndex++) {
//   console.log(arm[armIndex]);

//   //   for accessing the elements of the friends array in the arm array
//   if (armIndex === arm.length - 1) {
//     for (let i = 0; i < arm[arm.length - 1].length; i++) {
//       console.log(arm[arm.length - 1][i]);
//     }
//   }
//   //filling types array
//   types[armIndex] = typeof arm[armIndex];
// }

// console.log(types);

// console.log(`-----------only strings--------`);
// for (let i = 0; i < arm.length; i++) {
//   if (typeof arm[i] !== "string") continue;
//   console.log(arm[i], typeof arm[i]);
// }

// console.log(`--------looping backwards---------`);
// for (let index = arm.length - 1; index > 0; index--) {
//   console.log(arm[index]);
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`you rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) {
//     console.log(`loop is about to end`);
//   }
// }

const billsArry = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

const calcTip = function (billValue) {
  for (let index = 0; index < billValue.length; index++) {
    if (billValue[index] >= 50 || billValue[index] <= 300) {
      tips.push(billValue[index] * 0.15);
      total.push(billValue[index] + tips[index]);
    } else if (billvalue[index] < 50 || billValue[index] > 300) {
      tips.push(billValue[index] * 0.2);
      total.push(billValue[index] + tips[index]);
    }
  }
};

calcTip(billsArry);
console.log(tips);
console.log(total);

//calculating the average of the total

let sum = 0;
const calcAverage = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    console.log(`sum after adding ${sum}`);
  }
  return sum / arr.length;
};

const aver = calcAverage(total);
console.log(aver);
