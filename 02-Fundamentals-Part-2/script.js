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

// // Function Declaration
// function calcAge(birthYear) {
//   return 2024 - birthYear;
// }

// const age = calcAge(1997);
// console.log(age);

// // function expression
// const calcage2 = function (birthYear) {
//   return 2024 - birthYear;
// };

// console.log(calcage2(2000));

// // Arrow Function
// const calcAge3 = (birthYear) => 2024 - birthYear;

// console.log(calcAge3(2001));

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2024 - birthYear;
//   const retirement = 65 - age;

//   return `${firstName} will retire in ${retirement} years.`;
// };
// console.log(yearsUntilRetirement(2000, "Shivani"));

// Function calling another functions
// sometimes we need that a function can call another function inside it for related task

// function cutFruit(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruit(apples);
//   const orangePieces = cutFruit(oranges);

//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges. Enjoy!`;

//   return juice;
// }

// console.log(fruitProcessor(2, 4));

// ===============================================================================

// ===================== Coding Challenge 1 ================================
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

// Your tasks:

// Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

// Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

/* Write your code below. Good luck! 🙂 */

// const calcAverage = (val1, val2, val3) => {
//   const avg = (val1 + val2 + val3) / 3;
//   return avg;
// };

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins * 2 > avgKoalas) {
//     return console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas * 2 > avgDolphins) {
//     return console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     return console.log(`No team wins...`);
//   }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);

// checkWinner(scoreDolphins, scoreKoalas);

// ================================================================================

// ===================== Introduction to Arrays ================================
const friends = ["Ayushi", "Purva", "Sagar", "Akash", "Nayan"];
console.log(friends);

// creating arrays using new keyword
const exArr = new Array("1", 2, 3, 5);
console.log(exArr);

// accessing the array elements
console.log(friends[2]);

// altering the elements
friends[1] = "Vijay";
console.log(friends);

// now what if we try to change whole array
// friends = ["bhaiya", "papa", "mummy"]; // this will throw an error that, assignment to a constant variable (which is not possible)

// creating an array containing different types of values
const firstName = "Shivani";
const myArray = [
  firstName,
  "Raichandani",
  2024 - 2000,
  friends,
  "React Developer",
];
console.log(myArray);
