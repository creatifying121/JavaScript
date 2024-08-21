let i = 0; // initialization
while (i <= 10) {
  // condition (i<=10)
  console.log(`i: ${i}`);
  i = i + 2; // increment
}

// +++++++++++++++++++++++++++++

// while loop with array
const arr = ["flash", "superman", "batman"];
let j = 0;
while (j < arr.length) {
  console.log(arr[j]);
  j++;
}

// +++++++++++++++++++++++++++++++

// do while
let score = 1;
do {
  console.log(score);
  score++;
} while (score <= 10);

// do while special case
let sss = 11;
do {
  console.log(sss);
  sss++;
} while (sss <= 10);

// above loop will print 11, as it executes first and then checks the condition. thus, 11 is printed after that sss is incremented and finally the condition is checked
