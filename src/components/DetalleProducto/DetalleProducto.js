import React from 'react';
import "./DetalleProducto.css";

export default function DetalleProducto(props) {

    return (
      <div className="DetalleProducto">
        <div className="wraperDetalleProducto">
          <div className="detalleSection">
            <div className="imgDetalle">
              <img className="card-img-top" src={props.producto.img} alt={props.producto.title} />
            </div>
            <div className="detalles">
              <div>
                <div className="tituloDetalle ">
                  <h4>Artículo : {props.producto.title}</h4>
                </div>
                <div className="precio">
                  <p>Precio: $ {props.producto.price}</p>
                </div>
                <div className="cantidad">
                    
                  <p>Cantidad de Unidades : {props.producto.cant} unidades</p>
                    
                </div>
                <div className="descripcion">
                    <h5>Descripcion</h5>
                  <p>{props.producto.info}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
