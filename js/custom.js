 $(document).ready(function () {
    "use strict";

    //Preloader js
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 3000);

    //Sticky_nav  
      $(".lab-navbar").sticky({topSpacing:0});
      
    //Scroll Spy    
      $('body').scrollspy({ target: '.lab-navbar' })
    
    
    //Smoth scroll
      $(".lab-navbar a").on('click', function(e){
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          $('html, body').animate({
          scrollTop: $(hash).offset().top
          }, 500, function(){
          window.location.hash = hash;
          });
        } // End if
      });


    // Login and Logout popup
	$(".myBtn").on('click', function (e){
		$("#myModal").modal();
	});


	$(".myBtn_1").on('click', function (e){
		$("#myModal_1").modal();
	});


   // Isotope Gallery
    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        columnWidth : '.normal'
      }
    });
    var filterFns = {
      numberGreaterThan50: function() {
        var number = $(this).find('.number').text();
        return parseInt( number, 10 ) > 50;
      },
      ium: function() {
        var name = $(this).find('.name').text();
        return name.match( /ium$/ );
      }
    };
    $('.filters-button-group').on( 'click', 'button', function(e) {
      var filterValue = $( this ).attr('data-filter');
      filterValue = filterFns[ filterValue ] || filterValue;
      $grid.isotope({ filter: filterValue });
    });
    $('.button-group').each( function( i, buttonGroup ) {
      var $buttonGroup = $( buttonGroup );
      $buttonGroup.on( 'click', 'button', function(e) {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
      });
    });
    

	//Portfolio Lightbox
	$('.grid-item').magnificPopup({
		delegate: '.port-view',
		type: 'image',
		gallery: {
			enabled: true
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});

    
	//Video Popup 
	$('.video-iframe').magnificPopup({
	  type: 'iframe',
	  iframe: {
		markup: '<div class="mfp-iframe-scaler">' +
		  '<div class="mfp-close"></div>' +
		  '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
		  '</div>',
		patterns: {
		  youtube: {
			index: 'youtube.com/',
			id: 'v=',
			src: 'http://www.youtube.com/embed/%id%?autoplay=1'
		  }
		},
		srcAction: 'iframe_src'
	  }
	}); 

});
