import React from 'react';
import Email from './Email';

export default function UseIdApplication() {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '2rem', padding: '3rem', color: 'deeppink', backgroundColor: 'pink', width: '50rem' }}>
                <div>UseIdApplication</div>
                <Email />
                <br />
                <article>
                    useId is a Hook, so you can only call it at the top level of your component or your own Hooks.
                    You can’t call it inside loops or conditions.
                    If you need that, extract a new component and move the state into it.
                    useId should not be used to generate keys in a list. Keys should be generated from your data.
                </article>
                <br />
                <Email />
            </div>
        </>
    )
}
