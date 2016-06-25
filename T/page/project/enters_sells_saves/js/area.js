/*
*	三级类目 js版
*/
function Dsy(){
	this.Items = {};
}
Dsy.prototype.add = function(id,iArray){
	this.Items[id] = iArray;
}
Dsy.prototype.Exists = function(id){
	if(typeof(this.Items[id]) == "undefined") return false;
	return true;
}

function change(v){
	var str="0";
	for(i=0;i<v;i++){
		str+=("_"+(document.getElementById(s[i]).selectedIndex-1));
	};
	var ss=document.getElementById(s[v]);
	with(ss){
		length = 0;
		options[0]=new Option(opt0[v],opt0[v]);
		if(v && document.getElementById(s[v-1]).selectedIndex>0 || !v){
			if(dsy.Exists(str)){
				ar = dsy.Items[str];
				for(i=0;i<ar.length;i++){
					options[length]=new Option(ar[i],ar[i]);
				}//end for
				if(v){ options[0].selected = true; }
			}
		}//end if v
		if(++v<s.length){change(v);}
	}//End with
}

var dsy = new Dsy();

dsy.add("0",["服装鞋包","手机数码","家用电器",]);
dsy.add("0_0_0",["半身裙","背心吊带","衬衫"]);
dsy.add("0_0_1",["背心/马甲","衬衫","西装"]);
dsy.add("0_0_2",["凉鞋","帆布鞋","高帮鞋"]);
dsy.add("0_0",["女装/女士精品","男装","女鞋"]);
dsy.add("0_1_0",["其他变压器","电力变压器","电压互感器"]);
dsy.add("0_1_1",["国货精品笔记本","国货精品手机"]);
dsy.add("0_1",["电子元器件市场","国货精品数码","手机"]);
dsy.add("0_2_0",["冰箱","集成灶","嵌入式微波炉","嵌入式烤箱","嵌入式蒸箱"]);
dsy.add("0_2_1",["CD播放机","电脑多媒体音箱","耳机/耳麦","工程解决方案"]);
dsy.add("0_2_2",["抽湿器/除湿器","超声波洗衣机","擦鞋器","擦窗机器人","除螨仪"]);
dsy.add("0_2",["大家电","影音电器","生活电器"]);


dsy.add("0",["服装鞋包","手机数码","家用电器",]);

var s=["s_province","s_city","s_county"];//三个select的name
var opt0 = ["一级类目","二级类目","三级类目"];//初始值
function _init_area(){  //初始化函数
	for(i=0;i<s.length-1;i++){
	  document.getElementById(s[i]).onchange=new Function("change("+(i+1)+")");
	}
	change(0);
}
