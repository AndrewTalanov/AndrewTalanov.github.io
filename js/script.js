"use strict";

window.onload = () => {

    // Burger Menu
    
    const btnBurgerMenu = document.querySelector('.btn__brg__menu');
    const burgerMenu = document.querySelector('.burger__menu');

    // button animation
    btnBurgerMenu.addEventListener("click", (event) => {
        event.preventDefault();

        btnBurgerMenu.classList.toggle("is__active");

        if (btnBurgerMenu.matches(".is__active")) {
            burgerMenu.style.opacity = "1";
            burgerMenu.style.visibility = "visible";
        } else {
            burgerMenu.style.opacity = "0";
            burgerMenu.style.visibility = "hidden";
        }
        

    });

    // -------------

    //  Slider
    const BD = [
        "slider1.png",
        "slider2.png",
        "slider3.png",
        "slider1.png",
        "slider2.png",
        "slider3.png",
        "111.jpg",
        "112.png",
        "113.jpg",
        "114.jpg",
    ]

    class Loading {
        constructor (img) {
            this.img = img
        }

        load () {
            const sliderItem = document.createElement('div');
            sliderItem.classList.add("slider__item");
            sliderItem.innerHTML = `
                <img src="assets/images/${this.img}" alt="slider item">
            `;

            const sliderInner = document.querySelector('.slider__inner');
            sliderInner.append(sliderItem);
        }
    }
    
    BD.forEach((item) => {
        new Loading(item).load();
    });

    // Slider animation

    const slidesField = document.querySelector(".slider__inner");
    const slidesWrapper = document.querySelector(".slider__vision");

    let offset = 0;
    
    const width = window.getComputedStyle(slidesWrapper).width;

    console.log(width);

    slidesField.style.width = 100 * BD.length + "%";

    // btn (left right)
    const btnLeft = document.querySelector("[data-left]");
    const btnRight = document.querySelector("[data-right]");
    
    btnRight.addEventListener("click", () => {

        if (offset == +width.slice(0, width.length - 2) ) {
            offset = 0; 
        } else {
            offset += +width.slice(0, width.length - 2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
    });

    btnLeft.addEventListener("click", () => {
        if (offset == 0 ) {
            offset = -width.slice(0, width.length - 2); 
        } else {
            offset -= +width.slice(0, width.length - 2);
        }

        slidesField.style.transform = `translateX(${offset}px)`;
    });
    


    

    




}