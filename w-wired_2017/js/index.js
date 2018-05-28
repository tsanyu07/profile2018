// JavaScript Document

var $window 			= $(window);
var $body 				= $('body');
var $data 				= $body.find('div#data');
var $section 			= $data.find("div#section");
var $nav 				= $body.find('div#nav');
var $navbg 				= $body.find('div#navbg');
var $button 			= $body.find('div#button');
var $loading 			= $body.find('div#loading');
var $nextBt 			= $body.find('div#nextbt');
var $prevBt 			= $body.find('div#prevbt');
var $allWhite 			= $body.find('div#white');
var $allPink 			= $body.find('div#pink');

var $productbox			= $body.find('div#productbox img');


function setLightBoxMode(lightboxmode){
	if(lightboxmode == "OPEN"){
		$body.find('div#lightboxbg').show();
	}else if(lightboxmode == "CLOSE"){
		$body.find('div#lightboxbg').hide();
	}
} 

(function init(){
	/*
	div#pink						{ opacity:0; display:none; }
	div#white						{ opacity:0; display:none; }
	*/
	if(msie == "msie-8.0"){
		$allWhite.css({"opacity":1});
		$allPink.css({"opacity":1});
	}else{
		$allWhite.css({"display":"block"});
		$allPink.css({"display":"block"});
	}
	
	//全銀幕設定
	$body.find('div#maindata').setFull("ALL",0,0);
	$data.setFull("ALL",0,0);
	$body.find('div#section').setFull("ALL",0,0);
	$nav.setFull("HEIGHT",0,0);
	$navbg.setFull("HEIGHT",0,0);
	$body.find('div#navbg div#white').setFull("HEIGHT",0,0);
	$body.find('div#navbg div#pink').setFull("HEIGHT",0,0);
	$body.find('div#navline').setFull("HEIGHT",0,0);
	$body.find('div#navline div#white').setFull("HEIGHT",0,0);
	$body.find('div#navline div#pink').setFull("HEIGHT",0,0);
	$body.find('div#navcopyright div#white').setAlign("BOTTOM",0,0);
	$body.find('div#navcopyright div#pink').setAlign("BOTTOM",0,0);
	$body.find('div#navbg div#white img').setFull("HEIGHT",0,0);
	$body.find('div#navbg div#pink img').setFull("HEIGHT",0,0);
	$body.find('div#navcopyright').setAlign("BOTTOM",0,36);
	$body.find('div#background').setFull("ALL",0,0);
	$body.find('div#npbt').setAlign("BOTTOM",0,30);
	
	$body.find('div#lightboxbg div#white img#fullbg').setFull("ALL",0,0);
	$body.find('div#lightboxbg div#pink img#fullbg').setFull("ALL",0,0);
	//TRACE設定
	$body.find('div#trace').draggable();
	$body.find('div#trace').hide();
})();

var hostName ="http://www.w-wired.com.tw/";//正式站測試
//0~6
var mainArray = ["home","concept","lineup","wiredf","news","stores","promotion","special"];
var goMenuPage;
var menuPage;
var prevMenuPage = -1;
var hash;
var hashArray;
var loadedArray = ["","","","","","",""];
//單元上下移動
function mainSectionGo(){
	for(var i=0; i<mainArray.length; i++){
		if(hashArray[0] == "" || hashArray[0] == "#"){$data.stop().animate({"top":"-" + $section.eq(0).position().top + "px"},1000);}
		else if(hashArray[0] == "#" + mainArray[i]){$data.stop().animate({"top":"-" + $section.eq(i).position().top + "px"},1000);}
	}
}
//單元下載
function loadSection(){
	for(var i=0; i<loadedArray.length; i++){
		if(loadedArray != ""){
			$section.eq(i).find("div#sectiondata").html("");
		}
	}
	loadedArray = ["","","","","","","",""];
	if(hashArray[0] == "" || hashArray[0] == "#" || hashArray[0] == "#home"){
		if(loadedArray[0] == ""){
			$section.eq(0).find("div#sectiondata").load("home.html?ran=" + Math.random());
			loadedArray[0] = "home";
		}
	}else if(hashArray[0] == '#concept'){
		if(loadedArray[1] == ""){
			$section.eq(1).find("div#sectiondata").load("concept.html?ran=" + Math.random());
			loadedArray[1] = "concept";
		}else{conceptAnalysis();}
	}else if(hashArray[0] == '#lineup'){
		if(loadedArray[2] == ""){
			$section.eq(2).find("div#sectiondata").load("lineup.html?ran=" + Math.random());
			loadedArray[2] = "lineup";
		}else{lineupAnalysis();}
	}else if(hashArray[0] == '#wiredf'){
		if(loadedArray[3] == ""){
			$section.eq(3).find("div#sectiondata").load("wiredf.html?ran=" + Math.random());
			loadedArray[3] = "wiredf";
		}
	}else if(hashArray[0] == '#news'){
		if(loadedArray[4] == ""){
			$section.eq(4).find("div#sectiondata").load("news.html?ran=" + Math.random());
			loadedArray[4] = "news";
		}else{newsAnalysis();}
	}else if(hashArray[0] == '#stores'){
		if(loadedArray[5] == ""){
			$section.eq(5).find("div#sectiondata").load("stores.html?ran=" + Math.random());
			loadedArray[5] = "stores";
		}
	}else if(hashArray[0] == '#promotion'){
		if(loadedArray[6] == ""){
			$section.eq(6).find("div#sectiondata").load("promotion.html?ran=" + Math.random());
			loadedArray[6] = "promotion";
		}
	}else if(hashArray[0] == '#special'){

		if(loadedArray[7] == ""){
			// var newwin = window.open();
			// newwin.location= "wired-msg.html";
			window.location.href = "wired-msg.html";
			loadedArray[7] = "special";
		}

	}
}
//NAV X位置設定
function goNavX(){
	var navX = 0;
	if(hashArray[0] == "" || hashArray[0] == "#" || hashArray[0] == "#home"){navX = 108;}
	else if(hashArray[0] == '#concept'){navX = 0;}
	else if(hashArray[0] == '#lineup'){navX = $window.width()-210;}
	else if(hashArray[0] == '#wiredf'){navX = $window.width()-210;}
	else if(hashArray[0] == '#news'){navX = 0;}
	else if(hashArray[0] == '#stores'){navX = 0;}
	else if(hashArray[0] == '#promotion'){navX = 0;}
	//單元下載
	$nav.stop().animate({"left": navX + "px"},1000,'swing');
}
//LOADING SETTING
(function loaderSetting(){
	$body.find('div#sectiondata').ajaxStart(function(){$loading.show();});
	$body.find('div#sectiondata').ajaxComplete(function(){$loading.hide();});
})();
//網址分析
function analysisAddress(){
	
	//網址分析
	hash = window.location.hash;

	//alert(hash);
	hashArray = hash.split("/");
	
	//TRACKING
	if(hashArray[0] == "" || hashArray[0] == "#"){GA_EventClickLog("home","PageLoad");}
	else{
		var trackhash0Array = hashArray[0].split("#");
		var trackhash0 = trackhash0Array[1];
		if(hashArray[1] == undefined){GA_EventClickLog(trackhash0 ,"PageLoad");}
		else{
			if(hashArray[2] == undefined){GA_EventClickLog(trackhash0 + "_" + hashArray[1] ,"PageLoad");}
			else{GA_EventClickLog(trackhash0 + "_" + hashArray[1] + "_" + hashArray[2] ,"PageLoad");}
		}
	}
	
	//單元編碼設定
	for(var i=0; i<mainArray.length; i++){
		if(hashArray[0] == "" || hashArray[0] == "#"){goMenuPage = 0;}
		else if(hashArray[0] == "#" + mainArray[i]){ goMenuPage = i;}
	}
	if(goMenuPage != prevMenuPage ){
		menuPage = goMenuPage;
		prevMenuPage = menuPage;
		//單元上下移動
		mainSectionGo();
		//NAV X位置設定
		goNavX();//完成後單元下載
		setTimeout(loadSection,1000);
		//按鈕復原
		
		/*
		//NP按鈕設定
		if(menuPage == 0){
			$nextBt.show();
			$prevBt.hide();
			$nextBt.css("bottom","0px");
		}else if(menuPage == 6){
			$nextBt.hide();
			$prevBt.show();
			$prevBt.css("bottom","0px");
		}else{
			$nextBt.show();
			$prevBt.show();
			$nextBt.css("bottom","0px");
			$prevBt.css("bottom","30px");
		}
		*/
		//按鈕變色設定
		if(hashArray[0] == '#wiredf'){
			
			if(msie == "msie-8.0"){
				$allWhite.css({"display":"none"});
				$allPink.css({"display":"block"});
			}else{
				$allWhite.stop().animate( {'opacity' : 0} , 'normal');
				$allPink.stop().animate( {'opacity' : 1} , 'normal');
			}
			
		}else{
			
			if(msie == "msie-8.0"){
				$allWhite.css({"display":"block"});
				$allPink.css({"display":"none"});
			}else{
				$allWhite.stop().animate( {'opacity' : 1} , 'normal');
				$allPink.stop().animate( {'opacity' : 0} , 'normal');
			}
			
		}
	}
	//各單元副網址分析 - 第一次下載會自動分析
	//首頁無副網址不用分析
	if(hashArray[0] == "" || hashArray[0] == "#" || hashArray[0] == "#home"){}
	else if(hashArray[0] == '#concept')		{if(loadedArray[1] != ""){conceptAnalysis();}}
	else if(hashArray[0] == '#lineup')		{if(loadedArray[2] != ""){lineupAnalysis();}}
	else if(hashArray[0] == '#wiredf')		{if(loadedArray[3] != ""){lineupAnalysis_wiredf();}}
	else if(hashArray[0] == '#news')		{if(loadedArray[4] != ""){newsAnalysis();}}
	else if(hashArray[0] == '#stores')		{}
	else if(hashArray[0] == '#promotion')	{if(loadedArray[6] != ""){promotionAnalysis();}}
	
	resetButton();
};
//背景全銀幕設定
$window.resize(function(){
	mainSectionGo();
	goNavX();
	fullbg();//背景全銀幕設定
});
function fullbg(){
	
	var $backgroundphoto = $body.find('img#backgroundphoto');
	var winW = $window.width();
	var winH = $window.height();
	if( winW/winH < 16/9 ){
		$backgroundphoto.height(winH);
		$backgroundphoto.width(winH*16/9);
		$backgroundphoto.top(0);
		$backgroundphoto.left(winW/2 - winH*16/9/2);
	}else{
		$backgroundphoto.height(winW*9/16);
		$backgroundphoto.width(winW);
		$backgroundphoto.top(winH/2 - winW*9/16/2);
		$backgroundphoto.left(0);
	}
}
fullbg();
//trace設定
function trace(data){
	var $tracedata = $body.find('div#trace');
	var hstring = $tracedata.html();
	$tracedata.html(data + "<br />" + hstring);
	$tracedata.show();
}


//下載完成
function goStart(){
	analysisAddress();
	setTimeout(intro,360);
	setTimeout(setNav,960);
}
//開場動作
function intro(){
	$nav.delay(360).animate( {'opacity' : 1} , 'normal');
	$section.slowEach(100, function(){$(this).animate( {'opacity' : 1} , 'normal');});
}
//NAV設定
function setNav(){
	
	$body.find('div#boxclosebt').click(function(){
		setLightBoxMode("CLOSE");
		$productbox.attr("src", "images/blank.gif");
	});
	
	$nav.hover(
		function(){$navbg.stop().animate({"opacity":1});},
		function(){$navbg.stop().animate({"opacity":0});}
	);
	$button.hover(
		function(){
			$(this).find('div#buttonname').stop().animate({"opacity":1});
			//if($button.index($(this)) == 3){$button.eq(3).find('div#buttonname').find('div#white, div#pink').text("敬請期待");}
			//if($button.index($(this)) == 4){$button.eq(4).find('div#buttonname').find('div#white, div#pink').text("敬請期待");}
			//if($button.index($(this)) == 6){$button.eq(6).find('div#buttonname').find('div#white, div#pink').text("敬請期待");}
		},
		function(){
			var outHashData = "#" + $(this).attr("class");
			if(outHashData == hashArray[0]){
				if(hashArray[0] == "#concept"){
					if( hashArray[1] == "aboutwired1" || hashArray[1] == "aboutwired2" || hashArray[1] == "timeline" ){
						$button.eq(0).find('div#buttonname').stop().animate({"opacity":1});
						$button.eq(1).find('div#buttonname').stop().animate({"opacity":0.42});
					}else if( hashArray[1] == "ambassador1" || hashArray[1] == "ambassador2" ){
						$button.eq(0).find('div#buttonname').stop().animate({"opacity":0.42});
						$button.eq(1).find('div#buttonname').stop().animate({"opacity":1});
					}
				}else{
					$(this).find('div#buttonname').stop().animate({"opacity":1});
				}
			}else{
				$(this).find('div#buttonname').stop().animate({"opacity":0.42});
			}
			//if($button.index($(this)) == 3){$button.eq(3).find('div#buttonname').find('div#white, div#pink').text("WIRED f");}
			//if($button.index($(this)) == 4){$button.eq(4).find('div#buttonname').find('div#white, div#pink').text("最新消息");}
			//if($button.index($(this)) == 6){$button.eq(6).find('div#buttonname').find('div#white, div#pink').text("販促活動資訊");}
		}
	);
	$body.find('div#logo').click(function(){goHash("home");});//LOGO回首頁
	$button.click(function(){
		//if($button.index($(this)) == 3 || $button.index($(this)) == 4 || $button.index($(this)) == 6){}
		//if( $button.index($(this)) == 4 || $button.index($(this)) == 6 ){}
		if( $button.index($(this)) == 0 ){goHash("concept1");}
		//20140605-iven修
		else if( $button.index($(this)) == 1 ){goHash("concept2");}
		else{goHash($(this).attr("class"));}
	});//個單元按鈕
	/*
	$nextBt.click(function(){
		var goNumber = menuPage + 1;
		goHash(mainArray[goNumber]);
	});
	$prevBt.click(function(){
		var goNumber = menuPage - 1;
		goHash(mainArray[goNumber]);
	});
	*/
	$body.find('div#fbbt').click(function(){
		var shareURL="https://www.facebook.com/wired.taiwan";
		window.open(shareURL);
	});
}
//按鈕還原
function resetButton(){
	for(var i=0; i<$button.length; i++){
		var hashData = "#" + $button.eq(i).attr("class");
		
		if(hashData == hashArray[0]){
			if(hashArray[0] == "#concept"){
				if( hashArray[1] == "aboutwired1" || hashArray[1] == "aboutwired2" || hashArray[1] == "timeline" ){
					$button.eq(0).find('div#buttonname').stop().animate({"opacity":1});
					$button.eq(1).find('div#buttonname').stop().animate({"opacity":0.42});
				}else if( hashArray[1] == "ambassador1" || hashArray[1] == "ambassador2" ){
					$button.eq(0).find('div#buttonname').stop().animate({"opacity":0.42});
					$button.eq(1).find('div#buttonname').stop().animate({"opacity":1});
				}
			}else{
				$button.eq(i).find('div#buttonname').stop().animate({"opacity":1});
			}
		}else{
			$button.eq(i).find('div#buttonname').stop().animate({"opacity":0.42});
		}
		
	}
}
//改變網址
function goHash(hashdata){
	if(hashdata == "home")				{window.location.hash = "home";}
	else if(hashdata == "concept1")		{window.location.hash = "concept/aboutwired1";}
	else if(hashdata == "concept2")		{window.location.hash = "concept/ambassador1";}
	else if(hashdata == "lineup")		{window.location.hash = "lineup/list";}
	else if(hashdata == "wiredf")		{window.location.hash = "wiredf/ambassador";}
	else if(hashdata == "news")			{window.location.hash = "news/0";}
	else if(hashdata == "stores")		{window.location.hash = "stores";}
	else if(hashdata == "promotion")	{window.location.hash = "promotion/0";}

	else if(hashdata == "special")	{window.location.hash = "special";}
}
//FACEBOOK SHARE

function facebookShare(){
	//TRACKING
	var trackhash0Array = hashArray[0].split("#");
	var trackhash0 = trackhash0Array[1];
	if(hashArray[2] == undefined){GA_EventClickLog("facebook_" + trackhash0 + "_" + hashArray[1] ,"ButtonClick");}
	else{GA_EventClickLog("facebook_" + trackhash0 + "_" + hashArray[1] + "_" + hashArray[2] ,"ButtonClick");}
	
	var hashTypeArray = hash.split("#");
	var hashType = hashTypeArray[1];
	var shareURL="http://www.facebook.com/share.php?t=" + encodeURIComponent("WIRED - FROM JAPAN TO THE WORLD") + "&u=" + encodeURIComponent(hostName + "fb.asp"+"?rnd=" + Math.floor((Math.random() * 10000))+"&hashtype="+ hashType);
	window.open(shareURL);
}


