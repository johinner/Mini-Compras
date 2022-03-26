console.log("vinculado");

//!Objeto Literal
const MiGato = {
    nombre: "kiti",
    cazador: "true",
    edad: 2,
    enemigos: ["agua", "conejo"],
    otros:{
        comida:["pescado", "consentrado"],
        origen:{
            rescatado:"true",
            edad_rescate:"20 dias"
        },
        comiendo(alimento){
            console.log(`${MiGato.nombre} esta comiendo ${alimento}`);
        },
        listaEnemigos(){
            MiGato.enemigos.forEach((item) => console.log(item));
        }
    },
    get nombreMayus(){
        return this.nombre.toUpperCase() ;
    },

    set agregarEnemigo(nuevoEnemigo){
        this.enemigos.push(nuevoEnemigo);
    }
};
//CRUD
 console.log(MiGato.enemigos[0]);

//Crear Nueva propiedad en el objeto
MiGato.color = "Negro";
console.log(MiGato);

//delete - Eliminar propiedad
delete MiGato.cazador;

//hasOwnProperty - comprobar si existe o no la propiedad
console.log(MiGato.hasOwnProperty("cazador"));

//Objetos Anidados
console.log(MiGato.otros.origen.edad_rescate);

//llamar Metodos dentro del objeto
MiGato.otros.comiendo("consentrado");

//Funcion flecha linea 18-20
MiGato.otros.listaEnemigos();

// for...in itera sobre un objeto
let nombrePropiedad = [];
for (let propiedad in MiGato){
    nombrePropiedad.push(propiedad)
}
console.log(nombrePropiedad);

//metodo object
console.log(Object.values(MiGato));
Object.values(MiGato).forEach((item) => console.log(item));

//Destructuring - crea multiples variables de un objeto
const {nombre,edad,enemigos} = MiGato;
console.log(`Nombre: ${nombre}
Edad: ${edad}
Enemigos: ${enemigos}`);

//Alias extraer el nombre de la propiedad y guardarla con otro nombre
const {nombre: nombreGato} = MiGato;
console.log(nombreGato);

//get - no recibe parametros y sirve para modificar una propiedad
console.log(MiGato.nombreMayus);

// set - recibe un solo parametro y sirve para modificar la propiedad
MiGato.agregarEnemigo = "Perro"
console.log(MiGato.enemigos);

//Por referencia (Object, Array y Function) lo que implica que no se copia el valor en sí, 
//                 si no una referencia a través de la cual accedemos al valor original.
let a = ["uno"];
let b = a;

b.push("dos");
console.log(a); 

// Por Valor Cuando asignamos valores primitivos (Boolean, Null, Undefined, Number, String y Symbol), 
//                el valor asignado es una copia del valor que estamos asignando.

let c = 5;
let d = c; 
d = 10;

console.log(c , d);

