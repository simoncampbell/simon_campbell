$(document).ready(function(){


// Mobile navigation drop down
    $('.link__mobile-menu').on('click', function(e){
    	var $mobile_link = $('link__mobile-menu'),
			$icon_text = $('.icon--menu');

        e.preventDefault();
        $('#nav_pri').toggleClass('menu--active');

        console.log($icon_text);
        $icon_text.text('navigateup');
        $icon_text.removeClass('navigatedown');
        $icon_text.addClass('navigateup');

        $mobile_link.find('.ss').text('navigateup');
        $('.banner-nav').slideToggle();
    });
});