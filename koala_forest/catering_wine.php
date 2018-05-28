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
						<img src="theme/tw/images/cater_txt.png" alt="Catering Wine 搭餐好夥伴" title="Catering Wine 搭餐好夥伴">

						<a href="javascript:;" onclick="scroll_cater1();"><span>趕緊來看看吧！</span><i class="fa fa-angle-double-down"></i></a>
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
							<span>澳洲無尾熊之森蘇梅紅酒</span>
							<small>Koala Forest Cabernet Sauvigon Merlot</small>
						</h2>

						<p>以卡本內蘇維翁及梅洛各佔一半的比例調和，不經過橡木桶陳年，反而更能讓葡萄的香氣更為奔放，卡本內蘇維翁微微的單寧澀感支撐了酒體，使其更易與料理搭配，梅洛帶來了入口的滑順感，讓你在搭配料理食更加的隨心所欲，建議與<b>茄醬風味料理</b>最為搭配。</p>

						<a class="intro_link" href="products_1.php">產品詳細介紹</a>

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
							<span>澳洲無尾熊之卡本內精選</span>
							<small>Koala Forest Cabernet Sauvigon Merlot</small>
						</h2>

						<p>以100%的澳洲卡本內蘇維翁葡萄經過半年橡木桶陳釀，讓酒體更為豐富，味感更加複雜有層次，與<b>燒烤過的肉類或是帶蜜汁的肉類</b>最為合適，最能帶出其澳洲無尾熊之森卡本內精選的風味。</p>

						<a class="intro_link" href="products_2.php">產品詳細介紹</a>

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
							<span>澳洲無尾熊之森施赫精選</span>
							<small>Koala Forest Shiraz Reserve</small>
						</h2>

						<p>無尾熊之森施赫精選特有的辛香料胡椒香氣，使其酒款與口味偏重的料理更為搭配，互相拉抬其風味卻又不強壓彼此原有的特色，因此與<b>BBQ燒烤料理、麻辣鍋</b>等最為合適，也是愛吃辣的您絕不可錯過的最佳搭餐酒。</p>

						<a class="intro_link" href="products_3.php">產品詳細介紹</a>

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