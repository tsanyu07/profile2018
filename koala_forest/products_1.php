<!DOCTYPE html>
<html>
<head>
	
	
	<?php include_once('_meta.php'); ?>

<script>
/*背景視差效果*/
function myparallax(){
	$('.bg_tri').css('background-position', 'center');
	$('.bg_tri').parallax("50%", 1.5);
}
$(document).ready(function(){
	/*banner效果*/
	$('.prod_box .r .pic').addClass('animated bounceInLeft');

	myparallax();
});
</script>
</head>
<body class="products prod1">
<div class="wrap">
	
	<?php include_once('_header.php'); ?>

	<div class="main">
		<div class="content">
			<div class="prod_box">
				<section>
					<h1 class="clearfix">
						<b>01</b>
						<span>澳洲無尾熊之森<br>蘇梅紅酒</span>
						<small>Koala Forest <br>Cabernet Sauvigon Merlot</small>
					</h1>

					<div class="black_warp">
						<div class="l">
							<ul class="badge">
								<li>
									<small>等級</small>
									<span>入門</span>
									<div class="pic">
										<img src="theme/tw/images/pic1.png">
									</div>
								</li>
								<li>
									<small>酒精濃度</small>
									<span>13.5%</span>
									<div class="pic">
										<img src="theme/tw/images/pic1.png">
									</div>
								</li>
								<li>
									<small>適飲溫度</small>
									<span>14-18°C</span>
									<div class="pic">
										<img src="theme/tw/images/pic1.png">
									</div>
								</li>
							</ul>

							<dl>
								<dd>產區</dd>
								<dt>南澳</dt>
							</dl>
							<dl>
								<dd>品種</dd>
								<dt>55%卡本內蘇維翁、45%梅洛</dt>
							</dl>
							<dl>
								<dd>口感介紹</dd>
								<dt>酒液呈現深紫帶深紅色，卡本內獨特的黑醋栗及梅子香氣與梅洛的巧克力及辛香料味，豐富的莓果甜味與柔軟的單寧口感，在口中達到完美平衡。</dt>
							</dl>
							<dl>
								<dd>瓶蓋</dd>
								<dt>旋蓋</dt>
							</dl>
							<dl>
								<dd>口感</dd>
								<dt>
									<span>簡單</span>
									<div class="myrange mr1"></div>
									<span>複雜</span>
								</dt>
							</dl>
							<dl>
								<dd>酒體</dd>
								<dt>
									<span>柔軟</span>
									<div class="myrange mr2"></div>
									<span>厚實</span>
								</dt>
							</dl>
						</div>

						<div class="r">
							<div class="pic imgLiquid">
								<img src="theme/tw/images/prod_wine1.png">
							</div>
						</div>

						<ul class="arrow">
							<li class="prev">
								<a href="products_3.php">
									<img src="theme/tw/images/arrow_prev.png">
								</a>
							</li>
							<li class="next">
								<a href="products_2.php">
									<img src="theme/tw/images/arrow_next.png">
								</a>
							</li>
						</ul>
					</div>

					<div class="wine_btn wine1">
						<ul>
							<li><a href="catering_wine.php#cater1">搭餐好夥伴</a></li>
							<li><a href="store.php">銷售據點</a></li>
						</ul>
					</div>

				</section>
				<div class="bg_tri"></div>
			</div>
		</div>
	</div>
</div>

<?php include_once('_footer.php'); ?>	

</body>
</html>