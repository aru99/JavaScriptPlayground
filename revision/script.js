"use strict";

const bills = [125, 555, 44];
const tips = [];
const totalAmountValue = [];
const calcTip = function (billarr) {
  let tip = 0;
  for (let i = 0; i < billarr.length; i++) {
    tip =
      billarr[i] >= 50 && billarr[i] <= 300
        ? billarr[i] * 0.15
        : billarr[i] * 0.2;
    tips.push(tip);
    console.log(tip);
  }
};

const totalValue = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      totalAmountValue.push(arr1[i] + arr2[i]);
      console.log(totalAmountValue);
    }
  } else {
    console.log(`'bill and tips values don't align`);
  }
};

calcTip(bills);
totalValue(bills, tips);

/*
const dolphinScores = [44, 23, 71];
const koalaScores = [65, 54, 49];

const calcAverage = (scores) => {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum = sum + scores[i];
  }

  return sum / scores.length;
};

const checkWinner = function (avgScore1, avgScore2) {
  avgScore1 > avgScore2
    ? console.log(`Dolphins win (${avgScore1} vs ${avgScore2})`)
    : console.log(`Koalas win (${avgScore2} vs ${avgScore1}) `);
};

checkWinner(calcAverage(dolphinScores), calcAverage(koalaScores));


todo: make a tip calculator


const billValue = 275;
const tipValue =
  billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
console.log(`The tip value is ${tipValue}`);
console.log(
  `The bill was ${billValue}, the tip was ${tipValue} annd the total bill amount is ${
    billValue + tipValue
  }`
);

*/
/*
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
*/
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
