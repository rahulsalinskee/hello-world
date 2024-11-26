import React, { useState } from 'react';
import List from './List';

export default function SimilarProblemSolutionLikeUseTransitionUsingUseDeferredValueHookApplication() {
    const [input, setInput] = useState('');

    function InputOnChangeEventHandler(event) {
        event.preventDefault();
        setInput(event.target.value);
    }
    return (
        <>
            <div style={{ color: 'blue', fontSize: '20px', backgroundColor: 'lightblue', margin: '1rem', padding: '2rem', width: '75rem' }}>
                <h3>Use Deferred Value Application</h3>
                <p>Similar Problem Solution Like Use Transition Using Use Deferred Value Hook Application</p>

                <input type='text' value={input} onChange={InputOnChangeEventHandler} />
                <List input={input} />
            </div>
        </>
    )
}
