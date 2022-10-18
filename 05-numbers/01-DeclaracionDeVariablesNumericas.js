// Session 5 - numbers 

// Declaracion de variables numericas (Enteros y decimales)
let a = 5;

console.log(a);

let b = 0.1 ;

console.log(b);

// Presicion 

let c = 0.2;

// Las sumas y las multiplicaciones no dan el valor correcto debido a como esta hecho el lenguaje JavaScript
console.log(b * c);
console.log(b + c);

//Manera de poder solucionar el error de las sumas.
console.log(Math.round((b + c) * 100 )/100);