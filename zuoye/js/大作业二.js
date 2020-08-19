//轮播图
function animate(obj,json,callback){      
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){ 
        var isStop = true;
        for (var attr in json){
            if(attr=='opacity'){
                var now = parseInt(getStyle(obj,attr)*100);
            }else{
                var now = parseInt(getStyle(obj,attr));
        } 
        var speed = (json[attr]-now)/5;
        speed = speed>0?Math.ceil(speed):Math.floor(speed);
        if (attr=='opacity') {
            obj.style[attr]=(now+speed)/100;
        }else{
            obj.style[attr]=now+speed+'px';
        }
        var current = now+speed;
        if(json[attr]!==current){
            isStop = false;
        }
    }                   
    if(isStop){
        clearInterval(obj.timer)
        callback&&callback();
    }
    },10)
}
function getStyle(obj,style){
    if(getComputedStyle(obj)){
        return getComputedStyle(obj)[style];
    }else{
        obj.currentStyle[style];
    }       
}

//侧边浮动
// var fir=document.getElementsByClassName("fir");
// var sedpp=document.getElementsByClassName("sedpp");
// var thi=document.getElementsByClassName("thi");
// var fiv=document.getElementsByClassName("fiv");
// fir.onmouseover=function(){
//     fir.style.right="-1px";
// }
// fir.onmouseout=function(){
//     fir.style.right="-80px";
// }
// sedpp.onmouseover=function(){
//     sedpp.style.right="0px";
// }
// sedpp.onmouseout=function(){
//     sedpp.style.right="-80px";
// }
// thi.onmouseover=function(){
//     thi.style.right="0px";
//     thi.children[1].setAttribute("src","image/erwei.png");
//     thi.children[1].setAttribute("id","bigerwei");
// }
// fiv.onmouseout=function(){
//     fiv.style.right="-82px";
//     fiv.children[1].setAttribute("src","image/serwei.png");
//     divde.children[1].setAttribute("id","righte");
// }

        rone.onmouseover = function(){
            rone.style.width = '120px';
        }
        rone.onmouseout = function(){
            rone.style.width = '45px';
        }
        rtwo.onmouseover = function(){
            rtwo.style.width = '120px';
        }
        rtwo.onmouseout = function(){
            rtwo.style.width = '45px';
        }
        rthree.onmouseover = function(){
            rthree.style.width = '120px';
            var four = document.getElementById('four');
            four.src = 'image/erwei.png';
            four.style.marginTop='0';
            four.style.marginLeft = '10px';
        }
        rthree.onmouseout = function(){
            rthree.style.width = '45px';
            var four = document.getElementById('four');
            four.src = 'image/serwei.png';
            four.style.marginTop='40px';
            four.style.marginLeft = '10px';
        }
        rfour.onmouseover = function(){
            rfour.style.width = '120px';
        }
        rfour.onmouseout = function(){
            rfour.style.width = '45px';
        }