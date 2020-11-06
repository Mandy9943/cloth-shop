/* Esto es un menu de navegacion sencillo hecho manualmente solo con html y css
Senalar que las etiquetas a fueron subsituidas por Navlik o Link segun el caso
y ademas se utiliza un componente reutiblizable para el logo */

import "./Navegacion.css";
import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../../UI/Logo/Logo";


export default function Navegacion() {
  /* codigo para detectar cuando se haga scroll para agregar
  algunas clases. (menu pegajoso) */
  const [scrolled, setScrolled] = React.useState(false);
  

  const handlerScroll = ()=>{
    const offset = window.scrollY;
    if(offset > 250){
      setScrolled(true);
    }else{
      setScrolled(false);
    }
  }

  useEffect(()=> {
    window.addEventListener("scroll", handlerScroll);
  })

  const headerClases = ["header"];
  if (scrolled) {
    headerClases.push("menuFixed");
  }
  /* termina el codigo para el menu pegajoso */
  const [openMenu, setOpenMenu] = React.useState(false);
  const menuClases = ["menu"]; 
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  }

  if(openMenu){
    menuClases.push("d-flex");
  }

    return (
      <header className={headerClases.join(" ")}>
        <div className="subheader">
          <Logo dimension="medio" color="blanco"/>
          <div className="menu-movil">

          
          <button className="menu-movil-button" onClick={toggleMenu}>
            <i className="fas fa-bars" ></i>
          </button>
          <button className="menu-movil-button" onClick={toggleMenu}>
            <i className="fas fa-cart-plus" ></i>
          </button>
          </div>
          <ul className={menuClases.join(" ")}>
            <li className="menuItem">
              <NavLink activeClassName="active" to="/home">
                Inicio
              </NavLink>
            </li>
            <li className="menuItem">
              <NavLink activeClassName="active" to="/blog">
                Blog
              </NavLink>
            </li>
            <li className="menuItem">
              <NavLink activeClassName="active" to="/almacen">
                Almacen
              </NavLink>
            </li>
            <li className="menuItem">
              <NavLink activeClassName="active" to="/carro">
                Carro
              </NavLink>
            </li>
            <li className="menuItem">
              <NavLink activeClassName="active" to="/contacto">
                Contacto
              </NavLink>
            </li>
            <li className="menuItem">
              <NavLink activeClassName="active" to="/faq">
                FAQ
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    );
}
