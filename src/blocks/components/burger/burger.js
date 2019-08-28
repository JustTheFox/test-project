modules.define('burger', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                var $burgerLink = $('.js-open-menu');

                if ($burgerLink.length && $burgerCont.length) {
                    $burgerLink.on('click', function (e) {
                        $burgerLink.toggleClass('open');
                    });
                }
            }
        }
    }
}));

});
