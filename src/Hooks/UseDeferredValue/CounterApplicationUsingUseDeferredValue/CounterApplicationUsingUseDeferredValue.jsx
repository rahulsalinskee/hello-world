import React, { useState, useDeferredValue, useEffect } from 'react';

export default function CounterApplicationUsingUseDeferredValue() {
    const [count, setCount] = useState(0);
    const deferredCount = useDeferredValue(count);

    useEffect(() => {
        console.log(`Count: ${count} \nDeferred Count: ${deferredCount}`);
    })

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '2rem', padding: '3rem', color: 'deeppink', backgroundColor: 'pink', width: '50rem' }}>
                <h2>Counter Application Using Use Deferred Value</h2>
                <div style={{ backgroundColor: '#f0a0f0', paddingLeft: '1rem', paddingRight: '1rem', width: '5rem' }}><h3>Count: {count}</h3></div>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
            </div>
        </>
    )
}
