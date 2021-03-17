let tareas = JSON.parse(localStorage.getItem("tareas"));
if (tareas == null) tareas = [];

let tareas = [
    {materia:"", descripción:"", fecha:""}
]
let tabla = document.querySelector ('#tareas')

function llenarTabla(){
    let contenidoTabla = '<tr><th>Materia</th><th>Descripción</th><th>Fecha</th></tr>'
    for (tarea of tareas){
        contenidoTabla = contenidoTabla + `<tr><td>${tareas.materia}</td><td>${tareas.descripción}</td><td>${tareas.fecha}</td><tr/>`
}
tabla.innerHTML = contenidoTabla
}

let form = document.querySelector("#formularioAdd");

function addTarea(){
    let materianueva = document.querySelector("input[name=materia]").value
    let descripciónnueva = document.querySelector("input[name=descripción]").value
    let fechanueva = document.querySelector("input[name=fecha]").value
    let tareanueva = {materia = materianueva, descripción = descripciónnueva, fecha = fechanueva}
    console.log ("Ahora voy a añadir la siguiente tarea");
    console.log(tareanueva)
    tareas.push(tareanueva)
    llenarTabla()
    localStorage.setItem("tareas", JSON.stringify(tareas))
}


form.onsumbit = addTarea

llenarTabla();

