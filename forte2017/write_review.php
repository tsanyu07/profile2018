<!DOCTYPE html>
<html>
<head>	
	
<?php include_once('_meta.php'); ?>
<script>
$(function(){
	document.getElementById("uploadBtn").onchange = function () {
		document.getElementById("uploadFile").style.display = 'block';
	    document.getElementById("uploadFile").value = this.value;
	};
})
</script>

</head>

<body class="review">
<div class="wrap">
	<?php include_once('_header.php'); ?>
	<div class="main">
		<div class="content">
			<div class="con con1">
				<div class="review_box">
					<h2>
						<img src="theme/tw/images/write_review_tit2.png" alt="填寫使用心得" title="填寫使用心得">
					</h2>
					<div class="desc">
						打開你的凍齡藏寶盒，加入青春應援團，寫下異黃酮新品試用心得，就有機會抽中新品異黃酮正貨壹份，週週抽，機會多更多！
					</div>

					<div class="review_prod">
						<ul>
							<li>
								<div class="week">
									第1週 - 第4週
								</div>
								<div class="pic">
									<img src="theme/tw/images/prod_pic1.png">
								</div>
								<p>每週抽<br>異黃酮淡斑精粹 45ml</p>
								<div class="price">(售價$3,800)</div>
							</li>
							<li>
								<div class="week">
									第5週 - 第8週
								</div>
								<div class="pic">
									<img src="theme/tw/images/prod_pic2.png">
								</div>
								<p>每週抽<br>異黃酮豐潤滋養霜 50ml</p>
								<div class="price">(售價$3,600)</div>
							</li>
							<li>
								<div class="week">
									第9週 - 第12週
								</div>
								<div class="pic">
									<img src="theme/tw/images/prod_pic3.png">
								</div>
								<p>每週抽<br>豐潤肌活精華油 50ml</p>
								<div class="price">(售價$3,200)</div>
							</li>
						</ul>
					</div>
				</div>

				<div class="sample_form">

					<div class="desc">
						<small>* 為必填項目</small>
					</div>

					<form class="form2" action="">
						<dl>
							<dt>真實姓名<span class="star">*</span></dt>
							<dd><input type="text"></dd>
						</dl>
						<dl>
							<dt>生日<span class="star">*</span></dt>
							<dd>
								<div class="select1">
									<select name="" id="">
										<option value="">請選擇年份</option>
									</select>
								</div>
								<div class="select1">
									<select name="" id="">
										<option value="">請選擇月份</option>
									</select>
								</div>
								<div class="select1">
									<select name="" id="">
										<option value="">請選擇日期</option>
									</select>
								</div>
							</dd>
						</dl>
						<dl>
							<dt>手機<span class="star">*</span></dt>
							<dd><input type="text"></dd>
						</dl>
						<dl>
							<dt>E-MAIL</dt>
							<dd><input type="text"></dd>
						</dl>
						<dl>
							<dt>地址<span class="star">*</span></dt>
							<dd><input type="text"></dd>
						</dl>
						<dl>
							<dt>暱稱<span class="star">*</span></dt>
							<dd><input type="text"></dd>
						</dl>
						<dl>
							<dt>試用心得<small>(200字內)</small><span class="star">*</span></dt>
							<dd><textarea name="" id=""></textarea></dd>
						</dl>
						<dl>
							<dt>上傳照片<span class="star">*</span></dt>
							<dd>
								<input id="uploadFile" type="text" disabled="disabled" placeholder="Choose File">
								<div class="fileUpload btn btn-primary">
								    <span>上傳與產品的合照<i class="fa fa-plus"></i></span>
								    <input type="file" class="upload" id="uploadBtn"/>
								</div>
							</dd>
						</dl>


						<div class="term">
							<label for="check1">
								<input type="checkbox" id="check1">
								<span>本人同意將個人資料提供給台塑生醫FORTE為消費者行為分析、客戶管理、市場調查、產品開發或行銷等目的蒐集、處理及利用，包括但不限於行銷資料之寄送。且了解並同意個人資料將以電腦或以其他方式處理、應用、儲存或傳輸，包括傳輸至相關第三方合作公司。台塑生醫FORTE，將依據相關法令，保證個人資料安全。</span>
							</label>
						</div>

						<div class="mylink">
							<ul>
								<li class="grey"><a href="">清除重填</a></li>
								<li class="grape"><a href="redeem.php">確認送出</a></li>
							</ul>
						</div>
					</form>
				</div>
			</div>

			<div class="bg imgLiquid">
				<img src="theme/tw/images/pg_bg2.jpg">
			</div>
		</div>
	</div>
</div>

<?php include_once('_footer.php'); ?>

</body>
</html>