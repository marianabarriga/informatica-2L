let num4;
do {
    num4 = parseFloat(prompt("Ingrese un numero"));
} while (isNaN(num4) || num4 < 1);



let nLinea4 = 0;
while (nLinea4 < num4) {
    let linea4 = "";
    let nColumna4 = 0;
    
    while (nColumna4 < nLinea4+1) {
                
        nColumna4=nColumna4+1;
        linea4 = linea4 + "*";
    }   
    console.log(linea4);
    nLinea4 = nLinea4 + 1;
 }
