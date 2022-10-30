"use strict";

const restaurant = {
  name: "Classico Italiano",
  chefs: ["carillio", "uzbek", "samantha"],
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //   opening hours
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
      open: 0, // Open 24hrs
      close: 24,
    },
  },

  //   function to order food
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //   function for delivery
  delivery: function ({ starterIndex, mainIndex, address, time }) {
    console.log(
      `${this.starterMenu[starterIndex]} & ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`you have ordered pasta with : ${ing1}, ${ing2} & ${ing3}`);
  },
};

const ingredients = [
  prompt("Let's make pasta !! Ingredient 1"),
  prompt("Ingredient 2"),
  prompt("Ingredient 3"),
];

restaurant.orderPasta(...ingredients);

restaurant.delivery({
  time: 2200,
  address: `house number 75, ghoda mohalla`,
  starterIndex: 2,
  mainIndex: 0,
});

// spread operator
const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

/**

//Destructuring objects
const {
  // property in the object : newVariable name
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
// default values
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);
// nested objects
const {
  fri: { open: openOnFri, close: clsoeOnFri },
} = hours;
console.log(openOnFri, clsoeOnFri);

 
//Destructuring Arrays
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
// switching the variables
[secondary, main] = [main, secondary];
console.log(main, secondary);

// recieve 2 return values from a function
const [starterOrder, mainCourseOrder] = restaurant.order(2, 0);
const order = `The customer has ordered : 
${starterOrder} and ${mainCourseOrder}`;
console.log(order);
*/
