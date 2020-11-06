/* Aqui este layout funciona como hco para agrupar la navegacion y el footer
 en una misma porcion de codigo y luego pasarlo a todos los lugares que haga falta
El layout contiene en un inicio la navegacio, luego todo el codigo de la pagina que 
esta mostrando y luego muestra el footer */

import React, {Fragment} from 'react';
import Navegacion from './Navegacion/Navegacion';
import Footer from './Footer/Footer';
import { Switch, Route } from 'react-router-dom';
import "./Layout.css";
import Tienda from "../Tienda/Tienda";
export default function Layout(props) {
    return (
      <Fragment>
        <Navegacion />

        <main className="mainWraper">
          <Switch>
            <Route path="/" component={Tienda} />{/* Esta sentencia me permite entrar a la tienda cuando se
                                                   entre a la ruta "/" y mantner vivo todas las variables 
                                                   de los states */}
          </Switch>
          {props.children}
        </main>
        <Footer />
      </Fragment>
    );
}
