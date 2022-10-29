

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

let newObj = {
    img: "",
    name: "",
    quantite: "",
    price: "",
};

    // inside shop icon
let shop = document.querySelector("#shop_items");
let addItem = document.querySelector("#item_buy");
    // menu
let plus = document.querySelectorAll("#plus");
let minus = document.querySelectorAll("#minus");
let quantite = parseInt(document.getElementById("quantite"));
let price = document.getElementById("price");
let orderNow = document.querySelectorAll(".order_btn");  // order now
    // all items
let allItem = document.querySelectorAll("#sushi");

for (let i = 0; i < allItem.length; i++) {
    orderNow.forEach(el => {
        el.addEventListener("click", e => {
            console.log(e.target)
        })
    });
    plus.forEach(ele => {
        ele.addEventListener("click", e => {
            console.log(e.target)
        })
    });
    minus.forEach(ele => {
        ele.addEventListener("click", e => {
            console.log(quantite.value)
            
        })
    });
}






