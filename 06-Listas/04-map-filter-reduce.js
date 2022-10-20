// Trabajando con metodos mas avanzados
// .map() .filter() .reduce()

const ciudades = ["San Sebastian" , "Madrid", "Barcelona","Alinacte","Bilbao"];

// ES UN FOREACH SIN SENTIDO.
const devolucion = ciudades.forEach(element => console.log(element));
console.log(devolucion);


// USANDO MAP 
// objetivo obtener ["1 - San Sebastian" , "2 - Madrid", "3 - Barcelona","4 - Alinacte","5 - Bilbao"]
const newArrayCiudades = ciudades.map((valor, indice) => `${indice + 1} - ${valor}`);

console.log(newArrayCiudades);


// USANDO FILTER
const listaObjetos = [
    {nombre : "federico", edad : 24},
    {nombre : "miguel", edad : 25},
    {nombre : "coni", edad : 26},
    {nombre : "santi", edad : 27},
]

const o = listaObjetos.filter(obj => obj.edad > 25);
console.log(o);


const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "miguel");
console.log(nuevaLista);

// USANDO REDUCE 
// Obtener un valor a partir de una lista.

const valores = [ 3, 2,534, 45,667,786,1];

const suma = valores.reduce((acumulado, current, indice,arrayOriginal ) =>{
    console.log(acumulado);
    console.log(current);
    console.log(indice);
    console.log(arrayOriginal);
    return acumulado + current;
})

console.log(suma);
let acumulador =0;


valores.forEach(valor => acumulador += valor);
console.log(acumulador);
