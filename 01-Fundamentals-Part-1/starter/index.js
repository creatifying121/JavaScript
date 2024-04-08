// Values and variables in JavaScript

// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// value is basically a piece of data. it is the most fundamental unit of information that we have in programming.
// console.log("shivani"); // here shivani is a value
// console.log(21);

// we can store these values in variables and these variables are reusable
// let firstName = "Shivani"; // declaring a variable
// console.log(firstName);

// naming convention of variables -
// we can follow camelCase (firstName)
// using underscores (first_name)
// cannot write variables starting with number (3names - this will throw a syntax error (Invalid or unexpected token))
// variables can only contain numbers, letters, underscores or the dollar sign
// (shivani&pooja - Invalid)
// variable name cannot be a reserved JavaScript keywords like function, new, class, etc.
// variable name starting with capital letter is fine, and will not throw any error, but since it is used in OOP so we should avoid using it in other cases
// variables whose values are constant should be written in all uppercase
// let PI = 3.1415;

// =================== ASSIGNMENT 1 ====================
// let country = "India";
// let continent = "Asia";
// let population = "140 Millions";

// console.log(
//   "I live in " +
//     country +
//     " which is a part of " +
//     continent +
//     " continent, and has a population of " +
//     population
// );
// ===========================================================

// Data Types in JavaScript

// there are mainly two types of data types in JavaScript => Primitive Data Types and Objects

// In the primitve data types, we have 7 types of data types => number, string, boolean, undefined, null, symbol and big int

// 1. number: floating point numbers, used for decimals and integers (let age = 24;)
// 2. string: sequence of characters, used for text (let firstName = 'Shivani';)
// 3. boolean: logical type that can only be either true or false, used for taking decisions (let meetsCriteria = true;)
// 4. undefined: value taken by a variable that is not yet defined ('empty value') (let count;)
// 5. null: also means 'empty value'
// 6. symbol (ES2015): value that is unique and cannot be changed [Not useful for now]
// 7. BigInt (ES2020): larger integers than the number type can hold.

// JavaScript has dynamic typing: we do not have to mnually define the data type of the value stored n a variable, instead, data types are determined automatically.

// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof true);

// let year;
// console.log(year); // its output will be undefined because year does not have any value defined in it
// console.log(typeof year); // variable which is undefined, its type is also undefined

// year = 2000;
// console.log(typeof year); // now this will be a number

// console.log(typeof null); // the type of null should be null, but for some reason, it is a bug in javascript that type of null is "object"

// =================== ASSIGNMENT 2 ====================
// let isIsland = false;
// let language;
// let country = "India";
// let population = "140 Millions";

// console.log(typeof isIsland);
// console.log(typeof language);
// console.log(typeof country);
// console.log(typeof population);
// ===========================================================

// ===========================================================

// let , const and var in javascript

// =================== ASSIGNMENT 3 ====================
// const isIsland = false;
// const language = "Hindi";
// const country = "India";
// const continent = "Asia";
// let population = "140 Millions";
// isIsland = true; // TypeError: Assignment to const variable

// console.log(typeof isIsland);
// console.log(typeof language);
// console.log(typeof country);
// console.log(typeof population);
// ===========================================================

// basic operators in javascript

// arithematic operators
// let age = 2024 - 2000;
// console.log(age);

// console.log(age * 2, age / 10);

// const firstName = "Shivani";
// const lastName = "Raichandani";
// console.log(firstName + " " + lastName);

// assignment operators
// let x = 15;
// console.log(x); // 15
// x += 10;
// console.log(x); // 25

// x -= 15;
// console.log(x); // 10

// x *= 2;
// console.log(x); // 20

// x /= 10;
// console.log(x); // 2

// increment/decrement operators
// let y = 20;
// console.log(y);
// y++; //first uses the value then increment it
// console.log(y);
// y--; //first uses the value then decrement it
// console.log(y);

// ++y; //first increments the value and then uses it
// console.log(y);
// --y; //first decrements the value then uses it
// console.log(y);

// =================== ASSIGNMENT 4 ====================
// const isIsland = false;
// const language = "Hindi";
// const country = "India";
// const continent = "Asia";
// let population = 140;

// population /= 2;
// console.log(population);

// population++;
// console.log(population);

// let finlandPopulation = 6;
// console.log(population > finlandPopulation);

// let avgPopulation = 33;
// console.log(population < avgPopulation);

// const decription =
//   country +
//   " is in " +
//   continent +
//   " and its " +
//   population +
//   " million people speak " +
//   language;

// console.log(decription);
// ===========================================================

// =================== CODING CHALLENGE 1 ====================
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

// let markHeight, johnHeight, markMass, johnMass;
// markHeight = 1.69;
// johnHeight = 1.95;
// markMass = 78;
// johnMass = 92;

// let markBMI = markMass / (markHeight * markHeight);
// console.log(markBMI);

// let johnBMI = johnMass / (johnHeight * johnHeight);
// console.log(johnBMI);

// let markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

// markHeight = 1.88;
// johnHeight = 1.76;
// markMass = 95;
// johnMass = 85;

// markBMI = markMass / (markHeight * markHeight);
// console.log(markBMI);

// johnBMI = johnMass / (johnHeight * johnHeight);
// console.log(johnBMI);

// markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

// ===========================================================

// String and Template Literals
// earlier we used '+' sign for concatenating the strings.

// const firstName = "shivani";
// const lastName = "raichandani";
// const job = "engineer";
// const age = "24";

// // =================== ASSIGNMENT 5 ====================

// // below is how we can write template literal
// const desc = `I'm ${firstName} ${lastName} a ${age} old ${job}!`;
// console.log(desc);
// ===========================================================

// ===========================================================

// control statements in javascript
// const age = 13;

// if (age >= 18) {
//   console.log(`Shivani can drive!`);
// } else {
//   console.log(`Shivani have to wait for ${18 - age} more years to drive!`);
// }

// =================== ASSIGNMENT 6 ====================
// let country = "India";
// let population = 14;
// let avgPopulation = 33;

// if (population > avgPopulation) {
//   console.log(`${country}'s population is above average`);
// } else {
//   console.log(
//     `${country}'s population is ${avgPopulation - population} below average`
//   );
// }
// ===========================================================

// =================== CODING CHALLENGE 2 ====================
// CHALLENGE #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

// "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

// 2. Modify the outputs above to use template literals to include the BMI values in the outputs.

// Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

// Note: Don't round the BMI values. Leave them as they are.

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// /* Write your code below. Good luck! 🙂 */

// if (BMIJohn > BMIMark) {
//   console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// } else {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// }

// ===========================================================

// =================== Type conversion and coercion ====================
// // type conversion
// const birthYear = 2000;
// console.log(birthYear + "18"); // 200018
// // birth year will be treated as string, hence the output will be 200018

// console.log(Number("Shivani")); // NaN

// // type coercion
// console.log("23" + "10"); //2310
// console.log("13" + 10); //1310

// console.log("13" - "10" - 1); //2
// console.log("13" - "10" - "2"); //1

// ===========================================================

// =================== Truthy and falsy values ====================

// // Falsy values: 0, '', null, undefined, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(""));
// console.log(Boolean(NaN));

// // Truthy values: Anything except falsy values is a truthy value.
// console.log(Boolean(100));

// Truthy and falsy values are always applied implicitly by JS behind the scenes, we do not need to define them explicitly in our code.

// there are two ways in which javascript can apply truthy and falsy values : while using logical operators and another one in logical context.

// // In Logical Context
// const money = 0;
// if (money) {
//   console.log(`You've got some money`); // if(true) this will be logged : when money is anything other than falsy value
// } else {
//   console.log(`Go, get a job!`); // if(not true) this will be logged : when money is simply zero
// }

// ===========================================================

// =================== Equality Operators (== vs. ===) ====================
// console.log("12" == 12); // true (because == does type coercion and makes string a number)
// console.log("12" === 12); // false (no type coercion takes place)

// // to take user input, we can use prompt
// const favNumber = Number(prompt("Enter your favorite number: "));
// if (favNumber === 21) {
//   console.log("Great choice!");
// } else if (favNumber === 1) {
//   console.log("Ok ok choice!");
// } else {
//   console.log("Not at all a good choice");
// }

// ===========================================================

// =================== Logical Operators ====================
// const hasDrivingLicense = true;
// const hasGoodVision = true;

// console.log(hasDrivingLicense && hasGoodVision); // output: true when both variables were true
// console.log(hasDrivingLicense && hasGoodVision); // output: false when one of them or both variables were false
// console.log(hasDrivingLicense || hasGoodVision); // output: true when any of the variable was true
// console.log(hasDrivingLicense || hasGoodVision); // output: false when both variables were false

// console.log(!hasDrivingLicense || hasGoodVision); // output: false
// console.log(hasDrivingLicense || !hasGoodVision); // output: true

// console.log(!hasDrivingLicense && hasGoodVision); // output: false
// console.log(hasDrivingLicense && !hasGoodVision); // output: true

// const isTired = false;

// if (hasDrivingLicense && hasGoodVision && !isTired) {
//   console.log("This person can drive!");
// } else {
//   console.log("Please refrain from driving");
// }
// ===========================================================

// =================== CHALLENGE #3 ====================
// There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:

// 1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:

// "Dolphins win the trophy" if Dolphins win, or

// "Koalas win the trophy" if Koalas win, or

// "Both win the trophy" if their average scores are equal.

// TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.

/* Write your code below. Good luck! 🙂 */

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy");
// } else if (scoreKoalas > scoreDolphins) {
//   console.log("Koalas win the trophy");
// } else {
//   console.log("Both win the trophy");
// }
// ===========================================================
