<?php

if(!isset($_SESSION['UserID']) || $_SESSION['UserID'] == ""){
	header("location:index.php");
	exit;
}

// destroy($_SESSION);
// header("location:login.php");
?>