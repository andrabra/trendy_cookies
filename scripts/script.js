document.getElementById("main__action-button").onclick = function () {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
};

const links = document.querySelectorAll(".menu__item a");
const buttons = document.querySelectorAll(".products__item .button");

//? Реализация через foreach
// links.forEach((link) => {
//   link.addEventListener("click", (event) => {
//     event.preventDefault();
//     const id = link.getAttribute("data-link");
//     document.getElementById(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

for (let i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    document
      .getElementById(links[i].getAttribute("data-link"))
      .scrollIntoView({ behavior: "smooth" });
  };
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    document.getElementById("order").scrollIntoView({ behavior: "smooth" });
  };
}

document.getElementById("change-currency").onclick = function (e) {
  const prices = document.querySelectorAll(".product__item-price");
  const currentCurrency = e.target.innerText;
  let newCurrency = "$";
  let coefficient = 1;
  if (currentCurrency === "$") {
    newCurrency = "₽";
    coefficient = 90;
  } else if (currentCurrency === "₽") {
    newCurrency = "BYN";
    coefficient = 3;
  } else if (currentCurrency === "BYN") {
    newCurrency = "€";
    coefficient = 0.9;
  } else if (currentCurrency === "€") {
    newCurrency = "¥";
    coefficient = 6.9;
  }
  e.target.innerText = newCurrency;

  for (let i = 0; i < prices.length; i++) {
    prices[i].innerText =
      prices[i].getAttribute("data-base-price") * Math.round(coefficient) +
      " " +
      newCurrency;
  }
};

const product = document.getElementById("product");
const name = document.getElementById("name");
const phone = document.getElementById("phone");

document.getElementById("order-action").onclick = function () {
  let hasError = false;
  [product, name, phone].forEach((input) => {
    if (!input.value) {
      input.style.borderColor = "red";
      hasError = true;
    } else {
      input.style.borderColor = "";
    }
  });

  if (!hasError) {
    [product, name, phone].forEach((input) => {
      input.value = "";
    });
    alert("Ваш заказ принят. Спасибо за покупку!");
  }
};
