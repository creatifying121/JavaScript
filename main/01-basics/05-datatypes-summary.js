// two types of datatypes available - primitive and non-primitive (reference types)

// primitive datatypes : these are call by value. whenever we use these, then they are given to us as a copy, and whatever changes we make in those are actually the changes made in the copy
/*
  1. string
  2. nubmer
  3. boolean
  4. null
  5. undefined
  6. bigint
  7. symbol
*/

// reference type : also called as non-primitive datatype. these are the values to which direct reference to memory is given to us
/*
  1. array
  2. object (most imp part of javascript)
  3. functions
*/

// javascript is dynamically typed language

// string
let username = "Shivani";

// number
const num1 = 10;
const num2 = 5.5;

// boolean
const isLoggedIn = true;

// null
const temp = null;

// undefined
let email;

// symbol
const id = Symbol("12345");
const anotherId = Symbol("12345");
// console.log(id == anotherId); //false
// console.log(id === anotherId); //false

// bigInt
const bigNumber = 78323832847387483748327842349019350154759437519385410329403284329472397594375917917597591745749759147382994785734914888888888888888888888888899999999999999233333333333333928444444444444444444866666666666662344444444444444987455555555320000000000000398197584;
// console.log(typeof bigNumber); // number

const bigNumber3 =
  78323832847387483748327842349019350154759437519385410329403284329472397594375917917597591745749759147382994785734914888888888888888888888888899999999999999233333333333333928444444444444444444866666666666662344444444444444987455555555320000000000000398197584n;
// console.log(typeof bigNumber3); // bigint

const bigNumber2 = BigInt(283497584777777775239444444444401);
// console.log(typeof bigNumber2); // bigint

// arrays
const food = ["dal chawal", "dosa", "uttapam"];

// objects
const info = {
  name: "shivani",
  age: 24,
};
{
  name: "shivi";
  age: 23;
}

// functions
function add(num1, num2) {
  return num1 + num2;
}

const myfun = function () {
  console.log("hello");
};

// types of everyone
console.log(typeof num1); // number
console.log(typeof num2); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof temp); // object
console.log(typeof email); // undefined
console.log(typeof id); // symbol
console.log(typeof anotherId); // symbol
console.log(typeof bigNumber); // number
console.log(typeof bigNumber2); // bigint
console.log(typeof bigNumber3); // bigint
console.log(typeof food); // object
console.log(typeof info); // object
console.log(typeof myfun); // function
