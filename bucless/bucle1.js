let suma = 3
let total = 0


while (suma <= 10000){
    console.log(`Total: ${total}. Suma ${suma}.`);
    total = total + suma;
    suma = suma + 3;
}
console.log (`La suma es ${total}`);