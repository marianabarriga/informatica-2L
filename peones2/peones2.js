let canvas = document.querySelector("#Tabla")
let ctx = canvas.getContext("2d")

ctx.lineWidth= 1

function dibujarPeon (xC, yC, tam, color) {
ctx.fillStyle = color
ctx.strokeStyle = "black"
ctx.beginPath()
ctx.arc(xC, yC, tam, Math.PI*0, 2*Math.PI,);
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

