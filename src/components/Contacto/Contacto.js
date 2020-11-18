import React from 'react'
import "./Contacto.css"
import { Link } from 'react-router-dom'



export default function Contacto() {
    return (
      <div id="Contacto" className="Contacto">
        <div className="wraperContacto">
          <h1 className="heading">Contactanos</h1>

          <div className="contenedorContacto">
            <form className="formularioContacto" action="">
                <div className="headerFormularioContacto">
                    <p>Por favor si tienes alguna duda o surgerecia no dude en contactarnos y dejar sus dudas o sugerecias ne nuestro formulario.</p>
                </div>
              <div className="forNombre ipnutForm">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" />
              </div>
              <div className="forApellido ipnutForm">
                <label htmlFor="apellido">Apellido</label>
                <input type="text" id="apellido" />
              </div>
              <div className="forEmail ipnutForm">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="forTelefono ipnutForm">
                <label htmlFor="telefono">Teléfono</label>
                <input type="number" id="telefono" />
              </div>

              <div className="forMensaje">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea name="mensaje" id="mensaje"></textarea>
              </div>

              <button className="btnContacto" type="submit">
                Enviar Mensaje
              </button>
            </form>

            <div className="informacionContacto">
                <div className="informacionConatcoWraper">

                
              <div className="headerInformacion">
                <p>Informacion de Contacto</p>
              </div>
              <div className="bodyInformacion">
                <div className="direccionInfo">
                    <h6>Direccion : </h6>
                  <p>
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </p>
                </div>
                <div className="telefonoInfo">
                    <h6>Telefono : </h6>
                  <p>+53 5837 99 31</p>
                </div>
                <div className="emailInfo">
                    <h6>Email : </h6>
                  <p>coreo@gmail.com</p>
                </div>
              </div>
              <div className="footerInformacion">
                  <h6>Nuestras Redes</h6>
                <div className="rederSociales">
                  <Link to="#">
                    <i className="fas fa-home"></i>
                  </Link>
                  <Link to="#">
                    <i className="fas fa-home"></i>
                  </Link>
                  <Link to="#">
                    <i className="fas fa-home"></i>
                  </Link>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
