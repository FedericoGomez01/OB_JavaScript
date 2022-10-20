// Como saber si exite un valor en la lista 
// .some()

let array = [1,2,3,4,5];

//si no hay numeros negativos
const res = array.some(valor => valor < 0)
console.log(res);

//si existe el valor 3
const existe = array.some(value => value === 3);
console.log(existe);

const listaObjetos = [
    {nombre : "federico", edad : 24},
    {nombre : "miguel", edad : 25},
    {nombre : "coni", edad : 26},
    {nombre : "santi", edad : 27},
]

const existePersona = listaObjetos.some(persona => persona.nombre === "federico");

console.log(existePersona);

// como obtener una lsita a partir de un objet iterable 
const str = "Hola soy Fede";

console.log(str[5]);


const ar_str = Array.from(str);
console.log(ar_str);



const set = new Set([2,3,4,"Hola"]);
const ar_set = Array.from(set);
console.log(ar_set);



const keys = array.keys();
console.log(keys);

const ar_keys = Array.from(keys);
console.log(ar_keys);