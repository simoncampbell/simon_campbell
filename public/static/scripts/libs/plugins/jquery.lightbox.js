/*------------------------------------*\
    $LIGHTBOX MOLECULE
\*------------------------------------*/


var size = window.getComputedStyle(document.body,':after').getPropertyValue('content'); //http://adactio.com/journal/5429/

$(document).ready(function(){
  lightboxInit();
  console.log('LIGHTBOX GO');
});

function lightboxInit() {
    $('.let-there-be-light').click(function(e){
        if(size == 'large') {
            e.preventDefault();
            var $thisHref = $(this).attr('href');
            buildLightBox($thisHref);
        }
    });
}

function buildLightBox(src) {
    // Current lightbox message variable
    var lightbox__message = $('.carousel__summary').html();

    $('<div class="lightbox">').appendTo('body').html('<img src="'+src+'" alt="" />');
    $('<div class="lightbox__message">').appendTo('.lightbox').html($lightbox__message);

    $('body').on('click','.lightbox',function(e) {
        $('.lightbox').remove();
    });
}

$(window).resize(function() {
    size = window.getComputedStyle(document.body,':after').getPropertyValue('content');
});

