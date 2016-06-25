

    $ (function ()
    {
        $ ('#refundOk').click (function ()
        {
            $ ('#waitimg,#light1').show ().delay (2000).fadeOut (100,function(){
            	$ ('#prompt,#light1').show();
            });
           
        });
    });



function show(light,light1,refund,refundDel,prompt,waitimg){
 var light=document.getElementById(light);
 var light1=document.getElementById(light1);
 var refund=document.getElementById(refund);
 var refundDel=document.getElementById(refundDel);
 var prompt=document.getElementById(prompt);
 var prompt=document.getElementById(waitimg);
 light.style.display='block';
 light1.style.display='block';
 refund.style.display='block';
 refundDel.style.display='block';
 prompt.style.display='block';
 waitimg.style.display='block';
 }
function hide(refund){
 var light=document.getElementById("light");
 var light1=document.getElementById("light1");
 var refund=document.getElementById("refund");
 var refundDel=document.getElementById("refundDel");
 var prompt=document.getElementById("prompt");
 light.style.display='none';
 light1.style.display='none';
 refund.style.display='none';
 refundDel.style.display='none';
 prompt.style.display='none';
}
/*$(document).bind('keydown', 'esc',function (evt){
　　//关闭层代码
hide () ;
　　return false; });*/
