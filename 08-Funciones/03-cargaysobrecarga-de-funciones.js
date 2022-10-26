// Carga y sobrecarga de funciones 

function saludar(){
    hola()
}

function hola(){
    console.log("Hola, Soy la funcion hola()");
}

saludar();

/// 1. global()
/// 2. saludar() global()
/// 3. saludar() hola() global()
/// 4. saludar()
/// 5. global()


//Error de concepto - lanza error de star overflow 
function recursivo(){
    recursivo()
}

//recursivo()