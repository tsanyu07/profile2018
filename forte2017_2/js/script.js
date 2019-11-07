function menuOpen(){
		$('.mask').fadeIn(500);
		$('.mask').addClass("active");
		$('.s_menu').addClass("active");
		$('nav').addClass("active");
		$('body').css('overflow', 'hidden');
}
function menuClose(){
	$('.mask').fadeOut(500);
	$('.mask').removeClass("active");
	$('.s_menu').removeClass("active");
	$('nav').removeClass("active");
	$('body').css('overflow', 'auto');
}

$(function(){

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


