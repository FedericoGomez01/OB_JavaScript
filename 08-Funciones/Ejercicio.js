// funcioes que devuelva siempre true

function devolverTure() {
    return true;
}

if(devolverTure()){
    console.log("Es true");
}



// funcion asincrona que utilice setTimout y pase por conosla un hola soy una promesa 5 segundos despues de haberse ejecutado 
const miPromesa = new Promise((resolve , reason) => {
    setTimeout(resolve(), 5000);
})

miPromesa
    .then(()=> console.log("Hola, Soy una promesa"));

// Funcion generadora de indices pares automaticos

function* paresAutomaticos() {
    let par = 0;
    while(true){
        par = par + 2;
        if(par >= 10)
        {
            return par
        }
        yield par;
    }
}

const parAuto = paresAutomaticos()

console.log(parAuto.next())
console.log(parAuto.next())
console.log(parAuto.next())
console.log(parAuto.next())
console.log(parAuto.next())
console.log(parAuto.next())