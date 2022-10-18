// Principales operaciones aritmeticas

let a = 3.5;
let b = 4.8;

// Suma
console.log(a + b);

//Resta
console.log(a - b);

//Multiplicacon
console.log(a * b);

//Division
console.log(a / b);



// Representacion de los numeros en cadena de texto 

console.log(typeof a);

let a_s = a.toString();
console.log(typeof a_s);

// Redondeo de numeros decimales

let c = 3.3;
let d = c *3;

console.log(d);

// toFixed()
// Limita el numero de decimales al valor x convirtiendolo en una cadena de caracteres 
// x = cantidad de numeros despues de la coma 
console.log(typeof d);
console.log(d.toFixed(2))
console.log(typeof d.toFixed(1))

// toPrecision
// Realiza un redondeo cientifico 
// x = Numeor de cifras que quierop que tenga el digito 

console.log(typeof d);
console.log(d.toPrecision(3))
console.log(typeof d.toPrecision(3))

