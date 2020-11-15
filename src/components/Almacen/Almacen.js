import React from 'react';
import "./Almacen.css";
import OnePageSection from "../hco/OnePageSection/OnePageSection";
import "bootstrap/dist/css/bootstrap.min.css";
import Filtros from './Filtros/Filtros';
import Boton1 from '../UI/Botones/Boton1/Boton1';
import ProductoExclusivoSeccion from "../Home/ProductosExclusivosSeccion/ProductosExclusivosSeccion";
import BuscarProducto  from "./BusacarProducto/BuscarProducto";

export default function Almacen(props) {

    const [estadoFiltro, setEstadoFiltro] = React.useState(false); /* Esta variable es usada para hacer aparecer o desaparecer al modal que contiene al los filtros */
    
    const filtrarHandler = () =>{
        
        setEstadoFiltro(!estadoFiltro); /* Esta es la funcion que controla la variable para modificar la presecia o no del modal */
    }

    const filtrarBackdropHandler = (e) =>{ /* Esta tambien es una funcion para controlar la variable para modificar el modal, solo con la diferecia que no es llamada desde este archivo y no es cuando se toca un boton, es cuando se toca un backdrop oscuro detras del modal */
        if (e.target !== document.getElementById("Filtros")) {
            return;
        }
        filtrarHandler();
    }


    let filtros = <Filtros estado={filtrarBackdropHandler} estado2={filtrarHandler} filtrar={props.filtrar}/>;
    if (estadoFiltro === false) { /* Con esta condicion hago aparecer o desaparecer el modal */
        filtros = null;
    }

    return (
      <OnePageSection>
        {filtros} {/* modal de los filtros */}
        <div className="Almacen">
          <div className="wrapAlmacen">
            <BuscarProducto />
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
