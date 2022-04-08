$(document).ready(function () {
    // $("#navHome").click(function() { 
    //     $("#contentPortfolio").hide();
    //     $("#contentHome").fadeIn(1500);
        
    // });

    // $("#navPorto").click(function() { 
    //     $("#contentHome").hide();
    //     $("#contentPortfolio").fadeIn(1500);
       
    // });

    // $('.nav-link').click(function () {
    //     $('.nav-link').css('color', '#3F3351');
    //     $(this).css('color', 'gray');
    // });

});

$('.first li').click(function(){
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

  $(window).on('load', function(){
    $('.HeaderContent').addClass('muncul');
    $('.catalog').each(function (i) { 
        setTimeout(function(){
           $('.catalog').eq(i).addClass('muncul');
        }, 300 * (i+1));
   });
});