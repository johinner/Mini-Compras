//* array
//! Estos métodos no mutan el array original, sino que nos devuelven uno nuevo.

//! map:
//* El método map iterará sobre cada elemento de un arreglo y devuelve un nuevo arreglo que contiene los resultados de llamar a la función callback en cada elemento. 

const frutas = ["🍌", "🍏", "🍓"];

const nuevoArray = frutas.map((item) => item);
console.log(nuevoArray);

const users = [
    { id:1, name: "John", age: 34 },
    { id:2, name: "Amy", age: 20 },
    { id:3, name: "camperCat", age: 10 },
];

const names = users.map((user) => user.name)
console.log(names);

//! filter:
//*crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

const mayores = users.filter((item) => item.age !==20);
console.log(mayores);

//! find:
//*devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.

const {name} = users.find((item) => item.id === 2);
console.log(name);

//! some:
//*comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.

const existe = users.some((item) => item.id === 4);
console.log(existe);

//! findIndex:
//*devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.

const indice = users.findIndex((item) => item.id === 2)
console.log(indice);

//! slice:
//*devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.

const arr = ["Cat", "Dog", "Tiger", "Zebra"];

const arrNuevo = arr.slice(1, 3)
console.log(arrNuevo);

//! concat 
//* se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"]; 

const array3 = array1.concat(array2);
console.log(array3);

//! Spread syntax
//* permite a un elemento iterable tal como un arreglo o cadena ser expandido en lugares donde son esperados.

const array4 = [...array1, ...array2]
console.log(array4);

//! reduce
//* ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

const numeros = [1,2,3,4,5];

const sumarTodos = numeros.reduce((acc, valorActual) => acc + valorActual);
console.log(sumarTodos);

//*ejemplo 2 
const arrayNumeros = [
    [0, 1],
    [2, 3],
    [4, 5],
];

const soloNumeros = arrayNumeros.reduce(
    (acc, current) => acc.concat(current)
);

console.log(soloNumeros);

//! split
//* ivide un objeto de tipo String en un array, mediante un separador.

const cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const arrayMeses = cadenaMeses.split(",");
console.log(arrayMeses);

//! join 
//* une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.

const nuevamenteString = arrayMeses.join("-");
console.log(nuevamenteString);