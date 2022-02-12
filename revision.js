"use strict";
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
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

  //function to order food
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //here the sequence of parameter does not matter as we are destructuting an object, use this type of function when you have a lot of parameters
  orderDelivery: function ({
    starterIndex,
    mainIndex,
    orderTime,
    address,
    eta,
  }) {
    console.log(
      `Order recieved at ${orderTime} : of ${this.order(
        mainIndex,
        starterIndex
      )}, will be deliverd to ${address} at around ${eta} `
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your pasta with ${ing1},${ing2},${ing3}`);
  },
};

////////////////////////////////////////////////////////////////////////

//topic:--------------spread opreator-------------------
//swapping prac
let a = 13;
let b = 14;
console.log(a, b);
[a, b] = [b, a];
console.log(a, b);

const arr = [4, 5, 6, 7, 8];
const arr2 = [1, 2, 3, ...arr];
console.log(arr2);
//creating a new menu for the restaurant
const newMenue = ["Roti", `sabzi`, ...restaurant.mainMenu];
console.log(...newMenue);
//copy array
const mainMenuCopy = [...newMenue];
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);
//spread operator works on all iterables i.e arrays, strings, maps,sets
//use spread operator when building an array or passing arguments into a function

//real world example
// const ingredents = [
//   prompt(`let's make some pasta!! ingredent 1? :`),
//   prompt(`let's make some pasta!! ingredent 2? :`),
//   prompt(`let's make some pasta!! ingredent 3? :`),
// ];
//restaurant.orderPasta(...ingredents);

//post ES 2018, spread operator also works on objects
const newRestaurant = {
  ...restaurant,
  Founder: "Arman",
  foundingYear: 1998,
};
console.log(newRestaurant);
//creating a shallow copy using the spreadoperator
const restaurantCopy = { ...restaurant };
restaurantCopy.name = "ZaikaIndiaKa";
console.log(restaurant.name);
console.log(restaurantCopy.name);
/*
//topic: ------------------------------OBJECT DESTRUCTURING-----------------
//while object destructuring we have to write the exact name of the property that we are destructuring, sequence of the property does not matter
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
// custom variable names of properties of the object that we are destructuring
const {
  name: restaurantName,
  openingHours: Timings,
  categories: tags,
} = restaurant;
console.log(
  `Name of restaurant : ${restaurantName}, \nTiming of the restaurant : ${Timings}, \nFood category : ${categories}`
);
//default values of properties in case it doesn't exists, it is useful when we don't have hardcoded values in our code and are accessing data via API
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(`Menu : ${menu},\nstarter menue :${starters}`);
//mutating variables while destructuring
let a = 111;
let b = 222;
const obj = { a: 1, b: 2, c: 3 };
//overriding the value of a,b. we have to wrap the code block '{a,b} = obj' called the destructuing assignment, in a () for it to work
({ a, b } = obj);
console.log(a, b);
//nested objects
const {
  fri: { open: OpeinigTime, close: closingTime },
} = Timings;
console.log(`friday timings ${OpeinigTime} ${closingTime}`);
//function 
restaurant.orderDelivery({
  orderTime: "22:30",
  eta: Number(this.orderTime) + 30,
  address: "ArjanGarh, Delhi 110047",
  mainIndex: 2,
  starterIndex: 1,
});
  
topic:---------------------------destructuring arrays------------------------
//destructuring array, destructuring assignment ']='
const arr = [1, 2, 3, 4];
const [a, b, c, d] = arr;
console.log(a, b, c, d);

//way of swapping variables without using a thirs variable temp
// skipping a value of categories array while destructuring it 
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);

//ordering food
let [starter, maincourse] = restaurant.order(2, 2);
console.log(starter, "&", maincourse);

//nested destructuring
const nested = [2, 3, [4, 5]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values, when getting data from API
const [p = 1, q = 1, r = 1] = [4, 5];
console.log(p, q, r);
*/
