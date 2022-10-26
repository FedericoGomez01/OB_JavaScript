// Funciones generadoras 

function* generarID() {
    let id = 0;
    while(true){
        id++;
        if(id >= 10){
            return id;
        }
        yield id
    }

}

const gen = generarID();

console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
