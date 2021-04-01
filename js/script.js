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
            burgerMenu.style.display = "block";
        } else {
            burgerMenu.style.display = "none";
        }
        

    });

    // -------------

    




}