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
                    descrip="Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Deleniti earum soluta, recusandae nisi sed
                    obcaecati?"
                  />

                  <PasosComoComprar
                    numero="2"
                    title="escoger"
                    descrip="Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Deleniti earum soluta, recusandae nisi sed
                    obcaecati?"
                  />

                  <PasosComoComprar
                    numero="3"
                    title="escoger"
                    descrip="Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Deleniti earum soluta, recusandae nisi sed
                    obcaecati?"
                  />

                  <PasosComoComprar
                    numero="4"
                    title="escoger"
                    descrip="Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Deleniti earum soluta, recusandae nisi sed
                    obcaecati?"
                  />

                </div>
              </GeneralSection>
            </div>
          </div>
        </div>
      </section>
    );
}
