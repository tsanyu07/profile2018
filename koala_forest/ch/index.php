<!DOCTYPE html>
<html>
<head>

	<?php include_once('_meta.php'); ?>

<script>
/*背景視差效果*/
function myparallax(){
	/*banner*/
	$('#con2 .bg').css('background-position', 'center');
	$('#con2 .bg').parallax("50%", 0.2);

	/*產品介紹*/
	$('#con3 .deco_l').css('background-position', 'bottom');
	$('#con3 .deco_l').parallax("50%", -0.2);

	$('#con3 .deco_r').css('background-position', 'top');
	$('#con3 .deco_r').parallax("50%", 0.2);

	/*搭餐好夥伴*/
	$('#con4 .bg').css('background-position', 'top');
	$('#con4 .bg').parallax("50%", 0.2);
}

function myScrollReveal(){
	// scroll 動態
	window.sr = ScrollReveal({ reset: false });
	sr.reveal('.news_wrap', { duration: 1200, mobile: false});
	sr.reveal('.con4 .circle', { duration: 1500, mobile: false});
	//box系列 建議分開
	sr.reveal('.con2 .photo li', { duration: 1500 , mobile: false}, 500);
	sr.reveal('.con3 .prod .prodli', { duration: 1500 , mobile: false}, 500);
}

$(document).ready(function(){
	/*banner效果*/
	$('.banner .txt').addClass('animated bounceInLeft');
	$('.banner .wine').addClass('animated bounceInLeft');

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
        if ($.browser.msie && parseInt($.browser.version, 10) <= 9) {	
				
		}else{

			myScrollReveal();
		}

	}else{
		/*我不是ie*/
		myScrollReveal();
	}

});
</script>

</head>
<body class="index">
<div class="wrap">
	
	<?php include_once('_idx_header.php'); ?>

	<div class="main">
		<div class="content">
			<div class="banner">
				<div class="w1200">
					<div class="pic imgLiquid">
						<img src="theme/tw/images/banner_pic1.jpg">
					</div>
					<div class="txt">
						<img src="theme/tw/images/banner_txt.png" alt="Drink for fun. 澳洲无尾熊之森红葡萄酒不需醒酒、只要轻轻一扭即可享用，果香浓郁的口感绝对会是聚会时的最佳伙伴。" title="Drink for fun. 澳洲无尾熊之森红葡萄酒不需醒酒、只要轻轻一扭即可享用，果香浓郁的口感绝对会是聚会时的最佳伙伴。">
					</div>
					<div class="wine">
						<img src="theme/tw/images/banner_wine.png">
					</div>
				</div>
			</div>

			<div class="con con1" id="con1">
				<section>
					<h2><span>NEWS</span><b>最新消息</b></h2>

					<div class="news_wrap">
						<ul>
							<li class="clearfix">
								<div class="pic imgLiquid">
									<a class="fancybox" href="#fcbox_news"><img src="theme/tw/images/con1_pic1.jpg"></a>
								</div>
								<div class="txt">
									<div>
										<h3><a class="fancybox" href="#fcbox_news">澳洲无尾熊之森 精选红酒 现正贩卖中!!</a></h3>
										<p>轻松一扭即可享用,澳洲无尾熊之森精选红酒 特选卡本内苏维翁、施赫两款葡萄品种,在法国橡木桶中陈年六个月,维持瑰丽亚酒厂Qualia wine service特有的果香味,让单宁在口中柔顺动人~ 让您一口接一口,爱不释手!!
										快点选销售据点,看看哪里有在卖啰!!。</p>
										<small>2017/01/01</small>
									</div>
								</div>
							</li>
						</ul>
					</div>

					<div class="link_btn or_btn">
						<ul>
							<li><a href="news.php">更多消息</a></li>
						</ul>
					</div>
				</section>
			</div>


			<div id="fcbox_news" class="fcbox">
				<h3>澳洲无尾熊之森 精选红酒 现正贩卖中!!</h3>
				<span class="date">2017/01/01</span>

				<div class="info">
					<img src="theme/tw/images/con1_pic1.jpg">
					<p>轻松一扭即可享用,澳洲无尾熊之森精选红酒 特选卡本内苏维翁、施赫两款葡萄品种,在法国橡木桶中陈年六个月,维持瑰丽亚酒厂Qualia wine service特有的果香味,让单宁在口中柔顺动人~ 让您一口接一口,爱不释手!!
					快点选销售据点,看看哪里有在卖啰!!。</p>
				</div>

				<div class="link_btn">
					<ul>
						<li><a href="javascript:;" onclick="$.fancybox.close();">关闭</a></li>
					</ul>
				</div>
			</div>

			<div class="con con2" id="con2">
				<section>
					<h2 class="white"><span>Winery Story</span><b>酒厂介绍</b></h2>

					<div class="winery_box clearfix">
						<div class="txt">
							<h3>瑰丽亚葡萄酒公司Qualia Wine Service</h3>
							<p>红酒新时尚!! 喝酒也要很轻松~ <br>澳洲无尾熊之森红葡萄酒秉持 DRINK FOR FUN 的概念，希望将轻松乐活的生活态度实践到生活中</p>
							<ul>
								<li>
									<b>- 1887</b>
									<p>此地开始种植葡萄，发展葡萄酒事业</p>
								</li>
								<li>
									<b>- 2009</b>
									<p>瑰丽亚葡萄酒公司 Qualia Wine Service 收购尼克塔葡萄酒公司 Neqtar Wines 葡萄酒事业，原 Neqtar Wines 于澳洲主要葡萄酒产区皆有葡萄园，以提供最优质的酒款及最具竞争力的价格为酒厂宗旨</p>
								</li>
								<li>
									<b>- 2015</b>
									<p>瑰丽亚葡萄酒公司 Qualia Wine Service 达到年产量50000吨葡萄酒液， 外销合作对象超过25个国家成为澳洲葡萄酒年产量前十大酒厂之一， 澳洲最大的OEM葡萄酒商与台湾黑松股份有限公司合作生产黑松自有品牌- KOALA FOREST 无尾熊之森</p>
								</li>
								<li>
									<b>- 2016</b>
									<p>KOALA FOREST 澳洲无尾熊之森红葡萄酒正式上市</p>
								</li>
							</ul>
						</div>
						<div class="photo">
							<ul>
								<li class="big">
									<div class="pic imgLiquid">
										<img src="theme/tw/images/con2_pic1.jpg">
									</div>
								</li>
								<li>
									<div class="pic imgLiquid">
										<img src="theme/tw/images/con2_pic2.jpg">
									</div>
								</li>
								<li>
									<div class="pic imgLiquid">
										<img src="theme/tw/images/con2_pic3.jpg">
									</div>
								</li>
							</ul>
						</div>
					</div>

				</section>
				<div class="bg imgLiquid">
					<img src="theme/tw/images/con2_bg.png" alt="">
				</div>
			</div>

			<div class="con con3" id="con3">
				<section>
					<h2><span>PRODUCTS</span><b>产品介绍</b></h2>

					<ul class="prod">
						<li class="prodli">
							<div>
								<div class="pic imgLiquid">
									<a href="products_1.php">
										<img src="theme/tw/images/con3_wine1.png">
									</a>
								</div>
								<div class="txt">
									<b>澳洲无尾熊之森苏梅红酒</b>
									<span>Koala Forest Cabernet Sauvigon Merlot</span>
								</div>
							</div>
						</li>
						<li class="prodli">
							<div>
								<div class="pic imgLiquid">
									<a href="products_2.php">
										<img src="theme/tw/images/con3_wine2.png">
									</a>
								</div>
								<div class="txt">
									<b>澳洲无尾熊之森卡本内精选</b>
									<span>Koala Forest Cabernet Sauvigon Reserve</span>
								</div>
							</div>
						</li>
						<li class="prodli">
							<div>
								<div class="pic imgLiquid">
									<a href="products_3.php">
										<img src="theme/tw/images/con3_wine3.png">
									</a>
								</div>
								<div class="txt">
									<b>澳洲无尾熊之森施赫精选</b>
									<span>Koala Forest Shiraz Reserve</span>
								</div>
							</div>
						</li>
					</ul>
				</section>

				<div class="deco_l"></div>
				<div class="deco_r"></div>
			</div>


			<div class="con con4" id="con4">
				<section>
					<h2 class="white"><span>CATERING  WINE</span><b>搭餐好伙伴</b></h2>
					<div class="circle">
						<h3>为什么选择无尾熊之森？</h3>
						<p>来自澳洲的无尾熊之森，<br>
						果香浓郁的口感绝对是聚会时的最佳伙伴，<br>
						三款不同风味的葡萄酒适合搭配什么样的佳肴呢？<br>
						赶紧来看看吧！
						</p>

						<div class="link_btn">
							<ul>
								<li><a href="catering_wine.php">寻找好伙伴</a></li>
							</ul>
						</div>
					</div>
				</section>
				<div class="bg imgLiquid">
					<img src="theme/tw/images/con4_bg.jpg" alt="">
				</div>
			</div>

		</div>
	</div>
</div>

<?php include_once('_footer.php'); ?>	

</body>
</html>