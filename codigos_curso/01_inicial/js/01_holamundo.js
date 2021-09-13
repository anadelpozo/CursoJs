// comentario de una línea
/* comentario multiple*/
/*console.log("Mensaje de comprobación del primer proyecto");
console.log("Esto es otra línea");
console.log(1,2,3,4,5,6);
console.time("inicio.js");
console.timeEnd("inicio.js")*/

//variables
//tipo(acceso) nombre = valor
//variable constante
const NOMBRE = "Ana";
console.log("Mi nombre es " + NOMBRE);

// variable global, puedo acceder a ella en cualquier fichero
var edad = 19;
edad = 24;
console.log("Mi edad es " + edad);

// varuables let, se asemejan a las de java, su ámbito está donde son declaradas
let experiencia = true;
console.log(experiencia);

let nombreString = "nombre";
let edadNumber = 13; //no existen tipos de números, todos son number
let edadNumberDecimal = 13.2;
let exoerienciaBoolean = false;
let cualquierNull = null; //no tiene tipo
let cosaSinDefinir = undefined; // tiene tipo pero no está definido
let cosaColeccion = ["uno", "dos", true];
let cosaColeccionMultiple = [
  [1, 2],
  [3, 2],
  [2, 1],
];
let variableObjeto = {Nombre:"Ana", edad:19, experiencia:true, hobbies:["futbol", "cine"]};
let fecha = new Date();
console.log(fecha.getFullYear);
let palabraObject = new String("nombre objeto");

console.log("Mi nombre es: " + NOMBRE + " y tengo " + edad + " y tengo experiencia " + experiencia);
console.log(`Mi nombre es: ${NOMBRE} y tengo ${edad} y mi experiencia es ${experiencia}`)
console.log("Mi nombre es %s y tengo %d y mi experiencia es %o", NOMBRE, edad, experiencia);

console.log(typeof palabraObject);
console.log(typeof palabraObject.experiencia);
isNaN