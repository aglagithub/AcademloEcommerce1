
const IMAGES_PATH = "../images/Prods/"

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
        class="Btn_purchase"\
        id="numProdBuy"\
        value="ProdNumber"\
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
function generateProductHTMLInCarrito(producto) {
    let productHTML = "";
    productHTML = `
    <div class="carritoContainer">
    <div class="carrito-Item"> 
    <div class="carrito-NombreProducto">Producto: ${producto['nombreProducto']} </div>
    <div class="carrito-Producto-Precio">Precio: ${producto['valorUnitario']}</div>
    <div class="carrito-Producto-cantidad">Cantidad: ${producto['cantidad']}</div>
    <hr>
    <div class="carrito-Producto-Total">Subtotal: ${producto['valorProductos']}</div>
  </div>
    `
    return productHTML
}
/****************************** */
//coloca contenidos de todos los productos del carrito en pantalla
/****************************** */
function displayCarritoContents() {
    let carritoContent = document.getElementById("carrito-contents")
    for (let index = 0; index < carrito.productos.length; index++) {
        carritoContent.innerHTML += generateProductHTMLInCarrito(carrito.productos[index])
    }
}

function displayCarritoWindow() {
    document.getElementById('carrito-titulo').innerHTML = `<h2>Carrito</h2>`
    displayCarritoContents()
    document.getElementById('carrito-total').innerHTML = `<h2>Total: CO$ ${carrito.ValorTotal}</h2>`
}

displayCarritoWindow()