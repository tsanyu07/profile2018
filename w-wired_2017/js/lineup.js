// JavaScript Document
var $lineupXML;
var totalListNumber;
var selectListNumber 		= 0;
var lineUpListNumber 		= -1;
var prevLineUpListNumber 	= -1;
var totalProductNumber;
var productNumber 			= 0;
var lineuplistGoX 			= 0;
var productNavGoY 			= 0;
var $alllineupdata 			= $body.find('div#alllineupdata');
var $lineuplistnav 			= $alllineupdata.find('div#lineuplistnav');
var $lineuplistdata 		= $alllineupdata.find('div#lineuplistdata');
var $lineuplistgo 			= $alllineupdata.find('div#lineuplistgo');
var $lineupdata 			= $alllineupdata.find('div#lineupdata');
var $lineuplistnpbt 		= $alllineupdata.find('div#lineuplistnpbt');
var $lineupnav 				= $alllineupdata.find('div#lineupnav');
var $lineuplist;
var $lineuplistbt;

var $new	= $alllineupdata.find('img#lineupnew');
var $solar 	= $alllineupdata.find('img#lineupsolar');

(function lineupinit(){
	//下載錶款資料
	$.ajax({
		type:"GET",
		url:"xml/lineupdata.xml?ran=" + Math.random(),
		dataType:"xml",
		start:function(){
			$loading.show();
		},
		success:function(xml){
			$loading.hide();
			$lineupXML = $(xml);
			creatLineUpList();
		}
	});
	$alllineupdata.setFull("ALL",0,0);
	$lineuplistnav.setAlign("TOP_RIGHT",210,162);
	$lineuplistdata.setFull("ALL",170,0);
	$lineuplistgo.setFull("HEIGHT",0,0);
	$lineupdata.setFull("ALL",0,0);
	$lineuplistnpbt.setAlign("CENTER",0,-72);
})();
//創造錶款列表
function creatLineUpList(){
	var listCode1 = '<div id="lineuplist"><div id="listdata"><div id="listname">';
	var listCode2 = '</div><div id="listdescription">';
	var listCode3 = '</div><div id="listphoto"><img src="';
	var listCode4 = '" /></div><div id="listmorebt"><img src="images/morebt.gif" /></div></div></div>';
	totalListNumber = $lineupXML.find('productlist').length;
	for(var i = 0; i < totalListNumber; i++){
		$lineuplistnav.append('<div id="lineuplistbt">' + $lineupXML.find('productlistname').eq(i).text() + '</div>');
		$lineuplistgo.append(listCode1 + $lineupXML.find('productlistname').eq(i).text() + listCode2 + $lineupXML.find('productlistword').eq(i).text() + listCode3 + $lineupXML.find('productlistphoto').eq(i).text() + listCode4);
	}
	$lineuplist = $alllineupdata.find('div#lineuplist');
	$lineuplistbt = $alllineupdata.find('div#lineuplistbt');
	$lineuplist.setFull("HEIGHT",0,0);
	$alllineupdata.find('div#listdata').setAlign("CENTER",0,-250);
	setlineupbutton();//設定列表按鈕
	lineupFullScreen();
	lineupAnalysis();
}
//按鈕設定
function setlineupbutton(){
	
	$alllineupdata.find('div#productfbbt').click(function(){facebookShare();});
	
	//錶款列表
	$lineuplist.hover(
		function(){
			selectListNumber = $lineuplist.index($(this));
			selectList(selectListNumber);
		},
		function(){}
	);
	selectList(0);
	
	var $listmorebt = $alllineupdata.find('div#listmorebt');
	$listmorebt.click(function(){lineupGoHash($listmorebt.index($(this)),0);});
	
	//快速錶款選單
	$lineuplistbt.hover(
		function(){$(this).stop().animate({"opacity":1});},
		function(){
			if(lineUpListNumber == $lineuplistbt.index($(this))){$(this).stop().animate({"opacity":1});}
			else{$(this).stop().animate({"opacity":0.42});}
		}
	);
	$lineuplistbt.click(function(){lineupGoHash($lineuplistbt.index($(this)),0);});
	
	//回列表按鈕
	$alllineupdata.find('div#backbt').click(function(){lineupGoHash(-1,0);});
	
	//錶款列表位置設定按鈕 - 錶款過多超出畫面時使用
	$alllineupdata.find('img#lineuplistprevbt').click(function(){
		lineuplistGoX = lineuplistGoX + $window.width()/2;
		if(lineuplistGoX>0){lineuplistGoX = 0;}
		$lineuplistgo.stop().animate({"left":lineuplistGoX + "px"});
	});
	$alllineupdata.find('img#lineuplistnextbt').click(function(){
		lineuplistGoX = lineuplistGoX - $window.width()/2;
		if(lineuplistGoX<($window.width()-230) - $lineuplistgo.width()){lineuplistGoX = ($window.width()-230) - $lineuplistgo.width();}
		$lineuplistgo.stop().animate({"left":lineuplistGoX + "px"});
	});
	
	//左邊手錶選單位置設定按鈕 - 手錶過多超出畫面時使用
	$alllineupdata.find('div#prodNavPrevBt').click(function(){
		productNavGoY = productNavGoY + $window.height()/2;
		if(productNavGoY > 60){productNavGoY = 60;}
		$lineupnav.stop().animate({"top":productNavGoY + "px"});
	});
	$alllineupdata.find('div#prodNavNextBt').click(function(){
		productNavGoY = productNavGoY - $window.height()/2;
		if(productNavGoY < $window.height() - 60 - $lineupnav.height()){productNavGoY = $window.height() - 60 - $lineupnav.height();}
		$lineupnav.stop().animate({"top":productNavGoY + "px"});
	});
	
	
	//滾輪設定
	//$lineupnav.mousewheel(function(objEvent, intDelta){
	$alllineupdata.mousewheel(function(objEvent, intDelta){
		if(hashArray[0] == "#lineup"){
			if( $alllineupdata.height() < $lineupnav.height() ){
				productNavGoY = productNavGoY + intDelta*66;
				if( productNavGoY < $window.height() - 60 - $lineupnav.height() ){
					productNavGoY = $window.height() - 60 - $lineupnav.height();
				}else if( productNavGoY > 60 ){
					productNavGoY = 60;
				}
				 $lineupnav.stop().animate({"top":productNavGoY});
			}
		}
	});
	
	
	$alllineupdata.find('div#productphoto').click(function(){
		setLightBoxMode("OPEN");
		$productbox.attr("src", $lineupXML.find('productlist').eq(lineUpListNumber).find('productbigphoto').eq(productNumber).text());
	});
}

function selectList(num){
	for(var i=0; i<$lineuplist.length; i++){
		if(num == i){
			$lineuplist.eq(i).stop().animate({"width":"360px"});
			$lineuplist.eq(i).find('div#listname, div#listdescription, div#listmorebt').show();
			$lineuplist.eq(i).find('div#listdata').stop().animate({"left":"60px"});
		}else{
			$lineuplist.eq(i).stop().animate({"width":"120px"});
			$lineuplist.eq(i).find('div#listname, div#listdescription, div#listmorebt').hide();
			$lineuplist.eq(i).find('div#listdata').stop().animate({"left":"-120px"});
		}
	}
}

//快速錶款選單按鈕還原
function resetLineupListButton(){
	for(var i=0; i<totalListNumber; i++){
		if(lineUpListNumber == i){$lineuplistbt.eq(i).stop().animate({"opacity":1});}
		else{$lineuplistbt.eq(i).stop().animate({"opacity":0.42});}
	}
}
//全銀幕設定
$window.resize(function(){lineupFullScreen();});
function lineupFullScreen(){
	$lineuplistgo.css({"width":360 + 120 * ($lineuplist.length-1) + 20 + "px"});
	$alllineupdata.find('div#product').css({"left":($window.width()-230)/2 - 320 + "px","top":$window.height()/2 - 180 + "px"});
	if($alllineupdata.width()-230 > $lineuplistgo.width()){
		$lineuplistgo.css({"left": ($alllineupdata.width()-230)/2 - $lineuplistgo.width()/2 + "px"});
		$lineuplistnpbt.hide();
	}else{
		if($lineuplistgo.position().left>0){$lineuplistgo.css("left","0px");}
		if($lineuplistgo.position().left<-$lineuplistgo.width()){$lineuplistgo.css("left",-$lineuplistgo.width() + "px");}
		$lineuplistnpbt.show();
	}
	if($window.height()>$lineupnav.height()){
		$lineupnav.css("top",$window.height()/2 - $lineupnav.height()/2 + "px");
		$alllineupdata.find('div#prodNavPrevBt, div#prodNavNextBt').hide();
	}else{
		if($lineupnav.position().top > 60){$lineupnav.css("top","60px");}
		else if($lineupnav.position().top < $window.height() - 60 - $lineupnav.height()){$lineupnav.css("top", $window.height() - 60 - $lineupnav.height() + "px");}
		$alllineupdata.find('div#prodNavPrevBt, div#prodNavNextBt').show();
	}
}

//改變網址
function lineupGoHash(listNb, pdNb){
	if(listNb == -1){window.location.hash = "lineup/list";}
	else{window.location.hash = "lineup/" + $lineupXML.find('productlistid').eq(listNb).text() + "/" + $lineupXML.find('productlist').eq(listNb).find('productid').eq(pdNb).text();}
}

//創造左邊手錶選單按鈕
function creatLineupNavButton(){
	$lineupnav.html("");//清空
	for(var i=0; i<$lineupXML.find('productlist').eq(lineUpListNumber).find('product').length; i++){$lineupnav.append('<div id="lineupbt"><img src="' + $lineupXML.find('productlist').eq(lineUpListNumber).find('productbtphoto').eq(i).text() + '" /></div>');}
	var $lineupbt = $alllineupdata.find('div#lineupbt');
	$lineupbt.click(function(){lineupGoHash(lineUpListNumber,$lineupbt.index($(this)));});
}

//網址分析
function lineupAnalysis(){
	if(hashArray[1] == "list"){
		$lineupdata.stop().animate({"opacity":0});
		$lineuplistdata.stop().animate({"opacity":1});
		$lineuplistnav.stop().animate({"opacity":0});

		$lineupdata.css({"z-index":9});
		$lineuplistdata.css({"z-index":10});
		$lineuplistnav.css({"z-index":8});
		
	}else{
		for(var i = 0; i < $lineupXML.find('productlistid').length; i++){
			if(hashArray[1] == $lineupXML.find('productlistid').eq(i).text()){
				if(i != prevLineUpListNumber){
					lineUpListNumber = i;
					prevLineUpListNumber = lineUpListNumber;
					resetLineupListButton();
					creatLineupNavButton();
				}
			}
		}
		$lineupdata.stop().animate({"opacity":1});
		$lineuplistdata.stop().animate({"opacity":0});
		$lineuplistnav.stop().animate({"opacity":1});
		$lineupdata.css({"z-index":9});
		$lineuplistdata.css({"z-index":8});
		$lineuplistnav.css({"z-index":10});
				
		totalProductNumber = $lineupXML.find('productlist').eq(lineUpListNumber).find('productid').length;
		
		for(var i = 0; i < totalProductNumber; i++){
			if($lineupXML.find('productlist').eq(lineUpListNumber).find('productid').eq(i).text() == hashArray[2]){
				productNumber = i;
			}
		}
		
		if($lineupXML.find('productlist').eq(lineUpListNumber).find('new').eq(productNumber).text() == 0){$new.hide();}
		else if($lineupXML.find('productlist').eq(lineUpListNumber).find('new').eq(productNumber).text() == 1){$new.show();}
		
		if($lineupXML.find('productlist').eq(lineUpListNumber).find('solar').eq(productNumber).text() == 0){$solar.hide();}
		else if($lineupXML.find('productlist').eq(lineUpListNumber).find('solar').eq(productNumber).text() == 1){$solar.show();}
		
		$alllineupdata.find('div#lineupname').html($lineupXML.find('productlistname').eq(lineUpListNumber).text());
		$alllineupdata.find('div#productname').html($lineupXML.find('productlist').eq(lineUpListNumber).find('productname').eq(productNumber).text());
		$alllineupdata.find('div#productphoto img').attr("src",$lineupXML.find('productlist').eq(lineUpListNumber).find('productphoto').eq(productNumber).text());
		
		$alllineupdata.find('div#productdescription').html("");
		for(var i=0; i<$lineupXML.find('productlist').eq(lineUpListNumber).find('productword').eq(productNumber).find('worddata').length; i++){

			$alllineupdata.find('div#productdescription').append('<div id="description">' + $lineupXML.find('productlist').eq(lineUpListNumber).find('productword').eq(productNumber).find('worddata').eq(i).text() + '</div>');
			
			if($lineupXML.find('productlist').eq(lineUpListNumber).find('productword').eq(productNumber).find('worddata').eq(i).attr("name") == "red"){
				$('#productdescription').children('div').eq(i).css("color","white");
			}

		}
		$lineupnav.height(108*totalProductNumber);
		lineupFullScreen();
	}
	
}

