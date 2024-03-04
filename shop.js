const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "ASUS",
    price: 119000,
    colors: [
      {
        code: "ASUS",
        img: "./img/ASUS.png",
      },
    ],
  },
  {
    id: 2,
    title: "NITRO 5",
    price: 119000,
    colors: [
      {
        code: "NITRO",
        img: "./img/ACER.png",
      },
    ],
  },
  {
    id: 3,
    title: "DRAGON",
    price: 119000,
    colors: [
      {
        code: "DRAGON",
        img: "./img/dragon.png",
      },
      
    ],
  },
  {
    id: 4,
    title: "CROWN",
    price: 119000,
    colors: [
      {
        code: "CROWN",
        img: "./img/White crown.png",
      },
   
    ],
  },
  {
    id: 5,
    title: "SETUP",
    price: 119000,
    colors: [
      {
        code: "SETUP",
        img: "./img/lapsetup.png",
      },
     
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});



const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
