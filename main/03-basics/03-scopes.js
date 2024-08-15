var a = 200;
// console.log(a); // 200

if (true) {
  var a = 10;
  let b = 20;
  const c = 30;

  // console.log(a); // 10
  // console.log(b); // 20
  // console.log(c); // 30
}

// console.log(a); // value changed to 10 - this is not a good thing, coz if some other person is coding in the same project then variable names can be same sometimes and if var is used , then they can run into error of unexpected outputs and it will be a nuisance to debug that

let b = 400;
// console.log(b); // 400 - maintains the scope thing

const c = 500;
// console.log(c); // 500 - maintains the scope thing

// console.log(b); // error: b not defined {this error is good to have as it not exceeding its scope}
// console.log(c); // error: c not defined {again a good thing as it is also not exceeding its scope}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// SOME MORE CONCEPTS

// here, inner functions can have access to the scope/variables of the outer function, but the outer function won't be able to access the variables of inner function
function one() {
  const username = "shivani";

  function two() {
    const website = "youtube";
    // console.log(username + website); // shivaniyoutube
  }
  // console.log(website); // error: website not defined

  two();
}

one();

// similar example
if (true) {
  const username = "shivani";

  if (true) {
    const website = "youtube";
    // console.log(website + username); // youtubeshivani
  }

  // console.log(website); // error: website not defined (outer cannot have access to inner)
}

// console.log(username); // error: username not defined (again outer function cannot have access to the variables of the inner scope)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\

// INTERESTING
// what if we want to call function before its declaration
console.log(addOne(5)); // 6 - {in this case too, we can run this function, there is no such issue}

function addOne(num) {
  return num + 1;
}
// console.log(addOne(5)); // 6

// function as variable (function expression)
// but what if we do same thing with the function expression
console.log(addTwo(5)); // error: cannot access 'addTwo' before initialization

const addTwo = function (num) {
  return num + 2;
};
console.log(addTwo(5)); // 7
