"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

//   opening hours
openingHours : {
thu : {
    open:12,
    close 22,
},
fri : {
    open:11,
    close 23,
},
sat : {
    open:0, // Open 24hrs
    close 24,
},
},

  //   function to order food
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

//Destructuring objects



/** 
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