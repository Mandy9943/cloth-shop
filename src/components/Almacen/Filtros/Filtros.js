import React, {Component} from 'react';
import "./Filtros.css";
import FiltroItem from "./FiltroItem/FiltroItem";
import {storeProducts} from "../../../data";
import Boton1 from '../../UI/Botones/Boton1/Boton1';

export default class Filtros extends Component {
    state= {
        filtrosPareja : [], 
    }
   
    changedHandler = (e, filtro) => {
        const filtroPareObject = {key : null, value : null};
        const updatedFiltroPareja = [...this.state.filtrosPareja];
        
        filtroPareObject.key=filtro;
        filtroPareObject.value=e.target.value;

        for (let index = 0; index < updatedFiltroPareja.length; index++) {
            if (updatedFiltroPareja[index].key === filtro ) {
                updatedFiltroPareja.splice(index, 1)
            }
            
        }
        if (e.target.value !== "") {
            
            updatedFiltroPareja.push(filtroPareObject);
        }
        

        this.setState({filtrosPareja : updatedFiltroPareja})
    }

    clearHandler = () => {
        this.props.estado2();
    }

    componentDidMount(){

        let filtro = document.getElementById("Filtro");
        filtro.style.height = filtro.scrollHeight + "px";
        filtro.style.opacity = "1";
        
    }


    render(){
    const products = [...storeProducts]; /* Esto esta sujeto a cambios ya q solo se usa asi por fines de desarrollo */
    
    let filtros = Object.keys( /* Aqui extarigo en forma de array los key elemento de un objecto y los pongo 
        en filtros. ejemplo : filtros = ["color", "marca", "tipo"] */
        products[0].category
    );

    filtros = filtros.map((key) => { /* Recorro el array de filtros que contiene los key de los filtos por ejemplo filtros = ["color", "marca", "tipo"]
    ,luego creo una variable llamada values que inicialmente esta vacia con el objetvo de llenarla de todos los valores psoibles de los key
    de todos los productos, Teniendo en cuenta que si hay un valor que se va ingresar que no se encuentra en la lista que lo agregue */
        const values = [];
        products.forEach((product) => {
        if (
            values.indexOf(
            product.category[key]
            ) === -1
        ) {
            values.push(product.category[key]);
        }
        });
        return [key, values];
    });

    

    const listaFiltros = filtros.map((filtro) => {
        return (<FiltroItem
                filtro={filtro[0]}
                valores={filtro[1]}
                key={filtro[0]}
                changed={(e) => this.changedHandler (e, filtro[0])}
                
                />)
    });

    


    return (
      <div className="Filtros" id="Filtros" onClick={(e) => this.props.estado(e)}>
        <div className="wraperFiltros"  id="Filtro">
          <div className="headerFiltro">
            <h3>Filtros</h3>
          </div>
          <div className="filtrosLista">
            <div className="wraperFiltrosLista">{listaFiltros}</div>
          </div>
          <div className="footerFiltros">
              <div className="btnFooter" >
              <Boton1 click={this.clearHandler}>Limpiar</Boton1>

              </div>
              <div className="btnFooter">
              <Boton1 click={() => this.props.filtrar(this.state.filtrosPareja)}>aplicar</Boton1>

              </div>

              
          </div>
        </div>
      </div>
    );
    }
}
