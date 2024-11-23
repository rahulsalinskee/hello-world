import React, { useState, useRef, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UseLayoutEffectApplication() {
    const navigateTo = useNavigate();
    const [width, setWidth] = useState(0);
    const [elementColor, setElementColor] = useState('');
    const elementReference = useRef(null);
    console.log(elementReference);

    function BackButtonOnClickEventHandler() {
        navigateTo(-1);
    }

    useLayoutEffect(() => {
        if (elementReference.current) {
            setWidth(elementReference.current.getBoundingClientRect().width);
            setElementColor(elementReference.current.style.background);
        }
    }, []);

    return (
        <>
            <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', padding: '20px' }}>
                <div>Use Layout Effect Application - Width Measurement Example</div>
                <button style={{ background: 'green' }} ref={elementReference} onClick={BackButtonOnClickEventHandler}>Go Back</button>
                <div style={{ background: 'lightblue', margin: 'auto', width: '270px' }}>Element Whose Width Is Measured</div>
                <p>Width: {width} px</p>
                <p>Element Color: {elementColor}</p>
            </div>
        </>
    )
}
