// JavaScript Document
var $wiredfXML;
var totalListNumber_wiredf;
var selectListNumber_wiredf = 0;
var lineUpListNumber_wiredf = -1;
var prevlineUpListNumber_wiredf = -1;
var totalproductNumber_wiredf;
var productNumber_wiredf = 0;
var lineuplistGoX_wiredf = 0;
var productNavGoY_wiredf = 0;
var wfbgNumber = 0;
var $allwiredfdata 			=  $body.find('div#allwiredfdata');
var $lineuplistnav_wiredf 	=  $allwiredfdata.find('div#lineuplistnav_wiredf');
var $lineuplistdata_wiredf 	=  $allwiredfdata.find('div#lineuplistdata_wiredf');
var $lineuplistgo_wiredf 	=  $allwiredfdata.find('div#lineuplistgo_wiredf');
var $lineupdata_wiredf 		=  $allwiredfdata.find('div#lineupdata_wiredf');
var $lineuplistnpbt_wiredf 	=  $allwiredfdata.find('div#lineuplistnpbt_wiredf');
var $wiredfambassador 		=  $allwiredfdata.find('div#wiredfambassador');
var $wiredfambassadordata 	=  $allwiredfdata.find('div#wiredfambassadordata');
var $lineuplist_wiredf;
var $listdata_wiredf;
var $lineuplistbt_wiredf;
var $wiredflistbt			= $allwiredfdata.find('div#wiredflistbt');
var $lineupnav_wiredf 		= $allwiredfdata.find('div#lineupnav_wiredf');

var $new_wiredf				= $allwiredfdata.find('img#lineupnew_wiredf');
var $solar_wiredf 			= $allwiredfdata.find('img#lineupsolar_wiredf');
(function wiredfinit(){
	//下載錶款資料
	$.ajax({
		type:"GET",
		url:"xml/wiredfdata.xml?ran=" + Math.random(),
		dataType:"xml",
		start:function(){
			$loading.show();
		},
		success:function(xml){
			$loading.hide();
			$wiredfXML = $(xml);
			creatLineUpList_wiredf();
		}
	});
	$allwiredfdata.setFull("ALL",0,0);
	$lineuplistnav_wiredf.setAlign("TOP_RIGHT",210,194);
	$lineuplistdata_wiredf.setFull("ALL",170,0);
	$lineuplistgo_wiredf.setFull("HEIGHT",0,0);
	$lineupdata_wiredf.setFull("ALL",0,0);
	$lineuplistnpbt_wiredf.setAlign("CENTER",0,-72);
	
	$wiredfambassador.setFull("ALL",0,0);
	$wiredfambassadordata.setAlign("CENTER_CENTER", 80, -80);
	clearTimeout(wftimer);
	fullbg();
	wfBgLoop();
})();
var wftimer;
function wfBgLoop(){
	var $wiredfbackground =  $body.find('div#wiredfambassador div#background');
	if(wfbgNumber == 0){
		if(msie == "msie-8.0"){
			$wiredfbackground.eq(0).css({"display":"block"});
			/*$wiredfbackground.eq(1).css({"display":"none"}); */
		}else{
			$wiredfbackground.eq(0).stop().animate({"opacity":1});
			/*$wiredfbackground.eq(1).stop().animate({"opacity":0});*/
		}
		wfbgNumber = 1;
	}else if(wfbgNumber == 1){
		if(msie == "msie-8.0"){
			$wiredfbackground.eq(1).css({"display":"block"});
			/*$wiredfbackground.eq(0).css({"display":"none"});*/
		}else{
			$wiredfbackground.eq(1).stop().animate({"opacity":1});
			/*$wiredfbackground.eq(0).stop().animate({"opacity":0});*/
		}
		wfbgNumber = 0;
	}
	wftimer = setTimeout("wfBgLoop()",4800);
}


//創造錶款列表
function creatLineUpList_wiredf(){
	var listCode1 = '<div id="lineuplist_wiredf"><div id="listdata_wiredf"><div id="listname_wiredf">';
	var listCode2 = '</div><div id="listdescription_wiredf">';
	var listCode3 = '</div><div id="listphoto_wiredf"><img src="';
	var listCode4 = '" /></div><div id="listmorebt_wiredf"><img src="images/morebt_wiredf.gif" /></div></div></div>';
	totalListNumber_wiredf = $wiredfXML.find('productlist').length;
	for(var i = 0; i < totalListNumber_wiredf; i++){
		$lineuplistnav_wiredf.append('<div id="lineuplistbt_wiredf">' + $wiredfXML.find('productlistname').eq(i).text() + '</div>');
		$lineuplistgo_wiredf.append(listCode1 + $wiredfXML.find('productlistname').eq(i).text() + listCode2 + $wiredfXML.find('productlistword').eq(i).text() + listCode3 + $wiredfXML.find('productlistphoto').eq(i).text() + listCode4);
	}
	$lineuplistbt_wiredf = $allwiredfdata.find('div#lineuplistbt_wiredf');
	$lineuplist_wiredf = $allwiredfdata.find('div#lineuplist_wiredf');
	$listdata_wiredf = $allwiredfdata.find('div#listdata_wiredf');
	$lineuplist_wiredf.setFull("HEIGHT",0,0);
	$listdata_wiredf.setAlign("CENTER",0,-250);
	setlineupbutton_wiredf();//設定列表按鈕
	lineupFullScreen_wiredf();
	lineupAnalysis_wiredf();
}
//按鈕設定
function setlineupbutton_wiredf(){
	//代言人與錶款列表選單
	
	$allwiredfdata.find('div#productfbbt_wiredf').click(function(){facebookShare();});
	
	$wiredflistbt.eq(0).hover(
		function(){$(this).stop().animate({"opacity":1});},
		function(){
			//if(hashArray[1] == "ambassador"){$(this).stop().animate({"opacity":1});}
			if(hashArray[1] == "ambassador" || hashArray[1] != "ambassador"){$(this).stop().animate({"opacity":0.66});}
		}
	);
	$wiredflistbt.eq(0).click(function(){
		lineupGoHash_wiredf(-2,0);
	});
	$wiredflistbt.eq(1).hover(
		function(){$(this).stop().animate({"opacity":1});},
		function(){
			if(hashArray[1] != "ambassador" || hashArray[1] == "ambassador"){$(this).stop().animate({"opacity":1});}
			//else{$(this).stop().animate({"opacity":0.66});}
		}
	);
	$wiredflistbt.eq(1).click(function(){
		lineupGoHash_wiredf(-1,0);
	});
	//錶款列表
	$lineuplist_wiredf.hover(
		function(){
			selectListNumber_wiredf = $lineuplist_wiredf.index($(this));
			selectList_wiredf(selectListNumber_wiredf);
		},
		function(){}
	);
	selectList_wiredf(0);
	$allwiredfdata.find('div#listmorebt_wiredf').click(function(){lineupGoHash_wiredf($allwiredfdata.find('div#listmorebt_wiredf').index($(this)),0);});
	
	//快速錶款選單
	$lineuplistbt_wiredf.hover(
		function(){$(this).stop().animate({"opacity":1});},
		function(){
			if(lineUpListNumber_wiredf == $lineuplistbt_wiredf.index($(this))){$(this).stop().animate({"opacity":1});}
			else{$(this).stop().animate({"opacity":0.42});}
		}
	);
	$lineuplistbt_wiredf.click(function(){lineupGoHash_wiredf($lineuplistbt_wiredf.index($(this)),0);});
	
	//回列表按鈕
	$allwiredfdata.find('div#backbt_wiredf').click(function(){lineupGoHash_wiredf(-1,0);});
	
	//錶款列表位置設定按鈕 - 錶款過多超出畫面時使用
	$allwiredfdata.find('img#lineuplistprevbt_wiredf').click(function(){
		lineuplistGoX_wiredf = lineuplistGoX_wiredf + $window.width()/2;
		if(lineuplistGoX_wiredf>0){lineuplistGoX_wiredf = 0;}
		$lineuplistgo_wiredf.stop().animate({"left":lineuplistGoX_wiredf + "px"});
	});
	$allwiredfdata.find('img#lineuplistnextbt_wiredf').click(function(){
		lineuplistGoX_wiredf = lineuplistGoX_wiredf - $window.width()/2;
		if(lineuplistGoX_wiredf<($window.width()-230) - $lineuplistgo_wiredf.width()){lineuplistGoX_wiredf = ($window.width()-230) - $lineuplistgo_wiredf.width();}
		$lineuplistgo_wiredf.stop().animate({"left":lineuplistGoX_wiredf + "px"});
	});
	
	//左邊手錶選單位置設定按鈕 - 手錶過多超出畫面時使用
	$allwiredfdata.find('div#prodNavPrevBt_wiredf').click(function(){
		productNavGoY_wiredf = productNavGoY_wiredf + $window.height()/2;
		if(productNavGoY_wiredf > 60){productNavGoY_wiredf = 60;}
		$lineupnav_wiredf.stop().animate({"top":productNavGoY_wiredf + "px"});
	});
	$allwiredfdata.find('div#prodNavNextBt_wiredf').click(function(){
		productNavGoY_wiredf = productNavGoY_wiredf - $window.height()/2;
		if(productNavGoY_wiredf < $window.height() - 60 - $lineupnav_wiredf.height()){productNavGoY_wiredf = $window.height() - 60 - $lineupnav_wiredf.height();}
		$lineupnav_wiredf.stop().animate({"top":productNavGoY_wiredf + "px"});
	});
	
	//滾輪設定
	//$lineupnav_wiredf.mousewheel(function(objEvent, intDelta){
	$allwiredfdata.mousewheel(function(objEvent, intDelta){
		if(hashArray[0] == "#wiredf"){
			if( $allwiredfdata.height() < $lineupnav_wiredf.height() ){
				productNavGoY_wiredf = productNavGoY_wiredf + intDelta*66;
				if( productNavGoY_wiredf < $window.height() - 60 - $lineupnav_wiredf.height() ){
					productNavGoY_wiredf = $window.height() - 60 - $lineupnav_wiredf.height();
				}else if( productNavGoY_wiredf > 60 ){
					productNavGoY_wiredf = 60;
				}
				 $lineupnav_wiredf.stop().animate({"top":productNavGoY_wiredf});
			}
		}
	});
	
	$allwiredfdata.find('div#productphoto_wiredf').click(function(){
		setLightBoxMode("OPEN");
		$productbox.attr("src", $wiredfXML.find('productlist').eq(lineUpListNumber_wiredf).find('productbigphoto').eq(productNumber_wiredf).text());
	});
}

function selectList_wiredf(num){
	for(var i=0; i<$lineuplist_wiredf.length; i++){
		if(num == i){
			$lineuplist_wiredf.eq(i).stop().animate({"width":"360px"});
			$lineuplist_wiredf.eq(i).find('div#listname_wiredf, div#listdescription_wiredf, div#listmorebt_wiredf').show();
			$lineuplist_wiredf.eq(i).find('div#listdata_wiredf').stop().animate({"left":"60px"});
		}else{
			$lineuplist_wiredf.eq(i).stop().animate({"width":"120px"});
			$lineuplist_wiredf.eq(i).find('div#listname_wiredf, div#listdescription_wiredf, div#listmorebt_wiredf').hide();
			$lineuplist_wiredf.eq(i).find('div#listdata_wiredf').stop().animate({"left":"-60px"});
		}
	}
}

//快速錶款選單按鈕還原
function resetLineupListButton_wiredf(){
	// if(hashArray[1] == "ambassador"){
	// 	$wiredflistbt.eq(0).stop().animate({"opacity":1});
	// 	$wiredflistbt.eq(1).stop().animate({"opacity":0.42});
	// }
	if(hashArray[1] == "ambassador" || hashArray[1] == "list"){
		$wiredflistbt.eq(0).stop().animate({"opacity":0.42});
		$wiredflistbt.eq(1).stop().animate({"opacity":1});
	}
	
	for(var i=0; i<totalListNumber_wiredf; i++){
		if(lineUpListNumber_wiredf == i){$lineuplistbt_wiredf.eq(i).stop().animate({"opacity":1});}
		else{$lineuplistbt_wiredf.eq(i).stop().animate({"opacity":0.42});}
	}
}
//全銀幕設定
$window.resize(function(){lineupFullScreen_wiredf();});
function lineupFullScreen_wiredf(){
	$lineuplistgo_wiredf.css({"width":360 + 120 * ($lineuplist_wiredf.length-1) + 20 + "px"});
	$allwiredfdata.find('div#product_wiredf').css({"left":($window.width()-230)/2 - 290 + "px","top":$window.height()/2 - 180 + "px"});
	if($allwiredfdata.width()-230 > $lineuplistgo_wiredf.width()){
		$lineuplistgo_wiredf.css({"left": ($allwiredfdata.width()-230)/2 - $lineuplistgo_wiredf.width()/2 + "px"});
		$lineuplistnpbt_wiredf.hide();
	}else{
		if($lineuplistgo_wiredf.position().left>0){$lineuplistgo_wiredf.css("left","0px");}
		if($lineuplistgo_wiredf.position().left<-$lineuplistgo_wiredf.width()){$lineuplistgo_wiredf.css("left",-$lineuplistgo_wiredf.width() + "px");}
		$lineuplistnpbt_wiredf.show();
	}
	if($window.height()>$lineupnav_wiredf.height()){
		$lineupnav_wiredf.css("top",$window.height()/2 - $lineupnav_wiredf.height()/2 + "px");
		$allwiredfdata.find('div#prodNavPrevBt_wiredf, div#prodNavNextBt_wiredf').hide();
	}else{
		if($lineupnav_wiredf.position().top > 60){$lineupnav_wiredf.css("top","60px");}
		else if($lineupnav_wiredf.position().top < $window.height() - 60 - $lineupnav_wiredf.height()){$lineupnav_wiredf.css("top", $window.height() - 60 - $lineupnav_wiredf.height() + "px");}
		$allwiredfdata.find('div#prodNavPrevBt_wiredf, div#prodNavNextBt_wiredf').show();
	}
}

//改變網址
function lineupGoHash_wiredf(listNb, pdNb){
	// if(listNb == -2){window.location.hash = "wiredf/ambassador";}
	// else if(listNb == -1 || listNb == -2){window.location.hash = "wiredf/list";}

    if(listNb == -1 || listNb == -2){window.location.hash = "wiredf/list";}
	else{window.location.hash = "wiredf/" + $wiredfXML.find('productlistid').eq(listNb).text() + "/" + $wiredfXML.find('productlist').eq(listNb).find('productid').eq(pdNb).text();}
}

//創造左邊手錶選單按鈕
function creatLineupNavButton_wiredf(){
	$lineupnav_wiredf.html("");//清空
	for(var i=0; i<$wiredfXML.find('productlist').eq(lineUpListNumber_wiredf).find('product').length; i++){$lineupnav_wiredf.append('<div id="lineupbt_wiredf"><img src="' + $wiredfXML.find('productlist').eq(lineUpListNumber_wiredf).find('productbtphoto').eq(i).text() + '" /></div>');}
	$allwiredfdata.find('div#lineupbt_wiredf').click(function(){lineupGoHash_wiredf(lineUpListNumber_wiredf,$allwiredfdata.find('div#lineupbt_wiredf').index($(this)));});
}

//網址分析
function lineupAnalysis_wiredf(){
	// if(hashArray[1] == "ambassador"){
	// 	$lineupdata_wiredf.stop().animate({"opacity":0});
	// 	$lineuplistdata_wiredf.stop().animate({"opacity":0});
	// 	$lineuplistnav_wiredf.stop().animate({"opacity":0});
	// 	$wiredfambassador.stop().animate({"opacity":1});
	// 	$wiredfambassador.css({"z-index":10});
	// 	$lineupdata_wiredf.css({"z-index":8});
	// 	$lineuplistdata_wiredf.css({"z-index":9});
	// 	$lineuplistnav_wiredf.css({"z-index":7});
	// }
	if(hashArray[1] == "list" || hashArray[1] == "ambassador"){
		$lineupdata_wiredf.stop().animate({"opacity":0});
		$lineuplistdata_wiredf.stop().animate({"opacity":1});
		$lineuplistnav_wiredf.stop().animate({"opacity":0});
		$wiredfambassador.stop().animate({"opacity":0});
		$lineupdata_wiredf.css({"z-index":9});
		$lineuplistdata_wiredf.css({"z-index":10});
		$lineuplistnav_wiredf.css({"z-index":8});
		$wiredfambassador.css({"z-index":7});
	}else{
		for(var i = 0; i < $wiredfXML.find('productlistid').length; i++){
			if(hashArray[1] == $wiredfXML.find('productlistid').eq(i).text()){
				if(i != prevlineUpListNumber_wiredf){
					lineUpListNumber_wiredf = i;
					prevlineUpListNumber_wiredf = lineUpListNumber_wiredf;
					creatLineupNavButton_wiredf();
				}	
			}
		}
		$lineupdata_wiredf.stop().animate({"opacity":1});
		$lineuplistdata_wiredf.stop().animate({"opacity":0});
		$lineuplistnav_wiredf.stop().animate({"opacity":1});
		$wiredfambassador.stop().animate({"opacity":0});
		$lineupdata_wiredf.css({"z-index":9});
		$lineuplistdata_wiredf.css({"z-index":8});
		$lineuplistnav_wiredf.css({"z-index":10});
		$wiredfambassador.css({"z-index":7});
		totalproductNumber_wiredf = $wiredfXML.find('productlist').eq(lineUpListNumber_wiredf).find('productid').length;
		
		for(var i = 0; i < totalproductNumber_wiredf; i++){
			if($wiredfXML.find('productlist').eq(lineUpListNumber_wiredf).find('productid').eq(i).text() == hashArray[2]){
				productNumber_wiredf = i;
			}
		}
		
		if($wiredfXML.find('productlist').eq(lineUpListNumber_wiredf).find('new').eq(productNumber_wiredf).text() == 0){$new_wiredf.hide();}
		else if($wiredfXML.find('productlist').eq(lineUpListNumber_wiredf).find('new').eq(productNumber_wiredf).text() == 1){$new_wiredf.show();}
		
		if($wiredfXML.find('productlist').eq(lineUpListNumber_wiredf).find('solar').eq(productNumber_wiredf).text() == 0){$solar_wiredf.hide();}
		else if($wiredfXML.find('productlist').eq(lineUpListNumber_wiredf).find('solar').eq(productNumber_wiredf).text() == 1){$solar_wiredf.show();}
		
		
		$allwiredfdata.find('div#lineupname_wiredf').html($wiredfXML.find('productlistname').eq(lineUpListNumber_wiredf).text());
		$allwiredfdata.find('div#productname_wiredf').html($wiredfXML.find('productlist').eq(lineUpListNumber_wiredf).find('productname').eq(productNumber_wiredf).text());
		$allwiredfdata.find('div#productphoto_wiredf img').attr("src",$wiredfXML.find('productlist').eq(lineUpListNumber_wiredf).find('productphoto').eq(productNumber_wiredf).text());

		$allwiredfdata.find('div#productdescription_wiredf').html("");
		for(var i=0; i<$wiredfXML.find('productlist').eq(lineUpListNumber_wiredf).find('productword').eq(productNumber_wiredf).find('worddata').length; i++){
			
			$allwiredfdata.find('div#productdescription_wiredf').append('<div id="description_wiredf">' + $wiredfXML.find('productlist').eq(lineUpListNumber_wiredf).find('productword').eq(productNumber_wiredf).find('worddata').eq(i).text() + '</div>');
		
			if($wiredfXML.find('productlist').eq(lineUpListNumber_wiredf).find('productword').eq(productNumber_wiredf).find('worddata').eq(i).attr("name") == "red"){
				$('#productdescription_wiredf').children('div').eq(i).css("color","#AF0000");
			}

		}
		$lineupnav_wiredf.height(108*totalproductNumber_wiredf);
		lineupFullScreen_wiredf();
	}
	resetLineupListButton_wiredf();
}

