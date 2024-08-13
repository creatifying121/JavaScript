const hikeUser = {};
hikeUser.id = "21300shivi";
hikeUser.name = "Shivani";
hikeUser.isLoggedIn = false;

// console.log(hikeUser);

// nested objects
const user = {
  email: "shivani@meesho.com",
  fullname: {
    userFullName: {
      firstName: "Shivani",
      lastName: "Raichandani",
    },
  },
};

// // accessing the nested object's values
// console.log(user.fullname.userFullName.firstName); // Shivani

// // now it is possible when data is coming from an external source and some of data/object while chaining is missing, so here comes the concept of optional chaining, it is nothing but we just use a question mark (as below) to keep a check whether the value is present or not, if not then it is simply skipped
// console.log(user.fullname?.userFullName.firstName); // Shivani

// combining objects

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//first method
// console.log({ hikeUser, user }); // this will create an object containing both of the objects as independent objects and not a single one. below is the output

// {
//   hikeUser: { id: '21300shivi', name: 'Shivani', isLoggedIn: false },
//   user: { email: 'shivani@meesho.com', fullname: { userFullName: [Object] } }
// }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// second method
// const obj = Object.assign(hikeUser, user); // this will combine the objects' properties in a way we expect it to work , below is the output

// writing it in this way is a best practice
// const obj = Object.assign({}, hikeUser, user); // {} is an optional parameter, but it will assure that result will be a single object containing data of other objects user wants to have together

// console.log(obj);

// {
//   id: '21300shivi',
//   name: 'Shivani',
//   isLoggedIn: false,
//   email: 'shivani@meesho.com',
//   fullname: { userFullName: { firstName: 'Shivani', lastName: 'Raichandani' } }
// }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// third method (spread operator)
// const obj = { ...hikeUser, ...user };
// console.log(obj);

// =================================================================================================

// real world data comes in the form of array of objects, so to access properties from that, we can use below syntax
const arr = [
  {
    id: 1,
    email: "shivi@gmail.com",
  },
  {
    id: 2,
    email: "pooja@gmail.com",
  },
  {
    id: 3,
    email: "purva@gmail.com",
  },
];
console.log(arr[1].email); // arrayName[indexOfObject].objectProperty; {output: pooja@gmail.com}

// ============================================================================================

// also, in real projects, we sometimes need only the keys of the objects, so to access those, we can use following method.
console.log(Object.keys(hikeUser)); // Object.keys(ObjectName); returns an array of keys {output: [ 'id', 'name', 'isLoggedIn' ]}

// in the same way we can access values too
console.log(Object.values(hikeUser)); // returns an array of values {output: [ '21300shivi', 'Shivani', false ]}

// another imp method is "entries()" , it is used to pair key and values in an array and then return it by combining into a main array
console.log(Object.entries(hikeUser)); // {output: [ [ 'id', '21300shivi' ], [ 'name', 'Shivani' ], [ 'isLoggedIn', false ]]}

// sometimes we are looping through objects, and are fetching a value, but the value does not exists, so we can handle that in two ways, first is to manually look into it (if else kind of thing), other one is using below method
console.log(hikeUser.hasOwnProperty("email")); // false
console.log(hikeUser.hasOwnProperty("name")); // true
