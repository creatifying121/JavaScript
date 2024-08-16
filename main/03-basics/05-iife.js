// Immediately Invoked Function Expressions (IIFE) => used to invoke a function immediately for any reason stated below-

// The purpose of an IIFE is to:

// 1. Create a new scope: IIFEs create a new scope, which helps to avoid polluting the global namespace.
// 2. Execute code immediately: IIFEs execute the code immediately, without the need for a separate function call.
// 3. Preserve privacy: IIFEs can be used to preserve privacy by encapsulating variables and functions within the scope of the IIFE.

// Common use cases for IIFEs include:

// 1. Initializing variables or functions that should only be executed once.
// 2. Creating modules or namespaces.
// 3. Avoiding global variable pollution.
// 4. Implementing the Singleton pattern.
// 5. Creating a closure.

// +++++++++++++++++++++++++++++++++++++

// POLLUTING GLOBAL NAMESPACE MEANING

// In JavaScript, the global namespace refers to the top-level scope that contains all global variables, functions, and objects. When you declare a variable or function without using a scope (like let, const, or a function), it becomes a global variable or function.

// Polluting the global namespace means adding unnecessary variables, functions, or objects to the global scope, making it cluttered and potentially leading to:

// 1. Name collisions: When two or more scripts use the same global variable or function name, causing conflicts and unexpected behavior.
// 2. Unintended side effects: Global variables can be modified by any part of the code, leading to hard-to-debug issues.
// 3. Security risks: Exposing sensitive data or functions to the global scope can make them vulnerable to attacks.

// For example:

// // Polluting the global namespace
// var username = 'John Doe';
// function greet() {
//   console.log(`Hello, ${username}!`);
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Example of iife
(function hello() {
  // this is a named iife
  console.log("DB Connected"); // {output: DB Connected}
})(); // if here we forgot to use semi colon then the engine will never know , when to stop executing this function, so it is necessary so that further if you use any extra iife, so that must get executed

(() => {
  console.log("hello");
})(); // hello

// passing parameters in iife
((name) => {
  console.log(`hello ${name}`);
})("shivani"); // hello shivani
