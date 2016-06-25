$(function(){
//	nav focus颜色变化js
	$("#nav").on("click","a",function(){
		$(this).siblings().css("background","")
		$(this).css("background","#be002f");
		$("#top-home").css("background-image","url(img/10961577,400,300.jpg)");
	});
	
//	点击项目加载左边left和右边main
    $("#top-project").on("click",function(){
	  $("#main").load("page/project/project.html #project-main");
	  $("#left").load("page/project/project.html #project-left")
});

//	点击Demo加载左边left和右边main
    $("#top-demo").on("click",function(){
	  $("#main").load("page/demo/demo.html #demo-main");
	  $("#left").load("page/demo/demo.html #demo-left")
});


//	点击框架加载左边left和右边main
    $("#top-frame").on("click",function(){
	  $("#main").load("page/frame/frame.html #frame-main");
	  $("#left").load("page/frame/frame.html #frame-left")
});


//	点击模板加载左边left和右边main
    $("#top-template").on("click",function(){
	  $("#main").load("page/template/template.html #template-main");
	  $("#left").load("page/template/template.html #template-left")
});

})