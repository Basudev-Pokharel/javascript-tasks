let btn = document.getElementById("btn");
let color = document.getElementById("color");
let p = document.getElementById("colorText");
let body = document.querySelector("body");
btn.addEventListener("click", () => {
  p.style.color = color.value;
  body.style.backgroundColor = randomColor();
  body.style.transition = "background .3s linear";
});

const randomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};
