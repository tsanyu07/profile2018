<?php
    $FileTitle = substr(basename(__FILE__), 0, strpos(basename(__FILE__), '_'));
    require_once($FileTitle."_config.php");

		//修改
    if ($_GET['action'] == "update") {

        $sqlstr = "SELECT * FROM `".$Config_Table_Main."` WHERE `del` != '1' AND `id` = '".$_POST['id']."'";
        if ($db->totaldata($sqlstr) > 0) {

            $QueryRow = $db->getRow($sqlstr);

            if ($_POST['pic1_del'] == 'Y') 
                $PicName1 = "";
            else
                $PicName1 = $QueryRow['pic1'];

            if ($_FILES["pic1"]["name"] != "") {
                if( file_exists(Path_Upload.$QueryRow['pic1']) )
                    unlink(Path_Upload.$QueryRow['pic1']);
                $PicName1 = $FileTitle."1-".date("ymdHis").substr($_FILES["pic1"]["name"],strrpos($_FILES["pic1"]["name"],'.'));
                copy($_FILES["pic1"]['tmp_name'], Path_Upload.$PicName1);
            }

            if ($_POST['pic2_del'] == 'Y') 
                $PicName2 = "";
            else
                $PicName2 = $QueryRow['pic2'];

            if ($_FILES["pic2"]["name"] != "") {
                if( file_exists(Path_Upload.$QueryRow['pic2']) )
                    unlink(Path_Upload.$QueryRow['pic2']);
                $PicName2 = $FileTitle."2-".date("ymdHis").substr($_FILES["pic2"]["name"],strrpos($_FILES["pic2"]["name"],'.'));
                copy($_FILES["pic2"]['tmp_name'], Path_Upload.$PicName2);
            }

            if ($_POST['pic3_del'] == 'Y') 
                $PicName3 = "";
            else
                $PicName3 = $QueryRow['pic3'];

            if ($_FILES["pic3"]["name"] != "") {
                if( file_exists(Path_Upload.$QueryRow['pic3']) )
                    unlink(Path_Upload.$QueryRow['pic3']);
                $PicName3 = $FileTitle."3-".date("ymdHis").substr($_FILES["pic3"]["name"],strrpos($_FILES["pic3"]["name"],'.'));
                copy($_FILES["pic3"]['tmp_name'], Path_Upload.$PicName3);
            }

            $data = array(
                $Config_Table_Class_ID => $_POST['class_id'],
                'name'                 => $_POST['name'],
                'introduction'         => $_POST['introduction'],
                'certification'        => $_POST['certification'],
                'feature'              => $_POST['feature'],
                'specification'        => $_POST['specification'],
                'accessory'            => $_POST['accessory'],
                'name_tw'              => $_POST['name_tw'],
                'introduction_tw'      => $_POST['introduction_tw'],
                'certification_tw'     => $_POST['certification_tw'],
                'feature_tw'           => $_POST['feature_tw'],
                'specification_tw'     => $_POST['specification_tw'],
                'accessory_tw'         => $_POST['accessory_tw'],
                'name_jp'              => $_POST['name_jp'],
                'introduction_jp'      => $_POST['introduction_jp'],
                'certification_jp'     => $_POST['certification_jp'],
                'feature_jp'           => $_POST['feature_jp'],
                'specification_jp'     => $_POST['specification_jp'],
                'accessory_jp'         => $_POST['accessory_jp'],
                'pic1'                 => $PicName1,
                'pic2'                 => $PicName2,
                'pic3'                 => $PicName3,
                'sort'                 => $_POST['sort'],
                'showup_switch'        => $_POST['showup_switch'] == '1' ? 1 : 0,
                'hot_switch'           => $_POST['hot_switch'] == '1' ? 1 : 0,
                'modify_time'          => date('Y-m-d H:i:s')
            );

            $db->update($Config_Table_Main, $data, "id", $_POST['id']);

        }

        header("Location: ".$FileTitle."_index.php");

		//新增
    } elseif ($_GET['action'] == "create") {

        if ($_FILES["pic1"]["name"] != "") {
            $PicName1 = $FileTitle."1-".date("ymdHis").substr($_FILES["pic1"]["name"],strrpos($_FILES["pic1"]["name"],'.'));
            copy($_FILES["pic1"]['tmp_name'], Path_Upload.$PicName1);
        }

        if ($_FILES["pic2"]["name"] != "") {
            $PicName2 = $FileTitle."2-".date("ymdHis").substr($_FILES["pic2"]["name"],strrpos($_FILES["pic2"]["name"],'.'));
            copy($_FILES["pic1"]['tmp_name'], Path_Upload.$PicName2);
        }

        if ($_FILES["pic3"]["name"] != "") {
            $PicName3 = $FileTitle."3-".date("ymdHis").substr($_FILES["pic3"]["name"],strrpos($_FILES["pic3"]["name"],'.'));
            copy($_FILES["pic3"]['tmp_name'], Path_Upload.$PicName3);
        }

        $data = array(
                $Config_Table_Class_ID => $_POST['class_id'],
                'name'                 => $_POST['name'],
                'introduction'         => $_POST['introduction'],
                'certification'        => $_POST['certification'],
                'feature'              => $_POST['feature'],
                'specification'        => $_POST['specification'],
                'accessory'            => $_POST['accessory'],
                'name_tw'              => $_POST['name_tw'],
                'introduction_tw'      => $_POST['introduction_tw'],
                'certification_tw'     => $_POST['certification_tw'],
                'feature_tw'           => $_POST['feature_tw'],
                'specification_tw'     => $_POST['specification_tw'],
                'accessory_tw'         => $_POST['accessory_tw'],
                'name_jp'              => $_POST['name_jp'],
                'introduction_jp'      => $_POST['introduction_jp'],
                'certification_jp'     => $_POST['certification_jp'],
                'feature_jp'           => $_POST['feature_jp'],
                'specification_jp'     => $_POST['specification_jp'],
                'accessory_jp'         => $_POST['accessory_jp'],
                'pic1'                 => $PicName1,
                'pic2'                 => $PicName2,
                'pic3'                 => $PicName3,
                'sort'                 => $_POST['sort'],
                'showup_switch'        => $_POST['showup_switch'] == '1' ? 1 : 0,
                'hot_switch'           => $_POST['hot_switch'] == '1' ? 1 : 0,
                'create_time'          => date('Y-m-d H:i:s'),
                'modify_time'          => date('Y-m-d H:i:s')
        );

		    $db->create($Config_Table_Main, $data);

        header("Location: ".$FileTitle."_index.php");

		//刪除
    } elseif ($_GET['action'] == "delete") {

        $sqlstr = "SELECT * FROM `".$Config_Table_Main."` WHERE `del` != '1' AND `id` = '".$_GET['id']."'";
        if ($db->totaldata($sqlstr) > 0) {

            $data = array(
                'del' => 1
            );

		        $db->update($Config_Table_Main, $data, "id", $_GET['id']);

		    }

        header("Location: ".$FileTitle."_index.php");

		//修改
    } elseif ($_GET['action'] == "download_update") {

        $sqlstr = "SELECT * FROM `".$Config_Table_Main."` WHERE `del` != '1' AND `id` = '".$_GET['mainid']."'";
        if ($db->totaldata($sqlstr) > 0) {

            $sqlstr = "SELECT * FROM `".$Config_Table_Download."` WHERE `del` != '1' AND `id` = '".$_POST['id']."'";
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

                if ($_POST['file_tw_del'] == 'Y') 
                    $FileNameTW = "";
                else
                    $FileNameTW = $QueryRow['file_tw'];

                if ($_FILES["file_tw"]["name"] != "") {
                    if( file_exists(Path_Upload.$QueryRow['file_tw']) )
                        unlink(Path_Upload.$QueryRow['file_tw']);
                    $FileNameTW = $FileTitle."tw-".date("ymdHis").substr($_FILES["file_tw"]["name"],strrpos($_FILES["file_tw"]["name"],'.'));
                    copy($_FILES["file_tw"]['tmp_name'], Path_Upload.$FileNameTW);
                }

                if ($_POST['file_jp_del'] == 'Y') 
                    $FileNameJP = "";
                else
                    $FileNameJP = $QueryRow['file_jp'];

                if ($_FILES["file_jp"]["name"] != "") {
                    if( file_exists(Path_Upload.$QueryRow['file_jp']) )
                        unlink(Path_Upload.$QueryRow['file_jp']);
                    $FileNameJP = $FileTitle."jp-".date("ymdHis").substr($_FILES["file_jp"]["name"],strrpos($_FILES["file_jp"]["name"],'.'));
                    copy($_FILES["file_jp"]['tmp_name'], Path_Upload.$FileNameJP);
                }

                $data = array(
                    'type'                 => $_POST['type'],
                    'name'                 => $_POST['name'],
                    'name_tw'              => $_POST['name_tw'],
                    'name_jp'              => $_POST['name_jp'],
                    'file'                 => $FileName,
                    'file_tw'              => $FileNameTW,
                    'file_jp'              => $FileNameJP,
                    'sort'                 => $_POST['sort'],
                    'showup_switch'        => $_POST['showup_switch'] == '1' ? 1 : 0,
                    'modify_time'          => date('Y-m-d H:i:s')
                );

                $db->update($Config_Table_Download, $data, "id", $_POST['id']);

            }

        }

        header("Location: ".$FileTitle."_download_index.php?mainid=".$_GET['mainid']);

		//新增
    } elseif ($_GET['action'] == "download_create") {

        $sqlstr = "SELECT * FROM `".$Config_Table_Main."` WHERE `del` != '1' AND `id` = '".$_GET['mainid']."'";
        if ($db->totaldata($sqlstr) > 0) {

            if ($_FILES["file"]["name"] != "") {
                $FileName = $FileTitle."-".date("ymdHis").substr($_FILES["file"]["name"],strrpos($_FILES["file"]["name"],'.'));
                    copy($_FILES["file"]['tmp_name'], Path_Upload.$FileName);
            }

            if ($_FILES["file_tw"]["name"] != "") {
                $FileNameTW = $FileTitle."tw-".date("ymdHis").substr($_FILES["file_tw"]["name"],strrpos($_FILES["file_tw"]["name"],'.'));
                copy($_FILES["file_tw"]['tmp_name'], Path_Upload.$FileNameTW);
            }

            if ($_FILES["file_jp"]["name"] != "") {
                $FileNameJP = $FileTitle."jp-".date("ymdHis").substr($_FILES["file_jp"]["name"],strrpos($_FILES["file_jp"]["name"],'.'));
                copy($_FILES["file_jp"]['tmp_name'], Path_Upload.$FileNameJP);
            }

            $data = array(
                    $Config_Table_Main_ID  => $_GET['mainid'],
                    'type'                 => $_POST['type'],
                    'name'                 => $_POST['name'],
                    'name_tw'              => $_POST['name_tw'],
                    'name_jp'              => $_POST['name_jp'],
                    'file'                 => $FileName,
                    'file_tw'              => $FileNameTW,
                    'file_jp'              => $FileNameJP,
                    'sort'                 => $_POST['sort'],
                    'showup_switch'        => $_POST['showup_switch'] == '1' ? 1 : 0,
                    'create_time'          => date('Y-m-d H:i:s'),
                    'modify_time'          => date('Y-m-d H:i:s')
            );

		        $db->create($Config_Table_Download, $data);

        }

        header("Location: ".$FileTitle."_download_index.php?mainid=".$_GET['mainid']);

		//刪除
    } elseif ($_GET['action'] == "download_delete") {

        $sqlstr = "SELECT * FROM `".$Config_Table_Main."` WHERE `del` != '1' AND `id` = '".$_GET['mainid']."'";
        if ($db->totaldata($sqlstr) > 0) {

            $sqlstr = "SELECT * FROM `".$Config_Table_Download."` WHERE `del` != '1' AND `id` = '".$_GET['id']."'";
            if ($db->totaldata($sqlstr) > 0) {

                $data = array(
                    'del' => 1
                );

		            $db->update($Config_Table_Download, $data, "id", $_GET['id']);

		        }

        }

        header("Location: ".$FileTitle."_download_index.php?mainid=".$_GET['mainid']);

    }

?>