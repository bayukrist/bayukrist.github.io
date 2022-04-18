$(window).on('load', function () {

    $('.headTitle .head').addClass('muncul');
    $('.headTitle h4').addClass('muncul');
    $('.imghead').addClass('muncul');

});

$(window).scroll(function () {
    var windowScroll = $(this).scrollTop();

    $('.headTitle .head').css({
        'transform': 'translate(0px,' + windowScroll / 5 + '%)'
    });


    $('.imghead').css({
        'transform': 'translate(0px,' + windowScroll / 50 + '%)'
    });

    if (windowScroll > $('#about').offset().top - 700) {
        $('#about .judul-1').addClass('muncul');
        $('#about p').addClass('muncul');

        $('#about .bordercard').each(function (i) {
            setTimeout(function () {
                $('#about .bordercard').eq(i).addClass('muncul');
            }, 300 * (i + 1));
        });
    }

    if (windowScroll > $('#collections').offset().top - 700) {
        $('#collections .judul-1').addClass('muncul');

        $('#collections .catalog').each(function (i) {
            setTimeout(function () {
                $('#collections .catalog').eq(i).addClass('muncul');
            }, 300 * (i + 1));
        });
    }

    if (windowScroll > $('#features').offset().top - 700) {
        $('#features .judul-1').addClass('muncul');

        $('#features img').addClass('muncul');

        $('#features .bordercard').each(function (i) {
            setTimeout(function () {
                $('#features .bordercard').eq(i).addClass('muncul');
            }, 300 * (i + 1));
        });
    }

    if (windowScroll > $('#feedback').offset().top - 700) {
        $('#feedback .judul-1').addClass('muncul');
        $('#feedback p').addClass('muncul');
    }

    if (windowScroll > $('#contact').offset().top - 700) {
        $('#contact .judul-1').addClass('muncul');
        $('#contact img').addClass('muncul');
    }
});

