// Sets o conjuntos (en castellano)

const array = [ 1,2,3,4,5,6,1,2,3,4,5,6, "hola", { id : 5 },{ id : 5 }, "hola"];

console.log({ id : 5 } ==={ id : 5 });
//por eso podemos agregarlo varias veces 

const miSet = new Set(array);
//ordenado 
console.log(array);

//desordenado y unico
// en db nos aseguramos de no tener los valores duplicados.
console.log(miSet);


// .add()

miSet.add(9);
miSet.add(10);
miSet.add(11);
console.log(miSet);

// .delete()

miSet.delete("hola");
console.log(miSet);

// .clear()
//miSet.clear();
//console.log(miSet);

// .has()

console.log(miSet.has(9));
console.log(miSet.has({id:5}));



// .size propiedad
console.log(miSet.size);
console.log(miSet);

miSet.forEach(valor => console.log(valor));


const itetator_miset = miSet.values();
console.log(itetator_miset);

const arr_miset = [...miSet];
console.log(arr_miset);