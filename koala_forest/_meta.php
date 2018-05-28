<!--for ie-->
<meta http-equiv="X-UA-Compatible" content="IE=EDGE; IE=10; IE=9; IE=8;" />
<meta charset="UTF-8">

<title>澳洲無尾熊之森KOALA FOREST</title>
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<link rel="icon" href="theme/tw/images/favicon.ico">
<!--meta info-->
<meta name="author" content="澳洲無尾熊之森KOALA FOREST">
<meta name="keywords" content="澳洲無尾熊之森, KOALA FOREST"/>
<meta name="description" content="Drink for fun. 澳洲無尾熊之森紅葡萄酒不需醒酒、只要輕輕一扭即可享用，果香濃郁的口感絕對會是聚會時的最佳夥伴。"/>
<meta property="og:title" content="澳洲無尾熊之森KOALA FOREST" />
<meta property="og:description" content="Drink for fun. 澳洲無尾熊之森紅葡萄酒不需醒酒、只要輕輕一扭即可享用，果香濃郁的口感絕對會是聚會時的最佳夥伴。"/>
<meta property="og:site_name" content="澳洲無尾熊之森KOALA FOREST">
<meta property="og:type" content="website">
<meta property="og:locale" content="zh_tw">
<meta property="og:url" content="http://koalaforest-wine.com/index.php">
<meta property="og:image" content="http://koalaforest-wine.com/theme/tw/images/fb_share.jpg">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="627">

<!--google font-->
<link href="https://fonts.googleapis.com/css?family=Abel" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">

<link rel="stylesheet" href="theme/tw/css/reset.css">
<link rel="stylesheet" href="theme/tw/css/css.css">
<link rel="stylesheet" href="theme/tw/css/rwd.css">
<!--css animations-->
<link rel="stylesheet" href="theme/tw/css/animate.css">
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

<!--parallax-->
<script type="text/javascript" src="js/parallax/jquery.parallax-1.1.3.js"></script>
<script type="text/javascript" src="js/parallax/jquery.localscroll-1.2.7-min.js"></script>
<script type="text/javascript" src="js/parallax/jquery.scrollTo-1.4.2-min.js"></script>

<!-- scrollreveal -->
<script type="text/javascript" src="js/scrollreveal.js"></script>


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
    <script src="../js/html5.js"></script>
<![endif]-->


<script type="text/javascript">
$(function(){

    /*placeholder*/
    $('input, textarea').placeholder();

    // 自動裁圖
    $('.imgLiquid').imgLiquid({
        fill: true, horizontalAlign: "center", verticalAlign: "center"
    });

    // $('#nav').onePageNav({
    //     currentClass: 'current',
    //     changeHash: false,
    //     scrollSpeed: 750,
    //     scrollThreshold: 0.5,
    //     filter: '',
    //     easing: 'swing',
    // });

    /*fancybox*/
    $('.fancybox').fancybox({
        padding:0,
        margin:0,

        helpers: {
          overlay: {
          locked: true
          }
        }
    });

    $('.banner_slider ul').slick({
        autoplaySpeed: 1500,
        autoplay: true,
        centerMode: true,
        arrows: true,
    });

		
});
</script>



