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

// Object Methods
// const myData = {
//   firstName: "Shivani",
//   lastName: "Raichandani",
//   birthYear: 2000,
//   occupation: "React Developer",
//   friends: ["Ayushi", "Purva", "Shivani(Me)"],
//   hasDriversLicense: true,

//   calcAge: function (birthYear) {
//     return 2024 - birthYear;
//   },
// };

// calling a function using dot and bracket notation
// console.log(myData.calcAge(2000));
// console.log(myData["calcAge"](2000));

// but in above example we have to pass birthyear, even if this property is available inside the object itself.
// so, to make it reusable, we can do something like this-
// const myData = {
//   firstName: "Shivani",
//   lastName: "Raichandani",
//   birthYear: 2000,
//   occupation: "React Developer",
//   friends: ["Ayushi", "Purva", "Shivani(Me)"],
//   hasDriversLicense: true,

//   // calcAge: function () {
//   //   return 2024 - this.birthYear;
//   // },

//   calcAge: function () {
//     this.age = 2024 - this.birthYear;
//     return this.age;
//   },

//   // Challenge: "Shivani is a 24-year old React Developer and she has a/no (any one of them should be displayed) driver's license."
//   getSummary: function () {
//     return `${this.firstName} is a ${this.age}-year old ${
//       this.occupation
//     }, and she has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   },
// };

// console.log(myData.calcAge());
// console.log(myData.age);

// console.log(myData.getSummary());

// ============================== CODING CHALLENGE =================================
// CHALLENGE #3
// Let's go back to Mark and John comparing their BMIs!

// This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

// Your tasks:

// For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

// Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

// Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

/* Write your code below. Good luck! 🙂 */
// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// if (john.calcBMI() > mark.calcBMI()) {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
//   );
// } else {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
//   );
// }

// =========================================================================

// Iteration : the for loop in JavaScript
// for loop keeps running while the condition is true
// syntax of for loop
// for(variable initialization ; condition definition ; counter){
//    operation to perform
// }

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`I did ${rep} squat 🏋🏻‍♀️`);
// }

// // looping in arrays, breaking and continuing
// const firstName = "Shivani";
// const myArray = [
//   firstName,
//   "Raichandani",
//   2024 - 2000,
//   "React Developer",
//   ["Ayushi", "Purva", "Saumya"],
// ];

// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

// // now let's say we want to fill in the types of each value in array into a different array
// const types = [];

// for (let i = 0; i < myArray.length; i++) {
//   // first way of doing this
//   // types[i] = typeof myArray[i];

//   // another way: we can directly push the type in the types array
//   types.push(typeof myArray[i]);
// }

// console.log(types);

// const ages = [1997, 1994, 2000, 2013, 2015];

// const calcAge = [];

// for (let i = 0; i < ages.length; i++) {
//   calcAge.push(2024 - ages[i]);
// }
// console.log(calcAge);

// // continue keyword: it is to exit the current iteration of loop and continue to the next one
// // break keyword: it is to completely terminate the whole loop
// console.log(" ----------- ONLY STRINGS --------");
// for (let i = 0; i < myArray.length; i++) {
//   // here we are trying to communicate, that if the current element is not an string, then ext the current iteration and continue with the next one.
//   if (typeof myArray[i] !== "string") continue;

//   console.log(myArray[i]);
// }
// console.log("----------------------------------");

// // now we know that break exits whole loop, let's see an example where if a number is encountered then loop should be terminated.
// console.log("-------------- BREAK STATEMENT -----------------");
// for (let i = 0; i < myArray.length; i++) {
//   if (typeof myArray[i] === "number") break;

//   console.log(myArray[i]);
// }
// console.log("----------------------------------");

// =========================================================================

// // LOOPING BACKWARDS
// const firstName = "Shivani";
// const myArray = [
//   firstName,
//   "Raichandani",
//   2024 - 2000,
//   "React Developer",
//   ["Ayushi", "Purva", "Saumya"],
// ];

// // let's try printing values in reverse, like from the last element to the first
// for (let i = myArray.length - 1; i >= 0; i--) {
//   console.log(myArray[i]);
// }

// // LOOPS IN LOOPS
// // in the start of the loops we saw that we have a statement which we needed to print for 10 times, now let's say a person does three sets of exercises , 5 times each, let's see how we can achieve it
// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`----------Starting Exercise ${exercise}----------`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight ${rep} 🏋🏻‍♀️`);
//   }
// }

// =========================================================================

// WHILE LOOP
// let's take a reference from the for loop we have already
// for (let rep = 1; rep < 6; rep++) {
//   console.log(`Lifting weight ${rep} 🏋🏻‍♀️`);
// }

// let rep = 1;
// while (rep < 6) {
//   console.log(`WHILE: Lifting weight ${rep} 🏋🏻‍♀️`);

//   rep++;
// }

// while loop is more versatile than for loop, and it does not always requires a counter to perform operations, let's see below an example where we can generate random numbers

// let dice = Math.trunc(Math.random() * 6) + 1;

// // run loop until we roll 6 number on the dice
// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);

//   // updating the value in each iteration otherwise loop will run for infinite times
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) {
//     console.log("Loop is about to end...");
//   }
// }

// ============================== CODING CHALLENGE 4 ================================

// CHALLENGE #4
// Let's improve Steven's tip calculator even more, this time using loops!

// Your tasks:

// Create an array called bills containing all 10 test bill values.

// Create empty arrays for the tips and the totals (tips and totals)

// Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

// BONUS:

// 1. Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

// 2. First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

// 3. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

// Call the function with the totals array.

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// /* Write your code below. Good luck! 🙂 */
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   tips[i] = calcTip(bills[i]);

//   totals[i] = tips[i] + bills[i];
// }

// let sum = 0;

// function calcAverage(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   return sum / arr.length;
// }

// =========================================================================
