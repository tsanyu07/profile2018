<?php
    $FileTitle = substr(basename(__FILE__), 0, strpos(basename(__FILE__), '_'));
    require_once($FileTitle."_config.php");

    $sqlstr = "SELECT * FROM `".$Config_Table_Main."` WHERE del != '1' and `id` = '".$_GET['id']."'";
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
                    <form name="EditForm" method="POST" action="<?=$FileTitle?>_control.php?action=update" accept-charset="UTF-8" enctype="multipart/form-data">
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
                                <label><label for="name">排序</label></label>
                                <input class="form-control" type="text" name="sort" id="sort" value="<?=$QueryRow['sort']?>">
                            </div>
                        </div>
                    </div>
                    <!-- /.box-body -->

                    <div class="box-body">
                        <div class="col-md-9">
                            <div class="form-group ">
                                <label><label for="name"><h3>英文</h3></label></label><br/>
                            </div>
                            <div class="form-group ">
                                <label><label for="name">名稱</label></label>
                                <input class="form-control" type="text" name="name" id="name" value="<?=$QueryRow['name']?>">
                            </div>
                            <div class="form-group ">
                                <label><label for="name">內容</label></label>
                                <textarea id="contents" name="contents"><?=$QueryRow['contents']?></textarea>
                                <script type="text/javascript">CKEDITOR.replace('contents', {height:'500',	filebrowserBrowseUrl: 'include/ckfinder/ckfinder.html',	filebrowserImageBrowseUrl: 'include/ckfinder/ckfinder.html?type=Images',	filebrowserFlashBrowseUrl: 'include/ckfinder/ckfinder.html?type=Flash',	filebrowserUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',	filebrowserImageUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',	filebrowserFlashUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash'});</script>
                            </div>
                        </div>
                    </div>
                    <!-- /.box-body -->

                    <div class="box-body">
                        <div class="col-md-9">
                            <div class="form-group ">
                                <label><label for="name"><h3>中文</h3></label></label><br/>
                            </div>
                            <div class="form-group ">
                                <label><label for="name">名稱</label></label>
                                <input class="form-control" type="text" name="name_tw" id="name_tw" value="<?=$QueryRow['name_tw']?>">
                            </div>
                            <div class="form-group ">
                                <label><label for="name">內容</label></label>
                                <textarea id="contents_tw" name="contents_tw"><?=$QueryRow['contents_tw']?></textarea>
                                <script type="text/javascript">CKEDITOR.replace('contents_tw', {height:'500',	filebrowserBrowseUrl: 'include/ckfinder/ckfinder.html',	filebrowserImageBrowseUrl: 'include/ckfinder/ckfinder.html?type=Images',	filebrowserFlashBrowseUrl: 'include/ckfinder/ckfinder.html?type=Flash',	filebrowserUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',	filebrowserImageUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',	filebrowserFlashUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash'});</script>
                            </div>
                        </div>
                    </div>
                    <!-- /.box-body -->

                    <div class="box-body">
                        <div class="col-md-9">
                            <div class="form-group ">
                                <label><label for="name"><h3>日文</h3></label></label><br/>
                            </div>
                            <div class="form-group ">
                                <label><label for="name">名稱</label></label>
                                <input class="form-control" type="text" name="name_jp" id="name_jp" value="<?=$QueryRow['name_jp']?>">
                            </div>
                            <div class="form-group ">
                                <label><label for="name">內容</label></label>
                                <textarea id="contents_jp" name="contents_jp"><?=$QueryRow['contents_jp']?></textarea>
                                <script type="text/javascript">CKEDITOR.replace('contents_jp', {height:'500',	filebrowserBrowseUrl: 'include/ckfinder/ckfinder.html',	filebrowserImageBrowseUrl: 'include/ckfinder/ckfinder.html?type=Images',	filebrowserFlashBrowseUrl: 'include/ckfinder/ckfinder.html?type=Flash',	filebrowserUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',	filebrowserImageUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',	filebrowserFlashUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash'});</script>
                            </div>
                        </div>
                    </div>
                    <!-- /.box-body -->

                    <div class="box-footer">
                        <div class="col-md-12">
                            <a class="btn btn-default" href="<?=$FileTitle?>_index.php">回上頁</a>
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