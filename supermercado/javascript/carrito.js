document.querySelectorAll('.producto .agregar').forEach(function (boton) {
// <article data-precio="${precio}" class="producto col-6 col-md-4 col-lg-3 col-xxl-2">
    boton.addEventListener('click', function () {
        const producto = this.closest('.producto');
        //console.log(producto);
        const nombre = producto.querySelector('h2').textContent;
        const precio = producto.getAttribute('data-precio');
        //alert(`Producto agregado: ${nombre} - Precio: ${precio}`);

        // Aquí podrías agregar la lógica para actualizar el carrito
        const carritoBadge = document.querySelector('.carrito .total');
        const carritoPrecio = document.querySelector('.carrito .precio');
        let cantidad = parseInt(carritoBadge.textContent) || 0;
        cantidad++;
        carritoBadge.textContent = cantidad;

        let total = parseInt(carritoPrecio.textContent) || 0;
        total += parseInt(precio);
        carritoPrecio.textContent = total
    });
});
