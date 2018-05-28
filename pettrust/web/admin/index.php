<?php require_once("_inc.php"); ?>
<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <title>網站</title>
    <?php require_once("layouts/partial/meta.php"); ?>
    <?php require_once("layouts/partial/css.php"); ?>
    <?php require_once("layouts/partial/javascript.php"); ?>
    <script>
        $('.fancybox').fancybox();
    </script>
</head>
<body class="hold-transition login-page">
    <div class="login-box">
        <div class="login-logo">
            <a href="http://demo2.mi-go.com.tw/synpronic/admin">管理後台</a>
        </div>
        <!-- /.login-logo -->
        <div class="login-box-body">
            <form role="form" method="POST" action="login.php">
                <input type="hidden" name="token" value="<?=makeToken();?>">
                <div class="form-group has-feedback">
                    <input type="email" name="email" class="form-control" placeholder="Email" value="admin@example.com">
                    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback">
                    <input type="password" name="password" class="form-control" placeholder="Password" value="12345678">
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                                    </div>
                <div class="row">
                    <div class="col-xs-8"></div>
                    <!-- /.col -->
                    <div class="col-xs-4">
                        <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
                    </div>
                    <!-- /.col -->
                </div>
            </form>
        </div>
        <!-- /.login-box-body -->
    </div>
    <!-- /.login-box -->
    </div>
    </body>
</html>
