function openCity(evt, cityName) {
	// Declare all variables
	var i, tabcontent, tablinks;
   
	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
   
	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
   
	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
	
   }
   
// document.getElementById("defaultOpen").click();


;(function ($) {

	'use strict';


	$('.portfolio-single-slider').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000

	});

	$('.clients-logo').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000
	});

	$('.testimonial-wrap').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		infinite: true,
		dots: true,
		arrows: true,
		autoplay: false,
		autoplaySpeed: 6000,
		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 994,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
				arrows: false
		      }
		    },{
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
				arrows: false
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
				arrows: false
		      }
		    }
		  
  		]
	});
	$('.testimonial-wrap-komuniti').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		variableWidth: false,
		infinite: false,
		dots: true,
		arrows: false,
		autoplay: false,
		autoplaySpeed: 6000,
		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 994,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
				arrows: false
		      }
		    },{
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
				arrows: false
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
				arrows: false
		      }
		    }
		  
  		]
	});

	$('.ecommerce-carousel').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		infinite: true,
		dots: false,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 6000,
		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 994,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
				arrows: false
		      }
		    },{
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
				arrows: false
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
				arrows: false
		      }
		    }
		  
  		]
	});

	$('.find-us-carousel').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		dots: false,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 6000,
		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 994,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
				arrows: false
		      }
		    },{
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
				arrows: false
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
				arrows: false
		      }
		    }
		  
  		]
	});

	$(window).on('scroll', function () {
		//.Scroll to top show/hide
		if ($('#scroll-to-top').length) {
			var scrollToTop = $('#scroll-to-top'),
				scroll = $(window).scrollTop();
			if (scroll >= 700) {
				scrollToTop.fadeIn(200);
			} else {
				scrollToTop.fadeOut(100);
			}
		}
	});
	// scroll-to-top
	// if ($('#scroll-to-top').length) {
	// 	$('#scroll-to-top').on('click', function () {
	// 		$('body,html').animate({
	// 			scrollTop: 0
	// 		}, 600);
	// 		return false;
	// 	});
	// }


   $('.portfolio-gallery').each(function () {
        $(this).find('.popup-gallery').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });


	var map;

	function initialize() {
		var mapOptions = {
			zoom: 13,
			center: new google.maps.LatLng(50.97797382271958, -114.107718560791)
			// styles: style_array_here
		};
		map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	}

	var google_map_canvas = $('#map-canvas');

	if (google_map_canvas.length) {
		google.maps.event.addDomListener(window, 'load', initialize);
	}

	// Counter

	$('.counter-stat').counterUp({
	      delay: 10,
	      time: 1000
	  });

	  $('.cate').click(function(){
        if($(window).width() < '960') {
        let link= '#content-section';
        // window.alert(link);
         $(this).attr('href', link);
        }
         else{
        let link= '#cat-selection';
        // window.alert(link);
         $(this).attr('href', link);
        }
   		 });

	  $("a[href^='#']").click(function(e) {
		e.preventDefault();
		
		let position = $($(this).attr("href")).offset().top;
		$("body, html").animate({
		scrollTop: position
		} /* speed */ );
		});

		//sticky navbar
		// $(window).bind('scroll', function () {
		// 	if ($(window).scrollTop() > 100) {
		// 		$('.navbar').addClass('sticky');
		// 	} else {
		// 		$('.navbar').removeClass('sticky');
		// 	}
		// 	if ($(window).scrollTop() > 300) {
		// 		$('.navbar').addClass('drops');
		// 	} else {
		// 		$('.navbar').removeClass('drops');
		// 	}
		// 	});
		
		
	




	

})(jQuery);
