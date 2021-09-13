class Persona{

    //propiedades
    nombre;
    apellido;
    edad;

    //contructor
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    //funciones
     mostrarDatos() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Apellido: ${this.apellido}`);
        console.log(`Edad: ${this.edad}`);
    }

   set setNombre(nombre){
        this.nombre = nombre;
    }
   get getNombre(){
        return this.nombre;
    }

}
/*let persona = new Persona("Borja", "Martín", 18);
console.log(persona);
persona.mostrarDatos();
//console.log(persona.getNombre());
console.log(persona.getNombre);
persona.setNombre = "Pedro";*/

//puede crearse en un mismo archivo java todas las clases

class carta{
    
}