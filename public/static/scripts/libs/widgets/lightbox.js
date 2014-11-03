//////////////////////////////////////
//                                  //
//         LIGHTBOX.JS              //
//                                  //
//////////////////////////////////////
///
///

/**
 * Based on Brad Frost’s responsive lightbox pattern: http://codepen.io/bradfrost/pen/tfCAp
 */


define(['domReady', 'jquery'], function(domReady, jQuery) {

    domReady(function(){

        lightboxInit();
        size = window.getComputedStyle(document.documentElement,':after').getPropertyValue('content'); //http://adactio.com/journal/5429/

        // OKAY. SIZE is not working for some dumb reason. This is why the lightbox isn’t launching. 

        function lightboxInit() {
            $('.carousel__zoom').click(function(e) {

                if(size != 'small') {
                    e.preventDefault();
                    var $thisHref = $(this).attr('href');
                    var $thisSummary = $(this).parent().children('.carousel__summary').html();
                    buildLightBox($thisHref, $thisSummary);
                }
            });
        }

        function buildLightBox(src, summary) {

            $('body').addClass('overlay--active');

            // Duplicates the image
            $('<div class="lightbox"><div class="lightbox__container"></div></div>').appendTo('body');

            $('<img class="lightbox__image" src="'+src+'" alt="" />').appendTo('.lightbox__container');

            // Makes a close button
            $('<div class="lightbox__close btn btn--icon btn--tertiary btn--arrow-left btn--epsilon"><span class="icon ss ss-close">close</span><div class="icon-text">Close</div></div>').appendTo('.lightbox__container');

            // Gets the summary and adds it to the lightbox
            $('<div class="lightbox__content">').appendTo('.lightbox__container').html(summary);

            $('body').on('click','.lightbox__close',function(e) {
                $('.lightbox').remove();
                $('body').removeClass('overlay--active');
            });

            $(document).keyup(function(e){
                if (e.keyCode == 27) {
                    $('.lightbox').remove();
                    $('body').removeClass('overlay--active');
                }
            });
        }


        $(window).resize(function() {
            size = window.getComputedStyle(document.documentElement,':after').getPropertyValue('content');
        });
    });
});

