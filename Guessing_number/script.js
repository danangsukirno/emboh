let secretNumber = Math.floor(Math.random() * 100+1);
let tries = 0;



function guess() {

 let input = document.getElementById("input");

 let textInfo1 = document.getElementById(
  "textInfo1");

 let textInfo2 = document.getElementById(
  "textInfo2");

 tries++;

 if (input.value !== "") {

  if (Number(input.value) === secretNumber) {

   textInfo1.innerHTML =
    "Hooray... Congratulation... " + input.value +
    " is the secret number. You managed to answer with " +
    tries + " tries.";

   textInfo2.innerHTML =
    "Reload this page to play again ^_^";

  } else {

   if (input.value < secretNumber) {

    textInfo1.innerHTML =
     "You guess the number: " + input.value;

    textInfo2.innerHTML = "It's too low";

   } else {

    textInfo1.innerHTML =
     "You guess the number: " + input.value;

    textInfo2.innerHTML = "It's too high";

   }

  }

 }

}
