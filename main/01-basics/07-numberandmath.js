// normal way of declaring number
const num1 = 400;
// console.log(num1); // output -> 400

// using number class
const num2 = new Number(200); // this helps us telling the js engine explicitly that we only want this to be in number form
// console.log(num2); // output ->[Number: 200]

// now since we defined number using number class, then we get associated properties and methods to work with
// console.log(num2.toString()); // this will conver the number to string {output -> 200}

// console.log(num2.toFixed(2)); // through this we can decide what amt of characters we need after decimal and we need to pass the parameter stating what amount of characters should be after the decimal {output -> 200.00}

const num3 = 23.8966;
// console.log(num3.toPrecision(3)); // this works for the value before decimal (in this case on 23) and it returns a string formatted to the specified precision {output: 23.9}

const num4 = 123.9734;
// console.log(num4.toPrecision(4)); // {output -> 124.0}

const newNum = 1000000000; // sometimes it is difficult to read this kind of number, where we have multiple zeroes and we might make a mistake while counting zeroes, so we can use localestring() method
// console.log(newNum.toLocaleString()); // {output -> 1,000,000,000} => now this format is used as the standard US format

// to return the same value as Indian format, we can do it as below
// console.log(newNum.toLocaleString("en-IN")); // {output -> 1,00,00,00,000}

// for people going for competetive programming and all, they can have these properties like MAX_VALUE, MIN_VALUE, isInteger, etc.

// +++++++++++++++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++++++++++++++

console.log(Math); // Math is by default library provided by JavaScript, and since it is an object so it comes up with its own properties and methods. it includes properties like PI, Log10e, etc. and methods like abs(), pow(), floor(), round(), max(), min(), and many more

console.log(Math.abs(-4)); // for converting negative values to positive ones {output -> 4}

console.log(Math.round(4.5)); // for rounding of the number {output -> 5}

console.log(Math.ceil(4.1)); // for rounding of the number in such a way that even 0.1 is greater then it will convert it to the upper limit number, here 4.1 will be converted to 5 {output -> 5}

console.log(Math.floor(4.6)); // rounds of the numbers to lower limit number {output -> 4}

console.log(Math.sqrt(35)); // finds out the sqrt of a number {output: 5.916079....}

console.log(Math.pow(2, 4)); // finds the power of some number, here we are calculating 2^4 {output: 16}

console.log(Math.min(1, 2, -1, 4, -10, 15)); // finds out the minimum value among all numbers {output: -10}

console.log(Math.max(1, 2, -1, 4, -10, 15)); // finds out the maximum value among all numbers {output: 15}

console.log(Math.random()); // provides a random value from 0 to 1

console.log(Math.random() * 10 + 1); // *10 to shift one decimal further, and +1 to avoid case where we can get random value as 0.041.. something , and adding this 1 makes sure that we won't be getting 0 as random answer

// now if we want that random numbers should appear in some range only then we can do as follows
const min = 10; // we want range between 10
const max = 20; // and 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // so here (max-min+1) tells what maximum value can be there in the range (in this case, 20), while + min shows that you have to start taking values from here, in this case from 10
