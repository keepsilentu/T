$(function(){
	
//	首页日记的情感分类第一篇日记
	$(".main").on("click","#diary-1",function(){
		$("#main").load("page/home/diary/diary-content/1-1.html")
	})
	
//	首页日记的情感分类第而篇日记
	$(".main").on("click","#diary-2",function(){
		$("#main").load("page/home/diary/diary-content/1-2.html")
	})	
})