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
    //event.stopPropagation();
    var oShow = document.getElementById("show");

        var oBtn = document.getElementById("btn");
        oBtn.style.display = "block";
        var oMainbody = document.getElementsByClassName("mainbody")[0];
        oMainbody.className = "mainbody";
        oShow.style.display = "none";

}
window.onload = function () {
    document.getElementById("mainbody").addEventListener("click", close, false);
    document.getElementById("btn").addEventListener("click", onShow, false);
    document.getElementById("btnclose").addEventListener("click", close, false);
}