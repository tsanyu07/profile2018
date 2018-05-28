function windowResize(){

	var headerH = $('header').height();
	var bannerH = $('.banner').height();
	var HH = bannerH + headerH;
	console.log(HH);


	$(document).scroll(function () {   
        var y = $(this).scrollTop();
        if (y > HH ) {        
            // if( $('nav').has('fixed')){
                 
            // }
            $('nav').addClass('fixed');
            $('.con1').addClass('fixed');
        } else {
            $('nav').removeClass('fixed');
            $('.con1').removeClass('fixed');
        }       
    });




}

$(function(){

	windowResize();

	/*footer_btn gotop*/
	$(".gotop").click( function(){		
		jQuery("html,body").animate({
            scrollTop:0
        },1000);		
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
				windowResize();
		}else{
			//ie8
		}

	}else{

		/*我不是ie*/
		windowResize();
	}

});


$(window).resize(function(){
	var thisdevice = navigator.userAgent;
	if (thisdevice.match(/(iPhone|iPod|iPad|Android)/)){
		
	}else{
		windowResize();
	};	
});
