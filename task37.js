/**
 * Created by jiangyiming on 4/25/16.
 */

function onShow() {
    event.stopPropagation();
    var oBtn = document.getElementById("btn");
    var oShow = document.getElementById("show");
    var oMainbody = document.getElementsByClassName("mainbody")[0];
    oBtn.style.display = "none";
    oMainbody.className = "mainbody show";
    oShow.top = (document.body.clientHeight - oShow.height) / 2;
    oShow.left = (document.body.clientWidth - oShow.width) / 2;
    oShow.style.display = "block";
}
function close() {
    var oMainbody = document.getElementsByClassName("mainbody")[0];
    var oShow = document.getElementById("show");
    var oBtn = document.getElementById("btn");
    oBtn.style.display = "block";
    oMainbody.className = "mainbody";
    oShow.style.display = "none";
}

function fnDown(event) {
    var oShow = document.getElementById("show"),
        disX = event.clientX - oShow.offsetLeft,
        disY = event.clientY - oShow.offsetTop;
    document.onmousemove = function (event) {
        fnMove(event, disX, disY);
    };
    document.onmouseup = function () {
        document.onmousemove = null;
        document.onmouseup = null;
    }
}

function fnMove(e, posX, posY) {
    var oShow = document.getElementById("show"),
        l = e.clientX - posX,
        t = e.clientY - posY,
        winW = document.documentElement.clientWidth,
        winH = document.documentElement.clientHeight,
        maxW = winW - oShow.offsetWidth,
        maxH = winH - oShow.offsetHeight;
    if (l < 0) {
        l = 0;
    } else if (l > maxW) {
        l = maxW;
    }
    if (t < 0) {
        t = 0;
    } else if (t > maxH) {
        t = maxH;
    }
    oShow.style.left = l + 'px';
    oShow.style.top = t + 'px';
}
function addEventHandler(ele, event, hanlder) {
    if (ele.addEventListener) {
        ele.addEventListener(event, hanlder, false);
    } else if (ele.attachEvent) {
        ele.attachEvent("on" + event, hanlder);
    } else {
        ele["on" + event] = hanlder;
    }
}
window.onload = function () {
    var oMainbody = document.getElementById("mainbody");
    var oBtn = document.getElementById("btn");
    var oBtnclose = document.getElementById("btnclose");
    var oShowTop = document.getElementById("showTop");
    addEventHandler(oMainbody, "click", close);
    addEventHandler(oBtn, "click", onShow);
    addEventHandler(oBtnclose, "click", close);
    addEventHandler(oShowTop, "mousedown", fnDown);

};