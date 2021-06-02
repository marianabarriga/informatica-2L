let canvas = document.querySelector("#miCanvas")

let ctx = canvas.getContext("2d")

function dibujarBoton(xC, yC, r, color){
   
    ctx.beginPath();
    ctx.strokeStyle = color
    ctx.fillStyle = color;
    ctx.arc(xC, yC, rC, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
    
}

let x = 200;
let y = 30;
let rC = 20;
let color = "yellow"

let vY = 10;
let dT = 30

function moverYDibujar(){
    ctx.clearRect(0,0, 600, 400);
    let dY = dT/1000 *vY
    y = y + dY;
    dibujarBoton(x, y, 10, color);
}

function arrancarOParar(){
    if (vY > 0){
        vY = 0;
    }
    else{
        vY = 10;
    }
}
function aumentarRadio(){
    if (rC>=1)
    rC = rC + 1
}
function disminuirRadio(){
    if (rC>1)
    rC= rC - 1
}
window.setInterval(moverYDibujar, dT);

window.onkeyup = function(event){

    console.log(event.code);
    if (event.code == "Space")
    {
        arrancarOParar();
    }
    if (event.which == "187")
    {
        aumentarRadio();
    }
    if (event.key == "-")
    {
        disminuirRadio();
    }
}

function generarNumero(numero){
	return (Math.random()*numero).toFixed(0);
}
function colorRGB(){
	var color = "("+generarNumero(255)+"," + generarNumero(255) + "," + generarNumero(255) +")";
	return "rgb" + color;
}
function CambiarColorPelota(){
    color = colorRGB()
}
window.onclick = function(event){
    console.log(`Se hizo click en las coordenadas ${event.offsetX}, ${event.offsetY}`)
    console.log(`Las coordenadas de la pelota son ${x}, ${y}, el radio es ${rC}`)
    let Xm = event.offsetX
    let Ym = event.offsetY
    distancia = Math.sqrt (Math.pow (Xm - x,2)+ Math.pow (Ym - y,2))
    if (distancia <= rC) {
        CambiarColorPelota()
    }
    else { vY = -vY}
}