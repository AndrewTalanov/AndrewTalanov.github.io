"use strict";

window.onload = () => {

    const burgerMenu = document.querySelector('.burger__menu');
    const openBurger = document.querySelector("[data-open]");
    const closeBurger = document.querySelector("[data-close]");

    closeBurger.style.display = "none";

    document.querySelector("[data-open]").addEventListener('click', () => {
        burgerMenu.style.display = "block";
        openBurger.style.display = "none";
        closeBurger.style.display = "block";
    });

    document.querySelector("[data-close]").addEventListener('click', () => {
        burgerMenu.style.display = "none";
        closeBurger.style.display = "none";
        openBurger.style.display = "block";
    });

    




}