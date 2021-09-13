let baraja=[];
let palos = ["C", "D", "T", "P"]

// Trebol  Diamante  Corazon  Picas

for (let index = 0; index < palos.length; index++) {
   let carta;
   for (let index2 = 1; index2 < 14; index2++) {
    if (index2 == 11) {
        carta = "J" + palos[index]
        //console.log("J");
    } else if (index2 == 12){
        carta = "Q" + palos[index]
        //console.log("Q");
    } else if (index2 == "13"){
        carta = "K" + palos[index]
        //console.log("K");
    } else {
        carta = index2 + palos[index]
    }
    baraja.push(carta);
}    
}
console.log(baraja);
baraja = _.shuffle(baraja);
console.log(baraja);
console.log(baraja[Math.round(Math.random()*51)]);