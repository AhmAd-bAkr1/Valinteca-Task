const containerCards = document.querySelector(".container-cards");
const navbar = document.querySelector(".navbar");
const mainCart = document.querySelector(".cart-icon");

const menu = document.createElement("ul");
menu.className = "menu";
containerCards.appendChild(menu);

const emptyCart = document.createElement("div");
emptyCart.innerHTML = "No Products";
emptyCart.className = "emptyCart";
menu.appendChild(emptyCart);

const containerShow = document.createElement("div");
containerShow.className = "containerShow";
containerShow.classList.add("remove")
containerCards.appendChild(containerShow);

const counter = document.createElement("span");
counter.textContent = 0;
navbar.appendChild(counter);
counter.className = "counter";

let cards = [
  {
    product_name: "AirPods Pro Business Metal",
    product_price: "350",
    product_image: "Airpods1.png",
    added_to_cart: false,
  },
  {
    product_name: "Car Charger PD USB Type C",
    product_price: "225",
    product_image: "Car-Charger.png",
    added_to_cart: false,
  },
  {
    product_name: "Airpods Gaming Bluetooth",
    product_price: "200",
    product_image: "Airpods2.png",
    added_to_cart: false,
  },
  {
    product_name: "Wireless Headphones",
    product_price: "600",
    product_image: "Headphone.png",
    added_to_cart: false,
  },
  {
    product_name: "Wireless Mute 1600DPI Mouse 6",
    product_price: "370",
    product_image: "Mouse-Gaming.png",
    added_to_cart: false,
  },
  {
    product_name: "New Fashion EVA Slipper",
    product_price: "150",
    product_image: "slipper.png",
    added_to_cart: false,
  },
];

for (let i = 0; i < cards.length; i++) {
  // Create Elements
  const card = document.createElement("div");
  card.className = `card`;
  card.id = `${i}`;

  card.innerHTML = `
  <div class ="containerImage"><img id="image" src="imgs/${cards[i].product_image}"></div>
  <div class = "mainText">
  <h1>${cards[i].product_name}</h1>
  <span>${cards[i].product_price}</span>
  </div>
  <button class ="icon add" id="${i}"><svg href = "iconAdd" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
  <path d="M7 12L12 12M12 12L17 12M12 12V7M12 12L12 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg></button>
  <button class="iconR remove"><svg href = "iconRemove" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z" fill="white"/></svg></button>
  <button class="Qview"><svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="white" version="1.1" id="Capa_1" width="800px" height="800px" viewBox="0 0 577.029 577.029" xml:space="preserve">
  <g>
      <path d="M288.514,148.629c73.746,0,136.162,33.616,175.539,61.821c46.652,33.415,70.66,65.737,76.885,78.065   c-6.232,12.327-30.232,44.649-76.885,78.065c-39.377,28.204-101.793,61.82-175.539,61.82c-73.746,0-136.161-33.616-175.539-61.82   c-46.661-33.416-70.66-65.738-76.894-78.065c6.234-12.328,30.233-44.65,76.885-78.065   C152.353,182.245,214.768,148.629,288.514,148.629 M288.514,113.657C129.176,113.657,0,253.543,0,288.515   s129.176,174.857,288.514,174.857c159.339,0,288.515-139.886,288.515-174.857S447.854,113.657,288.514,113.657L288.514,113.657z    M288.514,183.601c-57.939,0-104.914,46.975-104.914,104.914c0,57.938,46.975,104.914,104.914,104.914   s104.914-46.976,104.914-104.914C393.428,230.576,346.453,183.601,288.514,183.601z M260.266,288.515   c-24.515,0-44.388-19.873-44.388-44.388c0-24.515,19.873-44.387,44.388-44.387c24.515,0,44.388,19.873,44.388,44.387   C304.654,268.642,284.781,288.515,260.266,288.515z"/>
  </g>
  </svg>
  <g xmlns="http://www.w3.org/2000/svg">
<path d="M288.514,148.629c73.746,0,136.162,33.616,175.539,61.821c46.652,33.415,70.66,65.737,76.885,78.065   c-6.232,12.327-30.232,44.649-76.885,78.065c-39.377,28.204-101.793,61.82-175.539,61.82c-73.746,0-136.161-33.616-175.539-61.82   c-46.661-33.416-70.66-65.738-76.894-78.065c6.234-12.328,30.233-44.65,76.885-78.065   C152.353,182.245,214.768,148.629,288.514,148.629 M288.514,113.657C129.176,113.657,0,253.543,0,288.515   s129.176,174.857,288.514,174.857c159.339,0,288.515-139.886,288.515-174.857S447.854,113.657,288.514,113.657L288.514,113.657z    M288.514,183.601c-57.939,0-104.914,46.975-104.914,104.914c0,57.938,46.975,104.914,104.914,104.914   s104.914-46.976,104.914-104.914C393.428,230.576,346.453,183.601,288.514,183.601z M260.266,288.515   c-24.515,0-44.388-19.873-44.388-44.388c0-24.515,19.873-44.387,44.388-44.387c24.515,0,44.388,19.873,44.388,44.387   C304.654,268.642,284.781,288.515,260.266,288.515z"/>
</g></button>`;



card.children[2].addEventListener("click" , function (ele) {
  ele.currentTarget.classList.add("remove");
  ele.currentTarget.classList.remove("add")
  card.children[3].classList.add("add")
  card.children[3].classList.remove("remove")
  ele.currentTarget.parentElement.className = "card add";
  counter.textContent = menu.children.length;

  if (counter.textContent == 0) {
    emptyCart.classList.add("add");
    emptyCart.classList.remove("remove")
  } else {
    emptyCart.classList.add("remove");
    emptyCart.classList.remove("add")
  } 
})


card.children[2].addEventListener("click", function (ele) {
  let elemnts = ele.currentTarget.parentElement;
  let clone = elemnts.cloneNode(true);
  console.log(clone)
  clone.setAttribute("class", "main-menu");
  menu.appendChild(clone);

  // Remove Product Frome Cart Btn
  card.children[3].addEventListener("click", function (ele) {
    clone.remove();
    ele.currentTarget.classList.add("remove")
    ele.currentTarget.classList.remove("add")
    card.children[2].classList.add("add");
    card.children[2].classList.remove("remove");
    ele.currentTarget.parentElement.className = "card";
    counter.textContent = menu.children.length - 1;
    if (counter.textContent == 0) {
      emptyCart.classList.add("add");
      emptyCart.classList.remove("remove")
    } else {
      emptyCart.classList.add("remove");
      emptyCart.classList.remove("add")
    } 
  });

  // Quick Show Btn



  // Remove Product From Cart Btn in The Menu
  clone.children[3].addEventListener("click", function (ele) {
    clone.remove();
    card.children[2].classList.add("add");
    card.children[3].classList.add("remove");
    card.children[2].classList.remove("remove");
    card.children[3].classList.remove("add");
    ele.currentTarget.parentElement.className = "card";
    counter.textContent = menu.children.length - 1;

    if (counter.textContent == 0) {
      emptyCart.classList.add("add");
      emptyCart.classList.remove("remove")
    } else {
      emptyCart.classList.add("remove");
      emptyCart.classList.remove("add")
    } 
  });
  // Qview View Product From Cart Btn in The Menu
  clone.children[4].addEventListener("click", function (ele) {
    let elemnts = ele.currentTarget.parentElement;
    let clone = elemnts.cloneNode(true);
    clone.setAttribute("class", "Quick-show");
    containerShow.appendChild(clone);

    const exitIcon = document.createElement("button");
    exitIcon.className = "exitIcon";
    exitIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" id="meteor-icon-kit__regular-sign-out" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.5858 12.9999H5C4.44772 12.9999 4 12.5522 4 11.9999C4 11.4476 4.44772 10.9999 5 10.9999H20.5858L18.2929 8.70701C17.9024 8.31648 17.9024 7.68332 18.2929 7.29279C18.6834 6.90227 19.3166 6.90227 19.7071 7.29279L23.7071 11.2928C24.0976 11.6833 24.0976 12.3165 23.7071 12.707L19.7071 16.707C19.3166 17.0975 18.6834 17.0975 18.2929 16.707C17.9024 16.3165 17.9024 15.6833 18.2929 15.2928L20.5858 12.9999ZM14 6.9999C14 7.55218 13.5523 7.9999 13 7.9999C12.4477 7.9999 12 7.55218 12 6.9999V4.69415C12 4.20531 11.6466 3.78812 11.1644 3.70776L3.1644 2.37443C2.61963 2.28363 2.1044 2.65165 2.01361 3.19642C2.00455 3.25075 2 3.30574 2 3.36082V20.639C2 21.1913 2.44772 21.639 3 21.639C3.05508 21.639 3.11007 21.6344 3.1644 21.6254L11.1644 20.292C11.6466 20.2117 12 19.7945 12 19.3056V16.9999C12 16.4476 12.4477 15.9999 13 15.9999C13.5523 15.9999 14 16.4476 14 16.9999V19.3056C14 20.7722 12.9398 22.0237 11.4932 22.2648L3.4932 23.5982C3.3302 23.6253 3.16524 23.639 3 23.639C1.34315 23.639 0 22.2958 0 20.639V3.36082C0 3.19558 0.0136525 3.03062 0.0408182 2.86762C0.313203 1.23331 1.85889 0.129253 3.4932 0.401638L11.4932 1.73497C12.9398 1.97607 14 3.22764 14 4.69415V6.9999Z" fill="black"/></svg>`;
    containerShow.appendChild(exitIcon);
    containerShow.classList.add("flex")
    containerShow.classList.remove("remove")
      exitIcon.addEventListener("click", function (ele) {
        containerShow.classList.add("remove")
        containerShow.classList.remove("flex")
        clone.remove();
      });
      clone.children[2].addEventListener("click" , function (ele) {
        ele.currentTarget.classList.add("remove");
        clone.children[3].classList.add("add")
        clone.children[3].classList.remove("remove")
        
      })
  });
});

card.children[4].addEventListener("click", function (ele) {
  let elemnts = ele.currentTarget.parentElement;
  let clone = elemnts.cloneNode(true);
  clone.setAttribute("class", "Quick-show");
  containerShow.appendChild(clone);

  const exitIcon = document.createElement("button");
  exitIcon.className = "exitIcon";
  exitIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" id="meteor-icon-kit__regular-sign-out" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.5858 12.9999H5C4.44772 12.9999 4 12.5522 4 11.9999C4 11.4476 4.44772 10.9999 5 10.9999H20.5858L18.2929 8.70701C17.9024 8.31648 17.9024 7.68332 18.2929 7.29279C18.6834 6.90227 19.3166 6.90227 19.7071 7.29279L23.7071 11.2928C24.0976 11.6833 24.0976 12.3165 23.7071 12.707L19.7071 16.707C19.3166 17.0975 18.6834 17.0975 18.2929 16.707C17.9024 16.3165 17.9024 15.6833 18.2929 15.2928L20.5858 12.9999ZM14 6.9999C14 7.55218 13.5523 7.9999 13 7.9999C12.4477 7.9999 12 7.55218 12 6.9999V4.69415C12 4.20531 11.6466 3.78812 11.1644 3.70776L3.1644 2.37443C2.61963 2.28363 2.1044 2.65165 2.01361 3.19642C2.00455 3.25075 2 3.30574 2 3.36082V20.639C2 21.1913 2.44772 21.639 3 21.639C3.05508 21.639 3.11007 21.6344 3.1644 21.6254L11.1644 20.292C11.6466 20.2117 12 19.7945 12 19.3056V16.9999C12 16.4476 12.4477 15.9999 13 15.9999C13.5523 15.9999 14 16.4476 14 16.9999V19.3056C14 20.7722 12.9398 22.0237 11.4932 22.2648L3.4932 23.5982C3.3302 23.6253 3.16524 23.639 3 23.639C1.34315 23.639 0 22.2958 0 20.639V3.36082C0 3.19558 0.0136525 3.03062 0.0408182 2.86762C0.313203 1.23331 1.85889 0.129253 3.4932 0.401638L11.4932 1.73497C12.9398 1.97607 14 3.22764 14 4.69415V6.9999Z" fill="black"/></svg>`;
  containerShow.appendChild(exitIcon);
containerShow.classList.add("flex")
containerShow.classList.remove("remove")
  exitIcon.addEventListener("click", function (ele) {
    containerShow.classList.add("remove")
    containerShow.classList.remove("flex")
    clone.remove();
  });
  clone.children[2].addEventListener("click" , function (ele) {
    ele.currentTarget.classList.add("remove");
    clone.children[3].classList.add("add")
    clone.children[3].classList.remove("remove")
    
  })
  
  
  clone.children[3].addEventListener("click" , function (ele) {
    ele.currentTarget.classList.remove("add");
    ele.currentTarget.classList.add("remove")
    clone.children[2].classList.remove("remove")
    clone.children[2].classList.add("add")
    })

  });




  // End of Create Elements

  containerCards.appendChild(card);
}
// Cart Btn
mainCart.addEventListener("click", function (ele) {
  menu.classList.toggle("apear");

  if (menu.classList.contains("apear")) {
    menu.classList.remove("menu");

    if (counter.textContent == 0) {
      emptyCart.classList.add("add");
      emptyCart.classList.remove("remove")
    } else {
      emptyCart.classList.add("remove");
      emptyCart.classList.remove("add")
    } 
  } else {
    menu.classList.add("menu");
  }
});

