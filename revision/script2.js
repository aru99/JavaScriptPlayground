"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //   function to order food
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

//
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
