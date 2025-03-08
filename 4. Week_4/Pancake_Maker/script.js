let price = 0;
let previousValue = 0;
let type = document.getElementById("type");
let topping = document.querySelectorAll(".topping");
let extra = document.querySelectorAll(".extra");
let totalPrice = document.getElementById("totalPriceDisplay");
let imagetotalPrice = document.getElementById("totalPrice");
let msg = document.querySelector("#msg");

totalPrice.textContent = `${price}€`;
imagetotalPrice.textContent = `${price}€`;

const selectResult = (evt) => {
  price -= previousValue;
  previousValue = Number(evt.target.value);
  price += previousValue;
  totalPrice.textContent = `${price}€`;
  imagetotalPrice.textContent = `${price}€`;
};
const toppingResult = (evt) => {
  if (evt.target.checked) {
    price += Number(evt.target.value);
    totalPrice.textContent = `${price}€`;
    imagetotalPrice.textContent = `${price}€`;
  } else {
    price -= Number(evt.target.value);
    totalPrice.textContent = `${price}€`;
    imagetotalPrice.textContent = `${price}€`;
  }
};
const extraResult = (evt) => {
  if (evt.target.checked) {
    price += Number(evt.target.value);
    totalPrice.textContent = `${price}€`;
    imagetotalPrice.textContent = `${price}€`;
  } else {
    price -= Number(evt.target.value);
    totalPrice.textContent = `${price}€`;
    imagetotalPrice.textContent = `${price}€`;
  }
};
type.addEventListener("input", selectResult);
for (i of topping) {
  i.addEventListener("change", toppingResult);
}
for (i of extra) {
  i.addEventListener("change", extraResult);
}
