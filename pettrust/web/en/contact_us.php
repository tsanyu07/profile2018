<?php include_once('../_config.php'); ?>
<?php $ThisUrl = basename(__FILE__); ?>
<!DOCTYPE html>
<html>
<head>
<title>Pettrust</title>
<?php include_once('_meta.php'); ?>
<link rel="stylesheet" href="theme/tw/css/reset.css">
<link rel="stylesheet" href="theme/tw/css/css.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
<script type="text/javascript" src="js/jquery-1.8.3.min.js"></script>
<script src="js/slider/slider.js"></script>
<script type="text/javascript" src="js/script.js"></script>
<script type='text/javascript' src='js/jquery-imgLiquid.min.js'></script>
<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>


<script type="text/javascript">
$(function(){

    // 自動裁圖
    $('.imgLiquid').imgLiquid({
        fill: true, horizontalAlign: "center", verticalAlign: "center"
    });
     $('.imgLiquid2').imgLiquid({
        fill: false, horizontalAlign: "center", verticalAlign: "center"
    });

	
});
</script>



</head>
<body>
<?php include_once('_header.php'); ?>




	<div class="main">
        <div class="bgbanner bgcontact">
            <div class="block">
            <h2>Contact Us</h2>
            </div>
        </div>
	


	<div class="con con2">
		<div class="block">
			<div class="world_map">
				<div><p>Serving with global partners.</p></div>
				<div><img src="theme/tw/images/map.png"></div>
			</div>

			<div class="contact_info">
			    <div class="mymap" id="map">
			         <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.1836493136716!2d121.28678494315135!3d25.06176387488532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a06dab33d481%3A0x48845558155044f4!2zMzM45qGD5ZyS5biC6JiG56u55Y2A5Y2X5bGx6Lev5LqM5q61NeiZnw!5e0!3m2!1szh-TW!2stw!4v1503470178642" width="490" height="350" frameborder="0" style="border:0" allowfullscreen></iframe> -->
			    </div>
			    <div class="myinfo">
			    	<h3>BioCare Corporation</h3>
			    	<ul>
                        <li><i class="fa fa-map-marker"></i>
                            <span> Address</span>
                            <p>4F, No. 12, Ln. 5, Sec. 2, Nanshan Rd., Luzhu Dist., Taoyuan City, 33852, Taiwan</p></li>
                        <li><i class="fa fa-phone"></i>
                            <span> Tel</span>
                            <p>886-3-2616678</p></li>
                        <li><i class="fa fa-fax"></i>
                            <span> Fax</span>
                            <p>886-3-2616679</p></li>
                        <li><i class="fa fa-envelope"></i>
                            <span>E-mail</span>
                            <p>sales@biocare.com.tw</p></li>
                    </ul>
			    </div>
				<div>
					
				</div>
			</div>

		</div>

    </div>

    </div>


<?php include_once('_footer.php'); ?>
<script>
/*lat: 25.0614270, lng: 121.2876040*/
function initMap() {
  var myLatLng = {lat: 25.0614270, lng: 121.2876040};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: myLatLng

  });

  var image = 'theme/tw/images/map_pin.png';
  var myMarker = new google.maps.Marker({
    position: {lat: 25.0614270, lng: 121.2876040},
    map: map,
    icon: image,
    title: '喬聯科技股份有限公司',
  });
}

</script>
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCLadwVWblCX9_49oArArQoMbkjiDA44jg&language=zh-TW&callback=initMap"></script>
</body>