// Activating strict mode
"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;

// if (hasDriversLicense) console.log("you can drive");

// Functions in JS
// function logger() {
//   console.log("I am shivani");
// }

// logger();
// logger();
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `This is juice of ${apples} apples and ${oranges} oranges. Enjoy!`;

//   return juice;
// }

// const res = fruitProcessor(3, 2);
// console.log(res);

// Function Declaration
function calcAge(birthYear) {
  return 2024 - birthYear;
}

const age = calcAge(1997);
console.log(age);

// function expression
const calcage2 = function (birthYear) {
  return 2024 - birthYear;
};

console.log(calcage2(2000));

// Arrow Function
const calcAge3 = (birthYear) => 2024 - birthYear;

console.log(calcAge3(2001));
