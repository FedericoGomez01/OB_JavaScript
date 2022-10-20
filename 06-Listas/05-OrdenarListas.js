// Como ordenar arrays .sort() => modifica el array 


let arrayNum2 = [2,4,7,98,423,1];

console.log(arrayNum2);

arrayNum2.sort((a,b)=> {
    if(a > b)
        return 1
    else if (a<b)
        return -1
    else
        return 0
});

console.log(arrayNum2);


// SIMPLIFICACION Y EXPLICACION DEL ORDENAMIENTO 

let arrayNum = [2,5,7,9,3,1];
console.log(arrayNum);

// Ordenar unicamente arrays numericos 
/* 
a - b 

Sort siempre devuelve un valor 
en caso de que A sea mayor que B retona positivo   =====  (mayor a cero)> 0  ======== ordena A despues de B 
en caso de que A sea menor que B retona negativo   =====  (menor a cero)< 0  ======== ordena A antes que B
en caso de que A sea igual que B retona 0   =====  (igual a cero)===0  ======== Mantiene las posiciones de A y B

en caso de que querramos ordenar de mayor a menor vamos a poder poner a-b porque si b es mayor que a 
nos va a dar un numero negativo como resultado dejando asi a A antes que B.

*/
arrayNum.sort((a,b) => a - b);
console.log(arrayNum);


arrayNum.sort((a,b) => b - a);
console.log(arrayNum);


///////////////////

const listaObjetos = [
    {nombre : "santi", edad : 27},
    {nombre : "miguel", edad : 25},
    {nombre : "federico", edad : 24},
    {nombre : "coni", edad : 26},
]


//mayor a menor
listaObjetos.sort((a,b) => b.edad - a.edad);
console.log(listaObjetos);

// menor a mayor
listaObjetos.sort((a,b) => a.edad - b.edad);
console.log(listaObjetos);