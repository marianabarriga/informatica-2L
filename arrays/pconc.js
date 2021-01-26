let cantidadPalabras;
    do {
    cantidadPalabras = parseFloat(prompt("Ingrese cantidad de  palabras"))
    } while (isNaN(cantidadPalabras) ||  cantidadPalabras < 1);
    let  arraypalabras=[];
    let i=0;
while(i<cantidadPalabras){
    let Palabra = prompt("Ingrese la palabra")
        i=i+1;
        arraypalabras.push(Palabra);
}
let largo=0;
largo=arraypalabras.length;
let a=0;
let concatenar="";
while(a<largo){
   concatenar+=arraypalabras[a] + " ";
   a=a+1;
}
alert(`La palabra ${concatenar}`);