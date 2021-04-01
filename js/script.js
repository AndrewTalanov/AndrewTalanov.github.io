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

    //  Slider img
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

    // Slider img animation

    const slidesField = document.querySelector(".slider__inner");
    const slidesWrapper = document.querySelector(".slider__vision");
    
    let offset = 0;
    
    const width = window.getComputedStyle(slidesWrapper).width;

    slidesField.style.width = 352 * BD.length + "px";

    // btn (left right)
    const btnLeft = document.querySelector("[data-left]");
    const btnRight = document.querySelector("[data-right]");

    btnRight.addEventListener("click", () => {

        if (offset >= 325 * (BD.length - 1) ) {
            offset = 0; 
        } else {
            offset += +width.slice(0, width.length - 2) / 2;

        }

        slidesField.style.transform = `translateX(-${offset}px)`;
    });

    btnLeft.addEventListener("click", () => {

        if (offset <= 0 ) {
            offset += +width.slice(0, width.length - 2) / 2;
        } else {
            offset = -(325 * (BD.length - 1)); 
            
        }

        slidesField.style.transform = `translateX(${offset}px)`;
    });

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
            const commentItem = document.createElement("div");
            commentItem.classList.add(".parent__comment__slider" );
            commentItem.innerHTML = `
                <div class="item__comment__slider">
                    <p>${this.comment}
                    </p>
                </div>
                <div class="under__item">
                    <div class="name__comment">
                        <p><span class="name">${this.author}</span> — ${this.profession}</p>
                    </div>
                    <div class="btn__slider__comment">
                        <img src="assets/icons/btn__slider.png" alt="btn" data-comL>
                        <img src="assets/icons/btn__slider__right.png" alt="btn" data-comR>
                    </div>
                </div>
            `;

            document.querySelector(".block__comments").append(commentItem);
        }
    }

    new LoadingComments(BDc[0].comment, BDc[0].name, BDc[0].profession).load();

    let btnComRight = document.querySelector('[data-comR]');
    const btnComLeft = document.querySelector('[data-comL]');

    let i = 0;

    btnComRight.addEventListener("click", () => {

        i++;
        if (i == BDc.length) {
            i = 0;
        }

        new LoadingComments(BDc[i].comment, BDc[i].name, BDc[i].profession).load();
        
        btnComRight = document.querySelectorAll('[data-comR]');
        btnComRight.forEach(item => {
            item.setAttribute('data-comR', '');
        });
    });
    


    


    

    




}