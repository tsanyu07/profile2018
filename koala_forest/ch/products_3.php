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
						<span>澳洲无尾熊之森<br>施赫精选</span>
						<small>Koala Forest <br>Shiraz Reserve</small>
					</h1>

					<div class="black_warp">
						<div class="l">
							<ul class="badge">
								<li>
									<small>等级</small>
									<span>精选</span>
									<div class="pic">
										<img src="theme/tw/images/pic1.png">
									</div>
								</li>
								<li>
									<small>酒精浓度</small>
									<span>13%</span>
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
								<dt>南澳Murry Darling产区</dt>
							</dl>
							<dl>
								<dd>品种</dd>
								<dt>100%施赫</dt>
							</dl>
							<dl>
								<dd>陈年</dd>
								<dt>使用美国橡木桶中陈年6个月</dt>
							</dl>
							<dl>
								<dd>口感介绍</dd>
								<dt>选用Murray Darling产区中最优质的施赫葡萄酿造，并在夜晚采收葡萄，保留葡萄最精华的甜味及香气，酒液呈现深邃的紫红色，在黑醋栗与梅子香气中蕴藏着些许的黑胡椒、椰子及咖啡的香味，莓果及胡椒的口感不但没有冲突感，反而相互交融完美的展现在酒体中,是一款典型的澳洲施赫酒款，强壮却又不失滑顺，是最适合与各式料理搭配的完美酒款。</dt>
							</dl>
							<dl>
								<dd>瓶盖</dd>
								<dt>旋盖</dt>
							</dl>
							<dl>
								<dd>口感</dd>
								<dt>
									<span>简单</span>
									<div class="myrange mr3"></div>
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
							<li><a href="catering_wine.php#cater3">搭餐好伙伴</a></li>
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