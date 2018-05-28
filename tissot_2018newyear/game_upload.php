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
                   </div>

                   <div>
                   	<div class="para">
                   		<h4>遊戲規則說明</h4>
                   		<p><span>即日起至
 2/20(二)</span>上傳您與好友的合照，製作獨一無二的旺年賀卡，就有機會獲得旺年限定好禮一份喔！ <br>
                        <small>※ 本活動如有未盡事宜，瑞士商斯沃琪瑞表遠東股份有限公司台灣分公司擁有保留、修改、暫停及解釋活動內容之權利。<br> ※ 獎項公布將於<span>3/2(五)</span>公布於<span>TISSOT粉絲團中</span>。</small>
                   		</p>
                   		<h4>分享說明</h4>
                   		<p>立即公開分享Facebook，並Hashtag<span>#天梭旺年之交 #THISISYOURTIME

</span>，就有機會抽中TISSOT旺年限定好禮乙份。</p>
                   	</div>
                   	<div class="upload_box">
                   		<div class="title">
                   			<p>製作我的賀年卡</p>
                   		</div>
                   		<div class="upload3"><img src="theme/tw/images/upload.jpg" alt="">
		                    <input type="file" name="picture_file" id="picture_file">
		                </div>
                   	</div>
                   
                   	<div class="btn">
                   		<a href="game_share.php">確認送出</a>
                   	</div>
                   </div>
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