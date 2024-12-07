import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

export default function ReduxToolKitPage() {
    const navigateTo = useNavigate();
    const homePagePath = '/home';
    const productPagePath = '/redux-tool-kit-page/redux-tool-kit-product-dashboard/products';

    function HomeButtonOnClickEventHandler(event) {
        event.preventDefault();
        navigateTo(homePagePath);
    }

    function ProductButtonOnClickEventHandler(event) {
        event.preventDefault();
        navigateTo(productPagePath);
    }

    return (
        <>
            <div style={{ gap: '1rem' }}>
                <h3>Redux Tool Kit Page!</h3>
                <br />
                <button onClick={HomeButtonOnClickEventHandler}>Home</button>
                <button onClick={ProductButtonOnClickEventHandler}>Go to Products</button>
            </div>
            {/* <NavLink to='redux-tool-kit-product-dashboard'>Redux ToolKit Product Dashboard</NavLink> */}
            <NavLink to='redux-tool-kit-product-dashboard'>Redux ToolKit Product Dashboard</NavLink>
            <Outlet />
        </>
    )
}
