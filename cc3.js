// console.log(`hello there this is cc3`);

// const numStr = `1998`;
// console.log(Number(numStr), numStr);

// const NumStr = Number(numStr);
// console.log(NumStr);

// if (0) {
//   console.log(`false`);
// } else if (1) {
//   console.log(`truthy`);
// }

// -------------- CC3 ------------------

const dolphinScores = [96, 108, 89];
const koalasScores = [88, 91, 0];
let sumDol = 0;
let sumKoala = 0;
console.log(dolphinScores.length);
console.log(koalasScores.length);

//dolphin score average
//sum
for (let i = 0; i < dolphinScores.length; i++) {
  sumDol = dolphinScores[i] + sumDol;
}

console.log(sumDol);
const avgDol = sumDol / dolphinScores.length;
console.log(`average of Dolphins is ${avgDol}`);

//koala avg score
//sum

for (let i = 0; i < koalasScores.length; i++) {
  sumKoala = koalasScores[i] + sumKoala;
}
console.log(sumKoala);
const avgKoala = sumKoala / koalasScores.length;
console.log(`average of Koalas is ${avgKoala}`);

let minScore = 100;
let minScoreDolphin = false;

// checking for a minimun score of 100
for (let i = 0; i < dolphinScores.length; i++) {
  if (dolphinScores[i] > minScore) {
    console.log(
      `score higher than 100 for the Dolphin team is ${dolphinScores[i]}`
    );
    minScoreDolphin = true;
  }
}

let minScoreKoala = false;

// checking for a minimun score of 100
for (let i = 0; i < koalasScores.length; i++) {
  if (koalasScores[i] > minScore) {
    console.log(koalasScores[i]);
    minScoreKoala = true;
  }
}

// winner decision
if (avgKoala < avgDol && minScoreDolphin) {
  console.log(`Dolphins win with an average score of ${avgDol}`);
} else if (avgKoala > avgDol && minScoreKoala) {
  console.log(`Koalas win with an average score of ${avgKoala}`);
} else if (avgKoala == avgDol && minScoreKoala && minScoreDolphin) {
  console.log(
    `match is draw as the avg score of both the teams is same, i.e ${avgKoala}`
  );
}
