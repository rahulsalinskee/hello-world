import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {

    const navigateTo = useNavigate();
    const productPagePath = '/product';

    function LoadProductPageButtonClickHandler(event) {
        event.preventDefault();
        navigateTo(productPagePath);
    }
    return (
        <>
            <div>
                <h3>This is Cart Page!</h3>
                <button onClick={LoadProductPageButtonClickHandler}>Product Page</button>
            </div>
        </>
    )
}
