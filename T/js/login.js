

$(function(){
	$(".loginbtn").on("click",function(){
		a=$(".loginuser").val();
		b=$(".loginpwd").val();
		if (a=="admin",b=="123456") {	
			window.location.href="index.html";
		} else{
			alert("账号密码错误，请重新输入")
		}
	})
})
