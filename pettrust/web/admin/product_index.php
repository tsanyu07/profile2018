<?php
    $FileTitle = substr(basename(__FILE__), 0, strpos(basename(__FILE__), '_'));
    require_once($FileTitle."_config.php");


    //搜尋
    if ($_GET['action'] == "search") {

        $_SESSION[$FileTitle.'SearchClass']     = $_POST['search_class'];

        header("Location: ".$FileTitle."_index.php");
        exit();

    } elseif ($_GET['action'] == "clear") {

        $_SESSION[$FileTitle.'SearchClass']     = "";

        header("Location: ".$FileTitle."_index.php");
        exit();

    }

    $QueryWhere = "";
    if ($_SESSION[$FileTitle.'SearchClass'] != "")
        $QueryWhere .= " AND `".$Config_Table_Class_ID."` = '".$_SESSION[$FileTitle.'SearchClass']."'";

    //分頁資料
		$Page = $_GET['page'] * 1 > 0 ? $_GET['page'] * 1 : 1;
    $QueryStart = ($Page - 1) * $Config_Default_Show_Num;

    //取得資料總數
    $sqlstr = "SELECT COUNT(*) FROM `".$Config_Table_Main."` WHERE `del` != '1'".$QueryWhere;
    $QueryTotal = $db->getOne($sqlstr);

    //抓取資料
    $sqlstr = "SELECT *        FROM `".$Config_Table_Main."` WHERE `del` != '1'".$QueryWhere." ORDER BY `sort` ASC, `id` DESC LIMIT ".$QueryStart.",".$Config_Default_Show_Num;
    $QueryList = $db->getAll($sqlstr);

    //抓取分類資料
    $sqlstr = "SELECT *        FROM `".$Config_Table_Class."` WHERE `del` != '1' ORDER BY `sort` ASC, `id` ASC";
    $QueryClassList = $db->getAll($sqlstr);

    $ClassList = array();
    for ($i = 0; $i < sizeof($QueryClassList); $i++)
        $ClassList[ $QueryClassList[$i]['id'] ] = $QueryClassList[$i]['name'];

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
            <small><?=$Config_Title_Class?></small>
        </h1>
    </section>
    <section class="content">
        <div class="row">
            <div class="col-xs-12">
                <div class="box box-info">
                    <div class="box-header with-border">
                        <div class="col-xs-12 col-md-8 col-lg-8 no-padding ">
                           <form action="<?=$FileTitle."_index.php"?>?action=search" id="SearchForm" method="post">
                           <table width="100%" class="top_tab">
                               <tr>
                                   <td width="70%">
                                       分類 : <select name="search_class"><option value="">請選擇</option><?php foreach($ClassList as $ClassID => $ClassName) echo "<option value=\"".$ClassID."\"".($ClassID == $_SESSION[$FileTitle."SearchClass"] ? " selected=\"selected\"" : "").">".$ClassName."</option>"; ?></select>
                                       <input type="button" value="搜尋" onclick="$('#SearchForm').submit();">
                                       <input type="button" value="重新搜尋" onclick="location.href='<?=$FileTitle."_index.php?action=clear"?>';">
                                   </td>
                               </tr>
                           </table>
                           </form>
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
                                <th width="15%">分類</th>
                                <th width="20%">圖片</th>
                                <th>名稱</th>
                                <th width="10%">建立時間</th>
                                <th width="7%">狀態</th>
                                <th width="5%">熱門</th>
                                <th width="5%">排序</th>
                                <th width="22%">功能</th>
                            </tr>
                            <tr>
                                <?php foreach($QueryList as $key => $value){?>
                                        <tr>
                                            <td><?=$ClassList[$value[$Config_Table_Class_ID]]?></td>
                                            <td><?=($value['pic1'] != "" && file_exists(Path_Upload.$value['pic1']) ? "<img src=\"".Url_Upload.$value['pic1']."\" width=\"200\">" : "")?></td>
                                            <td><?=$value['name']?><br/><?=$value['name_tw']?><br/><?=$value['name_jp']?></td>
                                            <td><?=substr($value['create_time'], 0 , 10)?></td>
                                            <td><?=($value['showup_switch'] == 1 ? "顯示" : "不顯示")?></td>
                                            <td><?=($value['hot_switch'] == 1 ? "是" : "否")?></td>
                                            <td><?=$value['sort']?></td>
                                            <td class="function-area">
                                                <input class="btn btn-primary" type="button" value="修改" onclick="location.href='<?=$FileTitle?>_update.php?id=<?=$value['id']?>'">
                                                <input class="btn btn-primary" type="button" value="檔案下載" onclick="location.href='<?=$FileTitle?>_download_index.php?mainid=<?=$value['id']?>'">
                                                <input class="btn btn-gray" type="button" value="刪除" onclick="if(confirm('是否確定刪除 [<?=$value['name']?>] ?')) location.href='<?=$FileTitle?>_control.php?action=delete&id=<?=$value['id']?>'">
                                            </td>
                                        </tr>
                                <?php }?>
                            </tr>
                        </table>
                    </div>
                    <!-- /.box-body -->
                    <div class="box-footer clearfix">
                        <div class="no-margin pull-left" style="display:none;">
                            本頁1筆，總共1筆，目前在第1 / 1頁
                        </div>
                        <?php echo getPageString($Page, $QueryTotal, $Config_Default_Show_Num, 1, $FileTitle."_index.php", "?page="); ?>
                    </div>
                </div>
                <!-- /.box -->
            </div>
        </div>
    </section>
</div>
<?php require_once("_footer.php"); ?>