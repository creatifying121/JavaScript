let score = "24";

// console.log(typeof score);

let stringToNum = Number(score);
// console.log(typeof stringToNum);
// "353" => 353
// "56abcei" => NaN
// true => 1, false => 0

let bool = 1;
let numToBool = Boolean(bool);
// console.log(numToBool, typeof numToBool);
// 1 => true, 0 => false, anything else (like "shivani") => true

let invalidStr = "34kseuie";
let invalidStrToNum = Number(invalidStr);
// console.log(invalidStrToNum, typeof invalidStrToNum);

let num = 232;
let numToStr = String(num);
// console.log(numToStr, typeof numToStr);

// OPERATIONS

let value = 4;
let negValue = -value;
// console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3);
// console.log(2 / 3);
// console.log(2 % 3);

let str1 = "hello";
let str2 = " shivani";
let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32
// console.log(1 + "2" + 1); // 121

// console.log(true); //true
// console.log(+true); // 1 (true = 1 , no increment happened because of +)
// console.log(2 + true); // it is evaluated as 2+1 = 3 {3 is the output}
// console.log(true + 1); // it is evaluated as 1+1 = 2 {2 is the output}

// console.log(+""); // this evaluates to 0
// console.log(3 + ""); // this evaluates to 3 + 0 {representing empty string}, so output is 3
// console.log("" + 4); // this evaluates to 0 + 4 {representing empty string}, so output is 4

// // below is not a good practice
let num1, num2, num3;
num1 = num2 = num3 = 3 + 5;
// console.log(num1, num2, num3);

let x = 3;
const y = x++;

// console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

// console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
