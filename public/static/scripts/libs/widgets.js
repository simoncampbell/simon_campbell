/**
 * Load UI widgets and auto initing DOM stuff
 */
define(['domReady',
        'jquery',
        'widgets/grid-toggle',
        'widgets/mobile-menu',
        'widgets/carousel',
        'widgets/lightbox',
        'widgets/popup'],
        function(domReady, jQuery, GridToggle) {
            App = window.App || {};

            domReady(function(){
                App.gridToggle = new GridToggle();
            });
        }
);

