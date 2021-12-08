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
