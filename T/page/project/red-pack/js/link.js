$(function(){
	
//	只允许微信登陆
    // 对浏览器的UserAgent进行正则匹配，不含有微信独有标识的则为其他浏览器
//  var useragent = navigator.userAgent;
//  if (useragent.match(/MicroMessenger/i) != 'MicroMessenger') {
//      alert('已禁止本次访问：您必须使用微信内置浏览器访问本页面！');
//      var opened = window.open('about:blank', '_self');
//      opened.opener = null;
//      opened.close();
//  }

	
//	点击首页去发红包
	$("#home-go-red-pack").on("click",function(){
		window.location.href="go-give-red-pack.html"; 
	});
	
	
//	点击左边导航栏的拼手气红包详情
	$("#nav-left-ul").on("click",".spell-red-pack",function(){
		window.location.href="receive-pack-spell.html"; 
	});
//	点击左边导航栏的普通红包详情
	$("#nav-left-ul").on("click",".normal-red-pack",function(){
		window.location.href="receive-pack-spell-normal.html"; 
	});
//	点击右边导航栏的红包详情
	$("#nav-right-ul").on("click","li",function(){
		window.location.href="receive-pack-give.html"; 
	});
//	点击继续发送
    $("#send-on").on("click",function(){
		window.location.href="go-give-red-pack-go.html";
	});
	
//	点击拆红包
    $("#red-pack-share-send-chai").on("click",function(){
		window.location.href="use-red-pack.html"; 
	});	

//	点击花红包
    $("#use-red-pack-img1").on("click",function(){
		window.location.href="use-red-pack-1.html"; 
	});	
	
//	抢到红包返回去看看大家的手气
    $(".red-pack-dialog-foot").on("click",function(){
		window.location.href="use-red-pack.html"; 
	});	
//	没抢到红包去看看大家的手气
    $("#red-pack-over-look").on("click",function(){
		window.location.href="open-red-pack-over-look.html"; 
	});	
//	红包过期去看看大家的手气
    $("#red-pack-overdue-look").on("click",function(){
		window.location.href="open-red-pack-overdue-look.html"; 
	});	
//	发红包的人看到红包过期页面点击跳转去发红包
    $("#my-red-pack-overdue-look").on("click",function(){
		window.location.href="go-give-red-pack.html"; 
	});		
	
	
	
	
});
