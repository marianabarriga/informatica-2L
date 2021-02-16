let ancho5;
let alto5;
do {
    ancho5 = parseFloat(prompt("Ingrese el ancho"));
} while (isNaN(ancho5) || ancho5 < 1);

do {
    alto5 = parseFloat(prompt("Ingrese el alto"));
} while (isNaN(alto5) || alto5 < 1);

let nLinea5 = 0;
while(nLinea5<alto5){
    linea5=""
    nColumna5=0
    while(nColumna5<ancho5){
        if(nLinea5<=nColumna5){
            linea5=linea5+"*"

        } else{
            linea5=linea5+" "
        }
        nColumna5=nColumna5+1
    }
console.log(linea5)
nLinea5=nLinea5+1
}
