jQuery(function ($) {
    $('.productSlider__container .slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        arrows: false,
        cssEase: 'linear'
    });
    $('.reviewsSlider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        arrows: false,
        cssEase: 'linear'
    });
});