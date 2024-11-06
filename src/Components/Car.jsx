import React from 'react';

export function Car(props) {
    return (
        <div>
            /* *****
            * Case 1:
            * In App.js, <h1></h1> is implemented and here, ={">"} <h6></h6> Car function tag is implemented. In final result <h6></h6> will be rendered.

            * Case 2:
            * In App.js, <h6></h6> is implemented and here, ={">"} <h1></h1> Car function tag is implemented. In final result <h6></h6> will be rendered.
            ***** */
            <h6>{props.name}</h6>
        </div>
    );
}