import React from 'react';
import ComponentDataWithLazyLoading from './ComponentDataWithLazyLoading';
import '../../CSS/ComponentWithLazyLoading.css';
import { useNavigate } from 'react-router-dom';

export default function ComponentWithLazyLoader() {
    const navigateTo = useNavigate();

    function BackButtonOnClickEventHandler() {
        navigateTo(-1);
    }

    return (
        <>
            <div className='component-data-with-lazy-loader-container'>
                <button onClick={BackButtonOnClickEventHandler}>Go Back</button>
                <h2>Component Lazy Loader</h2>
                <ComponentDataWithLazyLoading />
            </div>
        </>
    )
}