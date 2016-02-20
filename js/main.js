/* navbar header */
$(document).ready(function(){
  // Activate Carousel
  $("#myCarousel").carousel({
    interval:3000
  });
	/* affix the navbar after scroll below header */
  $('#nav').affix({
    offset: {
      top: 200
    }
  });
 
	/* multi carousel script */
	$('.obus-carousel-multi .item').each(function(){
	  var next = $(this).next();
	  if (!next.length) {
	    next = $(this).siblings(':first');
	  }
	  next.children(':first-child').clone().appendTo($(this));
	  
	  for (var i=0;i<2;i++) {
	    next=next.next();
	    if (!next.length) {
	        next = $(this).siblings(':first');
	    } 
	    next.children(':first-child').clone().appendTo($(this));
	  }
	});

// list grid system - tombol
  $('#list').click(function(event){event.preventDefault();
    $('#products .item').addClass('list-group-item');
  });
  $('#grid').click(function(event){event.preventDefault();
    $('#products .item').removeClass('list-group-item');
    $('#products .item').addClass('grid-group-item');
  });
  // list dan grid on load
  function sfmenuToggle() {
    if ($(window).width() < 768) {
          $('#products .item').removeClass('grid-group-item').addClass('list-group-item');
    }
    if ($(window).width() > 768) {
          $('#products .item').removeClass('list-group-item').addClass('grid-group-item');
    }
  }
  // on window resize
  $(window).resize(function(){
      sfmenuToggle();
  });
  // on page load
  sfmenuToggle();

	// halaman item slider
  $('#horizontalTab').easyResponsiveTabs({
    type: 'default', //Types: default, vertical, accordion           
    width: 'auto', //auto or any width like 600px
    fit: true   // 100% fit in a container
  });

  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: "thumbnails",
    slideshow: false
  });

  /* image zoom */
	$("#obusZoom").elevateZoom({ 
		zoomType	: "inner", 
		cursor: "crosshair",
		scrollZoom : true,
		easing : true
	});

});
