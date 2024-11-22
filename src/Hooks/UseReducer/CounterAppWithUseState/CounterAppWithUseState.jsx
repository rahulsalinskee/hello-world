import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function CounterAppWithUseState() {
    const navigateTo = useNavigate();
    const [count, setCount] = useState(0);


    function BackButtonOnClickEventHandler(event) {
        event.preventDefault();
        navigateTo(-1);
    }

    function IncrementButtonOnClickEventHandler(event) {
        event.preventDefault();
        setCount(previousData => previousData + 1);
    }

    function ResetButtonOnClickEventHandler(event) {
        event.preventDefault();
        setCount(0);
    }

    function DecrementButtonOnClickEventHandler(event) {
        event.preventDefault();
        if (count >= 1) {
            setCount(previousData => previousData - 1);
        }
    }

    return (
        <>
            <h1>Counter App with useState Hook</h1>
            <h3>Current Count: {count}</h3>
            <button onClick={IncrementButtonOnClickEventHandler}>Increment</button>
            <button onClick={ResetButtonOnClickEventHandler}>Reset</button>
            <button onClick={DecrementButtonOnClickEventHandler}>Decrement</button>
            <button onClick={BackButtonOnClickEventHandler}>Go Back</button>
        </>
    )
}