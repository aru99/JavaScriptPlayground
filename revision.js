"use strict";
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //function to order food
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

//destructuring array, destructuring assignment ']='
const arr = [1, 2, 3, 4];
const [a, b, c, d] = arr;
console.log(a, b, c, d);

//way of swapping variables without using a thirs variable temp
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
