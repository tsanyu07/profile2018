// JavaScript Document
var $storeXML;
var storeGoX = 0;
var storeDataGoYArray = [ 0, 0, 0, 0 ];
var storeOverNumber;
var prevStoreOverNumber = -1;
var $storezone 			= $body.find('div#storezone');
var $storeaddresslist 	= $body.find('div#storeaddresslist');
var $storenpbt 			= $body.find('div#storenpbt');
var $storeaddresslistgo = $body.find('div#storeaddresslistgo');
var $storedatago 		= $body.find('div#storedatago');
var $selectaddressgo 	= $body.find('select#addressgo');

(function storeinit(){
	//下載店點資料
	$.ajax({
		type:"GET",
		url:"xml/storedata.xml?ran=" + Math.random(),
		dataType:"xml",
		start:function(){$loading.show();},
		success:function(xml){
			$loading.hide();
			$storeXML = $(xml);
			creatStoreData();
		}
	});
	$body.find('div#allstoredata').setFull("ALL",210,0);
	$storezone.setFull("HEIGHT",0,0);
	$body.find('div#storewhitebg').setFull("HEIGHT",0,0);
	$body.find('div#storewhitebg img').setFull("HEIGHT",0,0);
	$storeaddresslist.setFull("HEIGHT",0,180);
	$storenpbt.setAlign("CENTER",0,-72);
	$storezone.hover(
		function(){
			if(prevStoreOverNumber!=$storezone.index($(this))){
				storeOverNumber = $storezone.index($(this));
				prevStoreOverNumber = storeOverNumber;
				setOverZone();
			}
		},
		function(){}
	);
	
	$body.find('div#updownbutton').each(function(i){
		$(this).find('div#downbutton').click(function(){
			storeDataGoYArray[i] = storeDataGoYArray[i] - ($window.height()-180)/2;
			if(storeDataGoYArray[i] < $window.height() - 180 - $storeaddresslistgo.eq(i).height() - 60){ storeDataGoYArray[i] = $window.height() - 180 - $storeaddresslistgo.eq(i).height() - 60; }
			$storeaddresslistgo.eq(i).stop().animate({"top":storeDataGoYArray[i]});
		});
		$(this).find('div#upbutton').click(function(){
			storeDataGoYArray[i] = storeDataGoYArray[i] + ($window.height()-180)/2;
			if(storeDataGoYArray[i] > 0){ storeDataGoYArray[i] = 0; }
			$storeaddresslistgo.eq(i).stop().animate({"top":storeDataGoYArray[i]});
		});
	});    
	
	//滾輪設定
	$storezone.each(function(i){
		$storezone.eq(i).mousewheel(function(objEvent, intDelta){
			if(hashArray[0] == "#stores"){
				if( $storeaddresslist.eq(i).height() < $storeaddresslistgo.eq(i).height() ){
					storeDataGoYArray[i] = storeDataGoYArray[i] + intDelta*66;
					if( storeDataGoYArray[i] < $window.height() - 180 - $storeaddresslistgo.eq(i).height() - 60 ){
						storeDataGoYArray[i] = $window.height() - 180 - $storeaddresslistgo.eq(i).height() - 60;
					}else if( storeDataGoYArray[i] > 0 ){
						storeDataGoYArray[i] = 0;
					}
					$storeaddresslistgo.eq(i).stop().animate({"top":storeDataGoYArray[i]});
				}
			}
		});
	});
	
	$body.find('div#storenpbt img#storenextbt').click(function(){
		storeGoX = storeGoX - ($window.width()-210)/2;
		if(storeGoX < ($window.width() - 210) - 1260){storeGoX = ($window.width() - 210) - 1260;}
		$storedatago.stop().animate({"left":storeGoX});
	});
	$body.find('div#storenpbt img#storeprevbt').click(function(){
		storeGoX = storeGoX + ($window.width()-210)/2;
		if(storeGoX > 0){storeGoX = 0;}
		$storedatago.stop().animate({"left":storeGoX});
	});
	storeFullScreen();
})();

function setOverZone(){
	for(var i=0; i<4; i++){
		if(i == storeOverNumber){
			$storezone.eq(i).stop().animate({"opacity":1});
			$storezone.eq(i).find('div#storewhitebg').stop().animate({"opacity":1});
			if($storezone.eq(i).find('div#storeaddresslist').height() > $storezone.eq(i).find('div#storeaddresslistgo').height()){
				$storezone.eq(i).find('div#updownbutton').hide();
				$storezone.eq(i).find('div#storeaddresslistgo').draggable("disable");
			}else{
				$storezone.eq(i).find('div#updownbutton').show();
				$storezone.eq(i).find('div#storeaddresslistgo').draggable({ axis: "y", stop:function(){
					if($(this).position().top > 0){
						$(this).stop().animate({"top":"0px"});
						storeDataGoYArray[storeOverNumber] = 0;
					}else{
						storeDataGoYArray[storeOverNumber] = $(this).position().top;
					}
				} });
			}
		}else{
			$storezone.eq(i).stop().animate({"opacity":0.48});
			$storezone.eq(i).find('div#storewhitebg').stop().animate({"opacity":0});
			$storezone.eq(i).find('div#updownbutton').hide();
		}
	}
}

//創造店點資料
function creatStoreData(){
	var storedata1 = '<div id="storedata"><div id="storeline"></div><div id="storename">';
	var storedata2 = '</div><div id="addressnumber">';
	var storedata3 = '</div><div id="addressdata">';
	var storedata4 = '</div></div>';
	for(var i = 0; i < 4; i++){//北中南東
		$storeaddresslistgo.eq(i).css({"height":$storeXML.find('storezonedata').eq(i).find('storename').length*90 + "px"});//資料總高度
		var zoneNumber = $storeXML.find('storezonedata').eq(i).find('storesubzonename').length;//北中南東 - 區數量
		for(var j = 0; j < zoneNumber; j++){
			$storeaddresslistgo.eq(i).append('<div id="storezonedata"></div>');//新增區域資料
			//下拉式選單設定
			$selectaddressgo.eq(i).append('<option value="' + j + '">' + $storeXML.find('storezonedata').eq(i).find('storesubzonename').eq(j).text() + '</option>');
			//區域資料設定
			var storeNumber = $storeXML.find('storezonedata').eq(i).find('storesubzonedata').eq(j).find('storedata').length;
			for(var k = 0; k < storeNumber; k++){
				$storeaddresslistgo.eq(i).find('div#storezonedata').eq(j).append( storedata1 + $storeXML.find('storezonedata').eq(i).find('storesubzonedata').eq(j).find('storename').eq(k).text() + storedata2 + $storeXML.find('storezonedata').eq(i).find('storesubzonedata').eq(j).find('storezonenumber').eq(k).text() + storedata3 + $storeXML.find('storezonedata').eq(i).find('storesubzonedata').eq(j).find('storeaddress').eq(k).text() + storedata4 );
			}
		}
	}
}

//全銀幕設定
$window.resize(function(){storeFullScreen();});
function storeFullScreen(){
	if($window.width()-210 > 1260){
		var storeX = (($window.width()-210)/2 - 630) + "px";
		$storedatago.css({"left":storeX});
		$storenpbt.hide();
	}else{
		$storenpbt.show();
	}
}

function goPositionY(num){
	if($selectaddressgo.eq(num).val() == "-1"){
		
	}else{
		var selectNumber = $selectaddressgo.eq(num).val();
		storeDataGoYArray[num] = -$storeaddresslistgo.eq(num).find('div#storezonedata').eq(selectNumber).position().top;
		$storeaddresslistgo.eq(num).stop().animate({"top": storeDataGoYArray[num]});
	}
	
}