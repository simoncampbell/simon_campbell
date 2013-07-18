$(document).ready(function(){



// Mobile navigation drop down
// ---------------------------------------------------------------------------------------------------

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



// Dropdown navigation
// ---------------------------------------------------------------------------------------------------

    $('.dropdown-nav__header').on('click', function(e){
        var $dropdownBody = $('.dropdown-nav');
        var $headers = $('.dropdown-nav__header');
        var $items = $('.dropdown-nav__item');


        //close other open dropdowns
        $items.slideUp();

        // if not already open
        if (!$(this).hasClass('dropdown-nav__active')) {
            // open and remove all active classes
            $(this).next().slideDown(function() {
                $('html, body').animate({
                    scrollTop: $(this).prev().offset().top
                }, 200);
            });

            $headers.removeClass('dropdown-nav__active');
        }

        // toggle active class
        $(this).toggleClass('dropdown-nav__active');

    });





// Jump To Top - Jump to top for news pagination
// ---------------------------------------------------------------------------------------------------

// EDJ.jump_to_top = {

//     $jump_to_top: {},

//     run:true,

//     init: function(){
        $('a.link--jump').on('click', function(event){
            event.preventDefault();
            $('html, body').animate({scrollTop:0}, 300);
        });
//     }
// };





});