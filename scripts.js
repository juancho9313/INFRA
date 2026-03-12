// ======================
// LISTA DE PRODUCTOS
// ======================
const productos = [
    {
        nombre: "Servidor Virtual",
        precio: "$200/mes",
        descripcion: "Servidor virtual de alto rendimiento para tu empresa con soporte 24/7.",
        imagen: "images/producto1.jpg"
    },
    {
        nombre: "Soporte Remoto",
        precio: "$50/hora",
        descripcion: "Asistencia técnica remota rápida y confiable para tus sistemas.",
        imagen: "images/producto2.jpg"
    },
    {
        nombre: "Mantenimiento de Redes",
        precio: "$100/mes",
        descripcion: "Optimización y monitoreo constante de tu infraestructura de red.",
        imagen: "images/producto3.jpg"
    }
];

const listaProductos = document.getElementById('lista-productos');

// Crear tarjetas de productos
productos.forEach((prod, index) => {
    const div = document.createElement('div');
    div.classList.add('card', 'producto-card');
    div.innerHTML = `
        <img src="${prod.imagen}" alt="${prod.nombre}">
        <h3>${prod.nombre}</h3>
        <p class="precio">${prod.precio}</p>
        <button class="btn-detalle" data-index="${index}">Ver Detalles</button>
    `;
    listaProductos.appendChild(div);
});

// ======================
// MODAL DE PRODUCTO
// ======================
const modal = document.createElement('div');
modal.id = 'modal-producto';
modal.classList.add('modal');
modal.innerHTML = `
    <div class="modal-content">
        <span id="modal-close" class="modal-close">&times;</span>
        <img id="modal-img" src="" alt="">
        <h3 id="modal-nombre"></h3>
        <p id="modal-precio"></p>
        <p id="modal-descripcion"></p>
    </div>
`;
document.body.appendChild(modal);

const modalImg = document.getElementById('modal-img');
const modalNombre = document.getElementById('modal-nombre');
const modalPrecio = document.getElementById('modal-precio');
const modalDescripcion = document.getElementById('modal-descripcion');
const modalClose = document.getElementById('modal-close');

listaProductos.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-detalle')) {
        const index = e.target.dataset.index;
        const producto = productos[index];
        modalImg.src = producto.imagen;
        modalNombre.textContent = producto.nombre;
        modalPrecio.textContent = producto.precio;
        modalDescripcion.textContent = producto.descripcion;
        modal.classList.add('modal-show');
    }
});

modalClose.addEventListener('click', () => {
    modal.classList.remove('modal-show');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('modal-show');
    }
});

// ======================
// FORMULARIO DE CONTACTO
// ======================
const form = document.getElementById('form-contacto');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validación básica
    const nombre = form.querySelector('input[type="text"]').value.trim();
    const correo = form.querySelector('input[type="email"]').value.trim();
    const mensaje = form.querySelector('textarea').value.trim();

    if (!nombre || !correo || !mensaje) {
        showMensaje("Por favor completa todos los campos", "error");
        return;
    }

    showMensaje("Gracias por tu mensaje. Nos contactaremos pronto.", "success");
    form.reset();
});

// Función para mostrar mensaje
function showMensaje(text, tipo) {
    let div = document.createElement('div');
    div.className = `form-mensaje ${tipo}`;
    div.textContent = text;
    form.prepend(div);

    // Animación fade out
    setTimeout(() => {
        div.classList.add('fade-out');
    }, 3000);

    setTimeout(() => {
        div.remove();
    }, 4000);
}
