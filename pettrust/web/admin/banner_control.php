<?php
    $FileTitle = substr(basename(__FILE__), 0, strpos(basename(__FILE__), '_'));
    require_once($FileTitle."_config.php");

		//修改
    if ($_GET['action'] == "update") {

        $sqlstr = "SELECT * FROM `".$Config_Table_Main."` WHERE `del` != '1' AND `id` = '".$_POST['id']."'";
        if ($db->totaldata($sqlstr) > 0) {

            $QueryRow = $db->getRow($sqlstr);

            if ($_POST['file_del'] == 'Y') 
                $FileName = "";
            else
                $FileName = $QueryRow['file'];

            if ($_FILES["file"]["name"] != "") {
                if( file_exists(Path_Upload.$QueryRow['file']) )
                    unlink(Path_Upload.$QueryRow['file']);
                $FileName = $FileTitle."-".date("ymdHis").substr($_FILES["file"]["name"],strrpos($_FILES["file"]["name"],'.'));
                copy($_FILES["file"]['tmp_name'], Path_Upload.$FileName);
            }

            $data = array(
                'name'          => $_POST['name'],
                'url'           => $_POST['url'],
                'file'          => $FileName,
                'sort'          => $_POST['sort'],
                'showup_switch' => $_POST['showup_switch'] == '1' ? 1 : 0,
                'modify_time'   => date('Y-m-d H:i:s')
            );

            $db->update($Config_Table_Main, $data, "id", $_POST['id']);

        }

        header("Location: ".$FileTitle."_index.php");

		//新增
    } elseif($_GET['action'] == "create") {

        if ($_FILES["file"]["name"] != "") {
            $FileName = $FileTitle."-".date("ymdHis").substr($_FILES["file"]["name"],strrpos($_FILES["file"]["name"],'.'));
                copy($_FILES["file"]['tmp_name'], Path_Upload.$FileName);
        }

        $data = array(
                'name'          => $_POST['name'],
                'url'           => $_POST['url'],
                'file'          => $FileName,
                'sort'          => $_POST['sort'],
                'showup_switch' => $_POST['showup_switch'] == '1' ? 1 : 0,
                'create_time'   => date('Y-m-d H:i:s'),
                'modify_time'   => date('Y-m-d H:i:s')
        );

		    $db->create($Config_Table_Main, $data);

        header("Location: ".$FileTitle."_index.php");

		//刪除
    } elseif($_GET['action'] == "delete") {

        $sqlstr = "SELECT * FROM `".$Config_Table_Main."` WHERE `del` != '1' AND `id` = '".$_GET['id']."'";
        if ($db->totaldata($sqlstr) > 0) {

            $data = array(
                'del' => 1
            );

		        $db->update($Config_Table_Main, $data, "id", $_GET['id']);

		    }

        header("Location: ".$FileTitle."_index.php");

    }

?>