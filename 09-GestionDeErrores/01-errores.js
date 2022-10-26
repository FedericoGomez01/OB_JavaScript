const miFuncion = val =>
{
    if( typeof val === "number")
        return val * 2;

    throw new Error("El valor debe ser de tipo numero");
};

//const elDoble = miFuncion("21");
//console.log(elDoble);
const numero = "";
//const numero = 8;

try{
    // trata de ejecutar este codigo de aca
    console.log("Esta ejecutandose de manera correcta");
    const doble = miFuncion(numero);
    console.log(doble);
}catch(e){
    // En caso de que falle, quiero que ejecutes esto.
    console.error(e);
    console.log("ERROR!");
}finally{
    console.log("esto se va a ejecutar siempre!");
}



// InternalError, SyntaxError, TypeError, RangeError y ReferenceError.

