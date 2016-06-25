$(function(){
	
$('.left').on("click",".left-title",function(){
	var $ul = $(this).next('ul');
	$('dl').find($ul).slideToggle();
})

})
