

// menu slider 

let slider = document.querySelectorAll(".slider_one");
let bigImg = document.querySelector("#big_img");

slider.forEach(el => {
    el.addEventListener("click", _ =>{
        slider.forEach(box => {
            // remove selected class from all element
            box.classList.remove("selected");
        });
        // add class selected to element that clicked
        el.classList.add("selected");

        let selectedImg = el.children[0].children[0].src
        bigImg.src = selectedImg;
    });
})
