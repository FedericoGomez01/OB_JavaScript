// Cassos especificos de Break y continue 

let lista = [ 1,2,3,4,5,6,7,8];

for (let i = 0; i < lista.length; i++) {
    
    const k = 100;
    
    if(lista[i] == 3)
    {
        continue;
    }
    console.log(lista[i]);
    var j = 30;
    if(lista[i] == lista.length/2)
        break;
}




// Cual es el ambito de un bucle

//si declaramos las varibles con la palabra reservada let las variables dentro de los bucles van a finalizar al terminar el bucle.

// En cambio si declaramos la variable con la palabra reservara var y const la variable va a estar definida par atodo el codigo.


console.log(i);
console.log(j);
console.log(k);