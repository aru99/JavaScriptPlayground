"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //fn for ordering food
  //writing function as per ES2021
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //writing function as per pre ES2021
  orderDelivery: function ({
    time,
    address,
    starterIndex,
    mainIndex,
    pincode,
    customerName,
  }) {
    console.log(`Hi ${customerName}, your order of ${this.starterMenu[starterIndex]} & ${this.mainMenu[mainIndex]}
    has been recieved and will be delivered on ${address} ${pincode} at ${time} `);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPizza: function (...stuffToPut) {
    console.log(`your pasta with :`);
    for (let i = 0; i < stuffToPut.length; i++) {
      console.log(stuffToPut[i]);
    }
    console.log(`is ready`);
  },
  openingHours,
};

//========== Maps =============

const rest = new Map();
rest.set("name", `Amana's Kitchen`);
rest.set(110047, "Arjangarh");
console.log(rest.set(110025, "okhla"));
rest
  .set("categories", ["indian", "veg", "non-veg"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "we are open :D")
  .set(false, "we are closed")
  .set(1, "biryani")
  .set(2, "chiken")
  .set(3, "rogan gost");
console.log(rest.set());
console.log(rest.get("name"));
console.log(rest.get(true));

const time = 21;
const restaurnatStatus = rest.get(
  time > rest.get("open") && time < rest.get("close")
);
console.log(restaurnatStatus);
console.log(rest.has("categories"));
rest.delete(110025);
console.log(rest);
console.log(rest.size);
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

for (const [key, dish] of rest) {
  if (typeof key === "number") {
    console.log(`Dish number ${key} : ${dish}`);
  }
}

const quizz = new Map([
  ["question", "which is the best programming language in the world?"],
  [1, "C++"],
  [2, "java"],
  [3, "javascript"],
  ["correct", 3],
  [true, "correct"],
  [false, "try again"],
]);

console.log(quizz.get("question"));
for (const [key, option] of quizz) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${option}`);
  }
}

const answer = Number(prompt(`your Answer`));
console.log(answer);
//print success/ faliure message
console.log(quizz.get(quizz.get("correct") === answer));
/*
//sets-----------------
const orderSet = new Set(["pasta", "pizza", "pizza", "risotto"]);
console.log(orderSet);

console.log(new Set("Armaan"));
console.log(orderSet.size);
console.log(orderSet.has("pizza"));
console.log(orderSet.has("Pizza"));
orderSet.add("garlic Bread", "garlic Bread", "Garlic Bread");
console.log(orderSet);

//looping over a set
for (const order of orderSet) {
  console.log(order);
}

const staff = ["waiter", "chef", "waiter", "chef", "manager"];
const UniqueStaff = [...new Set(staff)];
console.log(UniqueStaff);
console.log(new Set("Mohammad Arman").size);

//property Names
const properties = Object.keys(openingHours);
console.log(properties);
console.log(`we are open on ${properties.length} days `);
//looping over Objects
let openStr = `we are open on ${properties.length} days :`;
for (const day of Object.keys(openingHours)) {
  openStr += `${day}.`;
}
console.log(openStr);

//Property values

const values = Object.values(openingHours);
console.log(values);

//looping over an array
const entries = Object.entries(openingHours);
console.log(entries);
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we are open from ${open} to ${close}`);
}


console.log(restaurant.openingHours);
//optional chaning

//console.log(restaurant.openingHours.thu?.open);
console.log(restaurant?.openingHours?.mon?.open ?? "Closed");
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.deliveryTime?.(1, 2) ?? "method does not exist");

//for of looping over an array
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1} : ${el}`);
// }
// console.log(menu.entries());

const rest1 = {
  name: "pizzahut",
  numGuest: 10,
};

const rest2 = {
  name: "sandoz",
  owner: "ted",
};

//rest2.numGuest = rest2.numGuest || 10;
rest2.numGuest ||= 10;
//rest1.numGuest = rest1.numGuest || 10;
rest1.numGuest ||= 10;
console.log(rest1);
console.log(rest2);

//AND assignment operator
rest2.owner &&= `<Classified>`;
console.log(rest2);
rest1.owner ||= `no present`;
console.log(rest1);

// //
// const pizzaStuffToPut = [
//   prompt(`Stuff 1 :`),
//   prompt(`Stuff 2 :`),
//   prompt(`Stuff 3 :`),
// ];

// console.log(pizzaStuffToPut);
// restaurant.orderPizza(...pizzaStuffToPut);
// //rest pattern because left side of =
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(otherFood);

// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(sat, weekDays);

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);
//---------------------------------------
// restaurant.orderDelivery({
//   customerName: `Arman`,
//   time: `22:30`,
//   address: `Arjangarh, delhi`,
//   pincode: 110047,
//   starterIndex: 3,
//   mainIndex: 2,
// });

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);
// const { menu = [], starterMenue: starters = [] } = restaurant;

// //spreadding an array
// const arr = [4, 5, 6];
// const newArry = [1, 2, 3, ...arr];
// console.log(newArry);

// const newMenue = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenue);
// //copy array, this will create a shallow copy of the array, similar to Object.assign() thing in objects
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);
// //joining two arrays
// const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(fullMenu);

// const ingredeints = [
//   prompt(`let's make pasta, Ingredient 1 ?`),
//   prompt(`let's make pasta, Ingredient 2 ?`),
//   prompt(`let's make pasta, Ingredient 3 ?`),
// ];
// console.log(...ingredeints);
// restaurant.orderPasta(...ingredeints);

//---------------------------
// //nested objects
// const {
//   fri: { open: OpenFri, close: closeFri },
// } = hours;
// console.log(OpenFri, closeFri);

//===============================
/*let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//cool for swapping
[main, secondary] = [secondary, main];
console.log(main, secondary);
const [starterDishOrder, mianDishOrder] = restaurant.order(2, 1);
console.log(starterDishOrder, mianDishOrder);
console.log(restaurant.order(2, 1));

//destructurring of nested array
const arr = [2, 3, 4, [6, 7, 8, 9]];
const [i, , , [, j, k, l]] = arr;
console.log(i, j, k, l);
*/
