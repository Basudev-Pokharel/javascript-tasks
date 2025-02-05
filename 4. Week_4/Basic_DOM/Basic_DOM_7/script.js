let btn = document.querySelector("#btn");
let timeDisplay = document.querySelector("#timeDisplay");
let count = 0;
let timesClicked = () => {
  count++;
  timeDisplay.textContent = count;
};
btn.addEventListener("click", timesClicked);
