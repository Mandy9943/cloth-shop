/* Esto es un footer sencillo hecho manualmente solo con html y css
Senalar que las etiquetas <a> fueron subsituidas por Navlik o Link segun el caso
y ademas se utiliza un componente reutiblizable para el logo */

import React from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';
import Logo from '../../UI/Logo/Logo';



export default function Footer() {
    return (
      <footer className="footer">
        <div className="wraperFooter">
          <div className="footerSection cubaShop">
            <Logo dimension="peque" />
            <p>
              Las mejores prendas de Cuba: "Si esta buscando una prenda de vestir, estas en el lugar correcto".
            </p>
          </div>
          <div className="footerSection links">
            <h3>Enlaces</h3>
            <ul>
              <li>
                <Link to="/home">Inicio</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/almacen">Almacen</Link>
              </li>
              <li>
                <Link to="/carro">Carro</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="footerSection empresa">
            <h3>Interesantes</h3>
            <ul>
              <li>
                <Link to="/como-comprar">Como comprar ?</Link>
               {/* <a href="/home#como-comprar">Como comprar</a> */}
              </li>
              <li>
                <Link to="/servicios">Servicios</Link>
              </li>
              <li>
                <Link to="#">Nosotros</Link>
              </li>
            </ul>
          </div>
          <div className="footerSection pregunta">
            <h3>Duda ?</h3>
            <ul>
              <li>
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li>
                <Link to="#"></Link>+53 5837 99 31
              </li>
              <li>
                <Link to="#"></Link>coreo@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className="copyRight">
          <p>Copyright 2020 All rights reserverd | Made by Armando Martin</p>
        </div>
      </footer>
    );
}
