//! El modelo de objeto de documento (DOM) es una interfaz de programación para los documentos HTML.

//*La interfaz Document representa cualquer página web cargada en el navegador y
//*sirve como punto de entrada al contenido de la página (El árbol DOM).
console.log(document);

//todo: getElementById : Devuelve una referencia al elemento por su ID.
console.log(document.getElementById("title").textContent);

//todo: querySelector : Devuelve el primer elemento del documento que coincida con el grupo especificado de selectores.
console.log(document.querySelector("h1").textContent);

//todo: querySelectorAll : Seleciona todos los elementos con la misma clase
console.log(document.querySelectorAll(".title").textContent);

//todo: element : eventos disponibles para los elementos HTML
const h1 = document.getElementById("title");
h1.style.color = "red";

//! target.addEventListener(tipo, listener);
//* Registra un evento a un objeto en específico.

const cambiarColor = document.getElementById("btn-primari");

cambiarColor.addEventListener("click", () => {
  h1.style.color = "black";
});

//todo: Ejemplo

const inputColor = document.getElementById("inputColor");
const btnVisualizar = document.getElementById("btnVisualizar");
const parafoExa = document.getElementById("parafoExa");
const card = document.getElementById("card");

btnVisualizar.addEventListener("click", () => {
  parafoExa.textContent = inputColor.value;
  card.style.backgroundColor = inputColor.value;
});

//! createElement crea un elemento HTML especificado por su tagName.
const lista = document.querySelector("#lista");
const agregarLista = document.getElementById("agregarLista");

let indice = 2;
const arrayElem = [];

//! appendChild Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado.
/*agregarLista.addEventListener("click", () => {
  let li = document.createElement("li");
  arrayElem.push(`Elemento ${indice}`);
  li.textContent = arrayElem[indice - 2];
  lista.appendChild(li);
  indice++;
});*/

//TODO newDocumentFragment()
//TODO createDocumentFragment()
//*La interfaz DocumentFragment NO GENERA REFLOU.
//* no se agrega al DOM, se genera paralela al DOM 

const fragment = document.createDocumentFragment();

agregarLista.addEventListener("click", () => {
    let li = document.createElement("li");
    arrayElem.push(`Elemento ${indice}`);
    li.textContent = arrayElem[indice - 2];
    fragment.appendChild(li);
    indice++;
    lista.appendChild(fragment);
  });

  //todo: ejemplo con createElement
  
const listaDinamica = document.querySelector("#listaDinamica");

const arrayElementos = ["Perú", "Bolivia", "Colombia"];

const fragment2 = new DocumentFragment();

arrayElementos.forEach((pais) => {
    const li = document.createElement("li");
    li.className = "list";
    
    const bold = document.createElement("b");
    bold.textContent = "País: ";

    const span = document.createElement("span");
    span.className = "text-primary";
    span.textContent = pais;

    li.appendChild(bold);
    li.appendChild(span);
    fragment2.appendChild(li);

    
});

listaDinamica.appendChild(fragment2);
    
//!  Ejemplo con innerHTML Genera refluo

const listaDinamica2 = document.querySelector("#listaDinamica2");

let template = "";

arrayElementos.forEach((pais) => {
    template += `
    <li class="list">
        <b>País: </b> <span class="text-primary">${pais}</span>
    </li>
    `;
});

listaDinamica2.innerHTML = template;

//! ejemplo con clone 
//*La interfaz DocumentFragment NO GENERA REFLOU.
//* no se agrega al DOM, se genera paralelamente al DOM

const listaDinamica3 = document.querySelector("#listaDinamica3");
const arrayAnimales = ["Perro", "Gato", "Conejo"]
const liTemplate = document.getElementById("liTemplate");
const fragment3 = new DocumentFragment();

arrayAnimales.forEach((animales) => {

  const clone = liTemplate.content.cloneNode(true);
  clone.querySelector(".text-primary").textContent = animales;
  fragment3.appendChild(clone);
  
})
  listaDinamica3.appendChild(fragment3);

  //! ojo si content.cloneNode necesitas hacer un evento a ca hijo necesitaria (firstElementChild)
  const ejem = liTemplate.content.firstElementChild.cloneNode(true);

  