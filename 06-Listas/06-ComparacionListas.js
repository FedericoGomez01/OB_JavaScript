// Comparar listas 
// .every()

let array = [ 1,2,3,4,6,7234,56,3,23];

const resultado =array.every(valor => valor > 0);

console.log(resultado);

// Comparacion de listas 

const ar1 = [1, 2, 3, 4];
const ar2 = [1, 2, 3, 4];
//Las listas no se pueden comparar de esta manera.
console.log(ar1 == ar2);


const compararArrays = (array1, array2) => {
    if(array1.length !== array2.length) return false;
    const resultado = array1.every((valor, indice) => valor === array2[indice]);
    return resultado;
}

console.log(compararArrays(ar1,ar2));

const ar3 = [ 2,54,6,7];

console.log(compararArrays(ar1,ar3));
