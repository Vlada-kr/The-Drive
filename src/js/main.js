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
});