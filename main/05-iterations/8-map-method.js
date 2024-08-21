const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// adding 10 to each of the number in nums array
const newNums = nums.map((num) => {
  return num + 10;
});
// console.log(newNums); // [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

// same thing using forEach, but adding 5 this time
const forEachAdd5 = [];
nums.forEach((item) => {
  forEachAdd5.push(item + 5);
});
// console.log(forEachAdd5); // [ 6,  7,  8,  9, 10, 11, 12, 13, 14, 15 ]

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// CHAINING CONCEPT
const chainMap = nums
  .map((num) => {
    return num * 10;
  })
  .map((num) => {
    return num + 1;
  });

console.log(chainMap); // [ 11, 21, 31, 41,  51, 61, 71, 81, 91, 101 ]

const chainMapFilter = nums
  .map((num) => {
    return num * 10;
  })
  .map((num) => {
    return num + 1;
  })
  .filter((num) => num > 40);

console.log(chainMapFilter); // [ 41,  51, 61, 71, 81, 91, 101 ]
