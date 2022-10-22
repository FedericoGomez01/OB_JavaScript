const datosPersonales = {
    nombre: "Federico",
    apellido: "Gomez",
    edad: 24,
    altura: 1.78,
    eresDesarrollador: true,
}

let edad = datosPersonales.edad;

const listaAmigos = [datosPersonales];

const obj_listaAmigos = [
    { nombre : "Ignacio" ,  apellido: "Matalobos",  edad : 25 , altura: 1.70, eresDesarrollador: false},
    { nombre : "Gonzalo" ,  apellido: "Bacigalupe",  edad : 24 , altura: 1.75, eresDesarrollador: true},
    { nombre : "Lara" ,  apellido: "Scrifignanno",  edad : 23 , altura: 1.60, eresDesarrollador: false},
]

listaAmigos.push(...obj_listaAmigos);
console.log(listaAmigos);

listaAmigos.sort((a,b)  => b.edad - a.edad);
console.log(listaAmigos);