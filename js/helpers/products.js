function products(products) {
    //console.log(products)
    const db = [...products]; // Pasa los produtos a un arreglo
    //console.log(db)
    function printProducts() {
        const productsDOM = document.querySelector('.products__container')
        let htmlProduct = ``
        for (let product of db) {
            htmlProduct += ` 
        <article class="product">
        <div class="product__image">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product__content">
          <button class="product__btn add--to--chart" data-id="${product.id}">
            <i class="bx bx-cart-add"></i>
          </button>
          <span class="product__price">$${product.price}</span>
          <span class="product__stock">Disponibles: ${product.quantity}</span>
          <h3 class="product__title">${product.name}</h3>
        </div>
      </article>
        `
        }
        productsDOM.innerHTML = htmlProduct
    }

    printProducts();

    return { db, printProducts }// retorna la base de datos y la funcion para imprimir productos
}


export default products