<?php  require_once("_inc.php"); require_once("valid.php"); require_once("layouts/_header.php"); ?>
<div class="content-wrapper">
    <section class="content-header" style="min-height: 41px">
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
            <li><a href="#">Google Analytics 流量分析</a></li>
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
                                <div class="text-muted well" style="margin-top: 15px">
                                    <h4 style="line-height: 25px">
                                        Google Analytics網站流量分析可以偵測網站訪客數、瀏覽量，以及各種訪客和網站互動的行為，從而成為管理者優化網站時最好的參考。
                                    </h4>
                                    申請連結：<a href="http://www.google.com/intl/zh-TW_ALL/analytics/" target="_blank">http://www.google.com/intl/zh-TW_ALL/analytics/</a>
                                </div>
                                <div class="form-group ">
                                    <label><label for="web_ga">Google網站流量分析代碼</label></label>
                                    <textarea class="form-control" placeholder="(建立您的網站分析代碼後黏貼至此)" name="web_ga" cols="50" rows="10" id="web_ga">0</textarea>
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