$(function(){
//	left变化颜色js

//  left title
	$("#left").on("click",".leftmenu",function(){
		$(this).siblings().css("background","");
		
//		$(this).css("background","#9d2933");
		
	});
	
//	left  a
	$("#left").on("click","a",function(){
        $("#left a").css("background","");
        $("#left a").css("color","yellow");
		$(this).css("color","red");
	});
	
//	left border
	$("#left").on("click",".left-title",function(){
        $(".left-title").css("border-left","");
        $(this).css("border-left","4px solid red");
	});
	
	
	
	
//	                           首页left
//	点击首页日记第一个加载右边日记第一个页面
    $("#left-diary-1").on("click",function(){
	$("#main").load("page/home/diary/1.html");
 }); 
 
 
//	点击首页照片生活加载右边生活页面
    $("#left-photo-live").on("click",function(){
	$("#main").load("page/home/photo/live/live.html");
 }); 
 
 //	点击首页照片作品加载右边作品页面
    $("#left-photo-work").on("click",function(){
	$("#main").load("page/home/photo/work/work.html");
 }); 
 
 
 
 
 
 
 
//          项目left
 //	点击项目游戏snake
//  $(".left").on("click","#project-left-snake",function(){
//	$("#main").load("page/project/snake/snake.html");
// }); 
// 
 
 
// 框架left
 //	点击框架第一个加载右边框架第一个页面
//$("#frame-left").on("click","a",function(){
//	$("#main").load("page/frame/angularJS/angular.html");
//	var a="http://www.baidu.com"
//	$("#main").load(a);
// }); 
 

})