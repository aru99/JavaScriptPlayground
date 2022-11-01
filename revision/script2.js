"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
//   opening hours
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24hrs
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  chefs: ["carillio", "uzbek", "samantha"],
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //   openingHours
  openingHours,

  //   function to order food
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //   function for delivery
  delivery({ starterIndex, mainIndex, address, time }) {
    console.log(
      `${this.starterMenu[starterIndex]} & ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`you have ordered pasta with : ${ing1}, ${ing2} & ${ing3}`);
  },
};

// Airplanes

const airLines = "Air India Indigo";
const plane = "A380";

console.log(plane[0]);
// creating a function that recieves seat number and returns if it's a middle seat or not
const checkSeat = function (seatNumber) {
  // B and E are middle seat
  const seatAlphabet = seatNumber.slice(-1);
  console.log(seatAlphabet);
  return seatAlphabet === "B" || seatAlphabet === "E"
    ? `you have a Middle seat ${seatNumber}`
    : `You don't have a middle seat ${seatNumber}`;

  // below code is unoptimised
  //   if (seatAlphabet === "B" || seatAlphabet === "E") {
  //     return `you have a Middle seat ${seatNumber}`;
  //   } else {
  //     return `You don't have a middle seat ${seatNumber}`;
  //   }
};

console.log(checkSeat("11B"));
console.log(checkSeat("12E"));
console.log(checkSeat("10A"));
console.log(checkSeat("02C"));

/**
// maps

// converting object into map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
const hoursArry = [...hoursMap];
console.log(hoursArry);

const dhoopChaav = new Map();
dhoopChaav
  .set("Founders", "Kriti Jain & Mohammad Arman")
  .set("FoundedIn", "2023")
  .set("open", 10)
  .set("close", 21)
  .set(true, "we are open!!")
  .set(false, "We are resting right now, zZZ");

console.log(dhoopChaav);
const time = 20;
console.log(
  dhoopChaav.get(
    dhoopChaav.get("open") < time && dhoopChaav.get("close") > time
  )
);

// sets
console.log(new Set(`mohammadarman`).size);


const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `we are open on ${properties.length} days : `;
console.log(openStr);
for (const day of properties) {
  openStr += `${day} `;
}
console.log(openStr);
// property values
const values = Object.values(openingHours);
console.log(values);
// Entire object
const entries = Object.entries(openingHours);
console.log(entries);
for (const [key, { open, close }] of entries) {
  console.log(`on ${key} we open at ${open} and close at ${close}`);
}

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}


const rest1 = {
  name: "capri",
  numGuest: 0,
};
const rest2 = {
  name: "karims",
  owner: "sahid",
};

console.log(restaurant);

const fullMenue = [...restaurant.mainMenu, ...restaurant.starterMenu];
for (const [i, el] of fullMenue.entries()) {
  console.log(`${i + 1} : ${el}`);
}


 
// Or assignment operator
// rest1.numGuest = rest1.numGuest || 10;
// rest1.numGuest ||= 10;
// rest2.numGuest ||= 30;
// rest2.numGuest = rest2.numGuest || 10;
// NULLISH assignment operator
rest1.numGuest ??= 10;
rest2.numGuest ??= 20;
console.log(rest1, rest2);
// AND assignment operator
rest1.owner &&= "********";
rest2.owner &&= "******";
console.log(rest1, rest2);
console.log();
// --------------REST PATTERN

// fullmenue
const [...fullMenue] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(fullMenue);
// weekend and weekdays timings
const { sat: weekend, ...weekdays } = restaurant.openingHours;
console.log(weekend, weekdays);

// rest parameters
const add = function (...numbers) {
  console.log(...numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    console.log(sum);
  }

  console.log(`final sum of numbers : ${sum}`);
};

add(1, 2, 3, 4, 5, 6, 7, 8);

 * 
 * // spread operator
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


const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);



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
