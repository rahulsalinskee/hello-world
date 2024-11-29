import React from 'react'
import UseCounter from '../CustomCounterHook/UseCounter'

export default function CounterComponent() {
    /* *****
     * Here, 10 is the initial value and 2 is the step (How much the current value will be incremented with).
     ***** */
    const { count, Increment, Decrement } = UseCounter(10, 2);
    return (
        <>
            <div>
                <h3>Counter Component</h3>
                <p>Count: {count}</p>
                <button onClick={Increment}>Increment</button>
                <button onClick={Decrement}>Decrement</button>
            </div>
        </>
    )
}
