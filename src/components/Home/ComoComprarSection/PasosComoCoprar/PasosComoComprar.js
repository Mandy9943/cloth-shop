import React from 'react';
import "./PasosComoComprar.css";

export default function PasosComoComprar(props) {
    return (
        <article className="pasos-como-comprar">
                    <div className="numero-paso">
                      <h3>{props.numero}</h3>
                    </div>
                    <div className="contenido-articulo">
                      <h3>{props.title}</h3>
                      <p>
                        {props.descrip}
                      </p>
                    </div>
                  </article>
    )
}
