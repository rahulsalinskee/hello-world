import React, { useEffect, useState } from 'react';
import '../../CSS/CounterUseEffect.css';

export function CounterUseEffect() {
    const [count, setCount] = useState(0);
    const [reset, setReset] = useState(0);
    const [decrement, setDecrement] = useState(0);

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

    /* ***** 
     * Use Effect - Whenever our component is rendered, this function will run
     * - It always run whenever we update something because it reloads the component
     * - The moment component gets reloaded, it runs useEffect
     * - It takes 2 parameters - 
     * 1. Parameter: Callback function 
     * 2. Parameter: Array 
     * 2A. When Empty array (Array dependency) is passed: Then component get rendered for first time when it is loaded. After that it will not get rendered.
     * 2B. For any state (data) we want to run useEffect: Array dependency is passed within square bracket. That means, only when the value of the passed data in square bracket will change, useEffect will run.
     ***** */
    useEffect(() => {
        console.log('Running Use Effect!');
    }, [count]);

    return (
        <>
            <div className='container'>
                <h2>Counter Application</h2>
                <button name="Increment" className="increment" onClick={Increment}>+</button>
                <button name="Reset" className="reset" onClick={Reset}>Reset</button>
                <button name="Decrement" className="decrement" onClick={Decrement}>-</button>
                <label className="display-count">Count: {count}</label>
            </div>
        </>
    )
}