import React from 'react';
import "./AnimatedMenuIcon.css";

export default function AnimatedMenuIcon(props) {
    
    return (
      <div className="container" id="containerAnimatedMenuIcon" onClick={() => {
        document.getElementById("containerAnimatedMenuIcon").classList.toggle("change");
        props.menuClicked();
       
      }}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    );
}
