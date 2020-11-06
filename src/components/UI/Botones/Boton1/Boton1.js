import React from 'react';
import "./Boton1.css";

export default function Boton1(props) {
    return (
        <button className="Boton1">
            {props.children}
        </button>
    )
}
