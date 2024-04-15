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
// const friends = ["Ayushi", "Purva", "Sagar", "Akash", "Nayan"];
// console.log(friends);

// // creating arrays using new keyword
// const exArr = new Array("1", 2, 3, 5);
// console.log(exArr);

// // accessing the array elements
// console.log(friends[2]);

// // altering the elements
// friends[1] = "Vijay";
// console.log(friends);

// // now what if we try to change whole array
// // friends = ["bhaiya", "papa", "mummy"]; // this will throw an error that, assignment to a constant variable (which is not possible)

// // creating an array containing different types of values
// const firstName = "Shivani";
// const myArray = [
//   firstName,
//   "Raichandani",
//   2024 - 2000,
//   friends,
//   "React Developer",
// ];
// console.log(myArray);

// // exercise
// const calcAge = function (birthYear) {
//   return 2024 - birthYear;
// };
// const years = [1990, 1993, 1960, 1997, 2000, 2001];

// // how not to calculate age of these array elements

// // console.log(calcAge(years)); // this is not possible because it is not clear, to what element of array we are referring, so it will give NaN as output, because years is not a number but an array

// // how not to calculate age of these array elements end

// // how we can calculate age of these array elmenets start

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// // how we can calculate age of these array elmenets end

// // we can store these ages in a new array
// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];

// console.log(ages);

// ================================================================================

// Basic Array operations
// const friends = ["Purva", "Varsha", "Ayushi"];
// console.log(friends);

// // adding element in the last position and see what this function returns
// const pushFn = friends.push("Maya");
// console.log(friends);
// console.log(pushFn); // returns the value of length of array

// // adding element at first position and see what this function returns
// const unshiftFn = friends.unshift("Rekha");
// console.log(friends);
// console.log(unshiftFn); // returns the value of length of array

// // removing last element from array and see what this function returns
// const popFn = friends.pop();
// console.log(friends);
// console.log(popFn);

// // removing first element from array and see what this function returns
// const shiftFn = friends.shift();
// console.log(friends);
// console.log(shiftFn);

// // fetching the index of a value in an array
// console.log(friends.indexOf("Ayushi"));
// console.log(friends.indexOf("Maya")); // returns -1 if element is not there

// // checking if an element exists in array or not
// console.log(friends.includes("Purva"));
// console.log(friends.includes("Rekha")); // returns false if element does not exists

// // what if we try to push element in an empty array and also try to pop elements from an array which does not have any elements
// const check = [];
// check.push(1, 2);
// console.log(check); // elements got pushed

// check.pop();
// console.log(check); // 2 got popped

// check.pop();
// console.log(check); // 1 also got popped empty array received as output

// check.pop();
// console.log(check); // nothing happened, no errors, only empty arrya received as o/p

// ===============================================================================

// ===================== Coding Challenge 2 ================================
// CHALLENGE #2
// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:

// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

// And now let's use arrays! So, create an array called bills containing the test data below.

// Create an array called tips containing the tip value for each bill, calculated from the function you created before.

// BONUS: Create an array totals containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.

/* Write your code below. Good luck! 🙂 */
// function calcTip(bill) {
//   let tip;
//   if (bill >= 50 && bill <= 300) {
//     tip = bill * 0.15;
//   } else {
//     tip = bill * 0.2;
//   }
//   return tip;
// }

// console.log(calcTip(100));

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);

// ===============================================================================

// // Introduction to objects
// const myData = {
//   firstName: "Shivani",
//   lastName: "Raichandani",
//   age: 2024 - 2000,
//   occupation: "React Developer",
//   friends: ["Ayushi", "Purva", "Shivani(Me)"],
// };

// // data retrieval from objects - dot and bracket notation
// // dot notation
// console.log(myData.age);

// // bracket notation
// console.log(myData["occupation"]);
// console.log(myData["firstName"]);

// // in bracket notation, we can provide expression that can be calculated to produce a value, so that can also be retrieved. but this cannot be done using dot notation
// const nameKey = "Name";
// console.log(myData["last" + nameKey]);
// console.log(myData.first + nameKey); // undefinedName will be output

// // one more example for bracket notation
// const interestedIn = prompt(
//   "What to you want to know about me? firstName/lastName/age/occupation/friends??"
// );
// console.log(interestedIn);
// //console.log(myData.interestedIn); // undefined (because interestedIn property does not exist in object)

// if (myData[interestedIn]) {
//   console.log(myData[interestedIn]);
// } else {
//   console.log("Wrong request");
// }

// // how to use dot and bracket notation to insert a new property in an object
// myData.location = "India";
// myData["linkedIn"] = "/shivani111";
// console.log(myData);

// // Challenge: write below sentence without hard coding any values in it
// // "I have 3 friends, and my best friend is Shivani(Me)"
// console.log(
//   `${myData.firstName} has ${myData.friends.length}, and my best friend is ${myData.friends[2]}.`
// );
