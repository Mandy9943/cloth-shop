import React from 'react';
import "./FIltroItem.css";

export default function FiltroItem(props) {

    const options = props.valores.map( (val) => {
    return (<option key={val} value={val} >{val}</option>)
    });
    return (
      <div className="filtroItem">
        <h5>{props.filtro}</h5>
        <div className="selectFiltro">
          <select name="" id={props.filtro} onChange={props.changed}>
            <option value="">Todos</option>
            {options}
          </select>
        </div>
      </div>
    );
}
