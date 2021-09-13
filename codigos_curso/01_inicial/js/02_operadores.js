// operadores de asignacion
let numero = 6;
// operadores aritmeticos
let suma = 5 + 8;
let resta = 5 - 8;
let multiplicacion = 5 * 8;
let division = 5 / 8;
let resto = 5 % 8;



resta -= 4;
suma += 6;
multiplicacion *= 2;
division /= 4;
resto %= 2;

console.log(`La suma es ${suma} de tipo ${typeof suma}`);
console.log(`La resta es ${resta}`);
console.log(`La multiplicación es ${multiplicacion}`);
console.log(`La division es ${division}`);
console.log(`La resto es ${resto}`);

// permite sacar un cuadro de dialogo
/*alert(`Esto es un ejemplo de alert. El restultado de la suma es ${suma}`);

// permite dar un mensaje y obtener un mensaje
let nombre = prompt("Dime como te llamas");
console.log(`Mi nombre es ${nombre}`);
alert(`Èl nombre introducido es ${nombre}`);

let userNombre = "admin";
let userPass = "admin";

// Pedir por prompt un user, un pass y comprobar si el user es admin y el pass es admin
let user = prompt("Introduce nombre de usuario");
let pass = prompt("Introduce  tu pass");
if (user == userNombre && pass == userPass) {
  alert(`Datos introducidos correctamente`);
} else {
  alert(`Usuario o contraseña no válido`);
}*/

//se piden dos números por prompt y se muestran en 1 alert todos los resultados de los números, siempre que sean positivos
/*let numero1 = Number(prompt(`Introduce el primer número`));
let numero2 = Number(prompt(`Introduce el segundo número`));
if (numero1 > 0 && !isNaN(numero1) && numero2 > 0 && !isNaN(numero2)) {
  let resta = numero1 + numero2;
  let suma = numero1 - numero2;
  let division = numero1 / numero2;
  let multiplicacion = numero1 * numero2;
  let modulo = numero1 % numero2;
  alert(`La suma es ${suma} \n La resta es ${resta} \n La division es ${division} \n La multiplicacion es ${multiplicacion} \n El módulo es ${modulo}`);
} else {
  alert(`No pueden introducirse números negativos ni letras`);
}*/

// operadores relacionales
let numero1 = "6";
let numero2= 6;
let palabra1 = "hola";
let palabra2 = "adios";
let compraacion = numero1 >= numero2;
let comparacionSinTipos = numero1 == numero2;
console.log(comparacionSinTipos); //no tiene en cuenta los tipos y te devuelve que es verdadero
let comparacionConTipos = numero1 === numero2;
console.log(comparacionConTipos); //como son diferentes en tipo devuelve un falso
let comparacionPalabras = palabra1 == palabra2; //es igual que ===
//diferente != !==

//arrays operadores
let coleccionPalabras = ["uno", "dos", "tres", "cuatro", "cinco", "seis"];
console.log(coleccionPalabras[1]);