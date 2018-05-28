// JavaScript Document
$(function(){

    $('.fix_button').click(function(){
  
		var title = $(this).attr("title");
		var page  = $(this).attr("data-page");
		var campaignCode = $('input[name=campaignCode]').val() != "" && $(this).attr("id") == "VipService" ? $('input[name=campaignCode]').val() : "";
        
        if(title != '' && page != ''){
			$.ajax({
			
			       type:'POST',
				   url:'ajax/click.php',
				   data:{title:title,page:page,campaignCode:campaignCode},
				   dataType:'json',
				   success:function(ret){
				   
				           if(ret.status == false){
						   
						      alert("alert content error");
							 
						   }
				   
				   },
				   // error:function(ret){alert("ajax error");console.log(ret)}
				   error:function(ret){}
			
			});
	    }

    });

});