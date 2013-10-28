/**
 * Load UI widgets and auto initing DOM stuff
 */
define(['domReady',
        'jquery',
        'widgets/carousel',
        'widgets/grid-toggle'],
        function(domReady, jQuery, GridToggle) {
            App = window.App || {};

            domReady(function(){
                if (App.debug) {
                    App.gridToggle = new GridToggle();
                }
            });
        }
);

