let name = document.querySelector("#name");
let email = document.querySelector("#email");
let btn = document.getElementById("btn");
let msg = document.getElementById("msg");
btn.addEventListener("click", (evt) => {
  let Name = name.value;
  let Email = email.value;
  evt.preventDefault();
  if (Name.length == 0 || Email.length == 0) {
    msg.textContent = "Cannot be empty";
    msg.style.color = "red";
  } else {
    msg.textContent = "All good";
    msg.style.color = "green";
  }
});
