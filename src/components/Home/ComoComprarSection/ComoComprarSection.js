import React from 'react';
import GeneralSection from "../GeneralSection/GeneralSection";
import "./ComoComprar.css"
import PasosComoComprar from './PasosComoCoprar/PasosComoComprar';

export default function ComoComprarSection() {
    return (
      <section id="como-comprar" className="como-comprar">
        <div className="contenedor-como-comprar">
          <div className="overlay-como-comprar">
            <div className="instrucciones-comprar">
              <GeneralSection
                minititle="Como comprar"
                title="Como funciona el servicio principal"
              >
                <div className="contenido-como-comprar">
                  <PasosComoComprar
                    numero="1"
                    title="escoger"
                    descrip="Escoges un producto de nustros diferentes listados de productos
                    y lo agregas al carrito"
                  />

                  <PasosComoComprar
                    numero="2"
                    title="Carrito"
                    descrip="Una vez en el carro puedes modificar los detalles de la compra 
                    como puede ser la cantidad a llevar. En este paso solo debes revisar todos
                    los parametros y continuar"
                  />

                  <PasosComoComprar
                    numero="3"
                    title="escoger"
                    descrip="Los detalles del pedido serian recogidos via whatsapp o telegram.
                    Solo debe verificar sus datos como: direccion, nombre y # de carnet para hacer la entrega o
                    la reservacion de un pedido"
                  />

                  <PasosComoComprar
                    numero="4"
                    title="Esperar"
                    descrip="Luego queda esperar a que su cesta de productos lleguen a su casa (2 dias hábiles) o lo vayas a recoger
                    en nuestras instalaciones"
                  />

                </div>
              </GeneralSection>
            </div>
          </div>
        </div>
      </section>
    );
}
