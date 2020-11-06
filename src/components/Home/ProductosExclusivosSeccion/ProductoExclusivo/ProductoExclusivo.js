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
      /*  <div className="col-12 col-md-6 mx-auto col-lg-4 my-5">
        <div className="card">
          <div className="p-3 img-container">
            <img
              src="img/product-3.png"
              alt="A movile phone"
              className="card-img-top"
            />
          </div>
          <div className="card-footer d-flex justify-content-between">
            <p className="mb-0 aling-self-center">sadasdas</p>
            <h5 className="font-italic mb-0">
              <span className="mr-2">$</span>3243
            </h5>
          </div>
        </div>
      </div> */
    );
}
