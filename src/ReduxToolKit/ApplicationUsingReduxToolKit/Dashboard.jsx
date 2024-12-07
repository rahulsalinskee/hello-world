import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const navigateTo = useNavigate();
    const productPagePath = './products';
    // const productPagePath = '/redux-tool-kit-page/redux-tool-kit-product-dashboard/products';
    return (
        <>
            <div>
                <h2>Dashboard Page</h2>
                {/* <NavLink to='products/'></NavLink> */}
                <button onClick={() => navigateTo(productPagePath)}>Product</button>
            </div>
        </>
    )
}
