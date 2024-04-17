import React from 'react';
import './componentes/estilos.css'

function MenuPrincipal() {
    return (
        <div className="menu">
            <h1>Menú Principal</h1>
            <ul>
                <li><a href="usuarios.html">Usuarios</a></li>
                <li><a href="genero.html">Género</a></li>
                <li><a href="direccion.html">Dirección</a></li>
                <li><a href="categoria.html">Categoría</a></li>
                <li><a href="productos.html">Productos</a></li>
                <li><a href="clientes.html">Clientes</a></li>
                <li><a href="sesiones.html">Sesiones</a></li>
                <li><a href="productos_sesiones.html">Productos de Sesiones</a></li>
            </ul>
        </div>
    );
}

export default MenuPrincipal;
