let canvas = document.querySelector("#miCanvas")
let ctx = canvas.getContext("2d")
ctx.fillStyle = "orange"
ctx.strokeStyle = "black"
ctx.fillRect(50, 0 , 100, 45)
ctx.fillStyle = "salmon"

ctx.lineWidth= 1
ctx.strokeRect(50,0,100, 45)
ctx.strokeRect(50,15,100, 15)

ctx.beginPath()
ctx.fillArc= "black"
ctx.arc(150, 23, 23, Math.PI*1.5, 2.5* Math.PI);
ctx.fill()

ctx.moveTo(0, 23)
ctx.lineTo(50, 0)
ctx.moveTo(0, 23)
ctx.lineTo(50, 45)
ctx.moveTo(0, 23)
ctx.lineTo(20, 15)
ctx.moveTo(0, 23)
ctx.lineTo(20, 30)
ctx.lineTo(20, 15)
ctx.stroke()
ctx.stroke()
ctx.fillStyle = "black"
ctx.fill()
ctx.moveTo(0,50)

ctx.fillStyle = "black"
ctx.fillRect(17,65,150,250)
ctx.fillStyle = "grey"
ctx.fillRect(25,80,135,225)
ctx.endPath()
