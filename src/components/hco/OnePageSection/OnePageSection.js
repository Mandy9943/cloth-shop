import React from 'react';
import "./OnePageSection.css";

export default function OnePageSection(props) {
    return (
        <div className="OnePageSection">
            {props.children}
        </div>
    )
}
