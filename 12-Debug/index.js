const people = {
    name : "Federico",
    age: 24
}
console.log(people);

function getDoubleAge(age){
    return 2 * age;
}

const doubleAge = getDoubleAge(people.age);
console.log(doubleAge);