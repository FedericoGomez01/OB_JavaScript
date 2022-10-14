// Metodos mas utilizados con cadenas de caracteres (strings)
// Como obtener la longitud de un string

let str = "Hola soy un string";

console.log(str.length);

// Obtener partes de cadenas de caracteres 
// slice() substring() substr()

let parte = str.slice(0,4);
console.log(parte);

console.log(str.substring(0,4));
//Que un metodo aparezca tachado significa que esta deprecado o dejando de usarse 
console.log(str.substr(0,4));


// Reemplazar parte de contenido de un string 

let cadena = "Hola mi nombre es federico federico";

console.log(cadena);

//El metodo replace actua con la primer coincidencia.
console.log(cadena.replace("federico", "Coni"));



// ==========EXPRESION REGULAR============
// Al utilizar la expresion regular /g (global), reemplaza todas las instancias
console.log(cadena);

//El metodo replace actua con la primer coincidencia.
console.log(cadena.replace(/federico/g, "Coni"));

