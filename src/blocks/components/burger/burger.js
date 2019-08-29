import $ from "jquery";

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

// modules.define("burger", ["i-bem-dom"], function(provide, bemDom) {

//     provide(bemDom.declBlock(this.name, {
//         onSetMod: {
//             js: {
//                 inited: function() {
//                     var $burgerLink = $("js-open-menu");
//                     console.log("kek");
//                     $burgerLink.on("click", function () {
//                         console.log("lol");
//                         $burgerLink.toggleClass("active");
//                     });
//                 }
//             }
//         }
//     }));

// });
