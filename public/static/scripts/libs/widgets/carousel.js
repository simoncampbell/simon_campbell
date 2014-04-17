//////////////////////////////////////
//                                  //
//         CAROUSEL.JS              //
//                                  //
//////////////////////////////////////

define(['domReady', 'jquery'], function(domReady, jQuery) {

    var $carousel = $("[data-carousel]"),
        $carouselItemsContainer,
        $carouselItems,
        carouselLength,
        carouselPosition = 1,
        carouselWidth = $carousel.width(),
        animateSpeed = 500;

    domReady(function(){
        if($carousel.length > 0) {

            // iterate through multiple carousels
            $.each( $carousel, function() {

                $carouselItemsContainer = $("[data-carousel-items-container]");
                $carouselItems = $("[data-carousel-item]");
                carouselLength = $carouselItems.length;

                setItemWidth();
                showCarouselNav(carouselPosition);
                bindCarouselNav();
            });
        }
    });

    // sets item width equal to carousel container
    function setItemWidth() {
        $carouselItems.width($carousel.width());
    }

    // binds actions to previous and next buttons
    function bindCarouselNav() {
        $(document).on("click", "[data-carousel-nav]", function(e) {
            e.preventDefault();
            var $this = $(this),
                direction = parseInt($this.attr("data-carousel-nav"));

            changeCarousel(carouselPosition + direction, animateSpeed);

        });
    }


    // animate carousel to selected slide
    function changeCarousel(newPosition, speed) {

        var left = -((newPosition * carouselWidth) - carouselWidth);

        $carouselItemsContainer.animate({
            left: left
        }, speed, function() {
            carouselPosition = newPosition;
            showCarouselNav(newPosition);
        });
    }

    // shows prev/next buttons when necessary
    function showCarouselNav(position) {
        $("[data-carousel-nav]").hide();

        if (position > 1) {
            $("[data-carousel-nav='-1']").show();
        }

        if (position < $carouselItems.length) {
            $("[data-carousel-nav='+1']").show();
        }
    }


    $(window).resize(function() {
        carouselWidth = $carousel.width();

        setItemWidth();
        changeCarousel(carouselPosition, 0);

    });
});