let ordersObj = localStorage.getItem("order");
let orderJSON = JSON.parse(ordersObj);
// console.log(orderJSON);
let boxContainer = document.querySelector(".container-dashboard");

orderJSON.forEach((char) => {
  let div = document.createElement("div");
  div.setAttribute("class", "box");
  div.innerHTML = `<p class="order-here">Order No:${char.Id}</p><p class="details-here"><span>Customer:</span>${char.customer_name}</p><p class="details-here"><span>Pancake-Type:</span>${char.selectedPancake}</p><p class="details-here"><span>Topppings:</span>${char.toppings}</p><p class="details-here"><span>Extras:</span>${char.extras}</p>
    <p class="details-here"><span>Delivery:</span>${char.deliveryMethod}</p>
    <p class="details-here"><span>Price:</span>${char.totalprice}</p>
    <p class="details-here"><span>status:</span class="status">${char.status}</p><div class='order-status'><p id='color-status'></p><p class='status'>Waiting</p><button id='status-button'>Mark as Ready</button></div>`;
  boxContainer.append(div);
});

let statusText = document.querySelectorAll(".status");

let OrderBox = document.querySelectorAll(".box");
// console.log(OrderBox);

OrderBox.forEach((char) => {
  let statusBtn = char.querySelector("#status-button");
  let colorStatus = char.querySelector("#color-status");
  statusBtn.addEventListener("click", (evt) => {
    statusUpdate(evt, colorStatus, char);
  });
});
function statusUpdate(evt, colorStatus, char) {
  if (evt.target.innerText.trim() === "Mark as Ready") {
    evt.target.innerText = "Mark as Delivered";
    colorStatus.style.backgroundColor = "yellow";
  } else if (evt.target.innerText.trim() === "Mark as Delivered") {
    evt.target.innerText = "Remove";
    colorStatus.style.backgroundColor = "Green";
  } else if (evt.target.innerText === "Remove") {
    char.remove();
    let orderId = char
      .querySelector(".order-here")
      .innerText.split(":")[1]
      .trim();
    orderJSON = orderJSON.filter((char) => char.Id != orderId);
    localStorage.setItem("order", JSON.stringify(orderJSON));
  }
}
