"use strict";

///////////////////////////////////////
// Scoping in Practice

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();


///////////////////////////////////////
// Hoisting and TDZ in Practice

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


///////////////////////////////////////
// The this Keyword in Practice
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();


///////////////////////////////////////
// Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);


///////////////////////////////////////
// Objects vs. primitives
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me);


///////////////////////////////////////
// Primitives vs. Objects in Practice

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);
// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);
*/

// =========================================================================
/*
// this keyword - my practice
console.log(this); // it refers to the window object, hence o/p is window object

const calcAge = function (birthYear) {
  console.log(2024 - birthYear);
  console.log(this); // undefined (in regular function call, this keyword is undefined)
};
calcAge(2000); // since we are in strict mode, it will give undefined, if we were in sloppy mode, then it would have been the global object

const calcAgeArrow = (birthYear) => {
  console.log(2024 - birthYear);
  console.log(this); // window (arrow function does not get its own this function, it uses its lexical parent to find the value of this, and here its lexical parent is the global scope, thus, window would be printed on the console)
};
calcAgeArrow(2001);

const shivani = {
  year: 2000,
  calcAge: function () {
    console.log(this); // shivani object data (it refers to shivani object, because when we have a method call - [function related to an object is called] then the this keyword refers to the object itself from where function is called)
    console.log(2024 - this.year);
  },
};
shivani.calcAge();

// we know that this keyword point to the object that is calling the method. so this means that this keyword will not simply point at the object in which we wrote the method.

// let's say, above we wrote calcAge() method in shivani object, so there can be a confusion that this keyword might be pointing to shivani, because it is written inside shivani object. but that's not true.

// the reason that the this keyword will point to shivani , because shivani is the object calling that method. that's a subtle but very important difference.
const purva = {
  year: 1999,
};
purva.calcAge = shivani.calcAge; // copying the calcage method from shivani object to purva object - this is called method borrowing
console.log(purva);
purva.calcAge(); // 25 (this keyword always points to the object that is calling the method. even if it is written inside another object)

// now what if we move the function completely out.
const f = shivani.calcAge;
f(); // here this keyword is undefined, we will also get an error "cannot read property 'year' of undefined, because this.year means undefined.year, so value cannot be calculated"

// this is because, f function is now just a regular function call, it is not attached to any object. basically no one owns the f function. so in that case, this keyword will be undefined.
*/

// ================== REGULAR FUNCTION VS. ARROW FUNCTION =========================

// 1. never ever use arrow function as a method inside an object

/*
// if the firstName was defined outside of the object, using var keyword, then its value can be accessed by the greet method, because, var keyword adds properties to the global object
var firstName = "Sagar";

const shivani = {
  firstName: "Shivani",
  year: 2000,
  calcAge: function () {
    console.log(this);
    console.log(2024 - this.year);
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};
// shivani.greet(); // Hey undefined. (it is using parent's lexical scope, so the value of this is undefined)

shivani.greet(); // Hey Sagar (after adding firstName variable outside of the object in global scope)


// Example IMP : when we have a function inside method
const shivani = {
  firstName: "Shivani",
  year: 2000,
  calcAge: function () {
    console.log(this);
    console.log(2024 - this.year);

    // SOLUTION 1: using self variable
    // const self = this; // self = shivani object
    // const ifMillenial = function () {
    //   // console.log(this.year >= 1991 && this.year < 2000);
    //   console.log(self.year >= 1991 && self.year <= 2000);
    // };
    // ifMillenial(); // error: cannot read properties of year. this means that this keyword must be undefined. solution to this can be defining a self variable which preserves the value of this (shivani object in this case)

    // SOLUTION 2: Using an Arrow function (because arrow function does not have its own this keyword, instead it usese this from its parent scope) without any extra variable. in this case parent scope is shivani object
    const ifMillenial = () => {
      console.log(this.year >= 1991 && this.year <= 2000);
    };
    ifMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};
shivani.calcAge();

// as we know that arrow function should not be used where we need to use this keyword, in the same way we have arguments keyword, which works for regular function expressions but not for the arrow functions
const func = function (a, b) {
  console.log(arguments);
  return a + b;
};
func(2, 5);
func(3, 4, 5, 6);

// for arrow function
const fun = (a, b) => {
  console.log(arguments); // arguments is not defined
  return a + b;
};
fun(2, 5);
fun(3, 4, 5, 6);
*/

/*
// ========================= PRIMITIVES VS. OBJECTS/REFERENCE TYPES (HOW THEY ARE STORED IN MEMORY) ============================

// the source of confusion
let age = 30;
let oldAge = age;

age = 31;
console.log(age); // 31
console.log(oldAge); // 30

const me = {
  name: "Shivani",
  age: 30,
};

const frnd = me; // copying the object into a new one
frnd.age = 27;

console.log("Friend", frnd); // here age is 27
console.log("Me", me); // here also it became 27, but we were thinking that it will be 31
*/

// ========================= PRIMITIVES VS. OBJECTS/REFERENCE TYPES (HOW THEY ARE STORED IN MEMORY) PRACTICE ============================
let lastName = "Raichandani";
let oldLastName = lastName;

lastName = "Imaginary";
console.log("old", oldLastName);
console.log("new", lastName);

// reference types
const purva = {
  firstName: "Purva",
  lastName: "Joshi",
  age: 25,
};

const marriedPurva = purva;
purva.lastName = "Shrivastava";
console.log("before marriage", purva);
console.log("after marriage", marriedPurva);

// here we saw that for both purva and married purva, surname changed. so this is because the object is being store in the heap memory, and we can make changes in the properties there, because const and let have nothing to do with the heap memory. they are strict in the call stack part. so if we try to assign a whole new object to married purva, then it will throw an error

// marriedPurva = {}; // assignment to constant variable (this is because, marriedPurva exists in the call stack, it is referring to the purva object, so a whole new assignment cannot be done to this object as it is const. if there was let, then we could have reassigned it a new object)

// what if we want to copy an object and if we make some changes then it should not affect the older one?
const purva2 = {
  firstName: "purva",
  lastName: "joshi",
  age: 25,

  // deep copy example
  family: ["Shivani", "Akash"],
};

// to copy object we can do as below (merging two object)
const purvaCopy = Object.assign({}, purva2);
purvaCopy.lastName = "Shrivastava";

console.log("before marriage", purva2);
console.log("after marriage", purvaCopy);

// deep copy example
purvaCopy.family.push("Nayan");
purvaCopy.family.push("Sagar");

// here we can see that before and after marriage, purva has 4 members, while we expected that before marriage there are 2 family members. this is because object.assign() creates a shallow copy. because of that, array object cannot be copied the way we wanted
console.log("before marriage", purva2);
console.log("after marriage", purvaCopy);

// using the OBJECT.ASSIGN() technique only works on the first level, i.e., if we have an object inside the object, then this inner object will actually still be the same. so it will still point to the same place in the memory. and that's why it is said that object.assign() creates a shallow copy and not a deep clone, which is what we would like to have. as deep copy clones everything.

// deep cloning is a complex topic, which is handled using external library like lodash, so here we are not doing so, but we'll learn later
