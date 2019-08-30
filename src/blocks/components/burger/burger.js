import $ from "jquery";

$(document).ready(function(){
    var $burgerLink = $(".js-open-menu");
    var $burgerMenu = $(".js-menu");

    $burgerLink.on("click", function () {
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
            $burgerLink.removeClass("active");
            $burgerMenu.removeClass("active");
            $burgerMenu.fadeOut( "300ms" );
        }
    });
});