// JavaScript Document
/*
$.Events = {
	SWIPE_LEFT: 'swipeLeft',
	SWIPE_RIGHT: 'swipeRight',
	SWIPE_UP: 'swipeUp',
	SWIPE_DOWN: 'swipeDown'
}
$('body').find('div#nav').swipeEvents();
$('body').find('div#nav').bind($.Events.SWIPE_UP, doUp);
$('body').find('div#nav').bind($.Events.SWIPE_DOWN, doDown);
//$('body').bind($.Events.SWIPE_LEFT, doLeft);
//$('body').bind($.Events.SWIPE_RIGHT, doright);
function doUp()		{
	var goNumber = menuPage-1;
	if(goNumber<0){goNumber = 0;}
	goHash(mainArray[goNumber]);
}
function doDown()	{
	var goNumber = menuPage+1;
	if(goNumber>6){goNumber = 6;}	
	goHash(mainArray[goNumber]);
}
*/
//function doLeft()	{trace("LEFT!!!");}
//function doright()	{trace("RIGHT!!!");}

(function init(){
	//全銀幕設定
	$('body').find('div#maindata').setFull("ALL",0,0);
	$('body').find('div#data').setFull("ALL",0,0);
	$('body').find('div#section').setFull("ALL",0,0);
	$('body').find('div#nav').setFull("HEIGHT",0,0);
	$('body').find('div#navbg').setFull("HEIGHT",0,0);
	$('body').find('div#navbg div#white').setFull("HEIGHT",0,0);
	$('body').find('div#navbg div#pink').setFull("HEIGHT",0,0);
	$('body').find('div#navline').setFull("HEIGHT",0,0);
	$('body').find('div#navline div#white').setFull("HEIGHT",0,0);
	$('body').find('div#navline div#pink').setFull("HEIGHT",0,0);
	$('body').find('div#navcopyright div#white').setAlign("BOTTOM",0,0);
	$('body').find('div#navcopyright div#pink').setAlign("BOTTOM",0,0);
	$('body').find('div#navbg div#white img').setFull("HEIGHT",0,0);
	$('body').find('div#navbg div#pink img').setFull("HEIGHT",0,0);
	$('body').find('div#navcopyright').setAlign("BOTTOM",0,36);
	$('body').find('div#background').setFull("ALL",0,0);
	$('body').find('div#npbt').setAlign("BOTTOM",0,66);
	//TRACE設定
	$('body').find('div#trace').draggable();
	$('body').find('div#trace').hide();
})();
var hostName ="http://www.w-wired.com.tw/wired_test/";//正式站測試
//0~6
var mainArray = ["home","concept","lineup","wiredf","news","stores","promotion"];
var goMenuPage;
var menuPage;
var prevMenuPage = -1;
var hash;
var hashArray;
var loadedArray = ["","","","","","",""];
//單元上下移動
function mainSectionGo(){
	for(var i=0; i<mainArray.length; i++){
		if(hashArray[0] == "" || hashArray[0] == "#"){$('body').find('div#data').stop().animate({"top":"-" + $('body').find('div#data').find("div#section").eq(0).position().top + "px"},1000);}
		else if(hashArray[0] == "#" + mainArray[i]){$('body').find('div#data').stop().animate({"top":"-" + $('body').find('div#data').find("div#section").eq(i).position().top + "px"},1000);}
	}
}
//單元下載
function loadSection(){
	if(hashArray[0] == "" || hashArray[0] == "#" || hashArray[0] == "#home"){
		if(loadedArray[0] == ""){
			$('body').find('div#data').find("div#section").eq(0).find("div#sectiondata").load("home.html?ran=" + Math.random());
			loadedArray[0] = "home";
		}
	}else if(hashArray[0] == '#concept'){
		if(loadedArray[1] == ""){
			$('body').find('div#data').find("div#section").eq(1).find("div#sectiondata").load("concept.html?ran=" + Math.random());
			loadedArray[1] = "concept";
		}else{conceptAnalysis();}
	}else if(hashArray[0] == '#lineup'){
		if(loadedArray[2] == ""){
			$('body').find('div#data').find("div#section").eq(2).find("div#sectiondata").load("lineup.html?ran=" + Math.random());
			loadedArray[2] = "lineup";
		}else{lineupAnalysis();}
	}else if(hashArray[0] == '#wiredf'){
		if(loadedArray[3] == ""){
			$('body').find('div#data').find("div#section").eq(3).find("div#sectiondata").load("wiredf.html?ran=" + Math.random());
			loadedArray[3] = "wiredf";
		}
	}else if(hashArray[0] == '#news'){
		if(loadedArray[4] == ""){
			$('body').find('div#data').find("div#section").eq(4).find("div#sectiondata").load("news.html?ran=" + Math.random());
			loadedArray[4] = "news";
		}else{newsAnalysis();}
	}else if(hashArray[0] == '#stores'){
		if(loadedArray[5] == ""){
			$('body').find('div#data').find("div#section").eq(5).find("div#sectiondata").load("stores.html?ran=" + Math.random());
			loadedArray[5] = "stores";
		}
	}else if(hashArray[0] == '#promotion'){
		if(loadedArray[6] == ""){
			$('body').find('div#data').find("div#section").eq(6).find("div#sectiondata").load("promotion.html?ran=" + Math.random());
			loadedArray[6] = "promotion";
		}
	}
}
//NAV X位置設定
function goNavX(){
	var navX = 0;
	if(hashArray[0] == "" || hashArray[0] == "#" || hashArray[0] == "#home"){navX = 108;}
	else if(hashArray[0] == '#concept'){navX = 0;}
	else if(hashArray[0] == '#lineup'){navX = $(window).width()-210;}
	else if(hashArray[0] == '#wiredf'){navX = $(window).width()-210;}
	else if(hashArray[0] == '#news'){navX = 0;}
	else if(hashArray[0] == '#stores'){navX = 0;}
	else if(hashArray[0] == '#promotion'){navX = 0;}
	//單元下載
	$('body').find('div#nav').stop().animate({"left": navX + "px"},1000,'swing',function(){loadSection();});
}
//LOADING SETTING
(function loaderSetting(){
	$('body').find('div#sectiondata').ajaxStart(function(){$('body').find('div#loading').show();});
	$('body').find('div#sectiondata').ajaxComplete(function(){$('body').find('div#loading').hide();});
})();
//網址分析
function analysisAddress(){
	//網址分析
	hash = window.location.hash;
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
		//按鈕復原
		resetButton();
		//NP按鈕設定
		if(menuPage == 0){
			$('body').find('div#nextbt').show();
			$('body').find('div#prevbt').hide();
			$('body').find('div#nextbt').css("bottom","0px");
		}else if(menuPage == 6){
			$('body').find('div#nextbt').hide();
			$('body').find('div#prevbt').show();
			$('body').find('div#prevbt').css("bottom","0px");
		}else{
			$('body').find('div#nextbt').show();
			$('body').find('div#prevbt').show();
			$('body').find('div#nextbt').css("bottom","0px");
			$('body').find('div#prevbt').css("bottom","30px");
		}
		//按鈕變色設定
		if(hashArray[0] == '#wiredf'){
			$('body').find('div#white').stop().animate( {'opacity' : 0} , 'normal');
			$('body').find('div#pink').stop().animate( {'opacity' : 1} , 'normal');
		}else{
			$('body').find('div#white').stop().animate( {'opacity' : 1} , 'normal');
			$('body').find('div#pink').stop().animate( {'opacity' : 0} , 'normal');
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
};
//背景全銀幕設定
$(window).resize(function(){
	mainSectionGo();
	goNavX();
	fullbg();//背景全銀幕設定
});
function fullbg(){
	var winW = $(window).width();
	var winH = $(window).height();
	if( winW/winH < 16/9 ){
		$('body').find('img#backgroundphoto').height(winH);
		$('body').find('img#backgroundphoto').width(winH*16/9);
		$('body').find('img#backgroundphoto').top(0);
		$('body').find('img#backgroundphoto').left(winW/2 - winH*16/9/2);
	}else{
		$('body').find('img#backgroundphoto').height(winW*9/16);
		$('body').find('img#backgroundphoto').width(winW);
		$('body').find('img#backgroundphoto').top(winH/2 - winW*9/16/2);
		$('body').find('img#backgroundphoto').left(0);
	}
}
fullbg();
//trace設定
function trace(data){
	var hstring = $('body').find('div#trace').html();
	$('body').find('div#trace').html(data + "<br />" + hstring);
	$('body').find('div#trace').show();
}
//下載完成
function goStart(){
	analysisAddress();
	setTimeout("intro()",360);
	setTimeout("setNav()",960);
}
//開場動作
function intro(){
	$('body').find('div#nav').delay(360).animate( {'opacity' : 1} , 'normal');
	$('body').find('div#data').find('div#section').slowEach(100, function(){$(this).animate( {'opacity' : 1} , 'normal');});
}
//NAV設定
function setNav(){
	$('body').find('div#nav').hover(
		function(){$('body').find('div#navbg').stop().animate({"opacity":1});},
		function(){$('body').find('div#navbg').stop().animate({"opacity":0});}
	);
	$('body').find('div#button').hover(
		function(){
			$(this).find('div#buttonname').stop().animate({"opacity":1});
			//if($('body').find('div#button').index($(this)) == 2){$('body').find('div#button').eq(2).find('div#buttonname').find('div#white, div#pink').text("敬請期待");}
			if($('body').find('div#button').index($(this)) == 3){$('body').find('div#button').eq(3).find('div#buttonname').find('div#white, div#pink').text("敬請期待");}
			if($('body').find('div#button').index($(this)) == 5){$('body').find('div#button').eq(5).find('div#buttonname').find('div#white, div#pink').text("敬請期待");}
		},
		function(){
			var outHashData = "#" + $(this).attr("class");
			if(outHashData == hashArray[0]){$(this).find('div#buttonname').stop().animate({"opacity":1});}
			else{$(this).find('div#buttonname').stop().animate({"opacity":0.42});}
			//if($('body').find('div#button').index($(this)) == 2){$('body').find('div#button').eq(2).find('div#buttonname').find('div#white, div#pink').text("WIRED f");}
			if($('body').find('div#button').index($(this)) == 3){$('body').find('div#button').eq(3).find('div#buttonname').find('div#white, div#pink').text("最新消息");}
			if($('body').find('div#button').index($(this)) == 5){$('body').find('div#button').eq(5).find('div#buttonname').find('div#white, div#pink').text("販促活動資訊");}
		}
	);
	$('body').find('div#logo').click(function(){goHash("home");});//LOGO回首頁
	$('body').find('div#button').click(function(){
		//if($('body').find('div#button').index($(this)) == 2 || $('body').find('div#button').index($(this)) == 3 || $('body').find('div#button').index($(this)) == 5){}
		if($('body').find('div#button').index($(this)) == 3 || $('body').find('div#button').index($(this)) == 5){}
		else{goHash($(this).attr("class"));}
	});//個單元按鈕
	/*
	//滾輪設定
	$('body').find('div#maindata, div#nav').mousewheel(function(objEvent, intDelta){
		var goNumber = menuPage-intDelta;
		if(goNumber>6){goNumber = 6;}	
		else if(goNumber<0){goNumber = 0;}
		goHash(mainArray[goNumber]);
	});
	*/
	$('body').find('div#nextbt').click(function(){
		var goNumber = menuPage + 1;
		goHash(mainArray[goNumber]);
	});
	$('body').find('div#prevbt').click(function(){
		var goNumber = menuPage - 1;
		goHash(mainArray[goNumber]);
	});
	/*
	//WS設定
	$('body').keypress(function(event){
		var goNumber;
		if(event.keyCode == 119){
			goNumber = menuPage - 1;
			if(goNumber>=0){goHash(mainArray[goNumber]);}
		}else if(event.keyCode == 115){
			goNumber = menuPage + 1;
			if(goNumber<=6){goHash(mainArray[goNumber]);}
		}
	});
	*/
	$('body').find('div#fbbt').click(function(){
		var shareURL="http://www.facebook.com/share.php?t=" + encodeURIComponent("WIRED - FROM JAPAN TO THE WORLD") + "&u=" + encodeURIComponent(hostName);
		window.open(shareURL);
	});
	
}
//按鈕還原
function resetButton(){
	for(var i=0; i<$('body').find('div#button').length; i++){
		var hashData = "#" + $('body').find('div#button').eq(i).attr("class");
		if(hashData == hashArray[0]){$('body').find('div#button').eq(i).find('div#buttonname').stop().animate({"opacity":1});}
		else{$('body').find('div#button').eq(i).find('div#buttonname').stop().animate({"opacity":0.42});}
	}
}
//改變網址
function goHash(hashdata){
	if(hashdata == "home")				{window.location.hash = "home";}
	else if(hashdata == "concept")		{window.location.hash = "concept/aboutwired1";}
	else if(hashdata == "lineup")		{window.location.hash = "lineup/list";}
	else if(hashdata == "wiredf")		{window.location.hash = "wiredf/ambassador";}
	else if(hashdata == "news")			{window.location.hash = "news/0";}
	else if(hashdata == "stores")		{window.location.hash = "stores";}
	else if(hashdata == "promotion")	{window.location.hash = "promotion/0";}
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