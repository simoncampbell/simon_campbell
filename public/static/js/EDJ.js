$(document).ready(function(){


// Mobile navigation drop down
    $('.link__mobile-menu').on('click', function(e){
        var $mobile_link = $('link__mobile-menu'),
            $icon_text = $('.icon--menu');

        e.preventDefault();
        $('#nav_pri').toggleClass('menu--active');
        $('.banner-nav').slideToggle();
        $icon_text.removeClass('navigatedown');
        $icon_text.removeClass('ss-navigatedown');
        $icon_text.toggleClass('navigateup');
        $icon_text.toggleClass('ss-navigateup');



        if ($('#nav_pri').hasClass('menu--active')) {
            $icon_text.text('navigateup');
        }

        else {
            $icon_text.text('navigatedown');
            $icon_text.addClass('navigatedown');
        }

        $mobile_link.find('.ss').text('navigateup');
    });
});