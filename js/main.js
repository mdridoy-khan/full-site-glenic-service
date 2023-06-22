(function ($) {
"use strict";

/*---------------------------------------------------------------------------------------
    Mean Menu Active
-----------------------------------------------------------------------------------------*/
    // Mobile-menu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "767",
    });


    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });

    // image popup
    $('.popup-pic').magnificPopup({
      type: 'image',
      gallery:{
          enabled:true
      }
    });
    // video popup
    $('.popup-video').magnificPopup({
      type: 'iframe'
    });


/*---------------------------------------------------------------------------------------
    Scroll to top Active
-----------------------------------------------------------------------------------------*/
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<span><i class="fa-solid fa-arrow-up"></i></span>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });




    // Initialize and add the map
  function initMap() {
    // The location of Uluru
    const uluru = { lat: 23.8103, lng: 90.4125 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: uluru,
        flat: true,
        styles: [ { "stylers": [ { "hue": "#4bd6bf" }, { "gamma": "1.58" } ] } ],
            mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }

  window.initMap = initMap;
/*---------------------------------------------------------------------------------------
    Data Background Active
-----------------------------------------------------------------------------------------*/
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });
/*---------------------------------------------------------------------------------------
    Sticky Header Active
-----------------------------------------------------------------------------------------*/
    // sticky Header layout 1
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 5) {
          $("#header-sticky").removeClass("sticky");
        } else {
          $("#header-sticky").addClass("sticky");
        }
    }); 
    // sticky Header layout 2, 3
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 5) {
          $("#header-sticky-2").removeClass("sticky");
        } else {
          $("#header-sticky-2").addClass("sticky");
        }
    }); 
    // sticky Header Inner page
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 5) {
          $("#header-sticky-3").removeClass("sticky");
        } else {
          $("#header-sticky-3").addClass("sticky");
        }
    });
	
/*---------------------------------------------------------------------------------------
    Full Screen Search Popup Active
-----------------------------------------------------------------------------------------*/                                     
    // search popup
    if ($('.popup-with-zoom-anim').length) {
        $('.popup-with-zoom-anim').magnificPopup({
            type: 'inline',

            fixedContentPos: false,
            fixedBgPos: true,

            overflowY: 'auto',

            closeBtnInside: true,
            preloader: false,

            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-zoom-in'
        });
    }


    // owlCarousel slider protfolio-slider active
    $('.protfolio-slider').owlCarousel({
        animateOut: 'animate__zoomOut',
        animateIn: 'animate__fadeInDown',
        dots:false,
        autoplay:true,
        loop:true,
        navText:['<i class="fa-solid fa-left-long"></i>','<i class="fa-solid fa-right-long"></i>'],
        nav:true,
        autoplay:true,
        items:1,
        margin:0,
        stagePadding:0,
        smartSpeed:450
    });
/*---------------------------------------------------------------------------------------
    Slick Slider Active
-----------------------------------------------------------------------------------------*/  


// mainSlider
    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function (e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: true,
            autoplaySpeed: 10000,
            dots: false,
            fade: true,
            arrows: true,
            pauseOnHover:false,
            prevArrow:'<span><i class="fa-solid fa-arrow-left-long"></i></span>',
            nextArrow:'<span><i class="fa-solid fa-arrow-right-long"></i></span>',
            responsive: [
            {
              breakpoint: 993,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
              }
            }
          ]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();
	
    // service area slider active
    $('.service-active').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplaySpeed: 1000,
        prevArrow:'<i class="fas fa-chevron-left"></i>',
        nextArrow:'<i class="fas fa-chevron-right"></i>',
        responsive: [
          {
            breakpoint: 993,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 410,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
      ]
    });


    // protfolio area slider active
    $('.protfolio-acti').slick({
      autoplay: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      centerPadding:'50px',
      arrows: false,
      autoplaySpeed: 1000,
      responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  });
	
  	// skill area slider active
	$('.service-second-act').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:3
			}
		}
	})


  $('.appointment-active').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		dots:true,
		responsive:{
			400:{
				items:1
			},
			480:{
				items:2
			},
      767:{
				items:3
			},
      991:{
				items:4
			},
			1199:{
				items:4
			}
		}
	})

	
	// skill area slider active
	
    // Blog post slider active
    $('.latest-blog-active').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplaySpeed: 1000,
        prevArrow:'<i class="fas fa-chevron-left"></i>',
        nextArrow:'<i class="fas fa-chevron-right"></i>',
    });

    // brand slider active
    $('.brand-active').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        centerPadding:'20px',
        dots: false,
        arrows: false,
        autoplaySpeed: 1000,
        responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 993,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    // brand slider active
    $('.service-second-active').slick({
      autoplay: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerPadding:'20px',
      dots: true,
      arrows: false,
      autoplaySpeed: 1000,
      responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


    // brand slider active
    $('.protfolio-active').slick({
      autoplay: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      autoplaySpeed: 1000,
      responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 410,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
    // author-review active
    $('.author-review-active').slick({
        autoplay: true,
        infinite: true,
        dots: true,
        arrows: false,
        autoplaySpeed: 10000,
    });

    // author-review active
    $('.').slick({
        autoplay: false,
        infinite: true,
        dots: false,
        arrows: true,
        autoplaySpeed: 10000,
        prevArrow:'<i class="fas fa-chevron-left"></i>',
        nextArrow:'<i class="fas fa-chevron-right"></i>',
        responsive: [
        {
          breakpoint: 767,
          settings: {
            infinite: true,
            arrows: false,
          }
        },
      ]
    });
/*---------------------------------------------------------------------------------------
    Barfiller Progress Bar Active
-----------------------------------------------------------------------------------------*/
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll > 850) {
            $('#bar1').barfiller();
            $('#bar2').barfiller();
            $('#bar3').barfiller();
            $('#bar4').barfiller();
        }
    });
/*---------------------------------------------------------------------------------------
    Isotope Filter Active
-----------------------------------------------------------------------------------------*/
    // Latest work isotope active
    var $grid = $('.latest-work-items').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-item',
      }
    });

    // filter items on button click
    $('.work-control-button').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
    //for button active class
    $('.work-control-button > button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });
/*---------------------------------------------------------------------------------------
    Magnific popup Active
-----------------------------------------------------------------------------------------*/



/*---------------------------------------------------------------------------------------
    AOS Animation Active
-----------------------------------------------------------------------------------------*/
    if ($("[data-aos]").length) {
        AOS.init({
            duration: 1000,
            mirror: true
        });
    }
/*---------------------------------------------------------------------------------------
    Wow Animation Active
-----------------------------------------------------------------------------------------*/ 

    var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();
/*---------------------------------------------------------------------------------------
    Counter Active
-----------------------------------------------------------------------------------------*/






/*---------------------------------------------------------------------------------------
    Preloader Active
-----------------------------------------------------------------------------------------*/
    function loader() {
        $(window).on('load', function () {
            $('#ctn-preloader').addClass('loaded');
            $("#loading").fadeOut(500);
            // Una vez haya terminado el preloader aparezca el scroll

            if ($('#ctn-preloader').hasClass('loaded')) {
                // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
                $('#preloader').delay(900).queue(function () {
                    $(this).remove();
                });
            }
        });
    }
    loader();

/*---------------------------------------------------------------------------------------
    Side-bar Active
-----------------------------------------------------------------------------------------*/
    $('.bar').on("click", function() {
        $('.btn-menu-main').addClass('btn-menu-main-right');
    });
    $('.crose').on("click", function() {
        $('.btn-menu-main').removeClass('btn-menu-main-right');
    });



/*---------------------------------------------------------------------------------------
    Map Active
-----------------------------------------------------------------------------------------*/ 
// function basicmap() {
//     // Basic options for a simple Google Map
//     // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
//     var mapOptions = {
//         // How zoomed in you want the map to start at (always required)
//         zoom: 11,
//         scrollwheel: false,
//         // The latitude and longitude to center the map (always required)
//         center: new google.maps.LatLng(40.712776, -74.005974), // New York
//         // This is where you would paste any style found on Snazzy Maps.
//         styles: [{ "featureType": "landscape", "elementType": "all", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.business", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "poi.business", "elementType": "labels", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "poi.park", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.school", "elementType": "all", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.sports_complex", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit.station.bus", "elementType": "all", "stylers": [{ "visibility": "on" }, { "saturation": "21" }, { "weight": "4.05" }] }]
//     };
//     // Get the HTML DOM element that will contain your map
//     // We are using a div with id="map" seen below in the <body>
//     var mapElement = document.getElementById('contact-map');

//     // Create the Google Map using our element and options defined above
//     var map = new google.maps.Map(mapElement, mapOptions);

//     // Let's also add a marker while we're at it
//     var marker = new google.maps.Marker({
//         position: new google.maps.LatLng(40.712776, -74.005974),
//         map: map,
//         title: 'Cryptox'
//     });
// }
// if ($('#contact-map').length != 0) {
//     google.maps.event.addDomListener(window, 'load', basicmap);
// }


  // one page nav
  $('#nav').onePageNav({
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
    begin: function() {
      //I get fired when the animation is starting
    },
    end: function() {
      //I get fired when the animation is ending
    },
    scrollChange: function($currentListItem) {
      //I get fired when you enter a section and I pass the list item of the section
    }
  });


})(jQuery); 