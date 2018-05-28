<?php
    $FileTitle = substr(basename(__FILE__), 0, strpos(basename(__FILE__), '_'));
    require_once($FileTitle."_config.php");

    //抓取分類資料
    $sqlstr = "SELECT * FROM `".$Config_Table_Class."` WHERE `del` != '1' ORDER BY `sort` ASC, `id` ASC";
    $QueryClassList = $db->getAll($sqlstr);

?>
<?php require_once("_header.php"); ?>
<div class="content-wrapper">
    <section class="content-header" style="min-height: 41px">
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
            <?php if($Config_Title_Class != $Config_Title_Name){ ?><li><a href="#"><?=$Config_Title_Class?></a></li><?php } ?>
            <li><a href="#"><?=$Config_Title_Name?></a></li>
            <li class="active">新增</li>
        </ol>
    </section>
    <section class="content">
        <div class="row">
            <!-- column -->
            <div class="col-xs-12">
                
                <div class="box box-info">
                    <form name="EditForm" method="POST" action="<?=$FileTitle?>_control.php?action=create" accept-charset="UTF-8" enctype="multipart/form-data">
                    <input type="hidden" name="action" value="create">
                    <div class="box-body">
                        <div class="col-md-9">
                            <div class="form-group ">
                                <label><label for="name">顯示</label></label>
                                <select class="form-control" name="showup_switch" id="showup_switch">
                                    <option value="0">不顯示</option>
                                    <option value="1">顯示</option>
                                </select>
                            </div>
                            <div class="form-group ">
                                <label><label for="name">熱門商品</label></label>
                                <select class="form-control" name="hot_switch" id="hot_switch">
                                    <option value="0">否</option>
                                    <option value="1">是</option>
                                </select>
                            </div>
                            <div class="form-group ">
                                <label><label for="name">分類</label></label>
                                <select class="form-control" name="class_id" id="class_id">
                                    <option value="0">請選擇</option>
<?php
    for ($i = 0; $i < sizeof($QueryClassList); $i++)
        echo "                                    <option value=\"".$QueryClassList[$i]['id']."\">".$QueryClassList[$i]['name']."</option>\n";
?>
                                </select>
                            </div>
                            <div class="form-group ">
                                <label><label for="name">圖片1</label> 推薦尺寸 600 x 375</label>
                                <input class="form-control" type="file" name="pic1" id="pic1">
                            </div>
                            <div class="form-group ">
                                <label><label for="name">圖片2</label> 推薦尺寸 600 x 375</label>
                                <input class="form-control" type="file" name="pic2" id="pic2">
                            </div>
                            <div class="form-group ">
                                <label><label for="name">圖片3</label> 推薦尺寸 600 x 375</label>
                                <input class="form-control" type="file" name="pic3" id="pic3">
                            </div>
                            <div class="form-group ">
                                <label><label for="name">排序</label></label>
                                <input class="form-control" type="text" name="sort" id="sort" value="0">
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
                                <input class="form-control" type="text" name="name" id="name" value="">
                            </div>
                            <div class="form-group ">
                                <label><label for="name">簡介</label></label>
                                <textarea id="introduction" name="introduction" style="width:100%;"></textarea>
                            </div>
                            <div class="form-group ">
                                <label><label for="name">專家認證</label></label>
                                <textarea id="certification" name="certification"></textarea>
                                <script type="text/javascript">CKEDITOR.replace('certification', {height:'200',	filebrowserBrowseUrl: 'include/ckfinder/ckfinder.html',	filebrowserImageBrowseUrl: 'include/ckfinder/ckfinder.html?type=Images',	filebrowserFlashBrowseUrl: 'include/ckfinder/ckfinder.html?type=Flash',	filebrowserUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',	filebrowserImageUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',	filebrowserFlashUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash'});</script>
                            </div>
                            <div class="form-group ">
                                <label><label for="name">特色</label></label>
                                <textarea id="feature" name="feature"></textarea>
                                <script type="text/javascript">CKEDITOR.replace('feature', {height:'200',	filebrowserBrowseUrl: 'include/ckfinder/ckfinder.html',	filebrowserImageBrowseUrl: 'include/ckfinder/ckfinder.html?type=Images',	filebrowserFlashBrowseUrl: 'include/ckfinder/ckfinder.html?type=Flash',	filebrowserUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',	filebrowserImageUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',	filebrowserFlashUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash'});</script>
                            </div>
                            <div class="form-group ">
                                <label><label for="name">規格</label></label>
                                <textarea id="specification" name="specification"></textarea>
                                <script type="text/javascript">CKEDITOR.replace('specification', {height:'200',	filebrowserBrowseUrl: 'include/ckfinder/ckfinder.html',	filebrowserImageBrowseUrl: 'include/ckfinder/ckfinder.html?type=Images',	filebrowserFlashBrowseUrl: 'include/ckfinder/ckfinder.html?type=Flash',	filebrowserUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',	filebrowserImageUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',	filebrowserFlashUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash'});</script>
                            </div>
                            <div class="form-group ">
                                <label><label for="name">配件</label></label>
                                <textarea id="accessory" name="accessory"></textarea>
                                <script type="text/javascript">CKEDITOR.replace('accessory', {height:'200',	filebrowserBrowseUrl: 'include/ckfinder/ckfinder.html',	filebrowserImageBrowseUrl: 'include/ckfinder/ckfinder.html?type=Images',	filebrowserFlashBrowseUrl: 'include/ckfinder/ckfinder.html?type=Flash',	filebrowserUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',	filebrowserImageUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',	filebrowserFlashUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash'});</script>
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
                                <input class="form-control" type="text" name="name_tw" id="name_tw" value="">
                            </div>
                            <div class="form-group ">
                                <label><label for="name">簡介</label></label>
                                <textarea id="introduction_tw" name="introduction_tw" style="width:100%;"></textarea>
                            </div>
                            <div class="form-group ">
                                <label><label for="name">專家認證</label></label>
                                <textarea id="certification_tw" name="certification_tw"></textarea>
                                <script type="text/javascript">CKEDITOR.replace('certification_tw', {height:'200',	filebrowserBrowseUrl: 'include/ckfinder/ckfinder.html',	filebrowserImageBrowseUrl: 'include/ckfinder/ckfinder.html?type=Images',	filebrowserFlashBrowseUrl: 'include/ckfinder/ckfinder.html?type=Flash',	filebrowserUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',	filebrowserImageUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',	filebrowserFlashUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash'});</script>
                            </div>
                            <div class="form-group ">
                                <label><label for="name">特色</label></label>
                                <textarea id="feature_tw" name="feature_tw"></textarea>
                                <script type="text/javascript">CKEDITOR.replace('feature_tw', {height:'200',	filebrowserBrowseUrl: 'include/ckfinder/ckfinder.html',	filebrowserImageBrowseUrl: 'include/ckfinder/ckfinder.html?type=Images',	filebrowserFlashBrowseUrl: 'include/ckfinder/ckfinder.html?type=Flash',	filebrowserUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',	filebrowserImageUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',	filebrowserFlashUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash'});</script>
                            </div>
                            <div class="form-group ">
                                <label><label for="name">規格</label></label>
                                <textarea id="specification_tw" name="specification_tw"></textarea>
                                <script type="text/javascript">CKEDITOR.replace('specification_tw', {height:'200',	filebrowserBrowseUrl: 'include/ckfinder/ckfinder.html',	filebrowserImageBrowseUrl: 'include/ckfinder/ckfinder.html?type=Images',	filebrowserFlashBrowseUrl: 'include/ckfinder/ckfinder.html?type=Flash',	filebrowserUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',	filebrowserImageUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',	filebrowserFlashUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash'});</script>
                            </div>
                            <div class="form-group ">
                                <label><label for="name">配件</label></label>
                                <textarea id="accessory_tw" name="accessory_tw"></textarea>
                                <script type="text/javascript">CKEDITOR.replace('accessory_tw', {height:'200',	filebrowserBrowseUrl: 'include/ckfinder/ckfinder.html',	filebrowserImageBrowseUrl: 'include/ckfinder/ckfinder.html?type=Images',	filebrowserFlashBrowseUrl: 'include/ckfinder/ckfinder.html?type=Flash',	filebrowserUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',	filebrowserImageUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',	filebrowserFlashUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash'});</script>
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
                                <input class="form-control" type="text" name="name_jp" id="name_jp" value="">
                            </div>
                            <div class="form-group ">
                                <label><label for="name">簡介</label></label>
                                <textarea id="introduction_jp" name="introduction_jp" style="width:100%;"></textarea>
                            </div>
                            <div class="form-group ">
                                <label><label for="name">專家認證</label></label>
                                <textarea id="certification_jp" name="certification_jp"></textarea>
                                <script type="text/javascript">CKEDITOR.replace('certification_jp', {height:'200',	filebrowserBrowseUrl: 'include/ckfinder/ckfinder.html',	filebrowserImageBrowseUrl: 'include/ckfinder/ckfinder.html?type=Images',	filebrowserFlashBrowseUrl: 'include/ckfinder/ckfinder.html?type=Flash',	filebrowserUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',	filebrowserImageUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',	filebrowserFlashUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash'});</script>
                            </div>
                            <div class="form-group ">
                                <label><label for="name">特色</label></label>
                                <textarea id="feature_jp" name="feature_jp"></textarea>
                                <script type="text/javascript">CKEDITOR.replace('feature_jp', {height:'200',	filebrowserBrowseUrl: 'include/ckfinder/ckfinder.html',	filebrowserImageBrowseUrl: 'include/ckfinder/ckfinder.html?type=Images',	filebrowserFlashBrowseUrl: 'include/ckfinder/ckfinder.html?type=Flash',	filebrowserUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',	filebrowserImageUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',	filebrowserFlashUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash'});</script>
                            </div>
                            <div class="form-group ">
                                <label><label for="name">規格</label></label>
                                <textarea id="specification_jp" name="specification_jp"></textarea>
                                <script type="text/javascript">CKEDITOR.replace('specification_jp', {height:'200',	filebrowserBrowseUrl: 'include/ckfinder/ckfinder.html',	filebrowserImageBrowseUrl: 'include/ckfinder/ckfinder.html?type=Images',	filebrowserFlashBrowseUrl: 'include/ckfinder/ckfinder.html?type=Flash',	filebrowserUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',	filebrowserImageUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',	filebrowserFlashUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash'});</script>
                            </div>
                            <div class="form-group ">
                                <label><label for="name">配件</label></label>
                                <textarea id="accessory_jp" name="accessory_jp"></textarea>
                                <script type="text/javascript">CKEDITOR.replace('accessory_jp', {height:'200',	filebrowserBrowseUrl: 'include/ckfinder/ckfinder.html',	filebrowserImageBrowseUrl: 'include/ckfinder/ckfinder.html?type=Images',	filebrowserFlashBrowseUrl: 'include/ckfinder/ckfinder.html?type=Flash',	filebrowserUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',	filebrowserImageUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',	filebrowserFlashUploadUrl: 'include/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash'});</script>
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