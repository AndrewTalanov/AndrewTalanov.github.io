"use strict";

window.addEventListener('DOMContentLoaded', () => {

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
        "slider3.png",
        "slider1.png",
        "slider3.png"
    ]

    class LoadingImg {
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
        new LoadingImg(item).load();
    });

    const btnLeft = document.querySelector("[data-left]");
    const btnRight = document.querySelector("[data-right]");
    const slidesField = document.querySelector(".slider__inner");
    let offset = 0;
    
    slidesField.style.width = 323 * BD.length + "px";

    let n = 0;
    function endSlide() {
        if (screen.width >= 1440) {
            return n = 4;
        }
        else if (screen.width >= 768 && screen.width < 1440) {
            return n = 2;
        }
        else if (screen.width >= 320 && screen.width < 768) {
            return n = 1;
        }
    }
    // btn (left right) 

    btnRight.addEventListener("click", () => {
        clickRight();
    });

    btnLeft.addEventListener("click", () => {
        clickLeft();
    });

    function clickRight() {
        if (offset == -( 323 * (BD.length - endSlide(n)))) {
            offset = 0; 
        } else {
            offset -= 323;
        }

        slidesField.style.transform = `translateX(${offset}px)`;
    }
    function clickLeft() {
        if (offset == 0 ) {
            offset -= 323 * (BD.length - endSlide(n)); 
        } else {
            offset += 323;
        }

        slidesField.style.transform = `translateX(${offset}px)`;
    }

    // свайп слайдера
    let xDown = 0;
    
    // Человек нажал на экран
    slidesField.addEventListener('touchstart', touchStart, false);

    // человек движет по экрану     
    slidesField.addEventListener('touchmove', touchMove, false);

    function touchStart(e) {
        xDown = e.touches[0].clientX;
    };

    function touchMove(e) {
        if (!xDown) {
            return;
        }

        let xUp = e.touches[0].clientX;
        
        let xDiff = xDown - xUp;
        
        if ( xDiff > 0 ) {
            clickRight();
        } else {
            clickLeft();
        }                       
        
        xDown = 0;
    };


    // Slider comments 

    const BDc = [
        {
            comment: "1)We just wanted to thank you for this fantastic website! We are so grateful for being able to advertise our Petite cabin and receive feedback from people from all over the U.S. and even further.",
            name: "Adam Morph",
            profession: "CEO Alfatech"
        },
        {
            comment: "2)We just wanted to thank you for this fantastic website! We are so grateful for being able to advertise our Petite cabin and receive feedback from people from all over the U.S. and even further.",
            name: "Andrew Ya",
            profession: "Da"
        },
        {
            comment: "3)We just wanted to thank you for this fantastic website! We are so grateful for being able to advertise our Petite cabin and receive feedback from people from all over the U.S. and even further.",
            name: "En Gre",
            profession: "four"
        }
    ];

    class LoadingComments {
        constructor (comment, author, profession) {
            this.comment = comment,
            this.author = author,
            this.profession = profession
        }

        load () {
            const comment = document.querySelector(".item__comment__slider");
            comment.innerHTML = `
                <p>${this.comment}</p>
            `;

            const autor = document.querySelector(".name");
            autor.innerHTML = `
                ${this.author}
            `;

            const profession = document.querySelector(".profession");
            profession.innerHTML = `
                ${this.profession}
            `;  
        }
    }
        
    new LoadingComments(BDc[0].comment, BDc[0].name, BDc[0].profession).load();

    let btnComRight = document.querySelector('[data-comR]');
    const btnComLeft = document.querySelector('[data-comL]');

    let i = 0;

    btnComRight.addEventListener("click", () => {
        i++;
        if (i > BDc.length - 1) {
            i = 0;
        }
        new LoadingComments(BDc[i].comment, BDc[i].name, BDc[i].profession).load();
    });
    
    btnComLeft.addEventListener("click", () => {
        i--
        if (i < 0) {
            i = BDc.length - 1;
        }
        new LoadingComments(BDc[i].comment, BDc[i].name, BDc[i].profession).load();
    });


    


    

    




});