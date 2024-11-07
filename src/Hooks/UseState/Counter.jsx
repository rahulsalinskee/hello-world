import React, { useState } from 'react';
import '../../CSS/Counter.css';

export function Counter() {
    const [count, setCount] = useState(0);

    function Increment() {
        setCount(count + 1);
    }

    function Reset() {
        setCount(0);
    }

    function Decrement() {
        if (count !== 0) {
            setCount(count - 1);
        }
    }

    return (
        <>
            <div className="box">
                <h3>Counter Value: {count}</h3>
                <button onClick={Decrement}>Decrement</button>
                <button onClick={Reset}>Reset</button>
                <button onClick={Increment}>Increment</button>
            </div>
        </>
    );
}
