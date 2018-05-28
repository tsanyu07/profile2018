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


	//slider
  $('.product-slider').slick({
    autoplay: true,
    speed: 1500,
    fade: true,
    pauseOnHover:true,
    arrows:true,
    dots:true,
    asNavFor: '.bg-slider'
  });
  $('.bg-slider').slick({
    autoplay: true,
    speed: 1500,
    fade: true,
    arrows:false,
    pauseOnHover:true,
    asNavFor: '.product-slider',
  });

   $('.links-slider').slick({
    arrows:true,
    dots:false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
            {
              breakpoint: 961,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 601,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
        ]
  });

$('.prod_info-for ul').slick({
        // infinite:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.prod_info-nav ul',
        draggable: false,
        swipe: false,
    });

    $('.prod_info-nav ul').slick({
        // infinite:false,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.prod_info-for ul',
        dots: false,
        focusOnSelect: true,
        arrows:true,
        responsive: [
            {
              breakpoint: 961,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 601,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            }
        ]

    });

    $('.avant-slider').slick({
    arrows:true,
    dots:false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
            {
              breakpoint: 961,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 601,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
        ]
  });



    // 自動裁圖
    $('.imgLiquid').imgLiquid({
        fill: true, horizontalAlign: "center", verticalAlign: "center"
    });

  /*fancybox*/
        $('.fancybox').fancybox({
            padding: 0,
            margin: 0,
            helpers: {
            overlay: {
            locked: true
                }
            }
        });

$(".propic_fcbox").fancybox({
        padding: 0,
        margin: 0,
        prevEffect      : 'none',
        nextEffect      : 'none',
        closeBtn        : false,
        helpers     : {
            title   : { type : 'inside' },
            buttons : {}
        }
    });

});
