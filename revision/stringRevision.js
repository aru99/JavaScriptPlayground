"use strict";
// testData
/**
  underscore_case
   first_name   
  Some_Variable 
    calculate_AGE
  Delayed_departure
  
 * 
 */

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
// const text = document.querySelector("textarea").value;

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");
  for (const [i, str] of rows.entries()) {
    const [first, second] = str.toLowerCase().trim().split("_");
    // console.log(first, second);
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;

    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
  console.log(rows);
});

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const str1 = flights.split("+");
console.log(str1);

for (const [i, str] of str1.entries()) {
  const [type, from, to, time] = str.split(";");
  const outPut = ` ${
    type.replaceAll("_", "").startsWith("Delayed") ? "⛔" : ""
  }${type.replaceAll("_", " ")} ${from.slice(0, 3).toUpperCase()} to ${to
    .slice(0, 3)
    .toUpperCase()} (${time})`.padStart(45);
  console.log(outPut);
}
// const str2 = str1.split(";");
