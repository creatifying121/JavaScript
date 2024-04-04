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
