// Funciones asincronas

function miasinc(){
    // Hace una llamada a una db externa
    // Puede darnos algun error.
}


//PROMESAS.

const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() *2)
    //Si esta todo correcto
    if(i !== 0)
    {
        resolve();
    }else{
        reject();
    }
});


miPromesa
    .then(() => console.log("Se ha ejecutado de forma correcta"))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("Yo me ejecuto simempre"))
