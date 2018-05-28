// JavaScript Document
var conceptGoX 		= 0;
var conceptArray 	= ["aboutwired1","aboutwired2","timeline","ambassador1","ambassador2"];
var conceptNumber 	= 0;
var lightNumber 	= 3;

var $timedata 		= $body.find('div#timedata');
var $timelinekun 	= $body.find('div#timelinekun');
var $timelinedata 	= $body.find('div#timelinedata');
var $conceptnav 	= $body.find('div#conceptnav');
var $alan 			= $body.find('div#alan');

(function conceptinit(){
	
	//concept設定
	$body.find('div#ambassador').setFull("ALL",0,0);
	$body.find('div#conceptdata').setFull("ALL",0,0);
	$body.find('div#conceptnavgroup').setFull("ALL",0,0);
	$body.find('div#timeline').setFull("ALL",250,0);
	$alan.setAlign("TOP",0,18);
	$conceptnav.setAlign("BOTTOM",0,80);
	for(var i=0; i<$timedata.length; i++){
		if(i == 0){setTimeData(0,139,64,141);}
		else if(i == 1){setTimeData(1,262,169,260);}
		else if(i == 2){setTimeData(2,359,10,361);}
		else if(i == 3){setTimeData(3,507,211,508);}
		else if(i == 4){setTimeData(4,641,65,641);}
		else if(i == 5){setTimeData(5,798,156,799);}
		else if(i == 6){setTimeData(6,845,10,846);}
		else if(i == 7){setTimeData(7,1147,189,1149);}
		else if(i == 8){setTimeData(8,1280,50,1282);}
		else if(i == 9){setTimeData(9,1439,147,1440);}
		else if(i == 10){setTimeData(10,1576,12,1577);}
		else if(i == 11){setTimeData(11,1714,200,1711);}
		else if(i == 12){setTimeData(12,1895,12,1898);}
		else if(i == 13){setTimeData(13,2114,147,2111);}
		else if(i == 14){setTimeData(14,2300,40,2300);}
		else if(i == 15){setTimeData(15,2510,175,3400);}
	}
	//CONCEPT NAV 設定
	var $conceptnavline = $body.find('div#conceptnavline');
	for(var i=0; i<$conceptnavline.length; i++){$conceptnavline.eq(i).left(16 + 104*i);}
	var $conceptnavbt = $body.find('div#conceptnavbt');
	for(var i=0; i<$conceptnavbt.length; i++){$conceptnavbt.eq(i).left(104*i-29);}
	$conceptnavbt.click(function(){
		var clickNumber = $conceptnavbt.index($(this));
		conceptGoHash(clickNumber);
	});
	//AD按鈕設定
	$body.keypress(function(event){
		if(hashArray[0] == "#concept"){
			var goNumber;
			if(event.keyCode == 97){
				goNumber = conceptNumber - 1;
				if(goNumber>=0){conceptGoHash(goNumber);}
			}else if(event.keyCode == 100){
				goNumber = conceptNumber + 1;
				if(goNumber<=4){conceptGoHash(goNumber);}
			}
		}
	});
	//TIMELINE 移動按鈕設定
	$body.find('div#timenpbt img#timenextbt').click(function(){
		conceptGoX = conceptGoX - $window.width()/2;
		if(conceptGoX < $window.width() - 250 - 2800){conceptGoX = $window.width() - 250 - 2800;}
		$timelinedata.stop().animate({"left": conceptGoX},1000);
	});
	$body.find('div#timenpbt img#timeprevbt').click(function(){
		conceptGoX = conceptGoX + $window.width()/2;
		if(conceptGoX > 0){conceptGoX = 0;}
		$timelinedata.stop().animate({"left": conceptGoX},1000);
	});
	//全銀幕設定
	conceptFullScreen();
	
	$body.find('div#conceptnav, div#conceptdata').slowEach(360, function(){$(this).animate( {'opacity' : 1} , 'slow');});
	
	lightGo();
})();

function setTimeData(num,dleft,dtop,kleft){
	$timedata.eq(num).left(dleft);
	$timedata.eq(num).top(dtop);
	$timelinekun.eq(num).left(kleft);	
}

function lightGo(){
	var $balllight = $body.find('img#balllight');
	$balllight.eq(lightNumber).css({"opacity":"1"});
	$balllight.eq(lightNumber).animate({"opacity": 0},66, function(){$(this).css({"opacity":"1"});});
	$balllight.eq(lightNumber).delay(66).animate({"opacity": 0},360);
	lightNumber++;
	if(lightNumber > 4){lightNumber = 0;}
	setTimeout("lightGo()",1200);
}

//改變網址
function conceptGoHash(num){
	if(num == 0)		{ window.location.hash = "concept/aboutwired1"; }
	else if(num == 1)	{ window.location.hash = "concept/aboutwired2"; }
	else if(num == 2)	{ window.location.hash = "concept/timeline"; }
	else if(num == 3)	{ window.location.hash = "concept/ambassador1"; }
	else if(num == 4)	{ window.location.hash = "concept/ambassador2"; }
}

//全銀幕設定
$window.resize(function(){conceptFullScreen();});
function conceptFullScreen(){
	conceptAnalysis();
	
	var $aboutwired1 = $body.find('div#aboutwired1');
	var $aboutwired2 = $body.find('div#aboutwired2');
	var $ambassador1 = $body.find('div#ambassador1');
	var $ambassador2 = $body.find('div#ambassador2');
	
	if($timelinedata.css("left") > 0){$timelinedata.stop().animate({"left": 0},360);}
	else if($timelinedata.css("left") < ($window.width()-250)-2300){$timelinedata.stop().animate({"left": ($window.width()-250)-2300},360);}
	$aboutwired1.left(($window.width() - 180) / 2 - 320 + 180);
	$aboutwired1.top(($window.height() - 100) / 2 - 60);
	$aboutwired2.left(($window.width() - 180) / 2 - 320 + 180);
	$aboutwired2.top(($window.height() - 100) / 2 - 60);
	$conceptnav.left(($window.width() - 180) / 2 - 200 + 180);
	$timelinedata.top(($window.height() - 100) / 2 - 100);
	$ambassador1.left(($window.width() - 180) / 2 - 300 + 180);
	$ambassador1.top(($window.height() - 100) / 2 - 200);
	$ambassador2.left(($window.width() - 180) / 2 + 180);
	$ambassador2.top(($window.height() - 100) / 2 - 200);
	$body.find('div#timenpbt').top(($window.height() - 100) / 2 - 69);
	if(conceptNumber == 3){$alan.left(($window.width() - 180) / 2 - 50 + 180);}
	else if(conceptNumber == 4){$alan.left(($window.width() - 180) / 2 - 450 + 180);}
}

//網址分析
conceptAnalysis();
function conceptAnalysis(){
	var $allconceptdata = $body.find('div#allconceptdata');
	var $conceptnavaboutword = $body.find('div#conceptnavaboutword');
	var $conceptnavambassadorword = $body.find('div#conceptnavambassadorword');
	$allconceptdata.width( $window.width()*5 );
	for(var i=0; i<conceptArray.length; i++){
		if(hashArray[1] == conceptArray[i]){
			conceptNumber = i;
			$body.find('div#conceptnavpoint').stop().animate({"left": 104*conceptNumber + "px"},360);
			$allconceptdata.stop().animate({"left": "-" + $window.width()*conceptNumber + "px"},360);
		}
	}
	if(conceptNumber == 0 || conceptNumber == 1 || conceptNumber == 2){
		$conceptnavaboutword.stop().animate({"opacity" : 1 },360);
		$conceptnavambassadorword.stop().animate({"opacity" : 0.36 },360);
		$alan.stop().animate({"opacity" : 0 },360);
	}else{
		$conceptnavaboutword.stop().animate({"opacity" : 0.36 },360);
		$conceptnavambassadorword.stop().animate({"opacity" : 1 },360);
		$alan.stop().animate({"opacity" : 1 },360);
		if(conceptNumber == 3){$alan.animate({"left" : ($window.width() - 180) / 2 - 50 + 180 },360);}
		else if(conceptNumber == 4){$alan.animate({"left" : ($window.width() - 180) / 2 - 450 + 180 },360);}
	}
}