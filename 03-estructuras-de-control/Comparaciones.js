// Compraraciones

// Igualdad

if(5 == 5){
    console.log("es igual a 5");
}

if(5 === 5){
    console.log("es muy igual a 5");
}

let a =5;
console.log(typeof a);
let b = "5";
console.log(typeof b);

//compara solo los valores ==
if(a == b){
    console.log("a y b son ioguales - Debil");
}

//compara el valor y el tipo ===
if(a === b){
    console.log("a y b son ioguales - Fuerte");
}


let c = 4;
let d = "4";

if(c != d){
    console.log("c es diferente a d - Debil");
}

if(c !== d){
    console.log("c es diferente a d - fuerte");
}

// Comparaciones mayor que y menor que 
let max =10;
let min =5;

if(max > min){
    console.log("max es mayor a min");
}

if(max >=  10){
    console.log("max es mayor o igual que 10");
}


if(min < max){
    console.log("min es menor a max");
}

if(min <=  10){
    console.log("min es menor o igual a 10");
}
