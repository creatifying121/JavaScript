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

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  /*
  // practical application of object destructuring
  // orderDelivery: function (obj) {
  // it is common, because now here in the function arguments , we can actually do destructuring right away
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    // see here order of arguments does not matters. default values can also be set here
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  */
};

/*
restaurant.orderDelivery({
  time: "22:30",
  address: "Bhopal",
  mainIndex: 2,
  starterIndex: 2,
}); // this is pretty common when we use APIs or any third party websites to fetch data
*/

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

// =============================================== DESTRUCTURING OBJECT START =============================
/*
// while destructuring objects, we have to use the exact same properties name as we have used while declaring the object. and because of this, the order does not matter
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// this is extremely imp when we deal with the result of API calls. this data comes in form of objects, and thus destructuring is very imp

// now what if we want that variable names should be different from the property names?
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// setting default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); // menu will now give an empty array while if the default value wasn't assigned to it, then it would have provided undefined as an output, as menu is not there in the restaurant object

// mutating variables while destructuring objects
// in arrays we used swapping method and then we used another method of reassigning the values to each other
let a = 111;
let b = 999;
// we want to destructure below object obj
const obj = {
  a: 23,
  b: 7,
  c: 14,
};

// let's try doing mutation
// {a,b} = obj; // this throws an error "Unexpected token '='" : this is because, whenever we write curly braces, JS expects a code block there, and we cannot assign anything to a code block like in this example we did using equal sign, thus error was there

// so here the twist is that we need to combine this all in parenthesis
({ a, b } = obj);
console.log(a, b);

// nested objects
// const { fri } = openingHours;
// console.log(fri); // this will give the fri object as a whole

// but we want open and close hours as variables
// const {
//   fri: { open, close },
// } = openingHours;
// we can provide custom variable names to these too
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); // 11 23

// practical application of object destructuring

// many times in javascript we have functions with a lot of parameters, but then it can be hard to know the order of the parameters for someone that is using this function. And so instead of defining the parameters manually, we can just pass an object into the function as an argument, and then function will immediately destructure that object.
*/
// =============================================== DESTRUCTURING OBJECT END =============================
