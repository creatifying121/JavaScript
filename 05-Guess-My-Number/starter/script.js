"use strict";

// // below , we are just selecting the html element having class name as message, so whole element will be logged on to the console.
// console.log(document.querySelector(".message"));

// // what if we want to select only the text inside element
// console.log(document.querySelector(".message").textContent);

// // now we can also set content of the element, basically manipulating the content
// document.querySelector(".message").textContent = "🎉 Correct Number";

// console.log(document.querySelector(".message").textContent);

// // let's do the same to the class number and score elements
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// // doing similar with input field. but since it is an input field so we will use "value" here
// document.querySelector(".guess").value = 12;
// console.log(document.querySelector(".guess").value);

// defining the secret number, we need to define it outside, because it should be defined only once, not more than that
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(".number").textContent = secretNumber;

// everytime a wrong guess is made, we need to decrease the score
let score = 20;

// highscore logic
let highscore = 0;

// now let's make our code do something for us and to achieve this we need event listeners
// event is something that happens on a page, for example, mouse click, or a key press or many other events
// we want to add an event listener on the check button, because we want that something should happen when we check the number we entered
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  console.log(guess, typeof guess); //we usually get input in form of strings, so we need to convert this to a number first

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number";

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "📈 Too High!" : "📉 Too Low!";

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "👎🏻 You lost!";
      document.querySelector(".score").textContent = 0;
    }
  } else {
    document.querySelector(".message").textContent = "👎🏻 You lost!";
    document.querySelector(".score").textContent = 0;
  }

  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📈 Too High!";

  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "👎🏻 You lost!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📉 Too Low!";

  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   }
  // }
}); // this function here is the event handler. this function will not be called immediately as the script is loaded, but it will only be called when the event (clicking on the check button) happens

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing...";

  document.querySelector(".score").textContent = score;

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";

  document.querySelector(".number").style.width = "15rem";

  document.querySelector(".guess").textContent = "";
});
