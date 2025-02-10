let price = 0;
let type = document.getElementById("type");
let topping = document.querySelectorAll(".topping");
let extra = document.querySelectorAll(".extra");
let totalPrice = document.getElementById("totalPriceDisplay");
let imagetotalPrice = document.getElementById("totalPrice");
let msg = document.querySelector("#msg");

const selectResult = (evt) => {
  price += Number(evt.target.value);
  console.log(price);
};
const toppingResult = (evt) => {
  price += Number(evt.target.value);
  console.log(price);
};
const extraResult = (evt) => {
  price += Number(evt.target.value);
  totalPrice.textContent = `${price}€`;
  imagetotalPrice.textContent = `${price}€`;
};
type.addEventListener("change", selectResult);
for (i of topping) {
  i.addEventListener("click", toppingResult);
}
for (i of extra) {
  i.addEventListener("click", extraResult);
}
