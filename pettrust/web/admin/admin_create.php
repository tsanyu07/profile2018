<?php
    $FileTitle = substr(basename(__FILE__), 0, strpos(basename(__FILE__), '_'));
    require_once($FileTitle."_config.php");
?>
<?php require_once("_header.php"); ?>
<div class="content-wrapper">
    <section class="content-header" style="min-height: 41px">
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
            <li><a href="#"><?=$Config_Title_Class?></a></li>
            <li><a href="#"><?=$Config_Title_Name?></a></li>
            <li class="active">新增</li>
        </ol>
    </section>
    <section class="content">
        <div class="row">
            <!-- column -->
            <div class="col-xs-12">
                
                <div class="box box-info">
                    <form method="POST" action="<?=$FileTitle?>_control.php?action=create" accept-charset="UTF-8" enctype="multipart/form-data">
                    <input type="hidden" name="action" value="create">
                    <div class="box-body">
                        <div class="col-md-9">
                            <div class="form-group ">
                                <label><label for="name">暱稱</label></label>
                                <input class="form-control" type="text" name="name" id="name" value="">
                            </div>
                            <div class="form-group ">
                                <label><label for="email">帳號(Email)</label></label>
                                <input class="form-control" type="text" name="account" id="account" value="">
                            </div>
                            <div class="form-group ">
                                <label><label for="password">密碼</label></label>
                                <input class="form-control" type="password" name="passwd" id="passwd" value="">
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