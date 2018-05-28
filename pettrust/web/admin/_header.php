<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <title><?=$Server_Title?></title>
    <meta charset="UTF-8">
    <?php require_once("layouts/partial/meta.php"); ?>
    <?php require_once("layouts/partial/css.php"); ?>
    <?php require_once("layouts/partial/javascript.php"); ?>

<!--     <script>
        $('.fancybox').fancybox();
    </script> -->

</head>
<body class="hold-transition skin-purple sidebar-mini">
    <div class="wrapper">
        <header class="main-header">
            <!-- Logo -->
            <!-- <a href="http://demo2.mi-go.com.tw/synpronic/admin" class="logo"> -->
            <a href="home.php" class="logo">
                <!-- mini logo for sidebar mini 50x50 pixels -->
                <span class="logo-mini">管理後台</span>
                <!-- logo for regular state and mobile devices -->
                <span class="logo-lg">管理後台</span>
            </a>
            <!-- Header Navbar: style can be found in header.less -->
            <nav class="navbar navbar-static-top">
                <!-- Sidebar toggle button-->
                <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
                    <span class="sr-only">Toggle navigation</span>
                </a>
                <div class="navbar-custom-menu">
                    <ul class="nav navbar-nav">
                        <!-- User Account: style can be found in dropdown.less -->
                        <li class="dropdown user user-menu">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <?php 
                                    echo $_SESSION['UserName'];
                                ?>
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a href="logout.php">
                                        Logout
                                    </a>
                                    <form id="logout-form" action="" method="POST" style="display: none;">
                                    </form>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header><!-- Left side column. contains the logo and sidebar -->
        <aside class="main-sidebar">
            <!-- sidebar: style can be found in sidebar.less -->
            <section class="sidebar">
                <!-- sidebar menu: : style can be found in sidebar.less -->
                <ul class="sidebar-menu">
                    <li class="treeview<?php if($Config_Title_Class == "商品管理") echo " active"; ?>">
                        <a href="#">
                            <i class="fa fa-cog"></i> <span>商品管理</span>
                            <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
                        </a>
                        <ul class="treeview-menu">
                            <li >
                                <a href="product_index.php"><i class="fa fa-circle-o"></i>
                                    商品管理
                                </a>
                                <a href="productclass_index.php"><i class="fa fa-circle-o"></i>
                                    商品分類管理
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="treeview<?php if($Config_Title_Class == "首頁Banner") echo " active"; ?>">
                        <a href="banner_index.php">
                            <i class="fa fa-book"></i>
                            <span>首頁Banner</span>
                            <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
                        </a>
                    </li>
                    <li class="treeview<?php if($Config_Title_Class == "技術技能") echo " active"; ?>">
                        <a href="technology_index.php">
                            <i class="fa fa-book"></i>
                            <span>技術技能</span>
                            <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
                        </a>
                    </li>
                    <li class="treeview<?php if($Config_Title_Class == "系統設定") echo " active"; ?>">
                        <a href="#">
                            <i class="fa fa-cog"></i> <span>系統設定</span>
                            <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
                        </a>
                        <ul class="treeview-menu">
                            <li >
                                <a href="admin_index.php"><i class="fa fa-circle-o"></i>
                                    管理員
                                </a>
                            </li>
                            <!--
                            <li >
                                <a href="google_analytics.php"><i class="fa fa-circle-o"></i>
                                    Google Analytics 流量分析
                                </a>
                            </li>
                            -->
                        </ul>
                    </li>
                    
                </ul>
            </section>
            <!-- /.sidebar -->
        </aside>
