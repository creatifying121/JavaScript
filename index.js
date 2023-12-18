console.log('helloo there');

// redeclaration possible for var keyword
// var a = 5;
// var a = 10;
// console.log(a);

// redeclaration prohibited
// let b = 5;
// let b = 10;
// error: SyntaxError, b has already been declared
// console.log(b);

// redeclaration prohibited for constants too
// const c = 'hi';
// c = 'hello';
// typeError, assignment to constant variable
// console.log(c);

// const d = 1;
// const d = 2;
// syntaxError, d has already been declared
// console.log(d);

// output ques
// console.log(5+a);
// o/p: a is not defined

// let let = 5;
// console.log(let);
// o/p: syntaxError, let is disallowed as a lexically bound name

// rules for variable declaration
// 1. cannot be a reserved keyword
// 2. should be a meaningful name
// 3. cannot start with a number
// 4. cannot contain space or hyphen
// 5. always use camelCase for variable declaration

// primitive types
// 1. string - sequence of characters -> 'shivani'
// 2. number - 1,2,3, etc.
// 3. boolean - true or false
// 4. undefined - variables which are declared but not defined
// 5. null - variable with empty value

// dynamic typing
// let a = 5;
// a = 'shivani';
// console.log(a);

// reference types
// 1. objects - multiple variables linked together forms an object
let person = {
    firstName: 'shivani',
    age: 23
}
// dot notation to access variables
console.log(person.age);
// bracket notation to access variables
console.log(person['age']);

// 2. arrays - a data structure used to contain a list of items
let arr = ['pooja','shivani',1, 1.5, true];
// accessing array values
console.log(arr[3]);
// adding a value in array
arr[5] = 'hi';
console.log(arr[5]);

// 3. functions - block of code to perform a particular set of instruction for a particular task

let name = 5;
console.log(name);
// this identifier name is deprecated because there is window.name available so we can change the names of identifier or look for the quick fixes available, or try any other method.

// operators
// 1. arithmetic -> +,-,*,/,%, exponential (x**y)
let a = 4, b = 6;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

// pre/post , increment/decrement
// pre increment -> first increase the value and then use it
let x = 10;
console.log(++x); 

// post increment -> first use the value and then increase it
let y = 12;
console.log(y++);
console.log(y++);

// pre decrement -> first decrease the value and then use the value
console.log(--x);

// post decrement -> first use the value then decrease the value
console.log(y--);

// testing: output ques
let p = 5, q = 10;

console.log((++p)*(--q));  //54 ->p: 6, q:9
console.log((p++)*(--q));  //48 -> p: 7, q: 8
console.log((p++)*(q--));  //56 -> p: 8, q: 7
console.log((++p)*(q--));  //63 -> p: 9, q: 6

// 2. assignment -> equals to sign is used for assignment

// 3. comparison -> >, <, >=, <=, ===, !==
console.log(2>3);
console.log(2<3);
console.log(2>=3);
console.log(2<=3);
console.log(3==3);
console.log(3==='3');
console.log(3=='3');
console.log(4!=5);

// 4. bitwise (bitwise AND (&) and bitwise OR (|))
// 1 -> true and 0 -> false

// 5. logical -> AND (&&) -> all conditions must be true. OR (||) -> one of any condition is true, NOT (!) -> negating the condition

// logical operators with non-booleans -> we have truthy and falsy values for this
// falsy values include "undefined, null, 0, false, '', NaN"
// truthy values includes everything except falsy values

// among any truthy and falsy value, always truthy will be chosen in case of OR logical operator
console.log(false || 'shivani')
console.log(false || 1);

// output for AND operator -> (everytime falsy values are chosen over truthy) 
console.log(false && 'shivani'); //false
console.log(undefined && 1); //undefined
console.log(null && '1'); //null
console.log(0 && true); //0

// 6. ternary operator or conditional operator -> Syntax -> condition ? true_result : false_result;
let age = 23;
console.log(age>=18?'yes':'no');


// operator precedence
// remember to add brackets while calculating expression, it will help us in not getting confused


// control statements 
// 1. if-elseif-else
// if(condition){

// }else if(condition){

// }else{

// }

let marks = 98;
if(marks >= 90){
    console.log('a');
}else if(marks >= 80){
    console.log('b');
}else if(marks >= 70){
    console.log('c');
}else{
    console.log('d');
}

// 2. switch
// switch(expression){
//     case _ : code
//     case _ : code
//     case _ : code
//     .
//     .
//     .
//     default: code
// }
let num = 3;
switch(num){
    case 1: console.log('hi');
    break;
    case 2: console.log('hey');
    break;
    case 3: console.log('hello');
    break;
    case 4: console.log('hi there');
    break;
    default: console.log('nothing much, continue to code!')
}


// loops in js
// 1. for loop
// 2. while loop
// 3. do-while loop
// 4. what is an infinite loop?
// 5. for-in loop
// 6. for-of loop
