// --------------------- FUNCTIONS -----------------------
// a block of code that fulfills a specific task is called function
// syntax: function nameOfFunction(){ code to execute }
// why we need functions? => reusability

// // FUNCTION DECLARATION
// // function functionName (input parameters (optional)) { body of function; }
// run();
// function run(){
//     console.log('running');
// }
// // function call/invocation


// -------------- HOISTING --------------------
// in javascript, it does not matter from where we are invoking a function. it gives the same result even calling the function after its definition and declaration or before it. 
// this concept is hoisting
// hoisting is process of moving function declaration to the top of the file, it is done by the JS Engine


// ------ FUNCTION ASSIGNMENT ------
let stand = function walk(){
    console.log('walking');
}
stand();