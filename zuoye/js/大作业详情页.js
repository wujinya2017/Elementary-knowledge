//表头
window.onload=function(){
    var coverr=document.getElementById("coverrr");
    window.onscroll=function(){
	    var st=document.documentElement.scrollTop || document.body.scrollTop;
	    if (st>136) {
	        coverr.style.position='fixed';
	    }else{
	        coverr.style.position='static';
	    }
    }
}

function keyup(){
	var quantity = document.getElementById("quantity").value;
	if(isNaN(quantity) ||  parseInt(quantity)!=quantity || parseInt(quantity)<1){
		quantity = 1;
		return;
    }
	if(quantity>=6){
		document.getElementById("quantity").value=quantity.substring(0,quantity.length-1);
	}
}
 
/*商品数量+1*/
function numAdd(){
	var quantity = document.getElementById("quantity").value;
 	var num_add = parseInt(quantity)+1;
 	var price=document.getElementById("price").value;
 	if(quantity==""){
 	 	num_add = 1;
 	}
 	if(num_add>=6){
 		document.getElementById("quantity").value=num_add-1;
  	}else{
	  	document.getElementById("quantity").value=num_add;
	  	var Num=price*num_add;
	  	document.getElementById("totalPrice").innerHTML=Num.toFixed(2);
  	}
}
/*商品数量-1*/
function numDec(){
	var quantity = document.getElementById("quantity").value;
	var price=document.getElementById("price").value;
 	var num_dec = parseInt(quantity)-1;
 	if(num_dec>0){
 		document.getElementById("quantity").value=num_dec;
 		var Num=price*num_dec;
 		 document.getElementById("totalPrice").innerHTML=Num.toFixed(2);
 	}
}

var pp2=document.getElementById("buttonn");
var cover=document.getElementById('coverver');
var tanchuang=document.getElementById('tanchuang');
var hh=document.getElementById('hhaa');
var hh1=document.getElementById('hh1aa');
 function fun()
  {
       cover.style.display="block";
       tanchuang.style.display='block';
  }
function fun1()
  {
    cover.style.display="none";
    tanchuang.style.display='none';
  }
function fun2()
  {
    cover.style.display="none";
    tanchuang.style.display='none';
  }


var six1=document.getElementById("six1");
var six2=document.getElementById("six2");
var kk=document.getElementById("kk");
six1.onclick=function(){
	six1.id="six1";
	six2.id="six2";
	kk.innerHTML='"150ml"';
}
six2.onclick=function(){
	six1.id="six2";
	six2.id="six1";
	kk.innerHTML='"200ml"';
}

//放大镜
var dda=document.getElementById("dda");
var ddb=document.getElementById("ddb");
var ddc=document.getElementById("ddc");
var img2=document.getElementById("img2");
var slider=document.getElementById("slider");

dda.onclick=function(){
	ddb.innerHTML='<img src="image/pp0.jpeg">';
}
ddc.onclick=function(){
	ddb.innerHTML='<img src="image/pp1.jpeg">';
}
ddd.onclick=function(){
	ddb.innerHTML='<img src="image/pp0.jpeg">';
}
dde.onclick=function(){
	ddb.innerHTML='<img src="image/pp1.jpeg">';
}

ddb.onmouseover=function(){
	slider.style.display='block';
	img2.style.display='block';
	if(ddb.innerHTML=='<img src="image/pp0.jpeg">'){
		img2.innerHTML='<img src="image/pp0.jpeg" id="Bimg">';
	}else if (ddb.innerHTML=='<img src="image/pp1.jpeg">') {
		img2.innerHTML='<img src="image/pp1.jpeg" id="Bimg">>'
	}
}
ddb.onmouseout=function(){
	slider.style.display='none';
	img2.style.display='none';
}

ddb.onmousemove=function(ev){//事件对象ev
	var Bimg=document.getElementById("Bimg");

	var oL=ev.clientX-ddb.offsetLeft-slider.offsetWidth/2;
	var oT=ev.clientY-ddb.offsetTop-slider.offsetHeight/2;
	var oMaxw=ddb.offsetWidth-slider.offsetWidth;
	var oMaxh=ddb.offsetHeight-slider.offsetHeight;
	oL=oL>oMaxw?oMaxw:oL<0?0:oL;
	oT=oT>oMaxh?oMaxh:oT<0?0:oT;
	slider.style.left=oL+ddb.offsetLeft+'px';
	slider.style.top=oT+ddb.offsetTop+'px';
	var scale=Bimg.offsetHeight/ddb.offsetHeight;
	Bimg.style.left=-oL*scale+'px';
	Bimg.style.top=-oT*scale+'px';
}