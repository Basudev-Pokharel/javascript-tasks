let userInput = document.querySelector("input");
let button = document.querySelector("button");
let msg = document.getElementById("msg");
let img = document.querySelector("img");
msg.innerText = "";

const magic8Ball = (randomNum) => {
  switch (randomNum) {
    case 1:
      return "Yes, absolutely! Go for it!";
    case 2:
      return "Hmm, ask again after a cup of coffee!";
    case 3:
      return "Nope, not in a million years!";
    case 4:
      return "Maybe... if pigs start flying.";
    case 5:
      return "Yes, but only on Tuesdays.";
    case 6:
      return "Don't count on it, buddy!";
    case 7:
      return "Sure, why not? Live a little!";
    case 8:
      return "The 8-ball says... try again later!";
    default:
      return "Invalid input, Enter between 1 and 8!";
  }
};
let clickCount = 1;

button.addEventListener("click", () => {
  if (userInput.value === "") {
    alert("Cannot proceed Empty values");
  } else {
    let randomNum = Math.floor(Math.random() * (8 - 1 + 1) + 1);
    let answer = magic8Ball(randomNum);
    img.style.transform = "rotate(1.9Turn)";
    msg.innerText = answer;
  }
});
