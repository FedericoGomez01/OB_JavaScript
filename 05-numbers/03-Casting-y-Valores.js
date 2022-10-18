// Tratar operador .valueOf() => Obtener valores numericos a partir de literales

let a = 2;
//Casteo un valor numerico.
let b = new Number(3);

console.log(a);
console.log(b);

console.log(typeof a);
console.log(typeof b);

console.log(a+b);
//obtengo los valores primitivos.
console.log(a.valueOf() + b.valueOf());


console.log(b.valueOf());

let str = new String("Hola soy un string object");
console.log(str);

//obtengo los valores primitivos con valueOf();
console.log(str.valueOf());

// NaN - Infinity
// Not a Number

let n =  Number("adios");
console.log(n);

//isNaN devuelve un bool si es o no un NaN
console.log(isNaN(n));

let numerador = 9;
let divisor = 0;
let divisor_2 = null;

console.log(numerador / divisor);
console.log(numerador / divisor_2);

//Como convertir los string a valores numerocos, parseInt y ParseFloat

let numero = "5.89";
let num2 = 17.2;

console.log(typeof numero)

// concatena al tener un valor en string 
console .log(numero + num2);

console.log(Number(numero) + num2);

console.log(typeof parseFloat(numero));
console.log(typeof parseInt(numero));

console.log(parseFloat(numero));
console.log(parseInt(numero));


//Numeros Heexadecimales (base 16) usariamos 2 bites por cada numero 

let num_hex = "0x3a5b7"
console.log(parseInt(num_hex, 16));

//Obtener los valores minimos y maximos en JavaScript.

//Valor minimo
let min_presicion = Number.EPSILON;
console.log(min_presicion);

let min_valorJS = Number.MIN_VALUE;
let max_valorJS = Number.MAX_VALUE;
console.log(min_valorJS);
console.log(max_valorJS);
console.log(2 ** 1023); // Valor maximo guardados en JS