
let numero = 5
let promesa = new Promise((resolve, reject)=>{ 
    //lo que se ejecuta
    //proceso que modifica el número
    //esto tarda
    if(numero>0){
        resolve(numero)
    } else {
        reject('error en el número')
       // throw new Error('asdasda') solo se ejecutaria en el primer modo
    }
})

promesa.then((data)=>{
    console.log(data);
    //se ejecuta la función resolve
}).catch((error)=>{
    console.log(error);
});


/* promesa.then((data)=>{
    console.log(data);
    se ejecuta la función resolve
},(error)=>{
    console.log(error);
}); */

