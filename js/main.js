//navbar button responsive
let span  = document.querySelectorAll(".icon span") ;
let btn_nav = document.querySelector(".icon") ;

btn_nav.onclick = function() {

    let navMenu = document.querySelector(".navbar-container .navbar-links");

    if(navMenu.classList.contains("show")){

        navMenu.classList.remove("show")

    }else {

        navMenu.classList.add("show")

    }

    document.querySelectorAll(".icon span").forEach(atr => {

        if(atr.classList.contains("opacity") || atr.classList.contains("rotate-plus") || atr.classList.contains("rotate-mains")){

            span[1].classList.toggle("opacity");

            span[2].classList.toggle("rotate-plus");

            span[0].classList.toggle("rotate-mains");

            span[2].style = "top:0px;" ;

            span[0].style = "top:16px;" ;

            this.style = "transform: rotate(360deg);" ;

        }else {

            span[1].classList.add("opacity");

            span[2].classList.add("rotate-plus");

            span[0].classList.add("rotate-mains");

            span[2].style = "top:6px;" ;

            span[0].style = "top:6px;" ;

            this.style = "transform: rotate(-360deg);" ;

        }

    });

}
//Go to Chosen Page
let pages = document.querySelectorAll(".navbar-list a") ;
checker(pages);

pages.forEach(page => {

    page.addEventListener("click", e => {

        if(e.target.dataset.show === "menu"){

            document.querySelectorAll(".activision").forEach(active =>{

                active.classList.add("not-active");

            });

            document.querySelector(".menu").classList.remove("not-active");

        }else if (e.target.dataset.show === "about"){

            document.querySelectorAll(".activision").forEach(active =>{

                active.classList.add("not-active");

            });

            document.querySelector(".about").classList.remove("not-active");

        }else if (e.target.dataset.show === "bookTable"){

            document.querySelectorAll(".activision").forEach(active =>{

                active.classList.add("not-active");

            });

            document.querySelector(".bookTable").classList.remove("not-active");

        }else if (e.target.dataset.show === "home"){

            document.querySelectorAll(".activision").forEach(active =>{

                active.classList.remove("not-active");

            });

        }

    });

});

//filter menu
let filter = document.querySelectorAll(".menu-filter li") ;
checker(filter);

let foods = document.querySelectorAll(".menu-box") ;
filter.forEach(li => {

    li.addEventListener("click", e => {

        foods.forEach(food => {

            food.classList.add("disabled");

            food.classList.remove("chosen");

            setTimeout(() => {food.style.display = "none" ;}, 500);

        });

        document.querySelectorAll(e.target.dataset.cat).forEach(el => {

            el.classList.add("chosen");

            el.classList.remove("disabled");

            setTimeout(() => {el.style.display = "block" ;}, 500);

        });

    });

});

//checking if elements has class active and add it
function checker([...params]) {

    params.forEach( param => {

    param.addEventListener("click", function(){

            params.forEach(param => {

                param.classList.remove("active");

                this.classList.add("active");

            });

    })

    });

};

//form select how many persons
document.querySelector(".dropdown .value").textContent = document.querySelector(".option.active").textContent;

let options = document.querySelectorAll(".form-list .option");
checker(options);

options.forEach(option => {

    option.addEventListener("click", _ => {

        document.querySelector(".dropdown").classList.toggle("open"); 

        document.querySelector(".form-list").classList.remove("select");

        document.querySelector(".dropdown .value").textContent = document.querySelector(".option.active").textContent;

    });

})

document.querySelector(".dropdown .value").onclick = _ =>{

    document.querySelector(".form-list").classList.toggle("select");

    document.querySelector(".dropdown").classList.toggle("open"); 

};

//landing-carousel
$('.owl-carousel.landing-carousel').owlCarousel({
    autoplay: true,
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:1
        },
        800:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

//clintComment-carousel
$('.owl-carousel.clintComment-carousel').owlCarousel({
    dots: false,
    autoplay: true,
    autoplayTimeout:5000,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:1
        },
        800:{
            items:2
        },
        1000:{
            items:2
        }
    }
})

//scroll to top logic
window.onscroll = _ =>{

    document.querySelector(".scroll-to-top").onclick = _ => {
        window.scrollTo({
            top:0,
            behavior:"smooth",
        })
    }

    if(scrollY >= 600){

        document.querySelector(".scroll-to-top").classList.add("scroll-to-top-show");

    }else {

        document.querySelector(".scroll-to-top").classList.remove("scroll-to-top-show");

    }
}