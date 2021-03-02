let contador

if (contador == null){
    contador == 0
    localStorage.setItem ("contador", JSON.stringify(contador))
    console.log("no existe")
} else {
        contador= JSON.parse(localStorage.getItem("contador"))
        contador = contador + 1;
        localStorage.setItem("contador", JSON.stringify(contador))
        console.log ("si existe el contador")
}

alert(`Se ha ingresado a la página web ${contador} veces`)