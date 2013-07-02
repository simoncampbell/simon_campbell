$(document).ready(function(){


// Mobile navigation drop down
    $('.link__mobile-menu').on('click', function(e){
        e.preventDefault();
        $('#nav_pri').toggleClass('menu--active');
        $('.banner-nav').slideToggle();
    });
});