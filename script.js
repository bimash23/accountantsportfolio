//brand-slider
var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction:false,
    },
    breakpoints:{
      450: {
          slidesPerView: 2,
      },
      768: {
          slidesPerView: 3,
      },
      991: {
          slidesPerView: 4,
       },
      1200:{
          slidesPerView: 5,
      }, 
    },
});

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    autoplayTimeout: 2500,
    margin:10,
    nav:true,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

var swiper = new Swiper(".case-slider", {
    spaceBetween:30,
    loop: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction:false,
    },

    pagination: {
        el: ".swiper-pagination",
      },

    breakpoints:{
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024:{
            slidesPerView:3,
        },
    },
});


const faqs = document.querySelectorAll(".FAQ-QA");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

