$(function(){

	$('.watchbox').slick({
    arrows:true,
    dots:false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
            {
              breakpoint: 601,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
        ]
  });

	/*footer_btn gotop*/
	$(".gotop").click( function(){		
		jQuery("html,body").animate({
            scrollTop:0
        },1000);		
	});  


	/* 手機版 選單滑出滑入*/
	$('.s_menu').on('click',function(){
		if($('.mask').hasClass("active")){
			menuClose();
		}else{
			menuOpen();
		}
	});
	$('.mask').on('click',function(){
		menuClose();
	});

	////偵測是否為ie
	var ms_ie = false;
    var ua = window.navigator.userAgent;
    var old_ie = ua.indexOf('MSIE ');
    var new_ie = ua.indexOf('Trident/');

    if ((old_ie > -1) || (new_ie > -1)) {
    	ms_ie = true;
    }
    if ( ms_ie ) {

    	//is_ie & ie9
        if ($.browser.msie && parseInt($.browser.version, 10) <= 9) {	
				
		}else{
			
		}

	}else{

		/*我不是ie*/
		
	}

});



