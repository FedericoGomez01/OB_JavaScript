

function plus(a,b)
{
    return a+b;
}

function multiplication(a,b)
{
    return a*b;
} 

function raised(a,b)
{
    return a**b;
} 

function factorial(a){
    // Factorial of five  5 * 4 * 3 * 2 * 1
    let factorial = 1;
    for( let i = 2 ; i<=a ; i++){
        factorial *= i;
    }
    return factorial;
}

module.exports = {
    plus,
    multiplication,
    raised,
    factorial
}