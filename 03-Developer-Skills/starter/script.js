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
