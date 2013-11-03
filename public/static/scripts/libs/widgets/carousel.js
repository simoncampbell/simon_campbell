//////////////////////////////////////
//                                  //
//         CAROUSEL.JS              //
//                                  //
//////////////////////////////////////

/**
 * Based on Brad Frost’s fluid carousel: http://codepen.io/bradfrost/full/tdacu
 */


define(['jquery'], function(jQuery) {

    var Carousel = function() {
        this.init();
    };

    Carousel.prototype = {
        constructor: Carousel,

        init: function(){
            this.buildCarousel();
            this.sizeCarousel();
            this.posCarousel();
        },
        buildCarousel: function(){
        //Build the Carousel
            sizeCarousel();

            if(Modernizr.touch) {
               buildSwipe();
            }
        },
        sizeCarousel: function(){
        //Determine the size and number of panels to reveal
            current = 0;
            animLimit = $liLength/multiplier-1;

            //Set panel widths
            $li.outerWidth($cWidth/multiplier);
        },

        posCarousel: function(){
        //Animate Carousel. CSS transitions used for the actual animation.
            var pos = -current * $cWidth;
            $cList.addClass('animating').css("left",pos);

            setTimeout(function() {
                $cList.removeClass('animating');
                cLeft = $cList.css("left").replace("px","");
            }, 500);  // will work with every browser

        },
        buildSwipe: function(){
            var threshold = 80,
            origX = 0,
            finalX = 0,
            changeX = 0,
            changeY = 0,
            curPos;

            //Touch Start
            $cContainer.get(0).addEventListener("touchstart", function (event) {
                 origX = event.targetTouches[0].pageX;
            curPos = origX;
            });

            //Touch Move
            $cContainer.get(0).addEventListener("touchmove", function (event) {
                finalX = event.touches[0].pageX,
            diffX = origX - finalX,
            leftPos = cLeft-diffX;

            event.preventDefault();
            $cList.css("left",leftPos);
            });

            //Touch Move
            $cContainer.get(0).addEventListener("touchend", function (event) {
                var diffX = origX - finalX,
                diffXAbs = Math.abs(diffX);

                if (diffX > 0 && diffXAbs > threshold) {
                    moveLeft();
                } else if (diffX < 0 && diffXAbs > threshold) {
                    moveRight();
                } else {
                    posCarousel();
                }

                origX = finalX = diffX = 0;
            });
        },
        moveRight: function(){
            if(current>0) {
                current--;
            }
            posCarousel();
        },
        moveLeft: function(){
            if(current<animLimit) {
                current++;
            }
            posCarousel();
        }
    };


    (function(w){
      var sw = document.body.clientWidth,
        current = 0,
        count = 1, // current slide number
        breakpointSize = window.getComputedStyle(document.body,':after').getPropertyValue('content'),
            multiplier = 1, /*Determines the number of panels*/
            count = 1, /* number of slides */
            $carousel = $('.carousel'),
            $cList = $('.carousel__list'),
            $cContainer = $('.carousel__list-container'),
            $cWidth = $cContainer.outerWidth(),
            cLeft = $cList.css("left").replace("px",""),
            $li = $cList.find('li'),
            $liLength = $li.size(),
            numPages = $liLength/multiplier,
            $prev = $('.carousel__nav .prev'),
            $next = $('.carousel__nav .next');


        $(window).resize(function(){ //On Window Resize
            sw = document.body.clientWidth;
            $cWidth = $cContainer.width();
            breakpointSize = window.getComputedStyle(document.body,':after').getPropertyValue('content');  /* Conditional CSS http://adactio.com/journal/5429/ */
            sizeCarousel();
            posCarousel();
        });


    // TODO
    // -----------------------------------------
    // 1. Count the number of slides
    // 2. Find current slide
    // 3. If current slide is first then remove 'Previous' button
    // 4. If current slide is last then remove 'Next' button


    // $prev.hide(); //hide previous button by default

    // $prev.click(function(e){ //Previous Button Click
    //     e.preventDefault();
    //     moveRight();
    //     count --;

    //     //hide the preview button if there is no previous slide
    //     if(count <= 1) {
    //         $prev.hide();
    //     }

    //     //show the next button if there are more slides
    //     if (count < numPages){
    //         $next.show();
    //     }
    // });

    // $next.click(function(e){ //Next Button Click
    //     e.preventDefault();
    //     moveLeft();
    //     count ++;

    //     //hide the next button if no more slides
    //     if (count >= numPages){
    //          $next.hide();
    //     }

    //     //show previous button if there are more slides
    //     if(count > 1) {
    //         $prev.show();
    //     }
    // });


