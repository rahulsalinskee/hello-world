import React from 'react';
import "../../CSS/Card.css";

export function CardComponent(props) {
    return (
        <>
            <div className="card">
                <img src={props.img} alt="Waterfall" />
                <h3>Nature {props.title} Image</h3>
            </div>
        </>
    )
}