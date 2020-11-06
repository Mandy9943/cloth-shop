import React, { Component, Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from "../Home/Home";
import {storeProducts, detailProduct} from "../../data";
import DetalleProducto from "../DetalleProducto/DetalleProducto" ;

export default class Tienda extends Component {
    state = {
       productos : [...storeProducts],
       detalleProducto : detailProduct,/* Atencion esta variable detailProduct es solo con propositos de desarrollo, en realiad deberia ir null */
    }
    /* Manejador para cuando en Home se clickee una foto poder mostrar la informacion de ese producto */
    imgClickedHandler = (id) =>  {
      const productos = [...this.state.productos];
      const detalleProducto = productos.find((product) => {
        return product.id === id;
      });

      
      this.setState({
        detalleProducto : detalleProducto
      });

     
    }

    render() {
        return (
          <Fragment>
            <Switch>
              <Route 
              path={"/home"} 
              render={() => <Home productos={storeProducts} 
                                  imgClicked={this.imgClickedHandler}/>} />
              
              <Route
                path={"/blog"}
                render={() => <h1>bolg</h1>}
              />
              
              <Route
                path={"/almacen"}
                render={() => <h1>Hello From Almacen</h1>}
              />
              
              <Route path={"/carro"} render={() => <h1>Hello From carro</h1>} />
              
              <Route
                path={"/contacto"}
                render={() => <h1>Hello From Contacto</h1>}
              />
              
              <Route path={"/faq"} render={() => <h1>Hello From Faq</h1>} />

              <Route
                path={"/detalle-producto"}
                render={() => <DetalleProducto producto={this.state.detalleProducto}/>}
              />
              <Redirect exact from="/" to="home" />
            </Switch>
            
          </Fragment>
        );
    }
}
