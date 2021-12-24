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

//========strings=========
const airline = "TAP Air portugal";
const plave = "A320";

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));
//function to check middle seat or not
const checkMiddleSeat = function (seat) {
  //B and E are middle seats, seat numbers are generally like 11B, 10A like that
  const seatLetter = seat.slice(-1);

  // refactored
  seatLetter === "B" || seatLetter === "E"
    ? console.log(`the selected seat ${seat} is a middle seat`)
    : console.log(`The selected seat ${seat} is not a middle seat`);
  //noob
  // if (seatLetter === "B" || seatLetter === "E") {
  //   console.log(`the selected seat ${seat} is a middle seat`);
  // } else {
  //   console.log(`The selected seat ${seat} is not a middle seat`);
  // }
};

//split method in string
console.log("a very nice string".split(" "));
const [firstname, lastname] = `mohammad arman`.split(" ");
const newName = [
  "Mr.",
  firstname[0].toUpperCase() + firstname.slice(1).toLowerCase(),
  lastname[0].toUpperCase() + lastname.slice(1).toLowerCase(),
].join(" ");
console.log(newName);

//write a function to capitalize a name
const capitalizeName = function (name) {
  const wordsOfName = name.toLowerCase().split(" ");
  const namesUpper = [];

  for (const word of wordsOfName) {
    namesUpper.push(word[0].toUpperCase() + word.toLowerCase().slice(1));
  }
  console.log(namesUpper.join(" "));
};
capitalizeName(`mohammad arman`);
capitalizeName(`jessica ann smith davis`);
capitalizeName(`jonas schmedtmann`);

//padding
//write credit card masking function
const maskCreditCard = function (creditCradNumber) {
  const str = creditCradNumber + "";
  const lastFourDigits = str.slice(-4);
  return lastFourDigits.padStart(str.length, "*");
};

console.log(maskCreditCard(12345678));

/*
checkMiddleSeat("11B");
checkMiddleSeat("12A");
checkMiddleSeat("13E");
checkMiddleSeat("10A");
console.log(airline.toUpperCase());
console.log(airline.toLocaleLowerCase());
//fxing capitalizatoin
const passangerName = "SiDDhaRtH";
const passangerNameLowerCase = passangerName.toLowerCase();
const passangerNameFortmat =
  passangerNameLowerCase[0].toUpperCase() + passangerNameLowerCase.slice(1);
console.log(passangerNameLowerCase);
console.log(passangerNameFortmat);
//write a function that recieves any name and converts it into the right format as above

const nameFormatter = function (name) {
  const nameLowerCase = name.toLowerCase();
  return nameLowerCase[0].toUpperCase() + nameLowerCase.slice(1);
};
console.log(nameFormatter("ArmAAn"));
console.log(nameFormatter("ShiVani"));
console.log(nameFormatter("MoHaMMaD"));

//replacing
const priceUSD = "123,56$";
console.log(priceUSD);
const priceINR = priceUSD.replace(",", ".").replace("$", "Rs");
console.log(priceINR);

const announcement = `All passangers are hereby requested to come to boarding door 23. Boarding door 23!`;
//console.log(announcement.replace("door", "gate"));
console.log(announcement.replaceAll("door", "gate"));
// booleans : includes(), startsWith(), endsWith()
//write a function to check passanger baggage

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun ")) {
    console.log(`you are NOT ALLOWED onboard`);
  } else {
    console.log(`Welcome aboard`);
  }
};
checkBaggage(`I have a Laptop, some Food and a Pocket Knife`);
checkBaggage(`Socks and Camera`);
checkBaggage(`Got some snacks and a Gun for protection`);
//

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
console.log("didnt code");
console.log("need to look into a proper discpline for coding");

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
