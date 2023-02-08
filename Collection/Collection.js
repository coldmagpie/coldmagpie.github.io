class Product {
  constructor(image, name, introduction, price) {
    this.image = image;
    this.name = name;
    this.introduction = introduction;
    this.price = price;
  }
}

class CartItem {
  constructor(image, name, price, quantity) {
    this.image = image;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

const cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const productList = document.querySelector("#products");
const itemQuantity = document.getElementById("quantity");

const products = [
  new Product(
    "../images/bed.jpg",
    "A pretty bed",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa",
    11199.0
  ),
  new Product(
    "../images/Armchair.jpg",
    "A pretty armchair",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa",
    1200.0
  ),
  new Product(
    "../images/couch.jpg",
    "A pretty couch",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa",
    5699.0
  ),
  new Product(
    "../images/kitchentable.jpg",
    "A pretty table",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa",
    9999.0
  ),
  new Product(
    "../images/wardrobe.jpg",
    "A pretty wardrobe",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa",
    8900.0
  ),
  new Product(
    "../images/coffetable.jpg",
    "A pretty coffe table",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa",
    3200.0
  ),
];

for (const product of products) {
  const card = document.createElement("li");
  const cardImage = document.createElement("img");
  const cardBody = document.createElement("div");
  const cardText0 = document.createElement("h4");
  const cardText1 = document.createElement("p");
  const cardText2 = document.createElement("p");
  const cardText3 = document.createElement("p");
  const cardPrice = document.createElement("p");
  const cardFotter = document.createElement("div");
  const button = document.createElement("button");

  card.classList.add("card", "border-1", "mb-5");
  cardImage.classList.add("card-img-top", "h-200");
  cardBody.classList.add("card-body", "text-dark", "pt-2");
  cardText1.classList.add("card-text1", "fs-6");
  cardText0.classList.add("card-text0");
  cardPrice.classList.add("price", "fs-6", "mb-0");
  cardText2.classList.add("card-text2");
  cardFotter.classList.add("card-footer");
  button.classList.add("btn", "mt-0", "btn-dark", "w-100", "mt-0");

  cardImage.src = product.image;
  cardText0.innerText = product.name;
  cardText1.innerText = product.introduction;
  cardText2.innerText = product.price;
  cardText3.innerText = "kr";
  button.innerText = "Put in cart";
  ItemQuantity(itemQuantity, cart);

  cardFotter.append(button);
  cardPrice.append(cardText2, cardText3);
  cardBody.append(cardText0, cardText1, cardPrice);
  card.append(cardImage, cardBody, cardFotter);
  productList.append(card);

  button.onclick = () => {
    const item = cart.find((i) => i.name === product.name);
    if (!!item) {
      item.quantity++;
    } else {
      cart.push(new CartItem(product.image, product.name, product.price, 1));
    }
    ItemQuantity(itemQuantity, cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  };
}

function ItemQuantity(itemQuantity, cart) {
  itemQuantity.innerText = cart.reduce(
    (result, item) => (result += item.quantity),
    0
  );
}
