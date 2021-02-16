function areaCirc(r)
{
    return Math.pow (r,2) * Math.PI
}

function volEsf(r)
{
    return 4/3 * Math.PI * Math.pow (r,3)
}

function max (a,b)
{
    if (a > b) 
        return a
    
    else {
        return b
    }
}

function masLarga (palabra1,palabra2){
    if (palabra1.length > palabra2.length){
        return palabra1
    }
    else {
        return palabra2
    }
}
let palabra1=prompt("ingrese primera palabra")
let palabra2 = prompt ("ingrese segunda palabra")
alert (`La palabra más larga es ${masLarga(palabra1,palabra2)}`)

function masLarga (palabra1,palabra2){
    if (palabra1.length > palabra2.length){
        return palabra1
    }
    else {
        return palabra2
    }
}
let palabra1=prompt("ingrese primera palabra")
let palabra2 = prompt ("ingrese segunda palabra")
console.log (`La palabra más larga es ${masLarga(palabra1,palabra2)}`)

function fibonacci(n){
    if (n > 1){
        return fibonacci (n - 1) + fibonacci (n -2);
    }
    else if(n==1){
        return 1
    }
    else if (n==0){
        return 0
    }
}