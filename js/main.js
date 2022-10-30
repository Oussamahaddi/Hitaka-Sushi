

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
let quantite = document.getElementById("quantite");
let price = document.getElementById("price");
let orderNow = document.querySelectorAll(".order_btn");  // order now
    // all items
let allItem = document.querySelectorAll("#sushi");
let test = document.querySelector("#product_pic");
let buy = document.getElementById("add_element");



orderNow.forEach(el => {
    el.addEventListener("click", e => {

        //newObj.img = e.target.parentNode.parentNode

        newObj.img = e.target.parentNode.parentNode.children[0].children[0].src;
        newObj.name = e.target.parentNode.parentNode.children[0].children[1].textContent;
        newObj.quantite = e.target.parentNode.parentNode.children[1].children[0].children[1].value;
        newObj.price = e.target.parentNode.parentNode.children[0].children[2].textContent;
        buy.innerHTML += `
                <div class="item_buy">
                    <img src="${newObj.img}" alt="">
                    <div class="name_price">
                        <h5>${newObj.name}</h5>
                        <p>${newObj.quantite} x ${newObj.price}</p>
                    </div>
                    <img src="./images/icons/icon-close.svg" alt="" id="delet_items">
                </div>
            `;
            

    })
});


    // plus.forEach(ele => {
    //     ele.addEventListener("click", e => {
    //         console.log(e.target)
    //     })
    // });
    // minus.forEach(ele => {
    //     ele.addEventListener("click", e => {
    //         console.log(e.target.parentNode.parentNode.parentNode)
    //     })
    // });






