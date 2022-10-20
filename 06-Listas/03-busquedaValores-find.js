// Iterar valores de forma unitaria 

const array = ["hola", 1,2,3,4,5, "chau", false];

// forma antigua y poco eficiente
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
} 


// Forma ES6 (mas eficiente)
let acumulador = 0; 
const arrayNums = [93,234,543,6,7,83,234,2];
arrayNums.forEach(valor => {
    console.log(valor);
    acumulador+=valor;
});

console.log(acumulador);

// Busqueda de un valor dentro de una lista 
// .find() => quiero encontrar el valor 83

const valorEncontrado = arrayNums.find(valor => {
    if(valor === 83)
        return true;
});

console.log(valorEncontrado);

const listaObjetos = [
    {nombre : "federico", edad : 24},
    {nombre : "miguel", edad : 25},
    {nombre : "coni", edad : 26},
    {nombre : "santi", edad : 27},
]

//const objeto = listaObjetos.find(element => {
//    if(element.nombre.toLowerCase() === "coni")
//        return true;
//})

const objeto = listaObjetos.find(element => element.nombre.toLowerCase() === "coni");

console.log(objeto.nombre);

const { edad } = listaObjetos.find(element => element.nombre.toLowerCase() === "coni");

console.log(edad);