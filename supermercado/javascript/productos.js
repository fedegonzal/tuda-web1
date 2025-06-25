function renderizarProductos(productosJson) {
    let productos = document.querySelector("#productos");
    productos.innerHTML = ""; // Limpiamos el contenedor antes de agregar los productos

    for (let producto of productosJson) {
        let tplProducto = `
            <article data-precio="${producto.precio}" class="producto col-6 col-md-4 col-lg-3 col-xxl-2">
                <div class="atencion ${producto.atencionClase}">${producto.atencionTexto}</div>
                <div class="foto -ratio ratio-1x1">
                    <img src="${producto.imagen}" alt="">
                    <button class="btn agregar">+</button>
                </div>
                <div class="detalle">
                    <p>${producto.categoria}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <h2>${producto.titulo}</h2>
                        <div class="precio">${formatearPrecio(producto.precio)}</div>
                    </div>
                </div>
            </article>
        `;
        productos.insertAdjacentHTML("beforeend", tplProducto);
    }
}

function formatearPrecio(precio) {
    return new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        maximumFractionDigits: 0
    }).format(precio);
}


// Vamos a traer los productos desde una API ficticia
// tiene esta forma:
// "imagen": "https://d1on8qs0xdu5jz.cloudfront.net/web/images/productos/c/0000024000/24129.jpg",
// "titulo": "Leche LV Parcialmente Descremada Liviana 1% La Serenisima x 1 Lt.",
// "precio": "2650",
// "categoria": "Lacteos"

fetch("/api/productos.json") // Simulamos una API que devuelve un JSON
    .then(response => response.json())
    .then(data => {
        let productosJson = data; // Reemplazamos el array de productos con los datos de la API
        renderizarProductos(productosJson); // Llamamos a la función para renderizar los productos
    })
    .catch(error => console.error("Error al cargar los productos:", error));
