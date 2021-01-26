let = ancho6
let = alto6

do{
    ancho6=parseFloat(prompt("Ingrese el ancho"))
} while (isNaN(ancho6) ancho6<1)

do{
    alto6=parseFloat(prompt("Ingrese el alto"))
} while(isNaN(alto6)alto6<1);

let nLinea6=0
while(nLinea6<alto6){
    linea6=""
    nColumna6=0
    while (nColumna6<ancho){
        if(nLinea6==nColumna6){
          linea6=linea6+ " ";
        } else{
            linea6=linea6+"*";
        }
        nColumna6=nColumna6+1
    }
    console.log(linea6)
    nLinea6=nLinea6+1
}
