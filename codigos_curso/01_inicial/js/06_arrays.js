let coleccionNumeros = [1, 2, 3, 4, 5, 6];
let coleccionCosas = ["uno", 1, true]; // es un array de any

/*coleccionCosas.forEach(element => console.log(element))
console.log(coleccionCosas[0]);
coleccionCosas[0] = 1;
console.log(coleccionCosas[0]);

coleccionCosas[4] = "nuevo valor";
console.log(coleccionCosas[4]);

coleccionNumeros[6] = true;*/

/*let alimentos = ["aguacate", "mango", "fresa", "pera"];
alimentos.push("uvas", "manzana", "melocoton") //añade elementos al final. Devuelve longitud del array
console.log(alimentos);
console.log(`Alimento eliminado ${alimentos.pop()}`); //Elimina último elemento y devuelve lo que has eliminado

alimentos.unshift("tomate", "nisper") //inserta un elemento al principio de array. Devuelve el número de elem añadidos
console.log(alimentos);
alimentos.shift() //elimina el primer elemento de un array
console.log(alimentos);*/

/*let alimentos = [
  "aguacate",
  "mango",
  "fresa",
  "pera",
  "uvas",
  "manzana",
  "melocoton",
  "tomate",
  "nisper",
];
let filtro=[];*/
//obtener un array con los equipos que tienen una s o una m

/*alimentos.forEach(element => {
    //console.log(element);
    if (element.indexOf("s")!=-1 || element.indexOf("m")!=-1) {
        filtro.push(element)
        //console.log(element);
    } 
});*/
/*filtro = alimentos.filter((element, index) => element.indexOf("s")!=-1 || element.indexOf("m")!=-1
)

console.log(filtro);*/

/*filtro = alimentos.filter(
     (element, index) => { return element.indexOf("s")!=-1 || element.indexOf("m")!=-1
})*/
/*let alimentos = [[
    "aguacate", 100],
    ["mango", 50],
    ["fresa", 20],
    ["pera", 30],
    ["uvas", 35],
    ["manzana", 50],
    ["melocoton", 27],
    ["tomate", 17],
    ["nisper", 35]
  ];
  let alimento;
  for (let index = 0; index < alimentos.length; index++) {
      alimento = alimentos[index];   
      if (alimento[0]=="Madrid" || alimento[0]== "Barsa") {
        console.log(alimento[1]);
      }
  }*/
/*let numeros = [1,2,3,22,4,11,5,41];
  numeros.sort((itemA, itemB) => {
        if (itemA>itemB) {
            return 1;
        } else if (itemB>itemA){
            return -1
        } else {
            return 0;
        }
  })*/
  let alimentos = [[
    "aguacate", 100],
    ["mango", 50],
    ["fresa", 20],
    ["pera", 30],
    ["uvas", 35],
    ["manzana", 50],
    ["melocoton", 27],
    ["tomate", 17],
    ["nisper", 35]
  ];
  alimentos.sort((itemA, itemB) => {
    if (itemA[1] > itemB[1]) {
      return 1;
    } else if (itemB[1] > itemA[1]) {
      return -1;
    } else {
      return 0;
    }
  });
  alimentos.forEach((element, index) => {
    console.log(`${index+1} - ${element[0]} kcal: ${element[1]}`);
  });
  


