// Metodos de cadenas de texto parte 3
//expresiones regulares.
//https://regexr.com


let str_0 = " dasl;das de aklsdmkamsd de alksdmkasmdkla de alksmklamskldma de alksmkljccivos de aslkdanmlsdk de de de";

console.log(str_0.match(/de/g));

// busca existencia de la palabra en la cadena de caracteres
console.log(str_0.includes("hola"));

console.log(str_0.startsWith(" dasl;das"));


console.log(str_0.endsWith(" dasl;das"));
console.log(str_0.endsWith(" de"));
