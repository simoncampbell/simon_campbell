define(['domReady',
        'jquery',
        'widgets'],
    function(domReady,
            jQuery) {

        var App = window.App || {};

        domReady(function(){
            App.init();
        });

        window.App = App;

        return App;
    }
);