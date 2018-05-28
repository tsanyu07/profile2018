function scroll_cater1(){
	$('html, body').animate({
        scrollTop: $("#cater1").offset().top
    }, 1000);
    return false;  
}


$(function(){

	/*for last-child ie8hack*/
 //    $(document).ready(function() {
	//   if ($.browser.msie && parseInt($.browser.version, 10) <= 8) {
	//     $('*:last-child').addClass('last-child');
	//   }
	// });

   //為桌機板
  $(window).scroll(function () {   
        var y = $(this).scrollTop();
        if (y > 100 ) {
            // console.log(y);
            $('.gotop').fadeIn();
        } else {
            $('.gotop').fadeOut();
        }       
  });




	/*footer_btn gotop*/
	$(".gotop").click( function(){		
		jQuery("html,body").animate({
            scrollTop:0
        },1000);		
	});


	/*首頁 漢堡選單開闔*/
	$('.s_ham').click(function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$('.s_menu').removeClass("active");
		}else{
			$(this).addClass("active");
			$('.s_menu').addClass("active");
		}
	});

	$('.s_menu li').click(function(){
		if($(this).parent().hasClass("active")){
			$(this).parent().removeClass("active");
			$('.s_ham').removeClass("active");
		}
	});


	/*slick*/
	$('.con3 .prod').slick({
		arrows: false,
		slidesToShow: 3,
        responsive: [
        	{
              breakpoint: 1050,
              settings: {
                
              }
            },
        	{
              breakpoint: 451,
              settings: {
              	infinite: true,
              	padding:'0',
                slidesToScroll: 1,
                slidesToShow: 1,
                arrows: true,
            	prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
        		nextArrow:'<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>'
              }
            }
        ]
    });





});
