
let altura ;
let masa ;
let bmi = masa/ Math.pow (altura);
 do{
     altura = parseFloat(prompt ("Ingrese su altura en m"));
     masa = parseFloat(prompt ('Ingrese su masa en Kg'));
}
while (isNaN (altura) || isNaN (masa) || altura < 0 || masa < 0);
console.log (bmi);
if (bmi <= 18.5){
    alert ("underweight")
}
if (18.5 < bmi < 24.99){
    alert ("normal")
}
if (bmi >= 25){
    alert ("overweight")
}
if (bmi >= 30){
    alert ("obese")
}