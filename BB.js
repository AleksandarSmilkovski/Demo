var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
let id = null;
var posX = 20;
var posY = 20;
var angX = Math.random()*2;
var angY = Math.random()*2;
id = setInterval(frame,5);
let ch = null;
ch = setInterval(check, 1);
function check(){
    if(posX>290){
        angX *= -1;
    }
    if(posY>290){
        let signY = Math.sign(angY);
        angY = Math.random()*-2*signY;
    }
    if(posX<10){
        angX *= -1;
    }
    if(posY<10){
        let signY = Math.sign(angY);
        angY = Math.random()*-2*signY;
    }
}
function frame(){
  posX+=angX;
  posY+=angY;
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0,0,300,300);
  ctx.beginPath();
  ctx.strokeStyle = "#0000FF";
  ctx.arc(posX,posY,10,0,Math.PI*360);
  ctx.stroke();
}
