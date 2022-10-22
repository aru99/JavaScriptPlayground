"use strict";

const dolphinScores = [100, 100, 100];
const koalaScore = [88, 81, 110];

const averageScore = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};

if (
  averageScore(dolphinScores) > averageScore(koalaScore) &&
  averageScore(dolphinScores) >= 100
) {
  console.log(
    `Dophins with an average score of ${averageScore(dolphinScores)} wins `
  );
} else if (
  averageScore(koalaScore) > averageScore(dolphinScores) &&
  averageScore(koalaScore) >= 100
) {
  console.log(
    `Koalas with an average score of ${averageScore(koalaScore)} wins `
  );
} else if (
  averageScore(koalaScore) === averageScore(dolphinScores) &&
  (averageScore(dolphinScores) === averageScore(koalaScore)) === 100
) {
  console.log(`draw`);
}

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
