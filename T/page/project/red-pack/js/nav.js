//导航栏tpb切换JS
$(function(){
	
//	首页navtab
		var a={
		color: "yellow",
		backgroundColor: "#BE2721",
		}
		var b={
			color: "white",
			backgroundColor: "#C0332C",
		}
	$("#nav-right").on('click',function(){
		$("#nav-left").css(a);
		$("#nav-right").css(b);
		$("#nav-left-ul").hide();
		$("#nav-right-ul").show();
	})
	
	$("#nav-left").on('click',function(){
		$("#nav-left").css(b);
		$("#nav-right").css(a);
		$("#nav-right-ul").hide();
		$("#nav-left-ul").show();
	})
	
//	发红包界面navtab
	$("#gp-nav-right").on("click",function(){
		$("#gp-div-left").hide();
        $("#gp-div-right").show();
        $("#gp-nav-left").css("border","none");
        $("#gp-nav-right").css("border-bottom","3px solid #D72E24");
	})
	$("#gp-nav-left").on("click",function(){
        $("#gp-div-right").hide();
        $("#gp-div-left").show();
        $("#gp-nav-right").css("border","none");
        $("#gp-nav-left").css("border-bottom","3px solid #D72E24");
	})
	
})
