function cart(db, printProducts) {
    let cart = []
    // Elementos del DOM
    const productsDOM = document.querySelector('.products__container')
    const notifyDOM = document.querySelector('.notify')
    const cartDOM = document.querySelector('.cart__body')
    const countDOM = document.querySelector('.cart__count--item')
    const totalDOM = document.querySelector('.cart__total--item')
    const checkoutDOM = document.querySelector('.btn--buy')




    function printCart() {
        let htmlCart = ''

        if (cart.length === 0) {
            htmlCart += `
            <div class="cart__empty">
            <i class="bx bx-cart"></i>
            <p class="cart__empty--text">No hay productos en el carrito</p>
            </div>
            `
            notifyDOM.classList.remove('show--notify')
        } else {
            for (const item of cart) {
                const product = db.find(p => p.id === item.id)
                htmlCart += `
                <article class="article">
          <div class="article__image">
            <img src="${product.image}" alt="${product.name}">
          </div>
          <div class="article__content">
            <h3 class="product__title">${product.name}</h3>
            <span class="article__price">$${product.price}</span>
            <div class="article__quantity">
              <button type="button" class="article__quantity-btn article--minus" data-id="${item.id}">
                <i class="bx bx-minus"></i>
              </button>
              <span class="article__quantity-text">${item.qty}</span>
              <button type="button" class="article__quantity-btn article--plus" data-id="${item.id}">
                <i class="bx bx-plus"></i>
              </button>
            </div>
            <button type="button" class="article__btn remove-from-cart" data-id="${item.id}">
              <i class="bx bx-trash"></i>
            </button>
          </div>
        </article>


                `
            }
            notifyDOM.classList.add('show--notify')
        }

        cartDOM.innerHTML = htmlCart
        notifyDOM.innerHTML = showItemsCount()
        countDOM.innerHTML = showItemsCount()
        totalDOM.innerHTML = showTotal()

        //console.log('carrito: ')
        //console.log(cart)
        //console.log('cantidad:', showItemsCount())
        //console.log('Total: ', showTotal())
    }

    function addToCart(id, qty = 1) {
        const itemFound = cart.find(i => i.id === id)
        if (itemFound) {
            itemFound.qty += qty
        } else {
            cart.push({ id, qty })
        }

        printCart()

    }


    function removeFromCart(id, qty = 1) {
        const itemFound = cart.find(i => i.id === id)
        const result = itemFound.qty - qty
        if (result > 0) {
            itemFound.qty -= qty
        } else {
            cart = cart.filter(i => i.id != id)
        }

        printCart()

    }

    function deleteFromCart(id) {
        cart = cart.filter(i => i.id != id)
        printCart()
    }

    function showItemsCount() {
        let suma = 0
        for (const item of cart) {
            suma += item.qty
        }
        return suma

    }

    function showTotal() {
        let total = 0
        for (const item of cart) {
            //console.log('id',item.id)
            const productFound = db.find(p => p.id === item.id)
            // console.log("yi",productFound)
            total += item.qty * productFound.price
        }
        return total
    }

    function checkout() {
        for (const item of cart) {
            const productFound = db.find(p => p.id === item.id)
            productFound.quantity -= item.qty
        }
        window.alert(`Gracias por su compra: ${showItemsCount()} tems. $ ${showTotal()} `)
     
        cart = []
        printCart()
        printProducts()
    }

    printCart()

    //Eventos

    productsDOM.addEventListener('click', function (e) {
        if (e.target.closest('.add--to--chart')) {
            const id = +e.target.closest('.add--to--chart').dataset.id
            addToCart(id)
        }


    })

    cartDOM.addEventListener('click',function(e){
         if (e.target.closest('.article--minus')) {
            const id = +e.target.closest('.article--minus').dataset.id
            removeFromCart(id)
         }
         if (e.target.closest('.article--plus')) {
            const id = +e.target.closest('.article--plus').dataset.id
            addToCart(id)
         }
    
         if (e.target.closest('.remove-from-cart')) {
            const id = +e.target.closest('.remove-from-cart').dataset.id
            deleteFromCart(id)
         }

    
        })

    checkoutDOM.addEventListener('click',function(){
        checkout()
    }

    )

    //tests
    //addToCart(1)
    //addToCart(2)
    //addToCart(2)
    //addToCart(2)
    //removeFromCart(2)
    //deleteFromCart(2)
    //checkout()



}

export default cart
