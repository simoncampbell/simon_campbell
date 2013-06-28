var EDJ = (function($, window, undefined){
// Set up our global Erskine Design Javascript object
var
// console,
 EDJ = {
    settings: {
        debug: true,
        STATIC_URL: '/static/'
    },
    run_list: [],
    $body: {}
    };

EDJ.run_list = [
    'mobile_menu'
];



/**
 * On ready
 *
 * Called when document is ready
 *
 * Used on: all pages
 *
 * @param settings
 * ---------------------------------------------------------------------------------------------------
*/
EDJ.on_ready = function(settings) {
    var i = 0,
        functions_to_run = EDJ.run_list.length;

    // Extend the settings object with any vars passed in
    $.extend(EDJ.settings, settings);

    // Cache the body object for use later
    EDJ.$body = $('body');

    // Loop through our functions and run those that exist and said they should
    for (i=0; i<functions_to_run; i++) {
        // If the init function exists, and the run key is set to true
        if (
            (typeof EDJ[EDJ.run_list[i]].run === 'function' && EDJ[EDJ.run_list[i]].run() === true) ||
            (typeof EDJ[EDJ.run_list[i]].run === 'boolean' && EDJ[EDJ.run_list[i]].run === true)
        ) {
            // Log that we've called the init function
            EDJ.log('initialising EDJ.'+EDJ.run_list[i]);

            // Call the init function!
            EDJ[EDJ.run_list[i]].init();

            // Log that we've finished the init function
            EDJ.log('finished running EDJ.'+EDJ.run_list[i]);

        }

    }

};




/**
 * Log
 *
 * Will log any arguments (arrays, objects, strings etc.) to the console
 * if it exists, and EDJ.settings.debug is set to true
 *
 * Used on: all pages
 *
 * ---------------------------------------------------------------------------------------------------
*/
EDJ.log = function() {
    if (EDJ.settings.debug === true && typeof(console) !== 'undefined') {
        console.log('[EDJ] ' + Array.prototype.join.call(arguments, ' '));
    }
};






// Drop down navigation for the network nav
// ---------------------------------------------------------------------------------------------------
EDJ.mobile_menu = {
    $mobile_menu: {},

    run: true,
    init: function() {
        $(".link__mobile-menu").click(function(event) {
            event.preventDefault();
            $('#nav_pri').find('ul').addClass('active');

        });
    }
};




return EDJ
}(jQuery, window, undefined))