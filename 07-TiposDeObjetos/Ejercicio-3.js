

const fechaHoy = new Date();

const fechaNacimiento = new Date("march 16, 1998 1:23:00");

console.log(fechaHoy);
console.log(fechaNacimiento);

let fechaHoyEsMayor = fechaHoy.getTime() > fechaNacimiento.getTime();

console.log(fechaHoyEsMayor);

let diaNacimiento = fechaNacimiento.getDate();
console.log(diaNacimiento);

let mesNacimiento = fechaNacimiento.getMonth()+1;
console.log(mesNacimiento);

let anioNacimiento = fechaNacimiento.getFullYear();
console.log(anioNacimiento);