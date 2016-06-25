
    // 对浏览器的UserAgent进行正则匹配，不含有微信独有标识的则为其他浏览器
    var useragent = navigator.userAgent;
    if (useragent.match(/MicroMessenger/i) != 'MicroMessenger') {
        // 这里警告框会阻塞当前页面继续加载
        alert('已禁止本次访问：请使用微信客户端扫码二维码');
        // 以下代码是用javascript强行关闭当前页面
        var opened = window.open('about:blank', '_self');
        opened.opener = null;
        opened.close();
    }

/*确定按钮事件*/
	function btnEnter_onclick(){
		var a=$("#myInput span").val();
		alert("确认支付"+a);
	}
	
	/*删除按钮事件*/
	function delimg(){
	$("#myInput em").prev("span").remove();
	}
	

		$("#myInput").on("touchstart","span",function(e){

			//点击数字，清除原有“光标”
			$("#myInput em").remove();

			//点击数字前添加“光标”
			$(this).before("<em></em>");

			//阻止冒泡
			e.stopPropagation();
		});
		$(document).on("touchstart","#myInput",function(){
			// 点击文本框清除原有“光标”
			$("#myInput em").remove();

			//文本框最后添加“光标”
			$(this).append("<em></em>")
		})

		$("#key").on("touchend","a",function(e){
			// 点击“按键”时,清空变量；
			var val="";
			// 取得文本框里的值；
			$("#myInput span").each(function(){
				val+=$(this).html();
			})

			var indexs=val.indexOf(".");
			indexs = indexs ==-1? $("#myInput span").length : indexs;

			// 如果点击的是“小数点”
			if($(this).html()=="."){
				// 如果光标位置处在最后两位数字前，则点击无效；
				if($("#myInput em").index()<($("#myInput span:last").index()-2)) return;

				// 如果文本框已有小数点，刚点击无效
				if(!/\./.test(val)) $("#myInput").find("em").before("<span>"+$(this).html()+"</span>");

				// 如果点击的是C
			}else if($(this).html()=="C"){
                   
				// 删除光标前的数字；
				$("#myInput span").remove();
			}else{
				 if(indexs>=5 && $("em").index()<=5) return false;
				// 其它按键
				// 如果文本框内有两位数小数点
				if(/\.\d{2}/.test(val)){

					// 若光标处于小数点之后，点击无效
					if($("#myInput em").index()>($("#myInput span:last").index()-3)) return;

					// 在光标前插入对应数字
					$("#myInput").find("em").before("<span>"+$(this).html()+"</span>");
				}else{

					// 若没有或小数点位数不足两位，在光标前插入数字;
					$("#myInput").find("em").before("<span>"+$(this).html()+"</span>");
				}

			}
		})