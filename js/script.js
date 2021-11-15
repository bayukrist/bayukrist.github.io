$(document).ready(function () {
    $("#navHome").click(function() { 
        $("#contentPortfolio").hide();
        $("#contentHome").fadeIn(1500);
        
    });

    $("#navPorto").click(function() { 
        $("#contentHome").hide();
        $("#contentPortfolio").fadeIn(1500);
       
    });

    $('.nav-link').click(function () {
        $('.nav-link').css('color', '#3F3351');
        $(this).css('color', 'gray');
    });

});