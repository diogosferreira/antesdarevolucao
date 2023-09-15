$(document).ready(function () {
  //NORMAL — Só slide
  //NORMAL — Só slide
  //NORMAL — Só slide

  var swiper = new Swiper(".swiper-movies", {
    slidesPerView: "auto",
    centeredSlides: false,
    speed: 900,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      0: {
        spaceBetween: 16
      },
      1024: {
        spaceBetween: 30
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      disabledClass: "swiper-button-disabled"
    }
  });

  // CAPTIONS ————————————
  // CAPTIONS ————————————
  // CAPTIONS ————————————

  $(".gallery-slider-image").each(function () {
    let alt = $(this).attr("alt");
    if (alt) {
      $(this).siblings(".gallery-image-caption").text(alt);
    }
  });
});
