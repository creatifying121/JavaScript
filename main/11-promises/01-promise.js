// most of the time we consume the promises, one of the examples is below - this fetch() is a way to consume the promises, but this is not all. we need to learn how to make promises
// fetch("url").then(result).catch(error).finally(will_always_happen);

// history of promise
// in earlier days, when we didn't have promises, at that time libraries like q and bluebird provided these functionalities of promise, and bluebird got very popular that now it has been integrated in javascript.

// we need to get an instance of promise , in order to make it. so in below manner we can create a promise
// const promiseOne = new Promise();

// now this Promise takes a callback function, which has two parameters, resolve and reject (representing that either the request will be resolved or it may be rejected)
const promiseOne = new Promise(function (resolve, reject) {
  // here we can add any async task , like db calls, network calls, or cryptography related, etc.

  setTimeout(() => {
    console.log("async task completed");

    // until and unless this resolve() isn't called here, there will be no link between then and resolve method
    resolve();
  }, 1000);
});

// now , what is the use of this resolve and reject?? why even we have added those while creating promise?

// so after creation, promise is meant to be consumed
// and in order to do so, we have then() , catch() and finally(), so here we will use then() first. the direct connection of then is with resolve, it is executed when promise is resolved
promiseOne.then(function () {
  console.log("promise resolved");
});

// another way of creating + consuming the promises
new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("async task 2 completed");
    resolve();
  }, 1000);
}).then(function () {
  console.log("promise 2 resolved");
});

// ======================================================================================

// CREATING ANOTHER PROMISE => PASSING DATA THROUGH RESOLVE()
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: "shivani", email: "shivani@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user); // o/p: { username: 'shivani', email: 'shivani@example.com' }
});

// ======================================================================================

// before the promises were introduced, we used callbacks to perform such type of operations, but while using callbacks, we face two problems : CALLBACK HELL and INVERSION OF CONTROL

// 1. CALLBACK HELL : when there are multiple callbacks inside each other, and are nested so tightly that each of them is dependent on other one, this nesting is also referred as "Pyramid of Doom". this kind of structure is difficult to read, maintain, debug and scale

// 2. INVERSION OF CONTROL : This is the problem which is caused when we use multiple callbacks. For example, we have a shopping cart, which is dependent on items added, and now payment depends on this shopping cart, so it may happen that, createOrder() api might stop functioning and ends up calling payment method twice or thrice, so to solve this issue, we can use promises, which guarantee us, that any api will only be called once, when the promise is resolved, otherwise we will be getting an error.

// PROMISE CHAINING: Through this concept we can avoid the problem of callback hell.

const promiseFour = new Promise(function (resolve, reject) {
  let error = true; // we will see reject() example through this

  if (!error) {
    setTimeout(() => {
      console.log("async task 4 done");
      resolve({ username: "shivani", password: "1234" });
    }, 100);
  } else {
    reject("ERROR: Something went wrong!");
  }
});

// when we do chaining, so whatever is returned from first then() will be available for the second the() which is chained with it, also, we need to use catch along with that, to handle errors. below is the example-

// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// we also have a finally method, which is the final result we show to the user or developers use it for their convenience for knowing whether the task is completed or not
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => console.log("finally, the promise is resolved or rejected"));

// ============================================================================================

// using ASYNC AWAIT to consume the promise this time
const promiseFive = new Promise((resolve, reject) => {
  let error = true;
  if (!error) {
    setTimeout(() => {
      console.log("task 5 done");
      resolve({ username: "JavaScript", password: "12345" });
    }, 1000);
  } else {
    reject("JS went wrong: ERROR");
  }
});

// when we do like below, and if there are no errors in the promise that has been created, then this below approach will work fine. but when we have an error, then it won't work
// async function consumePromiseFive() {
//   const response = await promiseFive;
//   console.log(response);
// }

// instead, we can handle errors using try catch block
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// ========================================================================================

// GETTING DATA FROM API
// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users"); // we are getting data from this url

//     const data = response.json(); // now let's conver the data coming from url to a readable format

//     console.log(data);
//   } catch (error) {
//     console.log("Error: ", e);
//   }
// }

// above approach is fine, still it won't give results, this is because, when the data came from api, it is in a different format, and now we are trying to convert that data to json, so this operation will also take time, thus, we need to add await before response.json() too, explicitly telling the environment to wait over here also

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users"); // we are getting data from this url

//     const data = await response.json(); // now let's conver the data coming from url to a readable format

//     console.log(data);
//   } catch (error) {
//     console.log("Error: ", e);
//   }
// }

// getAllUsers();

// =======================================================================================

// Now let's try getting the same data using .then().catch()
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log("error: ", err));
