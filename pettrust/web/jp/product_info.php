<?php include_once('../_config.php'); ?>
<?php $ThisUrl = basename(__FILE__); ?>
<?php

    $ID = $_GET['id'] * 1;

		if ($ID <= 0) {
			header("Location: product.php");
			exit();
		}

    //商品列表
    $sqlstr = "SELECT * FROM `".DBTable_Product."` WHERE `del` != '1' AND `showup_switch` = '1' AND `name_jp` != '' AND `id` = '".$ID."'";
    $ProductData = $db->getRow($sqlstr);

    //下載列表
    $sqlstr = "SELECT * FROM `".DBTable_Product_Download."` WHERE `del` != '1' AND `showup_switch` = '1' AND `product_id` = '".$ID."' AND `type` = '1' AND `name_jp` != '' AND `file_jp` != '' ORDER BY `sort` ASC, `id` ASC";
    $DownloadType1List = $db->getAll($sqlstr);

    $sqlstr = "SELECT * FROM `".DBTable_Product_Download."` WHERE `del` != '1' AND `showup_switch` = '1' AND `product_id` = '".$ID."' AND `type` = '2' AND `name_jp` != '' AND `file_jp` != '' ORDER BY `sort` ASC, `id` ASC";
    $DownloadType2List = $db->getAll($sqlstr);

    $sqlstr = "SELECT * FROM `".DBTable_Product_Download."` WHERE `del` != '1' AND `showup_switch` = '1' AND `product_id` = '".$ID."' AND `type` = '3' AND `name_jp` != '' AND `file_jp` != '' ORDER BY `sort` ASC, `id` ASC";
    $DownloadType3List = $db->getAll($sqlstr);

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
        <div class="bgbanner bgproduct">
            <div class="block">
            <h2>Product <small>製品紹介</small></h2>
            </div>
        </div>


	

	<div class="con con4">
		<div class="block">
            <div class="proinfo clearfix">
                <ul class="sidemenu">
                	<li class="sidelist<?=($ID == 0 ? " selected" : "")?>">
                		<a class="list_link" href="product.php">ホットな商品</a>
<?php

    //商品分類列表
    $sqlstr = "SELECT * FROM `".DBTable_Product_Class."` WHERE `del` != '1' AND `showup_switch` = '1' ORDER BY `sort` ASC, `id` DESC";
    $ProductClassList = $db->getAll($sqlstr);

    for ($i = 0; $i < sizeof($ProductClassList); $i++) {

        //商品列表
        $sqlstr = "SELECT * FROM `".DBTable_Product."` WHERE `del` != '1' AND `showup_switch` = '1' AND `product_class_id` = '".$ProductClassList[$i]['id']."' ORDER BY `sort` ASC, `id` DESC";
        $ProductDataList = $db->getAll($sqlstr);

        echo "                	<li class=\"sidelist".($ProductClassList[$i]['id'] == $ID ? " selected" : "")."\">\n";
        echo "                		<a class=\"list_link\" href=\"#\" onclick=\"return false;\">".$ProductClassList[$i]['name_jp']."</a>\n";

        if (sizeof($ProductDataList) > 0) {

            echo "                	    <ul class=\"branch\">\n";

            for ($j = 0; $j < sizeof($ProductDataList); $j++)
                echo "                	     	<li><a href=\"product_info.php?id=".$ProductDataList[$j]['id']."\">".$ProductDataList[$j]['name_jp']."</a></li>\n";

            echo "                	    </ul>\n";

        }

        echo "                	</li>\n";

    }

?>
                </ul>
                <div class="content">
                	<h2><?=$ProductData['name_jp']?></h2>
                	<div class="myinfo">
                		    <div class="gallery_slider">
                		    <ul>
<?php

    if ($ProductData['pic1'] != "" && file_exists(Path_Upload.$ProductData['pic1']))
        echo "                		        <li><img src=\"".Url_Upload.$ProductData['pic1']."\"></li>";

    if ($ProductData['pic2'] != "" && file_exists(Path_Upload.$ProductData['pic2']))
        echo "                		        <li><img src=\"".Url_Upload.$ProductData['pic2']."\"></li>";

    if ($ProductData['pic3'] != "" && file_exists(Path_Upload.$ProductData['pic3']))
        echo "                		        <li><img src=\"".Url_Upload.$ProductData['pic3']."\"></li>";

?>
                		    </ul>
                		    </div>
                		    <p class="info_txt"><?=nl2br($ProductData['introduction_jp'])?></p>
                		</div>
  <div id="tabs">
  <ul>
    <li><a href="#tabs-1">専門家は検証します</a></li>
    <li><a href="#tabs-2">特徴</a></li>
    <li><a href="#tabs-3">仕様</a></li>
    <li><a href="#tabs-4">アクセサリー</a></li>
    <li><a href="#tabs-5">ファイル・リンク</a></li>
  </ul>
  <div id="tabs-1" class="edit">
    <?=$ProductData['certification_jp']?>
  </div>
  <div id="tabs-2" class="edit">
    <?=$ProductData['feature_jp']?>
  </div>
  <div id="tabs-3" class="edit">
    <?=$ProductData['specification_jp']?>
  </div>
  <div id="tabs-4" class="edit">
    <?=$ProductData['accessory_jp']?>
  </div>
  <div id="tabs-5" class="edit">
    <h4>檔案下載</h4>
    <ul class="download">
<?php

    if (sizeof($DownloadType1List) > 0) {

        echo "      <li>".$DownloadType[1]['jp']."：";

        for ($i = 0; $i < sizeof($DownloadType1List); $i++)
            if ($DownloadType1List[$i]['file_jp'] != "" && file_exists(Path_Upload.$DownloadType1List[$i]['file_jp']))
                echo "<a href=\"".Url_Upload.$DownloadType1List[$i]['file_jp']."\" target=\"_blank\">".$DownloadType1List[$i]['name_jp']."</a>";

        echo "</li>";

    }

    if (sizeof($DownloadType2List) > 0) {

        echo "      <li>".$DownloadType[2]['jp']."：";

        for ($i = 0; $i < sizeof($DownloadType2List); $i++)
            if ($DownloadType2List[$i]['file_jp'] != "" && file_exists(Path_Upload.$DownloadType2List[$i]['file_jp']))
                echo "<a href=\"".Url_Upload.$DownloadType2List[$i]['file_jp']."\" target=\"_blank\">".$DownloadType2List[$i]['name_jp']."</a>";

        echo "</li>";

    }

    if (sizeof($DownloadType3List) > 0) {

        echo "      <li>".$DownloadType[3]['jp']."：";

        for ($i = 0; $i < sizeof($DownloadType3List); $i++)
            if ($DownloadType3List[$i]['file_jp'] != "" && file_exists(Path_Upload.$DownloadType3List[$i]['file_jp']))
                echo "<a href=\"".Url_Upload.$DownloadType3List[$i]['file_jp']."\" target=\"_blank\">".$DownloadType3List[$i]['name_jp']."</a>";

        echo "</li>";

    }

?>
    </ul>
  </div>
</div>
                	</div>
                </div>

            </div>
		</div>
    </div>

    </div>


<?php include_once('_footer.php'); ?>
</body>