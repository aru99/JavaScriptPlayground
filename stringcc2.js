"use strict";
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

//todo: Refactoring the below code base to DRY
console.log(flights.split("+ "));

//fn1
const trimStr = (str) => str.toLowerCase().replaceAll("_", " ").trim();
//fn2
const trimStr2 = (str) => str.replaceAll("_", " ").trim();

for (const plane of flights.split("+")) {
  const [type, from, to, time] = plane.split(";");
  //   console.log(type.toLowerCase().replaceAll("_", " ").trim());
  if (
    trimStr(type) === `delayed departure` ||
    trimStr(type) === `delayed arrival`
  ) {
    console.log(
      `🔴${trimStr2(type)} ${from.slice(0, 3).toUpperCase()} to ${to
        .slice(0, 3)
        .toUpperCase()} ${time.replaceAll(":", "hr")}`.padStart(40)
    );
  } else {
    console.log(
      `${trimStr2(type)} ${from.slice(0, 3).toUpperCase()} to ${to
        .slice(0, 3)
        .toUpperCase()} ${time.replace(":", "hr")}`.padStart(40)
    );
  }
}
