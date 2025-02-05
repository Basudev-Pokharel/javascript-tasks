//selectors
const textExample = document.querySelector("p");
const textExample2 = document.querySelector(".myClass");
const textExample3 = document.querySelector("#myId");

const textExample4 = document.querySelectorAll(".myClass");
const textExample5 = document.getElementsByClassName("myClass");

console.log(textExample.textContent);
console.log(textExample2.textContent);
console.log(textExample3.textContent);
console.log(textExample4);
console.log(textExample4[0].innerText);
console.log(textExample5);

// const circle = document.getElementById("alert");
// console.log(circle.textContent);

// const paragraph = document.getElementsByTagName("p")[0];
// console.log(paragraph.innerText);
// // console.log(circle.innerText);
// function myFunction() {
//   confirm("This should be run here");
// }

// const clickCircle = () => {
//   //   console.log("Clicked circle is here");
//   alert("This was the circle that was clicked");
// };

//4 February practice html

// const button = document.getElementById("insertBtn");
// const input = document.getElementById("input");
// const text = document.getElementById("result");
// const handleClick = () => {
//   text.textContent = `User Entered:   ${input.value}`;
// };
// button.addEventListener("click", handleClick);

//second way

// const handleClick2 = () => {
//   document.getElementById("result").textContent = `User Entered: ${
//     document.getElementById("input").value
//   }`;
// };
// document.getElementById("insertBtn").addEventListener("click", handleClick2);
