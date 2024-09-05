// object literal
const user = {
  username: "shivani",
  email: "shivani@gmail.com",
  password: 123,
  signedIn: true,

  getUserDetails: function () {
    console.log(this.email);

    console.log(this); // gives whole object
  },
};

// // accessing these object's properties
// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this); // {}

// PROBLEM IN USING OBJECT LITERALS: here, everytime we need a new user, we need to create a whole new object from scratch. so thus, we have constructor function in oop. and hence the code repeatability reduces.

// ========================================================================================

// CONSTRUCTOR FUNCTION

// the "new" keyword is a constructor function, as it provide a new instance for a particular object

function User(username, email, isLoggedIn) {
  // properties
  this.username = username;
  this.email = email;
  this.isLoggedIn = isLoggedIn;

  // method
  this.greeting = () => {
    console.log(`hello ${this.username}`);
  };

  return this; // even if you don't return this from here, it will implicitly understand it.
}

const userOne = new User("shivani", "shivani@gmail.com", true);
const userTwo = new User("pooja", "pooja@gmail.com", false);

console.log(userOne); // { username: 'shivani', email: 'shivani@gmail.com', isLoggedIn: true }
console.log(userTwo); // { username: 'pooja', email: 'pooja@gmail.com', isLoggedIn: false }

console.log(userOne.greeting());

// advantages of new
// step 1 => every time we write new, a new empty object is created
// step 2 => a constructor function is called (all the arguments we have passed are stored in here)
// step 3 => through this keyword the arguments are injected with this
// step 4 => we get a new instance

// ========================================================================================

// constructor is basically reference to itself
console.log(userOne.constructor); // [Function: User]

// console.log(User.greeting());

// instanceOf() method => check if userOne and userTwo are instances of User itself or not
