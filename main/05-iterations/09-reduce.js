const nums = [1, 2, 3];

const total = nums.reduce((acc, curr) => {
  console.log(`acc: ${acc}, current val: ${curr}`);

  return acc + curr;
}, 0);

console.log(total);

// ++++++++++++++++++++++

//shopping cart example
const shoppingCart = [
  {
    itemName: "js",
    price: 2999,
  },
  {
    itemName: "react",
    price: 9999,
  },
  {
    itemName: "data science",
    price: 12999,
  },
  {
    itemName: "python",
    price: 5999,
  },
];

const price = shoppingCart.reduce((acc, curr) => {
  return acc + curr.price;
}, 0);

console.log(price); // 31996
