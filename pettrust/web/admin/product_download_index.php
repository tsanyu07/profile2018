<?php
    $FileTitle = substr(basename(__FILE__), 0, strpos(basename(__FILE__), '_'));
    require_once($FileTitle."_config.php");

		$MainID = $_GET['mainid'];

    //抓取主資料
    $sqlstr = "SELECT * FROM `".$Config_Table_Main."` WHERE del != '1' and `id` = '".$MainID."'";
    $QueryRow = $db->getRow($sqlstr);

    //抓取資料
    $sqlstr = "SELECT * FROM `".$Config_Table_Download."` WHERE `del` != '1' AND `".$Config_Table_Main_ID."` = '".$MainID."' ORDER BY `type` ASC, `sort` ASC, `id` ASC";
    $QueryList = $db->getAll($sqlstr);

?>
<?php require_once("_header.php"); ?>
<div class="content-wrapper">
    <section class="content-header" style="min-height: 41px">
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
            <?php if($Config_Title_Class != $Config_Title_Name){ ?><li><a href="#"><?=$Config_Title_Class?></a></li><?php } ?>
            <li class="active"><?=$Config_Title_Name?></li>
        </ol>
        <h1>
            <small><?=$Config_Title_Class?> - <?=$QueryRow['name']?> - 檔案下載</small>
        </h1>
    </section>
    <section class="content">
        <div class="row">
            <div class="col-xs-12">
                <div class="box box-info">
                    <div class="box-header with-border">
                        <div class="col-xs-12 col-md-8 col-lg-8 no-padding ">
                        </div>
                        <div class="col-xs-12 col-md-4 col-lg-4">
                            <a href="<?=$FileTitle?>_download_create.php?mainid=<?=$MainID?>" class="btn btn-sm bg-purple pull-right">
                                <i class="fa fa-fw fa-plus"></i>新增
                            </a>
                            <a href="<?=$FileTitle?>_index.php" class="btn btn-sm bg-gray pull-right">
                                <i class="fa fa-fw"></i>返回
                            </a>
                        </div>
                    </div>
                    <!-- /.box-header -->
                    <div class="box-body table-responsive">
                        <table class="table table-bordered table-striped table-hover">
                            <tr>
                                <th width="15%">檔案類型</th>
                                <th>名稱</th>
                                <th width="10%">建立時間</th>
                                <th width="7%">狀態</th>
                                <th width="5%">排序</th>
                                <th width="15%">功能</th>
                            </tr>
                            <tr>
                                <?php foreach($QueryList as $key => $value){?>
                                        <tr>
                                            <td><?=$DownloadType[$value['type']]['tw']?></td>
                                            <td><?=$value['name']?><br/><?=$value['name_tw']?><br/><?=$value['name_jp']?></td>
                                            <td><?=substr($value['create_time'], 0, 10)?></td>
                                            <td><?=($value['showup_switch'] == 1 ? "顯示" : "不顯示")?></td>
                                            <td><?=$value['sort']?></td>
                                            <td class="function-area">
                                                <input class="btn btn-primary" type="button" value="修改" onclick="location.href='<?=$FileTitle?>_download_update.php?mainid=<?=$MainID?>&id=<?=$value['id']?>'">
                                                <input class="btn btn-gray" type="button" value="刪除" onclick="if(confirm('是否確定刪除 [<?=$value['name']?>] ?')) location.href='<?=$FileTitle?>_control.php?action=download_delete&mainid=<?=$MainID?>&id=<?=$value['id']?>'">
                                            </td>
                                        </tr>
                                <?php }?>
                            </tr>
                        </table>
                    </div>
                </div>
                <!-- /.box -->
            </div>
        </div>
    </section>
</div>
<?php require_once("_footer.php"); ?>