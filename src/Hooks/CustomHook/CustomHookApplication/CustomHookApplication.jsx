import React from 'react'
import CounterComponent from '../CounterComponent/CounterComponent'

export default function CustomHookApplication() {
    return (
        <>
            <div style={{ backgroundColor: 'teal', height: '40rem', color: 'lightseagreen', justifyContent: 'center', padding: '1rem', marginTop: '1rem' }}>
                <h3>Custom Hook Application</h3>
                <CounterComponent />
            </div>
        </>
    )
}
