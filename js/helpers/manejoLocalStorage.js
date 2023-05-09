function manejoLocalStorage() {
    //window.alert("Hello from Local storage!")

}

function recoverCarrito() {
    // window.alert("Recuperando carrito")
    const ls = window.localStorage
    let carrito = []
    let carritoSalvado = ls.getItem("cart")

    if (carritoSalvado) {
        carrito = JSON.parse(carritoSalvado)
    }
    return carrito

}

export { manejoLocalStorage, recoverCarrito };