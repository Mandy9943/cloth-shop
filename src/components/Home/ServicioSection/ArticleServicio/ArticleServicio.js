import React from 'react';
import "./ArticleServicio.css";

export default function ArticleServicio(props) {
    const iconoClases = ["fas", props.icono];
    return (
        <div className="article-servicio">
              <div className="cotenedor-media-servicio">
                  <div className="media-servicio">
                      <i className={iconoClases.join(" ")}></i>
                  </div>
              </div>
              <div className="titulo-servicio">
    <h3>{props.title}</h3>
              </div>
              <div className="descripcion-servcio">
                <p>
                  {props.descrip}
                </p>
              </div>
            </div>
    )
}
