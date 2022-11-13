"use strict";

// j[9,16,6,8,3] k[10,5,6,1,4]
const juliaArr = [3, 5, 2, 12, 7];
const kateArr = [4, 1, 15, 8, 3];

const checkDogs = function (dogsjulia, dogskate) {
  // creating a shallow copy
  const dogsJuliaCorrected = dogsjulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  // console.log(dogsJuliaCorrected);
  const dogs = dogsJuliaCorrected.concat(dogskate);
  // console.log(dogs);
  //looping over dogs and finding which is dog which is puppy
  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      // console.log(`Dog number ${i + 1} is an Adult and is ${dog} years old`);
    } else if (dog < 3) {
      // console.log(`DOg number ${i + 1} is stil a Puppy`);
    }
  });
};

checkDogs(juliaArr, kateArr);

// const juliaArr = [3, 5, 2, 12, 7];
// const kateArr = [4, 1, 15, 8, 3];

const calcAverageHumanAge = function (dogAgesArr) {
  const dogAgeHumanYears = dogAgesArr
    .map(function (age) {
      if (age <= 2) {
        return 2 * age;
      } else if (age > 2) {
        return 16 + age * 4;
      }
    })
    .filter(function (ages, i, arr) {
      // console.log(arr);
      return ages > 18;
    })
    .reduce(function (acc, curr, i, arr) {
      // console.log(arr);
      acc += curr;
      return Math.trunc(acc / arr.length);
    }, 0);

  return dogAgeHumanYears;
};

// console.log(juliaArr, calcAverageHumanAge(juliaArr));

// CC2 data
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1.adding the recommended food value for each dog
dogs.forEach(function (dog) {
  dog.recFood = Math.trunc(dog.weight ** 0.75 * 28);
  return dog.recFood;
});

console.log(dogs);

// finding sarah's dog
const dogSarah = dogs.find(function (dog) {
  return dog.owners.includes("Sarah");
});

console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.recFood < dogSarah.curFood ? "much" : "little"
  }`
);
// owners, whose dogs eat too much
const ownersEatTooMuch = dogs
  .filter(function (dog) {
    return dog.curFood > dog.recFood;
  })
  .flatMap(function (dog) {
    return dog.owners;
  });

console.log(ownersEatTooMuch);
// owners whose dogs eat too little
const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooLittle);
// string
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little`);
//
console.log(dogs.some((dog) => dog.recFood === dog.curFood));
//
const checkEatingOkay = (dog) =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOkay));
//
console.log(dogs.filter(checkEatingOkay));
//
const dogsCopy = dogs.slice().sort(function (a, b) {
  return a.recFood - b.recFood;
});

console.log(dogsCopy);
