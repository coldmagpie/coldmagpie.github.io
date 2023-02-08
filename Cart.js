const cartItems = document.getElementById("cart-items");

function loadCart() {
  cart = JSON.parse(localStorage.getItem("cart"));
}
if (localStorage.getItem("cart") != null) {
  loadCart();
}

const sum = document.querySelector("#footer");

function ListCart() {
  cartItems.innerText = "";
  for (const item of cart) {
    const tableRow = document.createElement("tr");
    const itemImageTd = document.createElement("td");
    const itemImage = document.createElement("img");
    const itemName = document.createElement("td");
    const itemPrice = document.createElement("td");
    const ItemTotalPrice = document.createElement("td");
    const itemQuantity = document.createElement("td");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const plusButton = document.createElement("button");
    const minusButton = document.createElement("button");
    const trashIcon = document.createElement("i");

    itemImage.classList.add("item-img");
    plusButton.classList.add("btn");
    minusButton.classList.add("btn");
    div2.classList.add("d-flex", "gap-2", "align-items-center");
    trashIcon.classList.add("fa-solid", "fa-trash");
    trashIcon.onmouseover = () => {
      trashIcon.style.cursor = "pointer";
      trashIcon.style.color = "gray";
    };
    trashIcon.onmouseout = () => {
      trashIcon.style.cursor = "auto";
      trashIcon.style.color = "black";
    };

    itemImage.src = item.image;
    itemName.innerText = item.name;
    itemPrice.innerText = item.price + " kr";
    div1.innerText = item.quantity;
    ItemTotalPrice.innerText = item.quantity * item.price + " kr";
    plusButton.innerText = "+";
    minusButton.innerText = "-";
    Sum();

    itemImageTd.append(itemImage);
    div2.append(minusButton, div1, plusButton);
    itemQuantity.append(div2);
    tableRow.append(
      itemImageTd,
      itemName,
      itemPrice,
      itemQuantity,
      ItemTotalPrice,
      trashIcon
    );
    cartItems.append(tableRow);

    trashIcon.onclick = () => deleteItem(item);
    plusButton.onclick = () => AddQuantity(item, div1);
    minusButton.onclick = () => ReduceQuantity(item, div1);
  }
}

ListCart();

function deleteItem(item) {
  const index = cart.findIndex((x) => x.name === item.name);
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  ListCart();
}

function AddQuantity(item, div1) {
  item.quantity++;
  div1.innerText = item.quantity;
  Sum();
  localStorage.setItem("cart", JSON.stringify(cart));
}

function ReduceQuantity(item, div1) {
  if (item.quantity !== 0) {
    item.quantity--;
  } else {
    item.quantity = 0;
  }
  div1.innerText = item.quantity;
  Sum();
  localStorage.setItem("cart", JSON.stringify(cart));
}

function Sum() {
  sum.innerText =
    cart.reduce((result, i) => (result += i.price * i.quantity), 0) + " kr";
}
