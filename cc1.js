// let message = "hello world";
// let x = 10;
// let y = 20;
// let fullAge = true;

// console.log(message);

// if (x < y) {
//   console.log("x is less than y");
// } else {
//   console.log("x is not less than y ");
// }

// if (fullAge) {
//   console.log(18);
// }

// let dynamicTypingVariable = 23;
// console.log(dynamicTypingVariable, typeof dynamicTypingVariable);
// dynamicTypingVariable = "arman";
// console.log(dynamicTypingVariable, typeof dynamicTypingVariable);

// =============== CODING CHALLENGE STARTS HERE ====================== //

let markHeigherBMI;

const markHeight = 1.69;
const markWeight = 78;

const johnHeight = 1.95;
const johnWeight = 92;

console.log(
  (markHeigherBMI = markWeight / markHeight ** 2 > johnWeight / johnHeight ** 2)
);

if (markHeigherBMI) {
  console.log(markWeight / markHeight ** 2);
}
