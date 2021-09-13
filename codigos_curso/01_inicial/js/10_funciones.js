//funtion nombre (parametros){
//}

/*function funcionNormal() {
    console.log("Ejecución normal");
}
funcionNormal();

function funcionParametros(parametroUno, parametroDos) {
    console.log(`${parametroUno} ${parametroDos}`);
}
funcionParametros("Hola",1);

function parametrosAdicionales() {
    //console.log(arguments);
    console.log("Ejecución adicional");
    if (arguments.length>0) {
        arguments[0];
        console.log("Me has pasado cosas");
    } else {
        console.log("No me has pasado nada");
    }
}
parametrosAdicionales("cosas", 4, 6, 7, true);
//parametrosAdicionales();

function parametrosDefecto(parametroUno, parametroDos="dos") { //parametro por defecto si no te pasa nada
    console.log(`${parametroUno} ${parametroDos}`);

}
parametrosDefecto("uno", "tres");

let suma = function (parametroUno, parametroDos) {
    console.log(`${parametroUno+parametroDos}`);
}
suma(4,6);

let funcionDivision = (numero1, numero2)=>console.log(` ${numero1/numero2}`);
funcionDivision(4,2); 
let funcionDivisionRetorno = (numero1, numero2)=>{numero1/numero2};
console.log(funcionDivision(4,2)); 
//se usa para funciones muy simples
//(param)=> ejecucion //si tiene una sola línea no necesita return ni llaves, sino si*/
function mostrarMensaje(nombre) {
  console.log("Esto es una función que muestra un mensaje de " + nombre);
}
function funcionCompleta(funcion, nombre) {
  console.log("Ejecución completa--");
  funcion(nombre);
}
funcionCompleta(mostrarMensaje, "Ana");
console.log(mostrarMensaje);

funcionCompleta((nombre) => {
  console.log("esta función ejeuta cosas de " + nombre);
}, "borja"); //se ejecua la función que se pasa

function funcionConRetorno() {
  return "Ejemplo retorno";
}
console.log(funcionConRetorno());

function funcionRetornoFuncon(params) {
  return (params) => {
    console.log("ejecución de algo");
  };
}

function asincroniaInterbal() {
  setInterval(() => {
    console.log("funcion interval");
  }, 5000);
}
//asincroniaInterbal();

function asincrooniaTimeOut(params) {
    setTimeout(()=>{
        console.log("funcion timeout");
    }, 3000);
}
asincrooniaTimeOut();