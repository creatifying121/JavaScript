// FOR OF LOOP IN OBJECT
const obj = {
  1: "tea",
  2: "kokam sharbat",
  3: "orange juice",
  4: "coffee",
};

// for (const [key, value] of obj) {
//   // console.log(key + " : " + value); // error: objects are not iterable
// }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

const newObj = {
  js: "javascript",
  cpp: "C++",
  py: "python",
  rb: "ruby",
};

// USING FOR IN LOOP
for (const key in newObj) {
  console.log(key); // {output: js cpp py rb} => prints all the keys here
}

// accessing the values of keys
for (const key in newObj) {
  console.log(newObj[key]); // {output: javascript c++ python ruby} => all the values are returned
}

// ++++++++++++++++++++++++++

// for in loop cannot work upon Map() object as it is not iterable

// ++++++++++++++++++++++++++
