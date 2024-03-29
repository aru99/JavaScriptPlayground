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
const displayMovements = function (movements, sort = false) {
  // implementing sort functionality
  // by using the slice method we are creating a shallow copy of the array and not mutating the underlying original array
  const movs = sort
    ? movements.slice().sort(function (a, b) {
        return a - b;
      })
    : movements;

  containerMovements.innerHTML = " ";
  movs.forEach(function (mov, i) {
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

// calculating the total balance of the user
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce(function (accu, curr, i) {
    return accu + curr;
  }, 0);

  labelBalance.textContent = `${acc.balance} EUR`;
};

// calculating the summary
const calcDisplaySummary = function (acc) {
  console.log(acc.movements);
  //--------------- income summary-------------------
  const incomes = acc.movements
    .filter(function (mov) {
      return mov > 0;
    })
    .reduce(function (accu, inmov, i, arr) {
      // console.log(arr);
      accu += inmov;
      return accu;
    }, 0);
  labelSumIn.textContent = `${incomes} EUR`;
  //---------------- deposite ssummary------------------
  const deposite = acc.movements
    .filter(function (mov) {
      return mov < 0;
    })
    .reduce(function (accu, mov, arr) {
      // console.log(arr);
      accu += mov;
      return accu;
    });
  labelSumOut.textContent = `${Math.abs(deposite)} EUR`;
  //---------------- Interest summary------------------
  const interest = acc.movements
    .filter(function (mov) {
      return mov > 0;
    })
    .map(function (mov, i, arr) {
      console.log(arr);
      return (mov * acc.interestRate) / 100;
    })
    .filter(function (intval, i, arr) {
      console.log(`------${arr}----`);
      return intval >= 1;
    })
    .reduce(function (acc, interestValue) {
      return (acc += interestValue);
    }, 0);
  labelSumInterest.textContent = `${interest} EUR`;
};

// console.log(calcDisplaySummary(account1.movements));
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

createuserName(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// =======================EVENT HANDLERS=====================

// active account variable
let currentAccount;

// -----Login implementation----
btnLogin.addEventListener("click", function (e) {
  // prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(function (acc) {
    return acc.username === inputLoginUsername.value;
  });

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display the welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;
    // clear login fields
    inputLoginPin.value = inputLoginUsername.value = " ";
    inputLoginPin.blur();

    updateUI(currentAccount);
    console.log(`login`);
  }
});

// ----- Transfer Money implementation-----
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(function (acc) {
    return acc.username === inputTransferTo.value;
  });
  inputTransferAmount.value = inputTransferTo.value = "";

  // checking conditions before transfer
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    console.log("transfer valid");
    // dedcuting amount from current user
    currentAccount.movements.push(-amount);

    // adding amount to the sent user
    receiverAcc.movements.push(amount);

    // updating the user interface
    updateUI(currentAccount);
  }
});

// ------------ Loan implementation-----------------
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements.some(function (mov) {
      return mov >= amount * 0.1;
    })
  ) {
    // add movement
    currentAccount.movements.push(amount);
    // update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

// ------------ Delete Account implementation-----------------
// inputCloseUsername = document.querySelector(".form__input--user");
// const inputClosePin
btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(function (acc) {
      return acc.username === currentAccount.username;
    });

    // delete account
    accounts.splice(index, 1);

    // hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

// ----- sorting ----
let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
//
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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// Reduce method
const balance = movements.reduce(function (acc, curr, i, arr) {
  acc += curr;
  return acc;
}, 0);
// console.log(balance);
// findint the largest transaction
const macTransaction = movements.reduce(function (acc, curr) {
  // return acc ? acc > curr : return curr;
  if (acc > curr) return acc;
  else return curr;
}, movements[0]);

// console.log(macTransaction);

// MAP

// Filter
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// // console.log(deposits);
// const withdrawls = movements.filter(function (mov) {
//   return mov < 0;
// });

// console.log(withdrawls);

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
// -----------------------------------arrays methods practice-------
// sum of all depositis
const bankDepositeSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((sum, curr) => sum + curr);
console.log(bankDepositeSum);

// deposits greater than 1000
const numDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 1000);
console.log(numDeposits1000);

// create an object of withdrawls and deposits
const { deposits, withdrawls } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, curr) => {
      curr > 0 ? (sums.deposits += curr) : (sums.withdrawls += curr);

      return sums;
    },
    { deposits: 0, withdrawls: 0 }
  );

console.log(deposits, withdrawls);
