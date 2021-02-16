let boton1 = document.querySelector ("#button1")
let boton2 = document.querySelector ("#button2")
let boton3 = document.querySelector ("#button3")

let p1 = document.querySelector ("#p1")
let p2 = document.querySelector ("#p2")
let p3 = document.querySelector ("#p3")

boton1.onclick = cambioColor;
boton2.onclick = a1;
boton3.onclick = a2;

function cambioColor(){
    let a = Math.floor(Math.random()* 226)
    let b = Math.floor(Math.random()* 226)
    let c = Math.floor(Math.random()* 226)
    p1.style.color = `rgb(${a},${b},${c})`;
}

function a1(){
    if(p2.style.display == "block"){
        p2.style.display == "none"
    } else {
        p2.style.display == "block"
    }
}

function a2(){
    p3.style.color =="none"
    setTimeout(aparecer,5000);
}

function a3(){
    p3.style.display == "block"
}