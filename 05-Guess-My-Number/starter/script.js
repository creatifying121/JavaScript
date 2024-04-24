"use strict";

// below , we are just selecting the html element having class name as message, so whole element will be logged on to the console.
console.log(document.querySelector(".message"));

// what if we want to select only the text inside element
console.log(document.querySelector(".message").textContent);

// now we can also set content of the element, basically manipulating the content
document.querySelector(".message").textContent = "🎉 Correct Number";

console.log(document.querySelector(".message").textContent);

// let's do the same to the class number and score elements
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

// doing similar with input field. but since it is an input field so we will use "value" here
document.querySelector(".guess").value = 12;
console.log(document.querySelector(".guess").value);

// now let's make our code do something for us and to achieve this we need event listeners
// event is something that happens on a page, for example, mouse click, or a key press or many other events
