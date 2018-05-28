<!--for ie-->
<meta http-equiv="X-UA-Compatible" content="IE=EDGE; IE=10; IE=9; IE=8;" />
<meta charset="UTF-8">

<title>FORTE 紫要青春 凍齡藏寶盒</title>
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



<script type="text/javascript">
$(function(){

    /*placeholder*/
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

    ////偵測是否為 mobile
    var thisdevice = navigator.userAgent;
    if(!thisdevice.match(/(iPhone|iPod|iPad|Android)/)){
      $('.ppl_review').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        vertical: true,
        verticalSwiping:true,
        dots: true,
        prevArrow:'<button type="button" class="slick-prev"></button>',
        nextArrow:'<button type="button" class="slick-next"></button>',

        responsive: [
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 421,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false,
            }
          }
        ]
      });
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





