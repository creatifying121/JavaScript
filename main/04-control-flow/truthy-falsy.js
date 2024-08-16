// TRUTHY AND FALSY VALUES

// there are some values in javascript apart from true and false, that are considered to be always true or always false, those are called truthy and falsy values

// EXAMPLE
// const userEmail = "shivani@meesho.com"; // string is a truthy value, hence we will get output as {got your email}

// const userEmail = ""; // empty string is a falsy value, hence output will be {didn't get your email}

const userEmail = []; // empty array is also a truthy value, hence output will be {got your email}

// if (userEmail) {
//   console.log("got your email");
// } else {
//   console.log(`didn't get your email`);
// }

//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// WHAT TRUTHY AND FALSY VALUES WE HAVE????????

// FALSY VALUES : false, 0 , -0, BigInt 0n, "", null, undefined, NaN

// TRUTHY VALUES: all other values except falsy values, are the truthy values

// SOME SURPRISES BY TRUTHIES:
// "0" => this is a truthy value (zero written as string)
// 'false' => this is a truthy value (false written as string)
// " " => even space is a truthy value (inside a string)
// [] and {} => empty array and empty object are truthy values
// function(){} => empty function is also a truthy values

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// CHECKING IF AN ARRAY IS EMPTY OR NOT
const arr = [];

// if (Array.isArray(arr)) {
//   if (arr.length === 0) {
//     console.log("empty array");
//   } else {
//     console.log("array has got some elements");
//   }
// }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// CHECKING IF OBJECT IS EMPTY OR IT HAS SOME PROPERTIES
const obj = {};

// if (Object.keys(obj).length === 0) {
//   // Object.keys(objName); this gives us an array of keys, so we can check the length of array using .length, hence we are able to check whether there are properties added to the object or not
//   console.log("object is empty");
// } else {
//   console.log("object has properties");
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// SOME OUTPUT QUESTIONS
console.log(false == 0); // true
console.log(false == ""); // true
console.log("" == 0); // true
