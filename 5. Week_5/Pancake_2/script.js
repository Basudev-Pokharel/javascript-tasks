const pancakeType = document.querySelector("#type");
const toppings = document.querySelectorAll(".topping");
const extras = document.querySelectorAll(".extra");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
const totalPriceBanner = document.querySelector("#totalPrice");
const pancakeForm = document.querySelector("#pancakeForm");
const btn = document.querySelector("#seeOrder");
const summaryText = document.getElementById("summaryText");
let customerNameInput = document.getElementById("customerName");
let comfirmOrder = document.getElementById("comfirmOrder");

// for showing
let pancakeTypeSelectedName;
let toppingSelect = [];
let extraSelect = [];
let customerName;
let deliveryChoose;

//Total price
let totalPrice;

//for Storing in the final phase storign in array
let finalArray = [];

//Acess the localstorage here
let storedOrders = JSON.parse(localStorage.getItem("order"));
finalArray = storedOrders;
console.log(storedOrders);

const changeHandler = (event) => {
  customerName = customerNameInput.value;
  // console.log(customerName);
  // customerName = customerName.value;
  const basePrice = parseFloat(
    document.getElementById("type").selectedOptions[0].dataset.price
  );
  pancakeTypeSelectedName = document
    .getElementById("type")
    .selectedOptions[0].innerText.split(" ")[0];

  const toppingsTotal = [
    ...document.querySelectorAll(".topping:checked"),
  ].reduce((sum, extra) => {
    return sum + parseFloat(extra.dataset.price);
  }, 0);

  toppingSelect = Array.from(document.querySelectorAll(".topping:checked")).map(
    (char) => char.parentElement.textContent.trim()
  );

  const extrasTotal = [...document.querySelectorAll(".extra:checked")].reduce(
    (sum, char) => sum + Number(char.dataset.price),
    0
  );
  extraSelect = Array.from(document.querySelectorAll(".extra:checked")).map(
    (char) => {
      let string = char.parentElement.textContent.trim();
      let length = string.length - 1;
      return string.replace(/\s+/g, " ").split(" ").splice(0, 2).join(" ");
    }
  );

  const radio = Number(
    document.querySelectorAll(".delivery:checked")[0].dataset.price
  );
  deliveryChoose =
    document.querySelectorAll(".delivery:checked")[0].parentElement.innerText;

  totalPrice = basePrice + toppingsTotal + extrasTotal + radio;
  totalPriceDisplay.textContent = `${totalPrice}€`;
  totalPriceBanner.textContent = `${totalPrice}€`;
};
pancakeForm.addEventListener("change", changeHandler);

const summary = () => {
  summaryText.innerHTML = `Name: ${customerName}<br>Pancake Type: ${pancakeTypeSelectedName}<br>Toppings: ${toppingSelect}<br> Extras: ${extraSelect}`;
};

function confirmedOrder() {
  finalArray.push({
    Id: Date.now(),
    customer_name: customerName,
    selectedPancake: pancakeTypeSelectedName,
    toppings: toppingSelect,
    extras: extraSelect,
    deliveryMethod: deliveryChoose,
    totalprice: totalPrice,
    status: "waiting",
  });
  orderJson = JSON.stringify(finalArray);
  console.log(finalArray);
  localStorage.setItem("order", orderJson);
}

btn.addEventListener("click", summary);
comfirmOrder.addEventListener("click", confirmedOrder);

//show that modal
let dashopen = document.getElementById("order-dash-click");
dashopen.addEventListener("click", showModal);
let modal = document.querySelector(".show-Dashboard");
function showModal() {
  modal.style.display = "flex";
}

//hide model on click
let hideBtn = document.getElementById("hidedashboard");
function hideLayer() {
  modal.style.display = "none";
}
hideBtn.addEventListener("click", hideLayer);
