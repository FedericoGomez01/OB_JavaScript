// Listas, array o arreglo
const miArray = ["Dato1", 1, "dato3", false, undefined, null];

const miArray2 = new Array(1,2,3,4,"Fede", "Gomez");
const miArray3 = new Array(3);

miArray3[0]= "Hola";
miArray3[1]= "Mundo";
miArray3[2]= "!";

const miArray4 = [miArray, miArray2, miArray3];

console.log(miArray);
console.log(miArray2);
console.log(miArray3);
console.log(miArray4);

// Objetos

const movil = {
    altura: 10,
    anchura:5,
    marca: "Xiaomi",
    isWhite: false,
    contactos: ["Gorka","mastin", "Raul"],
    tarjeta:{
        marca: "Sandisk",
        almacenamiento: 32
    },
    "altura-tarjeta": 4
}


movil.anio =2019;

console.log(movil.tarjeta.marca);

console.log(movil.marca);
movil.marca = "iPhone";
console.log(movil.marca);

console.log(movil.anio);

console.log(movil["altura-tarjeta"]);

// Fechas
// librerias de apoyo Moment.js

const ahora = new Date();

console.log(ahora);

const fecha_milis = new Date(10);
console.log(fecha_milis);

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena);

const fecha_valores = new Date(1998, 2 ,16);
console.log(fecha_valores);


const dia = ahora.getDate();
const mes = ahora.getMonth();
const anio = ahora.getFullYear();


console.log(dia,mes,anio);