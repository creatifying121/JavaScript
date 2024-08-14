function sayMyName() {
  console.log("s");
  console.log("h");
  console.log("i");
  console.log("v");
  console.log("a");
  console.log("n");
  console.log("i");
}

// console.log(sayMyName); // reference of function, telling where it lives {output: [Function: sayMyName]}

// sayMyName(); // function invocation / calling a function / executing a function

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

// console.log(addTwoNumbers(3, 5));

function loginUserMsg(username = "John Doe") {
  if (!username) {
    console.log("Enter a valid username");
    return;
  }

  return `${username} just logged in`;
}

console.log(loginUserMsg("shivani")); // {output: shivani just logged in}
console.log(loginUserMsg("")); // {output: enter a valid username}
console.log(loginUserMsg()); // {output: John Doe just logged in}
