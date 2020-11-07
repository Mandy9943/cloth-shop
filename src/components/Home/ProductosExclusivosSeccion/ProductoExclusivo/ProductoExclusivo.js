import React from 'react';
import "./ProductoExclusivo.css";
import Boton1 from '../../../UI/Botones/Boton1/Boton1';
import { Link } from 'react-router-dom';



export default function ProductoExclusivo(props) {
    return (
      <div className="ProductoExclusivo">
        <div className="ProductoWraper">
          <div className="ProductoImagen" onClick={props.imgClicked}>
            <Link to={"/detalle-producto"}>

            <img
              src={props.imagenRuta}
              alt={props.imagenDescrip}
              className="card-img-top"
              />
              </Link>
          </div>
          <div className="ProductoTitulo textCenter">
            <p>{props.title}</p>
          </div>
          <div className="ProductoPrecio textCenter">
            <p>
              <span>$</span> {props.price}
            </p>
          </div>

          <div className="AgregarProducto textCenter">
            <Boton1>
                <i className="fas fa-cart-plus"></i>
            </Boton1>
          </div>
        </div>
      </div>
      
    );
}
