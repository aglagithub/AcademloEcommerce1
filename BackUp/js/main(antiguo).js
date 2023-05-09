
const IMAGES_PATH = "../images/Prods/"
const NOMBRE_REPO_LOCAL_STORAGE = "academloStorage";
const NOMBRE_DB = "carrito"

/*======================================*/
/* function consoleLogProducts(productos) {
    productos.forEach((producto) => {
        console.log(producto)
    })
} */


function getGradeImage(calificacion) {
    let imageGrade = "halfHeart.svg"
    let grade = +calificacion
    if (grade >= 5) { imageGrade = "5hearts.svg" }
    else if (grade >= 4.5) { imageGrade = "4_5hearts.svg" }
    else if (grade >= 4) { imageGrade = "4hearts.svg" }
    else if (grade >= 3.5) { imageGrade = "3_5hearts.svg" }
    else if (grade >= 3) { imageGrade = "3hearts.svg" }
    else if (grade >= 2.5) { imageGrade = "2_5hearts.svg" }
    else if (grade >= 2) { imageGrade = "2hearts.svg" }
    else if (grade >= 1.5) { imageGrade = "1_5hearts.svg" }
    else if (grade >= 1) { imageGrade = "2_5hearts.svg" }
    else imageGrade = "0_5hearts.svg"

    return imageGrade
}

/****************************** */
//Generacion de HTML de un producto
/****************************** */
function createProductHTML(procuctJSON) {
    let productHTML = "";
    let disponible = "             "
    let disabled = ""
    if (procuctJSON['cantidad'] === "0") {
        disponible = "No disponible"
        disabled = "disabled"
    }
    let imageGrade = getGradeImage(procuctJSON['calificacion'])
    productHTML = `<div class="productContainer" id="${procuctJSON['consecutivo']}">\
<div class="Image-container" id="${procuctJSON['prodId']}">\
        <img\
          class="Product_Image"\
          src="../images/Prods/${procuctJSON['imagen']}"\
          alt="imagen Producto"\
        />\
      </div>\
      <div class="Product_Name">${procuctJSON['nombre']}</div>\
      <div class="Product_Author">${procuctJSON['autor']}</div>\
      <div class="Product_Grade">\
        <img\
          class="Grade_image"\
          src="../images/Calif/${imageGrade}"\
          alt="Imagen calificacion"\
        />\
      </div>\
      <div class="Product_Price">CO$ <span class="valor">${procuctJSON['precio']}</span></div>\
      <div class="Product_State" id="state">${disponible}</div>\
      <button\
        type="button"\
        class="btn_purchase"\
        id="${procuctJSON['prodId']}"\
        value="${procuctJSON['prodId']}"\
        ${disabled}\
      >\
        Comprar\
      </button>\
    </div>`
    return productHTML
}

/****************************** */
//Coloca productos En pantalla
/****************************** */
function displayProducts(numToShow) {
    let productContent = document.getElementById('products')
    productContent.innerHTML = ""
    for (let index = 0; index < numToShow; index++) {
        //console.log(productContent)
        productContent.innerHTML += createProductHTML(productos[index])
    }
}

displayProducts(productos.length)

/****************************** */
//Colocacion de producto  en carrito:
/****************************** */
//!!Pendiente : hay que ver si ya esta


/****************************** */
//Display de un producto en carrito:
/****************************** */
function getProdPorID(prodID) {


}
function generateProductHTMLInCarrito(productoEncarrito) {
    let productHTML = "";

    let nombreProducto = null;
    let precio = null;
    let cantidad = null;


    //console.log(productoEncarrito.prodId)
    //console.log(productos[0].prodId)

    for (let i = 0; i < productos.length; i++) {

        if (productos[i].prodId == productoEncarrito.prodId) {
            nombreProducto = productos[i].nombre
            precio = productos[i].precio
            cantidad = productoEncarrito.cantidad


            productoEncarrito.subtotal = precio * cantidad
            break
        }

    }
    if (nombreProducto === null) {
        return 0
    }


    productHTML = `
    <div class="carritoContainer">
    <div class="carrito-Item"> 
    <div class="carrito-NombreProducto">Producto: ${nombreProducto} </div>
    <div class="carrito-Producto-Precio">Precio: ${precio}</div>
    <div class="carrito-Producto-cantidad">Cantidad: ${cantidad}</div>
    <hr>
    <div class="carrito-Producto-Total">Subtotal: ${productoEncarrito.subtotal}</div>
  </div>
    `

    return productHTML
}
/****************************** */
//coloca contenidos de todos los productos del carrito en pantalla
/****************************** */
function displayCarritoContents() {


    let carritoContent = document.getElementById("carrito-contents")
    for (let index = 0; index < carrito.length; index++) {
        //console.log(carrito[index])
        carritoContent.innerHTML += generateProductHTMLInCarrito(carrito[index])
    }

}

function calculaMontoEnCarrito() {
    let valorTotalEnCarrito = 0;
    for (let index = 0; index < carrito.length; index++) {
        valorTotalEnCarrito += carrito[index].subtotal
    }

    return valorTotalEnCarrito;

}

function displayCarritoWindow() {
    document.getElementById('carrito-titulo').innerHTML = `<h2>Carrito</h2>`
    displayCarritoContents()
    document.getElementById('carrito-total').innerHTML = `<h2>Total: CO$ ${calculaMontoEnCarrito()}</h2>`
}

displayCarritoWindow()

/************************* */
/* Registro Manejadores de eventos */
/************************* */

/**Manejador de eventos para botón de pago */
document.getElementById("boton-pago").addEventListener("click", function () {
    alert("ir a Pagar");
});

/**Manehadores de evenatos para incluir produtos en carrito */
let purchaseButtons = Array.from(document.querySelectorAll('.btn_purchase'));

purchaseButtons.forEach((boton) => {
    boton.addEventListener("click", function (e) {
        alert(e.target.id);
        //putProductInCarrito(e.target.id)

    })
})

/**Manehadores de evenatos para incluir produtos en carrito. End */

/********************************** */
/**Manejo de items en IndexedDB*/
/********************************** */

/* function putProductsInCarrito(id) {

    productos.forEach((producto) => {
        if (producto.prodId == id) {
            console.log(producto);
            putProductInCarrito(prodId);
        }

    })

}

 */
function soportaIndexDB() {

    if ('indexedDB' in window) {
        return true
    } else {
        return false
    }
}

function existeDB(db) {
    let baseDedatos
    let solicitudDeConexion = indexedDB.open(db, 1)

    solicitudDeConexion.onsuccess = function (evento) {
        baseDedatos = evento.target.result
        console.log("onsuccess")

    }
    solicitudDeConexion.onerrror = function (evento) {
        baseDedatos = "Error"
        console.log("onerrror")

    }
    solicitudDeConexion.onupgradeneeded = function (evento) {
        console.log("onupgradeneeded")
        baseDedatos = evento.target.result
        let notas = baseDedatos.createObjectStore('notas', { autoIncrement: true })
        let transaccion =baseDedatos.transaction(['notas'],'readwrite')
        contenidoDB=transaccion.createObjectStore('notas')
        let nota ={saludo:"Hello"}
        notas.add(nota)
        this.transaction.oncomplete = function(){
            console.log("onclomplete")
        }

    }

}

let contenidoDB
console.log('existe Base de datos?:', existeDB(NOMBRE_REPO_LOCAL_STORAGE))


function leeIndexedDB() {
    return false

};








