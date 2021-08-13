"use strict";

const billsArr = [125, 555, 44];

const calcTip = function (billValue) {
  if (billValue >= 50 || billValue <= 300) {
    return billValue * 0.15;
  } else if (billValue < 50 || billValue > 300) {
    return billValue * 0.2;
  }
};
const tipsArr = [
  calcTip(billsArr[0]),
  calcTip(billsArr[1]),
  calcTip(billsArr[2]),
];
console.log(tipsArr);
const total1 = [
  tipsArr[0] + billsArr[0],
  tipsArr[1] + billsArr[1],
  tipsArr[2] + billsArr[2],
];

const total2 = billsArr + tipsArr;
console.log(total2);
console.log(total1);
