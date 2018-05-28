<?php include_once('../_config.php'); ?>
<?php $ThisUrl = basename(__FILE__); ?>
<?php

    //頁面列表
    $sqlstr = "SELECT * FROM `".DBTable_Technology."` WHERE `del` != '1' AND `showup_switch` = '1' AND `name` != '' ORDER BY `sort` ASC, `id` DESC";
    $TechnologyList = $db->getAll($sqlstr);

    //頁面資料
		$ID = $_GET['id'] * 1;
		if ($ID <= 0)
				$ID = $TechnologyList[0]['id'];

    $sqlstr = "SELECT * FROM `".DBTable_Technology."` WHERE `del` != '1' AND `showup_switch` = '1' AND `name` != '' AND `id` = '".$ID."'";
    $TechnologyData = $db->getRow($sqlstr);

?>
<!DOCTYPE html>
<html>
<head>
<title>Pettrust</title>
<?php include_once('_meta.php'); ?>
<link rel="stylesheet" href="theme/tw/css/reset.css">
<link rel="stylesheet" href="theme/tw/css/css.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
<script type="text/javascript" src="js/jquery-1.8.3.min.js"></script>
<script src="js/slider/slider.js"></script>
<script type="text/javascript" src="js/script.js"></script>
<script type='text/javascript' src='js/jquery-imgLiquid.min.js'></script>
<!-- slick -->
<script type="text/javascript" src="js/slick/slick.min.js"></script>
<link rel="stylesheet" type="text/css" href="js/slick/slick.css">
<link rel="stylesheet" type="text/css" href="js/slick/slick-theme.css">
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<link rel="stylesheet" type="text/css" href="js/jquery-ui.css">


<script type="text/javascript">
$(function(){

    // 自動裁圖
    $('.imgLiquid').imgLiquid({
        fill: true, horizontalAlign: "center", verticalAlign: "center"
    });
     $('.imgLiquid2').imgLiquid({
        fill: false, horizontalAlign: "center", verticalAlign: "center"
    });





 $('.gallery_slider ul').slick({
            autoplaySpeed: 1500,
            autoplay: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            responsive: [
                {
                    breakpoint: 671,
                    settings: {
                        autoplay: true,
                    }
                }
            ]
        });
	
});


$( function() {
    $( "#tabs" ).tabs();
  } );
</script>



</head>
<body>
<?php include_once('_header.php'); ?>





	<div class="main">
        <div class="bgbanner bgeducation">
            <div class="block">
            <h2>Technology</h2>
            </div>
        </div>


	

	<div class="con con4">
		<div class="block">
            <div class="proinfo clearfix">
                <ul class="sidemenu">

<?php

    for ($i = 0; $i < sizeof($TechnologyList); $i++)
        echo "                	<li class=\"sidelist".($ID == $TechnologyList[$i]['id'] ? " selected" : "")."\"><i class=\"fa fa-caret-right\"></i><a href=\"technology.php?id=".$TechnologyList[$i]['id']."\">".$TechnologyList[$i]['name']."</a></li>";

?>
                </ul>
                <div class="content">
                	<h2><?=$TechnologyData['name']?></h2>                 		
    <div class="edit">
      <?=$TechnologyData['contents']?>
    </div>
        </div>

            </div>
		</div>
    </div>

    </div>


<?php include_once('_footer.php'); ?>
</body>