// Lista de productos
const productos = [
    {nombre: "Servidor virtual", precio: "$200/mes"},
    {nombre: "Soporte remoto", precio: "$50/hora"},
    {nombre: "Mantenimiento de redes", precio: "$100/mes"}
];

const listaProductos = document.getElementById('lista-productos');

productos.forEach(prod => {
    const div = document.createElement('div');
    div.innerHTML = `<h3>${prod.nombre}</h3><p>Precio: ${prod.precio}</p>`;
    listaProductos.appendChild(div);
});

// Formulario de contacto
const form = document.getElementById('form-contacto');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Gracias por tu mensaje. Nos contactaremos pronto.');
    form.reset();
});