import $ from "jquery";
import "slick-carousel";

var $slider = $(".js-slider");
var $prevArrow = "<a href='javascript:void(0);' class='arrow arrow--prev' title=''></a>";
var $nextArrow = "<a href='javascript:void(0);' class='arrow arrow--next' title=''></a>";
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