/*
  We have two methods of creating an object- 
  1. via Literals (here singleton object is not created)

  2. via Constructor (singleton means, when we create an object using constructor then singleton object is createed, it means that it is one of its kind, there are no multiple instances created for this one)

  
  // OBJECT LITERALS 
  syntax: const objectName = {}; 

  => keys are by default considered as string type in objects

  => properties inside object can be accessed in two different manners - 
    1. using dot operator => obj.propertyName
    2. as we do in arrays => obj['propertyName']

    Second method is required because, as we know that keys are treated as strings by default, and maybe sometime user provides key like this -> "full name": "Shivani Raichandani", -> so in this case, we don't even have chance to access this key like this, obj.first name -> it will throw an error on upfront.

  => we can freeze an object , to refrain it getting changed by some other user
    Syntax: Object.freeze(objectName);

  // USING CONSTRUCTOR (SINGLETON)
  syntax: Object.create()



  // INTERVIEW QUESTION: 
  You might get asked that define a symbol variable and use it in the object.


*/

// INTERVIEW QUESTION:
// You might get asked that define a symbol variable and use it in the object.
const mySym = Symbol("key1");

const jsUser = {
  name: "Shivani",
  "full name": "Shivani Raichandani",
  [mySym]: "myKey1",
  age: 24,
  location: "Bhopal",
  email: "shivani@meesho.com",
  isLoggedIn: false,
  lastLogInDays: ["monday", "saturday"],
};

// // accessing the properties inside objects
// console.log(jsUser.email); // shivani@meesho.com
// console.log(jsUser["email"]); // shivani@meesho.com

// // problem arising and solution using second method of accessing the object propety
// console.log(jsUser.full name); // error : nothing will be printed on console
// console.log(jsUser["full name"]); // correct way, no errors

// // INTERVIEW QUESTION:
// console.log(jsUser.mySym); // {output: myKey1} this is giving the output, but when we check for the type of this, then, it is not gonna be symbol

// console.log(typeof jsUser.mySym); // string

// so in order to use this mySym as symbol, we need to use it as below in our object
// const obj = {
//     [mySym] = 'myKey1',
// }

//  and to access this, we need to use this syntax -
// console.log(obj[mySym]);

// console.log(jsUser[mySym]); // myKey1
// console.log(typeof jsUser[mySym]); // string

// // changing the value of property in object
// jsUser.email = "shivani@amazon.in";
// console.log(jsUser.email);

// // refraining object from changing in any way
// Object.freeze(jsUser);

// jsUser.age = 26;
// console.log(jsUser.age); // 24 => no change performed

// console.log(jsUser);
/*
  {
    name: 'Shivani',
    'full name': 'Shivani Raichandani',     
    age: 24,
    location: 'Bhopal',
    email: 'shivani@meesho.com',
    isLoggedIn: false,
    lastLogInDays: [ 'monday', 'saturday' ],
    [Symbol(key1)]: 'myKey1'      => here you can see that now it is explicitly telling that it is a symbol
  }
*/

// Adding function to the object
jsUser.greeting = function () {
  console.log("hello there!");
};

console.log(jsUser.greeting());

// jsUser.greeting;

// now let's say we need to refer a particular property of object in our function, that can be done as below-
jsUser.greetingTwo = function () {
  console.log(`Hello ${this.name}, how's you?`);
};

console.log(jsUser.greetingTwo());
