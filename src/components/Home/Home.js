import React from 'react';
import "./Home.css";
import GeneralSection from "./GeneralSection/GeneralSection";
import "bootstrap/dist/css/bootstrap.min.css";
import ServicioSection from "./ServicioSection/ServicioSection";
import ComoComprarSection from "./ComoComprarSection/ComoComprarSection";
import ProductosExclusivosSeccion from "./ProductosExclusivosSeccion/ProductosExclusivosSeccion";

export default function Home(props) {
  
    return (
      <div className="home">
        <div id="inicioHome" className="bg-image">
          <div className="overlay">
            <div className="centro-imge">
              <h1 className="slogan">Las mejores prendas de Cuba</h1>
              <p className="slogan-descripcion">
                "Somos una empresa innovadora de ventas de ropas que nos
                caraterizamos por nuestro buen servicio y atencion al cliente.
                Si esta buscando una prenda de vestir, estas en el lugar
                correcto".
              </p>
            </div>
          </div>
        </div>

        <GeneralSection /* SECCION DE SRVICOS */
          minititle="Servicios"
          title="Compra Inteligentemente"
          section="servicos"
        >
            <ServicioSection />
         
        </GeneralSection>

        <GeneralSection /* SECCION DE PRODUCTOS EXCLUSIVOS */
          minititle="Que ofrecemos"
          title="Ofertas exclusivas"
          section="oferta"
        >
          <ProductosExclusivosSeccion productos={props.productos} imgClicked={props.imgClicked} />
        </GeneralSection>

        <ComoComprarSection /> {/* SECCION DE COMO COMPRAR */}
       
      </div>
    );
}
