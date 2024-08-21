const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // filter

// // basic of filter: it takes a callback function, where you need to provide some condition, and on the basis of that condition, values will be returned. for example, here we are returning the values which are greater than 4, so this is our condition that num>4, so all the values in array which are greater than 4 will be returned
// const newNums = nums.filter((num) => {
//   return num > 4;
// });
// console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // filtering using foreach
// const newNums = [];

// nums.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// });
// console.log(newNums);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const books = [
  {
    title: "one",
    genre: "fiction",
    published: 1993,
    edition: 2013,
  },

  {
    title: "two",
    genre: "self development",
    published: 2006,
    edition: 2012,
  },

  {
    title: "three",
    genre: "history",
    published: 2020,
    edition: 2022,
  },

  {
    title: "four",
    genre: "history",
    published: 2015,
    edition: 2020,
  },

  {
    title: "five",
    genre: "history",
    published: 2002,
    edition: 2007,
  },

  {
    title: "six",
    genre: "history",
    published: 1897,
    edition: 1999,
  },

  {
    title: "seven",
    genre: "rom-com",
    published: 2014,
    edition: 2024,
  },

  {
    title: "eight",
    genre: "non-fiction",
    published: 1996,
    edition: 2003,
  },
];

// filtering books
// // 1. returning a book with genre rom-com
// const userBooks = books.filter((book) => book.genre === "rom-com");

// console.log(userBooks); // [ { title: 'seven', genre: 'rom-com', published: 2014, edition: 2024 } ]

// // 2. return books that are published after 2000
// const booksAfter2000 = books.filter((book) => book.published > 2000);

// console.log(booksAfter2000);

// // output

// // [
// //   {
// //     title: 'two',
// //     genre: 'self development',
// //     published: 2006,
// //     edition: 2012
// //   },
// //   { title: 'three', genre: 'math', published: 2020, edition: 2022 },
// //   { title: 'four', genre: 'science', published: 2015, edition: 2020 },
// //   { title: 'five', genre: 'horror', published: 2002, edition: 2007 },
// //   { title: 'seven', genre: 'rom-com', published: 2014, edition: 2024 }
// // ]

// 3. return books published after 2000 and genre is history
const booksAfter2000History = books.filter((book) => {
  return book.published > 2000 && book.genre === "history";
});

console.log(booksAfter2000History);

// output
// [
//   { title: 'three', genre: 'history', published: 2020, edition: 2022 },
//   { title: 'four', genre: 'history', published: 2015, edition: 2020 },
//   { title: 'five', genre: 'history', published: 2002, edition: 2007 }
// ]
