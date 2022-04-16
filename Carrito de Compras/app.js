console.log('vinculado')

const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();

let carrito = {};

document.addEventListener('DOMContentLoaded', () =>{
    fetchData();
})

items.addEventListener('click', e => {
    addCarrito(e);
})
const fetchData = async () => {
    try{
        const res = await fetch('api.json');
        const data = await res.json();
        pintarCard(data);
    }catch(error){
        console.log(error)
    }3

}

const pintarCard = data =>{
    data.forEach(element => {
        templateCard.querySelector('h5').textContent = element.title;
        templateCard.querySelector('p').textContent = element.precio;
        templateCard.querySelector('img').setAttribute('src', element.thumbnailUrl);
        templateCard.querySelector('.btn-dark').dataset.id = element.id;
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone)
    });

    items.appendChild(fragment);
    
}
const addCarrito = e =>{
    // mandamos todo el elemento padre
    if (e.target.classList.contains('btn-dark')){
        setCarrito(e.target.parentElement);
    }
    e.stopPropagation();
}

const setCarrito = objeto => {
    const producto = {
        id: objeto.querySelector('.btn-dark').dataset.id,
        title: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad: 1
    }
    //existe la propiedad
    if(carrito.hasOwnProperty(producto.id)){
        producto.cantidad = carrito[producto.id].cantidad +1;
    }
    //crea un copia de producto
    carrito[producto.id] = {...producto}
    console.log(carrito)
}