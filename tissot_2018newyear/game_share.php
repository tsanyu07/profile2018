<!DOCTYPE html>
<html>
<head>	
	
<?php include_once('_meta.php'); ?>

</head>

<body class="index">

<!-- Load Facebook SDK for JavaScript -->
<div id="fb-root"></div>
<script>(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

<?php include_once('_note.php'); ?>

<div class="wrap">
	<div class="main">
		<div class="content">
			<div class="idx_banner">
				<div class="banner_box">
                   <div class="title">
                   	    <img src="theme/tw/images/title2.png" alt="2018旺年之交大募集">
                        <p class="member">已有<span>001234</span>組旺年之交，繼續再2018旺下去</p>
                   </div>
                   <div class="share_box">
                      <div class="myphoto">
                          <img src="theme/tw/images/photo.jpg" alt="">
                      </div>
                      <div class="myshare">
                          <img src="theme/tw/images/game_share.png" alt="">
                          <p>立即公開分享Facebook，並Hashtag <span>#天梭旺年之交 #THISISYOURTIME</span>，就有機會抽中<span>TISSOT旺年限定好禮乙份</span>。</p>
                      </div>
                   </div>
                      <!-- 分享出去按鈕 -->
                   	  <div class="btn2">
                   		    <a class="clear" href="">取消</a>
                          <a class="share" href=""><i class="fa fa-facebook-square"></i> 立即分享</a>
                     	</div>
                      <!-- 分享製作按鈕 -->
                      <!-- <div class="btn btn3">
                        <a href="game_upload.php">製作我的賀年卡</a>
                      </div> -->
				</div>
			</div>
		</div>
	</div>
	<div class="tissot">
		<div class="footerlogo">
			<a href="index.php">
				<img src="theme/tw/images/tissot_logo.png" alt="tissot">
			</a>
		</div>
    </div>
</div>

<div class="white"></div>


</body>
<script>


</script>
</html>