class Persona {
    nombre;
    edad;
    isDeveloper;
    constructor(nombre,edad,isDeveloper){
        this.nombre = nombre;
        this.edad = edad;
        this.isDeveloper = isDeveloper;
    }

    //metodo
    saludo(){
        console.log(`hola soy ${this.nombre}, tengo ${this.edad} años.`);
    }

}

const per = new Persona("fede", 24, true);
console.log(per);
per.saludo();

let numero = 60; //inicializando la variable numero
console.log(typeof numero);

let persona2 = new Persona("Marioa", 34, false);// instancio el objeto persona.
console.log(typeof persona2);
console.log(persona2 instanceof Persona);// si esta siendo isntanciada de la clase persona. 



