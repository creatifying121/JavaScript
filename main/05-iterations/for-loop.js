// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// // inner loop
// for (let i = 0; i < 10; i++) {
//   console.log(`inner val: ${i}`);

//   for (let j = 0; j < 10; j++) {
//     console.log(`outer value : ${j}, inner val ${i}`);
//   }
// }

// // printing tables
// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// // for loops with arrays
// const arr = ["flash", "batman", "superman"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// BREAK AND CONTINUE
for (let i = 1; i <= 20; i++) {
  if (i === 5) {
    console.log("detected 5");

    break;
  }
  console.log(`value of i is ${i}`);
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// continue
for (let i = 1; i <= 20; i++) {
  if (i === 5) {
    console.log("detected 5");

    continue; // ye hmari ek glti ko maaf krta hai, jaise hi yahan 5 detect hua, uske aage ek baar code skip krdega and then 6 se continue krega
  }
  console.log(`value of i is ${i}`);
}
/*
  output of above example (continue keyword)

  value of i is 1
  value of i is 2
  value of i is 3
  value of i is 4
  detected 5
  value of i is 6
  value of i is 7
  value of i is 8
  value of i is 9
  value of i is 10
  value of i is 11
  value of i is 12
  value of i is 13
  value of i is 14
  value of i is 15
  value of i is 16
  value of i is 17
  value of i is 18
  value of i is 19
  value of i is 20
*/
