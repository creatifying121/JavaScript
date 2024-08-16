// this keyword refers to the current context, example below-
const user = {
  username: "shivani",
  age: 24,

  greetings: function () {
    console.log(`${this.username}, welcome to this website`);
    console.log(this);
  },
};

// user.greetings(); // here this is referring to the username provided i.e., shivani { output: shivani, welcome to this website}

// now let's try changing the username
user.username = "purva";
// user.greetings(); // {output: purva, welcome to this website} so here, the current context chaged to username as purva, thus this referred to purva and not to shivani

// +++++++++++++++++++++++++++++++++++++++++++++++==

// console.log(this); // this will return an empty object in node env {}, while a Window object in the console env (on browser)

// above is because earlier JS can run only in the browser, and now we have multiple standalone engines and thus we are getting an empty object here when we try to log this

// +++++++++++++++++++++++++++++++++++++++++++++++++++

// // this and functions
// function hello() {
//   // console.log(this); // a lot of info we get printed on the terminal

//   let username = "shivani";
//   console.log(this.username); // {output: undefined} this works with objects only and not with functions, remember this, it is useful for building projects
// }
// hello();

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const hello = () => {
//   console.log(this); // it returns empty object here {output: {}}
// };

// hello();

// function classicFunc() {
//   const arrowFunc = () => {
//     console.log(this); // global object
//   };
//   arrowFunc();
// }
// classicFunc();

// above is happening because classic functions have their own context, while arrow functions do not have their own context, they simply work with the outer/surrounding/parent's context, thus, when we logged this only in the arrow function, so it gave us empty object (referring to the outer global scope in nodejs env), while when we wrapped this arrow function in a classic function, so it gave us global object, because here, classic function is acting as outer scope/surrounding scope / parent's scope, so it has its own context and gives us global object, hence this in the arrow functions prints global object here.

// ++++++++++++++++++++++++++++++++++++++++++++++++++++

const add = (num1, num2) => {
  return num1 + num2;
};

console.log(add(3, 4)); // 7

// above arrow function can be written as below too-
const subs = (num1, num2) => num1 - num2;

console.log(subs(6, 2)); // 4

// or even it can be written as follows -
const prod = (num1, num2) => num1 * num2;

console.log(prod(4, 5)); // 20

// how to return object in this case of implicit return
const objReturn = () => ({ username: "shivani" }); // always remember to wrap objects in parentheses while returning them through this method

console.log(objReturn()); // { username: 'shivani' }
