

export function plus(a,b)
{
    return a+b;
}

export function multiplication(a,b)
{
    return a*b;
} 

export function raised(a,b)
{
    return a**b;
} 

export function factorial(a){
    // Factorial of five  5 * 4 * 3 * 2 * 1
    let factorial = 1;
    for( let i = 2 ; i<=a ; i++){
        factorial *= i;
    }
    return factorial;
}

export const name = "Maths";