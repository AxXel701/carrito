let carrito = [];

function agregarAlCarrito(nombre, precio, imagen) {
  carrito.push({ nombre, precio, imagen });
  actualizarCarrito();
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

function actualizarCarrito() {
  let carritoHTML = "";
  let total = 0;

  carrito.forEach((producto, index) => {
    carritoHTML += `
            <div class="carrito-item">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <p>${producto.nombre} - $${producto.precio}</p>
                <button onclick="eliminarDelCarrito(${index})">X</button>
            </div>
        `;
    total += producto.precio;
  });

  document.getElementById("carrito-lista").innerHTML =
    carritoHTML || "<p>El carrito está vacío</p>";
  document.getElementById("total").innerText = total;
  document.getElementById("contador").innerText = carrito.length;
}

function toggleCarrito() {
  document.getElementById("carrito-contenedor").classList.toggle("mostrar");
}
