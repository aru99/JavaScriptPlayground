"use strict";

// Mark info : height and weight
const markHeight = 169;
const markWeight = 78;

// John info : height and weight
const johnHeight = 195;
const johnWeight = 92;

const markHeigherBmi =
  markWeight / markHeight ** 2 > johnWeight / johnHeight ** 2;
console.log(markHeigherBmi);

// var name = "first name";
// console.log(name);
