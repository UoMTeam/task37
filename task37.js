/**
 * Created by jiangyiming on 4/25/16.
 */

function onShow() {
    event.stopPropagation();
    var oBtn = document.getElementById("btn");
    oBtn.style.display = "none";
    var oMainbody = document.getElementsByClassName("mainbody")[0];
    oMainbody.className = "mainbody show";
    var oShow = document.getElementById("show");
    oShow.top = (document.body.clientHeight - oShow.height) / 2;
    oShow.left = (document.body.clientWidth - oShow.width) / 2;
    oShow.style.display = "block";
}
function close() {
    var oShow = document.getElementById("show");
    var oBtn = document.getElementById("btn");
    oBtn.style.display = "block";
    var oMainbody = document.getElementsByClassName("mainbody")[0];
    oMainbody.className = "mainbody";
    oShow.style.display = "none";
}

function fnDown(event){
    var oShow=document.getElementById("show"),
        disX=event.clientX-oShow.offsetLeft,
        disY=event.clientY-oShow.offsetTop;
    document.onmousemove=function(event){
        fnMove(event,disX,disY);
    };
    document.onmouseup=function(){
        document.onmousemove=null;
        document.onmouseup=null;
    }
}

function fnMove(e,posX,posY){
    var oShow=document.getElementById("show"),
        l=e.clientX-posX,
        t=e.clientY-posY,
        winW=document.documentElement.clientWidth,
        winH=document.documentElement.clientHeight,
        maxW=winW-oShow.offsetWidth,
        maxH=winH-oShow.offsetHeight;
    if(l<0){
        l=0;
    }else if(l>maxW){
        l=maxW;
    }
    if(t<0){
        t=0;
    }else if(t>maxH){
        t=maxH;
    }
    oShow.style.left=l+'px';
    oShow.style.top=t+'px';
}

window.onload = function () {
    document.getElementById("mainbody").addEventListener("click", close, false);
    document.getElementById("btn").addEventListener("click", onShow, false);
    document.getElementById("btnclose").addEventListener("click", close, false);
    document.getElementById("showTop").addEventListener("mousedown",fnDown,false);
}