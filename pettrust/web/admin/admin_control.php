<?php
    $FileTitle = substr(basename(__FILE__), 0, strpos(basename(__FILE__), '_'));
    require_once($FileTitle."_config.php");

		//修改
    if ($_GET['action'] == "update") {

        $sqlstr = "SELECT * FROM `".$Config_Table_Main."` WHERE `del` != '1' AND `id` = '".$_POST['id']."'";
        if ($db->totaldata($sqlstr) > 0) {

            $QueryRow = $db->getRow($sqlstr);

            $data = array(
                'account'     => $_POST['account'],
                'passwd'      => $_POST['passwd'],
                'name'        => $_POST['name'],
                'modify_time' => date('Y-m-d H:i:s')
            );

            $db->update($Config_Table_Main, $data, "id", $_POST['id']);

        }

        header("Location: ".$FileTitle."_index.php");

		//新增
    } elseif($_GET['action'] == "create") {

        $data = array(
            'account'     => $_POST['account'],
            'passwd'      => $_POST['passwd'],
            'name'        => $_POST['name'],
            'create_time' => date('Y-m-d H:i:s'),
            'modify_time' => date('Y-m-d H:i:s')
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