import React from 'react';
import "./Logo.css";
import { Link } from 'react-router-dom';


export default function Logo(props) {
    let claseLogo = ["logo", props.dimension];
    let claseLinkColor = "negro";
    if(props.color){
      claseLinkColor = props.color;
    }
    
    return (
        <div className={claseLogo.join(" ")}>
            <h3>
              <Link to="/" >
                <span className={claseLinkColor}>

                  <span className="inicialLogo">C</span>uba
                  <span className="medioLogo">S</span>hop
                </span>
              </Link>
            </h3>
          </div>
    )
}
