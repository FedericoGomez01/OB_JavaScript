// import {factorial , plus, raised, name} from './Modules/Math.js';
import * as mathsModules from './Modules/Math.js'

//El intelisnce nos ayuda a llamar al import de la funcion que exportamos por defecto.
import getAutor, { book } from './Modules/Literature.js';

const sum = mathsModules.plus(4,7);
console.log(sum);

const rais = mathsModules.raised(4,5);
console.log(rais);
console.log(mathsModules.name);

console.log(getAutor());
console.log(book);