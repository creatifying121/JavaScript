// for of loop => for array
let arr = [1, 2, 3, 4, 5];
for (const i of arr) {
  // console.log(i); // {output: 1 2 3 4 5}
}

// for of loop => for string
let str = "hello there";
for (const s of str) {
  // console.log(s); // {output: h e l l o  t h e r e => everything in a new line is printed}
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// loops on map
const map = new Map();
// map.set("1", "tea");
// map.set("1", "kokam sharbat");
// map.set("1", "orange juice");
// map.set("1", "coffee");

// console.log(map); // Map(1) { '1' => 'coffee' } => when keys are same, then it takes the last key value pair as element in map

map.set("1", "tea");
map.set("2", "kokam sharbat");
map.set("3", "orange juice");
map.set("4", "coffee");

// console.log(map); // Map(4) {
//   '1' => 'tea',
//   '2' => 'kokam sharbat',
//   '3' => 'orange juice',
//   '4' => 'coffee'
// }

map.set("2", "kokam sharbat"); // duplicates not allowed in map , also maintains the order in which elements are entered
// console.log(map); // Map(4) {
//   '1' => 'tea',
//   '2' => 'kokam sharbat',
//   '3' => 'orange juice',
//   '4' => 'coffee'
// }

// loop on map

// using for of loop and array destructuring we can access elements of map

// 1st example
for (const key of map) {
  // console.log(key);
}
// output
// [ '1', 'tea' ]
// [ '2', 'kokam sharbat' ]
// [ '3', 'orange juice' ]
// [ '4', 'coffee' ]

// 2nd example (using destructuring, we can get the desired output)
for (const [key, value] of map) {
  // console.log(key + ": " + value);
}
//output
// 1: tea
// 2: kokam sharbat
// 3: orange juice
// 4: coffee

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// FOR IN LOOP FOR ARRAY

const arrrr = ["shivani", "purva", "bhumika", "laisha", "dakshayani"];

for (const key in arrrr) {
  console.log(key); // {output: 0 1 2 3 4} => all the indices of array are returned

  console.log(arrrr[key]); // {output: all names}
}
