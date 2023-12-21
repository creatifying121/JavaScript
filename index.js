// console.log('helloo there');

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
// let person = {
//     firstName: 'shivani',
//     age: 23
// }
// dot notation to access variables
// console.log(person.age);
// bracket notation to access variables
// console.log(person['age']);

// 2. arrays - a data structure used to contain a list of items
// let arr = ['pooja','shivani',1, 1.5, true];
// accessing array values
// console.log(arr[3]);
// adding a value in array
// arr[5] = 'hi';
// console.log(arr[5]);

// 3. functions - block of code to perform a particular set of instruction for a particular task

// let name = 5;
// console.log(name);
// this identifier name is deprecated because there is window.name available so we can change the names of identifier or look for the quick fixes available, or try any other method.

// operators
// 1. arithmetic -> +,-,*,/,%, exponential (x**y)
// let a = 4, b = 6;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);

// pre/post , increment/decrement
// pre increment -> first increase the value and then use it
// let x = 10;
// console.log(++x); 

// post increment -> first use the value and then increase it
// let y = 12;
// console.log(y++);
// console.log(y++);

// pre decrement -> first decrease the value and then use the value
// console.log(--x);

// post decrement -> first use the value then decrease the value
// console.log(y--);

// testing: output ques
// let p = 5, q = 10;

// console.log((++p)*(--q));  //54 ->p: 6, q:9
// console.log((p++)*(--q));  //48 -> p: 7, q: 8
// console.log((p++)*(q--));  //56 -> p: 8, q: 7
// console.log((++p)*(q--));  //63 -> p: 9, q: 6

// 2. assignment -> equals to sign is used for assignment

// 3. comparison -> >, <, >=, <=, ===, !==
// console.log(2>3);
// console.log(2<3);
// console.log(2>=3);
// console.log(2<=3);
// console.log(3==3);
// console.log(3==='3');
// console.log(3=='3');
// console.log(4!=5);

// 4. bitwise (bitwise AND (&) and bitwise OR (|))
// 1 -> true and 0 -> false

// 5. logical -> AND (&&) -> all conditions must be true. OR (||) -> one of any condition is true, NOT (!) -> negating the condition

// logical operators with non-booleans -> we have truthy and falsy values for this
// falsy values include "undefined, null, 0, false, '', NaN"
// truthy values includes everything except falsy values

// among any truthy and falsy value, always truthy will be chosen in case of OR logical operator
// console.log(false || 'shivani')
// console.log(false || 1);

// output for AND operator -> (everytime falsy values are chosen over truthy) 
// console.log(false && 'shivani'); //false
// console.log(undefined && 1); //undefined
// console.log(null && '1'); //null
// console.log(0 && true); //0

// 6. ternary operator or conditional operator -> Syntax -> condition ? true_result : false_result;
// let age = 23;
// console.log(age>=18?'yes':'no');


// operator precedence
// remember to add brackets while calculating expression, it will help us in not getting confused


// control statements 
// 1. if-elseif-else
// if(condition){

// }else if(condition){

// }else{

// }

// let marks = 98;
// if(marks >= 90){
//     console.log('a');
// }else if(marks >= 80){
//     console.log('b');
// }else if(marks >= 70){
//     console.log('c');
// }else{
//     console.log('d');
// }

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
// let num = 3;
// switch(num){
//     case 1: console.log('hi');
//     break;
//     case 2: console.log('hey');
//     break;
//     case 3: console.log('hello');
//     break;
//     case 4: console.log('hi there');
//     break;
//     default: console.log('nothing much, continue to code!')
// }


// loops in js
// 1. for loop
// 2. while loop
// 3. do-while loop
// 4. what is an infinite loop?
// 5. for-in loop
// 6. for-of loop


// ----------------------------------------------------

// objects in js -> variables which are linked with each other in some form, then an entity combining those, that entity is called object. every object has a property and its own behavior.
// console.log('let us start');

// let rect = {
//     length: 1,
//     breadth: 2,

//     draw: function(){
//         console.log('rectangle drawn');
//     }
// };

// now if we want to create multiple rectangle objects, so we cannot go and copy paste the object again and again. rather we can create a function, which can be called multiple times, every time when we need to create an object.
// we have two ways of object creation:
// 1. factory function
// 2. constructor function

// // factory funciton
// function createRect(){
//     return rect = {
//         length: 1,
//         breadth: 2,
    
//         // draw: function(){
//         //     console.log('rectangle drawn');
//         // }

//         // above draw function can also be written as
//         draw(){
//             console.log('rectangle drawn');
//         }
//     };

//     // return rect;
// }

// let rectObj1 = createRect();
// // console.log(rectObj1);
// rectObj1.draw();
// console.log(rectObj1.length);
// console.log(rectObj1.breadth);

// now in order to get the dynamic values instead of already defining the values in the object, we can pass the parameters in the object creation function
// factory funciton
// function createRect(l, b){
//     return rect = {
//         // length: length,
//         // breadth: breadth,

//         // the above variables/properties can also be written as
//         // length,
//         // breadth,

//         // or we can also change the names of the parameters passed
//         length: l,
//         breadth: b,
    
//         // draw: function(){
//         //     console.log('rectangle drawn');
//         // }

//         // above draw function can also be written as
//         draw(){
//             console.log('rectangle drawn');
//         }
//     };

//     // return rect;
// }
// let rectObj1 = createRect(5,4);
// let rectObj2 = createRect(3,4);
// let rectObj3 = createRect(7,8);
// console.log(rectObj1.length);
// console.log(rectObj1.breadth);


// constructor function
// here we follow Pascal Notation - this means, first letter of every word is capital -> NumberOfStudents
// function Rectangle(){
//     // jis bhi current object pr hm kaam kr rhe hain, usko hm 'this' keyword se represent kr skte hain
//     this.length = 1;
//     this.breadth = 2;
//     this.draw = function(){
//         console.log("drawing");
//     }
// }

// // object cration using constructor function
// let rectObj = new Rectangle();
// rectObj.draw();

// this constructor function can also take parameters


// -----------------------------------

// dynamic nature of objects
// function Rectangle(){
//     // jis bhi current object pr hm kaam kr rhe hain, usko hm 'this' keyword se represent kr skte hain
//     this.length = 1;
//     this.breadth = 2;
//     this.draw = function(){
//         console.log("drawing");
//     }
// }

// let rectObj = new Rectangle();
// rectObj.color = 'red';
// delete rectObj.color;


// constructor property -> every object in JS has a property called constructor, which represents how the obect is created.
// we can check it out on console. 

// internal working of constructor property
// function Rectangle(){
//     // jis bhi current object pr hm kaam kr rhe hain, usko hm 'this' keyword se represent kr skte hain
//     this.length = 1;
//     this.breadth = 2;
//     this.draw = function(){
//         console.log("drawing");
//     }
// }

// // for rectObj (the object we have created) the constructor is Rectangle(), but what for Rectangle? so when we try to see its constructor, f Function() is returned to us in the console, this is implemented internally as below:
// let rectObj = new Rectangle();

// let Rect = new Function(
//     'length', 
//     'breadth', 
//     `this.length = length;
//     this.breadth = breadth;
//     this.draw = function(){
//         console.log("drawing");
//     }
// `);

// let obj = new Rect(4,3);
// console.log(Rect.prototype);

// functions are objects -> when we tried accessing the properties of function Rect using dot operator, then we saw that there are other different properties (name, length, etc.) and methods (draw, call, bind, apply, etc.) were there. so any entity which has properties and behavior are called as the objects, hence, functions are objects



// ---------------------------------------------
// types in js -> primitive or value types (number, string, boolean, undefined, null) and reference or objects (functions, objects, arrays)
// let a=10;
// let b=a;
// a++;
// console.log(a);
// console.log(b);

// let a = {
//     value: 10
// }
// let b = a;
// a.value++;
// console.log(a.value);
// console.log(b.value);

// NOTE: Primitives are copied by their value. References are copied by their address/reference.

// jab bhi primitive pass hoga, to copy banegi variable ki
// let a = 10; 
// function inc (a){  //pass by value
//     a++;
//     console.log(a);
// }
// inc(a);
// console.log(a);

// now for objects/reference type
// let b = { value: 13};
// function incre(b){
//     b.value++;
//     console.log(b.value);
// }
// incre(b);
// console.log(b.value);


// -----------------------------------
// for-in loop
// let rect = {
//     length: 2,
//     breadth: 4,
// };

// for(let key in rect){
//     // keys are reflected through key variable
//     // values are reflected through rect[key]
//     console.log(key, rect[key]);  //bracket notation to access the value of the key
// }


// for-of loop -> can only be applied to iterables (arrays, maps, etc.)
// let rect = {
//     length: 2,
//     breadth: 4,
// };

// this will give an error, that "rect is not iterable" this means we cannot iterate over objects directly
// for(let key of rect){
//     console.log(key);  
// }

// to deal with this error, we can create an oject array, to make it iterable.
// for(let key of Object.keys(rect)){
//     console.log(key);
// }

// for(let key of Object.entries(rect)){
//     console.log(key);
// }


// to find out whether a property exists or not in the object, we can do the following
// let rect = {
//     length : 2,
//     breadth : 4
// }

// if('color' in rect){
//     console.log('present');
// }else{
//     console.log('absent');
// }



// ------------------------------------------

// object cloning -> we can clone objects using following three methods
// 1. iteration
// 2. assign
// 3. spread

// iteration cloning
// let src = {
//     a: 1,
//     b: 3,
//     c: 5,
//     hi(){
//         console.log('hello');
//     }
// };
// let dest = {};

// for(let key in src){
//     dest[key] = src[key];
// }

// ---- example 2 -----
// let src = {
//     a: 1,
//     b: 3,
//     c: 5,
//     hi(){
//         console.log('hello');
//     }
// };
// let dest = {};

// for(let key in src){
//     dest[key] = src[key];
// }
// console.log(dest);
// src.a++;
// console.log(src);
// console.log(dest);


// assign cloning 
// let src = {
//     a: 1,
//     b: 3,
//     c: 5,
//     hi(){
//         console.log('hello');
//     }
// };
// let dest = Object.assign({}, src);

// -----example 2 ------
// let src = {
//     a: 1,
//     b: 3,
//     c: 5,
//     hi(){
//         console.log('hello');
//     }
// };
// let src2 = {
//     val : 8
// }
// let dest = Object.assign({}, src, src2);
// console.log(dest);


// spread operator
// let src = {
//     a: 1,
//     b: 3,
//     c: 5,
//     hi(){
//         console.log('hello');
//     }
// };
// let dest = {...src};

// ----- example 2 ------
// let src = {
//     a: 1,
//     b: 3,
//     c: 5,
//     hi(){
//         console.log('hello');
//     }
// };

// let src2 = { val : 15 }
// // in below way we can copy the content of objects in the dest object
// let dest = {...src, ...src2};
// console.log(dest);

// to copy whole object in the dest object we can do the following
// let dest1 = {...src, src2};
// console.log(dest1)

// let dest2 = {src, src2};
// console.log(dest2);


// -------------------------------------

// garbage collection -> it is a tool which helps freeing up the memory space or deallocate the memory of the variables which are no logner in use. it runs in the background, we don't need to use it manually.
