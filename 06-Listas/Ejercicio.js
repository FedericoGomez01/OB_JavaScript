let array = ["tomates", "lechuga", "leche", "fideos", "agua"];

//- Modifica la lista de la compra y añádele "Aceite de Girasol"
array.push("aceite de Girasol");
console.log(array);


//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
array.splice(5,1);
console.log(array);

//- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
let peliculas = [
    {titulo : "El dia despues de mañana" , director : "jose director", fecha : 1998},
    {titulo : "En busca de la felicidad" , director : "Will Smith director", fecha : 1985},
    {titulo : "Never Back down" , director : "Mohamed ali", fecha : 2013}
]

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

let pelisActuales = peliculas.filter((a) => a.fecha>2010);

console.log(pelisActuales);

//- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

let directores = peliculas.map(valor => valor.director);
console.log(directores);

//- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

let titulos = peliculas.map(valor => valor.titulo);
console.log(titulos);

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

const listaDefinitiva = directores.concat(titulos);
console.log(listaDefinitiva);

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const direcoresYTitulos = [...directores, ...titulos];
console.log(direcoresYTitulos);