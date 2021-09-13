/*Mostrar por pantalla la expresión "Hola Mundo".
Mostrar por pantalla la expresión 5*5 como texto.
Mostrar por pantalla el resultado de la expresión 5*5. */

console.log("Hola");
let numero1 = 5;
let numero2 = 5;
let resultado = numero1 * numero2;
console.log(resultado);
console.log(`${numero1}*${numero2}`);

/* Declara una variable constante con el nombre fijo y dale un valor booleano de true
Declara una variable con el nombre numero y dale un valor de texto de 1
Declara una variable con el nombre numeroCorrecto y asígnale el valor numérico de la variable del apartado anterior
Declara dos variables con el nombre suma y sumaOK. A la primera asígnale la suma de la variable numero + numero y a la segunda asígnale el valor de la variable numeroCorrecto + numeroCorrecto. Muestra el valor de ambas variables por pantalla
Muestra por pantalla el tipo de las dos variables anteriores */
const fijo = true;
let numero = "1";
let numeroCorrecto = Number(numero);
let suma = numero + numero;
let sumaOK = numeroCorrecto + numeroCorrecto;
console.log(suma);
console.log(sumaOK);
console.log(typeof suma);
console.log(typeof sumaOK);

/* Crea un programa que pida por prompt al usuario 4 variables que representen los lados 
de un cuadrado. Una vez introducido todas se mostrar una alerta por pantalla indicando si 
es correcto el valor de los lados introducidos. En caso de ser correcto que también aparezca 
el área de un cuadrado (lado * lado)*/

let lado1 = Number(prompt("Introduce el tamaño del lado 1"));
let lado2 = Number(prompt("Introduce el tamaño del lado 2"));
let lado3 = Number(prompt("Introduce el tamaño del lado 3"));
let lado4 = Number(prompt("Introduce el tamaño del lado 4"));

if (lado1 === lado2 && lado1 === lado3 && lado1 === lado4) {
  let area = lado1 * lado2;
  alert(area);
} else {
  alert("Error. Los lados del cuadrado deben ser iguales");
}

/*Determine si un número introducido en un Prompt es par o no, 
la respuesta será mostrada en una alerta. */

let numero3 = Number(prompt("Introduce el número"));
if (numero3 % 2 == 0) {
  alert("El número es par");
} else {
  alert("El número es impar");
}

/* Pedir al usuario un nombre y una letra en prompts diferentes. Una vez metido esto saltará 
una alerta indicando si el nombre contiene la letra. 
En caso de ser positivo también dirá el número de letras que tiene */

let nombre7 = prompt("Introduce un nombre");
let letra = prompt("Introduce una letra");
let contador = 0;
for (let index = 0; index < nombre7.length; index++) {
  if (nombre7.charAt([index]) == letra) {
    contador++;
  }
}
alert(contador);

/* Pedir dos numero por entrada del usuario indique por consola:

cuál de los dos es mayor. En el caso de ser iguales también lo indicará
si se introduce números menores que 0 o letras que salte una alerta indicando el error*/

let numero8 = Number(prompt("Introduce un número"));
let numero9 = Number(prompt("Introduce un número"));

if (numero8 < 0 || numero9 < 0 || isNaN(numero8) || isNaN(numero9)) {
  alert("No pueden introducirse números inferiores a 0 o letras");
} else {
  if (numero8 == numero9) {
    alert("Los números son iguales");
  } else if (numero8 > numero9) {
    alert("El primer número es mayor");
  } else {
    alert("El segundo número es mayor");
  }
}

/*Mostrar mediante una alarm el día y 
la hora actuales en el siguiente formato. Buenas tardes, hoy es Lunes 15 y son las 15:00 */
let fechaActual = new Date();
console.log("Buenas tardes hoy es " + moment().format( 'MMM Do') + " y son las " + moment().format('h:mm:ss a'));

let fechaAnterior = new Date(2020,0,1);
let diasTranscurridos = (fechaActual.getTime-fechaAnterior.getTime())/86400000
console.log(diasTranscurridos);

