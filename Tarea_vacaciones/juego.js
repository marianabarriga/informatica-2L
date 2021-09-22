let canvas = document.querySelector("#miCanvas");
let ctx = canvas.getContext("2d");


let drawObj={draw:function(){}}
let IMAGES
let mainInterval
let dT = 30
function loadImages(sources, callback) {
  let images = {};
  let loadedImages = 0;

  let numImages = Object.keys(sources).length;

  for (let src in sources) {
    images[src] = new Image();
    images[src].onload = function () {
      loadedImages++;
      if (loadedImages >= numImages) {
        console.log("aca se define IMAGES")
        callback(images);
      }
    };
    images[src].src = sources[src];
  }
}
let sources = {
  darthVader:
    "http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg",
  yoda: "http://www.html5canvastutorials.com/demos/assets/yoda.jpg",
  soccerBall:
    "https://upload.wikimedia.org/wikipedia/commons/d/d3/Soccerball.svg",
};
function start(images) {  
  IMAGES = images
  mainInterval = window.setInterval(drawObj.draw, dT);
}
// function stop(mainInterval){
//   window.clearInterval(mainInterval)
//   console.log("Stopping")
// }
function run(){
  loadImages(sources, start);
}
// La variable images contiene las imagenes cargadas

// console.log(IMAGES)

// Creo un array para almacenar todas las particulas
let balones = []


  let barrita= {
  x:200,
  y:350,
  w:100,
  h:20,
  dibujarse:function(){
    // ctx.drawImage(this.imagen, this.x-this.r, this.y-this.r, 2*this.r, 2*this.r);
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.w, this.h);
    ctx.fillStyle = "rgba(0,0,0,0.5)"
    ctx.stroke();
    ctx.fill();
},
  }
// console.log(images)
let Balon = {
    //PROPIEDADES
    x:200,
    y:0,
    r:15,
    vX: 50,// px por segundo
    vY: -50,
    // imagen: undefined,
    //METODOS
    reboto : false,
    dibujarse:function(){
        // ctx.drawImage(this.imagen, this.x-this.r, this.y-this.r, 2*this.r, 2*this.r);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 2*Math.PI, 0);
        ctx.fillStyle = "rgba(0,0,0,0.5)"
        ctx.stroke();
        ctx.fill();
    },
    moverse:function(){
        this.x = this.x + this.vX * dT/1000;
        this.y = this.y + this.vY * dT/1000;
    
    // choque con la pared de la derecha
    if (400 - this.x < 15) this.vX = -this.vX;
    // choque con la pared superior
    if (this.y - 0 < 15) this.vY = -this.vY;
    // choque con la pared izquierda
    if (this.x - 0 < 15) this.vX = -this.vX;
    if (this.x > barrita.x && this.x < barrita.x + barrita.w && this.y + this.r> barrita.y
        && this.y < barrita.y + barrita.h ) 
    {
        //this.vY = -this.vY;
        if(!this.reboto){
            if ( this.vY > 0) this.vY=-this.vY
            puntaje += 1;
            crearParticula()
            this.reboto=true
        }      

        //if ( this.vY > 0) this.vY=-this.vY
        //puntaje += 1;
        //crearParticula()
        //document.querySelector("#puntaje").innerHTML = puntaje;
      }
    if(this.y < barrita.y - this.r) this.reboto = false
    }

}

let puntaje = 0;
function mostrarPuntaje(){
    ctx.font = "30px Arial";
    ctx.fillStyle = "black"
    ctx.fillText(`Puntaje: ${puntaje}`, 20, 50);
}

function algunaSeSalio(){
    for (let balon of balones){
        // se salió?
        if(balon.x >= 400 + balon.r || balon.x <= -balon.r || 
            balon.y >= 400 + balon.r || balon.y <= -balon.r )
        {
            return true;    
        }
    }
    return false;
}

drawObj.draw =  function(){
    ctx.clearRect(0,0,400,400);
    
    // Si alguna de las particulas se salió, y aún no tiene 10 puntos
    // pierde
    if (puntaje < 10000 && algunaSeSalio() ){
        // detener el juego
        clearInterval(mainInterval);
        // muestrar el mensaje de que perdio
        ctx.font = "50px Arial";
        ctx.fillStyle = "black"
        ctx.fillText(`PERDISTE`, 80, 180);
    }
    mostrarPuntaje()
    for (let balon of balones){
        // console.log(particula)
        balon.dibujarse();
        balon.moverse();
    }
barrita.dibujarse()
    // balon.dibujarse();
    // balon2.dibujarse()
    // balon.moverse();
    // balon2.moverse();
}
run()

function crearParticula(){
    let nuevoBalon = Object.create(Balon)
    
    //asignar x, y, vX y vY
    nuevoBalon.x = 200
    nuevoBalon.y = 50
    // Genero el angulo de manera aleatoria
    // Math.random genera un numero aleatorio entre 0 y 1
    let ang =  Math.PI/2 * Math.random()
    // let v = numero aleatorio
    nuevoBalon.vX = 100 * Math.cos(ang)
    nuevoBalon.vY = 100 * Math.sin(ang)

    // añado el nuevo balón al array de balones
    balones.push(nuevoBalon)
    console.log(balones)
}

// Al hacer click se va a ejecutar la función crear partícula
canvas.onclick = crearParticula

document.onkeydown = function (evento) {
  
    if (evento.key == "m") {
      
      barrita.x = barrita.x + 20;
      
    }
    if (evento.key == "n") {
      
      barrita.x = barrita.x - 20;
      
    }
    
  };