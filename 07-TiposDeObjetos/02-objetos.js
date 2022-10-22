// Trabajando con objetos 
// Lo mas util para trabajar con objetos

const obj = {
    id:4,
    nombre:"juan",
    apellido: "Gonzalez",
    isDeveloper: true,
    libros_favoritos: ["El metodo", "El codigo de la manifestacion"],
    //para poner nombres a las propiedades del objeto que contengan numeros o guiones medio necesitamos usar comillas
    "4-juegos": [1,2,3,4]
}



console.log(obj.id);
console.log(obj.nombre);
console.log(obj.apellido);
console.log(obj.isDeveloper);
console.log(obj["4-juegos"]);

const prop = "libros_favoritos";
console.log(obj[prop]);

//copia la referencia en memoria.
const obj2 = obj;

console.log(obj2);

obj2.nombre = "federico";

console.log(obj2.nombre);
console.log(obj.nombre);

// con los tipos nativos hace una copia en memoria.
let val1 = 2;
let val2 = val1;

val2 = 6;
console.log(val1);
console.log(val2);

const obj3 = {...obj};

console.log(obj.nombre);
console.log(obj3.nombre);

obj3.nombre = "Rafael";
console.log(obj.nombre);
console.log(obj3.nombre);

/////////////
// Comom ordenar listas de objetos en funcion de una propiedad.

const listaPeliculas = [
    { titulo : "Lo que el viento se llevo", anyo : 1939},
    { titulo : "Titanicc", anyo : 1997},
    { titulo : "Moana", anyo : 2016},
    { titulo : "El efecto mariposra", anyo : 2004},
    { titulo : "Ted", anyo : 2012}
]

console.log(listaPeliculas);

// .sort() => muta el valor de la lista original.

listaPeliculas.sort((a,b) => a.anyo - b.anyo);
console.log(listaPeliculas);


