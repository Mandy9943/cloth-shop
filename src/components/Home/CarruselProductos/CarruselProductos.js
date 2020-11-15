import React, { Component, Fragment } from 'react';
import "./CarruselProductos.css";
import ProductoSlide from './ProductoSlide/ProductoSlide';

class CarruselProductos extends Component {
 
  state = {
    index : 1,
  }

  plusSlides = (n) => {
    
    
    let slideIndex = this.state.index;
    slideIndex = slideIndex + n;
    
    this.showSlides(slideIndex);
  }



  currentSlide = (n) => {
    this.showSlides(n);
  }

  showSlides = (n, verificar = true) => {
    let slideIndex = n;
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}


    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activeSlide", "");
    }
    slides[slideIndex-1].style.display = "flex";  
    dots[slideIndex-1].className += " activeSlide";

    if (verificar) {
      this.setState({
        index : slideIndex
      });
      
    }
  }

  componentDidMount(){
    if (this.props.productos.length) {
      
      this.showSlides(this.state.index, false);
    }
  }

  render() {
    let productSlide = null;

    if (this.props.productos.length) {
      productSlide = this.props.productos.map( (p, i) => {
        return <ProductoSlide key={p.id} producto={p} index={i}/>
        
      });

      
      
    }
    
    return (
      <Fragment>
        <div className="slideshow-container" >
          {productSlide}
        
          <button className="prev" onClick={(e) => this.plusSlides(-1)}>
            &#10094; 
          </button>
          <button href="#" className="next" onClick={(e) => this.plusSlides(1)}>
            &#10095;
          </button>
        </div>
        <br />

        <div style={{textAlign:"center"}}>
          {this.props.productos.map( (p, i) => {
            return <span key={i} className="dot" onClick={(e) => this.currentSlide(i+1)}></span>
          })}
        </div>
      </Fragment>
    );
  }
}

export default CarruselProductos;