jQuery(function ($) {
    $('.productSlider .slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        arrows: false,
        cssEase: 'linear'
    });
    $('.reviewsSlider .slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        arrows: false,
        cssEase: 'linear'
    });
    $('.similarProducts__slider .slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        arrows: false,
        cssEase: 'linear'
    });
    // $('.hidden').removeClass('hidden');
    // $('[data-src]').each(function (i,e) {
    //     $(this).attr('src', $(this).attr('data-src'));
    // });
});