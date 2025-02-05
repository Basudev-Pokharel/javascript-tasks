let input = document.querySelector("#inputText");
let div = document.querySelector("#displayText");
function showLiveText() {
  div.textContent = input.value;
}

input.addEventListener("input", showLiveText);
