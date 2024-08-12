/* 
  1. in JavaScript arrays are resizable and contains different data types
  2. to access elements in array, this sytax is used "arr[indexNumber]", we can provide index of the element here, but not anything else apart from that
  3. these arrays follow zero based indexing
  4. JS array copy operations create shallow copies (the changes made to the array elements will be reflected in original array - shallow copy of an object is the copy whose properties share same references (point to the same underlying values), as a result when we change either source or copy, we may also cause the main object change too! {whereas deep copy object do not share the same reference, as a result either we change the source or copy, we are assured that we are not causing any change to other object too})

  // ==================   array methods    ================================
  1. arr.push(valueToInsert); => used to insert elements at the end of an array

  2. arr.pop(); => used to remove last element from an array

  3. arr.unshift(valueToInsert); => used to add/insert an element at the start of an array {unshift is said, not a good method to use, as when we have a large amt of data, then in order to insert an element at the start will take a lot of effort as we need to shift other elments by one position, and hence the system will take the load and performance might be hampered}

  4. arr.shift(); => used to remove the element from start of an array

  5. arr.includes(valueToSearch); => returns boolean value after checking if array has that value or not

  6. arr.indexOf(valueWhoseIndexYouWantToSearch); => returns the index on which value is present, if value is not there in array, then it returns -1

  7. arr.join(); => it is used to convert whole array into string {values are comma separated}

  8. arr.slice(startIndex, endIndex{this won't be included in range}); => returns a portion of array which we needed and passed the arguments as per our need : {slice method does not make any changes in the original array, see the example below}

  9. arr.splice(startIndex, endIndex{this will be included in the range}); => returns the portion of array for which we asked for : {also manipulates the original array and the portion that was taken out, those elements are no longer available in original array}
*/

// array declaration ways
/*
const arr1 = [1, 2, 3, 4];
const arr2 = ["shivani", "aadhya", "durga"];
const arr3 = [
  5,
  6,
  true,
  ["hey", 2130],
  { myLastName: "Raichandani" },
  "aadhya",
  "durga",
];
const arr4 = new Array(1, 2, "hey", true, [1, 4], { prop1: "heyy" });

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
*/

// ARRAY METHODS
const arr = [3, 5, 7, 1];
console.log(arr);

// arr.push(6);
// console.log(arr);

// arr.push(16);
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.unshift(4);
// console.log(arr);

// arr.shift();
// console.log(arr);

// console.log(arr.includes(7)); // true
// console.log(arr.includes(15)); // false

// console.log(arr.indexOf(7)); // 2 {since the value is present}
// console.log(arr.indexOf(17)); // -1 {value is not there in array}

// const newArr = arr.join();
// console.log(newArr); // output: 3,5,7,1

console.log("A ", arr); // output: A [3, 5, 7, 1]

const newArr1 = arr.slice(1, 3);
console.log(newArr1); // [5, 7]
console.log("B ", arr); // output: B [3, 5, 7, 1]

const newArr2 = arr.splice(1, 3);
console.log(newArr2); // [5, 7, 1]
console.log("C ", arr); // output: C [3]
