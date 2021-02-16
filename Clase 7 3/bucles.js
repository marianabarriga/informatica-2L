let total = 0
let sumando = 1
while (sumando <= 0){
    console.log(`Total:${total}. Sumando ${sumando}`);
    total = total + sumando;
    sumando = sumando + 1;

}
 console.log(`La suma es ${total}`);

 let numero ;
 do{
     numero = parseFloat(prompt ('Ingrese número'));
    
 }
 while (numero < 0 || isNaN(numero));
 console.log(`La raíz cuadrada es: ${Math.sqrt(numero)}`);