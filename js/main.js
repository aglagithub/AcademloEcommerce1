import loader from './components/loader.js'
import showMenu from './components/showMenu.js'
import showCart from './components/showCart.js'
import products from './components/products.js'
import getProducts from './helpers/getProducts.js'
import cart from './components/cart.js'
import {manejoLocalStorage,recoverCarrito} from './helpers/manejoLocalStorage.js'
import {setdisplayMode, switchDarkmode} from './helpers/darkMode.js'



/*Recuperar contenido de carrito */
//console.log( recoverCarrito())

let carritoGuardado = recoverCarrito()

// switchDarkmode()
setdisplayMode()
/*UI elements */
/*Pantalla mientras se carga la página */
loader()
/*Muestra  Menu*/
showMenu()

/*Mueatra carrito */
showCart()
/*UI elements.End */

/*Products */
const {db, printProducts} = products(await getProducts())

/*Carrito */
cart(db, printProducts,carritoGuardado)


