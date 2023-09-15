$(document).ready(function () {
  // EPISODE TITLE MIXED FONT —————————————
  // EPISODE TITLE MIXED FONT —————————————
  // EPISODE TITLE MIXED FONT —————————————
  const page_title = $("h1").text();
  const title_words = page_title.split(" ");
  const number_words = title_words.length;
  const half_words = Math.round(number_words / 2);

  var first_half = title_words.slice(0, half_words);
  var second_half = title_words.slice(half_words, title_words.length);
  var first_half_with_spaces = "";
  var second_half_with_spaces = "";

  for (let i = 0; i < first_half.length; i++) {
    first_half_with_spaces += first_half[i] + " ";
  }

  for (let i = 0; i < second_half.length; i++) {
    second_half_with_spaces += second_half[i] + " ";
  }

  var $first_sentece_half = $(
    "<h1> <span class='episode-title-editorial-new'> " +
      first_half_with_spaces +
      "</span>" +
      second_half_with_spaces +
      "</div>"
  );

  $(".episode-title-text_wrapper").empty();
  $(".episode-title-text_wrapper").append($first_sentece_half);

  // NEXT PREV EPISODES —————————————
  // NEXT PREV EPISODES —————————————
  // NEXT PREV EPISODES —————————————
  $(".is-prev-episode-wrapper").css("opacity", "0");
  $(".is-next-episode-wrapper").css("opacity", "0");
  $(".next-prev-collection-list-wrapper").css("opacity", "0");

  setTimeout(() => {
    if ($(".next-episode-content").html().length > 0) {
      $(".is-next-episode-wrapper").css("opacity", "1");
    } else {
      $(".is-next-episode-wrapper").remove();
    }

    if ($(".prev-episode-content").html().length > 0) {
      $(".is-prev-episode-wrapper").css("opacity", "1");
    } else {
      $(".is-prev-episode-wrapper").remove();
    }
  }, "100");

  // REMOVE PREV NEXT SECTION SE SO TIVER 1 EPISODIO ATIVO ————————————
  // REMOVE PREV NEXT SECTION SE SO TIVER 1 EPISODIO ATIVO ————————————
  // REMOVE PREV NEXT SECTION SE SO TIVER 1 EPISODIO ATIVO ————————————

  var numberofprevnext_episodes = $(".episode-link-block").length;
  numberofprevnext_episodes = numberofprevnext_episodes;

  if (numberofprevnext_episodes == 1) {
    $(".section-prev-next-episodes").remove();
  }

  // SHARE BUTTON ————————————————————————
  // SHARE BUTTON ————————————————————————
  // SHARE BUTTON ————————————————————————

  let title = document.title;
  let url = window.location.href;
  $("[data-share-facebook").attr(
    "href",
    "https://www.facebook.com/sharer/sharer.php?u=" +
      url +
      "%2F&title=" +
      title +
      "%3F"
  );
  $("[data-share-facebook").attr("target", "_blank");

  $("[data-share-twitter").attr(
    "href",
    "https://twitter.com/share?url=" + url + "%2F&title=" + title + "&summary="
  );
  $("[data-share-twitter").attr("target", "_blank");

  $("[data-share-whatsapp").attr("href", "https://wa.me/?text=" + url);
  $("[data-share-whatsapp").attr("target", "_blank");
});
