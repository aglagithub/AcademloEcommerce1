function products(products) {
  //Productos se traj hardcoded
  products = [
    {
      id: 1,
      name: "Camiseta de manga corta con cuello redondo",
      price: 10,
      image: "./js/components/Prods/shirt1_prckre.png",
      category: "shirt",
      quantity: 5,
      description:
        "Esta camiseta básica presenta un corte regular y un cuello redondo clásico. Es ideal para el uso diario y se puede combinar con una amplia variedad de looks.",
    },
    {
      id: 2,
      name: "Camiseta de manga larga con estampado gráfico",
      price: 15,
      image: "./js/components/Prods/shirt2_av4jld.png",
      category: "shirt",
      quantity: 3,
      description:
        "Perfecta para un look casual, esta camiseta de manga larga presenta un estampado gráfico llamativo en el pecho. Su ajuste regular y suave tejido de algodón la hacen cómoda y fácil de usar.",
    },
    {
      id: 3,
      name: "Camiseta con detalle de encaje",
      price: 12,
      image: "./js/components/Prods/shirt3_wlm0h3.png",
      category: "shirt",
      quantity: 2,
      description:
        "Esta camiseta presenta un detalle de encaje en el escote y mangas. Su ajuste regular y tela suave la hacen cómoda y fácil de usar para cualquier ocasión.",
    },
    {
      id: 4,
      name: "Camiseta de tirantes con espalda cruzada",
      price: 8,
      image: "./js/components/Prods/shirt4_cypl6n.png",
      category: "shirt",
      quantity: 10,
      description:
        "Con un toque de estilo femenino, esta camiseta de tirantes presenta una espalda cruzada con detalle de encaje. El ajuste es regular y la tela suave y cómoda.",
    },
    {
      id: 5,
      name: "Camiseta con hombros descubiertos",
      price: 12,
      image: "./js/components/Prods/shirt5_cnwq0w.png",
      category: "shirt",
      quantity: 6,
      description:
        "Con un toque femenino y coqueto, esta camiseta presenta hombros descubiertos y un ajuste regular. Su tela suave y transpirable la hace ideal para los días calurosos.",
    },
    {
      id: 6,
      name: "Camiseta con cuello alto y manga larga",
      price: 18,
      image: "./js/components/Prods/shirt6_pnwws6.png",
      category: "shirt",
      quantity: 4,
      description:
        "Esta camiseta de manga larga presenta un cuello alto y ajuste regular. Es ideal para un look elegante y cómodo.",
    },
    {
      id: 7,
      name: "Camiseta con cuello en V y manga corta",
      price: 9,
      image: "./js/components/Prods/shirt7_ofhlzd.png",
      category: "shirt",
      quantity: 8,
      description:
        "Esta camiseta clásica presenta un corte regular, cuello en V y mangas cortas. Es fácil de usar y combinar con diferentes looks.",
    },
    {
      id: 8,
      name: "Hoddie con estampado de leopardo",
      price: 20,
      image: "./js/components/Prods/hoddie4_wvwaiv.png",
      category: "hoddie",
      quantity: 8,
      description:
        "Este hoddie presenta un estampado de leopardo y está hecho de una mezcla suave de algodón y poliéster. Es ideal para un look casual y cómodo.",
    },
    {
      id: 9,
      name: "Hoddie con cremallera",
      price: 25,
      image: "./js/components/Prods/hoddie3_xboa0e.png",
      category: "hoddie",
      quantity: 10,
      description:
        "Este hoddie presenta una cremallera frontal y bolsillos laterales. Está hecho de una mezcla de algodón y poliéster para mayor comodidad y durabilidad.",
    },
    {
      id: 10,
      name: "Hoddie con capucha y cordón ajustable",
      price: 30,
      image: "./js/components/Prods/hoddie2_utnolh.png",
      category: "hoddie",
      quantity: 6,
      description:
        "Este hoddie presenta una capucha con cordón ajustable y un corte holgado para mayor comodidad. Está hecho de una mezcla suave de algodón y poliéster.",
    },
    {
      id: 11,
      name: "Hoddie con estampado de marca",
      price: 35,
      image: "./js/components/Prods/hoddie1_sxv2ce.png",
      category: "hoddie",
      quantity: 4,
      description:
        "Este hoddie presenta un estampado de marca en la parte delantera y está hecho de una mezcla suave de algodón y poliéster. Es ideal para un look casual y moderno.",
    },
    {
      id: 12,
      name: "Hoddie con cierre de botones",
      price: 40,
      image: "./js/components/Prods/hoddie5_sqnwic.png",
      category: "hoddie",
      quantity: 3,
      description:
        "Este hoddie presenta un cierre de botones en la parte delantera y bolsillos laterales. Está hecho de una mezcla suave de algodón y poliéster para mayor comodidad y durabilidad.",
    },
    {
      id: 13,
      name: "Hoddie con estampado de camuflaje",
      price: 45,
      image: "./js/components/Prods/hoddie6_i7gdrl.png",
      category: "hoddie",
      quantity: 7,
      description:
        "Este hoddie presenta un estampado de camuflaje y está hecho de una mezcla suave de algodón y poliéster. Es ideal para un look casual y moderno.",
    },
    {
      id: 14,
      name: "Sweater de punto grueso",
      price: 10,
      image: "./js/components/Prods/sweater1_o8qh0p.png",
      category: "sweater",
      quantity: 5,
      description:
        "Este sweater de punto grueso es ideal para los días fríos. Está hecho de una mezcla suave de lana y acrílico para mayor comodidad y calidez.",
    },
    {
      id: 15,
      name: "Sweater de cuello alto",
      price: 15,
      image: "./js/components/Prods/sweater2_y7yzqs.png",
      category: "sweater",
      quantity: 7,
      description:
        "Este sweater de cuello alto está hecho de una mezcla suave de lana y acrílico para mayor comodidad y calidez. Es ideal para un look elegante y cálido.",
    },
    
  ];

    //console.log(products)
    const db = [...products]; // Pasa los produtos a un arreglo
    //console.log(db)
   
    function printProducts() {
        const productsDOM = document.querySelector('.products__container')
        let disponibles =true;
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
          <h3 class="product__title">${product.name}</h3>
          <span class="product__price">$${product.price}</span>
          <span class="product__stock">`
          if(product.quantity > 0){
            disponibles = 'Disponibles:'+ product.quantity
          }else{
            disponibles = "<span class='no-disponible'>No Disponible </span>"
          }
          htmlProduct += ` 
          ${disponibles}
          `
          htmlProduct += 
          `</span>
          
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