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
<body class="products prod3">
<div class="wrap">
	
	<?php include_once('_header.php'); ?>

	<div class="main">
		<div class="content">
			<div class="prod_box">
				<section>
					<h1 class="clearfix">
						<b>03</b>
						<span>澳洲無尾熊之森<br>森施赫精選</span>
						<small>Koala Forest <br>Shiraz Reserve</small>
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
									<span>13%</span>
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
								<dt>南澳Murry Darling產區</dt>
							</dl>
							<dl>
								<dd>品種</dd>
								<dt>100%施赫</dt>
							</dl>
							<dl>
								<dd>陳年</dd>
								<dt>使用美國橡木桶中陳年6個月</dt>
							</dl>
							<dl>
								<dd>口感介紹</dd>
								<dt>選用Murray Darling產區中最優質的施赫葡萄釀造，並在夜晚採收葡萄，保留葡萄最精華的甜味及香氣，酒液呈現深邃的紫紅色，在黑醋栗與梅子香氣中蘊藏著些許的黑胡椒、椰子及咖啡的香味，莓果及胡椒的口感不但沒有衝突感，反而相互交融完美的展現在酒體中,是一款典型的澳洲施赫酒款，強壯卻又不失滑順，是最適合與各式料理搭配的完美酒款。</dt>
							</dl>
							<dl>
								<dd>瓶蓋</dd>
								<dt>旋蓋</dt>
							</dl>
							<dl>
								<dd>口感</dd>
								<dt>
									<span>簡單</span>
									<div class="myrange mr3"></div>
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
								<img src="theme/tw/images/prod_wine3.png">
							</div>
						</div>

						<ul class="arrow">
							<li class="prev">
								<a href="products_2.php">
									<img src="theme/tw/images/arrow_prev.png">
								</a>
							</li>
							<li class="next">
								<a href="products_1.php">
									<img src="theme/tw/images/arrow_next.png">
								</a>
							</li>
						</ul>
					</div>

					<div class="wine_btn wine3">
						<ul>
							<li><a href="catering_wine.php#cater3">搭餐好夥伴</a></li>
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