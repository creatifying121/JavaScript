// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// // PROBLEM 1:
// // We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temeperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there may be some sensor error."

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// // 1) Understanding the problem
// // - What is temperature amplitude? it is the difference between the highest and the lowest temperatures in the array
// // - How to compare max and min element in an array?
// // - What is a sensor error and what to do?

// // 2) Breaking into sub-problems
// // How to ignore errors?
// // find max value in temp array
// // find min value in temp array
// // subtracting min from max and return it

// const calcAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];

//     if (typeof currentTemp !== "number") continue;

//     if (currentTemp > max) {
//       max = temps[i];
//     }
//     if (currentTemp < min) {
//       min = temps[i];
//     }
//   }

//   return max - min;
// };

// const amplitude = calcAmplitude(temperatures);
// console.log(amplitude);

// // PROBLEM 2:
// // Function now should receive two arrays

// // Understanding the problem:
// // - With two arrays we should be implementing the functionality twice? NO , just merge the array

// // Breaking it into sub-problemns:
// // - How to merge two arrays? This can be done using concat() method. Syntax - array1.concat(array2)

// const calcAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];

//     if (typeof currentTemp !== "number") continue;

//     if (currentTemp > max) {
//       max = temps[i];
//     }
//     if (currentTemp < min) {
//       min = temps[i];
//     }
//   }

//   return max - min;
// };

// const amplitudeNew = calcAmplitudeNew([-1, -4, 4, 6, 18], [1, 28, 3, 15, 20]);
// console.log(amplitudeNew);

// // Debugging - Fixing errors
// // Steps to debug
// // 1. Identify bugs - look if there's anything which is not going as expected
// // 2. Find - find where the bug is located
// // 3. Fix - once you have found the bug, fix it
// // 4. Prevent - look in the code , if there's similar bug, and write down the test cases for the same, so that it can be prevented.

// // Debugging exercise
// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celcius",
//     // C) Fix
//     value: Number(prompt("Degree Celcius:")),
//   };

//   // B) Find
//   console.table(measurement);

//   // conversion from celcius to kelvin
//   const kelvin = measurement.value + 273;

//   return kelvin;
// };

// // A) Identify
// console.log(measureKelvin()); // prints 10273 for input 10. hence, bug identified, as expected result was 283

// ============================= CODING CHALLENGE 1 ====================================
/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// 1. Understanding the problem
// - Array should be converted to string in a special format
// - a function should be written to do so

// 2. Breaking into sub-problems
// - write a function which takes array as parameter
// - array should be converted to string
// - array element should have ºC after it
// - strings are separated using ...
// - it needs to be printed on console

const printForecast = function (arr) {
  let str = "... ";

  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  return str;
};

const testArray = [17, 21, 23];

console.log(printForecast(testArray));
