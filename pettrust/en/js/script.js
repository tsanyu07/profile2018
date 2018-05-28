/*sdmenu 側邊選單*/

$(function(){
		
	// $(".sidemenu .sidelist").click( function(){
		
	// 	$(this).siblings().slideDown().parent().siblings().find("ul").slideUp();
	// 	$(this).siblings(".selected").removeClass("selected").children(".branch").stop(true, true).slideUp();
	// 	$(this).addClass("selected").children(".branch").slideDown();

	// 	return false;
		
	// });


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
				//老舊瀏覽器提醒
				$('.old_ie').show();

		}else{
			
		}

	}else{

		/*我不是ie*/
		
	}

});


$(document).ready(function(){


	/* 當卷軸超過一定距離跑出回到頂端 */
	$(window).scroll(function() {
		if ($(this).scrollTop() > 500) {
			$('.gotop').fadeIn();
		} else {
			$('.gotop').fadeOut();
		}
	});
	/*點按鈕捲回頂端*/
	$(".gotop").click(function(){
		$("body,html").animate({
			scrollTop : 0
		}, 500);
		return false;
	});
	/* Menu開闔 */
	$(".sidemenu>li.sidelist").click(function(){
		$(this).siblings(".selected").removeClass("selected").children(".branch li").stop(true, true).slideUp();
		$(this).addClass("selected").children(".branch li").slideDown();
	});
});
