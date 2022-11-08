const person = {
    nombre : "Fede",
    age : 24,
    isDev: true,
    greeting : function(){
        console.log("Hello");
    }
}

// console.log(persona);
console.log(person.greeting());

const person2 = {
    nombre : "Miguel",
    age : 15,
    isDev : false,
    greeting : function(){
        console.log("Hello");
    } 
}

person2
const buildPerson = (name, age, isDev ) =>
{
    return {
        name, // == name : name
        age,
        isDev,
        greeting : function(){console.log("Hello")}
    }
}

const newPerson = buildPerson("Juan", 23, true);

console.log(newPerson);

const newPerson_2 = buildPerson("Maria", 44, false);
console.log(newPerson_2);

