let frutas = [
    {nombre: "Cereza", color:"Rojo", tamaño: "Pequeño", imagen: "https://storage.googleapis.com/portalfruticola/2019/12/40af7ccd-cerezas-adobestock_65867905-e1581534170908.jpeg"},
    {nombre: "Mango", color:"Naranja", tamaño: "Mediano", imagen: "https://i.blogs.es/d3c49b/mango/840_560.jpg"},
    {nombre: "Piña", color:"Amarillo", tamaño:"Grande", imagen:"https://occidente.co/wp-content/uploads/2020/03/fruta-pina.jpg"},
    {nombre: "Limón", color:"Verde", tamaño:"Pequeño", imagen:"https://st1.uvnimg.com/dims4/default/0284847/2147483647/thumbnail/1240x698/quality/75/?url=http%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Ff6-d1-18796ca148ee9bf6cda0f7bf080c-shutterstock-341830076.jpg"},
    {nombre: "Toronja", color:"Rojo", tamaño:"Mediano", imagen:"https://hdstatic.net/gridfs/holadoctor/_0_29-1582150775,935.jpg"},
    {nombre: "Mora", color:"Morado", tamaño:"Pequeño", imagen:"https://www.herbazest.com/imgs/c/4/2/752812/mora.jpg"},
]
let tabla = document.querySelector('#frutas')
let contenidoTabla = '<tr><th>Nombre</th><th>Color</th><th>Tamaño</th><th>Imagen</th></tr>'
for (fruta of frutas){
    contenidoTabla = contenidoTabla + `<tr<tr><td>${fruta.nombre}</td><td>${fruta.color}</td><tr><td>${fruta.tamaño}</td>
    <td><img width="500px" src="${fruta.imagen}" alt=""></td></tr>`
}
tabla.innerHTML = contenidoTabla