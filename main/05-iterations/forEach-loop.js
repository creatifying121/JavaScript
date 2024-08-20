const arr = ["js", "html", "css", "react", "tailwind"];

// arr.forEach((item) => {
//   console.log(item); // {output: all the elements are printed}
// });

// arr.forEach(function (item) {
//   console.log(item); // {output: all the elements are printed}
// });

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// CAN WE PASS A FUNCTION AS PARAM?

// function print(item) {
//   console.log(item);
// }

// arr.forEach(print); // {output: all the elements are printed}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// WHAT PARAMETERS ARE THERE IN FOREACH'S CALLBACK FUNCTION??

arr.forEach((item, index, array) => {
  // console.log(item, index, array);
});

// output
// js 0 [ 'js', 'html', 'css', 'react', 'tailwind' ]
// html 1 [ 'js', 'html', 'css', 'react', 'tailwind' ]
// css 2 [ 'js', 'html', 'css', 'react', 'tailwind' ]
// react 3 [ 'js', 'html', 'css', 'react', 'tailwind' ]
// tailwind 4 [ 'js', 'html', 'css', 'react', 'tailwind' ]

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// FOR EACH LOOP IN THE ARRAY OF OBJECTS
const newArray = [
  {
    name: "shivani",
    age: 24,
    lang: "js",
  },
  {
    name: "purva",
    age: 23,
    lang: "nodejs",
  },
  {
    name: "bhumika",
    age: 22,
    lang: "law",
  },
];

newArray.forEach((item) => {
  console.log(item.age + " " + item.name + " " + item.lang);
});

// output
// 24 shivani js
// 23 purva nodejs
// 22 bhumika law
