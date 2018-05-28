<?php

require_once("_inc.php");

extract($_POST);

$url = "admin_index.php";

$eamil = $email;
$passowrd = $password;

if($token != "" && $_SESSION['token'] != "" && $token == $_SESSION['token']){ //TOKEN

	if($email != "" && $password != ""){ //email password

		$sqlstr   = "SELECT * FROM `user` WHERE `account` = '".$email."' AND `passwd` = '".$password."' ";
		$UserData = $db->getRow($sqlstr);

		if(count($UserData) > 0 && $UserData['del'] ==0){ //比對成功

			$_SESSION['UserID'] = $UserData['id'];
			$_SESSION['UserName'] = $UserData['name'];
			$url = "admin_index.php";

		}

	}

}

$_SESSION['token'] = "";

header("location:".$url);

?>