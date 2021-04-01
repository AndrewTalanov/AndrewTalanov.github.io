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





    

    




}