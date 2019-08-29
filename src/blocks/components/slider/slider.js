import $ from "jquery";
import "slick-carousel";

var $slider = $(".js-slider");
var $prevArrow = "<button href='javascript:void(0);' class='arrow arrow--prev'><svg class=\"icon icon-arrow-left\"><use xlink:href=\"img/sprites/sprite.svg#arrow-left\"/></svg></button>";
var $nextArrow = "<button href='javascript:void(0);' class='arrow arrow--next'><svg class=\"icon icon-arrow-right\"><use xlink:href=\"img/sprites/sprite.svg#arrow-right\"/></svg></button>";
var responsive = function () {
    if (window.innerWidth >= 124 && !$slider.hasClass("slick-initialized")) {
        $slider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: $prevArrow,
            nextArrow: $nextArrow,
            dots: true,
            infinite: false,
            focusOnSelect: true
        });
    } else if (window.innerWidth <= 1023 && $slider.hasClass("slick-initialized")) {
        $slider.slick("unslick");
    }
};
if ($slider.length > 0) {
    responsive();

    $(window).resize(function () {
        responsive();
    });
}