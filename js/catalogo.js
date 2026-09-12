// 1. Arreglo de objetos de productos (Base de datos)
const productos = [
    {
        id: 1,
        nombre: "Serum Tinted",
        marca: "atenea",
        precio: "$55.000",
        imagen: "/img/Productos_atenea/SerumTinted.png"
    },
    {
        id: 2,
        nombre: "Corrector de ojeras",
        marca: "bloomshell",
        precio: "$30.000",
        imagen: "/img/productos_bloomshell/Corrector.png"
    },
    {
        id: 3,
        nombre: "Fijador de Maquillaje",
        marca: "montoc",
        precio: "$34.000",
        imagen: "/img/productos_montoc/FijadorMaquillaje.png"
    },
    {
        id: 4,
        nombre: "Serum Blush",
        marca: "anik",
        precio: "$28.000",
        imagen: "/img/productos_anik/SerumBlush.png"
    },
    {
        id: 5,
        nombre: "Perfume Capilar de miel",
        marca: "click",
        precio: "$50.500",
        imagen: "/img/productos_clickhair/PerfumeMiel.png"
    },
    {
        id: 6,
        nombre: "Shampoo Herbal",
        marca: "milagros",
        precio: "$35.000",
        imagen: "/img/productos_milagros/ShampooHerbal.png"
    },
    {
        id: 7,
        nombre: "Shampoo de Cebolla",
        marca: "kaba",
        precio: "$40.000",
        imagen: "/img/productos_kaba/ShampooCebolla.png"
    },
    {
        id: 8,
        nombre: "Stick Capilar",
        marca: "ole",
        precio: "$36.000",
        imagen: "/img/productos_ole/StickCapilar.png"
    }
];

// 2. Selección de elementos del DOM
const contenedorGrid = document.getElementById('productos-grid');
const botonesFiltro = document.querySelectorAll('.btn-filtro');

// 3. Función para pintar las tarjetas en el HTML
function renderizarProductos(lista) {
    contenedorGrid.innerHTML = '';

    if (lista.length === 0) {
        contenedorGrid.innerHTML = '<p class="sin-resultados">No hay productos disponibles para esta marca.</p>';
        return;
    }

    lista.forEach(producto => {
        const tarjeta = document.createElement('article');
        tarjeta.classList.add('card-producto');
        tarjeta.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="info-producto">
                <span class="marca-tag">${producto.marca}</span>
                <h3>${producto.nombre}</h3>
                <p class="precio">${producto.precio}</p>
                <button class="btn-comprar">Añadir al carrito</button>
            </div>
        `;
        contenedorGrid.appendChild(tarjeta);
    });
}

// 4. Función de filtrado por marca
function filtrarPorMarca(marcaSeleccionada) {
    // Actualizar clase activa en los botones
    botonesFiltro.forEach(boton => {
        if (boton.dataset.marca === marcaSeleccionada) {
            boton.classList.add('activo');
        } else {
            boton.classList.remove('activo');
        }
    });

    // Filtrar la lista
    if (marcaSeleccionada === 'todos' || !marcaSeleccionada) {
        renderizarProductos(productos);
    } else {
        const filtrados = productos.filter(p => p.marca.toLowerCase() === marcaSeleccionada.toLowerCase());
        renderizarProductos(filtrados);
    }
}

// 5. Asignar eventos de clic a los botones
botonesFiltro.forEach(boton => {
    boton.addEventListener('click', () => {
        const marca = boton.dataset.marca;
        filtrarPorMarca(marca);
    });
});

// 6. Leer parámetros URL al cargar la página (URLSearchParams)
document.addEventListener('DOMContentLoaded', () => {
    const parametros = new URLSearchParams(window.location.search);
    const marcaURL = parametros.get('marca');

    if (marcaURL) {
        filtrarPorMarca(marcaURL);
    } else {
        renderizarProductos(productos);
    }
});