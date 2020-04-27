$(function () {

    $('.header__menu-list a').on('click', function () {
        $.fancybox.close();
    });

    $(".header__btn").click(function () {
        $.fancybox.open({
            src: '#modal',
            baseClass: 'fsModal'
        });
    })

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
    $('.third-page__slider').owlCarousel({
        items: 3,
        nav: true,
        navSpeed: 800,
        dots: false
    });
    $('.fourth-page__slider').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        navSpeed: 800,
        dots: false
    });
    $('.acc__title').click(function (e) {
        var dropDown = $(this).closest('.acc__card').find('.acc__panel');
        $(this).closest('.acc').find('.acc__panel').not(dropDown).slideUp();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.acc').find('.acc__title.active').removeClass('active');
            $(this).addClass('active');
        }
        dropDown.stop(false, true).slideToggle();
        e.preventDefault();
    });
});