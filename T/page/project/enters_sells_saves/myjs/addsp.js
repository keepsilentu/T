


function deleteRow1(obj) {
var tbody1 = obj.parentNode.parentNode.parentNode;
var table1 = document.getElementById("addTable1");
table1.removeChild(tbody1);
}

/**
*向模板中填充值
*/
function setValue1(){

var tbody1=addRow1();

}

/*
*增加模板行
*/

function addRow1() {
var table1 = document.getElementById("addTable1");
var tbody1 = document.getElementById("templeteTBody1");
var newTBody1 = tbody1.cloneNode(true);
newTBody1.style.display="";
var footTBody1 = document.getElementById("footTbody1");
return table1.insertBefore(newTBody1,footTBody1);
}
/*
*删除模板行
*/



/*计时弹窗*/
function tcc(){
	
	var div1 = document.getElementById("handle11");
	
					div1.style.display="block";
					timer=0;
					clearInterval(timer);
					timer=setInterval(function(){
						div1.style.display="none";
						clearInterval(timer);
					},1000)
					
				
				
			}




		/*計時彈窗*/
				
			/*window.onload=function(){
				var oBtn1=document.getElementById("btn1");
				oDiv=document.getElementById("handle11");
				timer=0;
				oBtn1.onclick=function(){
					oDiv.style.display="block";
					clearInterval(timer);
					timer=setInterval(function(){
						oDiv.style.display="none";
						clearInterval(timer);
					},1000)
					
				}
				
			}*/
			
	