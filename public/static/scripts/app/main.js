define(['domReady',
        'jquery',
        'widgets'],
    function(domReady,
            jQuery) {

        var App = window.App || {};

        App.init = function(){

        };

        domReady(function(){
            App.init();
        });

        window.App = App;

        return App;
    }
);