// console.log('hiii');

// // ------------ math object ----------------
// // printing random number
// console.log(Math.random());

// // value of pi
// console.log(Math.PI);

// // rounded value
// console.log(Math.round(2.5));

// // maximum number
// console.log(Math.max(3,4,8,9));

// // minimum number
// console.log(Math.min(1,5,1,3,7));

// // sqrt
// console.log(Math.sqrt(4));

// // absolute value
// console.log(Math.abs(-5));



// ----------------------- string object -----------------
// we have learned about the string as primitive before. example: let name = 'shivani' is the primitive string

// JavaScript has also string object, that can be written as below
// we have created this string object using string constructor function
// let fistname = new String('shivani');
// console.log(typeof(fistname));

// // conversion of primitive string to string object
// let lastname = 'RAICHANDANI';
// console.log(lastname.length);
// console.log(lastname[0]);
// console.log(lastname.includes('RAI'));
// console.log(lastname.startsWith('Raich'));

// let myName = '  Shivani   ';

// // myName.length
// // 11
// // myName.includes('R')
// // true
// // myName.startsWith('Shivani')
// // true
// // myName.startsWith('ShivaniR');
// // false
// // myName.endsWith('ai');
// // true
// // myName.toUpperCase()
// // 'SHIVANI RAI'
// // myName.trim()
// // 'Shivani Rai'
// // myName.trimLeft()
// // 'Shivani Rai'

// let msg = 'this is my first msg';
// // splitting msg string on the basis of spaces
// let words = msg.split(' ');
// console.log(words);


// --------------  REMEMBER --------------------
// object literal is represented by curly braces - {}
// string literal is represented by single quotes - ''
// template literal is represented by backtick - ``

// ----------------- template literal -------------------
// escape sequences - these are special characters used to print those characters on console, which are normally not possible to print, like line change, apostrophe, quotation marks, etc. 
// let text = 'Hey, I\'m writing a text here.\n you are okay with that no!';
// console.log(text);

// instead of using escape sequences, we have template literals to print anything on console as we have written it in the editor
// let myName = 'shivani';
// // backtick sign represents the template literal. and to get the dynamic values, we can use ${}. 
// let mail = 
// `Hello ${myName}, hope you're well.

// Great to hear from you.

// Regards
// Pooja
// `;

// console.log(mail);


// -------------------- DATE AND TIME ------------------
// // for printing current date
// let date = new Date();
// console.log(date);

// // another format
// let date2 = new Date('June 20 1998 07:15');
// console.log(date2);

// // another format
// let date3 = new Date(1998, 5, 20, 7);
// console.log(date3);

// // getter setter methods
// date3.setFullYear(2000);
// console.log(date3);


// getter-> when we use a function to fetch some value then that function is called getter function
// setter-> when we use a function to set some value, then it is called as setter function



// ----------------- ARRAYS ---------------------
// it is a object / reference type. it is a collection of items (it can be of any type, iteger, string, object, boolean etc.)
// Agenda: 
// 1. adding new Elements 
// 2. finding elements 
// 3. removing elements 
// 4. splitting elements 
// 5. combining elements 

// // array creation
// let nums = [1,3,6,7,8,9];
// console.log(nums);

// // accessing array elements - we can do this using indices of the values
// console.log(nums[4]);

// // insertion of elements in an array
// // insertion at the end
// nums.push(10);
// console.log(nums);

// // insertion at the start
// nums.unshift(5);
// console.log(nums);

// // insertion in middle -> syntax => arrayName.splice(on which index you want to insert, number of existing elements you want to delete (deleteCount), elements you want to insert);
// nums.splice(3, 0, 15);
// console.log(nums);

// // searching in an array
// console.log(nums.indexOf(15));
// // if number does not exist, then it will return -1
// console.log(nums.indexOf(19));

// // we want to check if a number exists in an array
// // first way (not a good practice)
// if(nums.indexOf(6) != -1){
//     console.log('yes, it is here');
// }

// // second way (good practice)
// console.log(nums.includes(6));


// arrays of references
let courses = [
    {
        num: 1, naam: 'shivani'
    },
    {
        num: 2, naam: 'purva'
    }
]

console.log(courses);

// searching elements
console.log(courses.indexOf({num: 1, naam: 'shivani'}));
// this gives output as -1, because the object we are passing in the indexOf method is stored at a different place and one mentioned in the array is on another location. hence, indexof cannot find the object of the array. so what to do in that case?
// also, includes function will not work in this case. because includes and indexOf methods are used for primitives
// so what is the way to access object from array of objects? we can use CALLBACK FUNCTIONS HERE!

// how to write CALLBACK FUNCTION 