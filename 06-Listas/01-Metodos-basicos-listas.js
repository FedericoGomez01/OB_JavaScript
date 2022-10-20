// Como trabajar con listas (array, arreglos, vectores)

let array = [1,2,3,4,5,6];

let array_2 = [1, "Hola", 'mundo', true, false, array, { id : 5}];

console.log(array_2);

// Acceder a los valores de un array a traves de su posicion 
//Empiezan siempre con indice cero 0

console.log(array_2[1]);
console.log(array_2[2]);
console.log(array_2[3]);
console.log(array_2[4]);
console.log(array_2[5]);
console.log(array_2[6]);

// Introducir nuevos valores al array 
// .push .unshift() => mutan el valor de nuestro array 

// Incorporamos valores al final del array 
array_2.push(3,"sd");
console.log(array_2);

// Incorporamos valores al inicio del array 
array_2.unshift("asdfasdf", 1,243);
console.log(array_2);


//Metodos para eliminar valores en nuestros arrays
// .pop() .shift() => mutan el valor del array 

// Valores al final -> pop
console.log(array_2);
array_2.pop();
console.log(array_2);

// Valores al inicio -> shift
console.log(array_2);
array_2.shift();
console.log(array_2);

// Metodo para eliminar modificar o agregar valores en nuestro array
// splice( x,y,z);

//desde hasta 
console.log(array_2);
array_2.splice(0,5);
console.log(array_2);

// Agregar valores .splice(2,0,"hola")
console.log(array_2);
array_2.splice(2,0, "hola",3,4,5,6);
console.log(array_2);

// Modificar valores .splice(indice,1, valores)
console.log(array_2);
array_2.splice(2,1, "modificacion");
console.log(array_2);

