"use strict";

// //function declaration
// function ageCalculator(birthYear) {
//   return 2021 - birthYear;
// }
// const age1 = ageCalculator(1998);
// console.log(age1);

// //function expression
// const ageCalculator2 = function (birthYear) {
//   return 2021 - birthYear;
// };

// console.log(ageCalculator2(1998));

// // arrow function

// const ageCalculator3 = (birthYear) => 2021 - birthYear;
// const age3 = ageCalculator3(1998);
// console.log(age3);

// const yearsUntillRetirement = (birthYear) => {
//   const age = 2021 - birthYear;
//   const retirement = 65 - age;
//   return ` ${age}, ${retirement}`;
// };

// console.log(yearsUntillRetirement(1998));

//=======================================functions caling another function

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// //--FN JjuiceMaker S --
// function juiceMaker(numberOfApples, numberOfOranges) {
//   //callinganother function CutFruitPieces which will return us the number of fruit piecies
//   const applePieces = cutFruitPieces(numberOfApples);
//   const orangePieces = cutFruitPieces(numberOfOranges);

//   //
//   console.log(numberOfApples, numberOfOranges);
//   console.log(applePieces, orangePieces);
//   const juice = `juice with ${numberOfApples} apples and ${numberOfOranges} oranges`;
//   return juice;
// }
// //--FN JjuiceMaker E --

// const appleJuice = juiceMaker(3, 4);
// console.log(appleJuice);

// const calcAge = function (birthYear) {
//   return 2021 - birthYear;
// };

// const retirementVerification = function (retirementAge) {
//   if (retirementAge < 0) {
//     return `you have already retired`;
//   } else if (retirementAge > 0) {
//     return `you will retire in ${retirementAge} years`;
//   }
// };

// const yearsUntillRetirement = function (birthYear) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   return ` ${age}, ${retirementVerification(retirement)}`;
// };

// console.log(yearsUntillRetirement(1998));

//====================CC5==================

const calcAverage = (sc1, sc2, sc3) => {
  return (sc1 + sc2 + sc3) / 3;
};
const AvgScoreDoplhins = calcAverage(10, 10, 10);
const AvgScoreKoalas = calcAverage(20, 20, 20);
console.log(AvgScoreDoplhins, AvgScoreKoalas);

//--- FN chechWinner S ---
const checkwinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins / avgKoalas >= 2) {
    return `Dolphins win ${AvgScoreDoplhins} VS ${AvgScoreKoalas}`;
  } else if (avgKoalas / avgDolphins >= 2) {
    return `Koalas win ${AvgScoreKoalas} vs ${AvgScoreDoplhins}`;
  } else {
    return `no one wins..`;
  }
};
//--- FN chechWinner E ---
console.log(checkwinner(AvgScoreDoplhins, AvgScoreKoalas));
