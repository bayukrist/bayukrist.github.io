$(document).ready(function () {
    $('.nav-link').click(function () {
        $('.nav-link').css('color', 'white');
        $(this).css('color', '#F8CD4F');
    });

    $('.navbar-brand').click(function () {
        $('.nav-link').css('color', 'white');
    });
});


$(window).on('load', function () {

    $('.HeaderContent h1').addClass('muncul');
    $('.HeaderContent h6').addClass('muncul');
    $('.HeaderContent img').addClass('muncul');

});

$(window).scroll(function () {
    var windowScroll = $(this).scrollTop();

    if (windowScroll > $('#about').offset().top - 700) {
        $('#about img').addClass('muncul');

        $('#about li').each(function (i) {
            setTimeout(function () {
                $('#about li').eq(i).addClass('muncul');
            }, 100 * i);
        });
    }

    if (windowScroll > $('#courses').offset().top - 700) {
        $('#courses .card').each(function (i) {
            setTimeout(function () {
                $('#courses .card').eq(i).addClass('muncul');
            }, 300 * (i + 1));
        });
    }

    if (windowScroll > $('#subjects').offset().top - 700) {
        $('#subjects .card').each(function (i) {
            setTimeout(function () {
                $('#subjects .card').eq(i).addClass('muncul');
            }, 300 * (i + 1));
        });
    }

    if (windowScroll > $('#experts').offset().top - 700) {
        $('#experts .card').each(function (i) {
            setTimeout(function () {
                $('#experts .card').eq(i).addClass('muncul');
            }, 300 * (i + 1));
        });
    }

    if (windowScroll > $('#contact').offset().top - 700) {
        $('#contact img').addClass('muncul');
    }
});