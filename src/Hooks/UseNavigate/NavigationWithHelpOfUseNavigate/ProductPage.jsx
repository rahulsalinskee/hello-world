import React from 'react';
import { useNavigate } from 'react-router-dom';

export function ProductPage() {
    const navigateTo = useNavigate();
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

    return (
        <>
            <div>
                <h3>This is Product Page!</h3>
                <button onClick={LoadCartPageButtonClickHandler}>Cart</button>
                <button onClick={LoadHomePageButtonClickHandler}>Home</button>
            </div>
        </>
    )
}