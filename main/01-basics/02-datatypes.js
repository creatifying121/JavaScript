"use strict"; // always use new version of js

// to use alert in node, we have a different syntax don't use below while working with nodejs + javascript
// alert("hello");

// this alert('hello') is valid while running js code in browser console or while running js code by binding it with html code, as we know that all the js works in browser using documents, and that's not the case with node

/*
  different data types available

  (Primitive data types)
    - number
    - string
    - bigint
    - boolean
    - null (standalone value) - represents empty value 
    - undefined - represents the value which is declared but not defined yet
    - symbol - mostly used while working with react, when we cannot find out which component is unique, so symbol is used to find out which component is unique.

    (Reference data types)
    - objects
*/

/*
  typeof

  console.log(typeof "shivani")
*/

console.log(typeof null); // => it is sometimes called as error of language {output: object}
console.log(typeof undefined); // => {output: undefined}
