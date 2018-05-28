<?php

	header("Content-Type:text/html;charset=utf-8");
	
	include_once('../lib/phpmailer/class.phpmailer.php'); //phpmailer
	
	extract($_POST);

	$mail_content = "";
	$mail_content .= "姓名：".$name."<br><br>";
	$mail_content .= "電子郵件：".$email."<br><br>";
	$mail_content .= "聯絡電話：".$phone."<br><br>";
	$mail_content .= "主旨：".$subject."<br><br>";
	$mail_content .= "信件內容：".$content."<br><br>";

	$mailer = new PHPMailer();

	// $mailer->CharSet    = 'utf-8';
	// $mailer->SMTPAuth   = true; 
	// $mailer->IsSMTP();
	// $mailer->From       = 'rick@mi-go.com.tw';  
	// $mailer->FromName   = 'service';
	// $mailer->Host       = "ssl://smtp.gmail.com:465";
	// $mailer->Username   = "rick@mi-go.com.tw";  
	// $mailer->Password   = "29206636";
	
	$mailer->From     = 'Johnnysu73102@yahoo.com.tw';
	$mailer->FromName = '祐全-官網聯絡我們';

	$mailer->CharSet = "utf-8";                      
	$mailer->Encoding = "base64";

	$mailer->MsgHTML($mail_content);    
	$mailer->Subject = '祐全-官網聯絡我們';
	// $mailer->AddAddress('steven@mishop.com.tw');
	// $mailer->AddAddress('tsanyu@mishop.com.tw'); 
	$mailer->AddAddress('Johnnysu73102@yahoo.com.tw');
	$mailer->IsHTML(true);

	
	if($mailer->Send())
	{
		echo json_encode(array(
			'bool' => true,
			'msg' => '寄送成功!'
		));
	}
	else
	{
		echo json_encode(array(
			'bool' => false,
			'msg' => '寄送失敗!'
		));
	}

?>	

