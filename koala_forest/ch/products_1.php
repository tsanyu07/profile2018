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
						<span>澳洲无尾熊之森<br>苏梅红酒</span>
						<small>Koala Forest <br>Cabernet Sauvigon Merlot</small>
					</h1>

					<div class="black_warp">
						<div class="l">
							<ul class="badge">
								<li>
									<small>等级</small>
									<span>入门</span>
									<div class="pic">
										<img src="theme/tw/images/pic1.png">
									</div>
								</li>
								<li>
									<small>酒精浓度</small>
									<span>13.5%</span>
									<div class="pic">
										<img src="theme/tw/images/pic1.png">
									</div>
								</li>
								<li>
									<small>适饮温度</small>
									<span>14-18°C</span>
									<div class="pic">
										<img src="theme/tw/images/pic1.png">
									</div>
								</li>
							</ul>

							<dl>
								<dd>产区</dd>
								<dt>南澳</dt>
							</dl>
							<dl>
								<dd>品种</dd>
								<dt>55%卡本内苏维翁、45%梅洛</dt>
							</dl>
							<dl>
								<dd>口感介绍</dd>
								<dt>酒液呈现深紫带深红色，卡本内独特的黑醋栗及梅子香气与梅洛的巧克力及辛香料味，丰富的莓果甜味与柔软的单宁口感，在口中达到完美平衡。</dt>
							</dl>
							<dl>
								<dd>瓶盖</dd>
								<dt>旋盖</dt>
							</dl>
							<dl>
								<dd>口感</dd>
								<dt>
									<span>简单</span>
									<div class="myrange mr1"></div>
									<span>复杂</span>
								</dt>
							</dl>
							<dl>
								<dd>酒体</dd>
								<dt>
									<span>柔软</span>
									<div class="myrange mr2"></div>
									<span>厚实</span>
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
							<li><a href="catering_wine.php#cater1">搭餐好伙伴</a></li>
							<li><a href="store.php">销售据点</a></li>
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