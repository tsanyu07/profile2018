<?php

	function formInputText($_id = "", $_name = "", $_value = "", $_size = 20){

		$input_str = "<input type=\"text\" id=\"".$_id."\" name=\"".$_name."\" size=\"".$_size."\" value=\"".htmlspecialchars($_value)."\" />";

		return $input_str;

	}

	function formInputPassword($_id = "", $_name = "", $_value = "", $_size = 20){

		$input_str = "<input type=\"password\" id=\"".$_id."\" name=\"".$_name."\" size=\"".$_size."\" value=\"".htmlspecialchars($_value)."\" />";

		return $input_str;

	}

	function formInputHidden($_id = "", $_name = "", $_value = ""){

		$input_str = "<input type=\"hidden\" id=\"".$_id."\" name=\"".$_name."\" value=\"".htmlspecialchars($_value)."\" />";

		return $input_str;

	}

	function formInputCheckbox($_id = "", $_name = "", $_value = "", $_checked = false){

		$input_str = "<input type=\"checkbox\" id=\"".$_id."\" name=\"".$_name."\" value=\"".htmlspecialchars($_value)."\" ".($_checked ? "checked=\"checked\"" : "")." />";

		return $input_str;

	}

	function formInputRadio($_id = "", $_name = "", $_data = "", $_checked = ""){

		$input_str = "";

		for($i = 0; $i < sizeof($_data); $i++)
			$input_str .= "<input type=\"radio\" id=\"".$_id."_".$_data[$i]['value']."\" name=\"".$_name."\" value=\"".htmlspecialchars($_data[$i]['value'])."\"".($_checked == $_data[$i]['value'] ? "checked=\"checked\"" : "")." />".$_data[$i]['name']." ";

		return $input_str;

	}

	function formInputSelect($_id = "", $_name = "", $_data = "", $_selected = "", $_firstoption = "請選擇"){

		$input_str = "<select id=\"".$_id."\" name=\"".$_name."\">";
		
		if($_firstoption != "")
			$input_str .= "<option value=\"\"".($_selected == "" ? "selected=\"selected\"" : "").">請選擇</option>";

		for($i = 0; $i < sizeof($_data); $i++)
			$input_str .= "<option value=\"".htmlspecialchars($_data[$i]['value'])."\"".($_selected == $_data[$i]['value'] ? "selected=\"selected\"" : "").">".$_data[$i]['name']."</option>";

		$input_str .= "</select>";

		return $input_str;

	}

	function formInputTextarea($_id = "", $_name = "", $_value = "", $_rows = 5, $_cols = 50){

		$input_str = "<textarea id=\"".$_id."\" name=\"".$_name."\" rows=\"".$_rows."\" cols=\"".$_cols."\">".htmlspecialchars($_value)."</textarea>";

		return $input_str;

	}

	function formInputFile($_id = "", $_name = ""){

		$input_str = "<input type=\"file\" id=\"".$_id."\" name=\"".$_name."\" />";

		return $input_str;

	}

	function formInputCkeditor($_id = "", $_name = "", $_value = "", $_width = "", $_height = ""){

		$input_str = "<textarea id=\"".$_id."\" name=\"".$_name."\">".stripcslashes(htmlspecialchars($_value))."</textarea>";
		$input_str .= "<script type=\"text/javascript\">";
		$input_str .= "CKEDITOR.replace('".$_id."', {";
		if($_width != "")
			$input_str .= "width:'".$_width."',";
		if($_height != "")
			$input_str .= "height:'".$_height."',";
		$input_str .= "	filebrowserBrowseUrl: '../include/ckfinder/ckfinder.html',";
		$input_str .= "	filebrowserImageBrowseUrl: '../include/ckfinder/ckfinder.html?type=Images',";
		$input_str .= "	filebrowserFlashBrowseUrl: '../include/ckfinder/ckfinder.html?type=Flash',";
		$input_str .= "	filebrowserUploadUrl: '../include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',";
		$input_str .= "	filebrowserImageUploadUrl: '../include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',";
		$input_str .= "	filebrowserFlashUploadUrl: '../include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash'";
		$input_str .= "});";
		$input_str .= "</script>";

		return $input_str;

	}

	function makeToken(){
		$token = md5(date("Y-m-d H:i:s"));
		$_SESSION['token'] = $token;
		return $token;
	}

?>
