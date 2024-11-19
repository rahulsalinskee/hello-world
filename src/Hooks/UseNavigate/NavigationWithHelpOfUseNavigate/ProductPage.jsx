import React from 'react';
/* ***** 1. Use Location Hook */
import { useNavigate, useLocation } from 'react-router-dom';

export function ProductPage() {
    const navigateTo = useNavigate();
    /* ***** 2. Use Location Hook:  Use Location Hook to get the current location ***** */
    const location = useLocation();
    const cartPagePath = '/cart';
    const homePagePath = '/home';

    function LoadCartPageButtonClickHandler(event) {
        event.preventDefault();
        navigateTo(cartPagePath);
    }

    function LoadHomePageButtonClickHandler(event) {
        event.preventDefault();
        navigateTo(homePagePath);
    }

    function LoadBackPageButtonClickHandler() {
        navigateTo(-1);
    }

    return (
        <>
            <div>
                <h3>This is Product Page!</h3>
                <button onClick={LoadCartPageButtonClickHandler}>Cart</button>
                <button onClick={LoadHomePageButtonClickHandler}>Home</button>
                <button onClick={LoadBackPageButtonClickHandler}>Go Back!</button>
                {/* 3. Use Location Hook: Show the current location path with help of pathname property */}
                <h3>Current Location: {location.pathname}</h3>
            </div>
        </>
    )
}