// function calculate(num1) {
//   return num1;
// }

// console.log(calculate(200)); // 200

// // what if we have more number of arguments
// console.log(calculate(200, 400, 600)); // only the first argument will be taken care of, rest won't {output: 200}

// // so how we will be able to read all the arguments provided?
// function calculate(...num1) {
//   return num1;
// }

// // so above we used the rest operator (...) this helps combining all the arguments in a single array and then we can loop over multiple arguments provided to us

// console.log(calculate(200, 400, 600, 1000)); // [ 200, 400, 600, 1000 ]

// one more corner case of above method of rest operator
function calculate(val1, val2, ...num1) {
  return num1;
}

// above syntax will take val1 = 300, val2 = 500 and remaining items will be added into the array

// console.log(calculate(300, 500, 700, 1200, 1600, 400)); // [ 700, 1200, 1600, 400 ]

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// FUNCTIONS AND OBJECTS
// const user = {
//   username: "shivani",
//   age: 24,
// };

// function handleObjectData(anyObject) {
//   console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`);
// }

// handleObjectData(user); // Username is shivani and age is 24

// // but if there is some typo in the object properties , then results will be ambigous

const user = {
  username: "shivani",
  ages: 24,
};

function handleObjectData(anyObject) {
  console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`);
}

// handleObjectData(user); // Username is shivani and age is undefined

// we can directly pass object as an argument while invoking the function as below
// handleObjectData({ username: "shivii", age: 23 }); // Username is shivii and age is 23

// we can also pass array to this function invocation
const arr = [2, 4, 5, 7, 8, 10];

function returnSecondValue(getArr) {
  return getArr[1];
}

// console.log(returnSecondValue(arr)); // 4

console.log(returnSecondValue([2, 6, 21, 121])); // 6
