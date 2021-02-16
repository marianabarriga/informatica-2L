let num1;
do {
    num1 = parseFloat(prompt("Ingrese un numero"));
} while (isNaN(num1) || num1 < 1);

        let nLinea1 = 0;
        while (nLinea1 < num1) {
        let linea1 = "";
        let nColumna1 = 0;
        while(nColumna1<nLinea1)
            nColumna1=nColumna1+1;
            linea1 = linea1  + " ";

        }
        nColumna1 = 0;
        while (nColumna1 < num1) {
            
            nColumna1=nColumna1+1;
            linea1 = linea1 + "*";
        }   
        console.log(linea1);
        nLinea1 = nLinea1 + 1;
