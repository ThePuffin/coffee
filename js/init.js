(function ($) {
  // function for next slide
  $('.next').click(function () {
    $('.carousel').carousel('next');
  });

  // function for prev slide
  $('.prev').click(function () {
    $('.carousel').carousel('prev');
  });
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true,
    duration: 200,
  });
  $(function () {
    $('.sidenav').sidenav();
    $('.parallax').parallax();
  }); // end of document ready
})(jQuery); // end of jQuery name space
