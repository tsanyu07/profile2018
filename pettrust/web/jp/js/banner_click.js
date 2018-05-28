// JavaScript Document
$(function(){
  
  $('.banner_click').click(function(){
  
     var id = $(this).attr("data-id");
	 
	 $.ajax({
	 
	        type:'POST',
			url: 'ajax/banner_click.php',
			data:{id:id},
			dataType:'json',
			success:function(ret){
			
			        if(ret.status == false){
					
					      alert('ajax content error');
					
					}
					
			},
			error:function(){
				  //alert('ajax error');
			}
	 
	 });
  
  });
  
});