// // if else
// const temp = 41;
// if (temp < 50) {
//   console.log("less than 50");
// } else {
//   console.log("greater than 50");
// }

// // comparison operators available are, >, <, == , >=, <= , !=, ===, !==
// const score = 100;
// if (score === 100) {
//   let power = "sky dive";
//   console.log(`my power: ${power}`);
// }

// shorthand notation : this is called implicit scope (multiple lines not allowed -{ can be done, but not a good practice })
const balance = 1000;
// if (balance > 500) console.log("tested");
// if (balance > 500) console.log("tested"), console.log("tested2");

// // nesting conditions
// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 1200"); // this will be executed because only this codition meets
// }

// REAL WORLD CONDITIONS
const userLoggedIn = true;
const debitCard = true;
const loggedInFromEmail = true;
const loggedInFromGoogle = false;

if (userLoggedIn && debitCard) {
  // if any of the condition is false, code will not execute
  console.log("you can purchase the course");
}

if (loggedInFromEmail || loggedInFromGoogle) {
  // if any one condition is true, code will execute
  console.log("you can login");
}

// Above were the logical operators widely used, we have one more operator like this -

// NULLISH COALESCING OPERATOR (??) : this operator revolved around these two values, null and undefined

// this operator is used to decide which value to prefer, below are the examples

let val;

// val = 5 ?? 10;
// console.log(val); // 5

// val = null ?? 10; // we are asking to decide if you have got the value then assign that value to the variable, otherwise null {these are used to handle complex db or api responses, we won't be getting any straightforward value like 10 in real world cases}
// console.log(val); // 10

// val = undefined ?? 15; // again, we are asking it to put a value if received one, otherwise undefined
// console.log(val); // 15

//++++++++++++++++++++

// IN BELOW CASE, THE FIRST VALUE WHICH IS RECEIVED, WILL BE THE OUTPUT
// val = null ?? 10 ?? 15; // 10 will be the output, because, it is the first value encountered
// console.log(val); // 10

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// TERNARY OPERATOR {condition ? true : false}

const icedTeaPrice = 100;
icedTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
