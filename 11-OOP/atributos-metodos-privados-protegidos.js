class Persona {
    // Private => #
    // Private -> Solo se puede acceder destro de la clase.
    #nombre;
    #edad;
    
    // Protected -> _
    // Protected -> Solo se puede acceder dentro de la clase y desde clases descendientes.
    _isDeveloper;
    constructor(nombre,edad,isDeveloper){
        this.#nombre = nombre;
        this.#edad = edad;
        this._isDeveloper = isDeveloper;
    }

    //metodo
    saludo(){
        console.log(`hola soy ${this.getName()}, tengo ${this.#getAge()} años.`);
    }

    getName()
    {
        return this.#nombre;
    }

    #getAge(){
        return this.#edad;
    }

    getAge(){ return this.#edad; }

    setAge(edad) { this.#edad = edad; }
}

const persona = new Persona("Fede", 24, true);
console.log(persona);

console.log(persona.nombre);
console.log(persona.isDeveloper);
persona.saludo();

persona.nombre = "roberto";
console.log(persona.getName());
persona.saludo();

// Getter - > Metodos que nos permiten obtener atributos o metodos privados o protegidos 

const edad = persona.getAge();
console.log(edad);

// Setter -> metodos que nos permiten cambiar el valor de alguno de lkos atributos privados o protegidos.

persona.setAge(34);
console.log(persona.getAge());


