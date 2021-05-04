let canvas = document.querySelector("#movimiento")

let ctx = canvas.getContext("2d")

ctx.lineWidth= 1

function dibujarPeon (xC, yC, tam, color) {
    ctx.fillStyle = color
    ctx.strokeStyle = "black"
    ctx.beginPath()
    ctx.arc(xC, yC, tam, Math.PI*0, 2*Math.PI)
    ctx.fill()
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(xC-(tam/(5/3)),yC+(tam/(5/3)))
    ctx.lineTo(xC-(tam/(5/7)),yC+(tam/(5/11)))
    ctx.lineTo(xC+(tam/(5/7)),yC+(tam/(5/11)))
    ctx.lineTo(xC+(tam/(5/3)),yC+(tam/(5/3)))
    ctx.stroke()
    ctx.fill()
    }

let x = 0;
let y = 200;
let vX = 40;
let x1 = 200;
let y1 = 0;
let vY1 = 200;
let x2 = 400;
let y2 = 0;
let v2 = 100;
let dT = 5;
function animar(){
    ctx.clearRect(0,0, 800, 800);
    let dX = (dT/1000) * vX;
    x = x + dX;
    dibujarPeon(x, y, 30,);
    let dY = (dT/1000) * vY1;
    y1 = y1 + dY;
    dibujarPeon(x1, y1, 30,);
    let dXY = (dT/1000) * v2;
    x2 = x2 - dXY;
    y2 = y2 + dXY;
    dibujarPeon(x2, y2, 30,);
}

window.setInterval(animar, dT);