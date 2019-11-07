// JavaScript Document
var $homebgXML;
var $homenewsXML;
var homeNewsNumber 		= 0;
var $homenewsmovedata 	= $body.find('div#homenewsmovedata');
var $homebg 			=  $body.find('div#homebg');
var $homenewsoverbt 	= $body.find('div#homenewsoverbt');
var $home_newsdatago 	= $body.find('div#home_newsdatago');

(function homeinit(){
	//背景設定
	$homebg.setFull("ALL",0,0);
	$body.find('div#linebg').setAlign("CENTER_RIGHT",0,-1050);
	$body.find('div#hometitle').setAlign("CENTER_RIGHT",140,-165);
	$homenewsoverbt.setAlign("CENTER_RIGHT",0,-37);
	//背景資料下載
	$.ajax({
		type:"GET",
		url:"xml/homebgdata.xml?ran=" + Math.random(),
		dataType:"xml",
		start:function(){$loading.show();},
		success:function(xml){
			$loading.hide();
			$homebgXML = $(xml);
			creatBg();//創造背景
		}
	});
	//news設定
	$body.find('div#homenews').setAlign("TOP_RIGHT",0,0);
	$homenewsmovedata.setFull("HEIGHT",0,0);
	$body.find('div#homenewsdata').setAlign("CENTER",0,-170);
	//news資料下載
	$.ajax({
		type:"GET",
		url:"xml/homenewsdata.xml?ran=" + Math.random(),
		dataType:"xml",
		start:function(){$loading.show();},
		success:function(xml){
			$loading.hide();
			$homenewsXML = $(xml);
			creatNews();//創造NEWS
		}
	});
	//news開關設定
	$homenewsoverbt.click(function(){newsopen();});
	$body.find('div#homenewsclosebt img').click(function(){newsclose();});
})();

var timer;
//創造背景
function creatBg(){
	for(var i=0; i<$homebgXML.find('bgurl').length; i++){$homebg.append('<div id="background"><img id="backgroundphoto" src="' + $homebgXML.find('bgurl').eq(i).text() + '" /></div>');}
	clearTimeout(timer);
	bgloop();
	fullbg();
}

//背景輪播



var loopNumber = 0;

function bgloop(){
	if(hashArray[0] == "" || hashArray[0] == "#" || hashArray[0] == "#home"){
		var $homebackgroundphoto = $body.find('div#homebg div#background img#backgroundphoto');
		if( loopNumber == $homebackgroundphoto.length - 1 ){ loopNumber = 0; }
		else{ loopNumber++; }
		for( var i=0; i<$homebackgroundphoto.length; i++ ){
			if( i == loopNumber ){ $homebackgroundphoto.eq(i).stop().animate( {'opacity' : 1} , 'slow'); }
			else{ $homebackgroundphoto.eq(i).stop().animate( {'opacity' : 0} , 'slow'); }
		}
	}
	timer = setTimeout("bgloop()",3600);
}

//創造NEWS
function creatNews(){
	var newsString1 = '<div id="home_news"><div id="homenewsphoto"><img src="';
	var newsString2 = '" /></div><div id="homenewstitle">';
	var newsString3 = '</div><div id="homenewsline"></div><div id="homenewsword">';
	var newsString4 = '</div></div>';
	for( var i=0; i<$homenewsXML.find('news').length; i++ ){
		//資料創造
		$home_newsdatago.append(newsString1 + $homenewsXML.find('newsphoto').eq(i).text() + newsString2 + $homenewsXML.find('newstitle').eq(i).text() + newsString3 + $homenewsXML.find('newsword').eq(i).text() + newsString4);
		//按鈕創造
		$body.find('div#homenewsbtdata').append('<div id="homenewsbt"><img src="images/newsbt.gif" /></div>');
	}
	$home_newsdatago.css("width",140 * $homenewsXML.find('news').length + "px");
	$body.find('div#homenewsbt').click(function(){
		homeNewsNumber = $body.find('div#homenewsbt').index($(this));
		changeNews();
	});
	//NEWS連結
	$body.find('div#home_news').click(function(){
		var urlNumber = $body.find('div#home_news').index($(this));
		window.location = $homenewsXML.find('newsurl').eq(urlNumber).text();
		GA_EventClickLog($homenewsXML.find('trackingcode').eq(urlNumber).text(), "HomeNewsClick");
	});
	$body.find('div#linebg, div#hometitle, div#homenewsoverbt, div#homenews, div#homebg').slowEach(360, function(){$(this).animate( {'opacity' : 1} , 'slow');});
}

function changeNews(){
	$home_newsdatago.animate( {'left' : '-' + 140*homeNewsNumber + 'px'} , 240);
	$body.find('div#homenewsgo').animate( {'left' : homeNewsNumber*18 + 'px'} , 240);
}

//news開關設定
function newsopen(){$homenewsmovedata.animate( {'left' : '-240px'} , 240);}
function newsclose(){$homenewsmovedata.animate( {'left' : '0px'} , 240);}