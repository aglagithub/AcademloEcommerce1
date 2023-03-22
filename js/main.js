import loader from './components/loader.js'
import showMenu from './components/showMenu.js'
import showCart from './components/showCart.js'
import products from './helpers/products.js'
import getProducts from './helpers/getProducts.js'

/*UI elements */
/*Pantalla mistras se carga la página */
loader()
/*Muestra  Menu*/
showMenu()

/*Mueatra carrito */
showCart()
/*UI elements.End */

/*Products */
products(await getProducts())

/*Carrito */