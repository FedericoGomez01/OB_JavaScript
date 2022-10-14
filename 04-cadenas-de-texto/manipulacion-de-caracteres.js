// MANIPULACION DE CADENAS DE CARACTERES.

let input = "PISCIS";
let db = "piscis";

console.log(input === db);

//Convierto las dos cadenas a minusculas
console.log(input.toLowerCase() === db.toLowerCase());

//Convierto las dos cadenas a mayusculas
console.log(input.toUpperCase() === db.toUpperCase());

// Formas de concatenar cadenas de caracteres 

let str_1 = "Hola ";
let str_2 = "Mundo";

console.log(str_1.concat( " ", str_2, "!!"));
console.log(str_1 + str_2);
console.log(`${str_1} ${str_2}`);

// eliminar espacios al inicio y al final

let str_3 = "   Hola soy un string con espacio al final  ";

console.log(str_3.length);
//Elimina los espacios del principio y el final
console.log(str_3.trim().length);

//Nos quita los espacios del principio unicamente.
console.log(str_3.trimStart().length);

//Nos elimina los espacios del final unicamente.
console.log(str_3.trimEnd().length);

// Obtener el caracter que hay en cierta posicion 

let str_4 = "Soy el string numero 4";

// Por defecto es 0 la posicion
console.log(str_4.charAt());
console.log(str_4.charAt(4));
console.log(str_4[4]);

// Obtener la posicion de una palabra dentro de una cadena de caracteres

let str_5 = "Hoal soy federico y me gusta programar. saludos federico";

// Nos devuelve la posicion del primer caracter de la primer palabra.
console.log(str_5.indexOf("federico"));

console.log(str_5.charAt(9));

// Nos devuelve la posicion del primer caracter de la ultima palabra.
console.log(str_5.lastIndexOf("federico"));


