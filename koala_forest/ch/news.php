<!DOCTYPE html>
<html>
<head>
	
	
	<?php include_once('_meta.php'); ?>
<script>

function myScrollReveal(){
	// scroll 動態
	window.sr = ScrollReveal({ reset: false });
	//box系列 建議分開
	sr.reveal('.news_list li', { duration: 1000 , mobile: false}, 150);
}

$(document).ready(function(){

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
			myScrollReveal()
			
		}

	}else{
		/*我不是ie*/
		myScrollReveal()
	}

});
</script>
</head>
<body class="news">
<div class="wrap">
	
	<?php include_once('_header.php'); ?>

	<div class="main">
		<div class="content">
			<div class="news_box">
				<section>
					<h2><span>NEWS</span><b>最新消息</b></h2>

					<ul class="news_list">
						<li>
							<a class="fancybox" href="#fcbox_news">
								<h3>澳洲无尾熊之森苏梅红酒 全台全联福利中心贩卖中~</h3>
								<span class="date">2017/01/01</span>
							</a>
						</li>
						<li>
							<a class="fancybox" href="#fcbox_news">
								<h3>澳洲无尾熊之森苏梅红酒 全台全联福利中心贩卖中~</h3>
								<span class="date">2017/01/01</span>
							</a>
						</li>
						<li>
							<a class="fancybox" href="#fcbox_news">
								<h3>澳洲无尾熊之森苏梅红酒 全台全联福利中心贩卖中~</h3>
								<span class="date">2017/01/01</span>
							</a>
						</li>
						<li>
							<a class="fancybox" href="#fcbox_news">
								<h3>澳洲无尾熊之森苏梅红酒 全台全联福利中心贩卖中~</h3>
								<span class="date">2017/01/01</span>
							</a>
						</li>
						<li>
							<a class="fancybox" href="#fcbox_news">
								<h3>澳洲无尾熊之森苏梅红酒 全台全联福利中心贩卖中~</h3>
								<span class="date">2017/01/01</span>
							</a>
						</li>
						<li>
							<a class="fancybox" href="#fcbox_news">
								<h3>澳洲无尾熊之森苏梅红酒 全台全联福利中心贩卖中~</h3>
								<span class="date">2017/01/01</span>
							</a>
						</li>
						<li>
							<a class="fancybox" href="#fcbox_news">
								<h3>澳洲无尾熊之森苏梅红酒 全台全联福利中心贩卖中~</h3>
								<span class="date">2017/01/01</span>
							</a>
						</li>
						<li>
							<a class="fancybox" href="#fcbox_news">
								<h3>澳洲无尾熊之森苏梅红酒 全台全联福利中心贩卖中~</h3>
								<span class="date">2017/01/01</span>
							</a>
						</li>
						<li>
							<a class="fancybox" href="#fcbox_news">
								<h3>澳洲无尾熊之森苏梅红酒 全台全联福利中心贩卖中~</h3>
								<span class="date">2017/01/01</span>
							</a>
						</li>
						<li>
							<a class="fancybox" href="#fcbox_news">
								<h3>澳洲无尾熊之森苏梅红酒 全台全联福利中心贩卖中~</h3>
								<span class="date">2017/01/01</span>
							</a>
						</li>
					</ul>

					<ul class="pagination">
						<li class="prev"><a href=""><i class="fa fa-angle-double-left"></i></a></li>
						<li class="current"><a href="">1</a></li>
						<li><a href="">2</a></li>
						<li><a href="">3</a></li>
						<li class="next"><a href=""><i class="fa fa-angle-double-right"></i></a></li>
					</ul>

				</section>
				<div class="bg imgLiquid">
					<img src="theme/tw/images/news_bg.jpg">
				</div>
			</div>
		</div>

		<div id="fcbox_news" class="fcbox">
			<h3>澳洲无尾熊之森苏梅红酒 全台全联福利中心贩卖中~</h3>
			<span class="date">2017/01/01</span>

			<div class="info">
				<img src="theme/tw/images/con1_pic1.jpg">
				<p>不喜欢红酒的单宁涩感、不知道怎么用开瓶器开红酒? 澳洲无尾熊之森苏梅红酒帮你一次解决,丰富的果香味加上尾韵微微的甜味,让你轻松享受微醺感!! 
<br>* 小资价格亲民选择!!只在全台全联福利中心!!</p>
			</div>

			<div class="link_btn">
				<ul>
					<li><a href="javascript:;" onclick="$.fancybox.close();">关闭</a></li>
				</ul>
			</div>
		</div>


	</div>
</div>

<?php include_once('_footer.php'); ?>	

</body>
</html>