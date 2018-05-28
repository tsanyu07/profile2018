<?php
    require_once("_inc.php");
    require_once("valid.php");

    //////////設定參數//////////////////////////////////////////////////

    //分類名稱
    $Config_Title_Class         = "商品管理";

    //模組名稱
    $Config_Title_Name          = "商品管理";

    //資料庫表單
    $Config_Table_Main          = DBTable_Product;
    $Config_Table_Class         = DBTable_Product_Class;
    $Config_Table_Download      = DBTable_Product_Download;

    //資料庫表單欄位
    $Config_Table_Main_ID       = 'product_id'; 
    $Config_Table_Class_ID      = 'product_class_id';                                

    //預設每頁顯示數量
    $Config_Default_Show_Num    = 10;                                

?>