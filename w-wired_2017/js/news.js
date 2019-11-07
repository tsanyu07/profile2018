// JavaScript Document
var $newsXML;
var totalNewsNumber;
var newsNumber;
var newsGoY 			= 48;
var $allnewsdata 		= $body.find('div#allnewsdata');
var $newsupdownbutton 	= $body.find('div#newsupdownbutton');
var $newsdata;

(function newsinit(){
	//下載NEWS資料
	$.ajax({
		type:"GET",
		url:"xml/newsdata.xml?ran=" + Math.random(),
		dataType:"xml",
		start:function(){$loading.show();},
		success:function(xml){
			$loading.hide();
			$newsXML = $(xml);
			creatnewsData();
		}
	});
	$allnewsdata.setFull("ALL",210,0);
	$body.find('div#newsnpbt').setAlign("CENTER",0,-100);
	setNewsButton();
})();
//NEWS按鈕設定
function setNewsButton(){
	$body.find('div#newsnextbt').click(function(){
		var goNumber = Number(newsNumber) + 1;
		if(goNumber > totalNewsNumber - 1){ goNumber = totalNewsNumber - 1; }
		newsGoHash(goNumber);
	});
	$body.find('div#newsprevbt').click(function(){
		var goNumber = Number(newsNumber) - 1;
		if(goNumber < 0){ goNumber = 0; }
		newsGoHash(goNumber);
	});
	$body.find('div#newsdownbutton').click(function(){
		newsGoY = newsGoY - $window.height()/2;
		if(newsGoY < $window.height() - 48 - $newsdata.eq(newsNumber).height()){newsGoY = $window.height() - 48 - $newsdata.eq(newsNumber).height();}
		$newsdata.eq(newsNumber).stop().animate({"top":newsGoY + "px"});
	});
	$body.find('div#newsupbutton').click(function(){
		newsGoY = newsGoY + $window.height()/2;
		if(newsGoY > 48){newsGoY = 48;}
		$newsdata.eq(newsNumber).stop().animate({"top":newsGoY + "px"});
	});
	$body.find('div#newsfbbt').click(function(){
		facebookShare();
	});
	
	//滾輪設定
	//$lineupnav.mousewheel(function(objEvent, intDelta){
	$allnewsdata.mousewheel(function(objEvent, intDelta){
		if(hashArray[0] == "#news"){
			if( $newsdata.height() > $window.height() ){
				newsGoY = newsGoY + intDelta*66;
				if(newsGoY < $window.height() - 48 - $newsdata.eq(newsNumber).height()){newsGoY = $window.height() - 48 - $newsdata.eq(newsNumber).height();}
				else if(newsGoY > 48){newsGoY = 48;}
				$newsdata.eq(newsNumber).stop().animate({"top":newsGoY + "px"});
			}
		}
	});
	
	/*
	//AD按鈕設定
	$body.keypress(function(event){
		if(hashArray[0] == "#news"){
			var goNumber;
			if(event.keyCode == 97){
				goNumber = Number(newsNumber) - 1;
				if(goNumber>=0){newsGoHash(goNumber);}
			}else if(event.keyCode == 100){
				goNumber = Number(newsNumber) + 1;
				if(goNumber<=totalNewsNumber-1){newsGoHash(goNumber);}
			}
		}
	});
	*/
}
//創造NEWS資料
function creatnewsData(){
	totalNewsNumber = $newsXML.find('news').length;
	//for(var i = 0; i < totalNewsNumber; i++){$allnewsdata.append('<div id="newsdata" height="' + $newsXML.find('newsheight').eq(i).text() + '"><img src="' + $newsXML.find('newsphoto').eq(i).text() + '" /></div>');}
	for(var i = 0; i < totalNewsNumber; i++){
		var $addNewsData = '<div id="newsdata" height="' + $newsXML.find('newsheight').eq(i).text() + '"></div>';
		$allnewsdata.append($addNewsData);
	}
	$newsdata = $body.find('div#newsdata');
	for(var i = 0; i < totalNewsNumber; i++){
		$newsdata.eq(i).load($newsXML.find('newsphoto').eq(i).text());
	}
	setTimeout("newsFullScreen()",360);
	setTimeout("newsAnalysis()",360);
}
//NEWS資料移動
function newsDataGo(num){

	if(totalNewsNumber == 1){
		$body.find('div#newsnextbt').hide();
		$body.find('div#newsprevbt').hide();
	}else{
		if(num == 0){
			$body.find('div#newsnextbt').show();
			$body.find('div#newsprevbt').hide();
		}else if(num == totalNewsNumber - 1){
			$body.find('div#newsnextbt').hide();
			$body.find('div#newsprevbt').show();
		}else{
			$body.find('div#newsnextbt').show();
			$body.find('div#newsprevbt').show();
		}
	}


	for( var i = 0; i < totalNewsNumber; i++ ){
		if(i == num){
			if($newsdata.eq(i).height()<$window.height()-100){
				newsGoY = $window.height()/2 - $newsdata.eq(i).height()/2;
				$newsupdownbutton.hide();
				$newsdata.eq(i).draggable("disable");
			}else{
				newsGoY = 48;
				$newsupdownbutton.show();
				$newsdata.eq(i).draggable({ axis: "y", stop:function(){
					if($(this).position().top > 48){
						newsGoY = 48;
						$(this).stop().animate({"top":newsGoY + "px"});
					}else if($(this).position().top < $window.height()-48-$(this).height()){
						newsGoY = $window.height()-48-$(this).height();
						$(this).stop().animate({"top":newsGoY + "px"});
					}else{
						newsGoY = $(this).position().top;
					}
				} });
			}
			$newsdata.eq(i).stop().animate({"left":($window.width()-210)/2 - 350 + "px","top":newsGoY + "px"});
		}else{
			if($newsdata.eq(i).height()<$window.height()-100){newsGoY = $window.height()/2 - $newsdata.eq(i).height()/2;}
			else{newsGoY = 48;}
			if(i > num){$newsdata.eq(i).stop().animate({"left":$window.width() + "px","top":newsGoY + "px"});}
			else if(i < num){$newsdata.eq(i).stop().animate({"left":"-700px","top":newsGoY + "px"});}
		}
	}
}
//改變網址
function newsGoHash(num){window.location.hash = "news/" + num;}
//全銀幕設定
$window.resize(function(){newsFullScreen();});
function newsFullScreen(){
	newsDataGo(hashArray[1]);
	$newsupdownbutton.css({"left":($window.width()-210)/2 - 150 + "px"});
}
//網址分析
function newsAnalysis(){
	newsNumber = hashArray[1];
	setTimeout("newsDataGo(newsNumber)",360);
}