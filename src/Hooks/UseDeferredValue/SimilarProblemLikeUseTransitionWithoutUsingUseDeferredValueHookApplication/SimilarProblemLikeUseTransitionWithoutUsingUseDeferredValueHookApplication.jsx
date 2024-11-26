import React, { useState } from 'react'
import List from './List';

export default function SimilarProblemLikeUseTransitionWithoutUsingUseDeferredValueHookApplication() {
    const [input, setInput] = useState('');

    function InputOnChangeEventHandler(event) {
        event.preventDefault();
        setInput(event.target.value);
    }
    return (
        <>
            <div style={{ backgroundColor: 'lightgreen', margin: '1rem', padding: '2rem', width: '75rem', color: 'green', fontSize: '20px' }}>
                <h3>Without Using Use Deferred Value Application</h3>
                <p>Similar Problem Like Use Transition Without Using Use Deferred Value Hook Application</p>
                <input type='text' value={input} onChange={InputOnChangeEventHandler} />
                <List input={input} />
            </div>
        </>
    )
}
