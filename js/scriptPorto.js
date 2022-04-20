$(window).on('load', function () {
    $('.HeaderContent').addClass('muncul');

    $('.ImageContent img').each(function (i) {
        setTimeout(function () {
          $('.ImageContent img').eq(i).addClass('muncul');
        }, 200 * (i + 1));
      });
  });