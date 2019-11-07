// JavaScript Document
var $promotionXML;
var totalPromotionNumber;
var promotionNumber;
var promotionGoY			= 48;
var $allpromotiondata		= $body.find('div#allpromotiondata');
var $promotionupdownbutton 	= $body.find('div#promotionupdownbutton');
var $promotiondata;
(function promotioninit(){
	//下載promotion資料
	$.ajax({
		type:"GET",
		url:"xml/promotiondata.xml?ran=" + Math.random(),
		dataType:"xml",
		start:function(){$loading.show();},
		success:function(xml){
			$loading.hide();
			$promotionXML = $(xml);
			creatpromotionData();
		}
	});
	$allpromotiondata.setFull("ALL",210,0);
	$body.find('div#promotionnpbt').setAlign("CENTER",0,-100);
	setpromotionButton();
})();
//設定PROMOTION按鈕
function setpromotionButton(){
	$body.find('div#promotionnextbt').click(function(){
		var goNumber = Number(promotionNumber) + 1;
		if(goNumber > totalPromotionNumber - 1){ goNumber = totalPromotionNumber - 1; }
		promotionGoHash(goNumber);
	});
	$body.find('div#promotionprevbt').click(function(){
		var goNumber = Number(promotionNumber) - 1;
		if(goNumber < 0){ goNumber = 0; }
		promotionGoHash(goNumber);
	});
	$body.find('div#promotiondownbutton').click(function(){
		promotionGoY = promotionGoY - $window.height()/2;
		if(promotionGoY < $window.height() - 48 - $promotiondata.eq(promotionNumber).height()){promotionGoY = $window.height() - 48 - $promotiondata.eq(promotionNumber).height();}
		$promotiondata.eq(promotionNumber).stop().animate({"top":promotionGoY + "px"});
	});
	$body.find('div#promotionupbutton').click(function(){
		promotionGoY = promotionGoY + $window.height()/2;
		if(promotionGoY > 48){promotionGoY = 48;}
		$promotiondata.eq(promotionNumber).stop().animate({"top":promotionGoY + "px"});
	});
	$body.find('div#promotionfbbt').click(function(){
		facebookShare();
	});
	
	//AD按鈕設定
	$body.keypress(function(event){
		if(hashArray[0] == "#promotion"){
			var goNumber;
			if(event.keyCode == 97){
				goNumber = Number(promotionNumber) - 1;
				if(goNumber>=0){promotionGoHash(goNumber);}
			}else if(event.keyCode == 100){
				goNumber = Number(promotionNumber) + 1;
				if(goNumber<=totalPromotionNumber-1){promotionGoHash(goNumber);}
			}
		}
	});
}
//創造promotion資料
function creatpromotionData(){
	totalPromotionNumber = $promotionXML.find('promotion').length;
	/*for(var i = 0; i < totalPromotionNumber; i++){
		$allpromotiondata.append('<div id="promotiondata" height="' + $promotionXML.find('promotionheight').eq(i).text() + '"><img src="' + $promotionXML.find('promotionphoto').eq(i).text() + '" /></div>');
	}*/
	for(var i = 0; i < totalPromotionNumber; i++){
		var $addPromotionData = '<div id="promotiondata" height="' + $promotionXML.find('promotionheight').eq(i).text() + '"></div>';
		$allpromotiondata.append($addPromotionData);
	}
	$promotiondata = $body.find('div#promotiondata');
	for(var i = 0; i < totalPromotionNumber; i++){
		$promotiondata.eq(i).load($promotionXML.find('promotionphoto').eq(i).text());
	}
	setTimeout("promotionFullScreen()",360);
	setTimeout("promotionAnalysis()",360);
}
//promotion資料移動
function promotionDataGo(num){
	for( var i = 0; i < totalPromotionNumber; i++ ){
		if(i == num){
			if($promotiondata.eq(i).height()<$window.height()-100){
				promotionGoY = $window.height()/2 - $promotiondata.eq(i).height()/2;
				$promotionupdownbutton.hide();
				$promotiondata.eq(i).draggable("disable");
			}else{
				promotionGoY = 48;
				$promotionupdownbutton.show();
				$promotiondata.eq(i).draggable({ axis: "y", stop:function(){
					if($(this).position().top > 48){
						promotionGoY = 48;
						$(this).stop().animate({"top":promotionGoY + "px"});
					}else if($(this).position().top < $window.height()-48-$(this).height()){
						promotionGoY = $window.height()-48-$(this).height();
						$(this).stop().animate({"top":promotionGoY + "px"});
					}else{
						promotionGoY = $(this).position().top;
					}
				} });
			}
			$promotiondata.eq(i).stop().animate({"left":($window.width()-210)/2 - 350 + "px","top":promotionGoY + "px"});
		}else{
			if($promotiondata.eq(i).height()<$window.height()-100){promotionGoY = $window.height()/2 - $promotiondata.eq(i).height()/2;}
			else{promotionGoY = 48;}
			if(i > num){$promotiondata.eq(i).stop().animate({"left":$window.width() + "px","top":promotionGoY + "px"});}
			else if(i < num){$promotiondata.eq(i).stop().animate({"left":"-700px","top":promotionGoY + "px"});}
		}
	}
}
//改變網址
function promotionGoHash(num){window.location.hash = "promotion/" + num;}
//全銀幕設定
$window.resize(function(){promotionFullScreen();});
function promotionFullScreen(){
	promotionDataGo(hashArray[1]);
	$promotionupdownbutton.css({"left":($window.width()-210)/2 - 150 + "px"});
	
}
//網址分析
function promotionAnalysis(){
	promotionNumber = hashArray[1];
	setTimeout("promotionDataGo(promotionNumber);",360);
}