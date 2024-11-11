import React, { useState, useMemo } from "react";
import '../../../CSS/Addition.css';

export function AdditionWithUseMemo() {
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

    function StateButtonClick() {
        setState(!state);
    }

    let number = useMemo(() => {
        return Count(increment);
    }, [increment])


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