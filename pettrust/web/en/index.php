<?php include_once('../_config.php'); ?>
<?php $ThisUrl = basename(__FILE__); ?>
<!DOCTYPE html>
<html>
<head>
<title>Pettrust</title>
<?php include_once('_meta.php'); ?>
<link rel="stylesheet" href="theme/tw/css/reset.css">
<link rel="stylesheet" href="theme/tw/css/css.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="js/slider/slider.js"></script>
<script type="text/javascript" src="js/script.js"></script>
<script type='text/javascript' src='js/jquery-imgLiquid.min.js'></script>





</head>
<body>
<?php include_once('_header.php'); ?>



	<div class="main">

                <div class="wideslider">
                    <ul>
<?php

    //ºô¯¸¦Cªí
    $sqlstr = "SELECT * FROM `".DBTable_Banner."` WHERE `del` != '1' AND `showup_switch` = '1' ORDER BY `sort` ASC, `id` DESC";
    $BannerList = $db->getAll($sqlstr);

    for ($i = 0; $i < sizeof($BannerList); $i++)
        if ($BannerList[$i]['file'] != "" && file_exists(Path_Upload.$BannerList[$i]['file']))
            echo "                        <li><a".($BannerList[$i]['url'] != "" ? " href=\"".$BannerList[$i]['url']."\"" : "")."><img src=\"".Url_Upload.$BannerList[$i]['file']."\"></a></li>\n";

?>
                    </ul>
                </div>


		<div class="con con2">
			<div class="block">
				<div class="info info_01">
				<a class="info_link" href="product.php">
				    <div class="colorbox"></div>
					<div class="info_01_pic">
					    <img src="theme/tw/images/pic_01.jpg">
					</div>
					<div class="info_01_txt">
						<h3>Product</h3>
						
					</div>
	 	 	    </a>
				</div>

				<div class="info info_02">
				<a class="info_link" href="technology.php">
				    <div class="colorbox"></div>
					<div class="info_02_txt">
						<h3>Technology</h3>
						
					</div>
					<div class="info_02_pic">
					    <img src="theme/tw/images/pic_02.jpg">
					</div>
				</a>	
				</div>
			</div>
		</div>



		<div class="con3">
			<div class="block">
			<h2>Movie</h2>
			<a class="video" href="https://www.youtube.com/watch?v=fVvBr8mo13Q" target="_blank"><img src="theme/tw/images/play_btn.png"></a>
			</div>

	    </div>


	</div>


<?php include_once('_footer_index.php'); ?>
</body>