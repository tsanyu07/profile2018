<?php

	class Mysql {

		var $DBhost;
		var $DBname;
		var $DBuser;
		var $DBpassword;
		var $persistent;

		var $connectionID = null;
		var $queryID = null;
		var $resultSet = array();

		var $errorCode = 0;
		var $errorMsg = "";
		var $errorSql = "";

		// Mysql 類別 建構子
		function __construct($DBhost, $DBname, $DBuser, $DBpassword, $persistent = false)
		{
			$this->DBhost = $DBhost;
			$this->DBname = $DBname;
			$this->DBuser = $DBuser;
			$this->DBpassword = $DBpassword;
			$this->persistent = $persistent;
		}

		// 進行資料庫連線
		function connectDB()
		{
			// if ($this->persistent) {
			// 	$this->connectionID = @mysql_pconnect($this->DBhost, $this->DBuser, $this->DBpassword);
			// } else {
			// 	$this->connectionID = @mysql_connect($this->DBhost, $this->DBuser, $this->DBpassword);
			// }
			
			// if (!$this->connectionID) {
			// 	$this->halt("connectionID == false, connect failed");
			// }

			// if (!@mysql_select_db($this->DBname, $this->connectionID)) {
			// 	$this->errorCode = mysql_errno($this->connectionID);
			// 	$this->errorMsg = mysql_error($this->connectionID);
			// 	$this->halt("cannot select database <i>" .$this->dbname. "</i>");
			// }

			try {
			    $this->connectionID = new PDO("mysql:host=$this->DBhost;dbname=$this->DBname", $this->DBuser, $this->DBpassword);
			    // set the PDO error mode to exception
			    $this->connectionID->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			    // echo "Connected successfully"; 
			}
			catch(PDOException $e){
			    // echo "Connection failed: " . $e->getMessage();
			}

			// 變更語系設定值
			$this->executeSql( "SET NAMES utf8" );
			$this->executeSql( "SET CHARACTER_SET_CLIENT=utf8" );
			$this->executeSql( "SET CHARACTER_SET_RESULTS=utf8" );

		}

		// 結束資料庫連線
		function disconnectDB()
		{
			if ($this->connectionID != 0) {
				// @mysql_close($this->connectionID);
				$this->connectionID = null;
			}
		}

		// 進行查詢並傳回 query id
		function query($queryString)
		{
			// $this->queryID = @mysql_query($queryString, $this->connectionID);
			// $this->errorCode = mysql_errno( $this->connectionID );
			// $this->errorMsg  = mysql_error( $this->connectionID );
			// $this->errorSql  = $queryString;

			// if (!$this->queryID) {
			// 	$this->halt("Invalid SQL: " .$queryString);
			// }

			$this->queryID = @$this->connectionID->query($queryString);
			$this->errorCode = @$this->connectionID->errorCode();
			$this->errorMsg = @$this->connectionID->errorInfo();
			$this->errorSql = $queryString;

			if(!$this->queryID){
				$this->halt("Invalid SQL: " . $this->errorSql);
			}

			return $this->queryID;
		}

		// 提供給臨時查詢功能用的
		function _query($queryString)
		{
			// $_queryID = @mysql_query($queryString, $this->connectionID);
			// $this->errorCode = mysql_errno( $this->connectionID );
			// $this->errorMsg  = mysql_error( $this->connectionID );
			// $this->errorSql  = $queryString;

			// if( ! $_queryID ) {
			// 	$this->halt("Invalid SQL: " .$queryString);
			// }
			$_queryID = @$this->connectionID->query($queryString);
			$this->errorCode = @$this->connectionID->errorCode();
			$this->errorMsg = @$this->connectionID->errorInfo();
			$this->errorSql = $queryString;

			if( ! $_queryID ) {
				$this->halt("Invalid SQL: " . $this->errorSql);
			}

			return $_queryID;
		}

		// 執行一個 SQL
		function executeSql( $queryString )
		{
			// $execute_result  = @mysql_query($queryString, $this->connectionID);
			// $this->errorCode = mysql_errno( $this->connectionID );
			// $this->errorMsg  = mysql_error( $this->connectionID );
			// $this->errorSql  = $queryString;

			$execute_result  = @$this->connectionID->exec($queryString);
			$this->errorCode = @$this->connectionID->errorCode($execute_reslut);
			$this->errorMsg = @$this->connectionID->errorInfo($execute_result);
			$this->errorSql = $queryString;
			
			return $execute_result;
		}

		// 檢查 ID 是否存在 ( 傳回 true or false )
		function chkId( $table, $id_field, $id_value, $ext_condition = '' )
		{
			$id = $this->getOne(
                " select {$id_field} ".
                " from {$table} ".
                " where {$id_field} = '{$id_value}' " .
                // 附加額外過濾條件
                ( ( ! empty( $ext_condition ) )
                    ? "   and {$ext_condition} "
                    : "" ) );

			return ( $id != null );
		}

		// 取出一筆記錄, 若未提供 queryID 自動抓類別內預設查詢
		function fetchRecord($queryID = -1)
		{
			if( $queryID === -1 )
			{
				$queryID = $this->queryID;
			}
      
		    // $this->resultSet = @mysql_fetch_assoc( $queryID );
		    // $this->errorCode = mysql_errno( $this->connectionID );
		    // $this->errorMsg  = mysql_error( $this->connectionID );
      		
      		$queryID->setFetchMode(PDO::FETCH_ASSOC);
		    $this->resultSet = @$queryID->fetch();
		    $this->errorCode = @$this->connectionID->errorCode();
		    $this->errorMsg = @$this->connectionID->errorInfo();


			return $this->resultSet;
		}

		// 進行一個查詢, 並取出全部資料, 以 array 型態傳回, 並釋放 query id
		function &getAll($queryString)
		{
			$queryID = $this->_query($queryString);
			
			$resultArray = array();
			while ($resultSet = $this->fetchRecord($queryID)) {
				$resultArray[] = $resultSet;
			}
			
			$this->freeResult( $queryID );
			return $resultArray;
		}

		// 進行一個查詢, 只取一筆資料, 並釋放 query id
		function &getRow($queryString)
		{
			$queryID = $this->_query($queryString);
			$results = $this->fetchRecord($queryID);
			if (!is_array($results)) {
				$results = null;
			}
			$this->freeResult($queryID);

			return $results;
		}

		// 進行一個查詢, 只取出第一個欄位, 並釋放 query id
		function &getOne($queryString)
		{
			$queryID = $this->_query($queryString);
			// $result = @mysql_fetch_row($queryID);
			// $this->errorCode = mysql_errno( $this->connectionID );
			// $this->errorMsg = mysql_error( $this->connectionID );

			$result = $this->fetchRecord($queryID);
			$this->errorCode = @$this->connectionID->errorCode();
			$this->errorMsg = @$this->connectionID->errorInfo();

			if (!is_array($result)) {
				$result = null;
			} else {
                foreach( $result as $value )
                {
                    $result = $value;
                    break; // 取出第一個值就停止
                }

			}
			$this->freeResult($queryID);

			return $result;
		}

		// 傳回上一個動作的動作筆數（受影響行數）
		function affectedRows($connID = null)
		{
			// if ($connID === null) {
			// 	return @mysql_affected_rows($this->connectionID);
			// } else {
			// 	return @mysql_affected_rows($connID);
			// }

			if($conniD == null){
				return @$this->connectionID->rowCount();
			}else{
				return @$connID->rowCount();
			}
		}

		// 傳回上一個查詢資料筆數
		function numRows( $queryID = -1 )
		{
			if ($queryID == -1)
			{
				$queryID = $this->queryID;
			}
			// return @mysql_num_rows( $queryID );
			return @$queryID->fetchColumn();

		}

		//傳回總資料數
		function totaldata( $queryString ){
			$sth = $this->connectionID->prepare($queryString);
			$sth ->execute();
			return $sth->fetchColumn();
		}

		function dataSeek( $row_number, $queryID = -1 )
		{
			if ($queryID == -1)
			{
				$queryID = $this->queryID;
			}
			return @mysql_data_seek( $queryID, $row_number );
		}

		// 傳回 AUTO_INCREMENT ID
		function getLastID()
		{
			// return @mysql_insert_id($this->connectionID);
			return @$this->connectionID->lastInsertId();
		}

		// 釋放 query id
		function freeResult($queryID = -1)
		{
			if ($queryID === -1)
			{
				$queryID = $this->queryID;
			}
			// return @mysql_free_result( $queryID );
			return @$queryID->closeCursor();
		}

		// 新增
		function create($table, $data)
		{

			if ( $table != "" && is_Array($data) )
			{

				$queryString = "INSERT INTO `".$table."` ( ";
				
				foreach( $data as $key => $value ){

					$queryString .= "`".$key."`,";

				}

				$queryString = substr($queryString,0,-1);

				$queryString .= " ) VALUES ( ";

				foreach( $data as $key => $value ){

					$queryString .= "'".$value."',";

				}

				$queryString = substr($queryString,0,-1);

				$queryString .= ");";

				return $this->getLastID( $this->_query( $queryString ) );
				// $this->connectionID->exec($queryString);

			}else{

				echo "Input Data Error\n";
				die ("Session halted.");

			}

		}

		// 更新
		function update($table, $data, $mkey, $id)
		{

			if ( $table != "" && is_Array($data) )
			{

				$queryString = "UPDATE `".$table."` SET ";
				
				foreach( $data as $key => $value ){

					$queryString .= "`".$key."` = '".$value."',";

				}

				$queryString = substr($queryString,0,-1);

				$queryString .= " WHERE `".$mkey."` = '".$id."'";

				$this->_query( $queryString );

			}else{

				echo "Input Data Error\n";
				die ("Session halted.");

			}

		}

		// 傳回錯誤訊息
		function errorMessage( $msg = "" )
		{
			return
                ( ( $msg != "" )
                    ? "<b>Database error:</b> $msg<br>\n"
                    : "" ).
			    "<b>Mysql error</b>: $this->errorCode ($this->errorMsg)<br>\nSQL: {$this->errorSql} <br>\n";
		}

		// 印出錯誤並中止執行
		function halt( $msg = "" )
		{
			echo "<b>Database error:</b> $msg<br>\n";
			echo "<b>Mysql error</b>: {$this->errorCode} ({$this->errorMsg})<br>\n";
			echo "<b>SQL</b>: {$this->errorSql}<br>\n";
			die ("Session halted.");
		}

	}

?>
