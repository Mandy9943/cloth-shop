import React from 'react';
import "./ServicioSection.css";
import ArticleServicio from "./ArticleServicio/ArticleServicio";

export default function ServicioSection() {
  
    return (
        <div className="servicios">
        <ArticleServicio
          icono="fa-credit-card"
          title="Pagos Online"
          descrip="Le ofrecemos la oportunidad de pagar por sus productos de
              manera online desde la comodidad de su hogar"
        />
        <ArticleServicio
          icono="fa-money-bill"
          title="Buenos Precios"
          descrip=" Tenemos muchos de nuestros productos como los mejores Precios
      del mercado. Ademas realizamos rebajas y descuentos."
        />

        <ArticleServicio
          icono="fa-search"
          title="Busqueda Facil"
          descrip=" Disponemos de una variedad de filtros para que encuentre lo
      que bussque de una manera facil."
        />

        <ArticleServicio
          icono="fa-truck"
          title="Domicilio"
          descrip=" Contamos con mensajeria a domicilio, con una gran rapidez y
      eficiencia."
        />
      </div>
    )
}
