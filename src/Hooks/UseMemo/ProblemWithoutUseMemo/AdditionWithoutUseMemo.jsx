import React, { useState } from "react";
import '../../../CSS/Addition.css';

export function AdditionWithoutUseMemo() {
    const [increment, setIncrement] = useState(0);
    const [state, setState] = useState(false);

    function IncrementButtonClick(event) {
        setIncrement(increment + 1);
    }

    function Count(add) {
        console.log('Function Calling', add);
        for (let i = 0; i < 1000000000; i++) {
            /* Just to create a fake delay */
        }
        return add;
    }

    /* ***** 
    * Problem with this code is when we click on this (Please Click)) button, 
    * Count function is also getting called. 
    * Here, there is no connection between both of these two buttons but even on the click on button (Please Click)
    * It is executing Count function. 
    * It is happening because of useState hook. 
    * What is happening here: When we click on (Please Click) button, we are updating UseState (state, setState) hook
    * Whenever we update sueState hook, it rerenders/refresh our component and then executes our entire code
    * Hence, here, when our state gets updated, our component rerenders. That means that our Count function will also get called & rerendered.
    * Even though there is no change in incremented value, Count function will be called again.
    * This is causing performance issue.
    * ***** */
    function StateButtonClick() {
        setState(!state);
    }

    let number = Count(increment);

    return (
        <>
            <div className="control-container">
                <h3>Current Value: {number}</h3>
                <button onClick={IncrementButtonClick}>Start Increment</button>
                <button onClick={StateButtonClick}>Please Click!</button>
                <h3>State Value: {!state ? "You Clicked" : "Please Click Again"}</h3>
            </div>
        </>
    )
}