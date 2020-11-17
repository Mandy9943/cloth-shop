import React, { Component, Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from "../Home/Home";
import {storeProducts, detailProduct} from "../../data";
import DetalleProducto from "../DetalleProducto/DetalleProducto" ;
import GeneralSection from '../Home/GeneralSection/GeneralSection';
import ComoComprarSection from '../Home/ComoComprarSection/ComoComprarSection';
import OnePageSection from '../hco/OnePageSection/OnePageSection';
import ServicioSection from '../Home/ServicioSection/ServicioSection';
import Almacen from "../Almacen/Almacen.js";
import Contacto from "../Contacto/Contacto";

export default class Tienda extends Component {
    state = {
       productos : [...storeProducts],
       detalleProducto : detailProduct,/* Atencion esta variable detailProduct es solo con propositos de desarrollo, en realiad deberia ir null */
	   productosExlusivos : [],
	   productosMostrados : [...storeProducts],
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

	filtrarHandler = (filtros) =>{
		const productos = [...this.state.productos];
		const productosFiltrados = [];
		let pFiltrado = true;

		productos.forEach( producto => {
			filtros.forEach(filtro => {
				if (producto.category[filtro.key] !== filtro.value)  {
					pFiltrado = false;
					
				}
				
			});

			if (pFiltrado) {
				productosFiltrados.push(producto);
			}

			pFiltrado = true;
			
		});

		this.setState({productosMostrados : productosFiltrados})
	}

	componentDidMount(){
		/* Con este codigo asigno la variable productos exclusivos solo con aqullos
		productos que se en encuentran en oferta, esta variable es pasada al Home para 
		que renderise esos productos */
		let productExcluisivo = [];
		const productos = [...this.state.productos];

		productExcluisivo = [...productos];
		

		productExcluisivo = productExcluisivo.filter((product) => {
			return product.oferta.estado === true;
		})

		this.setState({
			productosExlusivos : productExcluisivo,
		});
		/* Fin de la asignacio de productos Exlusivos */

	}
	


    render() {
        return (
          <Fragment>
            <Switch>
              {/* Ruta de Home */}
              <Route
                path={"/home"}
                render={() => (
                  <Home
                    productos={this.state.productosExlusivos}
                    imgClicked={this.imgClickedHandler}
                  />
                )}
              />

              {/* Ruta de Blog */}
              <Route path={"/blog"} render={() => <h1>bolg</h1>} />

              {/* Ruta de Almacen */}
              <Route
                path={"/almacen"}
                render={() => (
                  <Almacen
                    productos={this.state.productosMostrados}
                    imgClicked={this.imgClickedHandler}
                    filtrar={this.filtrarHandler}
                  />
                )}
              />

              {/* Ruta de Carrito */}
			  <Route 
				  path={"/carro"} 
				  render={() => <h1>Hello From carro</h1>} />

              {/* Ruta de Contacto */}
			  <Route 
			  path={"/contacto"} 
			  render={() => (
			  <Contacto />)} />

              {/* Ruta de FAQ */}
              <Route path={"/faq"} render={() => <h1>Hello From Faq</h1>} />

              {/* Ruta de Detalle-Producto */}
              <Route
                path={"/detalle-producto"}
                render={() => (
                  <DetalleProducto producto={this.state.detalleProducto} />
                )}
              />
              {/* Ruta de Como-Comprar */}
              <Route
                path={"/como-comprar"}
                render={() => (
                  <OnePageSection>
                    <ComoComprarSection />
                  </OnePageSection>
                )}
              />
              {/* Ruta de Servicios */}
              <Route
                path={"/servicios"}
                render={() => (
                  <OnePageSection>
                    <GeneralSection
                      minititle="Servicios"
                      title="Compra Inteligentemente"
                    >
                      <ServicioSection />
                    </GeneralSection>
                  </OnePageSection>
                )}
              />
              <Redirect exact from="/" to="home" />
            </Switch>
          </Fragment>
        );
    }
}
