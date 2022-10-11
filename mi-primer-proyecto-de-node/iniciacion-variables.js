var variableVar;
let variableLet;

const constantes = "Hola Soy un tipo de dato constante"; 

var a = 1;
console.log(a);

a = 5;
console.log(a);

//no podemos mmodificar el valor de las constantes.
console.log(constantes);


let b = 4;
console.log(b);

b = 5;
console.log(b);

// Diferencias entre let y var 
// var afecta a todo el codigo y let afecta al scope donde esta 

var variable = "Hola soy una variable var";

for (let i = 0; i < variable.length; i++) {
    var variable = "Hola soy la variable var modificada"
}

console.log(variable);


let variablelet = "Hola soy una variable let";

for (let i = 0; i < variable.length; i++) {
    let variablelet = "Hola soy la variable let modificada"
}

console.log(variablelet);

console.log(typeof 1);
console.log(typeof variableLet);
console.log(typeof variablelet);
console.log(typeof false);
console.log(typeof a);
console.log(typeof noExisteEstaVariable);

// Esta practica de modificar el tipo de dato primitivo de una varaible no se recomienda ya que es una mala practica.
let num = 4;
console.log(num);

num = "hola";
console.log(num);
