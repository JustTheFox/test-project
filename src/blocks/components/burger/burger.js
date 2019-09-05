import $ from "jquery";

$(document).ready(function(){
    var $html = $("html");
    var $burgerLink = $(".js-open-menu");
    var $burgerMenu = $(".js-menu");

    $burgerLink.on("click", function () {
        $html.toggleClass("overflow");
        $burgerLink.toggleClass("active");
        $burgerMenu.toggleClass("active");

        if (!$burgerMenu.hasClass("active")) {
            $burgerMenu.fadeOut( "300ms" );
        } else {
            $burgerMenu.fadeIn( "300ms" );
        }
    });
    $(this).keydown(function(e) {
        if (e.keyCode == 27) {
            $html.removeClass("overflow");
            $burgerLink.removeClass("active");
            $burgerMenu.removeClass("active");
            $burgerMenu.fadeOut( "300ms" );
        }
    });
});