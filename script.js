const dataArray = [
  {
    image: {
      thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
      mobile: "./assets/images/image-waffle-mobile.jpg",
      tablet: "./assets/images/image-waffle-tablet.jpg",
      desktop: "./assets/images/image-waffle-desktop.jpg",
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
      mobile: "./assets/images/image-creme-brulee-mobile.jpg",
      tablet: "./assets/images/image-creme-brulee-tablet.jpg",
      desktop: "./assets/images/image-creme-brulee-desktop.jpg",
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
      mobile: "./assets/images/image-macaron-mobile.jpg",
      tablet: "./assets/images/image-macaron-tablet.jpg",
      desktop: "./assets/images/image-macaron-desktop.jpg",
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
      mobile: "./assets/images/image-tiramisu-mobile.jpg",
      tablet: "./assets/images/image-tiramisu-tablet.jpg",
      desktop: "./assets/images/image-tiramisu-desktop.jpg",
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
      mobile: "./assets/images/image-baklava-mobile.jpg",
      tablet: "./assets/images/image-baklava-tablet.jpg",
      desktop: "./assets/images/image-baklava-desktop.jpg",
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
      mobile: "./assets/images/image-meringue-mobile.jpg",
      tablet: "./assets/images/image-meringue-tablet.jpg",
      desktop: "./assets/images/image-meringue-desktop.jpg",
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-cake-thumbnail.jpg",
      mobile: "./assets/images/image-cake-mobile.jpg",
      tablet: "./assets/images/image-cake-tablet.jpg",
      desktop: "./assets/images/image-cake-desktop.jpg",
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
      mobile: "./assets/images/image-brownie-mobile.jpg",
      tablet: "./assets/images/image-brownie-tablet.jpg",
      desktop: "./assets/images/image-brownie-desktop.jpg",
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
      mobile: "./assets/images/image-panna-cotta-mobile.jpg",
      tablet: "./assets/images/image-panna-cotta-tablet.jpg",
      desktop: "./assets/images/image-panna-cotta-desktop.jpg",
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
  },
];
//
const dessertHolder = document.querySelector(".dessert-holder");
let cartArray = [];

let html = "";
html = dataArray
  .map((elem, index) => {
    return `
    <div class="food">
          <div class="food-image">
            <picture>
              <source srcset="${elem.image.mobile}" media="(max-width: 576px)" />
              <source srcset="${elem.image.tablet}" media="(max-width: 768px)"  />
              <img src="${elem.image.desktop}" class="food-img" />
            </picture>
            <div class="btn-holder">
              <button class="cart-btn" data-numbering=${index}>
              <img src="./assets/images/icon-add-to-cart.svg" >
              <p class="cart-para">Add To Cart</p>
              </button>
              
               <div class="confirm-btn">
                    <button class="decrement-btn">
                      <img src="./assets/images/icon-decrement-quantity.svg" class="decrement-img" />
                    </button>
                    <p class="counter"></p>
                    <button class="increment-btn">
                      <img src="./assets/images/icon-increment-quantity.svg" class="increment-img"  />
                    </button>
               </div>
            </div>
          </div>
          <div class="food-information">
                <p class="food-category">${elem.category}</p>
                <p class="food-name">${elem.name}</p>
                <p class="food-price">$${elem.price}</p>
          </div>
    </div>`;
  })
  .join("");

// console.log(html);
dessertHolder.insertAdjacentHTML("beforeend", html);
const cartHolder = document.querySelector(".cart-holder");
const cartBtns = [...document.querySelectorAll(".cart-btn")];
// console.log(cartBtns);
cartBtns.forEach((elem, index) => {
  elem.addEventListener("click", function () {
    let confirmBtn = this.nextElementSibling;
    let counter = 1;
    confirmBtn.classList.add("show");
    let countHolder = Array.from(confirmBtn.children)[1];
    let html;
    countHolder.textContent = counter;
    ////////////////////////////////////!setting elements inside cartArray
    console.log(this.dataset.numbering);
    if (!cartArray.includes(dataArray[+this.dataset.numbering])) {
      cartArray.push(dataArray[+this.dataset.numbering]);
      console.log(cartArray);
      cartArray.forEach((elem) => {
        html = `<div class="cart-item">
             <div class="cart-item__left">
               <p class="item-name">${elem.name}
               </p>
                 <div class="row">
                 <p class="item-count"><span>${counter}</span>x</p>
                 <p class="item-price">@ $${elem.price}</p>
                 <p class="item-total">@ $${counter * elem.price}</p>
                 </div>
             </div>
             <div class="cart-item__right">
                 <img src="./assets/images/icon-remove-item.svg" class="cross"/>
             </div>
           </div>`;
      });
      cartHolder.insertAdjacentHTML("beforeend", html);
      //?this is not adding items in cart as i want to
      // html = cartArray
      //   .map((elem, index) => {
      //     return `<div class="cart-item">
      //       <div class="cart-item__left">
      //         <p class="item-name">${elem.name}
      //         </p>
      //           <div class="row">
      //           <p class="item-count"><span>${counter}</span>x</p>
      //           <p class="item-price">@ $${elem.price}</p>
      //           <p class="item-total">@ $${counter * elem.price}</p>
      //           </div>
      //       </div>
      //       <div class="cart-item__right">
      //           <img src="./assets/images/icon-remove-item.svg" class="cross"/>
      //       </div>
      //     </div>
      // `;
      //   })
      //   .join("");
    }

    // let html = itemGenerator(
    //   dataArray[index].name,
    //   counter,
    //   dataArray[index].price
    // );

    console.log(cartArray);
  });
});
const decrementBtns = [...document.querySelectorAll(".decrement-btn")];
const incrementBtns = [...document.querySelectorAll(".increment-btn")];

// console.log(incrementBtns);
decrementBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    let counter = +this.nextElementSibling.textContent;
    counter === 1
      ? this.parentElement.classList.remove("show")
      : (counter--, (this.nextElementSibling.textContent = counter));
    // this.parentElement.classList.remove("show");
  });
});
incrementBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    let counter = +this.previousElementSibling.textContent;
    counter++;
    this.previousElementSibling.textContent = counter;
    // console.log(counter);
    // function to change counter in cart item
  });
});

function itemGenerator(nme, count, price) {
  return `<div class="cart-item">
            <div class="cart-item__left">
              <p class="item-name">${nme}
              </p>
                <div class="row">
                <p class="item-count"><span>${count}</span>x</p>
                <p class="item-price">@ $${price}</p>
                <p class="item-total">@ $${count * price}</p>
                </div>
            </div>
            <div class="cart-item__right">
                <img src="./assets/images/icon-remove-item.svg" class="cross"/>
            </div>
          </div>`;
}
const crossEl = document.querySelectorAll(".cross");

cartHolder.addEventListener("click", function (e) {
  if ((e.target.className = "cross")) {
    cartHolder.removeChild(e.target.parentElement.parentElement);
  }
});
