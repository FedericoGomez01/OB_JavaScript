// Formas de importar y exportart modulos
// 1. CommonJS - Require
// 2. Import ES6 - import

//const MathsModule = require("./Modules/Maths.js")
//const factorial = MathsModule.factorial;
//const { factorial , suma } = MathsModule;

const { factorial, plus } = require("./Modules/Maths.js")

console.log("Mathsmodule : ", {factorial, plus});

const fact = factorial(5);
console.log("factorial", fact);

const pl = plus(12, 90);
console.log("suma", pl);