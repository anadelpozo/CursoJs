/* console.log("Inicio búsquedas js");
let nodo = document.getElementById('primario')
 $_ ----> j query 
console.log(nodo);
let elemento = document.getElementsByTagName('button')
console.log(elemento)
let clase = document.getElementsByClassName('mt-4')
console.log(clase);

document.getElementById('boton').innerHTML="Esto es algo diferente"

document.querySelector('.asdas') Te permite poner toda la ruta como en css  */

/* let elemento = document.getElementsByTagName('select');
console.log(elemento[0]); */
/* let elemento = document.getElementById('exampleInputProfesion');
console.log(elemento); */
/* let elemento = document.getElementsByClassName('form-control');

for (let index = 0; index < elemento.length; index++) {
    console.log(elemento[index]);
    
} */
let elemento = document.querySelector(".form-control");
console.log(elemento);
/* let elemento = document.querySelectorAll("input");
elemento.forEach(element => {
   console.log(element); 
}); */

/* function botonFormPulsado(nombre, apellido, edad){
console.log("Botón pulsado");
if (nombre.lenght>0 && apellido.lenght>0) {
    alert(`Nombre: ${nombre}\n Apellido: ${apellido}\n Edad: ${edad}`)
    console.log(nombre);
    console.log(apellido);
    console.log(edad);  
} else {
    console.log("Faltan datos");
}
}
function botonFormPulsadoSinParametros() {
    let nombre = document.querySelector('exampleInputNombre');
    let apellido = document.querySelector('exampleInputApellido');
    let edad = document.querySelector('exampleInputEdad');
    if (nombre.lenght>0 && apellido.lenght>0) {
        alert(`Nombre: ${nombre}\n Apellido: ${apellido}\n Edad: ${edad}`)
        console.log(nombre);
        console.log(apellido);
        console.log(edad);  
    } else {
        console.log("Faltan datos");
    }
} */

let buttonForm = document.querySelector("#botonMostrar");
buttonForm.addEventListener("click", (evento) => {
  //console.log(evento);
  let nombre = document.querySelector("#exampleInputNombre").value;
  let apellido = document.querySelector("#exampleInputApellido").value;
  let edad = document.querySelector("#exampleInputEdad").value;
  let profesion = document.querySelector("select#exampleInputProfesion");
  profesion = profesion.selectedOptions[0].value;
  let sexo = document.querySelector("input[name='sexo_grupo']:checked").value;
  let experiencia = document.querySelector("input[type='checkbox']");
  let conexperiencia = "Con experiencia";
  if (nombre.lenght < 0 && apellido.lenght < 0) {
    console.log("Faltan datos");
  } else {
    if (experiencia.checked) {
      document.querySelector("#experienciaPerfil").textContent = conexperiencia;
    }
    document.querySelector("#nombrePerfil").textContent = nombre;
    document.querySelector("#apellidoPerfil").textContent = apellido;
    document.querySelector("#edadPerfil").textContent = edad;
    document.querySelector("#profesionPerfil").textContent = profesion;
    document.querySelector("#sexoPerfil").textContent = sexo;
  }
});
let buttonGuardar = document.querySelector("#botonGuardar");
buttonGuardar.addEventListener("click", (evento) => {
  //console.log('pulsado guardar');
  /*  let contenidoUsuarios = document.querySelector('#contenidoUsuario') //lugar
        let nombre = document.querySelector('#exampleInputNombre').value
        let nodoInsertar = document.createElement('h3') //especificamos el nodo a crear
        nodoInsertar.textContent = nombre
        nodoInsertar.id = "usuario"
        contenidoUsuarios.appendChild(nodoInsertar) */
  /*  let nombre = document.querySelector('#exampleInputNombre').value
        contenidoUsuarios.innerHTML = `${contenidoUsuarios.innerHTML}  <h3 id="usuario">${nombre}</h3>` //div flex
        let nodoUser = document.querySelector("#usuario").innerHTML="otra cosa" */

  let id = 1;
  let idnombre = 1;
  let idapellido = 1;
  let idedad = 1;

  let nombre2 = document.querySelector("#exampleInputNombre").value;
  let apellido = document.querySelector("#exampleInputApellido").value;
  let edad = document.querySelector("#exampleInputEdad").value;
  let experiencia = document.querySelector("input[type='checkbox']").checked;
/* 
  let lista = document.querySelector("ul");
  let nodoli = document.createElement("li");
  nodoli.textContent = `${nombre2} ${apellido} ${edad}`;
  nodoli.value = id;
  lista.appendChild(nodoli); */

  let listatabla = document.querySelector("tbody");
  let crearTr = document.createElement("tr");
  
  crearTr.innerHTML = `<th scope="row">${id}</th>
  <td>${nombre2}</td>
  <td>${apellido}</td>
  <td>@${edad}</td>`

  experiencia
  ? crearTr.classList.add("table-success")
  : crearTr.classList.add("table-danger");

  listatabla.appendChild(crearTr)
  

  /* let th = document.createElement("th");
  th.scope = "row";
  th.textContent = id;
  let td1 = document.createElement("td");
  td1.textContent = nombre2;
  let td2 = document.createElement("td");
  td2.textContent = apellido;
  let td3 = document.createElement("td");
  td3.textContent = edad;
  listatabla.appendChild(crearTr);
  crearTr.appendChild(th);
  crearTr.appendChild(td1);
  crearTr.appendChild(td2);
  crearTr.appendChild(td3);
  id++;

  experiencia
    ? crearTr.classList.add("table-success")
    : crearTr.classList.add("table-danger");

    experiencia
    ?  nodoli.className = "con-experiencia"
    : nodoli.classList.add("sin-experiencia");
 */
 /*  if (experiencia) {
    nodoli.classList.add("con-experiencia")
    nodoli.className = "con-experiencia";
    crearTr.classList.add("table-success");
  } else {
    nodoli.classList.add("sin-experiencia");
    crearTr.classList.add("table-danger");
  }
  idnombre++;
  idapellido++;
  idedad++; */
});

/*  if (nombre.value.lenght>0 && apellido.value.lenght>0) {
        alert(`Nombre: ${nombre}\n Apellido: ${apellido}\n Edad: ${edad}`)
        console.log(nombre);
        console.log(apellido);
        console.log(edad);  
    } else {
        console.log("Faltan datos");
    }  */
//let check = document.querySelector("input[type='checkbox']")
// console.log(check.checked);
//let select = document.querySelector("select#exampleInputProfesion")
//console.log(select.options[select.selectedIndex].value);
// console.log(select.selectedOptions[0]); //si es un select compuesto recorrer con un for para sacarlas
//let grupo = document.querySelector("input[name='sexo_grupo']:checked")
// console.log(grupo.value);
//})
function inputTeclaPulsada(nombre) {
  console.log("tecla pulsada");
  console.log(nombre);
}
/* document.querySelector('#exampleInputNombre').addEventListener('keypress',(event)=>{
    console.log(event.target.value);
}) */
//autocompletado en texto con base de datos

/* function metodoCambioSelect() {
    let select = document.querySelector("select#exampleInputProfesion")
    console.log(select.selectedOptions[0]);
} */

/* document.querySelector("select").addEventListener('change', (event)=>{
    console.log(event.target.options[event.target.selectedIndex]);
})

document.querySelector("input[type=checkbox]").addEventListener("change", (event)=>{
    let seleccion = event.target.checked
    if (!seleccion) {
        document.querySelector('#exampleInputNombre').innerHTML=""
    } 
}) */

document.querySelector('#botonBorrar').addEventListener("click", ()=>{
    let table = document.querySelector("table")
    let div = document.querySelector("#contenidoUsuario")
    div.removeChild(table)
    /* let table = document.querySelectorAll(".table-danger") Borrar solo los sin experiencias */
   /*  table.forEach(element => {
        let table = document.querySelector("tbody")
        table.removeChild(element)
    }); */
})
