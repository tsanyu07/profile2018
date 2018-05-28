<?php 

	/////基本設定///////////////////////////////////////////////////////////////////////////////////////////////

	//網頁編碼
	header("Cache-control: private");
	header('Content-type: text/html; charset=utf-8');

	//時區
	if (version_compare( phpversion() , '5.1.0', '>=')){
		date_default_timezone_set('Asia/Taipei'); //PHP5
	} else {
		putenv("TZ=Asia/Taipei"); //PHP4
	}

	//SESSION
	session_start();

	//Path
	define('Path_Web'    , 'D:\\wamp\\www\\pettrust\\');
	define('Path_Admin'  , 'D:\\wamp\\www\\pettrust\\admin\\');
	define('Path_Upload' , 'D:\\wamp\\www\\pettrust\\upload\\');
	define('Url_Web'     , 'http://localhost/pettrust/');
	define('Url_Admin'   , 'http://localhost/pettrust/admin/');
	define('Url_Upload'  , 'http://localhost/pettrust/upload/');

	//Define DIRECTORY_SEPARATOR
	if (!defined('DS')) {
    define('DS', DIRECTORY_SEPARATOR);
	}


	/////函式庫///////////////////////////////////////////////////////////////////////////////////////////////

	//Class
	include_once('include' . DS . 'library'  . DS . 'mysql.php');                   //MySQL
	include_once('include' . DS . 'library'  . DS . 'function.php');                //Function
	include_once('include' . DS . 'library'  . DS . 'page.php');                    //Page
	include_once('include' . DS . 'library'  . DS . 'sms.php');                     //SMS
	include_once('include' . DS . 'phpexcel' . DS . 'PHPExcel.php');                //PHPExcel


	/////資料庫設定///////////////////////////////////////////////////////////////////////////////////////////////

	//資料庫設定
	$mysql_server   = "localhost";
	$mysql_user     = "root";
	$mysql_password = "";
	$mysql_table    = "pettrust";

	//連結資料庫
	$db = new Mysql( $mysql_server,$mysql_table,$mysql_user,$mysql_password,true );
	$db->connectDB();

  define('DBTable_User'               , 'user');
  define('DBTable_Product'            , 'product');
  define('DBTable_Product_Class'      , 'product_class');
  define('DBTable_Product_Download'   , 'product_download');
  define('DBTable_Banner'             , 'banner');
  define('DBTable_Technology'         , 'technology');


	/////參數設定///////////////////////////////////////////////////////////////////////////////////////////////

	//網站資料
	$Server_Name      = "Pettrust";
	$Server_Title     = $Server_Name." 管理後台";
	$version          = time();

	//檔案下載分類
	$DownloadType[1]['en'] = "User manual";
	$DownloadType[1]['tw'] = "User manual";
	$DownloadType[1]['jp'] = "User manual";
	$DownloadType[2]['en'] = "Quick Guide";
	$DownloadType[2]['tw'] = "Quick Guide";
	$DownloadType[2]['jp'] = "Quick Guide";
	$DownloadType[3]['en'] = "Software";
	$DownloadType[3]['tw'] = "Software";
	$DownloadType[3]['jp'] = "Software";

?>