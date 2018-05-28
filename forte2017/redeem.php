<!DOCTYPE html>
<html>
<head>	
	
<?php include_once('_meta.php'); ?>

</head>

<body class="redeem">
<div class="wrap">
	<?php include_once('_header.php'); ?>
	<div class="main">
		<div class="content">
			<div class="con con1">
				<div class="redeem_box">
					<div class="desc">
						<h2><img src="theme/tw/images/redeem_tit.png" alt="現在開始啟動變美時刻" title="現在開始啟動變美時刻"></h2>
						<p>感謝您的填寫，已將簡訊寄至手機，<br>
						請憑簡訊至所填櫃上兌換，<br>
						每人僅限兌換壹次。</p>
					</div>
					<div class="pic">
						<img src="theme/tw/images/prod.png">
					</div>
					
					<div class="mylink w100">
						<ul>
							<li class="grape"><a href="javascript:;" id="fbshare">立即分享</a></li>
						</ul>
					</div>
				</div>

				
			</div>

			<div class="bg imgLiquid">
				<img src="theme/tw/images/pg_bg4.jpg">
			</div>
		</div>
	</div>
</div>

<?php include_once('_footer.php'); ?>

<script>
document.getElementById('fbshare').onclick = function(){
    FB.ui({
        method: 'share',
        href: 'https://www.facebook.com/crazyck101/',
    }, function(response){});
}
</script>

</body>
</html>