$(document).ready(function () {
});

$('.first li').click(function () {
  $(this).toggleClass("shadow-1").siblings();
  $(this).toggleClass("fill-color").siblings();
});

var typed = new Typed('.animate', {
  strings: [
    'simple',
    'impactful'
  ],
  typeSpeed: 70,
  backSpeed: 70,
  loop: true
});

$(window).on('load', function () {
  $('.HeaderContent').addClass('muncul');
  $('.catalog').each(function (i) {
    setTimeout(function () {
      $('.catalog').eq(i).addClass('muncul');
    }, 300 * (i + 1));
  });
});