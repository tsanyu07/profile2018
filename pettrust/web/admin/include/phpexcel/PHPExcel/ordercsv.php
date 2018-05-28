<?php
  session_start();
	define('Usable', true);

	//Define DIRECTORY_SEPARATOR
	if (!defined('DS')) {
    define('DS', DIRECTORY_SEPARATOR);
	}

	include_once('include' . DS . 'init.php');

/**
 * PHPExcel
 *
 * Copyright (C) 2006 - 2010 PHPExcel
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
 *
 * @category   PHPExcel
 * @package    PHPExcel
 * @copyright  Copyright (c) 2006 - 2010 PHPExcel (http://www.codeplex.com/PHPExcel)
 * @license    http://www.gnu.org/licenses/old-licenses/lgpl-2.1.txt	LGPL
 * @version    1.7.3c, 2010-06-01
 */

/** Error reporting */
error_reporting(E_ALL);

/** PHPExcel */
require_once('include/phpexcel/PHPExcel.php');
require_once('include/phpExcel/Writer/CSV.php');

// Create new PHPExcel object
// $objPHPExcel = new PHPExcel();

$objPHPExcel = new PHPExcel_Writer_CSV($objPHPExcel);
    $objPHPExcel->setDelimiter(';');
    $objPHPExcel->setEnclosure('');
    $objPHPExcel->setLineEnding("\r\n");
    $objPHPExcel->setSheetIndex(0);


// Set properties
$objPHPExcel->getProperties()->setCreator("Simon Pao")
							 ->setLastModifiedBy("Autobuy")
							 ->setTitle("Order List")
							 ->setSubject("Order List")
							 ->setDescription("Import /Export EXCEL file")
							 ->setKeywords("office 2007 openxml php")
							 ->setCategory("Autobuy explot file");

// Miscellaneous glyphs, UTF-8
//$sqlstr = "Select * from ordr";
//$Orderinfo = $g_db->getAll( $sqlstr );
  //設定 where 條件
  $wherestr = "";
  if ($_SESSION["fromdate"]!="") { $wherestr .= " and n.bdate >= '".$_SESSION["fromdate"]."'"; }
  if ($_SESSION["todate"]!="") { $wherestr .= " and n.bdate <= '".$_SESSION["todate"]."'"; }
  if ($_SESSION["orderno"]!="") { $wherestr .= " and n.order_no like '%".$_SESSION["orderno"]."%'"; }
  if ($_SESSION["prodname"]!="") { $wherestr .= " and m.prodname like '%".$_SESSION["prodname"]."%'"; }
  if ($_SESSION["receiver"]!="") { $wherestr .= " and n.receiver_name like '%".$_SESSION["receiver"]."%'"; }
  if ($_SESSION["ship_no"]!="") { $wherestr .= " and m.ship_no like '%".$_SESSION["ship_no"]."%'"; }

  // $s_id="1";
  $s_id = $_SESSION["SCMID"];

  $sqlstr = "Select m.*,n.* FROM ".orderlist." m,".order." n WHERE m.order_no=n.order_no and n.s_id = $s_id {$wherestr}
                     order by bdate desc";
  $Orderinfo = $g_db->getAll( $sqlstr );
	
	//print_r($Orderinfo);

//合併
 $objPHPExcel->getActiveSheet()->mergeCells('A1:R1');
 $objPHPExcel->getActiveSheet()->mergeCells('A2:R2');
 $objPHPExcel->getActiveSheet()->mergeCells('A3:R3');
 $objPHPExcel->getActiveSheet()->mergeCells('A4:R4');
 $objPHPExcel->getActiveSheet()->mergeCells('A5:R5');

//設定欄位寬度
$objPHPExcel->getActiveSheet()->getColumnDimension('A')->setWidth(13);
$objPHPExcel->getActiveSheet()->getColumnDimension('B')->setWidth(10.5);
$objPHPExcel->getActiveSheet()->getColumnDimension('C')->setWidth(11);
$objPHPExcel->getActiveSheet()->getColumnDimension('E')->setWidth(36);
$objPHPExcel->getActiveSheet()->getColumnDimension('F')->setWidth(13);
$objPHPExcel->getActiveSheet()->getColumnDimension('G')->setWidth(13);
$objPHPExcel->getActiveSheet()->getColumnDimension('H')->setWidth(90);//商品名稱
$objPHPExcel->getActiveSheet()->getColumnDimension('I')->setWidth(17);

$objPHPExcel->getActiveSheet()->getColumnDimension('L')->setWidth(11);
$objPHPExcel->getActiveSheet()->getColumnDimension('M')->setWidth(11);
$objPHPExcel->getActiveSheet()->getColumnDimension('N')->setWidth(11);

$objPHPExcel->getActiveSheet()->getColumnDimension('S')->setWidth(13);
$objPHPExcel->getActiveSheet()->getColumnDimension('T')->setWidth(18);
$objPHPExcel->getActiveSheet()->getColumnDimension('U')->setWidth(18);


//寫入欄位
$objPHPExcel->setActiveSheetIndex(0)
						->setCellValue("A1","發票抬頭: xxxx資訊股份有限公司         統一編號:16606102")
						->setCellValue("A2","AUTOBUY 轉單明細表")
						->setCellValue("A3","廠商 :歆宇科技股份有限公司(25707)         廠商聯絡人 : xxx")
						->setCellValue("A4","您匯出的訂單為2010/08/05的轉單訂單明細")

						->setCellValue("A7","訂單編號")
						->setCellValue("B7","訂單序號")
						->setCellValue("C7","收貨人")
						->setCellValue("D7","郵遞區號")
						->setCellValue("E7","收貨地址")
						->setCellValue("F7","收貨人電話")
						->setCellValue("G7","收貨人手機")
						->setCellValue("H7","商品名稱")
						->setCellValue("I7","商品編號")
						->setCellValue("J7","商品規格")
						->setCellValue("K7","規格編號")
						->setCellValue("L7","單價(含稅)")
						->setCellValue("M7","數量")
						->setCellValue("N7","小計(含稅)")
						->setCellValue("O7","退貨狀態")
						->setCellValue("P7","退貨申請日")
						->setCellValue("Q7","退貨商品狀態")
						->setCellValue("R7","出貨單號")
						->setCellValue("S7","物流商")
						->setCellValue("T7","出貨日期")
						->setCellValue("U7","轉單日期")
						->setCellValue("V7","預購出貨日")
						->setCellValue("W7","單號確認日")
						->setCellValue("X7","客戶留言")
;

  for($i=0; $i < sizeof($Orderinfo); $i++) {
		$objPHPExcel->setActiveSheetIndex(0)
		  //A8: 訂單編號
		  ->setCellValue("A".($i+8), $Orderinfo[$i]["order_no"])
		  //B8: 訂單序號
		  ->setCellValue("B".($i+8), $Orderinfo[$i]["serno"])
		  //C8: 收貨人
		  ->setCellValue("C".($i+8), $Orderinfo[$i]["receiver_name"])
		  //D8:郵遞區號
		  ->setCellValue("D".($i+8), $Orderinfo[$i]["buyer_zipcode"])
		  //E8:收貨地址
		  ->setCellValue("E".($i+8), $Orderinfo[$i]["buyer_addr"])
		  //F8:收貨人電話
		  ->setCellValue("F".($i+8), $Orderinfo[$i]["buyer_phone"])
		  //G8:收貨人手機
		  ->setCellValue("G".($i+8), "\t ".$Orderinfo[$i]["buyer_mobile"])
		  //H8:商品名稱
		  ->setCellValue("H".($i+8), $Orderinfo[$i]["prodname"])
		  //I8:商品編號
		  ->setCellValue("I".($i+8), $Orderinfo[$i]["prod_id"])	  
		  //J8:商品規格
		  //->setCellValue("J".($i+8), $Orderinfo[$i]["prod_id"])	  		  
		  //K8:規格編號
		  //->setCellValue("K".($i+8), $Orderinfo[$i]["prod_id"])	  			
		  //L8:單價(含稅)
		  ->setCellValue("L".($i+8), $Orderinfo[$i]["uni_sale_price"])	 
		  //M8:數量
		  ->setCellValue("M".($i+8), $Orderinfo[$i]["qty"])	 		   	
			//N8:小計(含稅)
			->setCellValue("N".($i+8), $Orderinfo[$i]["sprice"])					
			//Q8:退貨狀態
			//->setCellValue("O".($i+8), $Orderinfo[$i][""])	
			//R8:退貨申請日
			//->setCellValue("P".($i+8), $Orderinfo[$i]["sprice"])	
			//S8:退貨商品狀態
			->setCellValue("Q".($i+8), $Orderinfo[$i]["return_status"])	
			//T8:出貨單號
			//->setCellValue("R".($i+8), $Orderinfo[$i]["sprice"])
			//U8:物流商
			->setCellValue("S".($i+8), $Orderinfo[$i]["ship_agent"])
			//V8:出貨日期
			->setCellValue("T".($i+8), $Orderinfo[$i]["report_final_date"])
			//W8:轉單日期
			->setCellValue("U".($i+8), $Orderinfo[$i]["bdate"])
			//X8:預購出貨日
			//->setCellValue("V".($i+8), $Orderinfo[$i]["sprice"])
			//Y8:單號確認日
			//->setCellValue("W".($i+8), $Orderinfo[$i]["sprice"])
			//Z8:客戶留言
			->setCellValue("X".($i+8), $Orderinfo[$i]["custom_note"])
		;
	}


// Rename sheet
$objPHPExcel->getActiveSheet()->setTitle('Simple');


// Set active sheet index to the first sheet, so Excel opens this as the first sheet
$objPHPExcel->setActiveSheetIndex(0);


// Redirect output to a client’s web browser (Excel5)
header('Content-Type: application/vnd.ms-excel');
header('Content-Disposition: attachment;filename="shipnoinput.csv"');
header('Cache-Control: max-age=0');

// $objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel5');
// $objWriter->save('php://output');

// $objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'CSV'); 
// $objWriter->save('php://output');
$objWriter->save(str_replace('.php', '.csv', __FILE__));

exit;
