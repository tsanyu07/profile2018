<!DOCTYPE html>
<html>
<head>
	
	
	<?php include_once('_meta.php'); ?>

<script>
/*背景視差效果*/
function myparallax(){
	/*banner*/
	$('.pg_banner .deco_l').css('background-position', 'bottom');
	$('.pg_banner .deco_l').parallax("0", -0.2);
	$('.pg_banner .deco_r').css('background-position', 'top');
	$('.pg_banner .deco_r').parallax("0", 0.2);

	/*banner*/
	$('.bg_tri').css('background-position', 'center');
	$('.bg_tri').parallax("50%", 1.5);
}

function myScrollReveal(){
	// scroll 動態
	window.sr = ScrollReveal({ reset: false });
	sr.reveal('.cater .txt', { duration: 1500, mobile: false});
	sr.reveal('.cater .bottle', { duration: 1500, mobile: false});
}

$(document).ready(function(){
	myparallax();

	////偵測是否為ie
	var ms_ie = false;
    var ua = window.navigator.userAgent;
    var old_ie = ua.indexOf('MSIE ');
    var new_ie = ua.indexOf('Trident/');

    if ((old_ie > -1) || (new_ie > -1)) {
    	ms_ie = true;
    }
    if ( ms_ie ) {

    	//is_ie & ie9
        if ($.browser.msie && parseInt($.browser.version, 10) == 9) {

		}else if($.browser.msie && parseInt($.browser.version, 10) == 8){
			$('.pg_banner .pic IMG').css({
				'padding-top' : '0',
				'width' : '600px',
				'height' : '708px',
			});	

		}else{

			myScrollReveal()
		}

	}else{
		/*我不是ie*/
		myScrollReveal()
	}


});


</script>
</head>
<body class="catering">
<div class="wrap">
	
	<?php include_once('_header.php'); ?>

	<div class="main">
		<div class="content">
			<div class="pg_banner">
				<section>
					<div class="txt">
						<img src="theme/tw/images/cater_txt.png" alt="Catering Wine 搭餐好伙伴" title="Catering Wine 搭餐好伙伴">

						<a href="javascript:;" onclick="scroll_cater1();"><span>赶紧来看看吧！</span><i class="fa fa-angle-double-down"></i></a>
					</div>
					
					<div class="r">
						<div class="pic imgLiquid">
							<img src="theme/tw/images/cater_wine.png">
						</div>
					</div>
				</section>
				<div class="deco_l"></div>
				<div class="deco_r"></div>
			</div>

			<div class="cater cater1 clearfix" id="cater1">
				<div class="pic imgLiquid">
					<img src="theme/tw/images/cater_bg1.jpg">
				</div>

				<div class="bottle">
					<img src="theme/tw/images/prod_wine1.png">
				</div>

				<div class="con_box clearfix">
					<div class="txt">
						<h2>
							<b>01</b>
							<span>澳洲无尾熊之森苏梅红酒</span>
							<small>Koala Forest Cabernet Sauvigon Merlot</small>
						</h2>

						<p>以卡本内苏维翁及梅洛各占一半的比例调和，不经过橡木桶陈年，反而更能让葡萄的香气更为奔放，卡本内苏维翁微微的单宁涩感支撑了酒体，使其更易与料理搭配，梅洛带来了入口的滑顺感，让你在搭配料理食更加的随心所欲，建议与<b>茄酱风味料理</b>最为搭配。</p>

						<a class="intro_link" href="products_1.php">产品详细介绍</a>

						<div class="thumb">
							<img src="theme/tw/images/cater_thumb1.jpg">
						</div>
					</div>
				</div>
			</div>

			<div class="cater cater2 clearfix" id="cater2">
				<div class="pic imgLiquid">
					<img src="theme/tw/images/cater_bg2.jpg">
				</div>

				<div class="bottle">
					<img src="theme/tw/images/prod_wine2.png">
				</div>

				<div class="con_box clearfix">
					<div class="txt">
						<h2>
							<b>02</b>
							<span>澳洲无尾熊之森卡本内精选</span>
							<small>Koala Forest Cabernet Sauvigon Merlot</small>
						</h2>

						<p>以100%的澳洲卡本内苏维翁葡萄经过半年橡木桶陈酿，让酒体更为丰富，味感更加复杂有层次，与<b>烧烤过的肉类或是带蜜汁的肉类</b>最为合适，最能带出其澳洲无尾熊之森卡本内精选的风味。</p>

						<a class="intro_link" href="products_2.php">产品详细介绍</a>

						<div class="thumb">
							<img src="theme/tw/images/cater_thumb2.jpg">
						</div>
					</div>
				</div>
			</div>

			<div class="cater cater3 clearfix" id="cater3">
				<div class="pic imgLiquid">
					<img src="theme/tw/images/cater_bg3.jpg">
				</div>

				<div class="bottle">
					<img src="theme/tw/images/prod_wine3.png">
				</div>

				<div class="con_box clearfix">
					<div class="txt">
						<h2>
							<b>03</b>
							<span>澳洲无尾熊之森施赫精选</span>
							<small>Koala Forest Shiraz Reserve</small>
						</h2>

						<p>无尾熊之森施赫精选特有的辛香料胡椒香气，使其酒款与口味偏重的料理更为搭配，互相拉抬其风味却又不强压彼此原有的特色，因此与<b>BBQ烧烤料理、麻辣锅</b>等最为合适，也是爱吃辣的您绝不可错过的最佳搭餐酒。</p>

						<a class="intro_link" href="products_3.php">产品详细介绍</a>

						<div class="thumb">
							<img src="theme/tw/images/cater_thumb3.jpg">
						</div>
					</div>
				</div>
			</div>


		</div>
	</div>
</div>

<?php include_once('_footer.php'); ?>	

</body>
</html>