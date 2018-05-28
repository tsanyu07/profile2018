<!--for ie-->
<meta http-equiv="X-UA-Compatible" content="IE=EDGE; IE=10; IE=9; IE=8;" />
<meta charset="UTF-8">

<title>旺年之交 - 戴你春遊</title>
<meta name="viewport" content="width=device-width,initial-scale=1.0">

<!--meta info-->
<meta name="author" content="">
<meta name="keywords" content=""/>
<meta name="description" content=""/>
<meta property="og:title" content=""/>
<meta property="og:description" content=""/>
<meta property="og:site_name" content="">
<meta property="og:type" content="website">
<meta property="og:locale" content="zh_tw">
<meta property="og:url" content="">
<meta property="og:image" content="">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="627">

<link rel="stylesheet" href="theme/tw/css/reset.css">
<link rel="stylesheet" href="theme/tw/css/css.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
<script type="text/javascript" src="js/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="js/script.js"></script>
<script type='text/javascript' src='js/jquery-imgLiquid.min.js'></script>
<script type='text/javascript' src="js/jquery.placeholder.js"></script>

<!-- Add fancyBox main JS and CSS files -->
<script type="text/javascript" src="js/fancybox/jquery.fancybox.js"></script>
<link rel="stylesheet" type="text/css" href="js/fancybox/jquery.fancybox.css" media="screen" />

<!-- slick -->
<script type="text/javascript" src="js/slick/slick.min.js"></script>
<link rel="stylesheet" type="text/css" href="js/slick/slick.css">
<link rel="stylesheet" type="text/css" href="js/slick/slick-theme.css">

<!-- scrollreveal -->
<script src="js/scrollreveal.js" type="text/javascript"></script>

<!-- 內卷軸 -->
<script src="js/nicescroll/jquery.nicescroll.js"></script>



<!--[if IE]>
    <script>
        document.createElement("header");
        document.createElement("menu");
        document.createElement("nav");
        document.createElement("section");
        document.createElement("article");
        document.createElement("aside");
        document.createElement("figure");
        document.createElement("hgroup");
        document.createElement("footer");
        document.createElement("address");
    </script>
    <![endif]-->
    <!--[if lt IE 9]>
    <script src="js/html5.js"></script>
<![endif]-->

<!-- 截圖套件 -->
<link rel="stylesheet" type="text/css" href="imageareaselect/css/imgareaselect-default.css" />    
<script type="text/javascript" src="imageareaselect/scripts/jquery.imgareaselect.min.js?v=<?=$version?>"></script> 


<script type="text/javascript">
$(function(){

    /* placeholder */
    $('input, textarea').placeholder();

    // 自動裁圖
    $('.imgLiquid').imgLiquid({
        fill: true, horizontalAlign: "center", verticalAlign: "center"
    });


    /*fancybox*/
    $('.fancybox').fancybox({
        padding:0,

        helpers: {
          overlay: {
          locked: true
          }
        }
    });

	/* fancybox by Steven */
	function lightbox(id){
		$.fancybox.open([
			{
				href : id ,
			}],
			{
			  padding:0,
			  margin:0,
			  closeBtn:false,
		   }
		);
	}


    $(".term_box").niceScroll({
        cursorcolor:"#2e50a2",
        cursoropacitymax:'1',
        cursorwidth:'8',
        cursorborderradius:'4px',
        mousescrollstep: 40,
        autohidemode: false,
        railpadding: { top: 5, right: 5, left: 5, bottom: 5 },
    });

    $('.watch_slide ul').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
    });


	/* 偵測手機板 */	
	var thisdevice = navigator.userAgent;
	if (thisdevice.match(/(iPhone|iPod|Android)/)){
		// lightbox('#fcbox_changeBrowser');
		console.log('test');
	}
    
});
</script>

<!-- facebook開發人員 -->
<script>

window.fbAsyncInit = function() {
    FB.init({
      appId      : '1726377784329602',
      xfbml      : true,
      version    : 'v2.9'
    });
    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

</script>

<div id="fcbox_changeBrowser">
            <div class="block">
                    <div class="txt">
                        親愛的貴賓您好：<br>
                        <br>
                        提醒您，若您使用手機或平板，<br>
                        請點選「<img src="theme/tw/images/icon_forward.jpg">」或「<img src="theme/tw/images/icon_setting.jpg">」，<br>
                        選擇以瀏覽器開啟，<br>
                        才能順利上傳照片參與活動喔！<br>
                    </div>
                    <a class="btn_close" href="javascript:void(0);" onclick="$.fancybox.close();">
                        確定
                    </a>
            </div>
</div>


