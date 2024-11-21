import React from 'react';
import ComponentData from './ComponentDataWithoutLazyLoading';
import '../../CSS/ComponentWithoutLazyLoader.css';
import { useNavigate } from 'react-router-dom';

export default function ComponentWithoutLazyLoader() {
    const navigateTo = useNavigate();

    function GoBackButtonClick() {
        navigateTo(-1);
    }
    return (
        <>
            <div className='component-data-without-lazy-loader-container'>
                <button onClick={GoBackButtonClick}>Go Back</button>
                <h2>Component Data Without Lazy Loading</h2>
                <ComponentData />
            </div>
        </>
    )
}