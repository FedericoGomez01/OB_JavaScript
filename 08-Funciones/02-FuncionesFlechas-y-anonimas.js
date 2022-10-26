// Funciones de tipo flecha - funciones anonimas 

const array = [1, 2 ,3,4,5];

const array2 = array.map(valor => valor * 2);

console.log(array2)
// console.log(dobleDelValor(2))


const dobleDelValor = valor =>  valor * 2;

console.log(doble(6));
console.log(dobleDelValor(6));

const array3 = array.map(dobleDelValor)

console.log(array3);

function doble(valor){
    return valor *2;
}