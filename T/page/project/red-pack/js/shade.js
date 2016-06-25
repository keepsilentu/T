$(function(){
	$("#red-pack-share-send-fa").on("touchstart",function(){
		$(".shade-div").css("display","block");
		$("#red-pack-share-send").css("display","block");
	})
	
	$(".shade-div").on("touchstart",function(){
		$(".red-pack--dialog").css("display","block");
		$("#red-pack-share-send").css("display","none");
	});
	
/*	$(".shade-div").on("touchstart",function(){
		window.location.href="open-red-pack-dialog.html";
	});*/
})