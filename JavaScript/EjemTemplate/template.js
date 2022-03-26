console.log("vinculado");

const carrito = document.getElementById("carrito");
const template = document.getElementById("template");
const footer = document.getElementById("Footer");
const footerTemplate = document.getElementById("templateFooter");
const fragment = new DocumentFragment();
const fragmentFooter = new DocumentFragment();

//!matches - aroja true si esta en el evento indicado

document.addEventListener("click", (e) => {
  if (e.target.matches(".card .btn-outline-primary")) {
    agregarAlCarrito(e);
  }
  //! delegacion de evento "e aun no existente en el DOM"
  if (e.target.matches(".list-group-item .btn-success")) {
    btnAumentar(e);
  }
  if (e.target.matches(".list-group-item .btn-danger")) {
    btnDisminuir(e);
  }
});

let carritoObjeto = [];

function agregarAlCarrito(e) {
  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
    precio: parseInt(e.target.dataset.precio),
  };

  //! findIndex devuelde el indice de un array si no exite arroja -1
  const indice = carritoObjeto.findIndex((item) => item.id === producto.id);

  console.log(indice);
  if (indice === -1) {
    carritoObjeto.push(producto);
  } else {
    carritoObjeto[indice].cantidad++;
    //carritoObjeto[indice].precio = carritoObjeto[indice].cantidad * producto.precio;
  }

  pintarCarrito();
}

const pintarCarrito = () => {
  carrito.textContent = "";

  carritoObjeto.forEach((item) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".lead").textContent = item.titulo;
    clone.querySelector(".badge").textContent = item.cantidad;
    clone.getElementById("span").textContent = item.precio * item.cantidad;

    //! agregar un dataset nuevo
    clone.querySelector(".btn-danger").dataset.id = item.id;
    clone.querySelector(".btn-success").dataset.id = item.id;
    fragment.appendChild(clone);
  });
  //! fragment no se dibuja en el DOM
  //! se va almacenando para luego ser utilizado, no genera reflou
  carrito.appendChild(fragment);
  //console.log(carritoObjeto)

  pintarFooter();
};

const pintarFooter = () => {
  footer.textContent = "";

  //metodo 2 >
  //const total = carritoObjeto.reduce((acc, item) => acc + item.cantidad * item.precio, 0);

  let total = 0;
  carritoObjeto.forEach((item) => total = total + (item.precio * item.cantidad));

  const clone = footerTemplate.content.cloneNode(true);
  clone.getElementById("total").textContent = total;
  if (total > 0){
    fragmentFooter.appendChild(clone);
    footer.appendChild(fragmentFooter);
  }
  
};

//! funcion quitar y agregar

const btnAumentar = (e) => {
  carritoObjeto = carritoObjeto.map((item) => {
    if (item.id === e.target.dataset.id) {
      item.cantidad++;
    }
    return item;
  });
  pintarCarrito();
};

const btnDisminuir = (e) => {
  carritoObjeto = carritoObjeto.filter((item) => {
    if (item.id === e.target.dataset.id) {
      if (item.cantidad > 0) {
        item.cantidad--;
        if (item.cantidad === 0) return;
        return item;
      }
    } else {
      return item;
    }
  });
  pintarCarrito();
};
