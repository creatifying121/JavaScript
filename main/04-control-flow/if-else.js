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
