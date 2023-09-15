$(document).ready(function () {
  $(".menu-link").hover(
    function () {
      $(".menu-link:not(:hover)").css("opacity", "0.5");
      $(".link-arrow:not(:hover)").css("opacity", "0");
    },
    function () {
      $(".menu-link").css("opacity", "1");
      $(".link-arrow").css("opacity", "0");
    }
  );

  //FOOTER —————————————————————————————————————————
  //FOOTER —————————————————————————————————————————
  //FOOTER —————————————————————————————————————————
  //FOOTER —————————————————————————————————————————
  let date = new Date();
  const year = date.getFullYear();

  $(".copyright-text").text("© Antes da Revolução " + year);
});
