const name = "shivani";
// console.log(name);

const str = new String("hellooo-jii");

// accessing characters using string
// console.log(str[0]); // output -> h

// accessing all the methods available along with String class
// console.log(str.__proto__); // retunrs {} representing as it contains all the methods associated with string class

// usning some methods available in string class
// console.log(str.toUpperCase()); // output -> HELLOOO-JII
// console.log(str.charAt(8)); // output -> j
// console.log(str.indexOf("o")); // output -> 4

// making a substring
const newStr = str.substring(0, 4);
// console.log(newStr); // output will be 'hell' , this is because we will be getting string from index 0 to 4, and 5th index will be excluded , so 0-'h', 1-'e', 2-'l' and 3-'l'

// slice method -> we can provide negative values of index in slice
// console.log(str.slice(2, 5)); // similar to substring, output will be 'llo' going from 2 index to 4 and excludes index 5

// we have one more variant of slice, let's say we provided only starting index, and not the ending one, then it will print whole remaining string from start index provided
// console.log(str.slice(3)); // looo-jii output will be printed

// trim method -> this method is used to trim the white space characters and also the line change characters
let spacedStr = "            heelllooo        kaise hain??       ";
// console.log(spacedStr);
// console.log(spacedStr.trim()); // white spaces from start and end of the string is trimmed

// now if we want that only from start the white space should be removed, then we can do that as below
// console.log(spacedStr.trimStart()); // only from start, the whitespaces are removed

// and from end, we can do this
// console.log(spacedStr.trimEnd());

// replace method
const url = "https://shivani.com/recipes%20list";
// console.log(url.replace("%20", "-")); // first parameter represents what to replace and second parameter represents what to use on replace value

//includes method
// console.log(url.includes("shivani")); // check if a particular word or set of characters is available in the string

// console.log(name.concat(" is saying you all ", str)); // output -> 'shivani is saying you all hellooo-jii'

//  NOTE:  STRINGS ARE IMMUTABLE, this means we cannot change characters of string. every time we run a string method, we simply get a new string returned, there's no change made in the original string
name[0] = "heyy"; // this will not make any change, it will be ignored right away
// console.log(name);

// use a for loop to print a string
let fr = "Shivani Raichandani";
// for (let i = 0; i < fr.length; i++) {
//   console.log(fr[i]);
// }

let newStrr = "shivani-is-sde-at-meesho";
console.log(newStrr.split("-")); // whole string gets converted to array and - {these dashes} are removed. output -> ['shivani', 'is' , 'sde', 'at', 'meesho']
