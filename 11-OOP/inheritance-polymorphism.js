// What Inheritance means - Herencia 

class People {
    _name;
    _age;
    constructor(name,age){


        this._name = name;
        this._age = age;
    }

    greetig(){
        console.log(`Hello I am ${this._name} and I am ${this._age} years old`);
    }
}

class Developer extends People {
    constructor(name, age, lenguaje){
        super(name, age); // call the base class contructor
        this.name = name;
        this.age = age;
        this.lengauje = lenguaje;
    }
    
    
    // Polymorphism - polimorfismo 
    //poli = muchos morfismo= formas
    greetig(){// Override
        super.greetig(); // access to a base method
        console.log(`and my favourite lenguaje is ${this.lengauje}`)
    }

}

const newDev = new Developer("Federico", 24, "JavaScript");

newDev.greetig();




