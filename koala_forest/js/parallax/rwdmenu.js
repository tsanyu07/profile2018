$(function() {
// start here

	// 宣告變數
	var menu = $("#submenu");
	var block = "display:block !important;";

	$(".small-submenu").click(function(){
	//點選後會觸發的事件
	
	//如果 menu 有 display:block，就把它移除
	//如果沒有，就把它加上。
		if(menu.attr("style") == block) {
		menu.removeAttr("style");
		} else {
		//在 menu 加上 style="display:block;"
		menu.attr("style", block);
		}
	
	})

})
