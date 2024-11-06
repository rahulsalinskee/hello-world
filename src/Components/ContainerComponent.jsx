import React from 'react';
import { Car, ShowImages } from "../Components/Car";
import { Header } from "../Components/HeaderComponent";
import DisplayHello from "../TrailJSX/Hello";
import { Voter } from './Voter';

function PrintName(name) {
    return (
        <div>
            {name}
        </div>
    );
}

export function ContainerComponent() {
    return (
        /* ***** Instead of using div tag here, use React.Fragment or empty tag as it consumes less memory than div tag ***** */
        <div>
            <h1>Hello World</h1>
            <DisplayHello />
            <h4>{PrintName("Rahul!")}</h4>
            <h3>
                <Header />
            </h3>

            {/* /* *****
            /* Case 1:
            /* Here, h1 tag is implemented and in Car.jsx ={">"} h6 tag Car function tag is implemented. In final result <h6></h6> will be rendered.

            /* Case 2:
            /* Here, <h6></h6> is implemented and in Car.jsx ={">"} <h1></h1> Car function tag is implemented. In final result <h6></h6> will be rendered.
            ***** */}
            <h1>
                <Car name="Nexon" />
                <Car name="Curvv" />

                {/* <ShowImages /> */}
            </h1>

            <div>
                <Voter age={-1} />
            </div>
        </div>
    );
}