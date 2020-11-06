import React from 'react';
import './GeneralSection.css';

export default function GeneralSection(props) {
    const sectionClases = ["section"];
    if (props.section === "servicos") {
        sectionClases.push("sevicios-section");
    }
        return (
        <section id={props.section + "-section"}  className={sectionClases.join(" ")}> 
            <div className="wraper-section">
                <div className="mini-header">
                    <h5><span>{props.minititle}</span></h5>
                </div>
                <div className="section-header">
                    <h2>{props.title}</h2>
                </div>
               {
                   props.children
               }
            </div>
        </section>
    )
}
