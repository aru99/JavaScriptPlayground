"use strict";

// //constant value
// const age = 29;
// //dynamic vaue
// let canDrink = false;
// //tertinary if else statement, conditional terniary operator
// age > 18 ? (canDrink = true) : (canDrink = false);

// console.log(canDrink);
// //template literal
// console.log(`can the person drink : ${canDrink}`);

// //type coercion example
// let n = "1" + 1;
// n = n - 1;
// console.log(n);

//  todo: coding challenge 1
// const markHeight = 1.69;
// const markWeight = 78;

// const johnHeight = 1.95;
// const johnWeight = 92;

// //calculating BMIs
// const markBmi = markWeight / markHeight ** 2;
// const johnBmi = johnWeight / johnHeight ** 2;

// let markHeigherBMI = markBmi > johnBmi;
// console.log(markHeigherBMI);
// //logic: using conditional tertinary conditional statement to compare the BMI's
// markBmi > johnBmi
//   ? console.log(`mark's BMI ${markBmi} is higher than John's BMI ${johnBmi}`)
//   : console.log(`John's BMI
// ${johnBmi} is higher than Mark's BMI ${markBmi}`);
// done:

//todo: CC4
// const billValue = 250;

// const tipValue =
//   billValue > 50 && billValue < 300 ? 0.15 * billValue : 0.2 * billValue;

// const totalBillValue = billValue + tipValue;

// console.log(
//   `The bill was ${billValue} and the Tip was ${tipValue} thus the Total is ${totalBillValue}`
// );
// //done:

//todo: Functions coding Challenge

// NOTE: always define your function at the top of the file before using it
// const calcAverage = (sc1, sc2, sc3) => {
//   return (sc1 + sc2 + sc3) / 3;
// };

// const dolphinAvgScore = calcAverage(10, 20, 30);
// const koalasAvgScore = calcAverage(30, 40, 50);
// console.log(dolphinAvgScore, koalasAvgScore);

// const checkWinner = function (avgDolphin, avgKoala) {
//   if (avgDolphin > avgKoala) {
//     console.log(`Dolphins win (${(avgDolphin, avgKoala)})`);
//   } else if (avgKoala > avgDolphin) {
//     console.log(`Koalas win (${avgKoala} ${avgDolphin})`);
//   }
// };

// checkWinner(dolphinAvgScore, koalasAvgScore);
// //done:

// todo: CC Arrays

// let tipValue;

// // function to calculate the tip value
// const calcTip = (billValue) => {
//   billValue >= 50 && billValue <= 300
//     ? (tipValue = billValue * 0.15)
//     : (tipValue = billValue * 0.2);
//   return tipValue;
// };

// console.log(calcTip(100));
// const billsArr = [125, 555, 44];
// const bills = [125, 555, 44];
// const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// console.log(tip);

// let total = [];

// for (let i = 0; i < bills.length; i++) {
//   console.log(bills[i], tip[i]);
//   total.push(bills[i] + tip[i]);
// }
// console.log(total);
// // done:

// todo: Object CC

const mark = {
  name: `Mark Shannon`,
  height: 1.69,
  weight: 78,
  markBMI: function () {
    this.BMI = this.weight / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  name: `John doe`,
  height: 1.95,
  weight: 92,
  johnBMI: function () {
    this.BMI = this.weight / this.height ** 2;
    return this.BMI;
  },
};

console.log(mark.markBMI(), john.johnBMI());

if (mark.markBMI() > john.johnBMI()) {
  console.log(
    `${mark.name}'s BMI of ${mark.BMI} is higher than ${john.name}'s BMI of ${john.BMI}`
  );
} else if (john.johnBMI() > mark.markBMI()) {
  console.log(
    `${john.name}'s BMI of ${john.BMI} is higher than ${mark.name}'s BMI of ${mark.BMI}`
  );
}
// done:
