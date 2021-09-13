//if

let nota = 6;
/*if (nota < 0 || nota > 10) {
  alert(`La nota introducida no es valida`);
} else if (nota > 5) {
  alert("Has aprobado");
  if (nota < 7) {
    //5-7
    alert("Has aprobado bien");
  } else if (nota < 9) {
    //7-9
    alert("Has aprobado muy bien");
  } else if (nota<10) {
    //9-10
    alert("Has aprobado muy muy bien");
  } else {
      alert("Has sacado matrícula");
  }
} else {
  alert("Has suspendido");
}
*/

// if ternario, muy pesado para el ordenador
// condicion? condicion_true : condicion_false
/*nota > 5
  ? nota > 7
    ? alert("Has aprobado bien")
    : alert("Más de 7")
  : alert("suspendido");*/

  /*while (nota<10){
      alert(`nota es ${nota}`)
      nota++;
  }*/

  //pedir un número por teclado
  // generar un número aleatorio
  //continua pidiendo  números hasta que aciertes el número generado, cuando se acierte...
  //aparece el número de intentos utilizado
  /*let intentos =0;
  let numeroAleatorio = Math.random()*10;
  let numero = Number(prompt("Introduce un número" + Math.round(numeroAleatorio)));
  while(Math.round(numeroAleatorio)!= numero){
    numero = Number(prompt("Introduce un número"));
    intentos++;
  }
  alert(`Número acertado\nEl número de intentos es ${intentos}`);*/

  let coleccionPalabras = ["uno", "dos", "tres", "cuatro", "cinco"];
 /*   for (let index = 0; index<coleccionPalabras.length; index++) {
    console.log(coleccionPalabras[index]); 
    console.log(`\t ${typeof coleccionPalabras[index]}`);
    if() {}
  }*/
  /*coleccionPalabras.forEach((element, index, array) =>{
      console.log(element);
    console.log(`\t${index}`);
console.log(`\t\t ${array}`);
console.log(`\t ${typeof item}`);
});*/
//si el elemento solo tiene una línea, no se necesitan llaves.
// si la función solo tiene un parámetro no necesita paréntesis 

for (const key in coleccionPalabras) {
    if(key%2==0){
   console.log(`${key}`);
   console.log(`${coleccionPalabras[key]}`);
    }
}

//FOR OF --> DE JAVA. Obtenemos el elemento de cada posición
/*for (const iterator of coleccionPalabras) {
    console.log(iterator);
}*/
/*let opcion = Number(prompt("Introduce la acción que quieres realizar"))
switch (!isNaN(opcion)) {
  case 1:
    console.log("Valor 1");
    break;
  case 2:
    console.log("Valor 2");
    break;
  case 3:
    console.log("Valor 3");
    break;
  default:
    break;
}*/

//CUADRO DE CONFIRMACIÓN
let confirmacion = confirm("Estñas seguro que quieres continuar")
if (confirmacion) {
  alert("Términos aceptados")
} else {
  alert("Proceso cancelado")
}