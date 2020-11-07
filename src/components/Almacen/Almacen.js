import React from 'react';
import "./Almacen.css";
import OnePageSection from "../hco/OnePageSection/OnePageSection";
import "bootstrap/dist/css/bootstrap.min.css";
import Filtros from './Filtros/Filtros';
import Boton1 from '../UI/Botones/Boton1/Boton1';
import ProductoExclusivoSeccion from "../Home/ProductosExclusivosSeccion/ProductosExclusivosSeccion";

export default function Almacen(props) {

    const [estadoFiltro, setEstadoFiltro] = React.useState(false);
    
    const filtrarHandler = () =>{
        
        setEstadoFiltro(!estadoFiltro);
    }

    const filtrarBackdropHandler = (e) =>{
        if (e.target !== document.getElementById("Filtros")) {
            return;
        }
        filtrarHandler();
    }


    let filtros = <Filtros estado={filtrarBackdropHandler} estado2={filtrarHandler} filtrar={props.filtrar}/>;
    if (estadoFiltro === false) {
        filtros = null;
    }

    return (
      <OnePageSection>
        {filtros}
        <div className="Almacen">
          <div className="wrapAlmacen">
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
                <div className="seccionFiltro">
                    <Boton1 click={filtrarHandler}>Filtrar</Boton1>
                </div>
            <div className="contenidoAlmacen">
              <div className="headerContenidoAlmacen">
                <h4>Nuestros Productos</h4>
              </div>
              <div className="wraperContenidoAlmacen">
                <div className="seccionListaProductos">
                    <ProductoExclusivoSeccion productos={props.productos} imgClicked={props.imgClicked}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OnePageSection>
    );
}
