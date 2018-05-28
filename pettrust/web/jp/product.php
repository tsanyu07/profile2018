<?php include_once('../_config.php'); ?>
<?php $ThisUrl = basename(__FILE__); ?>
<?php

    $ID = $_GET['id'] * 1;

    //商品列表
    if ($ID > 0) {

        $sqlstr = "SELECT * FROM `".DBTable_Product_Class."` WHERE `del` != '1' AND `showup_switch` = '1' AND `id` = '".$ID."'";
        $ProductClassData = $db->getRow($sqlstr);

        $ProductClassName = $ProductClassData['name_jp'];

        //商品列表
        $sqlstr = "SELECT * FROM `".DBTable_Product."` WHERE `del` != '1' AND `showup_switch` = '1' AND `name_jp` != '' AND `product_class_id` = '".$ID."' ORDER BY `sort` ASC, `id` DESC";
        $ProductList = $db->getAll($sqlstr);

		} else {

        $ProductClassName = "ホットな商品";

        //商品列表
        $sqlstr = "SELECT * FROM `".DBTable_Product."` WHERE `del` != '1' AND `showup_switch` = '1' AND `name_jp` != '' AND `hot_switch` = '1' ORDER BY `sort` ASC, `id` DESC";
        $ProductList = $db->getAll($sqlstr);

		}

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
    $sqlstr = "SELECT * FROM `".DBTable_Product_Class."` WHERE `del` != '1' AND `showup_switch` = '1' AND `name_jp` != '' ORDER BY `sort` ASC, `id` DESC";
    $ProductClassList = $db->getAll($sqlstr);

    for ($i = 0; $i < sizeof($ProductClassList); $i++) {

        //商品列表
        $sqlstr = "SELECT * FROM `".DBTable_Product."` WHERE `del` != '1' AND `showup_switch` = '1' AND `product_class_id` = '".$ProductClassList[$i]['id']."' AND `name_jp` != '' ORDER BY `sort` ASC, `id` DESC";
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
                	<h2><?=$ProductClassName?></h2>
                	<ul class="pic_list">
<?php

    for ($i = 0; $i < sizeof($ProductList); $i++) {

        echo "                		<li>\n";
        echo "                			<a href=\"product_info.php?id=".$ProductList[$i]['id']."\"><div>".($ProductList[$i]['pic1'] != "" && file_exists(Path_Upload.$ProductList[$i]['pic1']) ? "<img src=\"".Url_Upload.$ProductList[$i]['pic1']."\">" : "")."</div><p>".$ProductList[$i]['name_jp']."</p></a>\n";
        echo "                		</li>\n";
        
    }

?>
                	</ul>
                </div>

            </div>
		</div>
    </div>

    </div>


<?php include_once('_footer.php'); ?>
</body>