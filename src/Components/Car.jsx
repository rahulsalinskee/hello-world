import React from 'react';
import "../CSS/Car.css";
import image from "../Images/4.jpg";

export function Car(props) {
    return (
        <>
            <div className="box">
                {/* /* *****
            /* Case 1:
            /* In App.js, <h1></h1> is implemented and here, ={">"} <h6></h6> Car function tag is implemented. In final result <h6></h6> will be rendered.

            /* Case 2:
            /* In App.js, <h6></h6> is implemented and here, ={">"} <h1></h1> Car function tag is implemented. In final result <h6></h6> will be rendered.
            ***** */}
                <h6 contentEditable="true">{props.name}</h6>
            </div>
        </>
    );
}

export function ShowImages() {
    return (
        <>
            <div className="images">
                <img src={image} alt="Image" />
                <img src={require("../Images/6.jpeg")} alt="Image" />
            </div>
        </>
    );
}