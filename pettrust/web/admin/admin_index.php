<?php
    $FileTitle = substr(basename(__FILE__), 0, strpos(basename(__FILE__), '_'));
    require_once($FileTitle."_config.php");

    $sqlstr = "SELECT * FROM `".$Config_Table_Main."` WHERE `del` != '1'";
    $QueryList = $db->getAll($sqlstr);

?>
<?php require_once("_header.php"); ?>
<div class="content-wrapper">
    <section class="content-header" style="min-height: 41px">
        <ol class="breadcrumb">
            <li><a href="home.php"><i class="fa fa-dashboard"></i> Home</a></li>
            <?php if($Config_Title_Class != $Config_Title_Name){ ?><li><a href="#"><?=$Config_Title_Class?></a></li><?php } ?>
            <li class="active"><?=$Config_Title_Name?></li>
        </ol>
        <h1>
            <small><?=$Config_Title_Class?></small>
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
                            <a href="<?=$FileTitle?>_create.php" class="btn btn-sm bg-purple pull-right">
                                <i class="fa fa-fw fa-plus"></i>新增
                            </a>
                        </div>
                    </div>
                    <!-- /.box-header -->
                    <div class="box-body table-responsive">
                        <table class="table table-bordered table-striped table-hover">
                            <tr>
                                <th width="15%">暱稱</th>
                                <th>電子信箱</th>
                                <th width="10%">建立時間</th>
                                <th width="10%">修改時間</th>
                                <th width="10%">功能</th>
                            </tr>
                            <tr>
                                <?php foreach($QueryList as $key => $value){?>
                                        <tr>
                                            <td><?=$value['name']?></td>
                                            <td><?=$value['account']?></td>
                                            <td><?=$value['create_time']?></td>
                                            <td><?=$value['modify_time']?></td>
                                            <td class="function-area">
                                                <input class="btn btn-primary" type="button" value="修改" onclick="location.href='<?=$FileTitle?>_update.php?id=<?=$value['id']?>'">
                                                <?php if($value['id'] != 1){?><input class="btn btn-gray" type="button" value="刪除" onclick="if(confirm('是否確定刪除 [<?=$value['name']?>] ?')) location.href='<?=$FileTitle?>_control.php?action=delete&id=<?=$value['id']?>'"><?php }?>
                                            </td>
                                        </tr>
                                <?php }?>
                            </tr>
                        </table>
                    </div>
                    <!-- /.box-body -->
                    <div class="box-footer clearfix">
                        <div class="no-margin pull-left">
                            本頁1筆，總共1筆，目前在第1 / 1頁
                        </div>
                        <ul class="pagination pagination-sm no-margin pull-right">
                            <li class="disabled"><span>&laquo;</span></li>
                            <li class="active"><span>1</span></li>
                            <li class="disabled"><span>&raquo;</span></li>
                        </ul>
                    </div>
                </div>
                <!-- /.box -->
            </div>
        </div>
    </section>
</div>
<?php require_once("_footer.php"); ?>