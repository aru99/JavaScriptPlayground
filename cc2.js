/*const name = "Arman";
const birthYear = 2005;
const CurrentYear = 2021;
const job = "Product Manager";

const arman = `I'm ${name}, a ${CurrentYear - birthYear} old ${job}`;
console.log(arman);
console.log(`this is just a regular string`);

// programe to check driving license eligibility

const validDrivingLicenseAge = 18;

if (CurrentYear - birthYear < 18) {
  console.log(
    `you need to wait ${
      18 - (CurrentYear - birthYear)
    } years to have a driving license`
  );
} else if (CurrentYear - birthYear >= 18) {
  console.log(`you can go and apply for the driving license
  as you are ${CurrentYear - birthYear} old`);
}
*/

// -------------- CC2 ------------------

// variabes for mark
const markHeight = 1.69;
const markWeight = 78;

// variables for john
const johnHeight = 1.95;
const johnWeight = 92;

const markBmi = markWeight / markHeight ** 2;
const johnBmi = johnWeight / johnHeight ** 2;

if (markBmi > johnBmi) {
  console.log(
    `Mark's BMI of (${markBmi}) is higher than John's BMI of (${johnBmi})`
  );
} else if (johnBmi > markBmi) {
  console.log(
    `John's BMI of (${johnBmi}) is higher than Mark's BMI of (${johnBmi})`
  );
}
