function relogio(){

    let elementoID = window.document.getElementById('relogio');
    let horalocal = new Date().toLocaleTimeString('pt-br');
    elementoID.innerHTML = horalocal;
};  

setInterval(relogio, 1000);

var message="";
function clickIE() {if (document.all) {(message);return false;}}
function clickNS(e) {if
(document.layers||(document.getElementById&&!document.all)) {
if (e.which==2||e.which==3) {(message);return false;}}}
if (document.layers)
{document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;}
else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;}

document.oncontextmenu=new Function("return false")