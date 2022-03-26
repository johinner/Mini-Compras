console.log("vinculado");

//! El burbujeo y la captura.
//* De eventos son dos mecanismos que describen lo que sucede cuando dos controladores del mismo tipo de evento se activan en un elemento.

const padre = document.querySelector(".border-primary");
const hijo = document.querySelector(".border-secondary");
const nieto = document.querySelector(".border-danger");

//*Fase de captura: Se propaga desde el elemento padre hasta el hijo.
padre.addEventListener("click", () => {
  //  console.log("me diste click padre");
});

hijo.addEventListener("click", () => {
   // console.log("me diste click hijo");
});

nieto.addEventListener("click", () => {
    //console.log("me diste click nieto");
});

//! stopPropagation
//* evita la propagación adicional del evento actual en las fases de captura y bubbling.
//* e = Origen de evento

const cajas = document.querySelectorAll(".container div");

cajas.forEach((item) => {
    item.addEventListener("click", (e) => {
        e.stopPropagation();
        //console.log(e.target.id)
        
        delegacionDeEventos(e);
    });
});

//! preventDefault
//* Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.

const delegacionDeEventos = (e) => {

    if(e.target.id === "padre"){
        console.log("es padre") 
    }
     else if(e.target.id === "hijo"){
         console.log("es hijo") 
     }
     else{
         console.log("es nieto")
     }
}

