"use strict";

// j[9,16,6,8,3] k[10,5,6,1,4]
const juliaArr = [3, 5, 2, 12, 7];
const kateArr = [4, 1, 15, 8, 3];

const checkDogs = function (dogsjulia, dogskate) {
  // creating a shallow copy
  const dogsJuliaCorrected = dogsjulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  console.log(dogsJuliaCorrected);
  const dogs = dogsJuliaCorrected.concat(dogskate);
  console.log(dogs);
  //looping over dogs and finding which is dog which is puppy
  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an Adult and is ${dog} years old`);
    } else if (dog < 3) {
      console.log(`DOg number ${i + 1} is stil a Puppy`);
    }
  });
};

checkDogs(juliaArr, kateArr);

// const juliaArr = [3, 5, 2, 12, 7];
// const kateArr = [4, 1, 15, 8, 3];

const calcAverageHumanAge = function (dogAgesArr) {
  const dogAgeHumanYears = dogAgesArr.map(function (age) {
    if (age <= 2) {
      return 2 * age;
    } else if (age > 2) {
      return 16 + age * 4;
    }
  });
  return dogAgeHumanYears
    .filter(function (ages) {
      return ages > 18;
    })
    .reduce(function (acc, curr, i, arr) {
      acc += curr;
      return Math.trunc(acc / arr.length);
    }, 0);
};

console.log(juliaArr, calcAverageHumanAge(juliaArr));
