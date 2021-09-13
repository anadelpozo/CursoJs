let objeto = {
  nombre: "Borja",
  apellido: "Martim",
  edad: "17",
  hobbies: ["cine", "dporte", "musica"],
  hijos: [
      {nombre: "celia", edad:4},
      {nombre: "claudia", edad:1},
      {nombre: "jose", edad:15},
  ]
};
/*console.log(objeto.apellido);
objeto.hobbies.forEach(element => {
    console.log(element);
})
objeto.hijos.forEach(element => {
    console.log(element.nombre);
})*/
console.log(objeto.hijos.filter((elemento) => elemento.edad>7));
console.log(objeto["nombre"]);
console.log(objeto.hijos[0][0]);
objeto["profesion"] = "profesor";
console.log(objeto);