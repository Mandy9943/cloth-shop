import React from 'react';
import "./BuscarProducto.css"

export default function BuscarProducto() {
    return (
        <div className="seccionBuscar">
              <input
                type="text"
                className="inputBuscar"
                placeholder="Buscar producto"
              />
              <button className="btnBuscar">
                <i className="fas fa-search"></i>
              </button>
            </div>
    )
}
