/*選單收合功能*/
function change_menu(){
	$('.s_menu a').removeClass('on');
    $('.menu').hide();

	var width = window.innerWidth;
	// alert(width);
	if( width < 901) {
		$('.menu').hide();
		$('.menu li').click(function(){
			$('.s_menu a').removeClass('on');
			$('.menu').hide();			
		});		

	}else{
		$('.menu').css('display', 'inline');
		$('.menu li').click(function(){
			$('.menu').css('display', 'inline');
		});
	};
}

/*banner arrow*/
function loop(){
   $('.myscroll')
	.animate({'bottom':'25px'},1000)
	.animate({'bottom':'10px'},1000, loop);
}



function change_height(){
	var wh = $(window).height();
	var ww = window.innerWidth;

	var the100vh = wh - 80;
	var vh = the100vh / 100;
	
	$('.con').css('min-height',100 * vh);
	$('.con5').css('min-height','580px');
	// $('.con section').css('min-height',100 * vh);
	$('.con3').css('min-height','auto');
	$('.con2_bg section').css('height','auto');
	// $('.con3 section').css('height',100 * vh).css('min-height','auto');
	$('.con4').css('height',100 * vh);
	$('.con4 .district').css('height',the100vh - 250);

	//	大於1680時
	if( ww > 1679 ){
		
	}else if( ww < 801 ){
		$('.con3').css('height','auto').css('min-height','auto');
		$('.con3 section').css('height','auto').css('min-height','auto');
		$('.con2wrap').css('min-height','auto');
	}else{

	}

	//	大於1680時
	if( wh < 640 ){
		$('.con3').css('height','auto').css('min-height','560px');
		$('.con3 section').css('height','auto').css('min-height','560px');
	}else{

	}

}

function change_m_height(){
	var wh = $(window).height();
	var ww = window.innerWidth;

	var the100vh = wh - 80;
	var vh = the100vh / 100;

	$('.con1').css('min-height','0').css('padding-top','58%');
	$('.con1 section').css('min-height','auto');


}


function is_desktop(){

	change_menu();


	////偵測是否為ie
	var ms_ie = false;
    var ua = window.navigator.userAgent;
    var old_ie = ua.indexOf('MSIE ');
    var new_ie = ua.indexOf('Trident/');

    if ((old_ie > -1) || (new_ie > -1)) {
    	ms_ie = true;
    }
    if ( ms_ie ) {
    	
    	//is_ie	
    

    	//is_ie & ie9
        if ($.browser.msie && parseInt($.browser.version, 10) == 9) {
        	

			//is_ie & ie8-    
			}else if($.browser.msie && parseInt($.browser.version, 10) <= 8){
				$('.con4').css('height','800px !important').css('min-height','800px !important');

			//is_ie & ie9+
			}else{
				
				
			}

	    }


	change_height();

    $(window).resize(function () {
		change_menu();
		change_height();
    });

    /*banner arrow*/
	$('.myscroll').click(function(){
		var contH = $('.con1').outerHeight(true);
		$('body,html').animate({scrollTop: contH},700);
	});


}



function is_mobile(){
	change_menu();	
	change_m_height()
	// $('.header').css('position','relative');
	// $('.main').css('padding-top','0');	
	$('.con').css('min-height','0').css('height','auto');

	/*banner arrow*/
	$('.myscroll').click(function(){
		var contH = $('.con1').outerHeight(true);
		$('body,html').animate({scrollTop: contH},700);
	});
}


function w(){



	////偵測是否為 mobile
	var thisdevice = navigator.userAgent;
	if (!thisdevice.match(/(iPhone|iPod|iPad|Android)/)){

		//為桌機板
		is_desktop();
		return;
		
	}else{

		//為手機板
		is_mobile();
		return;
	}
}


$(function(){

	w();
	loop();

	/*主選單*/
	$('.s_menu a').click(function(){
		$(this).stop(true, true).toggleClass('on');
		$('.menu').stop(false, true).fadeToggle();

	});

	

	/*預購btn*/
	$('.pre_order').click(function(){
		$('body,html').animate({scrollTop: $("#con4").offset().top - 80},700);
	});

	$('.district').hover(
		function(){
			$(this).css('background-color','rgba(0, 0, 0,0.1)');
		},function(){
			$(this).css('background-color','rgba(0, 0, 0,0)');
		}
	);



});

$(window).resize(function(){
	var thisdevice = navigator.userAgent;
	if (thisdevice.match(/(iPhone|iPod|iPad|Android)/)){
		
	}else{
		w();
	};	
});
