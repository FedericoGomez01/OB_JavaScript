// Unir dos listas .concat(lista2)

const lista = [1,2,3,4];

const lista2 = [5,6,7,8,9];

//nos ddevuelve otra lista con los valores concatenados.
let lista3 = lista.concat(lista2);
console.log(lista3);


// Como unir dos listas con el factor de propagacion.
// factor de propacacion de listas y objetos ...obj  ...lista
console.log(...lista3);

const lista4 = [...lista , ...lista2];
console.log(lista4);

