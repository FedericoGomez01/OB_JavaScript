// Que son las funicones, como se declaran y como se utilizan

const nomb = "Federico";

saludar(nomb);

// saludar("Federico");
// saludar();
// saludar(12);

function saludar(nombre){


    console.log(`Hola ${nombre}`);
}

////

let nombre2 = "Juan";

console.log(nombre2);
despedir(nombre2);


function despedir(nombre){
    nombre = "Diego";
    console.log(`Chau ${nombre}`)
}

console.log(nombre2);

////

let persona = { nombre : "Juan", apellido : "Gonezalez"};

saludarPersona(persona);
saludarPersona("");

function saludarPersona(objeto){
    objeto.apellido = "Villar";
    console.log(`Hola ${objeto.apellido}, ${objeto.nombre}`);
}

saludar();


///////

function imprimeNumero(numero = 7){ // Parametros por defecto 
    console.log(numero);
}

imprimeNumero(7);
imprimeNumero();


////

function imprimir(...parametros){
    console.log(parametros);
}

imprimir(1,2,3,4,5,{nombre:"Federico"}, "Hola");

function suma(...nums){
    return nums.reduce((a,b) => a + b );
}

const valor = suma(1,2,3,4);
console.log(valor);


///

function multiplicar(a =0, b =0)
{
    return a * b;
}

console.log(multiplicar(4,9));