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
        var size = window.getComputedStyle(document.body,':after').getPropertyValue('content'); //http://adactio.com/journal/5429/

        lightboxInit();

        function lightboxInit() {
            $('.carousel__link').click(function(e){
                if(size == 'large') {
                    e.preventDefault();
                    var $thisHref = $(this).attr('href');
                    var $thisSummary = $(this).parent().parent().children('.carousel__summary').html();
                    buildLightBox($thisHref, $thisSummary);
                }
            });
        }

        function buildLightBox(src, summary) {

            $('<div class="lightbox">').appendTo('body').html('<img src="'+src+'" alt="" />');

            // Close button
            $('<div class="lightbox__close"><span class="icon ss ss-close">close</span>Close</div>').appendTo('.lightbox');

            $('<div class="lightbox__content">').appendTo('.lightbox').html(summary);

            $('body').on('click','.lightbox__close',function(e) {
                $('.lightbox').remove();
            });
        }



        $(window).resize(function() {
            size = window.getComputedStyle(document.body,':after').getPropertyValue('content');
        });
    });
});

