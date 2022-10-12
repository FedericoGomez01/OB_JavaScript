// Bucles for 

let array = [1,2,3,4,5]


// Bucle for 
for (let i = 0; i < array.length; i++) {
    console.log("valor = " + array[i]);
}

let lista = [1,4,6,2,7,9,2];

for(let i =0; i< lista.length; i++ )
{
    console.log(lista[i])
}

// Bucle for of 
for(let valor of lista)
{
    console.log(valor );
}

// Estructura foreach

lista.forEach( valor => {
    console.log(valor);
})

// Estructura for in

const persona = {
    nombre: "Federico",
    apellido: "Gomez",
    altura: 1.78,
    edad: 24,
    isDev: true
};

console.log(persona.nombre);

let prop= "edad";
console.log(persona[prop]);

for (let propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
}

