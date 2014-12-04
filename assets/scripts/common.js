
// promo slider

$('.bxslider').bxSlider({
	nextSelector: '#slider-next',
	prevSelector: '#slider-prev',
	controls: true,
	pager: false,
	prevText: '<img src="assets/images/promo_slider_left-arrow.png" height="50" width="53"/>',
	nextText: '<img src="assets/images/promo_slider_right-arrow.png" height="50" width="53"/>',
	auto: true
});


// end promo slider

// mobile_nav 

$(document).ready(function() {
    
	var $menu = $("#menu").clone();
	$menu.attr( "id", "menu_1" );
	$menu.attr( "id", "menu_2" );
	$menu.attr( "id", "menu_3" );
	$menu.attr( "id", "menu_4" );
	$menu.attr( "id", "menu_5" );
	$menu.attr( "id", "menu_6" );
	$menu.attr( "id", "menu_7" );
	$menu.attr( "id", "menu_8" );
	$menu.attr( "id", "menu_9" );
	$menu.attr( "id", "menu_10" );
	$menu.attr( "id", "menu_11" );
	$menu.attr( "id", "menu_12" );
	$menu.attr( "id", "menu_13" );
	$menu.attr( "id", "menu_14" );
	$menu.attr( "id", "menu_15" );
	$menu.attr( "id", "menu_16" );
	$menu.attr( "id", "menu_17" );
	$menu.attr( "id", "menu_18" );



	  $("#menu, #menu_1, #menu_2, #menu_3, #menu_4, #menu_5, #menu_6, #menu_7, #menu_8, #menu_9, #menu_10, #menu_11, #menu_12, #menu_13, #menu_14, #menu_15, #menu_16, #menu_17, #menu_18").mmenu({
    	classes: "mm-light",
    	clone: true,
	    offCanvas: {
	       position  : "left",
	       zposition : "front"
	    }
	 });



  //   $("#menu").mmenu({
  //   	classes: "mm-light",
	 //    offCanvas: {
	 //       position  : "left",
	 //       zposition : "front"
	 //    }
	 // });
});

// end mobile_nav 