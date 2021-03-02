let contador

if (contador == null){
    contador = 1
    localStorage.setItem ("contador", JSON.stringify(contador))
    console.log("no existe")
    console.log `ha ingresado ${contador} veces`

} else {
        contador= JSON.parse(localStorage.getItem("contador"))
        contador = contador + 1;
        localStorage.setItem("contador", JSON.stringify(contador))
        console.log ("si existe el contador")
        console.log `ha ingresado ${contador} veces`
}

alert(`Se ha ingresado a la página web ${contador} veces`)