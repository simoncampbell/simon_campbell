//////////////////////////////////////
//                                  //
//         MOBILE MENU              //
//                                  //
//////////////////////////////////////

// Mobile dropdown custom styles
// !! This module needs to be abstracted.
//


define(['jquery', 'domReady'], function(jQuery, domReady){

    var MobileMenu = function(){
        this.init();
    };

    MobileMenu.prototype = {};


    domReady(function(){

        $('.link__mobile-menu').on('click', function(e){ //http://adactio.com/journal/5429/
            var $mobile_link = $('link__mobile-menu'),
                $icon_text = $('.icon--menu');

            e.preventDefault();
            $('#nav_pri').toggleClass('menu--active');
            $('.banner-nav').slideToggle(200);
            $icon_text.removeClass('navigatedown');
            $icon_text.removeClass('ss-navigatedown');
            $icon_text.toggleClass('navigateup');
            $icon_text.toggleClass('ss-navigateup');

            if ($('#nav_pri').hasClass('menu--active')) {
               $icon_text.text('navigateup');
            } else {
                $icon_text.text('navigatedown');
                $icon_text.addClass('navigatedown');
            }

            $mobile_link.find('.ss').text('navigateup');
        });


        $(window).resize(function(){
            size = window.getComputedStyle(document.body,':after').getPropertyValue('content');

            if(size == 'largest') {
                $('#nav_pri').addClass('menu--active');
                $('.banner-nav').css('display','');
            }
        });

    });

    return MobileMenu;

});