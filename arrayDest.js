"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //fn for ordering food
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
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
  openingHours: {
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
  },
};

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
/*

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
