$(function () {
  //   addClass fixed to Header
  let introH = $("#intro").innerHeight();
  let header = $("#header");
  let scrollOffset = $(window).scrollTop();

  checkScroll(scrollOffset);
  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  //   Smooth scroll
  $("[data-scroll]").on("click", function (e) {
    e.preventDefault();

    let elementId = $(this).data("scroll");
    let elementOffset = $(elementId).offset().top;

    $("#nav a").removeClass("active");
    $(this).addClass("active");

    $("html, body").animate(
      {
        scrollTop: elementOffset + 1,
      },
      500
    );
  });

  // menu nav toggle
  $("#nav_toggle").on("click", function (e) {
    e.preventDefault();

    $("#nav").toggleClass("active");
    $(this).toggleClass("active");
  });

  // accordion
  $("[data-collapse]").on("click", function (e) {
    e.preventDefault();

    let accordionEl = $(this).data("collapse");

    $(accordionEl).slideToggle();
    $(this).toggleClass("active");
  });

  // slider reviews 
  $("[data-slider]").slick({
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });


});
