
/////////// nab bar

let navBarIcon = document.querySelector("#nav_bar_icon");
let navList = document.querySelector("#nav_bar_list");
let cart = document.getElementById("menu_cart");

navBarIcon.addEventListener("click", _ => {
    navList.classList.toggle("show");
    if (navList.getAttribute("class") === "nav_bar show") {
        navBarIcon.setAttribute("src", "./images/icons/icon-menu.svg");
    } else {
        navBarIcon.setAttribute("src", "./images/icons/icon-close.svg");
    }
})



//////////// show menu cart

let buy = document.getElementById("shop_items");

cart.addEventListener("click", _ => {
    buy.classList.toggle("close_cart");
})




/////////// change menu
let selectBox = document.querySelector("select");
let allMenu = document.querySelectorAll(".menu_items");
let sushi = document.getElementById("sushi");
let ramen = document.getElementById("ramen");
let miso = document.getElementById("miso");

let arr = [sushi,ramen,miso]

sushi.style.display = "flex";


arr.forEach(el => {
    selectBox.addEventListener("change" , e => {
        let selectedElement = document.getElementById(e.target.value);
        (el == selectedElement) ? selectedElement.style.display = "flex" : el.style.display = "none";
    });
})



/////////// add element to shop

    // inside shop icon
let shop = document.querySelector("#shop_items");
let addItem = document.querySelector("#item_buy");
    // menu
let plus = document.querySelectorAll("#plus");
let minus = document.querySelectorAll("#minus");
let orderNow = document.querySelectorAll(".order_btn");  // order now
    // all items
let test = document.querySelector("#product_pic");
let total = document.getElementsByClassName("total")[0];

let tt = 0;

// add item to cart
for (let i = 0; i < orderNow.length; i++) {
    let btn = orderNow[i];
    let btnPlus = plus[i];
    let btnMinus = minus[i];
    btn.addEventListener("click", addClick);
    btnPlus.addEventListener("click", increment);
    btnMinus.addEventListener("click", decrement);
}

// function that get elements that need when click on button "order now"
function addClick(event) {
    // get all item that i need from contianer "img, name, price, quantite"
    let targetBtn = event.target;
    // get parernt of button buy_now
    let parentBtn = targetBtn.parentElement.parentElement; 
    let img = parentBtn.children[0].children[0].src;
    let name = parentBtn.children[0].children[1].textContent;
    let q = parseFloat(parentBtn.children[1].children[0].children[1].value);
    let price = parseFloat(parentBtn.children[0].children[2].innerHTML.replace("$", ""));
    tt += (q * price * 100) / 100;  // calc total price of all item
    addItemToCart(img, name, q, price);
}

// function that add element to cart
function addItemToCart(img, name, q, price) {
    // create new div where to store item that you want to order
    let newDiv = document.createElement("div");
    // add class and id to div
    newDiv.classList.add("item_buy");
    newDiv.id = "item_buy";

    // add html code to newDiv
    newDiv.innerHTML = 
        `
            <img src="${img}" alt="">
            <div class="name_price">
                <h5>${name}</h5>
                <p>$${(price * q * 100) / 100}</p>
            </div>
            <img src="./images/icons/icon-close.svg" alt="" id="delet_items" class="close_img">
        `;
    // add newDiv to parent
    buy.prepend(newDiv);

    total.innerHTML = `Total: $${tt}`;

    let itemName = newDiv.querySelectorAll("h5");

    for (let i = 0; i < itemName.length; i++) {
        if (itemName[i].innerHTML == name) {
            
        }
    }

    // remove items
    let removeItem = document.getElementsByClassName("close_img");
    for (let i = 0; i < removeItem.length; i++) {
        let delBtn = removeItem[i];
        delBtn.addEventListener("click", removeCartItem);
    }
}

/////////

// remove item from cart
function removeCartItem(e) {
    let clickedBtn = e.target;
    clickedBtn.parentElement.remove();
    let parentDelet = clickedBtn.parentElement;
    let priceElement = parseFloat(parentDelet.children[1].children[1].innerHTML.replace("$", ""));
    tt -= (priceElement);
    total.innerHTML = `Total: $${tt}`;
}

// increment the input of quantite when click on this button +
function increment(e) {
    let targetPlus = e.target;
    let inp = targetPlus.parentElement;
    inp.children[1].value++;
}
// decrement the input of quantite when click on this button -
function decrement(e) {
    let targetMinus = e.target;
    let inp = targetMinus.parentElement;
    parseInt(inp.children[1].value--)
    if (parseInt(inp.children[1].value) <= 0) {
        inp.children[1].value = 1;
    }
}






