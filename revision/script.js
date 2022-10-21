"use strict";

const dolphinScores = [96, 108, 89];
const koalaScore = [88, 81, 110];

let averageScoreDolphin, averageScoreKoala;

const averageScore = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};

console.log(averageScore(dolphinScores));

// const firstName = "Arman";
// const job = "Vp tech";
// const description = `My name is ${firstName} and I work as a ${job}`;
// console.log(description);

// // ------------------------------------------------------
// // Mark info : height and weight
// const markHeight = 169;
// const markWeight = 78;

// // John info : height and weight
// const johnHeight = 195;
// const johnWeight = 92;
// let message;

// if (johnWeight / johnHeight ** 2 > markWeight / markHeight ** 2) {
//   message = `John's BMI of ${
//     johnWeight / johnHeight ** 2
//   } is heigher than Mark's BMI of ${markWeight / markHeight ** 2}`;
// } else {
//   message = `Mark's BMI of  ${
//     markWeight / markHeight ** 2
//   } is heigher than John's BMI of ${johnWeight / johnHeight ** 2}`;
// }

// console.log(message);

// const markHeigherBmi =
//   markWeight / markHeight ** 2 > johnWeight / johnHeight ** 2;
// console.log(markHeigherBmi);

// var name = "first name";
// console.log(name);
