// const age = 43;
// age >= 18 ? console.log("I can drive") : console.log(`I cannot drive`);

// const canDrive = age >= 18 ? "yes" : "no";
// console.log(canDrive);

//--------------------------CC4-------------------------

const billAmount = 40;
let tipValue =
  billAmount >= 50 || billAmount <= 300 ? 0.15 * billAmount : 0.2 * billAmount;
console.log(
  `The bill values is ${billAmount}, the tip was ${tipValue}, and the total is ${
    billAmount + tipValue
  }`
);
