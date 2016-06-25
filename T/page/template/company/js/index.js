$(function(){
//	自适应高度
	var a=$(window).height();
	b=a-95;
	var c=$(".main");
	c.css("height",b);
	
	$(window).resize(function(){
		var a=$(window).height();
	b=a-96;
	var c=$(".main");
	c.css("height",b);
	});
	
	
//	导航栏获得焦点与失去焦点事件

    $(".top-menu li").on("click",function(){
    	
    })
	
	
//	轮播图片
	var d=$(".index-main");
	$("#index-main-nav-1").on("click",function(){
		d.css("background-image","url(img/index-3.png)");
		$(this).css("background-color","red");
		$(this).siblings().css("background-color","greenyellow");
	})
	$("#index-main-nav-2").on("click",function(){
		d.css("background-image","url(img/slider-img2.jpg)");
		$(this).css("background-color","red");
		$(this).siblings().css("background-color","greenyellow");
	})
	$("#index-main-nav-3").on("click",function(){
		d.css("background-image","url(img/1.jpg)");
		$(this).css("background-color","red");
		$(this).siblings().css("background-color","greenyellow");
	})
//轮播尾部


//关于我们nav切换js
            	$(".company-present").on("click",function(){
            		$(".company-present-main").css("display","block");
                    $(".company-culture-main").css("display","none"); 
                    $(".company-us-main").css("display","none"); 
                    $(".company-present").css("border-bottom","2px solid dodgerblue")
                    $(".company-culture").css("border-bottom","none")
                    $(".company-us").css("border-bottom","none")
            	})
            	
                $(".company-culture").on("click",function(){
            		$(".company-present-main").css("display","none");
                    $(".company-culture-main").css("display","block"); 
                    $(".company-us-main").css("display","none"); 
                    $(".company-culture").css("border-bottom","2px solid dodgerblue")
                    $(".company-present").css("border-bottom","none")
                    $(".company-us").css("border-bottom","none")
            	})  
            	
            	$(".company-us").on("click",function(){
            		$(".company-present-main").css("display","none");
                    $(".company-culture-main").css("display","none"); 
                    $(".company-us-main").css("display","block"); 
                    $(".company-us").css("border-bottom","2px solid dodgerblue")
                    $(".company-present").css("border-bottom","none")
                    $(".company-culture").css("border-bottom","none")
            	})   	
//关于我们navjs尾部           	


    
    
    
	
	
})
