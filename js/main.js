$(function () {
  new WOW().init();

  $(".menu__btn").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("menu__btn_active");
    $(".menu__list").toggleClass("menu__list_active");
    $("body").toggleClass("fixed-page");
  });

  $(".reviews__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    fade: true,
    infinite: true,
    asNavFor: ".reviews__content-slider",
    prevArrow:
      '<svg class="arrow-left" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27 16H5" stroke="#7B7B7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 7L5 16L14 25" stroke="#7B7B7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    nextArrow:
      '<svg class="arrow-right" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 16H27" stroke="#77808B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 7L27 16L18 25" stroke="#77808B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  });

  $(".reviews__content-slider").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    dots: false,
    fade: true,
    arrows: false,
    infinite: true,
    asNavFor: ".reviews__slider",
    swipe: false,
  });
});
