import React from 'react';
import ProductoExclusivo from './ProductoExclusivo/ProductoExclusivo';
import "./ProductosExclusivosSeccion.css";

export default function ProductosExclusivosSeccion(props) {
  console.log("productos Exclusivo : ", props);
    const productosExclusivos = props.productos.map((product) => {
      
    return (
      <ProductoExclusivo
        imagenRuta={product.img}
        imagenDescrip={product.title}
        title={product.title}
        price={product.price}
        id={product.id}
        imgClicked={() => props.imgClicked(product.id)}
        key={product.id}
      />
    );
    
    })
    return (
      <div className="ProductoEclusivoSeccion">
        {productosExclusivos}
      </div>
    );
}
