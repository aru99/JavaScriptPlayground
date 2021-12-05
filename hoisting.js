"use strict";

//trying to access the variables before declaring
console.log(me);
console.log(addDel(5, 4));
console.log(addExp(5, 4));
console.log(addArrow(5, 4));
// console.log(job);
// console.log(year);

var me = " arman";
let job = "developer";
const year = 1998;

//functions
function addDel(a, b) {
  return a + b;
}

const addExp = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
