<!DOCTYPE html>
<html>
<head>

	<?php include_once('_meta.php'); ?>
	<script>
	function clearSendInfo()
	{
		$("#name").val('');
		$("#email").val('');
		$("#phone").val('');
		$("#subject").val('');
		$("#content").val('');
	}
	function sendMail()
	{
		var name = $("#name").val();
		var email = $("#email").val();
		var phone = $("#phone").val();
		var subject = $("#subject").val();
		var content = $("#content").val();
		if(name == '' || email == '' || phone == '' || subject == '' || content == '')
		{
			alert("請填寫完整資料!");
			return false;
		}
		$.ajax({
			url:'ajax/sendMail.php',
			type:'post',
			data:{name:name,email:email,phone:phone,subject:subject,content:content},
			dataType:'json',
			success:function(response)
			{
				alert(response.msg);
				if(response.bool)
				{
					clearSendInfo();
				}
			},
			error:function(xhr)
			{
				console.log(xhr.responseText);
				alert('send error!');
			}
		});
	}
	</script>

</head>
<body class="index">
	<div class="wrap">
		<?php include_once('_header.php'); ?>
 		<div id="section2" class="section product">
				<div class="product-slider">
				    <div class="slider-item">
					    <a href="product01.php"><img src="theme/tw/images/banner01.jpg" alt=""></a>
					</div>
					<div class="slider-item">
						<a href="product01.php"><img src="theme/tw/images/banner02.jpg" alt=""></a>
					</div>
					<div class="slider-item">
						<a href="product02.php"><img src="theme/tw/images/banner03.jpg" alt=""></a>
					</div>
					<div class="slider-item">
						<a href="product03.php"><img src="theme/tw/images/banner04.jpg" alt=""></a>
					</div>
				</div>
				<div class="banner_dot">
					<img src="theme/tw/images/banner_dot.png" alt="">
				</div>
			<div class="bg-slider">
				<div class="slider-item imgLiquid">
					<img src="theme/tw/images/banner_bg01.jpg" alt="">
				</div>
				<div class="slider-item imgLiquid">
					<img src="theme/tw/images/banner_bg02.jpg" alt="">
				</div>
				<div class="slider-item imgLiquid">
					<img src="theme/tw/images/banner_bg03.jpg" alt="">
				</div>
				<div class="slider-item imgLiquid">
					<img src="theme/tw/images/banner_bg04.jpg" alt="">
				</div>
			</div>
		</div>

		<div class="con" id="product_footer">
			<section>
				<h2>PRODUCT<br><small>主要產品</small></h2>
				<div>
					<div class="pro_box">
						<a href="product01.php">
						<div class="pro_pic">
							<img src="theme/tw/images/index_pic01.png">
						</div>
						<div class="pro_tit">
							<h3>AVANT<br><small>多功能伸縮臂作業車</small></h3>
						</div>
						<div class="pro_btn"></div>
						<div class="pro_bgy"></div>
						<div class="pro_bg imgLiquid">
							<img src="theme/tw/images/pro_bg.jpg">
						</div>
					    </a>
					</div>
					<div class="pro_box">
						<a href="product02.php">
						<div class="pro_pic">
							<img src="theme/tw/images/index_pic02.png">
						</div>
						<div class="pro_tit">
							<h3>BROKK<br><small>電動遙控拆除機器人</small></h3>
						</div>
						<div class="pro_btn"></div>
						<div class="pro_bgy"></div>
						<div class="pro_bg imgLiquid">
							<img src="theme/tw/images/pro_bg.jpg">
						</div>
					    </a>
					</div>
					<div class="pro_box">
						<a>
						<div class="pro_pic">
							<img src="theme/tw/images/index_pic03.png">
						</div>
						<div class="pro_tit">
							<h3 class="pro_tit2">Atlas Copco<br><small>移動式柴油發電機</small></h3>
						</div>
						<div class="pro_btn"></div>
						<div class="pro_bgy"></div>
						<div class="pro_bg imgLiquid">
							<img src="theme/tw/images/pro_bg.jpg">
						</div>
					    </a>
					</div>
					<div class="pro_box">
						<a href="product03.php">
						<div class="pro_pic">
							<img src="theme/tw/images/index_pic04.png">
						</div>
						<div class="pro_tit">
							<h3>EVERDIGM<br><small>油壓破碎機</small></h3>
						</div>
						<div class="pro_btn"></div>
						<div class="pro_bgy"></div>
						<div class="pro_bg imgLiquid">
							<img src="theme/tw/images/pro_bg.jpg">
						</div>
					    </a>
					</div>
				</div>
			</section>
		</div>
		
		<div class="con con2" id="links">
			<section>
				<h2>LINKS<br><small>友站連結</small></h2>
				<div class="links-slider">
				    <div class="links-item">
					    <a href="http://www.avanttecno.com/www/global/" target="_blank"><img src="theme/tw/images/links_logo01.png" alt=""></a>
					</div>
					<div class="links-item">
						<a href="http://everdigm.com/English/" target="_blank"><img src="theme/tw/images/links_logo02.jpg" alt=""></a>
					</div>
					<div class="links-item">
						<a href="http://www.brokk.com/" target="_blank"><img src="theme/tw/images/links_logo03.png" alt=""></a>
					</div>
					<div class="links-item">
						<a href="https://www.atlascopco.com/" target="_blank"><img src="theme/tw/images/links_logo04.jpg" alt=""></a>
					</div>
					<div class="links-item">
						<a href="http://www.hongsan.com.tw/" target="_blank"><img src="theme/tw/images/links_logo05.jpg" alt=""></a>
					</div>
				</div>
			</section>
			<div class="links_bg imgLiquid"><img src="theme/tw/images/links_bg.jpg"></div>
		</div>

		<div class="con" id="contact_us">
			<section>
				<h2>CONTACT US<br><small>聯絡我們</small></h2>
				<div class="myform">
					<div class="contact_info">
						<div class="myinfo">
							<div class="info_icon"><i class="fa fa-phone"></i></div>
							<p>+886-919-254-061</p>
						</div>
						<div class="myinfo">
							<div class="info_icon"><i class="fa fa-map-marker"></i></div>
							<p>台北市信義區松仁路101號12樓</p>
						</div>
						<div class="myinfo">
							<div class="info_icon"><i class="fa fa-envelope"></i></div>
							<p>Johnnysu73102@yahoo.com.tw</p>
						</div>
						<div class="myinfo">
							<div class="info_icon"><i class="fa fa-user"></i></div>
							<p>聯絡人：蘇信全</p>
						</div>
					</div>
					<div class="contact_form">
						<div class="box">
                        <dl>
                            <dt>姓名</dt>
                            <dd><input type="text" id="name" name="name"></dd>
                        </dl>
                        <dl>
                            <dt>電子郵件</dt>
                            <dd><input type="email" id="email" name="email"></dd>
                        </dl>
                        <dl>
                            <dt>聯絡電話</dt>
                            <dd><input type="text" id="phone" name="phone"></dd>
                        </dl>
                        </div>
                        <div class="box">
                        <dl>
                            <dt>主旨</dt>
                            <dd><input type="text" id="subject" name="subject"></dd>
                        </dl>
                        <dl>
                            <dt>信件內容</dt>
                            <dd><textarea id="content" name="content" rows="4"></textarea></dd>
                        </dl>
                        </div>
                        <div class="form_btn">
                        <a href="javascript:;" id="submit" onclick="sendMail();">確認送出</a>
					    </div>
				</div>
			</section>
		</div>
	</div>
	 <?php include_once('_footer.php'); ?>
</body>

</html>