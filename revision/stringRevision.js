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
