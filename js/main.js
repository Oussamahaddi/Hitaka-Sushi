

// nab bar

let navBarIcon = document.querySelector("#nav_bar_icon");
let navList = document.querySelector("#nav_bar_list");
let cart = document.getElementById("menu_cart");
let buy = document.getElementById("shop_items");

navBarIcon.addEventListener("click", _ => {
    navList.classList.toggle("show");
    if (navList.getAttribute("class") === "nav_bar show") {
        navBarIcon.setAttribute("src", "./images/icons/icon-menu.svg");
    } else {
        navBarIcon.setAttribute("src", "./images/icons/icon-close.svg");
    }
})

// show menu cart

cart.addEventListener("click", _ => {
    buy.classList.toggle("close_cart");
})


// change menu

let selectBox = document.querySelector("select");
let allMenu = document.querySelectorAll(".menu_items");
let sushi = document.getElementById("sushi");
let ramen = document.getElementById("ramen");
let miso = document.getElementById("miso");

let arr = [sushi,ramen,miso]

sushi.style.display = "flex"


arr.forEach(el => {
    selectBox.addEventListener("change" , e => {
        let selectedElement = document.getElementById(e.target.value);
        (el == selectedElement) ? selectedElement.style.display = "flex" : el.style.display = "none";
    });
})



// add element to shop




    // inside shop icon
let shop = document.querySelector("#shop_items");
let addItem = document.querySelector("#item_buy");
    // menu
let plus = document.querySelectorAll("#plus");
let minus = document.querySelectorAll("#minus");
let orderNow = document.querySelectorAll(".order_btn");  // order now
    // all items
let test = document.querySelector("#product_pic");
let total = document.getElementById("total");

let orders = [];

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
    let parentBtn = targetBtn.parentElement.parentElement;
    let img = parentBtn.children[0].children[0].src;
    let name = parentBtn.children[0].children[1].textContent;
    let q = parseFloat(parentBtn.children[1].children[0].children[1].value);
    let price = parseFloat(parentBtn.children[0].children[2].innerHTML.replace("$", ""));
    
    // create objet to store items
    let cartItem = {imgItem: img ,nameItem: name, priceItem: price, quantiteItem:q};

    tt += (q * price * 100) / 100;  // calc total price of all item

    orders.push(cartItem); // push objet inside array

    addItemToCart(cartItem.imgItem, cartItem.nameItem, cartItem.quantiteItem, cartItem.priceItem);

    for (let i = 1; i < orders.length; i++) {
        localStorage.setItem(i, cartItem);
    }

}

// function that add element to cart
function addItemToCart(img, name, q, price) {
    // create new div where to store item that you want to order
    let newDiv = document.createElement("div");
    // add class and html to div
    newDiv.classList.add("item_buy");
    newDiv.innerHTML = `
                            <img src="${img}" alt="">
                            <div class="name_price">
                                <h5>${name}</h5>
                                <p>${q} x $${price}</p>
                            </div>
                            
                                <img src="./images/icons/icon-close.svg" alt="" id="delet_items" class="close_img">
                            
                        `;
    // add newDiv to parent
    buy.prepend(newDiv);
    total.innerHTML = `Total : $${tt}`;
    let removeItem = document.getElementById("delet_items");

    removeItem.addEventListener("click", e => {
        e.target.parentElement.remove();
        
    })
}

function increment(e) {
    let targetPlus = e.target;
    let inp = targetPlus.parentElement;
    inp.children[1].value++;
}

function decrement(e) {
    let targetMinus = e.target;
    let inp = targetMinus.parentElement;
    parseInt(inp.children[1].value--)
    if (parseInt(inp.children[1].value) <= 0) {
        inp.children[1].value = 1;
    }
}

function updateCart() {

}




