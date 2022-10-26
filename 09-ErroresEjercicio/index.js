const logger = require('./logger');

function conexionDB(){
    throw new Error("Lanzo el error de la funcion");
}

try{
    conexionDB();
}catch (e){
    logger.log("error","Fallo la conexion a DB por timeout.");
}