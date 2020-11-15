import React from 'react';
import "./ProductoSlide.css";

export default class ProductoSlide extends React.Component {

    componentDidMount(){
        if (this.props.index === 0) {
            document.getElementsByClassName("mySlides")[0].style.display = "flex";
            
        }
    }
  render() {
    return (
      <div className="mySlides faded">
        <div className="imagenSlide">
          <img
            className="img-top"
            src={this.props.producto.img}
            alt={this.props.producto.img}
          />
          <div className="imgDescrip">
            <h3>{this.props.producto.title}</h3>
            <h5>
              
              $ {this.props.producto.price}
            </h5>
          </div>
        </div>
        
      </div>
    );
  }
}
