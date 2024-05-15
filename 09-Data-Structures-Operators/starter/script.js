"use strict";

// Data needed for a later exercise
// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },
};

// =============================================== DESTRUCTURING ARRAY START=============================
/*
// Array Destructuring basic example
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// declaring all three variables at same time
const [x, y, z] = arr; // [x,y,z] looks like an array but it is not, it is just a destructuring assignment. JS whenever sees [] on the left side of the equals sign, then it knows that it needs to perform destructuring
console.log(x, y, z);
console.log(arr); // here we can see that array is as it is, it is not being destroyed but only being destructured

// ABOVE EXAMPLE - RESTAURANT
// const [first, second] = restaurant; // this will throw an error, that restaurant is not iterable, as it is an object created, not an array in first place , so we need to access its properties using dot operator

// const [first, second] = restaurant.categories; // (O/p - Italian Pizzeria) this will provide us categories in an order they were specified, but what if we need to access the third element of the array as second, below is the solution

const [first, , second] = restaurant.categories; // (O/p - Italian Vegetarian) so we will simply put a blank space in that case
console.log(first, second);

// let's say the owner of the restaurant decided to switch the main and secondary category, as in above loc the output was Italian Vegetarian, so italian was the main category and vegetarian was the secondary category, but now we want to switch those
let [main, , secondary] = restaurant.categories;
console.log(main, secondary); // Italian Vegetarian

// SWITCHING VARIABLES
// here we can use the swapping kind of thing
// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary); // Vegetarian Italian

// now how to do this using destructuring
[main, secondary] = [secondary, main]; // we will simply reassign values here
console.log(main, secondary); // Vegetarian Italian

// Another way of destructuring is that we can have a function, return an array and then we can immediately destruct the result into different variables. And so this allows us to return multiple values from a function
console.log(restaurant.order(2, 0)); // ['Garlic bread', 'Pizza']

// now let's destructure the above array which is returned via order function
// so below is the way to receive the output returned from function and destructure it and store it into variables immediately
const [starter, mainn] = restaurant.order(2, 0);
console.log(starter, mainn);

// let's take destructuring one step further
// NESTED ARRAY DESTRUCTURING
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j); // (2), [5,6] => we received the nested array in our output

// now what if we want individual element from the nested array => destructuring inside destructuring
const [p, , [q, k]] = nested;
console.log(p, q, k); // 2 5 6

// we can also set the default values for the variables when we are extracting them. THIS CAN BE USEFUL WHEN WE DON'T KNOW THE SIZE OF ARRAY.
// const [m, n, o] = [8, 9];
// console.log(m, n, o); // 8 9 undefined => this is just like trying to access a variable whose value is not defined yet

const [m = 1, n = 1, o = 1] = [8, 9];
console.log(m, n, o); // 8 9 1 => in this way, where array element does not exist , the variable will hold the default value assigned to it.
*/
// =============================================== DESTRUCTURING ARRAY END =============================
