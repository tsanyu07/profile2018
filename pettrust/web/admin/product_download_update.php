<?php
    $FileTitle = substr(basename(__FILE__), 0, strpos(basename(__FILE__), '_'));
    require_once($FileTitle."_config.php");

		$MainID = $_GET['mainid'];

    //抓取主資料
    $sqlstr = "SELECT * FROM `".$Config_Table_Main."` WHERE del != '1' and `id` = '".$MainID."'";
    $QueryRow = $db->getRow($sqlstr);

    //抓取資料
    $sqlstr = "SELECT * FROM `".$Config_Table_Download."` WHERE del != '1' and `id` = '".$_GET['id']."'";
    $QueryRow = $db->getRow($sqlstr);

?>
<?php require_once("_header.php"); ?>
<div class="content-wrapper">
    <section class="content-header" style="min-height: 41px">
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
            <?php if($Config_Title_Class != $Config_Title_Name){ ?><li><a href="#"><?=$Config_Title_Class?></a></li><?php } ?>
            <li><a href="#"><?=$Config_Title_Name?></a></li>
            <li class="active">編輯</li>
        </ol>
    </section>
    <section class="content">
        <div class="row">
            <!-- column -->
            <div class="col-xs-12">
                
                <div class="box box-info">
                    <form name="EditForm" method="POST" action="<?=$FileTitle?>_control.php?action=download_update&mainid=<?=$MainID?>" accept-charset="UTF-8" enctype="multipart/form-data">
                    <input type="hidden" name="id" value="<?=$QueryRow['id']?>">
                    <div class="box-body">
                        <div class="col-md-9">
                            <div class="form-group ">
                                <label><label for="name">顯示</label></label>
                                <select class="form-control" name="showup_switch" id="showup_switch">
                                    <option value="0"<?php echo ($QueryRow['showup_switch'] == 0 ? " selected=\"selected\"" : ""); ?>>不顯示</option>
                                    <option value="1"<?php echo ($QueryRow['showup_switch'] == 1 ? " selected=\"selected\"" : ""); ?>>顯示</option>
                                </select>
                            </div>
                            <div class="form-group ">
                                <label><label for="name">分類</label></label>
                                <select class="form-control" name="type" id="type">
                                    <option value="0">請選擇</option>
<?php
    foreach ($DownloadType as $DownloadTypeID => $DownloadTypData)
        echo "                                    <option value=\"".$DownloadTypeID."\"".($QueryRow['type'] == $DownloadTypeID ? " selected=\"selected\"" : "").">".$DownloadTypData['tw']."</option>\n";
?>
                                </select>
                            </div>
                            <div class="form-group ">
                                <label><label for="name">排序</label></label>
                                <input class="form-control" type="text" name="sort" id="sort" value="<?=$QueryRow['sort']?>">
                            </div>
                            <div class="form-group ">
                                <label><label for="name"><h3>英文</h3></label></label><br/>
                            </div>
                            <div class="form-group ">
                                <label><label for="name">名稱</label></label>
                                <input class="form-control" type="text" name="name" id="name" value="<?=$QueryRow['name']?>">
                            </div>
                            <div class="form-group ">
                                <label><label for="name">檔案</label></label>
                                <input class="form-control" type="file" name="file" id="file" value="">
                                <?php if( isset($QueryRow['file']) && $QueryRow['file'] != "" && file_exists(Path_Upload.$QueryRow['file']) ) echo "<a href=\"".Url_Upload.$QueryRow['file']."\" target=\"_blank\">另存檔案</a> <input type=\"checkbox\" name=\"file_del\" value=\"Y\">刪除檔案<br />"; ?> 
                            </div>
                            <div class="form-group ">
                                <label><label for="name"><h3>中文</h3></label></label><br/>
                            </div>
                            <div class="form-group ">
                                <label><label for="name">名稱</label></label>
                                <input class="form-control" type="text" name="name_tw" id="name_tw" value="<?=$QueryRow['name_tw']?>">
                            </div>
                            <div class="form-group ">
                                <label><label for="name">檔案</label></label>
                                <input class="form-control" type="file" name="file_tw" id="file_tw" value="">
                                <?php if( isset($QueryRow['file_tw']) && $QueryRow['file_tw'] != "" && file_exists(Path_Upload.$QueryRow['file_tw']) ) echo "<a href=\"".Url_Upload.$QueryRow['file_tw']."\" target=\"_blank\">另存檔案</a> <input type=\"checkbox\" name=\"file_tw_del\" value=\"Y\">刪除檔案<br />"; ?> 
                            </div>
                            <div class="form-group ">
                                <label><label for="name"><h3>日文</h3></label></label><br/>
                            </div>
                            <div class="form-group ">
                                <label><label for="name">名稱</label></label>
                                <input class="form-control" type="text" name="name_jp" id="name_jp" value="<?=$QueryRow['name_jp']?>">
                            </div>
                            <div class="form-group ">
                                <label><label for="name">檔案</label></label>
                                <input class="form-control" type="file" name="file_jp" id="file_jp" value="">
                                <?php if( isset($QueryRow['file_jp']) && $QueryRow['file_jp'] != "" && file_exists(Path_Upload.$QueryRow['file_jp']) ) echo "<a href=\"".Url_Upload.$QueryRow['file_jp']."\" target=\"_blank\">另存檔案</a> <input type=\"checkbox\" name=\"file_jp_del\" value=\"Y\">刪除檔案<br />"; ?> 
                            </div>
                        </div>
                    </div>
                    <!-- /.box-body -->

                    <div class="box-footer">
                        <div class="col-md-12">
                            <a class="btn btn-default" href="<?=$FileTitle?>_download_index.php?mainid=<?=$MainID?>">回上頁</a>
                            <input class="btn btn-primary" type="submit" value="送出">
                        </div>
                    </div>
                    </form>
                </div>
                <!-- /.box -->
            </div>
            <!--/.col -->
        </div>
        <!-- /.row -->
    </section>
</div>
<?php require_once("_footer.php"); ?>