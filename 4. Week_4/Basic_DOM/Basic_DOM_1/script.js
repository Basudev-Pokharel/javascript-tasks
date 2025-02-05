const p = document.getElementById("content");
const button = document.getElementById("first_button");
// console.log(button.);

let original = p.textContent;
console.log(p.textContent);
function change() {
  //   console.log("Button was clicked");
  p.textContent = "Hello world";
  button.textContent = "I was clicked";
}
function changeBack() {
  p.textContent = original;
}
