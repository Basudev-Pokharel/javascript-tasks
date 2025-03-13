const depositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");
const balance = document.getElementById("balance");
const message = document.getElementById("message");
const inputDeposit = document.getElementById("deposit");
const inputWithdraw = document.getElementById("withdraw");
let currentBalance = 0;

depositBtn.addEventListener("click", () => {
  const depositAmount = +inputDeposit.value;
  deposit(depositAmount);
  balance.textContent = currentBalance;
});

withdrawBtn.addEventListener("click", () => {
  const withdrawAmount = +inputWithdraw.value;
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
    message.innerHTML = `<span class='insuff'>${String.fromCodePoint(
      9888
    )} Insufficient funds</span>`;
  } else {
    currentBalance -= withdrawAmount;
    message.innerHTML = ``;
  }
}
