// function retrieve() {
//   const input = document.getElementById("fruitInput").value;
//   let fruitList = document.getElementById("fruitList");
//   let element = document.createElement("li");
//   element.innerText = input;
//   fruitList.appendChild(element);
// }

function addChild() {
  let input = document.querySelector("#fruitInput");
  let fruitList = document.querySelector("#fruitList");
  let newElement = document.createElement("li");
  newElement.textContent = input.value;
  fruitList.appendChild(newElement);
  input.value = "";
}

document.getElementById("addFruitBtn").addEventListener("click", addChild);
// document.getElementById("fruitInput").addEventListener("input", addChild);
