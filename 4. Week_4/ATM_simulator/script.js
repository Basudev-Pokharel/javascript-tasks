// const depositBtn = document.querySelector("#deposit-btn");
// const withdrawBtn = document.querySelector("#withdraw-btn");
// const balance = document.querySelector("#balance");
// const message = document.querySelector("#message");
// const inputDeposit = document.querySelector("#deposit");
// const inputWithdraw = document.querySelector("#withdraw");
// let currentBalance = 0;
// let pin = Number(prompt("Enter your PIN here:"));
// if (pin == 1234) {
const depositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");
const balance = document.getElementById("balance");
const message = document.getElementById("message");
const inputDeposit = document.getElementById("deposit");
const inputWithdraw = document.getElementById("withdraw");
let currentBalance = 0;

depositBtn.addEventListener("click", () => {
  const depositAmount = +inputDeposit.value;
  // currentBalance += depositAmount;
  deposit(depositAmount);
  balance.textContent = currentBalance;
});

withdrawBtn.addEventListener("click", () => {
  const withdrawAmount = +inputWithdraw.value;
  // currentBalance -= withdrawAmount;
  withdraw(withdrawAmount);
  balance.textContent = currentBalance;
});

function checkBalance() {
  return Number(balance.innerText);
}

function deposit(depositAmount) {
  if (typeof depositAmount != "number") {
    message.innerText = "Please enter a number";
  } else if (depositAmount < 0) {
    message.innerText = "Please enter a positive numnber";
  } else {
    currentBalance += depositAmount;
  }
}
function withdraw(withdrawAmount) {
  if (typeof withdrawAmount != "number") {
    message.innerText = "Please enter a number";
  } else if (withdrawAmount < 0) {
    message.innerText = "Please enter a positive numnber";
  } else if (withdrawAmount > currentBalance) {
    message.innerText = "Insufficient funds";
  } else {
    currentBalance -= withdrawAmount;
  }
}
// } else {
// alert("You cannot access your Bank credientals");
// }
