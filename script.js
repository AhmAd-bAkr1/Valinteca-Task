let ContainerCards = document.querySelector(".container-cards");
let navbar = document.querySelector(".navbar");
let mainCart = document.querySelector(".cart-icon");

let menu = document.createElement("ul");
menu.className = "menu";
ContainerCards.appendChild(menu);

let EmptyCart = document.createElement("div")
EmptyCart.innerHTML = "No Products"
EmptyCart.className = "EmptyCart"               
menu.appendChild(EmptyCart)

let ContainerShow = document.createElement("div");
ContainerShow.className = "ContainerShow";
ContainerCards.appendChild(ContainerShow);

let counter = document.createElement("span");
counter.innerHTML = 0;
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

  let card = document.createElement("div");
  card.className = `card`;
  card.id = `${i}`

  // Add a image of the card
  let image = document.createElement("img");
  image.src = `imgs/${cards[i].product_image}`;
  card.appendChild(image);

  // container image
  let containerImage = document.createElement("div");
  containerImage.className = "containerImage";
  containerImage.appendChild(image);
  card.appendChild(containerImage);

  let mainText = document.createElement("div");
  mainText.className = "mainText";
  card.appendChild(mainText);

  // Add the title of the card
  let title = document.createElement("h1");
  title.innerHTML = `${cards[i].product_name}`;
  mainText.appendChild(title);

  // Add the price of the card
  let price = document.createElement("span");
  price.innerHTML = `${cards[i].product_price}`;
  mainText.appendChild(price);

  // Add cart icon
  let iconAdd = document.createElement("button");
  iconAdd.className = `icon`;
  iconAdd.id = `${i}`
  iconAdd.innerHTML = `<svg href = "iconAdd" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
    <path d="M7 12L12 12M12 12L17 12M12 12V7M12 12L12 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  card.appendChild(iconAdd);

  let iconRemove = document.createElement("button");
  iconRemove.className = "iconR";
  iconRemove.innerHTML = `<svg href = "iconRemove" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z" fill="white"/></svg>`;
  card.appendChild(iconRemove);

  // Add quick view modal

  let Qview = document.createElement("button");
  Qview.className = "Qview";
  Qview.innerHTML = `<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="white" version="1.1" id="Capa_1" width="800px" height="800px" viewBox="0 0 577.029 577.029" xml:space="preserve">
    <g>
        <path d="M288.514,148.629c73.746,0,136.162,33.616,175.539,61.821c46.652,33.415,70.66,65.737,76.885,78.065   c-6.232,12.327-30.232,44.649-76.885,78.065c-39.377,28.204-101.793,61.82-175.539,61.82c-73.746,0-136.161-33.616-175.539-61.82   c-46.661-33.416-70.66-65.738-76.894-78.065c6.234-12.328,30.233-44.65,76.885-78.065   C152.353,182.245,214.768,148.629,288.514,148.629 M288.514,113.657C129.176,113.657,0,253.543,0,288.515   s129.176,174.857,288.514,174.857c159.339,0,288.515-139.886,288.515-174.857S447.854,113.657,288.514,113.657L288.514,113.657z    M288.514,183.601c-57.939,0-104.914,46.975-104.914,104.914c0,57.938,46.975,104.914,104.914,104.914   s104.914-46.976,104.914-104.914C393.428,230.576,346.453,183.601,288.514,183.601z M260.266,288.515   c-24.515,0-44.388-19.873-44.388-44.388c0-24.515,19.873-44.387,44.388-44.387c24.515,0,44.388,19.873,44.388,44.387   C304.654,268.642,284.781,288.515,260.266,288.515z"/>
    </g>
    </svg>
    <g xmlns="http://www.w3.org/2000/svg">
	<path d="M288.514,148.629c73.746,0,136.162,33.616,175.539,61.821c46.652,33.415,70.66,65.737,76.885,78.065   c-6.232,12.327-30.232,44.649-76.885,78.065c-39.377,28.204-101.793,61.82-175.539,61.82c-73.746,0-136.161-33.616-175.539-61.82   c-46.661-33.416-70.66-65.738-76.894-78.065c6.234-12.328,30.233-44.65,76.885-78.065   C152.353,182.245,214.768,148.629,288.514,148.629 M288.514,113.657C129.176,113.657,0,253.543,0,288.515   s129.176,174.857,288.514,174.857c159.339,0,288.515-139.886,288.515-174.857S447.854,113.657,288.514,113.657L288.514,113.657z    M288.514,183.601c-57.939,0-104.914,46.975-104.914,104.914c0,57.938,46.975,104.914,104.914,104.914   s104.914-46.976,104.914-104.914C393.428,230.576,346.453,183.601,288.514,183.601z M260.266,288.515   c-24.515,0-44.388-19.873-44.388-44.388c0-24.515,19.873-44.387,44.388-44.387c24.515,0,44.388,19.873,44.388,44.387   C304.654,268.642,284.781,288.515,260.266,288.515z"/>
</g>`;
  card.appendChild(Qview);



  ContainerCards.appendChild(card);

  // End of Create Elements

  
  iconAdd.addEventListener("click", function (ele) {
    ele.currentTarget.style.display = "none";
    iconRemove.style.display = "block";
    ele.currentTarget.parentElement.className = "card add";
    counter.innerHTML = menu.children.length;

    if (counter.innerHTML == 0) {
      EmptyCart.style.display = "block"   
    }else{
      EmptyCart.style.display = "none"  
      
    }
    
  });
  
  iconAdd.addEventListener("click", function (ele) {
    let elemnts = ele.currentTarget.parentElement;
    let clone = elemnts.cloneNode(true);
    clone.setAttribute("class", "main-menu");
    menu.appendChild(clone);

    iconRemove.addEventListener("click", function (ele) {
      clone.remove();
      ele.currentTarget.style.display = "none";
      iconAdd.style.display = "block";
      ele.currentTarget.parentElement.className = "card";
      counter.innerHTML = menu.children.length -1 ;
      
      // ProductsArray.pop(product.added)
      // console.log(ProductsArray)
      if (counter.innerHTML == 0) {
        EmptyCart.style.display = "block"   
      }else{
      EmptyCart.style.display = "none"  
  
      }
    });

    // remove btn inside menu
    clone.children[3].addEventListener("click", function (ele) {
      clone.remove();
      iconRemove.style.display = "none";
      iconAdd.style.display = "block";
      ele.currentTarget.parentElement.className = "card";
      counter.innerHTML = menu.children.length - 1;

      if (counter.innerHTML == 0) {
        EmptyCart.style.display = "block"   
      }else{
      EmptyCart.style.display = "none"  
  
      }
    });

    clone.children[4].addEventListener("click", function (ele) {
      let elemnts = ele.currentTarget.parentElement;
      let clone = elemnts.cloneNode(true);
      clone.setAttribute("class", "Quick-show");
      ContainerShow.appendChild(clone);

      let ExitIcon = document.createElement("button");
      ExitIcon.className = "ExitIcon";
      ExitIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" id="meteor-icon-kit__regular-sign-out" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.5858 12.9999H5C4.44772 12.9999 4 12.5522 4 11.9999C4 11.4476 4.44772 10.9999 5 10.9999H20.5858L18.2929 8.70701C17.9024 8.31648 17.9024 7.68332 18.2929 7.29279C18.6834 6.90227 19.3166 6.90227 19.7071 7.29279L23.7071 11.2928C24.0976 11.6833 24.0976 12.3165 23.7071 12.707L19.7071 16.707C19.3166 17.0975 18.6834 17.0975 18.2929 16.707C17.9024 16.3165 17.9024 15.6833 18.2929 15.2928L20.5858 12.9999ZM14 6.9999C14 7.55218 13.5523 7.9999 13 7.9999C12.4477 7.9999 12 7.55218 12 6.9999V4.69415C12 4.20531 11.6466 3.78812 11.1644 3.70776L3.1644 2.37443C2.61963 2.28363 2.1044 2.65165 2.01361 3.19642C2.00455 3.25075 2 3.30574 2 3.36082V20.639C2 21.1913 2.44772 21.639 3 21.639C3.05508 21.639 3.11007 21.6344 3.1644 21.6254L11.1644 20.292C11.6466 20.2117 12 19.7945 12 19.3056V16.9999C12 16.4476 12.4477 15.9999 13 15.9999C13.5523 15.9999 14 16.4476 14 16.9999V19.3056C14 20.7722 12.9398 22.0237 11.4932 22.2648L3.4932 23.5982C3.3302 23.6253 3.16524 23.639 3 23.639C1.34315 23.639 0 22.2958 0 20.639V3.36082C0 3.19558 0.0136525 3.03062 0.0408182 2.86762C0.313203 1.23331 1.85889 0.129253 3.4932 0.401638L11.4932 1.73497C12.9398 1.97607 14 3.22764 14 4.69415V6.9999Z" fill="black"/></svg>`;
      ContainerShow.appendChild(ExitIcon);
      ContainerShow.style.display = "flex";
      ExitIcon.addEventListener("click", function (ele) {
        ContainerShow.style.display = "none";
        clone.remove();
      });
    });
  });

  // Quick Show Btn

  Qview.addEventListener("click", function (ele) {
    let elemnts = ele.currentTarget.parentElement;
    let clone = elemnts.cloneNode(true);
    clone.setAttribute("class", "Quick-show");
    ContainerShow.appendChild(clone);

    let ExitIcon = document.createElement("button");
    ExitIcon.className = "ExitIcon";
    ExitIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" id="meteor-icon-kit__regular-sign-out" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.5858 12.9999H5C4.44772 12.9999 4 12.5522 4 11.9999C4 11.4476 4.44772 10.9999 5 10.9999H20.5858L18.2929 8.70701C17.9024 8.31648 17.9024 7.68332 18.2929 7.29279C18.6834 6.90227 19.3166 6.90227 19.7071 7.29279L23.7071 11.2928C24.0976 11.6833 24.0976 12.3165 23.7071 12.707L19.7071 16.707C19.3166 17.0975 18.6834 17.0975 18.2929 16.707C17.9024 16.3165 17.9024 15.6833 18.2929 15.2928L20.5858 12.9999ZM14 6.9999C14 7.55218 13.5523 7.9999 13 7.9999C12.4477 7.9999 12 7.55218 12 6.9999V4.69415C12 4.20531 11.6466 3.78812 11.1644 3.70776L3.1644 2.37443C2.61963 2.28363 2.1044 2.65165 2.01361 3.19642C2.00455 3.25075 2 3.30574 2 3.36082V20.639C2 21.1913 2.44772 21.639 3 21.639C3.05508 21.639 3.11007 21.6344 3.1644 21.6254L11.1644 20.292C11.6466 20.2117 12 19.7945 12 19.3056V16.9999C12 16.4476 12.4477 15.9999 13 15.9999C13.5523 15.9999 14 16.4476 14 16.9999V19.3056C14 20.7722 12.9398 22.0237 11.4932 22.2648L3.4932 23.5982C3.3302 23.6253 3.16524 23.639 3 23.639C1.34315 23.639 0 22.2958 0 20.639V3.36082C0 3.19558 0.0136525 3.03062 0.0408182 2.86762C0.313203 1.23331 1.85889 0.129253 3.4932 0.401638L11.4932 1.73497C12.9398 1.97607 14 3.22764 14 4.69415V6.9999Z" fill="black"/></svg>`;
    ContainerShow.appendChild(ExitIcon);
    ContainerShow.style.display = "flex";
    ExitIcon.addEventListener("click", function (ele) {
      ContainerShow.style.display = "none";
      clone.remove();
    });
  });
}





mainCart.addEventListener("click", function (ele) {
  menu.classList.toggle("apear");
  
  
  if (menu.classList.contains("apear")) {
    menu.classList.remove("menu");
    
    
    if (counter.innerHTML == 0) {
      EmptyCart.style.display = "block"   
    }else{
    EmptyCart.style.display = "none"  

    }


  } else {
    menu.classList.add("menu");

    // EmptyCart.style.display = "none"  
  
    
  }
});



// I tried so hard

    // let ProductsArray = []
    // let product = {
    //   title : cards[ele.currentTarget.parentElement.id].product_name,
    //   added : cards[ele.currentTarget.parentElement.id].added_to_cart
    // }
    // ProductsArray.push(product.added)
    // console.log( ProductsArray)
    // // let takeData = JSON.stringify(ProductsArray)
    // // localStorage.setItem("product" ,takeData)
    // // localStorage.getItem("product")
    // // console.log(JSON.parse(localStorage.getItem("product").split(",")))

    // // console.log(localStorage.getItem("product"))