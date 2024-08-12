/*
  some more methods in array-

  1. arr.concat(arr2); // this merges array elements and returns another array (which contains the merged elements) in such a way that, we can access those elements easily {as compared to the result we get using push} - SEE EXAMPLE BELOW


*/

const arr = ["hello", 1, true];
const arr2 = [21, "shivani", false];

// arr.push(arr2);
// console.log(arr); // ['hello', 1, true, [21, 'shivani', false]] => this is the output, and this does not work pretty well, in order to access elements inside the nested array we will need to use destructuring concept

// console.log(arr[3]); // this will return the nested array => [21, 'shivani', false]
// console.log(arr[3][2]); // now using this syntax, we will be able to access the elements inside that above nested array => false

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// BETTER WAY OF DOING THIS
const ans = arr.concat(arr2); // we are storing the result in a new variable, because concat() returns a new array after merging elements, and it does not make any changes to the existing array
// console.log(ans); // ['hello', 1, true, 21, 'shivani', false]

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ANOTHER WAY OF DOING THIS - SPREAD OPERATOR
const res = [...arr, ...arr2]; // this ... operator helps getting single element values from the array, and here we do not have limitation of merging one array at a time, we can merge multiple arrays in this one, example - [...arr1, ...arr2, ...arr3, ...arr4    ....    and so on]
// console.log(res); // ['hello', 1, true, 21, 'shivani', false]

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ANOTHER IMPORTANT CONCEPT - FLATTEN AN ARRAY USING FLAT METHOD
const array = [1, 2, 3, [4, 5, 6], 7, 8, [7, 3, 2, [8, 3, 2]], 1, 2];
const res_array = array.flat(Infinity); // flat method will spread all the array elements, and this parameter "Infinity" shows to what depth we want to spread the elements, so we need to check this in our input array that to what depth we are given the array elements. in our example it is 3, the best practice is to provide the exact depth, but we can also use infinity
// console.log(res_array); // [1, 2, 3, 4, 5, 6, 7, 8, 7, 3, 2, 8, 3, 2, 1, 2] => this is the output where every element is now a part of a single array, not in nested one.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// sometimes while fetching data from external source, we don't know in what format we are getting the data, so in order to convert and use that data, following are some important array methods to remember

// 1. Array.isArray(dataToCheck); => to check if the data which is coming to us is an array or not

// 2. Array.from(dataToConvert); => to convert the data to an array

console.log(Array.isArray("Shivani")); // false => because it is a string
console.log(Array.from("Shivani")); // ['S', 'h', 'i', 'v', 'a', 'n', 'i']

console.log(Array.from({ name: "Shivani" })); // for this output will be an empty array, as it is not sure, of which data it needs to make an array, for keys or for values {output => []}

let score1 = 100;
let score2 = 200;
let score3 = 300;

// we can use of(val1, val2, .... , valn); to convert set of values to an array {this cannot be handled by from() method}
console.log(Array.of(score1, score2, score3)); // [100, 200, 300]
