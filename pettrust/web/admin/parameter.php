<?php  require_once("_inc.php"); require_once("valid.php"); require_once("layouts/_header.php"); ?>
<div class="content-wrapper">
    <section class="content-header" style="min-height: 41px">
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
            <li><a href="#">參數設定</a></li>
            <li class="active">編輯</li>
        </ol>
    </section>
    <section class="content">
        <div class="row">
            <!-- column -->
            <div class="col-xs-12">
                <div class="box box-info">
                    <form method="POST" action="" accept-charset="UTF-8" enctype="multipart/form-data">
                        <div class="box-body">
                            <div class="col-md-9">
                                <div class="form-group ">
                                    <label><label for="web_title">網站標題</label></label>
                                    <input class="form-control input-sm" name="web_title" type="text" value="合茂自動化股份有限公司" id="web_title">
                                </div>
                                <div class="form-group ">
                                    <label><label for="web_keywords">關鍵字（請用半形逗號間隔）</label></label>
                                    <input class="form-control input-sm" placeholder="Ex. aaa,bbb,ccc" name="web_keywords" type="text" value="1231" id="web_keywords">
                                </div>
                                <div class="form-group ">
                                    <label><label for="web_description">簡介（建議字數以120字左右為佳）</label></label>
                                    <textarea class="form-control input-sm" name="web_description" cols="50" rows="10" id="web_description">1231231</textarea>
                                </div>
                                <div class="form-group ">
                                    <label><label for="admin_email">聯絡我們管理員信箱（多位請用半形逗點分開）</label></label>
                                    <input class="form-control input-sm" placeholder="Ex. aaa@gmail.com,bbb@gmail.com" name="admin_email" type="text" value="aaa@gmail.com,bbb@gmail.com" id="admin_email">
                                </div>
                            </div>
                        </div>
                        <!-- /.box-body -->
                        <div class="box-footer">
                            <div class="col-md-12">
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
<?php require_once("layouts/_footer.php"); ?>