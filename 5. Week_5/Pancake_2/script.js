const pancakeType = document.querySelector("#type");
const toppings = document.querySelectorAll(".topping");
const extras = document.querySelectorAll(".extra");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
const totalPriceBanner = document.querySelector("#totalPrice");
const pancakeForm = document.querySelector("#pancakeForm");
const btn = document.querySelector("#seeOrder");
const summaryText = document.getElementById("summaryText");

// for showing
let fromSelect;
let toppingSelect = [];

const changeHandler = (event) => {
  let totalPrice;
  const basePrice = parseFloat(
    document.getElementById("type").selectedOptions[0].dataset.price
  );
  fromSelect = document.getElementById("type").selectedOptions[0].innerText;

  const toppingsTotal = [
    ...document.querySelectorAll(".topping:checked"),
  ].reduce((sum, extra) => {
    return sum + parseFloat(extra.dataset.price);
  }, 0);
  const toppingSelect = [
    ...document.querySelectorAll(".topping:checked"),
  ].filter((extra) => {
    return extra.innerText;
  });

  console.log(toppingSelect);

  // console.log("Topping total: ", toppingsTotal);

  const extrasTotal = [...document.querySelectorAll(".extra:checked")].reduce(
    (sum, char) => sum + Number(char.dataset.price),
    0
  );
  // console.log(extrasTotal);

  const radio = Number(
    document.querySelectorAll(".delivery:checked")[0].dataset.price
  );
  totalPrice = basePrice + toppingsTotal + extrasTotal + radio;
  totalPriceDisplay.textContent = `${totalPrice}€`;
  totalPriceBanner.textContent = `${totalPrice}€`;
};
pancakeForm.addEventListener("change", changeHandler);

const summary = () => {
  summaryText.textContent = fromSelect;
};

btn.addEventListener("click", summary);
