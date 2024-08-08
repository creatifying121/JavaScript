// basic comparisons
// console.log(2 > 1); // true
// console.log(2 < 1); // false
// console.log(2 == 1); // false
// console.log(2 >= 1); // true
// console.log(2 <= 1); // false

// null comparison
console.log(null == 0); // false
console.log(null > 0); // false
console.log(null >= 0); // true

// this ambiguity in (null >= 0) is because >= and <= are treated differently as compared to == , > and < . >=/<= converts null to 0 and hence null>=0 is evaluated to true

// undefined comparison
console.log(undefined == 0); // false
console.log(undefined >= 0); // false
console.log(undefined > 0); // false

// in undefined no conversion takes place. hence false is result of every comparison

// strict checking
console.log("2" === 2); // false, here it checks datatype of the values too
console.log("2" == 2); // true, the string "2" is converted to a number, hence 2 == 2, is true
