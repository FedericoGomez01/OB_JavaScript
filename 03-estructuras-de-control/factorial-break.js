// Factorial de 10 usando while if y break

let factorial = 1;
let i=1;

bucleFactorial: while(true)
{
    factorial = factorial * i;
    if(i == 10){
        break bucleFactorial;
    }
    i++;
}
console.log(factorial);