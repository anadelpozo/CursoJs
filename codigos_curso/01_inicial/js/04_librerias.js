//Date 
let fechaActual = new Date();
console.log(fechaActual.getDate()); //dia del mes
console.log(fechaActual.getDay()); //dia de la semana
console.log(fechaActual.getMonth()+1); //dia del mes
console.log(fechaActual.getMinutes());
console.log(fechaActual.getSeconds());
console.log(fechaActual.getHours());
console.log(fechaActual.getTime()); //timestamp. Devuelve todo el milisegundos
fechaActual.setFullYear(2019);
console.log(fechaActual);
let fechaPasada = new Date(2019,5,8);
fechaPasada.getTime();
console.log(`Fecha pasada ${fechaPasada}`);

//fecha pasada que sea el día de hoy menos 4 meses
let fechaPasada1 = new Date(2019,fechaActual.getMonth-4,8);

console.log("Fechas con moment");
console.log(moment().format('MMM Do YYYY, h:mm:ss a'));
console.log(moment().subtract(10, 'days').calendar());

let frase= "    Hola, esto es un ejemplo de frase para tratarla con js"
frase = frase.trim(); //elimina espacios, devuelve un string
console.log(frase.substring(0,6)); //indica el digito de inicio y final
console.log(frase.substr(0,10));; //indica el inicio y los siguientes
console.log(frase.sub());
console.log(frase.startsWith("H"));//preguntar si empieza por un caracter concreto, tambien se puede indicar la letra y la posicion
console.log(frase.split(" ") );
console.log(frase.split(" ")[1].startsWith("e"));
console.log(frase.slice(1,6)); //devuelve el string indicando donde quieres empezar
console.log(frase.search("a"));
console.log(frase.replace(" ",""));
console.log(frase.indexOf(""));//posicion de un caracter concreto
for (let index = 0; index < frase.length; index++) {
    console.log(frase.charCodeAt());
    
}