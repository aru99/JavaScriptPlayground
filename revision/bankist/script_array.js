"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// tansactions movements
const display_movements = function (movements) {
  containerMovements.innerHTML = " ";
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : `withdrawal`;
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
     
    <div class="movements__value">${mov}</div>
  </div>
  `;
    //   <div class="movements__date">3 days ago</div>
    // adding the new html element
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
// creating user names

const createuserName = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map(function (name) {
        return name[0];
      })
      .join("");
  });
};

display_movements(account1.movements);
createuserName(accounts);
console.log(accounts);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let closingBalance = 0;

// // looping over the array using for of
// for (const movement of movements) {
//   if (movement > 0) {
//     closingBalance += movement;
//     console.log(`You deposited ${movement}, current balance ${closingBalance}`);
//   } else if (movement < 0) {
//     closingBalance -= movement;
//     console.log(
//       `You withdrew ${Math.abs(movement)}, current balance ${closingBalance}`
//     );
//   }
// }

// console.log(`------FOR EACH------------`);

// movements.forEach(function (movement, index, arr) {
//   if (movement > 0) {
//     closingBalance += movement;
//     console.log(
//       ` transaction no : ${
//         index + 1
//       } of ::You deposited ${movement}, current balance ${closingBalance}`
//     );
//   } else if (movement < 0) {
//     closingBalance -= movement;
//     console.log(
//       `transaction no : ${index + 1} :: You withdrew ${Math.abs(
//         movement
//       )}, current balance ${closingBalance}`
//     );
//   }
// });

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// MAP
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Filter
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

// const euroToUsd = 1.1;
// const movementsUSD = movements.map(function (mov) {
//   return Math.trunc(mov * euroToUsd);
// });

// const movementsUSD = movements.map((mov) => {
//   return Math.trunc(mov * euroToUsd);
// });

// console.log(movements);
// console.log(movementsUSD);

// "Steven Thomas Williams",

// const user = `Steven Thomas Williams`;
// const userName = user
//   .toLowerCase()
//   .split(" ")
//   .map(function (name) {
//     return name[0];
//   })
//   .join("");
// console.log(userName);
