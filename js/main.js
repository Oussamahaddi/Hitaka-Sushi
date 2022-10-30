

// nab bar

let navBarIcon = document.querySelector("#nav_bar_icon");
let navList = document.querySelector("#nav_bar_list");

navBarIcon.addEventListener("click", _ => {
    navList.classList.toggle("show");
    if (navList.getAttribute("class") === "nav_bar show") {
        navBarIcon.setAttribute("src", "./images/icons/icon-menu.svg");
    } else {
        navBarIcon.setAttribute("src", "./images/icons/icon-close.svg");
    }
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
let buy = document.getElementById("shop_items");
let total = document.getElementById("total");

// add item to cart
for (let i = 0; i < orderNow.length; i++) {
    let btn = orderNow[i];
    let btnPlus = plus[i];
    let btnMinus = minus[i];
    btn.addEventListener("click", addClick);
    btnPlus.addEventListener("click", increment);
    btnMinus.addEventListener("click", decrement);
}

function addClick(event) {
    let targetBtn = event.target;
    let parentBtn = targetBtn.parentElement.parentElement;
    let img = parentBtn.children[0].children[0].src;
    let name = parentBtn.children[0].children[1].textContent;
    let q = parseInt(parentBtn.children[1].children[0].children[1].value);
    let price = Math.round(parentBtn.children[0].children[2].textContent);
    addItemToCart(img, name, q, price);
}

function addItemToCart(img, name, q, price) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item_buy");
    newDiv.innerHTML += `
                    <img src="${img}" alt="">
                    <div class="name_price">
                        <h5>${name}</h5>
                        <p>${q} x $${price}</p>
                    </div>
                    <img src="./images/icons/icon-close.svg" alt="" id="delet_items">
            `;
    buy.prepend(newDiv);

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

// remove items from cart

let remove = document.querySelectorAll("#delet_items");

for (let i = 0; i < remove.length; i++) {
    let delet = remove[i];

    delet.addEventListener("click", removeItem);
}

function removeItem(e) {
    let btn = e.target;
    let item = btn.parentElement;

    console.log(item)
}



