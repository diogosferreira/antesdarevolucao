$(document).ready(function () {
  // SEARCH ———————————————————————————————————
  // SEARCH ———————————————————————————————————
  // SEARCH ———————————————————————————————————

  $(".search-button").click(function (event) {
    $(".grid-button").click();
  });

  //clear search input when is closed
  $(".search-close-icon").click(function (event) {
    $("input:text").val("");
  });

  $(".timeline-button").click(function (event) {
    $(".search-close-icon").click();
  });

  // LINKS SLIDER ——————————————————————————————————
  // LINKS SLIDER ——————————————————————————————————
  // LINKS SLIDER ——————————————————————————————————

  $(".is-ouvir").each(function () {
    var currentElemSource = $(this).attr("href");
    var new_link = currentElemSource + "#ouvir";
    $(this).attr("src", new_link);
    $(this).attr("href", new_link);
  });

  $(".is-arquivo-link").each(function () {
    var currentElemSource = $(this).attr("href");
    var new_link = currentElemSource + "#arquivo-rtp";
    $(this).attr("src", new_link);
    $(this).attr("href", new_link);
  });

  $(".is-entrevistados").each(function () {
    var currentElemSource = $(this).attr("href");
    var new_link = currentElemSource + "#entrevistados";
    $(this).attr("src", new_link);
    $(this).attr("href", new_link);
  });

  // HOVER BOTÕES VISTAS ———————————————————————————————————
  // HOVER BOTÕES VISTAS ———————————————————————————————————
  // HOVER BOTÕES VISTAS ———————————————————————————————————

  $(".timeline-button").find(".view-type-title").addClass("filter-active");

  $(".grid-button").click(function (event) {
    $(".timeline-button").find(".view-type-title").removeClass("filter-active");
    $(this).find(".view-type-title").addClass("filter-active");
  });

  $(".timeline-button").click(function (event) {
    $(".grid-button").find(".view-type-title").removeClass("filter-active");
    $(this).find(".view-type-title").addClass("filter-active");
  });

  $(".emulate-button").hover(
    function () {
      $(this).find(".view-type-title").css("color", "rgba(255,255,255,1)");
    },
    function () {
      $(this).find(".view-type-title").css("color", "rgba(255,255,255,.4)");
    }
  );

  // HOME SLIDER ———————————————————————————————————
  // HOME SLIDER ———————————————————————————————————
  // HOME SLIDER ———————————————————————————————————

  const not_active_slide_scale_value = 0.75;
  const not_active_slide_opacity_value = 1;

  var swiper = new Swiper(".swiper-movies", {
    speed: 900,
    /*autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },*/
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2.6,
    spaceBetween: 0,
    effect: "creative",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      disabledClass: "swiper-button-disabled"
    },
    creativeEffect: {
      limitProgress: 2, // slides after 2nd before/after active will have same state
      prev: {
        opacity: not_active_slide_opacity_value,
        scale: not_active_slide_scale_value,
        // will set `translateX(-95%)` on previous slides
        translate: ["-92%", 0, 0]
      },
      next: {
        opacity: not_active_slide_opacity_value,
        scale: not_active_slide_scale_value,
        // will set `translateX(95%)` on next slides
        translate: ["92%", 0, 0]
      }
    },
    pagination: {
      el: ".swiper-pagination"
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        spaceBetween: 0
      },
      1024: {
        slidesPerView: 1.5,
        spaceBetween: 0
      },
      1400: {
        slidesPerView: 2.59,
        spaceBetween: 0
      }
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false
    },
    on: {
      init: function () {
        //show div when slider e set
        $(".section_slider").css("opacity", "1");
      }
    }
  });

  // DEFINE ACTIVE SLIDE ————————————————————
  // DEFINE ACTIVE SLIDE ————————————————————
  // DEFINE ACTIVE SLIDE ————————————————————

  var slideNumber = $(".episode-link-block").length;
  slideNumber = slideNumber - 1;

  swiper.slideTo(slideNumber, 0);
});
