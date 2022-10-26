

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
