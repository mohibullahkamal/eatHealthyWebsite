/*global $*/
/*global location*/

$(document).ready(function() {
    
    // ********* Sticky Nav Bar ***********
    // ************************************ 
    $('.js--section-features').waypoint(function(direction) {
        // If the nav bar is scrolled down we want the nav bar to appear :)
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            // if the page is scrolled to the top, we want it to disappear...
            $('nav').removeClass('sticky');
            }
        }, 
        {
        // setting offset so that nav bar appear a bit early for visual continuity
        offset: '60px;'
    });
    
    
    // ********* Scroll on Plans **********
    // ************************************ 
    $('.js--scroll-to-plans').click(function() {
        //we select class and folloing animation (scrollTop) of the (js--scroll-plan) section -> in 1s
        $('html, body')
        .animate(
            {
                scrollTop:$('.js--scroll-plans').offset()
            .top},
        // 1s animate duration
        1500);
    });
    
    
    // ********* Scroll to Start **********
    // ************************************ 
    $('.js--scroll-to-start').click(function() {
        //we select class and folloing animation (scrollTop) of the (js--scroll-plan) section -> in 1s
        $('html, body')
        .animate(
            {
                scrollTop:$('.js--section-features').offset()
            .top},
        // 1s animate duration
        1000);
    });
    
    
    // ******** Smooth Navigation Scroll ****************
    // **Code copied from external source-> css tricks **
    // **************************************************
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
        // On-page links
            if (
               location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
               location.hostname == this.hostname
              ) {
                   // Figure out element to scroll to
                   var target = $(this.hash);
                   target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                   // Does a scroll target exist?
                   if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top
                    }, 1000, function() {
                         // Callback after animation
                         // Must change focus!
                         var $target = $(target);
                         $target.focus();
                         if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    }
                });
            }
        }
     });



    // ****** Animation On Scroll **********
    // *************************************
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });




});
