let suma4 = 5;
let i = 3;
let total4= 0


while (suma4 <= 10000){
    console.log(`Total: ${total4}. Suma ${suma4}.`);
    if (i<suma4){
        total4 = total4 + i;
        i=i+3
    }
    else if (i>suma4){
        total4 = total4 + suma4
        suma4= suma4 + 5
    }
    else{
        i=i+3
        suma4= suma4 + 5
    }
}
console.log (`La suma es ${total4}`);