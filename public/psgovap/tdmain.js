//scroll to top mobile
jQuery(document).ready(function ($) {
    $('#mobile-top').click(function () {
            $("html, body").animate({
                    scrollTop: 0
            }, 1000);
            return false;
    });
    
    $('#mobile-top2').click(function () {
            $("html, body").animate({
                    scrollTop: 0
            }, 1000);
            return false;
    });
});

//show when scroll top > 100px and width <= 768
jQuery(document).ready(function ($) {
    if (($(window).scrollTop() > 100) && ($(window).width() <= 768)) {
            $('.thanhdo-footer').fadeIn();
        } else {
            $('.thanhdo-footer').fadeOut();
        }

    $(window).scroll(function () {
        if (($(this).scrollTop() > 100) && ($(window).width() <= 768)) {
                $('.thanhdo-footer').fadeIn();
        } else {
                $('.thanhdo-footer').fadeOut();
        }
    });
});      

