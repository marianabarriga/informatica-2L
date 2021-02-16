let a = parseFloat(prompt("ingrese un numero"))
let b = parseFloat(prompt("ingrese un numero"))

if (b==0){
    alert ("No es posible calcular la división y el módulo")
}

console.log(`La suma es: ${a + b}`);
console.log(`La resta es: ${a - b}`);
console.log(`La multiplicación es: ${a * b}`);
console.log(`La división es: ${a / b}`);
console.log(`El modulo es: ${a % b }`);