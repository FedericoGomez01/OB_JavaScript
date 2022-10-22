// Fechas.

const fecha = new Date();

console.log(fecha);

//Los meses inicializan en cero ( 0 = enero  y  11 es diciembre ) 
const fecha2 = new Date(1998, 02, 16,1,23,00);

console.log(fecha2);

const fecha3 = new Date("march 16, 1998, 1:23:23");
console.log(fecha3);

// comparacion de las fechas. si es posetrior que otra

console.log(fecha > fecha2);

const fecha4 = new Date(1998, 02, 16,1,23,00);
console.log(fecha4 === fecha2); //ERROR => no se pueden comparar fechas de esta manera 

console.log(fecha2.getTime() === fecha4.getTime());


/////// obtener el dia mes y anio de una fecha

//dia
console.log(fecha3.getDate());

// Obtener el mes de .getmonth() (0-Enero 11 -Diciembre)
console.log(fecha.getMonth()+1);

//obtener el anio 
console.log(fecha3.getFullYear());



//mostrar una fecha en un string.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
console.log(fecha2);
console.log(fecha2.toLocaleDateString("en-us"));
console.log(fecha2.toLocaleDateString("es-es"));
