"use strict";

const firstName = "Arman";
const job = "Vp tech";
const description = `My name is ${firstName} and I work as a ${job}`;
console.log(description);

// ------------------------------------------------------
// Mark info : height and weight
const markHeight = 169;
const markWeight = 78;

// John info : height and weight
const johnHeight = 195;
const johnWeight = 92;
let message;

if (johnWeight / johnHeight ** 2 > markWeight / markHeight ** 2) {
  message = `John's BMI of ${
    johnWeight / johnHeight ** 2
  } is heigher than Mark's BMI of ${markWeight / markHeight ** 2}`;
} else {
  message = `Mark's BMI of  ${
    markWeight / markHeight ** 2
  } is heigher than John's BMI of ${johnWeight / johnHeight ** 2}`;
}

console.log(message);

// const markHeigherBmi =
//   markWeight / markHeight ** 2 > johnWeight / johnHeight ** 2;
// console.log(markHeigherBmi);

// var name = "first name";
// console.log(name);
