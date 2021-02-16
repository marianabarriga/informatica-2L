let alimentos = [
    {nombre: "Pan"},
    {nombre: "Arroz"},
    {nombre: "Huevos"},
    {nombre: "Carne"},
    {nombre: "Pescado"},
]
let tabla1 = document.querySelector('#alimentos')
let contenidoTabla1 = '<tr><th>Nombre</th><</tr>'
for (alimento of alimentos){
    contenidoTabla1 = contenidoTabla1 + `<tr><td>${alimento.nombre}</td></tr>`
}
tabla1.innerHTML = contenidoTabla1