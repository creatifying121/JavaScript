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
// // first way (bad practice)
// if(nums.indexOf(6) != -1){
//     console.log('yes, it is here');
// }

// // second way (good practice)
// console.log(nums.includes(6));

// // advanced version
// // syntax: array_name.indexOf(number_you_want_to_search, index_from_which_you_want_to_start_searching);
// console.log(numbers.indexOf(4, 3));


// // arrays of references
// let courses = [
//     {
//         num: 1, naam: 'shivani'
//     },
//     {
//         num: 2, naam: 'purva'
//     }
// ]

// console.log(courses);

// // // searching elements
// // console.log(courses.indexOf({num: 1, naam: 'shivani'}));
// // // this gives output as -1, because the object we are passing in the indexOf method is stored at a different place and one mentioned in the array is on another location. hence, indexof cannot find the object of the array. so what to do in that case?
// // // also, includes function will not work in this case. because includes and indexOf methods are used for primitives
// // // so what is the way to access object from array of objects? we can use CALLBACK FUNCTIONS HERE!

// // how to write CALLBACK FUNCTION 
// // the callback function will be written inside a parent function and that parent function is "find()"
// // syntax : arrayName.find(predicate/callbackFunction(parameter){});
// // this find function will return the object 
// let course = courses.find(function(course){
//     return course.naam == 'purvaa';
// });
// console.log(course);

// // writing code from line 185 to 187 using arrow function to increase readability
// // let course1 = courses.find((course)=>{
// //     return course.naam == 'shivani';
// // });

// // code from line 191 to 193 can also be written as
// let course1 = courses.find(course=>course.naam =='shivani');
// console.log(course1);


// // removing element => end, beginning, middle removal
// // to remove from end => pop()
// // to remove from start => shift()
// // to remove from middle => splice()
// let arr = [1,2,3,4,5,6,7];

// arr.pop();
// console.log(arr);

// arr.shift();
// console.log(arr);

// // syntax : arrayName.splice(index_from_which_deletion_will_start, number_of_elements_to_delete)
// arr.splice(2, 2);
// console.log(arr);


// // emptying an array
// let arr = [1,2,3,4,5,6];
// let arr1 = arr;

// // way 1 (bad practice) : elements will be garbage collected
// // arr = [];
// // in the above way the problem is, if we assign the actual array to another variable, then it will not be deleted in memory. for example: let arr1 = arr; so when we print arr, it will be empty but when we print arr1 then it will show us the values from arr assigned to it. and in this way the values aren't actually deleted.

// // way 2 (good practice)
// // arr.length = 0; => generally this is used

// // we can do it in one more way
// arr.splice(0, arr.length);

// console.log(arr);
// console.log(arr1);


// // -------- combining and slicing arrays ----------------
// let first = [1,2,3];
// let second = [4,5,6];

// // we can combine arrays using concat method
// let combined = first.concat(second);
// console.log(combined);

// // slicing array => this can be done using slice method
// // syntax: arrayName.slice(starting index, (ending index till you want to slice + 1)) => 1 is added to the ending index to make it inclusive 
// let sliced = combined.slice(2,4);
// console.log(sliced);

// // what if we wrote only starting index in the parameter of slice method? => then from starting index till whole lenght of the array the items will be sliced and hence will be printed on console
// let sliced1 = combined.slice(2);
// console.log(sliced1);

// // what if we didn't pass any parameter to the slice method => then a whole new copy of the array will be created
// let sliced2 = combined.slice();
// console.log(sliced2);

// // ------------- combining array of objects -----------
// let first = [
//     {naam: 'shivani', num: 111},
//     {naam: 'pooja', num: 112}
// ];
// let second = [
//     {naam: 'nayan', num: 555},
//     {naam: 'purva', num: 444}
// ];

// let combined = first.concat(second);
// console.log(combined);

// let sliced = combined.slice(1,3);
// console.log(sliced);

// // ------------------ spread operator -----------------
// let first = [1,2,3];
// let second = [4,5,6];

// let combined = [...first, ...second];
// console.log(combined);

// // creating copy using spread operator
// let another = [...combined];
// console.log(another);


// // ------------- iterating an array ----------------------
// // for-of loop is best for iterables
// let arr = [10,20,30,40,50];

// for(let value of arr){
//     console.log(value);
// }

// // using for-each loop
// arr.forEach(function(number){
//     console.log(number);
// });

// // another way of writing for-each loop using arrow function in the callback
// arr.forEach(number => console.log(number));



// // ------------ joining arrays -----------------
// let arr = [10,20,30,40,50];
// let joined = arr.join(',');
// console.log(joined);

// // --------------- splitting a string---------------
// let msg = 'this is my first msg';
// let parts = msg.split(' ');
// console.log(parts);
// let joinss = parts.join('-');
// console.log(joinss);


// // ---------------- sorting arrays -------------------
// let arr = [5,10,4,40];
// arr.sort();
// // this is not giving the expected output because internally these items are treated as strings, and are sorted accrodingly. so output here will be [10,4,40,5]
// console.log(arr);

// // to overcome this problem, we write a callback function in such cases, so that values can be compared and sorted as per comparison
// arr.sort(function(a,b){
//     return a-b; // sorting in ascending order
// })
// console.log(arr);

// // for sorting in descending order
// arr.sort(function(a,b){
//     return b-a; 
// })
// console.log(arr);

// // ------------ sorting array of objects ---------------
// let items = [
//     { name: "Edward", value: 21 },
//     { name: "Sharpe", value: 37 },
//     { name: "And", value: 45 },
//     { name: "The", value: -12 },
//     { name: "Magnetic", value: 13 },
//     { name: "Zeros", value: 37 },
//   ];
  
//   // sort by value
//   items.sort((a, b) => a.value - b.value);
//   console.log(items);
  
//   // sort by name
//   items.sort((a, b) => {
//     const nameA = a.name.toUpperCase(); // ignore upper and lowercase
//     const nameB = b.name.toUpperCase(); // ignore upper and lowercase
//     if (nameA < nameB) {
//       return -1;
//     }
//     if (nameA > nameB) {
//       return 1;
//     }
  
//     // names must be equal
//     return 0;
//   });
//   console.log(items);


// // -------------- filtering arrays -------------------
// // syntax : arrayName.filter(callbackFunc());
// let numbers = [1,2,-1,-4];
// // filter out only positive values
// let filtered = numbers.filter(value => value>=0);
// console.log(filtered);


// // ----------------- mapping arrays ---------------------
// // used to map each element of array with something else, for example, in ASCII system, 'a' is mapped with 97 and so on, so here we use map() method to achieve something of this type
// let numbers = [7,8,9,10];
// let mapped = numbers.map(function(value){
//     return 'student_num' + value;
// });
// console.log(mapped);


// // -------------- maping with objects --------------------
// let numbers = [1,2,-1,-4];
// // filter out only positive values
// let filtered = numbers.filter(value => value>=0);
// console.log(filtered); 

// // let items = filtered.map(function(num){
// //     let obj = {value: num};
// //     return obj;
// // });

// // code from line number 387 to 390 can also be written as follows
// let items = filtered.map((num) => {
//     return {value: num};
// });

// console.log(items);

// // here comes an important concept, called as Chaining, it can be written as

// let itemss = numbers.filter(value => value>=0)
//                     .map((num) => {return {value: num};});

// console.log(itemss);

