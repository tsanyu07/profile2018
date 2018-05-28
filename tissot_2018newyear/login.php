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
                   	<img src="theme/tw/images/title1.png" alt="參加抽獎">
                   </div>

                   <div>
                   	<div class="para">
                   		<p>凡在台灣境內天梭表授權經銷商及名品店購買天梭表任一錶款，並至本活動專頁上傳購買表款之保固卡，保固卡上以正楷書寫購買人姓名(一張保固卡一次抽獎機會) ，並輸入相關個人基本資料即可參加抽獎，就有機會獲得<span>台北瑞士來回機票乙張</span>。</p>
                   	<div class="form">
						 				<dl>
		                         		   <dt>保固卡：</dt>
		                          		   <dd>
		                          		   	<div class="upload1"><img src="theme/tw/images/upload.jpg" alt="">
		                          		         <input type="file" name="event_file" id="event_file">
		                          		     </div>
		                          		   	<div class="upload2">
		                          		   		<img src="theme/tw/images/login_pic1.jpg" alt="">
		                          		   		<p>請以正楷於簽名處書寫姓名，不接受<br>修正液、修正帶或任何方式塗改</p>
		                          		   	</div>
		                          		   	<div class="ps">※ 請上傳可清晰辨識保固卡資訊之照片。</div>
		                          		   </dd>
		                        		</dl>
		                       			<dl>
		                          			<dt>姓　名：</dt>
		                         		    <dd><input type="text" id="name" name="name">
		                         		    <div class="ps">※ 請留下代表領獎真實姓名，領獎姓名需與保固卡上簽名相同。</div></dd>
		                        		</dl>
		                        		<dl>
		                         		   <dt>電　話：</dt>
		                          		   <dd><input type="text" id="number" name="number">
		                          		   <div class="ps">※ 請留下可連繫中獎人聯絡手機電話。</div></dd>
		                        		</dl>
		                       			<dl>
		                          			<dt>E-mail：</dt>
		                         		    <dd><input type="email" id="email" name="email">
		                         		    <div class="ps">※ 請留下可收件得獎信函E-mail信箱。</div></dd>
		                        		</dl>
		            </div>	



                   	<div class="btn">
                   		<a href="index.php">確定送出</a>
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
</div>
<div class="white"></div>


</body>
<script>
	

</script>
</html>