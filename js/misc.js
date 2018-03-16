$(document).ready(function () {

    $('a[href^="#"]').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top + 1}, 800);
        return false;
    });

    $(".close").hide();
    $(".hamburger").click(function () {
        $(".menu").fadeTo("fast", 1, function () {
            $(".hamburger").hide();
            $(".close").show();
            $(this).css("z-index", "1");
        });
    });

    $(".close").click(function () {
        closeMenu();
    });

    $(".menu").find("a").click(function () {
        closeMenu();
    });

    $( window ).resize(function() {
        closeMenu();
    });

    function closeMenu() {
        $(".menu").fadeTo("fast", 0, function () {
            $(".close").hide();
            $(".hamburger").show();
            $(this).css("z-index", "0");
        });
    }

});