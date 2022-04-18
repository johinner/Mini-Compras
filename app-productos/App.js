//clases
class Product{
    constructor(name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI{
    addProduct(product){
       const productList = document.getElementById("product-list");
       const element = document.createElement('div');
       element.innerHTML = `
                <div class = 'card text-center mb-4'>
                    <div class = 'card-body'>
                        <strong>Product Name</strong>:${product.name}
                        <strong>Product Price</strong>:${product.price}
                        <strong>Product Year</strong>:${product.year}
                        <a href='#' class='btn btn-danger m-md-3' name='delete' >Delete</a>
                    </div>
                </div>
       `;
       productList.appendChild(element);
       form.reset();
    }
    
    deleteProduct(element){
        if(element.name === 'delete'){
            //ver su contenedor padre 
            element.parentElement.parentElement.parentElement.remove()
            
        }
    }

    showMessage(){

    }
}

//DOM EVENT
const form = document.getElementById('product-form')
form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = e.path[0][0].value;
    const price = e.path[0][1].value;
    const year = e.path[0][2].value;
    
    const product = new Product(name, price, year);

    const ui = new UI();
    ui.addProduct(product);
    
})

document.getElementById('product-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteProduct(e.target);
})