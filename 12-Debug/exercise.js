var fib = function(n) {
    const sol = [0, 1];

    for (let i = 2; i<= n; i++) {
        sol[i] = sol[i -1] + sol[i - 2];
    }

    return sol;
};


console.log(fib(6));