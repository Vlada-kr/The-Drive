$(function () {

    $('.header__menu-list a').on('click', function () {
        $.fancybox.close();
    });
    $.fancybox.defaults.animationEffect = "zoom-in-out";
    $('#fullpage').fullpage({
        fadingEffect: true,
        autoScrolling: true,
    });
    //methods
    $.fn.fullpage.setAllowScrolling(true);
    $('.second-page__slider').owlCarousel({
        items: 1,
        nav: true,
        navSpeed: 800
    });
    $('.testimonials__slider').owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        autoplaySpeed: 800,
        animateOut: 'fadeOut'
    });
    
});